#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'update page'
git push -f https://github.com/DzordzoMen/witcher-character-sheet.git main:gh-pages
cd -
