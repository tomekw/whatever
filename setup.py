"""This is how you setup whatever"""
from __future__ import print_function
import subprocess
import time
import sys

print("\rSetting Up Whatever")


def loop():
    setup = False
    percent = 0
    while not setup:
        percent += 0.001
        print("\r", end="")
        print("#"*int(percent), end="")
        sys.stdout.flush()
        if percent > 100:
            setup = True
            print("")
            print("Set up!")

if __name__ == "__main__":
    loop()
