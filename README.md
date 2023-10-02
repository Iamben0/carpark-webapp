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

![search_changes] (https://github.com/Iamben0/carpark-webapp/blob/master/pics/searchCarparkNumber.PNG)

## TODO:

- Add the carpark address that matches with the carpark No :heavy_check_mark:
- Add a search bar :heavy_check_mark:
- Search to change Carpark Information Table 

## ~~Getting Started with Create React App~~

~~This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).~~ _Deprecated_

## Dependencies

**Main Folder**
npm i @chakra-ui/react
npm i axios

**Server Folder**
npm i mongodb@4.1.1
npm i express
npm i cors
npm i dotenv

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In the server directory, you can run:

### node server.js
 
This will run the database for Carpark Information Table using ExpressJS.
Open [http://localhost:5000/result/records](http://localhost:5000/result/records) to view it in your browser.
