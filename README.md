# Dev environment setup

1. Install Node.js from <https://nodejs.org/en/>. Select 'next' until the install is completed. Node.js is the foundation for React.

2. Install Yarn, 

		sudo npm install -g yarn 
	Yarn is used to create the React node modules lists, package.json files, etc.
	
3. Install Live-Server from <https://www.npmjs.com/package/live-server>.

		sudo npm install -g live-server
	Live-Server is a small http server used to quickly test updates.
	
4. Install Babel <http://babeljs.io/>.
		
		sudo npm install -g  babel-cli
	Babel is the JSX compiler.
	
5. Editor/IDE choice is left to whoever is re-creating this environment. I am using [Atom](https://atom.io/) with the following packages installed,
	* [Emmet](https://github.com/emmetio/emmet-atom)
	* [Emmet Jsx Css Modules](https://github.com/ambethia/emmet-jsx-css-modules)
	* [git-plus](https://github.com/akonwi/git-plus)
	* [language-babel](https://atom.io/users/gandm)

# Sync code
Clone this repo to your local development environment.

	git clone (use with HTTPS or SSH)

# Project-specific setup

Install the local Babel presets needed for this project. The presets are **env** and **react**

1. cd to the project directory, (e.g. ~/.../soundtrak/tracking-display) and set up Yarn to specify local dependencies,

		yarn init
	This creates/updates package.json which describes everything the project needs in order to run.

2. Now add the presets,

		yarn add babel-preset-react babel-preset-env

# Build and Test

I use a combination of **Live-Server** and the **-watch** Babel option to automatically compile and display updates when a code change is detected. The updates will display in a browser window. The commands to do this are, (**NOTE** ensure you are at the project root). I also use 2 tabs, 1 for each command,


	babel src/display.js --out-file=public/scripts/display.js --presets=env,react -watch

and,

	live-server public