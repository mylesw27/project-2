# Correl8 Habit Tracker
This habit tracker allows you to store information about a user's daily activities, mood and outlook. The intention is to help the user discover links between their daily activities and the impacts on their overall mood and outlook. The app also uses the Mapbox and Open-Mateo APIs to all the app to track weather associated with the user's given location. With enough data, this app has a goal of finding correlation in a user's day to their given responses to mood and outlook. 


[Correl8 App link](https://correl8.herokuapp.com/)

## APIs Used 

### Mapbox 
Forward geocoding used to retrieve latitude and longitude of a user's zip code. These coordinates will feed the Open-Mateo API.
![Mapbox Proof of Concept](./public/img/mapboxproof.png)\


### Open-Mateo
Sending the user's latitude and longitude returns the current weather forecast. This will be used to provide weather data as a supplement to daily responses.  \
![Open-Mateo Proof of Concept](./public/img/openmateoproof.png)\


## Entity Relational Diagram
The app consists of 3 models: Users, Settings and Responses. Users and Settings have a one:one relationship while Users and Responses have a one:many relationship. 
![Entity Relational Diagram](./public/ERD.drawio.png)


## RESTful Routing Chart

| VERB   | URL             | CRUD    | DESCRIPTION                                  | VIEW        |
|:------ |:--------------- |:------- |:-------------------------------------------- |:----------- |
| GET    | /               | Read    | Landing Page                                 | Home        |
|        |                 |         |                                              |             |
|        |                 |         |                                              |             |
| POST   | /users          | Create  | Add user data to db                          |             |
| GET    | /users/new      | Read    | Display signup form                          | Signup Form |
| GET    | /users/login    | Read    | Display login form                           | Login Form  |
| POST   | /users/login    | Read    | Checks user credentials against db           |             |
| GET    | /users/login    | Read    | Logout user by clearing cookies              |             |
| GET    | /users/profile  | Read    | Display user data                            | Profile     |
| GET    | /users/settings | Read    | Display users settings                       |             |
| PUT    | /users          | Update  | Update user settings                         |             |
|        |                 |         |                                              |             |
| GET    | /habits         | Read    | Displays current user settings               | Settings    |
| POST   | /habits         | Create  | Defines users' daily habits during setup     |             |
| PUT    | /habits         | Update  | Updates a users' habits                      |             |
|        |                 |         |                                              |             |
| GET    | /responses      | Read    | Displays past entries                        | Past habits |
| GET    | /responses/new  | Read    | Display the current day's form               | Habit Form  |
| POST   | /responses      | Create  | Enters current day's form to the db          |             |
| GET    | /responses/:id  | Read    | Displays responses related to a specific day | Past entry  |
| PUT    | /responses/:id  | Update  | Update an existing record of a day's entries |             |
| DELETE | /responses      | Destroy | Deletes a previous entry                     |             |


## Wireframes
![landing page](./public/img/landingpage.png)
![users/new](./public/img/users_new.png)
![users/login](./public/img/users_login.png)
![users/profile](./public/img/users_profile.png)
![users/settings](./public/img/users/settings.png)
![habits](./public/img/habits.png)
![responses](./public/img/responses.png)
![habits/new](./public/img/responses_new.png) 
![habits/:id](./public/img/responses_id.png)

## Installation Instructions 
1. Fork and clone this repo
2. Install all modules using npm install
3. Sign up and get an API key from the Mapbox API
4. Create a .env file and store your Mapbox API in a variable named MAP_KEY
5. Make some habits!

## User Stories
As a user, I want to be able to store daily activity data based on my mood and habits. \
As a user, I want to be able to retrieve past habit and weather responses to find correlation in my mood. 

## MVP Goals
- Store user daily activity data in a relational database
- Users are able to login and retrieve past entries
- Complete RESTful routes for daily user entries
- Retrieve and display weather information from an API

## Stretch Goals
- Incorporate a daily motivational quote API
- Ability to display aggregate past data in one view
- Add visual components for past data such as charts or graphs