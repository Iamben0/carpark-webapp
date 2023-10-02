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

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
