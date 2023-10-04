# About

Get the latest carpark availability in Singapore

- Data is retrieved every minute

You will get a table with the Carpark No, Lot Type, Total Lots, and Lots Available

![main](https://github.com/Iamben0/carpark-webapp/blob/master/pics/main.PNG)

![changing of time stamp](https://github.com/Iamben0/carpark-webapp/blob/master/pics/changeTimestamp.PNG)

![after changes](https://github.com/Iamben0/carpark-webapp/blob/master/pics/afterTimestamp.PNG)

## UPDATE - July 2023:

User able to get another table with Carpark Address, Free Parking and Night Parking

![main_v2](https://github.com/Iamben0/carpark-webapp/blob/master/pics/main_v2.PNG)

## UPDATE - Sep 2023:

User is now able to search via the Carpark Number to find the Lots Available faster

![main_v3](https://github.com/Iamben0/carpark-webapp/blob/master/pics/main_v3.PNG)

![search changes](https://github.com/Iamben0/carpark-webapp/blob/master/pics/searchCarparkNumber.PNG)

## TODO:

- Added the Carpark address that matches with the Carpark No :heavy_check_mark:
- Added a search bar :heavy_check_mark:
 - Look up dynamically to change the Carpark Availability Table - In Progress
 - Look up dynamically to change the Carpark Information Table 

## ~~Getting Started with Create React App~~

~~This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).~~ _Deprecated_

## Dependencies

**Client Folder**
<br/>
`npm i`

**Server Folder**
<br/>
`npm i mongodb@4.1.1`
<br/>
`npm i express`
<br/>
`npm i cors`
<br/>
`npm i dotenv`

### Available Scripts

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In the server directory, you can run:

### `node server.js`
 
This will run the database for Carpark Information Table using ExpressJS.
Open [http://localhost:5000/result/records](http://localhost:5000/result/records) to view it in your browser.
