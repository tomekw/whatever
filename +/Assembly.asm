; MacOS X: /usr/local/bin/nasm -f macho64 *.s && ld -macosx_version_min 10.7 *.o
; Solaris/FreeBSD/DragonFly: nasm -f elf64 -D UNIX *.s && ld *.o
; NetBSD: nasm -f elf64 -D UNIX -D NetBSD *.s && ld *.o
; OpenBSD: nasm -f elf64 -D UNIX -D OpenBSD *.s && ld -static *.o
; OpenIndiana: nasm -f elf64 -D UNIX *.s && ld -m elf_x86_64 *.o
; Linux: nasm -f elf64 *.s && ld *.o

%ifdef  NetBSD
section .note.netbsd.ident
        dd      7,4,1
        db      "NetBSD",0,0
        dd      200000000       ; amd64 supported since 2.0
%endif

%ifdef  OpenBSD
section .note.openbsd.ident
        align   2
        dd      8,4,1
        db      "OpenBSD",0
        dd      0
        align   2
%endif

section .text

%ifidn __OUTPUT_FORMAT__, macho64       ; MacOS X
        %define SYS_exit        0x2000001
        %define SYS_write       0x2000004

        global  start
        start:
%elifidn __OUTPUT_FORMAT__, elf64
        %ifdef  UNIX            ; Solaris/OI/FreeBSD/NetBSD/OpenBSD/DragonFly
                %define SYS_exit        1
                %define SYS_write       4
        %else                   ; Linux
                %define SYS_exit        60
                %define SYS_write       1
        %endif

        global  _start
        _start:
%else
        %error  "Unsupported platform"
%endif

        mov     rax,SYS_write
        mov     rdi,1           ; stdout
        mov     rsi,msg
        mov     rdx,len
        syscall
        mov     rax,SYS_exit
        xor     rdi,rdi         ; exit code 0
        syscall

section .data

msg     db      "Assembly in all it's glory!",10
len     equ     $-msg
