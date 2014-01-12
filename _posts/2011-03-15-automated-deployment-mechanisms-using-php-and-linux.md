---
layout: post
title: Automated Deployment Mechanisms using PHP and Linux
date: 2011-03-15
---

The second PHP North East community meeting, taking place in the Cinema Room in the basement of The Town Wall public house.  The meeting is free and open to all - so feel free to come along and see what the group is all about.  For more information about PHP North-East, feel free to join our [Google Group][1].

As well as friendly chat with fellow PHP enthusiasts and some rumoured nibbles courtesy of that nice chap, [Anthony Sterling][2], this months event features the following talk:

**Automated Deployment Mechanisms using PHP and Linux** - [Michael Peacock][3]

With web applications and websites for even relatively small projects making use of more complex features, requiring regular releases, or early access to clients - automated deployment is no longer just a requirement for the big agencies or large scale sites.  For the small agencies and the boot-strapped start up there is an ever increasing need to have a robust deployment pipeline in place for development, staging, production and for frequent releases.
 
With a number of systems available, mostly focusing on larger deployments, requiring powerful servers themselves to run, and a growing number of aspects to be considered for deployment, there isn't anything small and flexible for the smaller agency or project.

This talk will look at some of the approaches required to create a simple, flexible PHP based deployment system, taking into account:

- Multiple projects
- Deployment on different physical servers
- Version control based code; locking production deployment to signed off versions, development environments working off the bleeding edge, and staging areas working off versions on-demand.
- Database structure changes integrating a patch based approach
- Unit testing results, rejecting a production deployment if it fails, and saving reports
- User contributed files
- Development, staging, and production configuration options

These techniques allow code to be deployed to a number of different environments, at the click of a button through a web based interface.

[1]: http://groups.google.com/group/php-north-east
[2]: http://twitter.com/anthonysterling
[3]: http://twitter.com/michaelpeacock
