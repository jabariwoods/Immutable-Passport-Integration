# Immutable-Passport-Integration
This guide will walk you through the process of integrating Immutable Passport into a simple Node.js application. I'll also provide a basic example app that demonstrates the integration.

Before we dive into the integration steps, let's take a look at the sample app. The sample app is a basic web application that allows users to log in using Immutable Passport and displays their nickname, ID token, and access token. We have named this web app 'immutable-passport-demo'.

Prerequisites:

Node.js installed on your machine

1.Clone the Sample App
You can clone the sample app from our GitHub repository:

git clone https://github.com/jabariwoods/Immutable-Passport-Integration
cd sample-immutable-passport-app

2. Install Dependencies
In the project directory, run the following command to install the required dependencies:

npm install

3. Set Up Immutable Passport
Register your application on the Immutable Developer Hub to obtain API keys.
In the config.js file, replace 'YOUR_API_KEY' and 'YOUR_API_SECRET' with your actual API keys.

Run the App
To start the app, run the following command:

npm start

4. Open your browser and navigate to http://localhost:3000 to see the demo of the immutable passport in action.

Setup
Register Your Application:

Go to the Immutable Developer Hub.
Sign in or create an account.
Immutable Passport Registration

Navigate to the "Products/Passport" page to learn more about registering your application.

INTEGRATION STEPS

Now, let's go through the steps to integrate Immutable Passport into your own application.

1. Create Your Application:
Create a new directory for your application.
Initialize a new Node.js project.

2.Register Your Application:
Go to the Immutable Developer Hub.
Sign in or create an account.
Register your application and obtain API keys.

3. Install the Passport Client:
In your project, install the Immutable Passport SDK:    NB: The SDK Passport Module enables games & third-party applications to leverage Immutables authentication and wallet functionalities so it is imperative that it must be installed:

npm install @immutable/passport

You have to initialize the Passport client in your code with your API keys.

4. Logging in a User:

app.get('/login', (req, res) => {
  const authURL = passport.getAuthURL();
  res.redirect(authURL);
});

5. Displaying User Information:
To deliver the authentication response and show user details, create a callback route.

app.get('/callback', async (req, res) => {
  const { id_token, access_token, nickname } = await passport.handleCallback(req.query);
  // These tokens and user data will be used in the application. 
  res.send(`Welcome, ${nickname}!`);
});

6. Logging Out a User:
Provide a button or path for users to log out, which ends their session and takes them to the Immutable Passport logout page.

7. Initiate a Transaction
Sending transactions from your application using the Passport SDK is necessary because, ultimately, a wallet must be utilized.
That's it! You've successfully integrated Immutable Passport into your application.
