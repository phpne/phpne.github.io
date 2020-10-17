---
layout: post
title: "Building Real World FaaS Applications"
date: 2020-05-19
excerpt: "We are pleased to announce the May 2020 event for PHP North East, \"Building Real World FaaS Applications\" by Andrew Seymour"
---
We are pleased to announce the May 2020 event for PHP North East, "Building Real World FaaS Applications" by Andrew Seymour. This is an online event streaming here: https://www.crowdcast.io/e/phpne-may-2020

Look into how to build and scale applications completely from a FaaS perspective – encompassing all parts of the application from assets, logic, databases, caching and so on. Initially, deep dive into the FaaS architecture, particular methodologies and true polyglot systems – and why we opted for this.

Thoughts on building

Building a social network is no easy task, you need to run at scale and that poses many problems. We designed our system from the ground up – and went completely container native for every aspect – we need to handle so many different types of requests from images, videos, text, search and so on. We’ll look at things like, the protocols we use to handle large file uploads in a stateless system and eventual consistency so we don’t delay the user.

What build tools do we use?

Each function gets an image, and is built before deployment. Our pipelines that run on GitHub Actions which build our entire cluster using k3d, allows us to do “prod like” testing, as in, we can test our ingress rules to make sure they work before we go and deploy them – for every commit, we test all functions – so let’s discuss the trap of falling into building a monolith.

Our Challenges

Optimising PHP to run faster from a FaaS perspective by using the asynchronous properties of Go allowing the multi-threading of PHP code, the headaches of routing with Nginx ingress’s and the complications of middleware or global distribution.

What comes next?

Solving these problems for future projects and for everyone else through the use of Qernal (https://qernal.com), we’ll take a look at the solutions we’re going to be solving and the intent to open this platform for everyone to rapidly build global solutions while all infrastructure is abstracted - run any code, anywhere, as many copies.

About Andrew Seymour;

Andrew has been in DevOps for almost 11 years now with a recent move into DevSecOps within the financial industry, and has been a software engineer for almost 15 years. He’s been working with serverless and FaaS architectures for many years now and is sharing the knowledge gained to clients build FaaS solutions.