# Angular-Trip-Together
Trip Together represents the culmination of my Angular course at Software University.

It is an integrated project that incorporates a custom RESTful server using Node.js, Express.js, MongoDB with Mongoose, Bcrypt and JsonWebtoken to handle server-side functionalities and backend operations.
The frontend is powered by Angular.

## Description
- Trip Together is a web application that allows users to experience shared trips with other users.
- The main objective of the app is to enable users to share a common vehicle to reach their final destination.
- Users have the opportunity to create passive income by making use of their cars.
- Using a Trip Together app can reduce carbon footprint, potentially save you money.
- Lastly, research shows that when users share common transportation, they tend to drive less, making them more environmentally friendly.



## Features
TODO!

## Security
The project incorporates several security enhancements:

- Guards: Various features have guards in place to control access based on user authentication status
- Custom 404 Page: An exclusive 404 page is implemented to handle undefined routes gracefully.
- JWT Blacklist: To enhance security, a blacklist system stores every used JSON Web Token (JWT) after a user logs out

## Installation
To run Trip Together locally, follow these steps:
1. Clone the repository to your local machine
2. Navigate to the project's root directory in your terminal
3. Install the dependencies of both trip together app and rest server, using the package manager of your choice
4. Start the REST with "npm start" command and the application with "ng serve" command
5. Open your browser and go to `http://localhost:4200/` to access the application

