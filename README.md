System 3: system-generated and QR tracking code (after election tally)

In order to start the application you need to have node.js installed on your device (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). If you have node.js installed, in your terminal, navigate to the folder where you have saved the source code and run "npm install" (only when starting the application for the first time) and then "npm start". The application opens in your browser on localhost.

System 3 does not start automatically at the login page since we needed to implement a workaround for the QR code functionality to work. (The page has been deployed on GitHub pages, however this caused problems with the React router, so that URLs of subpages cannot be directly accessed. Therefore the default link is the link that opens when the user scans the QR code.)
Therefore, once the application is running, please navigate to "http://localhost:3000/login" to start the user journey.
