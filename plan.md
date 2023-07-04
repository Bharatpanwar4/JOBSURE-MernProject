### --npm install normalize.css

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

### --npm i styled-components

# created pages folder

## landing page in pages

* used styled componets wrapper from landingpage.js in asset folder
* svg image is taken from undraw.com website
* created logo component and export to landing page

### --npm install history@5 react-router-dom@6

* created routes for dashboard,register,landing page and error page
* replace Link with Button in landing
* created dashboard , register and error file in pages folder
* inserted error page by inserting img(not-found) from undraw and add a link to go back home

## Register page setup
* use initial state useing usestate.
* created name input form
* created submit and handlesubmit function
* created a FormRow component and export to Register.jsx so it can be used by email and password label as well
* create Alert as a seperate component
*toggle between the register and login by conditional rendering in register.jsx*
*used useContext for stateMangement
*created context for displayalert
* created alert function on handleclick function
*set timeout function on clearAlert

# BACKEND STARTS
*npm init -y (pakage.json)
*ES6 modules over common js
*install (npm i express)
*install nodemon (npm i nodemon --save-dev)
*created notFoundMiddleware file giving 404
*created errorHandlerMiddleware file giving 500
*created .env file
*create altas account
*(npm i mongoose)
*connected mongodb atlas and create a project(Jobsure_Project_MERN)

## auth controllers and routes
*created authcontroller and routes for register,login and updateUser
## jobs controllers and routes

*created jobscontroller and routes for create , getalljobs ,show stats , delete

## postman
* checked all the api in postman

## models
* created User model schema (name,password,email,location)
* installed validator for email (npm i validator)
* created ist user  by importing model in authcont.. 
* installed (pm i express-async-errors) instead of try..catch

## error handling
* custumised error handling by making the object in error handler file
* created customAPIerror class for error msg
* created badeRequesterror and notfounderror class extending customapi error 
* CREATED seperate folder (errors) and made seprate file for each above classes
* also checked if user already exist by finding email


# Mongoose Middleware
## Hashpassword
* npm i bcyrptjs (used for hashing password)
* used salt and hash function to incript the password   

### mongoose - custom instance methods

## JWT 
* npm i 

