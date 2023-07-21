# JOBSURE-MernProject
a job tracking app using MERN stack

MONGODB EXPRESS REACT NODE.JS MONGOOSE JAVASCRIPT CSS

## A Brief Introduction
This project is a full-stack web application built by MongoDB, Express, React and Node.js.

It helps users to record their job applications, depending on the progress, is it in interview, pending, rejected or accepted? And use charts to give an intuitive presentation of recent application quantity.

In addition, users could add, edit and delete any job they wish to. And these actions could only be done under the authorized accounts -- I use cookies, local storage, auth route and private route to accomplish this feature.

For friendlier uses, I also attach a demo app onto the site. So if you do not want to register an account, you can also click demo app / read only button on register page. But in this situation, you cannot do anything related to database, in which means you can only read the data.

Now go to JOBIFY and enjoy your journey!

## Technology Stack And Resources
Axios
This is a promise-based HTTP Client for node.js and the browser. In can make XMLHttpRequests from the browser and http requests from Node.js.

I used it because I could await once to get my data. With traditional fetch method, I have to await once to get response and one more time to get the data. Besides, axios will throw any error into catch block, but fetch will only throw network-related error into catch block. So with fetch method, I have to consider so many scenarios that a request will trigger that it will cost too much time.

### Moment
This libraby can translate ISO 8601 timestamp into human readable time format. Because MongoDB will store the created time and updated time in ISO standard.

### Normalize.Css
This makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

### React-Icons
This is such a powerful icon library that I use it in almost every one of my projects. Its import is nifty, it cantains every icon in almost every situations.

### Recharts
As I mentioned above, I gave users a more intuitive presentation of their data. And Recharts helps me a lot. I could possibly only care about the themes and colors for my data charts.

### Styled-Components
This one is my favourite dependency. I could write css in *.js files. And it helps me kick off considering about the class name conflicts. Because it only renders components inside.

With it, a react component is more like a whole stuff. Because in one file, it contains components(JSX - html), functions(javascript) and styles(css - styled component).

Bcrypt.Js
I helps me hash passwords and comparing hashed passwords.

### Dotenv
Needless to say, this is a library helps get the secrets in *.env files.

### Express-Mongo-Sanitize
It is a middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.

### Express-Rate-Limit
To make my project closer to real web app. I use this to limit rate. If I remember correctly, I set it to 15 requests in login and register routes in every 15 minutes.

I don't plan to limit it in authorized users' usage. Because what if a real user actually need high-rate requests? Or maybe I could limit the rate to maybe 10000 times every hour? It depends on real users test!

### Helmet
Helmet helps me secure my Express apps by setting various HTTP headers. And I can build SEO apps by using Helmet. It makes my browser headers more flexible.


### Jsonwebtoken
It can create and verify JWTs, which can grant access to my resources.

### Morgan.Js
This middleware gives me tidy and neat console log in development stage. All my requests will get a formatted console log with it.

### Validator.Js
Validator.js helps in validate users' input. Like email input, we could validate whether users' input is an email or not in front-end. But for more secure and comprehensive uses, I could also validate in my back-end.

### React
React is a JavaScript library for building user interfaces. By building tons of components and integrate them into a big html file, it makes files readble.

### MongoDB
It is a developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.

### Express.Js
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.


## detail of project

When you login you are taken to the all jobs page. Here you have the option to search for the job you are looking to update. You can also search with other criteria such as status and job type. As you type the name of the job title you will see the number of matching jobs is updating automatically and a spinner appears. You can click the edit button on the job you want to edit and adjust it by taking actions such as updating the status to 'interview'. This helps you see where in the process you are with a certain job. Click submit to save and you will see a green alert box saying job updated that will be automatically cleared after 3 seconds. If there is an error you will see a red alert box which will give information about the error. Now if you go back to all jobs, you will see your most recently edited job on the all jobs page. You can also add a job, there is an alert box to confirm the job added. Lastly you can come to your profile and change account information such as your name. There is an alert here as well. Alerts power the user experience and give information to the user.
#### Technical Details on Front End - React:
On the Jobsure front end React is used to build reusable React components including the text input boxes, dropdown menus and logo appearance. It works on mobile devices as well. To avoid issues with CSS leaking, styled-components are used. The all jobs page uses a container component design pattern to trigger adding and running new search values.
The Context API is used to pass prop data throughout the application without prop drilling. This is done in a stateful way by using the useReducer React hook. This hook stores Jobsure's global state and provides the dispatch function. The dispatch function is used in named functions to make changes to the state, including error handling. These named functions allow the user to asynchronously update the api data for Jobster and get alerts when actions are done. 
To keep state in the application on reloads a function will reload user data on refresh. This is done to not use local storage for increased security. 
There is protected routing setup so a user who is not logged in cannot access the application pages. 
#### Technical Details on Back End - Node, Express and MongoDB: 
When a user logs in Jobsure authenticates them and a cookie is sent to the user.

#### JSON Web Token cookie
This cookie has a JSON web token used to authenticate the user. All authentication is server side. All api endpoints used to update job information require authentication. The backend api also has data validation setup for both User and Job models. Controllers in Express are used to update models in an asynchronous way. If a request is not valid the controller makes an error message with details and sends it to the user. Cookies are valid for 1 day. For security hemlet, xss-clean and express-mongo-sanitize are used to prevent NoSQL injection and cross site scripting. There is also middleware to check permissions that can be used for authorization.

