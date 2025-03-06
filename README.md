
## About The Project

This is a simple example of how someone can create a very simple TODO app for web and mobile app. Technologies used are C# or Java for the backend, ReactJS for the web application, Jetpack Compose for the Android App and SwiftUI for the iOS App.
You will also find a cool test automation project in here if you want to test it out

Here's why:
* Help students understand how end to end applications are build
* Provide a URL containing a setup to play with
* Using newest technologies and industry standards

## Get this repo
- [Download git](https://git-scm.com/downloads)
- Open your terminal and type `git help git` -> if you see something that is not an error, it's good.
- Navigate to the location you want your project in
- Step if you are a PRO: [Run ssh-keygen on your terminal and add it to your github account settings](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- Type `git clone https://github.com/Kitsopappas/uni-todo.git`

## Backend setup

[Download Visual Studio](https://visualstudio.microsoft.com/downloads/) and install it on your machine.

[Download Docker](https://www.docker.com/products/docker-desktop/) and install it on your machine.

> For PostgreSql
Once docker is installed navigate to the root folder of this project and run this command `docker-compose -f postgresql-dev-init-compose.yml up`

> For MySql
Once docker is installed navigate to the root folder of this project and run this command `docker-compose -f mysql-dev-init-compose.yml up`

This will create a container containing mysql and will setup a default db user, db database and the db table needed for our application to run. It should look like this inside the docker app once done.
![Alt text](./readme-img/container.png?raw=true "Docker container")

Open Visual Studio and open the project under `backend/UniTodo`. You should see the following structure. IF YOU WANT TO PLAY WITH C#
![Alt text](./readme-img/vs-backend.png?raw=true "vs")

### Running the Java Spring backend
- Download Java JDK
- [Download Intellij from JetBrains](https://www.jetbrains.com/idea/download/) - make sure to scroll a bit to get the community edition
- Open the project from `backend/UniTodoSpring` folder on JetBrains IntelliJ

Make sure that the docker container is running and you have the correct project opened on IntelliJ. Press the play button to build and run the application. Once the build finishes you will be able to test and run your backend application.

![JetBrains](./readme-img/jetbrains-app.png?raw=true "jetbrains-app")

## Web Application setup

[Download and install nodejs](https://nodejs.org/en/) (lts)

> For better future support and ease of use it is recommended to install nodejs through NVM (Node Version Manager). This will enable you to switch between versions depending on the projects you are running.

Once nodejs is setup, navigate to `web-app/uni-todo-app` and run the following commands:

`npm i -g yarn` this will install a different package manager called [yarn](https://yarnpkg.com/), which is commonly used instead of npm.

`yarn install` this will install all the dependencies needed for the application to run

`yarn start` this will start your application and open your browser running the local version of the web application.

![webapp](./readme-img/web-app.png?raw=true "web-app")

### Running the C# backend

Make sure that the docker container is running and you have the correct project opened on Visual Studio. Press the play button to build and run the application. Once the build finishes a webpage will open containing your local setup and 4 actions available from the backend. More info about swagger [here](https://swagger.io/)

Using this you will be able to test the operations available.

![Alt text](./readme-img/swagger.png?raw=true "swagger")

## Mobile Application setup

[Download an install Android Studio](https://developer.android.com/studio) and install it following the setup proceedure.
Open the project inside the folder `mobile/android`.

![android-studio](./readme-img/android-studio.png?raw=true "android-studio")

Open your terminal and run the following command to enable development on our localhost server

`adb reverse tcp:7046 tcp:7046` 

Runn the application 

![mobile-app](./readme-img/mobile-app.png?raw=true "mobile-app")