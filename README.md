#this is readme

# Redux Toolkit

-Install @reduxjs/toolkit and react-redux
-Build our store
-Connect our store to our app
-Slice(cartSlice)
-Dispatch action
-Selector

# Types of testing as a developer

-Unit Testing
-Integration Testing
-End to End Testing

# Liabraries for testing

-React Testing Library

# Setting up Testing in our app

-Install React Testing Library (" npm install -D @testing-library/react ")
-Installed jest (" npm install -D jest ")
-Installed babel dep. using with babel ("npm install --save-dev babel-jest @babel/core @babel/preset-env")
-Configure babel means create file at root level named (" babel.config.js ") and paste some lines of code from website ....
-configure parcel config file to disable default babel transpilation [create file named as .parcelrc] and paste code using this link( " https://parceljs.org/languages/javascript/#babel " then go to usage with other tools heading copy code and paste into .parcelrc file) [purpose of this to use our setup environment this (" babel.config.js ") in place of default ].
-jest configuration (" npx jest --init ")
-skip this line its only for study purpose( what is " jsdom(browser-like)" is a library which parses and interacts assembled HTML just like a browser or in one word (provide Browser like environment for testing its not browser but it has browser like features when we are not using browser))
-Install jsdom library if we are using jest version >28 ("npm install --save-dev jest-environment-jsdom")
