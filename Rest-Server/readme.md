# REST-Server for Angular project Trip Together

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
This API isn't open API. Authentication is required to store and get data. You can use the connected Angular-app to make registration and sign in.

# Endpoints: Users

* ```/users/register``` -- signing up;
* ```/users/login``` -- signing in;
* ```/users/logout``` -- logging out;

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/users/register```

### Method --> ```POST```

### Body -->

```
{
    "username": "Ivailo",
    "email": "ivo@abv.bg",
    "tel": "+359884400839",
    "gender": "male",
    "password": "12345",
    "rePassword": "12345"
}

```

Required:
```username``` : [string] -- The username of the person is required and must be a minimum length of 5 chars, allowed are latin letters and numbers;
```email``` : [string] -- The email of the person is required;
```tel``` : [number] -- The phone number of the person is required;
```gender``` : [string] -- The gender of the user is required;
```password``` : [string] -- The password of the user is required and must be a minimum length of 5 chars, allowed are latin letters and numbers;
```rePassword``` : [string] -- The repeat password must match with the password;

### Success Response:

Code: 200

Content: 
``` 
{
    "trips": [],
    "_id": "64d2385da2569124585841bb",
    "username": "Ivailo",
    "email": "ivo@abv.bg",
    "tel": "+359884400839",
    "gender": "male",
    "created_at": "2023-08-08T12:43:09.268Z",
    "updatedAt": "2023-08-08T12:43:09.268Z"
}
```

### Error Response:

Code: 409 CONFLICT

Content: 
```
{
    "message": "This email/username is already registered!"
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/users/login```

### Method --> ```POST```

### Body -->

```
{
    "email": "ivo@abv.bg",
    "password":"12345"
}
```

Required:

```email``` : [string] -- The username of the person 

```password``` : [string] -- The password of the person 

### Success Response:

Code: 200

Content: 
``` 
{
    "trips": [],
    "_id": "64d2385da2569124585841bb",
    "username": "Ivailo",
    "email": "ivo@abv.bg",
    "tel": "+359884400839",
    "gender": "male",
    "created_at": "2023-08-08T12:43:09.268Z",
    "updatedAt": "2023-08-08T12:43:09.268Z"
}
```

### Error Response:

Code: 401 Unauthorized

Content: 
```
{ 
    "message": "Wrong username or password"
}
```

## Logout User
Logout user.

### URL --> ```/users/logout```

### Method --> ```POST```

## Profile user

Get information for the logged in user
### URL --> ```/users/profile```

### Method --> ```GET```

### Success Response:

Code: 200

Any user can edit their profile
### URL --> ```/users/profile```

Required:
```username``` : [string] -- The username of the person is required and must be a minimum length of 5 chars, allowed are latin letters and numbers;
```email``` : [string] -- The email of the person is required;
```tel``` : [number] -- The phone number of the person is required;

### Method --> ```PUT```

### Success Response:

Code: 200

## Search weather by city name

Get information for weather for particular city
### URL --> ```https://open-weather13.p.rapidapi.com```

### Method --> ```GET```

### Success Response:

Code: 200

## Search for a trip
Search among all trips by start and end point
### Method --> ```GET```

# Endpoints: Search

* ```/trips/search/:searchTerm```

### Success Response:

Code: 200

# Endpoints: Trips

* ```/trips/catalog```
* ```/trips/details/:id``

## Get Trips
Returns all trips as json.

### URL --> ```/trips/catalog```

### Method --> ```GET```

### Success Response:

Code: 200

Content: 
``` 
[
    {
        "buddies": [],
        "_id": "64d222847178fb365c80f6ab",
        "startPoint": "Sofia",
        "endPoint": "Varna",
        "date": "2023-08-11",
        "time": "07:30",
        "imageUrl": "https://www.motortrend.com/uploads/2022/07/2023-Hyundai-Kona-N-14.jpg",
        "brand": "Hyundai Kona",
        "seats": 3,
        "price": 50,
        "description": "The journey will take us from Sofia to Varna, including a 15-minute stopover in Veliko Tarnovo. Please note that pets are not permitted during this trip. Our designated meeting point is Vasil Levski Stadium.",
        "userId": "64bfaa91c2cdeb30e8e2a6a5",
        "created_at": "2023-08-08T11:09:56.038Z",
        "updatedAt": "2023-08-08T11:09:56.038Z",
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Create Trip
Creates new Trip of the author and returns the trip as json.

### URL --> ```/trips```

### Method --> ```POST```

### Success Response:

Code: 200

Content: 
``` 
   {
        "buddies": [],
        "_id": "64d223537178fb365c80f6af",
        "startPoint": "Varna",
        "endPoint": "Dobrich",
        "date": "2023-08-16",
        "time": "14:00",
        "imageUrl": "https://static.webcafe.bg/uploads/images/42/0442/442/768x432.jpg?_=1583916342",
        "brand": "Toyota",
        "seats": 2,
        "price": 10,
        "description": "This is a short journey from Varna to Dobrich. Let's convene at the Cathedral.",
        "userId": "64c2deec6b037b2df8c86f8d",
        "created_at": "2023-08-08T11:13:23.766Z",
        "updatedAt": "2023-08-08T11:13:23.766Z",
        "__v": 0
    }
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Edit Trip
Edit trip if the user is the author of the trip and returns the changed trip.

### URL --> ```/trips/edit/:tripId```

### Method --> ```PUT```

### Success Response:

Code: 200

Content: 

``` 
    {
        "buddies": [],
        "_id": "64d223537178fb365c80f6af",
        "startPoint": "Varna",
        "endPoint": "Dobrich",
        "date": "2023-08-16",
        "time": "14:00",
        "imageUrl": "https://static.webcafe.bg/uploads/images/42/0442/442/768x432.jpg?_=1583916342",
        "brand": "Toyota",
        "seats": 2,
        "price": 10,
        "description": "This is a short journey from Varna to Dobrich. Let's convene at the Cathedral.",
        "userId": "64c2deec6b037b2df8c86f8d",
        "created_at": "2023-08-08T11:13:23.766Z",
        "updatedAt": "2023-08-08T11:13:23.766Z",
        "__v": 0
    }

```
### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Delete Post
Deletes trip if the user is the author of the trip.

### URL --> ```/trips/delete/:tripId```

### Method --> ```DELETE```

### Success Response:

Code: 200

### Error Response:

Code: 401 Unauthorized

Content: 
```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```
## Join to trip
Users can join particular trip (possible only if not creator)

### URL --> ```/details/:tripId```

### Method --> ```PUT```

### Success Response:

Code: 200

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```