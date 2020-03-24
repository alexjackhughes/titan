# Titan

Titan is an opinionated full-stack web application framework.

It attempts to incorporate many of the latest web technologies, whilst handling all the boring bits of building applications for you - so you can focus on, you know, building a startup.

It consists of three main projects:

- `/client`: Where our client-side code is imported.
- `/imports`:
  - `/api`: Where all our Apollo code is written.
  - `/startup`: where we initialise both the server and client side.
  - `/ui`: Where we write our React code.
- `/server`: Where our server-side code is imported.

- `/meteor`: Which is boring meteor set-up.
- `/node_modules`: Which are exciting packages.

## Getting Up and Running

Once you have cloned the repo, follow these steps to start a local development instance of the dashboard:

1. Navigate to the root of the directory and run `npm install`
2. Next run `meteor` - this will install meteor's dependencies and start the app.
3. There is no step 3 - you're done! 🎉
   - Visit the website: [http://localhost:3000/](http://localhost:3000/)
   - Write GraphQL queries: [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

## The Demo

To give you a brief understanding of the actual demo application, it outlines a "resolutions" app, where you can:

- Login via a Magic Link
- Create and track personal goals
- View individual goals

Only logged in users will be able to see their goals, and logged in users can only see their own goals.

This should give you just enough code to figure out how to implement

## Technologies

This is an opionated stack using technologies I've used in the past to great success, including:

### Application

- **Frontend**: Our frontend is build with React + Apollo-Client + TypeScript
- **Server**: Our server is built with GraphQL + Apollo + Meteor + TypeScript

### Testing

- **Storybook**: For visual component creation and testing
- **Jest**: As the base testing library
- **react-testing-library**: For component-tree testing

## Deployment

Once you’ve built and tested your Titan application, you need to put it online to show it to the world. Titan uses Meteor as it's base framework, so for deployment you can follow along with their guide:

[Meteor Deployment Guide](https://guide.meteor.com/deployment.html)
