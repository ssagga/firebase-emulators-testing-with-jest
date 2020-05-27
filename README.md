# firebase-emulators-testing-with-jest
Source code of the project from the YouTube tuorial on testing Firebase trigger functions locally using JEST and emulators

Hi guys, in these videos I will be sharing with you an approach through which you will be able to write tests using JEST and to assert results of side effects executed by Firebase cloud trigger functions locally on your machine without having to deploy to the cloud and/or to test online. We will be using JEST as a testing library and utilizing the Firebase emulators to serve an instance of our project on our machine.

Watch the tutorials on YouTube

[Part 1: Setup]
https://www.youtube.com/watch?v=2X7DPxI6E_I
In this part we will be setting up our dev environment


[Part 2: Writing Tests]
https://www.youtube.com/watch?v=8IoCPZJ-zwA
In this part we will be using the local Firebase Functions and Firestore emulators. Using Jest, we will execute a test routine which writes a document to the database and asserts the results of a trigger function copying that document to another collection.
