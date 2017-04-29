# Beer/Programming Discussion Blog

#### _{4-28-2017}_

#### By _**{Dallas Slaughter}**_


This project is a discussion board built with Ember.js. It is a forum for programmers to decide which beer makes them program more better. Allowing questions and answers, the board will facilitate the sharing of a very select set of information, closely guarded for the last 5000 years.

It will incorporate Google authentication via EmberFire and Torii for posting, and several Ember packages as seen fit. It is styled using Google's Material Design and heaps of eye-burning bright green. ENJOY!

![readmepic](/readmepic.png)


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Firebase](https://firebase.google.com)


## Installation

* `git clone <repository-url>` this repository
* `cd discussion-board`
* `npm install`
* `bower install`
#### if the app won't serve or looks super weird:
* `ember install emberfire`
* `ember install ember-paper`
* NOTE: to install ember-paper, you must first move/rename app/styles/app.scss, otherwise ember-paper installation will hang with no error message. After installation, just move that .scss sweetness back/rename it.
* To prepopulate your database with a few questions, upload the datas.json file to firebase via the console.


## Running / Development

* You will first need to create a Firebase app at the Firebase link above. You will use information from that app (click on 'Add Firebase to your web app') in the .env file as detailed below.
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

* authentication implemented by following this guide https://www.danielgynn.com/third-party-auth-in-ember-with-firebase/

* firebase config settings should be located inside .env file. use the below example as a guide.
```
exports.firebaseConfig = {
  apiKey: 'YOUR-FIREBASE-API-KEY',
  authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
  databaseURL: 'https://YOUR-FIREBASE-APP.firebaseapp.com',
  storageBucket: 'YOUR-FIREBASE-APP.appspot.com'
}
```

* firebase database rules should be set to
```
{
  "rules": {
    ".read": true,
    ".write": "auth != null",
    "users": {
      ".indexOn": "userID"
    }
  }
}
```


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details. You can use this to easily add new components and templates for further feature integration, such as all the things on the TODO list below! Don't forget to make a pull request :)


### Running Tests

* `ember test`
* `ember test --server`


### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [ember-paper](http://miguelcobain.github.io/ember-paper/release-1/)

## Support and Contact

* If you have any issues installing or running this app, feel free to let me know on GitHub or email me: dslaughtr@gmail.com


## Implemented Features

~~Build starting JSON for Firebase~~

~~Google Auth~~

~~Question model~~

~~Answer model~~

~~Header or navbar (probably header)~~

~~Header/Navbar should contain links to github/linked in, and obviously navigation~~
~~Files: index, question, profile (containing all user's
questions and answers)~~

~~DB relation (Question one to many Answer, Answer many to one
  Question, Question many to one User, Comment many to one User)~~

  ~~Index (should contain most recent questions)~~

  ~~Question (individual question page, also shows comments)~~

  ~~User Ember Paper because material design is sexy and quick~~

  ~~Font Awesome Icons or Material Icons (probably a mix)~~

  ~~Ember Burger Menu? May be overkill?~~

  ~~CSS as seen fit~~

## TODO
* Question/answer editing/deleting

#### FURTHER EXPLORATION
* Admin account (how to handle this for code review?)
* Upvote/downvote (simple point system in question/answer models)
  * TODO: add points model with many to one to users relation, implement is save-answer.js and save-question.js
* Tags (Many to many with questions)
#### DREAMS
* Implement Untapped API

## Beginning Plan
#### templates

 * User (shows all user's questions and answers, common tags?, total points via up/down voting?)
 * Tag (show all questions with a certain tag, probably re-use index?)

#### styling

* All done and moved to implemented features!

  ![divs everywhere](https://media.makeameme.org/created/divs-divs-everywhere-ntf4n9.jpg)


# Known Problems
 * Between EmberFire, Torii, npm, and Ember dependencies, there can be some crazy strange weird stupid version problems. As of the time of writing, the following works:
 ```
 "ember-cli": "2.10.0",
 "ember-data": "^2.10.0",
 "emberfire": "2.0.7",
 "torii": "0.6.1"
 ```
Any attempt to change this could result in certain death. Or just really strange, hard to diagnose errors. Check the contact section if you're having problems. I'll happily help any way I can.


## License

* This software is licensed under MIT. Accreditation is the nice thing to do.


Copyright (c) 2017 **_{Dallas Slaughter}_**
