# Open Secrets Browser

Welcome to the Open Secrets Browser, a program which uses the Open Secrets API to display information about federal legislators' top financial contributors. As a user, you can: - log in or create a new account - search for legislators by state - search for the financial information of a specific legislator - view that information as a chart using ChartJS - save that legislator to your 'favorites' - browse other users' 'favorites' - edit your user information, including your 'favorites' - delete your account

## Getting Started

The frontend of this project was created using React, and styling was done using Semantic UI as well as CSS. The backend was built using Ruby on Rails (2.6.1). This project requires the use of an API key from Open Secrets, which can be acquired [here](https://www.opensecrets.org/open-data/api-documentation). In this project, API calls are made from the front-end and are persisted on the backend.

## Installing

- Fork and clone the frontend repository:
- Fork and clone the backend repository:
- Add the following gems to the Gemfile in the backend:
  - 'rack-cors'
  - 'active_model_serializers', '~> 0.10.0'
- Run `bundle install` in the backend repo
- Run `rails s -p 4000` from the terminal in the backend
- In the frontend, run:
  - `npm install react-dom`
  - `npm install react-router-dom`
  - `npm install semantic-ui-react`
- Run `npm start` from the terminal in the frontend

## Contributors Guide

This program is a work in progress. I welcome all suggestions and contributions to this project. Please feel free to submit a pull request.

## Licensing

[MIT](https://choosealicense.com/licenses/mit/)
