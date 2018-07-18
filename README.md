# Dev environment setup

1. Install Node.js from <https://nodejs.org/en/>. Select 'next' until the install is completed. Node.js is the foundation for React.

2. Install Yarn, 
 		
 		sudo npm install -g yarn 
Yarn is used to create the React node modules lists, package.json files, etc.
3. Install Live-Server from <https://www.npmjs.com/package/live-server>.

		sudo npm install -g live-server
Live-Server is a small http server that use used to quickly test updates.
4. Install Babel <http://babeljs.io/>.
		
		sudo npm install -g  babel-cli
Babel is the JSX compiler.

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
		
# Build code

1. To compile the code, cd to the project directory,

		cd .../learning-react/indecision
2. Execute the compile command,

		src/app.js --out-file=public/scripts/app.js --presets=env,react

# Testing

I use a combination of **Live-Server** and the **-watch** Babel option to automatically compile and display updates when a code change is detected. The updates will display in a browser window. The commands to do this are, (**NOTE** ensure you are at the project root),


	babel src/app.js --out-file=public/scripts/app.js --presets=env,react -watch

and,

		live-server public