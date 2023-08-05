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

## Users
-Email: toshko@abv.bg; Password: 12345;

-Email: lili@abv.bg; Password: 12345;

-Email: mitko@abv.bg; Password: 12345;

## Features
Public part visible without authentication:
- **Home page** is accessible by all users, includes a button which leads to all available trips if there some
- **Learn more page** includes button with angular animation explaining in simple steps how to use the application and carousel
- **Trips page** includes basic details about the particular trip
- **Sign Up page** expect as input username, email, phone number, gender, password and repeat password, all fields are required
    - Username should be at least 5 characters long
    - Password should be at least 5 characters long
    - The password and the repeated password should match
- **Login page** expect as input valid email and password

Private part visible after successful authentication:
- **Trips page** give access to all trip details information
    - if the user is not the creator of the trip, there is an option to **join the particular trip** if there are seats available
        - his username and email is dynamically visualized in the trip list of the details page 
        - each user can join a particular trip only once
    - if the user is the creator of the trip:
        - **Edit button** is displayed and the trip can be edited
        - **Delete button** is displayed and the trip can be deleted

-  **Weather page** gives logged in users access to search for an actual weather by city name, for example based on their final travel destination

- **Create page**, each user can create their own trips:
    - all fields in the form are required with different validations, if the form does not meet all the validations, the submit button is disabled

- **Search page**, users can search for particular trip based on their starting or end point. If there is a match from the search, all results are rendered, users also access details as well

- **Profile page**:
    - this page contains personal information about the user's account
    - user has the option to **edit** his personal information through the **edit profile button**
    - **avatar picture** is dynamic based on the gender of the logged in user
    - a **dynamic list** of all trips created by the user with a **link** to details for each specific trip



## Security
The project incorporates several security enhancements:

- Guards: Various features have guards in place to control access based on user authentication status
- Custom 404 Page: An exclusive 404 page is implemented to handle undefined routes gracefully
- JWT Blacklist: To enhance security, a blacklist system stores every used JSON Web Token (JWT) after a user logs out

## Installation
To run Trip Together locally, follow these steps:
1. Clone the repository to your local machine
2. Navigate to the project's root directory in your terminal
3. Install the dependencies of both trip together app and rest server, using the package manager of your choice
4. Start the REST with "npm start" command and the application with "ng serve" command
5. Open your browser and go to `http://localhost:4200/` to access the application

## Deployment
TODO
