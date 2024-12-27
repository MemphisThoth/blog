---
layout: "layouts/post.html"
title: How I Created this Website
tags: blog
description: Web Developement
date: "2024-12-27"
---

# How I Created this Webiste.

I made this website with the [11ty](https://11ty.dev) static site generator. It is simple to learn if you follow the documentation and tutorial blogs. It is all based on JavaScript using node.js. 

I first started by initializin git. I then started a package.json file. I added the 11ty packages. I modified the package.json file by adding the scripts to build and serve the development environment to demonstrate my work. 

Later, I created the layout templates as html files with the liquid template syntax. I divided the header and footer markup into thier own files so I didn't have to repeat the markup multiple times. 

I then made some dummy posts to tet that it worked. On the home page, I made it loop through the collection of blog posts, and then displayed them as a list.

Once the site was functioning correctly, I used [PostCSS](https://postcss.org) to style the website. PostCSS has some awesome plugins to manipulate css files. I specifically used postcss-import and postcss-preset-env. They concatenated my css files and future proofed them for things like nested styles.

After making the website responsive, and looking good, I pushed it to github and setup a Netlify account to host it.