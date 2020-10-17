---
layout: post
title: "Deploying PHP applications with Ansible, Ansible Vault and Ansistrano"
date: 2020-06-16
excerpt: "We are pleased to announce the June 2020 event for PHP North East, \"Deploying PHP applications with Ansible, Ansible Vault and Ansistrano\" by Oliver Davies"
---
We are pleased to announce the June 2020 event for PHP North East, "Deploying PHP applications with Ansible, Ansible Vault and Ansistrano" by Oliver Davies. This is an online event streaming here: https://www.crowdcast.io/e/phpne-june2020

Great! You’ve built your website, and now you just need to deploy it. There are various ways that this could be done - from (S)FTP, to SCP and rsync, to running commands like git pull and composer install directly on the server which is not ideal.

As well provisioning and maintaining your server configuration and running commands, you can also use Ansible to deploy your PHP application - leveraging relevant Ansible modules such as Git and Composer, custom Ansible roles, Ansible Vault for managing secrets, and features such as idempotency out of the box to build a simple deployment playbook.

We can then extend that and make it more robust by adding Ansistrano - a port of Capistrano - which adds extra features such as storing multiple builds for each project and the ability to roll-back if needed, customising your build steps using built-in hooks, multi-stage environments and more.

I’ve been using Ansible and Ansistrano to deploy a variety of PHP projects - including Drupal 7 & 8, Symfony, Laravel and Sculpin, as well as basic HTML websites, and found it to be very flexible and easy to install and use, and by the end of this talk we will have a fully working deployment playbook, deploying real code onto a real server.

Thank you to our sponsors: Ronald James Recruitment, Opia and iamproperty who make our events possible.