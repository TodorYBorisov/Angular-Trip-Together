# Angular-Trip-Together
Trip Together represents the culmination of my Angular course at Software University.

It is an integrated project that incorporates a custom RESTful server using Node.js, Express.js, MongoDB with Mongoose, Bcrypt and JsonWebtoken to handle server-side functionalities and backend operations.
The frontend is powered by Angular.

## Description
- Trip Together is a web application that allows users to experience shared trips with other users
- The main objective of the app is to enable users to share a common vehicle to reach their final destination
- Users have the opportunity to create passive income by making use of their cars
- Using a Trip Together app can reduce carbon footprint, potentially save you money
- Lastly, research shows that when users share common transportation, they tend to drive less, making them more environmentally friendly

## Features
<ins>Public part visible without authentication:</ins>
- **Home page** is accessible by all users, includes a button which leads to all available trips if there some
- **Learn more** page includes button with angular animation explaining in simple steps how to use the application and carousel
- **Trips page** includes basic details about the particular trip
- **Sign Up** page (register) expect as input username, email, phone number, gender, password and repeat password, <ins>all fields are required to create a new user</ins>
    - Username should be at least 5 characters long
    - Password should be at least 5 characters long
    - The password and the repeated password should match
- **Login page** expect as input valid email and password

<ins>Private part visible after successful authentication and authorization:</ins>
- **Trips page** give access to all trip details information
    - if the user is not the creator of the trip, there is an option to <ins>join the particular trip</ins> if there are seats available
        - his username and email is dynamically visualized in the trip list of the details page 
        - each user can <ins>join a particular trip only once</ins>
    - if the user is the creator of the trip:
        - **Edit button** is displayed and the trip can be edited
        - **Delete button** is displayed and the trip can be deleted

-  **Weather page** gives logged in users access to search for weather conditions by city name, for example based on their final travel destination
    - Weather API https://open-weather13.p.rapidapi.com

- **Create page**, each user can create their own trips:
    - all fields in the form are required with different validations, if the form does not meet all the validations, the submit button is disabled

- **Search page**, users can search among all created trips for a particular trip, based on their starting or end point. If there is a match from the search, all results are rendered, users also access details as well

- **Profile page**:
    - contains a section with personal information about the user's account
    - user has the option to **edit** his personal information through the **edit profile button**
    - **avatar picture** is dynamic based on the gender of the logged in user
    - contains a **dynamic list** of all trips created by the user with a **link** to details for each specific trip

- Implemented **error handling** and **data validation** for all forms to prevent crashes caused by entering invalid data

## Security
The project incorporates several security enhancements:

- **Guards**: Various features have guards in place to control access based on user authentication status
- **Custom 404 Page**: An exclusive 404 page is implemented to handle undefined routes gracefully
- **JWT Blacklist**: To enhance security, a blacklist system stores every used JSON Web Token (JWT) after a user logs out

## Additional libraries
- Angular Material https://material.angular.io/
- Font Awesome https://fontawesome.com/
- Compodoc https://compodoc.app/ 

## Installation
To run Trip Together locally, follow these steps:
1. Clone the [repository](https://github.com/TodorYBorisov/Angular-Trip-Together-running-locally.git) to your local machine
2. Navigate to the project's root directory in your terminal
3. Install the dependencies of both trip together app and rest server, using the package manager of your choice
4. Install MongoDB Compass to store the data on your local machine
5. Start the REST-Server with "npm start" command and the application with "ng serve" command
6. Open your browser and go to `http://localhost:4200/` to access the application

## Deployment
- Backend Deployment

The backend of Trip Together is deployed on [Render](https://render.com/). The backend handles the core functionalities, including user authentication, create trips, search, weather and ect.

- Frontend Deployment

The Angular frontend of Trip Together is deployed on [Netlify](https://www.netlify.com/). Netlify handles the user interface and provides a seamless browsing experience.

- Database

The MongoDB database used for Trip Together is hosted on [MongoDB Cloud](https://cloud.mongodb.com). MongoDB Cloud provides a dependable and expandable solutions for storing data for the application

## Project architecture
- App Module
![App Module](trip-together/src/assets/architecture/AppModule.JPG)
- Auth Module
![Auth Module](trip-together/src/assets/architecture/AuthModule.JPG)
- Core Module
![Core Module](trip-together/src/assets/architecture/CoreModule.JPG)
- Features Module
![Features Module](trip-together/src/assets/architecture/FeaturesModule.JPG)
- Shared Module
![Shared Module](trip-together/src/assets/architecture/SharedModule.JPG)

## Application Pages
Header Guest
![Alt text](trip-together/src/assets/screenshots/15.JPG)
Header signed
![Alt text](trip-together/src/assets/screenshots/16.JPG)
Home page
![Alt text](trip-together/src/assets/screenshots/1.JPG)
Learn more page
![Alt text](trip-together/src/assets/screenshots/2.JPG)
Gatalog page Guest
![Alt text](trip-together/src/assets/screenshots/3.JPG)
![Alt text](trip-together/src/assets/screenshots/3.2.JPG)
Register page
![Alt text](trip-together/src/assets/screenshots/5.JPG)
Login page
![Alt text](trip-together/src/assets/screenshots/4.JPG)
Gatalog page signed
![Alt text](trip-together/src/assets/screenshots/3.1.JPG)
Details page owner signed
![Alt text](trip-together/src/assets/screenshots/8.JPG)
Details page not owner signed
![Alt text](trip-together/src/assets/screenshots/8.1.JPG)
![Alt text](trip-together/src/assets/screenshots/8.2.JPG)
![Alt text](trip-together/src/assets/screenshots/8.3.JPG)
Weather page signed
![Alt text](trip-together/src/assets/screenshots/9.JPG)
Create page signed
![Alt text](trip-together/src/assets/screenshots/10.JPG)
Edit Page signed
![Alt text](trip-together/src/assets/screenshots/11.JPG)
Search page signed
![Alt text](trip-together/src/assets/screenshots/12.JPG)
Search page results
![Alt text](trip-together/src/assets/screenshots/13.JPG)
![Alt text](trip-together/src/assets/screenshots/14.JPG)
Profile page signed
![Alt text](trip-together/src/assets/screenshots/7.JPG)
![Alt text](trip-together/src/assets/screenshots/7.1.JPG)
Page not-found
![Alt text](trip-together/src/assets/screenshots/17.JPG)