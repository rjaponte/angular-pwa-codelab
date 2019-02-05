# Angular PWA CodeLab!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

The Codelab uses [Service Workers](https://angular.io/guide/service-worker-intro) and [Angular Universal](https://angular.io/guide/universal) (if there is time) to show server side rendering (ssr) and PWA.

In addition it also uses [Angular Material](https://material.angular.io/) for most of the UI.

## Prerequisites

### Node
Download [Node](https://nodejs.org/). Make sure that it's on your path by running `node --version` or `npm --version`.

### Firebase Firestore
This uses Firestore to show how API calls to backend work with a database.

You will have to setup a free firebase account [here](https://firebase.google.com/).

#### Setting up firestore

Once you do add a new project with whatever name you want and make sure that firestore is checked.

Once you have done that click on the button and you'll be redirected to the project page.

From there click on Develop and then Database.

Click the Create Database button, it's up to you if you want it in locked mode or test mode.

Click on Enable once that is done you'll then need to create a service account.

#### Setting up a Service Account

Click on the gear icon on the left side next to Project Overview and go to Project Settings.

From there click on Service accounts.

Leave the settings that are there and click the Generate new Private Key button.

From there a popup will show up with a button to generate key. Go ahead and do that.

*Disclaimer: do not post this key online as it could be used to have complete access to all services in firebase for your account*

Once you have done that copy the file over to the root of the Initial folder. 

Rename the file to `firebase_key.json`.

You should be good from here, go to [Run Locally](#run-locally) section to test everything is working.

### Angular CLI (optional)

Once you have node installed, you can also install the Angular CLI by running `npm install -g @angular/cli`.

This is optional if you want to have the recommended tool to add additional pieces to the project.

## Installation

Run `npm install`.

## Run Locally

Run `npm run local-server` in a terminal.

Once it's complete you should be able to see the site at http://localhost:8000.

If you want to see some messages run the following command if you have curl.

```
curl -H "Content-Type: application/json" -d '{"groupId": 1,"message": {"messagetext": "This is a different test message","timestamp": "2019-01-03T11:37:00"},"users": [{"firstName": "Ricardo", "number": "8055872684", "color": "red"}]}' http://localhost:8000/api/messages
```

## License
This is licensed under the [MIT License](LICENSE.md)
