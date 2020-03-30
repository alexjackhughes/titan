![Logo](https://github.com/alexjackhughes/titan/blob/master/public/banner.png?raw=true)

# Titan

Titan is an opinionated full-stack boilerplate framework built with **React** + **Meteor** + **Apollo**.

Titan is built around an idea; Building startups should be _fun_.

As a founder, you want to focus what limited time you have on validating your startup; not creating account systems, or designing APIs, or building infrastructure you are going to outgrow anyway.

Titan gives you the tools to do that.

### Features

Built around TypeScript and Meteor, Titan comes with everything you need to build a well-tested application without having to write the boilerplate.

It gives you some of the latest tools to get started, like:

- Apollo + GraphQL set up on the server
- A demo CRUD goal setting app
- TypeScript everywhere™
- Jest + Storybook + ESLint for testing
- Bulma + SCSS for styling
- Font Awesome added
- React-Router set up
- ✨ Magic Link authentication (think Slack!) ✨

It consists of three main projects:

- `/client` Where our frontend is set-up.
- `/imports`
  - `/api` Where all our Apollo code is written.
  - `/auth` You can mainly ignore this folder, it just sets up the magic link.
  - `/ui` Where we write our React code.
- `/server` Where our server is set-up.

- `/meteor` Boring meteor set-up.
- `/node_modules` Exciting third party packages.

## Getting Up and Running

Once you have cloned the repo, follow these steps to start a local development instance of the dashboard:

1. Run the command `npm run dev` from root - this will install titan's dependencies, start the app and watch for changes in your files (including GraphQL files!):
2. There is no step 2 - you're done! 🎉
   - Visit the website: [http://localhost:3000/](http://localhost:3000/)
   - Test GraphQL queries: [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

## The Demo

To get you up and running, I've built a small demo application; "resolutions" - which is a goal setting app. You can:

- Create goals
- Delete goals
- View goals
- Mark goals as done (i.e. update goals)

Only logged in users will be able to see their goals, and logged in users can only see _their_ own goals.

I've tried to keep this code to a minimum; it should give you just enough of an idea of how to set up your own collection and apollo interface, and how to interact with that on the frontend.

## Deployment

Thanks to Meteor, deployments are easy - just follow this guide:

[Meteor Deployment Guide](https://guide.meteor.com/deployment.html)
