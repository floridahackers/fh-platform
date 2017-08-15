# Contributing to the Florida Hackers Platform

Thank you for wanting to contribute to part of this amazing community. Folks like you make this community what it is. 

**If you simply want to add your event to the site, check out the [ADD EVENT GUIDE](./ADD_AN_EVENT.md).**

Alright, lets get you up to speed.

## How to contribute a change

Before submitting a pull request, open an issue explaining your idea/proposal in order to have some discussion started. If the idea seems good to go, fork the repo and implement your changes. Submit a pull request with details of what you did, possible screenshots, and any other comments you may have. 

If all looks good and a contributor accetps the changes, your change will be merged in and automatically deployed by the Travis pipeline. 


## Project basics

The FH site is made in HTML, CSS, and JS. What you see when you visit floridahackers.com is being served from the contents of the `public` directory. `index.html` is the homepage, while the other `.html` files have the main markup structure for the respective pages. The initial goal of the site was for it to stay light and simple in order to be able to serve it under the many different available methods as well as to keep the content search engine friendly, thus it is mostly a static site enhanced with JavaScript goodies. 

Under the public directory you'll also find an `images` directory with a logo and some graphics, as well as a `vendor` directory with some js depenencies that we use. 

The `_scripts` directory contains scripts used for continuous deployment which you probably won't change, so let's not worry about that one too much.

The meat of the site is under the `src` directory. 

We use react to put together some of the more interactive aspects of the site, along with some sprinkled js/jquery scripts to keep search engine accessibility easy without introducing complex server rendering setups. 

We use webpack to compile the app scripts, styles, and components, with a custom configuration which generates a different js file per html page. 

### Compiling for development

You'll need Node.js/NPM set up in order to download dependencies and run the development server. At the root directory of the app run 

```
npm install
```

to setup dependencies, and then start the development server with 
```
npm run start
```

You should see the site at `localhost:8080`.


### Styles

The styles are done with Sass using the SCSS syntax and the entry point is under `src/scss/main.css` which includes some base files, sets up some variables used throughout, and includes styles for pages and components.  

### JS

Big parts of the site rely on a combination of js/jquery and react. 
The main entry points are `src/index.js`, `src/about.js`, and `src/calendar.js`

These files include a shared scripts file that lets webpack compile our sass, as well as the menu that is used in every page. The menu bar is made sticky using the `sticky` jQuery plugin, and the contents of the overlay menu are rendered by the `MenuApp` react component, which simply iterates over an array of json objects. 

The `index.js` file renders the upcoming events section on the homepage from shared data in the `src/all_events.js` file which is the main event store.

The `about.js` sets up simple scripts for navigation with the table of contents since it's a content heavy page.

The `calendar.js` file sets up the `CalendarApp` react component which splits events into Upcoming and Past. 

Additionally, members of the community may use the Add Event page to generate an event's json object to submit in a pull request. This is driven by the `add-event.js` file which sets up the AddEvent component. 

The `src/components` directory is home to the components use throughout the site. 

