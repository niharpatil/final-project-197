This sample application demonstrates one potential directory structure for the CIS 197 Javascript course.

I encourage you to read through and play around with the code in this application. It will be extremely useful in structuring your final projects.

In order to run this application, you'll need to download [MySQL (community edition)](https://www.mysql.com/products/community/). Then, in `db/dbconnect.js`, you'll need to change the value `Abcd1234` to whatever the password of your mysql software is. Once you've installed MySQL, then run the following commands in your terminal (or command-prompt/git-bash for windows users):

- `mysql -u root -p` (and then enter your password)
- `create database test197`

In order to run this application, first install all dependencies via `npm install` and then run `npm start`. This command (as you can see in `package.json`) will first run `webpack` to transpile all ES6 & React code to ES2015 and then start running a node server on port 3000.

Then, to play around with the application, go to http://localhost:3000.

Note a few things. There is a file called `.gitignore` that wasn't covered in class. This file includes the names of directories and files that you don't want to push to github, or that you don't want git to track. Most importantly, `node_modules` is in the `.gitignore` file. This is because this directory can be recreated by anyone who downloads your repository by simply running `npm install` (which reads from `package.json`).
