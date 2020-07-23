#!/bin/sh
set -e

mkdir -p $HOME/.ssh
echo "${deploy_key}" > $HOME/.ssh/deploy_key
chmod 600 $HOME/.ssh/deploy_key # SSH keys need to be readonly

target="/var/www/cabin/"

sh -c "rsync -azh -e 'ssh -i $HOME/.ssh/deploy_key -o StrictHostKeyChecking=no' public/*  && rsync' root@smestad.xyz:${target}"

rm $HOME/.ssh/deploy_key