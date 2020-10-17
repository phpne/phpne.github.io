---
layout: post
title: "Immutable infrastructure with Packer, Ansible and Terraform"
date: 2020-08-18
excerpt: "We are pleased to announce the August 2020 event for PHP North East, \"Immutable infrastructure with Packer, Ansible and Terraform\" by Michael Peacock"
---
We are pleased to announce the August 2020 event for PHP North East, "Immutable infrastructure with Packer, Ansible and Terraform" by Michael Peacock. This is an online event streaming here: https://youtu.be/7qEJK2SNNrs

With immutable infrastructure we can be confident that our production servers are configured the same, and if we have an issue with a machine we can tear it down and re-create it. Ansible lets us configure and provision a virtual machine, which we can then convert to an image with Packer. That image then becomes the deployment for our application, and if we use something like Terraform to deploy those resources, then we can automate the whole process and have confidence in the servers we are running.

This is also a great approach to legacy applications. I have inherited a legacy server which lacks reliable documentation, has a myriad of server and software dependencies, and more configuration files (that need regular tweaking) than you can shake a stick at. I've used this approach to create a reliable replica of that infrastructure which can be configured and updated in a reliable and reproducible way.

Michael is a consultant CTO focused on helping software-as-a-service companies to build products and teams. He is the technical director of packagedby, a consultancy specialising in the complete end-to-end build, maintenance and support of SaaS products.

Thank you to our sponsors: Ronald James Recruitment, Opia and iamproperty who make our events possible.