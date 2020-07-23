#!/bin/sh

# Instantly exists our script whenever an error occurs
set -e

# Pipe our environmental SSH key variable into a file
mkdir -p $HOME/.ssh
echo "${deploy_key}" > $HOME/.ssh/deploy_key
chmod 600 $HOME/.ssh/deploy_key # SSH keys need to be readonly

# Where to deploy our site on our server
target="~/html"

# The actual rsync
sh -c "rsync -azh -e 'ssh -i $HOME/.ssh/deploy_key -o StrictHostKeyChecking=no' public/* --rsync-path='mkdir -p ${target} && rsync' root@smestad.xyz:${target}"

# Remove our deploy_key again since it's no longer needed
rm $HOME/.ssh/deploy_key