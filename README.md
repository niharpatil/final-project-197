This sample application demonstrates one potential directory structure for the CIS 197 Javascript course.

In order to run this application, you'll need to download [Mysql (community edition)](https://www.mysql.com/products/community/). Then, in `db/dbconnect.js`, you'll need to change the value `Abcd1234` to whatever the password of your database is.

In order to run this application, first install all dependencies via `npm install` and then run `npm start`. This command (as you can see in `package.json`) will first run `webpack` to transpile all ES6 & React code to ES2015 and then start running a node server on port 3000.

Then, to play around with the application, go to http://localhost:3000.
