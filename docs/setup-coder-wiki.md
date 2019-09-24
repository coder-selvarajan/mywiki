---
id: setup-coder-wiki
title: Coder Wiki Setup
---

> Pre-requisite: You have to be on Node >= 8.x and Yarn >= 1.5.

## Setting up `Coder Wiki` from github

- Download this git repo or clone it by using below command
```
    git clone https://github.com/coder-selvarajan/mywiki.git CoderWiki
```
This will download the repo under `CoderWiki` folder.

- Goto `CoderWiki/website` folder and run `npm install`. This will install all the dependencies.

- Now run below command from `website` folder to start the app in local http server on port 3000
```
    npm run start
```
- You may add/modify the content in the site and push the cahnges to github repo
- If you have right credentials then you may even publish your changes to [coder wiki](https://coder.selvarajan.in) site by using below command

`In Windows:` 
```
    SET GIT_USER=coder-selvarajan 
    SET CURRENT_BRANCH=master 
    npm run publish-gh-pages
```

`In Linux\Mac:` 
```
    GIT_USER=coder-selvarajan \
    CURRENT_BRANCH=master \
    npm run publish-gh-pages
```


---

## Steps to create new docusaurus website

- Create and goto the project folder
- Install docusaurus package with below command
```
    npm install --global docusaurus-init
```
- Goto `website` directory and run `npm start`

> More details on `https://docusaurus.io/docs/en/installation`

