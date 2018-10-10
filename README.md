# Address Book App Prototype - React
This prototype was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and modified for the Index Exchange - Address Book Demo App. Create React App is a react project seed, created by facebook, that is preconfigured and includes many common tools used for common react apps that helps you quickly get started.

## Getting Started
### One Time Installation

1. Clone repository on docker server

```
git clone git@gitlab.internal.casalemedia.com:app/address-book-react.git
```

2. Build the address-book-react image.

```
docker-compose -f workstation-address-book-react.yaml build --no-cache
```

### Running the App
1. Run the address-book-react container.

```
docker-compose -f workstation-address-book-react.yaml up
```

2. Go to port 3000 of your docker IP and test the app. [http://YOUR_DOCKER_IP:3000](http://YOUR_DOCKER_IP:3000)


### Install new npm packages
1. To install new npm modules, run the following:

```
docker exec -it address-book-react npm install --save yourModule
```

2. You must also rebuild the image everytime a new module is added.

```
docker-compose -f workstation-address-book-react.yaml build --no-cache
```


# Tech Stack
## Component Library - Material UI
[Material-UI](https://material-ui-next.com/) library is used for simplifying basic UI components.

## Routing - React Router DOM
Routing is done via [react-router-dom](https://yarnpkg.com/en/package/react-router-dom) package. See package.json for version (should be using React Router v4).

For documentation, go to [React Router Web - Documentation](https://reacttraining.com/react-router/web/guides/philosophy).

## State Management - Redux
[Redux](https://redux.js.org/docs/basics/UsageWithReact.html) is used as a state management library to simplify how data is managed and how it flows in the application.

## i18n (Internationalization) - react-i18next
[react-i18next](https://react.i18next.com/) is an interationalization addon for react based off [i18next](https://www.i18next.com/), which is a fully featured javascript framework with standard i18n features such as plurals, context, interpolation, format.

## API Interaction (CORS) - axios
[axios](https://github.com/axios/axios) is a lightweight HTTP client based on the $http service within Angular.js v1.x as an interface for REST API.

## Unit Testing - Jest
[Jest](https://facebook.github.io/jest/) is a full featured test framework created by facebook which is commonly used to unit test ReactJs apps. Jest is actually already included as a part of the Create React App project.

Jest recommends that you make yourComponent.test.js test files in the same directory as teh component you want to test so that the path of importing your component to the test file is shorter.

To run tests, execute the following:

```
docker exec -it address-book-react npm run test
```

Tests will automatically rerun as you save.

# Note
The Create React App is great for just trying out react and prototyping. It manages all the configurations and tool integration in node_modules so that you don't have to waste time setting up to try it out.

If we do plan on moving forward with react, the Create React App project seed has an [eject command](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) that you can run to essentially move all the configuration and tools into the main project so that you have full control over the tools and configuration.