# Car-Tune Network

#### A vehicle inventory management system for automotive service departments _2018_

###### by **Adam Smith**

## Description

___Add a Notes section where you document unforeseen issues and questions you encountered during your development process. Commit these notes by themselves.
In your description of the project include your thoughts on the differences in development process in Angular versus React.___

This project is a re-imagining and refactor of an Angular project about managing animals in a zoo. This time we're managing vehicle inventory for an auto repair shop. The user has the ability to view and edit the details about cars that are in the shop at any given time including shop location (which bay the car is in), year, make, and model of car, reason for the car being in the shop, if the car has been inspected by a mechanic, and any progress that has been made.

The layout will be fairly straightforward: The App component will contain a Header and Body component. The Header and body will always be rendered. The Body will include a list of all cars currently in the shop. Another part of the Body will have Routes to view details about the car, edit details about or remove any car, or to add a new car.

![project layout](project-diagram.png)

## Notes

A lot of this process felt similar to building an Angular project. Building each piece as a component and routing them together brings back a lot of memories from the old days. The biggest difference so far is that I'm not sure how to pass data. Also the components in React feel a lot smaller than components in Angular. I do like that the React files have everything in one place: logic, styling, and markup. It makes a lot of sense to build that way so we aren't chasing down where each part is when we want to change something about a component.

One of the biggest hurdles to overcome from the project today was passing the hard-coded data to different components for dynamic routing. In the lessons the data was hard-coded right into the component. Sure, that works ok, but it's limited to the file it is hard coded into. If you were to hard code it into any other files that needed the data, making changes to the data becomes more cumbersome and it isn't not very DRY. To solve the problem I had to put the data in a separate JavaScript (not JSX) file and import it into the components that need the data. Also, when generating a list of cars that would use the same detail component I passed the key into the URL like we did in Angular to use in dot-notation for accessing a particular subset of data in the array of cars in the inventory.

I chose not to link up Sass to this project, even after figuring out how to get it to reliably load with hot-module-replacement, because I found out that variables, or "CSS Custom Properties" as they are named, are totally in vanilla CSS. I'm not sure why I didn't know about that earlier, but it's incredibly straightforward and nullifies 95% of my reasoning for wanting to use Sass with my React project. My friend who is a React dev at Nike told me about another CSS library called Glamorous that builds CSS in JavaScript. His team is using it now because you can use it to style in both ReactJS and React Native.

## Notes from Week 2

_8:45am_
Looking at my component tree this morning, I think it will be pretty logical to add state in it's current form. There's one side of the component tree to show the list of cars. This will always be showing as a sort of "sidebar" feature on the page. The other side of the page is where the router will make changes to the display. These changes will take the form of a welcome page with instructions and links to some of the routes, car details panel, add new car form, edit existing car form, and an error 404 page. Since the Body component is the nearest common parent of all of the components needing state, it makes sense to turn Body into a stateful component.

_4:30pm_
I spent a long long time (way too long) trying to figure out how I could get React Router to navigate to a different path inside of a function after clicking on a car in the list since calling a callback function from a link was not working. After banging my head against a wall for two hours I was able to get the path to load into the address bar, but the view was not updating to the new route. I think this is because I'm using <Switch> instead of <Router>, but the documentation is difficult to navigate and doesn't seem to be very helpful. I ended deciding it would be easier to write up a function to pass the key of the car selected into a state property and use a link nested inside that div to navigate to a details component where the car was.

On a lighter note, after a few hours of research, trial and error I did manage to find a method to get two way data binding very much like we did in Angular with the [(ngModel)] for updating the properties of the cars in the list. I'll also be adding a method to add new cars sometime in the near future. Success!

## Setup

1. Open Terminal or Command Line.
2. Change directories to where you would like to clone the files.
3. Run
`$ git clone https://github.com/alspdx/car-tune-network.git`.
4. Change directories to the 'car-tune-network' directory.
5. Run the following in the command line:
```
$ npm install
$ npm run start
```
6. The project should be served at `http://localhost:8080/` or another location that will be shown in the Terminal window.

## Database Setup

  1. Visit the [Firebase](https://firebase.google.com/) website.
  2. Login with your Google account (or create one before logging in if you don't already have a Google account).
  3. Click the "Add project" button.
  4. Create a name for the project and click the "Create project" button.
  5. Click the "Database" tab in the menu on the left hand side of the page.
  6. Click the "Get Started" button to initialize your Firebase database.
  7. Click the "Project Overview" link at the top-left of the page.
  8. Click the "Add Firebase to your web app" button.
  9. Copy the apiKey, authDomain, databaseURL, projectId, and storageBucket key/value pairs.
  10. Finally add the following export statement beneath the api-keys export in the "api-keys.js" file with your Firebase configuration properties where they belong. The configuration is already linked to an import statement in the application files so no other steps are necessary.

  ```
  export const masterFirebaseConfig = {
    apiKey: "{{yourApiKeyHere}}",
    authDomain: "{{yourAuthDomainHere}}",
    databaseURL: "{{yourDatabaseURLHere}}",
    projectId: "{{yourProjectIdHere}}",
    storageBucket: "{{yourStorageBucketHere}}"
  }
  ```

## Technologies Used:
* JavaScript
* React
* JSX
* Node.js
* NPM
* Webpack
* Babel

## License

Copyright (c) 2018, Adam Smith.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
