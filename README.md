# NodeReact-Template

## Overview

NodeReact Template combines the  backend (`Node.js`) and the frontend (`React.js`) into a single repository for a fullstack template allowing rapid development and quick deployment.

The frontend template is bootstrapped with `create-react-app` and includes `react-router-dom` and `Material-UI`.
The backend template is generated through `express`, and includes `nodemon` & `concurrently`.

In dev mode, the React and Node server are run concurrently, with API calls proxied from the react dev server to the node server.
In production, the Node server will host the React build and API endpoints.


### Project Structure

- `src/frontend` contains the React app bootstrapped with create-react-app served on default PORT 3000.
- `src/backend` contains the Node app hosted on PORT 4000 (unless specified through process.env).
- `package.json` in the root contains script commands to run in dev mode locally, and also serve the build for production.

### Dev Setup

Initial set up and installation of dependencies can be done manually

1. `cd src/frontend && npm install`
2. `cd src/backend && npm install`

OR

The run command can be run directly from project root: `npm run dev`

Output logs of both the React dev server and the Node server are combined in the shell.
