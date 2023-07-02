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