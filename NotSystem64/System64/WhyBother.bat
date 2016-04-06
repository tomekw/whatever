rem Wuts a title
Title Why Bother?
:WhyBother
SET /P WutIP=WHATS YOUR IP BRUH? 
echo.
echo %WutIP%
echo OK BRUH
goto FukyoIP

:FukyoIP
ping -t -w 1 -l 64 %WutIP%

