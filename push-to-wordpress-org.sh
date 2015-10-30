#!/bin/bash

FILE='wordlift/wordlift.php'
README='trunk/readme.txt'

echo "Checking out and updating the svn branch..."
git checkout -b svn >/dev/null 2>&1
git pull origin svn >/dev/null 2>&1
echo "Removing make-zip.sh..."
rm -fr make-zip.sh
echo "Updating the svn branch..."
svn up
echo "Checking make-zip.sh from master branch..."
git checkout master -- make-zip.sh
echo "Remove dist and wordlift folders..."
rm -fr dist wordlift
echo "Making wordlift.zip..."
./make-zip.sh master > /dev/null
echo "Unzipping to wordlift/..."
unzip dist/wordlift-*.zip > /dev/null
echo "Remove dist folder..."
rm -fr dist

VERSION=`egrep -o "Version:\s+\d+\.\d+\.\d+" $FILE | egrep -o "\d+\.\d+\.\d+"`

echo $VERSION

if [[ -z "$VERSION" ]]; then
	echo "Version not set, halting."
else
	echo "Removing tag $VERSION..."
	svn rm --force tags/$VERSION > /dev/null
	echo "Removing trunk..."
	svn rm --force trunk > /dev/null

	echo "If you see 'forbidden by the server', you need to authenticate to the server first."
	svn ci -m "$VERSION: updating trunk (1 of 2)"
	mv wordlift trunk
	echo "Setting the stable tag in $README..."
	sed -i '' "s/Stable tag: .*/Stable tag: $VERSION/g" $README
	svn add trunk > /dev/null
	svn cp trunk tags/$VERSION > /dev/null

	echo "If you see 'forbidden by the server', you need to authenticate to the server first."
	svn ci -m "$VERSION: updating trunk (2 of 2)"

	git add -A
	git commit -m "bump to $VERSION" -a
	git push origin svn
fi