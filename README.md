<img src="bell.svg" alt="bell icon" width="100px" align="left"/>
<br>
# Chime!

## What the project does
Chime is a project that leverages the Twilio API to provide a text broadcasting service for companies and organizations to reach interested followers. It is a team project built for the February 2018 UNC Coding Boot Camp. Comments on the app and code will be added here when it is complete.

## How to get started with the app
Eventually you will be able to use Chime online at Heroku or to download and install it locally, but it's not yet ready.

To work locally with the databasem make sure that you have Node.js, MySQL and the dependencies listed in the package.json installed. Run this script in the root directory ($ is the command prompt):

  $ bash ./setupDB.sh (Windows)

OR

  $ ./setupDB.sh (Mac/Linux)

One of its steps starts Node's express server. When it has run, stop the server with 

  $ CTRL-C


## Authors
Chime is being built by the team listed below, along with each person's responsibilities:

- Matt Buchanan - business logic and routing
- Steve Yurchuck - Twilio API
- Mark Hainline - MYSQL/Sequelize/Passport
- Neeni Nagaraj - Front end
