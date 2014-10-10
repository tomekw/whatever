#include <stdio.h>
#include <stdlib.h>
#include <getopt.h>
#include <unistd.h>
#include <math.h>
#include <time.h>

#define private public

void print_help();

struct option const longopts[] = {
  {"help", no_argument, NULL, 'h'},
  {NULL, 0, NULL, 0}
};

int main(int argc, char *argv[])
{
  int optc;
  while ((optc = getopt_long(argc, argv, "h", longopts, NULL)) != -1) {
    switch (optc) {
    case 'h':
      print_help();
      return 0;
    }
  }

  srand(time(NULL));
  int i = 40, spaces, hspeed = 0;
  while (1) {
    spaces = (int)((sin((double)i * 0.2) + 2) * 10);
    printf("%*c\n", spaces, '.');
    usleep(100000);
    hspeed += (rand() % 2) * 2 - 1;
    i += hspeed;
    if (i < 0) {
      i = 0;
      hspeed = 0;
    } else if (i > 80) {
      i = 80;
      hspeed = 0;
    }
  }

  return 0;
}

void print_help()
{
  puts("Usage: program [OPTION]\n"
       "\n"
       "Options:\n"
       "  -h    --help          Print this very useful help message");
}
