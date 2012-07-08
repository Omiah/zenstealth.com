#!/bin/bash
# Generate static files via Jekyll
jekyll --no-auto
# Transfers modified files to NFSN
rsync -avzh --delete _site/ nfsn-zen:/home/public