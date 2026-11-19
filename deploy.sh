#!/bin/sh
# Uploads the website and appcast.xml to the server (ssh host "iasaki") at /srv/asaki.
# downloads/ on the server holds the DMGs; it is left alone here (publish_update.py fills it).
set -eu
cd "$(dirname "$0")"
rsync -rlptz --delete \
	--exclude .git --exclude .DS_Store --exclude README.md --exclude deploy.sh --exclude server --exclude downloads \
	./ iasaki:/srv/asaki/
echo "Uploaded the site to iasaki:/srv/asaki."
