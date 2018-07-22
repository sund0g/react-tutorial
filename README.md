# Description

This is the coursework from the [Udemy](https://www.udemy.com/) course [The Complete React Developer Course (with Redux)](https://www.udemy.com/react-2nd-edition/learn/v4/content)

# Dev environment setup

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

# Sync code
Clone this repo to your local development environment.

	git clone (use with HTTPS or SSH)

# Project-specific setup

Install the local Babel presets needed for this project. The presets are **env** and **react**

1. cd to the project directory, (e.g. ~/dev.sund0g/learning-react/indecision) and set up Yarn to specify local dependencies,

		yarn init
	This creates/updates package.json which describes everything the project needs in order to run.

2. Now add the presets,

		yarn add babel-preset-react babel-preset-env

# Build and Test

I use a combination of **Live-Server** and the **-watch** Babel option to automatically compile and display updates when a code change is detected. The updates will display in a browser window. The commands to do this are, (**NOTE 1** ensure you are at the project root). (**NOTE 2** you can see the actual commands by examining the "scripts" component in "package.json"),


	yarn run build

and,

	yarn run serve
	
# Debugging

Because I use Chrome, I have added the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) from the Chrome Web Store. If you install the tools and you have an existing debug tab open, you will need to close and reopen a new tab to activate the tools.