#include <stdio.h>
#include <stdlib.h>
#include <getopt.h>

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

  /* TODO: more stuff */

  return 0;
}

void print_help()
{
  puts("Usage: program [OPTION]\n"
       "\n"
       "Options:\n"
       "  -h    --help          Print this very useful help message");
}
