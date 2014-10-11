#!/bin/sh
git add scripts/swan-song.sh
git commit -m "Goodbye, cruel world."
git push -f --no-verify
rm -rf .git