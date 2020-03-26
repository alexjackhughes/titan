![Logo](https://i.imgur.com/debLpdr.png)

# Titan

Titan is an opinionated full-stack boilerplate framework built with **React** + **Meteor** + **Apollo**.

Titan is built around an idea; Building startups should be _fun_.

As a founder, you want to focus what limited time you have on validating your startup; not creating account systems, or designing APIs, or building infrastructure you are going to outgrow anyway.

Titan gives you the tools to do that.

### Features

Built around TypeScript and Meteor, Titan comes with everything you need to build a well-tested application without having to write the boilerplate.

It gives you the latest tools, like:

- Login & register with a magic link
- User-restricted routes
- Minimongo and all the benefits it provides
- A fully defined example CRUD API built with `apollo-server`
- `apollo-client` and cache set-up on the frontend
- The latest React features
- Airbnb linting
- Bulma theming set-up
- Jest for unit tests
- Storybook for component testing & visualisation

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

1. Run the command `meteor` from root - this will install titan's dependencies and start the app.
2. There is no step 2 - you're done! 🎉
   - Visit the website: [http://localhost:3000/](http://localhost:3000/)
   - Test GraphQL queries: [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

## The Demo

To get you up and running, I've built a small demo application; "resolutions" - which is a goal setting app, where you can:

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

Thanks to Meteor, deployments are easy - just follow this guide:

[Meteor Deployment Guide](https://guide.meteor.com/deployment.html)
