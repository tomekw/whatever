CFLAGS=-Wall -Wextra -pedantic -g
LDFLAGS=-lm
CC=gcc -std=gnu99
OBJ=main.o
NAME=program

all: $(OBJ)
	$(CC) -o $(NAME) $^ $(LDFLAGS)

main.o: main.c
	$(CC) -c $(CFLAGS) $^

clean:
	rm -f $(NAME) $(OBJ)
