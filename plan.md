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
* used useContext for stateMangement
* created context for displayalert
* created alert function on handleclick function
* set timeout function on clearAlert

# BACKEND STARTS
* npm init -y (pakage.json)
* ES6 modules over common js
* install (npm i express)
* install nodemon (npm i nodemon --save-dev)
* created notFoundMiddleware file giving 404
* created errorHandlerMiddleware file giving 500
* created .env file
* create altas account
* (npm i mongoose)
* connected mongodb atlas and create a project(Jobsure_Project_MERN)

## auth controllers and routes
* created authcontroller and routes for register,login and updateUser
## jobs controllers and routes

* created jobscontroller and routes for create , getalljobs ,show stats , delete

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
* UserSchema.methods.createJWT = function(){console.log(this)}
*  in register controller

## JWT 
* npm i jsonwebtoken
* return jwt.sign({userId:this._id},'jwtSecret',{expiresIn:'1d'})
#### JWT_SECRET and JWT_LIFETIME
* taking jetsecret and expries in from .env
* used encryption key 256 (from all key generator site)

***********concurrently***********
* npm i concurrently --save-dev
* runs both f and bend at same time

### cors error
* npm i cors
### proxy
* access from anywhere
- don't want to use full url

## Register User
* npm i axios
* created register user functionality with useContext

### Navigate to dashboard
* use useeffect and useNavigate with setTimeout to navigate to dashboard when user is registered successfully

#### local storage
* stored the user regis. info in local storage
##### morgan package
* logger middleware
* gives info about header etc
* npm i morgan
* created unauth error in file in error folder
* created compare password method in User file bend
### login auth
* created login auth controller function taking email and password and then comparing password and set pass
word to undefined so it is not visible

### login frontend setup
* created login user functionality with useContext


#### combining registerUser and login User functioanility to one
* combining both with setupUser by just changing endpoints in  post api and their msg in action

## nesting pages in dashboard
* deleting dashboard js
* created dashboard folder and created alljobs,addjob,stats,profile,sharedLayout jsx file
* created nested route for all in dashboard
* make nav in shared layout


## protected route
protected route.js
#### Navbar , smallsidebar , Bigsidebar
* create these in components
* import them in sharedLayout

### React icon
* npm i react-icons

## navbar 
* created navbar structure
* created toggle sidebar functionality
* created toggle dropdown functionailty using useState
 
 ### logout user
 * to landing page

 ### setup
* create utils in the src
* setup links.js for small sidebar
##### small sidebar setup
* smallsidebar toggle
* smallsidebr navlink map for lists
*in components create NavLinks.js
* styles still set from Wrapper
* also can setup in links.js, preference

##### bigsidebar
* same as small sidebar




 ## auth middleware in backend
 * created auth middleware in middleware folder and setup in authroutes
 * bearer token in auth


 ## Postman - Set Token Programmatically
* register and login routes
* Tests auth
