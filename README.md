## Description

This is the coursework from the [Udemy](https://www.udemy.com/) course [The Complete React Developer Course (with Redux)](https://www.udemy.com/react-2nd-edition/learn/v4/content)

**Indecision** web app demonstrates the basics of React.

**Expensify** web app explores [React Router](https://reacttraining.com/react-router/) and other more advanced features of React.

**Boilerplate** is a template dev environment that can be modified for any web app development using React.

## Dev environment setup

1. Install Node.js from <https://nodejs.org/en/>. Select 'next' until the install is completed. Node.js is the foundation for React.
2. Install Yarn, 

		sudo npm install -g yarn 
	Yarn is used to create the React node modules lists, package.json files, etc.

3. Install Live-Server from <https://www.npmjs.com/package/live-server>,

		yarn add live-server
	Live-Server is a small http server that use used to quickly test updates.

4. Install Babel <http://babeljs.io/>.
		
		yarn add babel-cli		
	Babel is the JSX compiler.

5. Install webpack, [webpack](https://en.wikipedia.org/wiki/Webpack), (**NOTE** specifying a specific version for webpack to avoid CLI conflict with babel),

		yarn add webpack@3.1.0
	webpack is used to create the application bundle.

6. Install [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom)

		yarn add react react-dom
		
7. Install [babel-core](https://www.npmjs.com/package/babel-core) and [babel-loader](https://www.npmjs.com/package/babel-loader),

		yarn add babel-core babel-loader
	Babel-core is used by webpack to convert JSX. Babel-loader is used by webpack to use babel when using certain files.

8. Install webpack dev server (**NOTE** specifying specific version to avoid webpack-cli conflict.),
		
		yarn add webpack-dev-server@2.5.1
		
9. Install the babel plugin [transform class properties](https://babeljs.io/docs/en/babel-plugin-transform-class-properties)

		yarn add  babel-plugin-transform-class-properties
	This enables us to use class properties instead of standard ES6 syntax. This is useful for event handlers as they usually have issues maintaining the 'this' binding.
	
10. Install [react-modal](https://github.com/reactjs/react-modal)

		yarn add react-modal
		
	This enables us to create custom dialogs instead of the previously used alert.

### The following components are used by the Expensify application.

11. Install [React Router](https://reacttraining.com/react-router/)
		
		yarn add react-router-dom

	**Note** because we are only working with web apps in the course, we don't need the native Android and iOS features.

12. Install [Redux](https://redux.js.org/) which is what we use to preserve state

		yarn add redux

## Sync code
Clone this repo to your local development environment.

	git clone (use with HTTPS or SSH)

## Project-specific setup

Install the local Babel presets needed for this project. The presets are **env** and **react**

1. cd to the project directory, (e.g. ~/dev.sund0g/learning-react/indecision) and set up Yarn to specify local dependencies,

		yarn init
	This creates/updates package.json which describes everything the project needs in order to run.

2. Now add the presets,

		yarn add babel-preset-react babel-preset-env
		
3. Set up webpack to work with scss by installing [css-loader](https://www.npmjs.com/package/css-loader) and [style-loader](https://www.npmjs.com/package/style-loader),

		yarn add style-loader css-loader
		
4. Add [sass-loader](https://www.npmjs.com/package/sass-loader) enabling us to import sass files, and [node-sass](https://www.npmjs.com/package/node-sass) enabling us to convert sass/scss files into css,

		yarn add sass-loader node-sass
	
5. Install [Normalize.css](https://necolas.github.io/normalize.css/) to ensure we get the same behavior in all browsers,

		yarn add normalize.css
		
6. Install [uuid](https://www.npmjs.com/package/uuid) so we can create random ids as part of Section 10 Lecture 93,

		yarn add uuid

## Build and Test
	
For development work I use **webpack-dev-server** (installed in step 8 above). The command to both build and refresh the webpage is,

	yarn run dev-server
This speeds development up a bit. This command is not recommended for production builds.
	
## Debugging

Because I use Chrome, I have added the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) from the Chrome Web Store. If you install the tools and you have an existing debug tab open, you will need to close and reopen a new tab to activate the tools.