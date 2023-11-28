
## About The Project

This is a simple example of how someone can create a very simple TODO app for web and mobile app. Technologies used are C# for the backend, ReactJS for the web application, Jetpack Compose for the Android App and SwiftUI for the iOS App.

Here's why:
* Help students understand how end to end applications are build
* Provide a URL cotaining a setup to play with
* Using newest technologies from the industry

## Backend setup

[Download Visual Studio](https://visualstudio.microsoft.com/downloads/) and install in on your machine.

[Download Docker](https://www.docker.com/products/docker-desktop/) and install in on your machine.

Once docker is installed navigate to the root folder of this project and run this command `docker-compose -f mysql-dev-init-compose.yml up`

This will create a container containing mysql and will setup a default db user, db database and the db table needed for our application to run. It should look like this inside the docker app once done.
![Alt text](./readme-img/container.png?raw=true "Docker container")

Open Visual Studio and open the project under `backend/UniTodo`. You should see the following structure.
![Alt text](./readme-img/vs-backend.png?raw=true "vs")

### Running the backend

Make sure that the docker container is running and you have the correct project opened on Visual Studio. Press the play button to build and run the application. Once the build finishes a webpage will open containing your local setup and 4 actions available from the backend. More info about swagger [here](https://swagger.io/)

Using this you will be able to test the operations available.

![Alt text](./readme-img/swagger.png?raw=true "swagger")

## Web Application setup

[Download and install nodejs](https://nodejs.org/en/) (lts)

> For better future support and ease of use it is recomended to install nodejs through NVM (Node Version Manager). This will enable you to switch between versions depending on the projects you are running.

Once nodejs is setup, navigate to `web-app/uni-todo-app` and run the following commands:

`npm i -g yarn` this will install a different package manager called [yarn](https://yarnpkg.com/), which is commonly used instead of npm.

`yarn install` this will install all the dependencies needed for the application to run

`yarn start` this will start your application and open your browser running the local version of the web application.

![webapp](./readme-img/web-app.png?raw=true "web-app")

