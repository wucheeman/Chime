


<div align="center">
    <img src="public/images/bell.svg" alt="bell icon" width="100px" align="center"/>
</div>

---
# Chime!

## What the project does
Chime is a project that leverages the Twilio API to provide a text broadcasting service for companies and organizations to reach interested followers. It is a team project built for the February 2018 UNC Coding Boot Camp.

## How to get started with the app
For a certain period, you will be able to use Chime online at Heroku at https://glacial-retreat-79046.herokuapp.com/ . Note that Chime depends on the Twilio API, and when our team's trial API expires, the Heroku version will no longer send out texts. The remainder of the functionality described below will continue to work.

To use Chime for the moment, you will need to use one of the pre-populated users or organizations. A longer-term plan is to add a sign-up form where you could get an account if you wish.

When you bring up the app, it will give you a login page. Click on the blue button and select whether you are a user or organization. Start by selecting 'user'. Enter 'matt' and press 'login'. You will be taken to matt's homepage.

On the user homepage, click 'browse'. This will take you to the list of organizations that are using Chime. Click on the subscribe button below 'Trader Pete's Code Emporium', and note the button turns blue. Click on the 'Home' link to go back to matt's homepage.

In a new tab, navigate to the login page. Click on the blue button and select 'organization'. Enter 'trader' and press 'login'. You will be taken to trader's homepage. Enter a text, and you will see it appear on trader's page. Go back to matt's tab, and you'll see that it's there as well. The text will also go out via an interface to Twilio, and it will appear on matt's phone as a new text.

Chime will send texts to multiple users, of course. To verify, log in on a third tab as the user 'steve'. Subscribe to Trader Pete's Code Emporium again. In the trader tab, send a second text. You'll see it appear in both matt and steve's tabs, and it will appear on both their phones as a new text.

## Authors
Chime is being built by the team listed below, along with each person's responsibilities:

- Matt Buchanan -  business logic and routing; MySQL
- Steve Yurchuck - Twilio API
- Mark Hainline -  MYSQL and Twilio API
- Neeni Nagaraj -  Front end
