---
layout: default
title: Demos
order: 2
---

# Demos

These demos show various iterations of prototypes etc.

## k5 (mocked backend)

[demo](/demos/k5)

Example of a full-fledged Dashboard for various admin (or even end-user) 
use cases. The "frontend" can run on another server, as shown in this 
demo in which:

- The KARL-specific frontend is running on 
``karlproject.github.io``

- The underlying JS/CSS comes from a CDN

- The data is served over a REST API from a Pyramid application

In this demo, the data is served in-browser. A later demo points at an 
actual Pyramid server.