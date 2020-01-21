# Upcoming Movies

## Build instructions

Before execute application create a .env file in the root folder containin

- MOVIES_API_KEY (key to authenticate with movie api)
- DATABASE_URL (redis database connection url: `redis://user:password@host:port`)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run server tests
npm run test-server

# Run client tests
npm run test-client
```

## Archtecture

This application is composed by a api (/server) and a web page (/client), built thogheter by web-pack.

### Server archtecture

    /server
        - index.js (responsible for create and start web server)

        /contants
            Files that keep constant values like api urls

        /database
            Files that create connections and make database operations
            Patter used: Data Acces Object - object responsible to get a database connection and execute operations
            Logic separation by "Entity"

        /helpers
            Files containing helper and utilities functions to be reused anywhere in server

        /routes
            Files that defines api routes and delegate method execution to services

        /services
            Files that execute api calls, receiving request and response, deal with request parameters and build a response

        /workers
            Files that contains business logics, initializations and object mappings, each worker has a single responsability

![Image of backend archtecture](https://docs.google.com/uc?id=1XKhH4OVrT9IadB0XUoijj86zFFvVg2ZJ)

### Client archtecture

    /client
        - index.js (responsible for initialize react)
        - App.js
            Main component of our archtecture, defines page routes and render a router component
        /pages
            Container components that represents a entire page, this components are responsible for load data e manage state
        /components
            Any other component used be composed and build a page. Usually dummies components that only defines style or receive a props used to render other components

![Image of backend archtecture](https://docs.google.com/uc?id=1SVkK-oAdH5ZxXylEfIzdNYLV0zLk9lE6)

## Assumptions

    - Keep as simple as possible, don't over engineering
    - Application should be responsible for the most used screen sizes

## Libraries

### Babel

Used to transpile javascript code to work in different environments, complie react notation (jsx) and allow use features like class static and property initialization.
**Library list**:

- core - core code of babel
- plugin-proposal-class-properties - allow use features like class static and property initialization
- preset-env - allows use javascript without micromanaging syntax transformations
- preset-react - includes a serie of plugins to transform react syntax properly
- babel-eslint - A wrapper for Babel's parser used for ESLint
- babel-loader - allows transpiling JavaScript files using Babel and webpack.
- babel-polyfill - replace async await by regenerator runtime

### Webpack

Used to build project bundle and start dev server environment.
**Library list**:

- webpack - build tool
- webpack-cli - provides a set of webpack commands
- webpack-dev-server - create a development server
- html-webpack-plugin -

### Build helpers

Libraries that helps executing node scripts and define environment variabels.
**Library list**:

- concurrently - executes concurrently terminal commands
- cross-env - executes terminal commands in differents SOs
- dotenv - load environment variables from a file

### React

Frontend library used to build web site pages.
**Library list**:

- react - frontend library
- react-dom - provides DOM methods for react
- react-router-dom - router library

### Utilities

Libraries that made development easy
**Library list**:

- axios - make http requests in an elegant way
- moment - provides a series of functions to date manipulation
- eslint - validate javascript code
- nodemon - script monitor to use in development environment

### Test

Libraries that provides test executors, assertions and mocks
**Library list**:

- jest - test executor and assertion
- redis-mock - create a mock for redis connector
- supertest - agent driven library for testing node.js HTTP servers

### Other

**Library list**:

- redis - redis database api
