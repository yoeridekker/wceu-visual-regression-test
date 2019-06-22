# Automating your QA with Visual Regression Testing Example Repository

This repository is an example for my talk [Automating your QA with Visual Regression Testing](https://2019.europe.wordcamp.org/session/automating-your-qa-with-visual-regression-testing/) at WordCamp Europe 2019. The slides for the talk can be found [here](https://goo.gl/V7QtNw).

[BackstopJS](https://github.com/garris/BackstopJS/) is used for the visual regression testing. The app itself is built with [Node JS](https://nodejs.org/), [`commander.js`](https://github.com/tj/commander.js/), and [`Inquirer.js`](https://github.com/SBoudrias/Inquirer.js).

## Prerequisites

You will need:

* A local development environment with [Node JS/NPM](https://docs.npmjs.com/getting-started/installing-node)
* [Google Chrome](https://www.google.com/chrome/)
* A live, web-accessible WordPress site
* Another environment of the WordPress site above (e.g. local, staging, etc.)

### Getting The Code

Create a new repository from this template and then either using Git clone or download the `.zip` file of your copy.

## Instructions

After setting up the repository locally (see above) you will need to:

1. Run the command `npm install` to download dependencies
1. Run the command `npm run start`
    * Select the site you want to test from the list
1. Check out the results from the sample test
    * They should open in your browser automatically
1. Edit `src/sitesToTest.js`
    * This is where the list of sites to test is stored
    * Try changing to one (or more) of your sites
    * `nonProductionBaseUrl` is your non-production environment (local, staging, etc.) URL
    * `productionBaseUrl` is your production site URL
    * Adjust `pathsToTest`, which is the array of URIs to test for each site
1. Edit `src/backstopConfig.js` to adjust viewports, delay, hidden selectors, etc.
1. Run the command `npm run build`.
    * This command needs to be run anytime you edit items in `src`
1. Run the command `npm run start`.
    * Select the site you want to test from the list

**Troubleshooting**
If you are having issues with the script hanging or BackstopJS taking a long time there may be headless Chrome instances that didn't close properly.

Try `pkill -f "(chrome)?(--headless)"` on Mac/Linux or `Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe' AND CommandLine LIKE '%--headless%'" | %{Stop-Process $_.ProcessId}` in Windows PowerShell.
