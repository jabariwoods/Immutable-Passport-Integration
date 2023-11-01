# Immutable-Passport-Integration
This guide will walk you through the process of integrating Immutable Passport into a simple Node.js application. I'll also provide a basic example app that demonstrates the integration with a demo of a decentralised social network - Greazy.

Before we dive into the integration steps, let's take a look at the sample app. The sample app is a basic web application that allows users to log in using Immutable Passport and displaytheir nickname, ID token, and access token. Building this example is intended to provide a starting point for showcasing Immutable Passport integration in such an app. 

Prerequisites:
A basic understanding of JavaScript and Node.js
Node.js installed on your machine

Sample App
The "Greazy" Decentralized Social Network is a sample application that showcases Immutable Passport integration. It allows users to create profiles, post content, and interact with other users in a decentralized and secure environment.


# 1.Clone the Sample App
You can clone the sample app from our GitHub repository:

git clone https://github.com/jabariwoods/Immutable-Passport-Integration
cd Immutable-Passport-Integration


# 2. Install Dependencies
In the project directory, run the following command to install the required dependencies:

npm install

# 3. Set Up Immutable Passport
Go to the Immutable Developer Hub.
Create an account or sign in.
Register your application and obtain API keys.
In a config.js file, replace 'YOUR_API_KEY' and 'YOUR_API_SECRET' with your actual API keys.
In the project, create a .env file and add your API keys like this(The .env file should never be committed to version control to keep sensitive information secure. Add it to your .gitignore file to exclude it from your repository):

PASSPORT_API_KEY=YOUR_API_KEY
PASSPORT_API_SECRET=YOUR_API_SECRET

NB: Please replace placeholders like YOUR_API_KEY and YOUR_API_SECRET with your actual Immutable Passport API keys in your .env file and configure other parts of the application as needed. 

Run the App
To start the app, run the following command:

npm start

# 4. Open your browser and navigate to http://localhost:3000 to see the demo of the immutable passport in action.

Setup
Register Your Application:

Go to the Immutable Developer Hub.
Sign in or create an account.
Immutable Passport Registration

Navigate to the "Products/Passport" page to learn more about registering your application.

# INTEGRATION STEPS

Now, let's go through the steps to integrate Immutable Passport into your own application.

# 1. Create Your Application:
Create a new directory for your application.
Initialize a new Node.js project.

# 2.Register Your Application:
Go to the Immutable Developer Hub.
Sign in or create an account.
Register your application and obtain API keys.

# 3. Install the Passport Client:
In your project, install the Immutable Passport SDK:    NB: The SDK Passport Module enables games & third-party applications to leverage Immutables authentication and wallet functionalities so it is imperative that it must be installed:

npm install @immutable/passport

You have to initialize the Passport client in your code with your API keys because the Immutable Passport SDK helps to incorporate identity verification and authentication into your application.

# 4. Logging in a User:
To allow users to log in using Immutable Passport, we create a login route or button in your application with the example below.

app.get('/login', (req, res) => {
  const authURL = passport.getAuthURL();
  res.redirect(authURL);
});

# 5. Displaying User Information:
To deliver the authentication response and show user details, create a callback route with the example below.

app.get('/callback', async (req, res) => {
  const { id_token, access_token, nickname } = await passport.handleCallback(req.query);
  // These tokens and user data will be used in the application. 
  res.send(`Welcome, ${nickname}!`);
});

# 6. Logging Out a User:
Provide a button or path for users to log out, which ends their session and takes them to the Immutable Passport logout page with the example below.

app.get('/logout', (req, res) => {
  req.session = null; // Clear the session data.
  res.redirect(passport.getLogoutURL());
});

# 7. Initiate a Transaction:
(Example of a transaction below)
const transactionData = {
  to: '0xYourRecipientAddress',
  value: '0.01 ETH',
  data: '0xYourData', // Your transaction data goes here.
};

const txHash = await passport.sendTransaction(transactionData);
console.log(`Transaction Hash: ${txHash}`);

Sending transactions from your application using the Passport SDK is necessary because, ultimately, a wallet must be utilized.
That's it! You've successfully integrated Immutable Passport into your application.

Contribution and License
For contributions and usage guidelines, the project is licensed under the MIT License.
