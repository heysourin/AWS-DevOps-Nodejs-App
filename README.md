# AWS-DevOps-Nodejs-App

## AWS CodeBuild
Problems I faced was: 
  1. node.js version issue --> fixed it on the buildspec file.
  2. Build stage was running infinitely, as in my 'package.json' file I set 'build' to run the server. --> I set 'run' to run the server 
