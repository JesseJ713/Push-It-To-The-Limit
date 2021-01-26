# Push-It-To-The-Limit

Creating and tracking daily workouts with the use of MongoDB.

## [Test out the hosted project!](https://guarded-forest-21718.herokuapp.com/?id=5fbed13cbcaaa10017fffa6e)

![image](public/push-it-to-the-limit-screenshot.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. They will also give an overview of some of the app's functionality.

### Prerequisites

You will need MongoDB installed if you want to run this application locally. For help installing MongoDB, visit

```
https://docs.mongodb.com/manual/installation/
```

Once installed, make sure MongoDB is running with the following command line command:

```
$ mongod
```

### Installing

Git clone the repository to your local machine:

HTTPS:

```
$ git clone https://github.com/JesseJ713/Push-It-To-The-Limit.git
```

SSH:

```
$ git clone git@github.com:JesseJ713/Push-It-To-The-Limit.git
```

To connect to your local Mongo database, you will need to add an .env file in the root of your cloned repository containing the following code:

```
MONGO_DB="mongodb://localhost/<you decide the name here>"
```

Next, cd into the repository you cloned and install the necessary dependencies by running:

```
$ npm install
```

You will then be able to start the app locally by runnning:

```
$ npm start
```

## Built With

- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [Express.js](https://expressjs.com/) - Node.js framework
- [Node.js](https://nodejs.org/en/) - JavaScript runtime

## Author

##### Jesse J.

<a href="https://github.com/JesseJ713">![Profile Image](https://github.com/JesseJ713.png?size=50)</a>
<a href="https://www.linkedin.com/in/jesse-jackson-atx/">![Badge](https://img.shields.io/badge/LinkedIn--3480eb)</a> <a href="https://github.com/JesseJ713">![Badge](https://img.shields.io/badge/Github--40c256)</a>
