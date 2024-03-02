# CosmicFlow

## Description

This is my Kanban REACT app, submitted as part of the Ironhack Web Development Bootcamp Module 2 mini-project, February 2024 cohort.

### Proyect requirements
The React application should have the following features:
* It should be an app made for a single user. ✔️
* Navbar - A component that displays the name and the logo of the app, shown on all the pages. ✔️
* Footer - A component that displays a link to the GitHub repo of the project, shown on all the pages. ✔️
* Sidebar - A sidebar component shown on all the pages. The component should display links to pages added to the app at a later stage. ✔️
* Items List - A list of items showing the JSON data. ✔️
* Conditional Rendering - Conditionally render content using boolean properties from the project’s JSON data. ✔️
* Delete Items - A button on each list item that allows the user to delete the item from the list. ✔️
* Item Details Page - A page showing the details of the selected item from the list of items.
* About Page - A page showing the project description and information about the team members (students) working on the project, including links to their GitHub and LinkedIn profiles. ✔️
* Not Found Page - A page shown whenever the user navigates to a URL route that doesn’t exist in the app. ✔️
* Create Item Form - A form that allows the user to create a new item and add it to the items list.
* Update Item Form - A form that allows the user to update an existing item on the list.
* Keep your code clean and organized by using descriptive variable names, correct indentation, removing any unused code, and maintaining proper file structure and naming.
* Extra: Display a toast with feedback whenever a task is successfully created, updated, or deleted.
* Extra: The user should be able to easily move tasks between columns by dragging and dropping them.

### Credits

* All space images are from NASA and were taken from: https://science.nasa.gov/mission/webb/multimedia/images/
* All icons used were taken from https://icons8.com/icons
* Logo was taken from https://stock.adobe.com/search?k=%22space+logo%22&asset_id=563350020
* All quotes were taken from https://www.brainyquote.com and https://spacequotations.com/quotes-about-space/
* Error page image taken from: https://www.irishtimes.com/resizer/R1ncS8w_lc193kscBzlcYsjdEcU=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/5W5SBE4OVBYZSUTJDYQ2HYWIDA.jpg
* Astronaut recruiting image taken from: https://img.freepik.com/premium-vector/astronaut-recruiting-poster_77221-136.jpg 

### Iteration 1 tasks
1. Set up a GitHub repository for the project. ✔️
2. Create a new React application locally in the folder of the cloned repository. ✔️
3. Remember to **commit your changes often and push them to the GitHub repo** after creating the new React app. ✔️
4. Create a **Home Page** in your React app that has the following features:
    - The **Navbar** component that displays the app’s name and logo. ✔️
    - The **Footer** component with the link to the GitHub repository of the project. ✔️
    - The **Sidebar** component with the links to the Home and About page. ✔️
    - Add basic styling to your app. ✔️

### Iteration 2 tasks
1. Render your JSON data as a list. ✔️
2. Conditionally render content in the list items.
    -  Condition to conditionally render content on each item in the list.✔️
    - If objects in JSON dataset don’t contain any boolean property, have  a conditional check that results in true or false. ✔️
3. Include a delete button on each list item that allows the user to delete the item from the list. ✔️
4. Make the list a separate component by extracting the code for better code organization (for example, ```<List />```). ✔️
5. Make the list item a separate component and use the new component to render the list items (for example, ```<ListItem />``` or ```<ItemCard />```). ✔️

### Iteration 3 tasks
1. Install and set up react-router in your React app. ✔️
2. Create the following page components and the routes to render them in the app:
    - Dashboard Page - A page that the user sees first when they open the app. It should show the items list that you created previously. ✔️
    - Item Details Page - A page that displays all the details of an item selected from the items list. 
    - About Page - A page showing the project description and information about the team members (students) working on the project, including links to your GitHub and LinkedIn profiles. ✔️
    - Not Found Page - A page that renders whenever a user navigates to a URL route that doesn’t exist in the app. ✔️
3. The Navbar, Footer, and Sidebar components should be displayed on all the pages. ✔️

### Iteration 4 tasks
1. Create a form component that allows the user to create and add a new item to the items list. The form component should be displayed on the Dashboard page.
2. Create a form component that allows the user to update an existing item from the items list.

### Iteration 5 tasks:
1. Finish implementing any remaining features in your app.
2. To make sure that everything is working properly, open the React app and verify that all the pages are accessible and that all the features are working properly. Additionally, check the browser’s 3/ 3. Dev Console and make sure there are no lingering console logs or unresolved errors.
4. Prep slides for presentation.

### Iteration 6 tasks:
1. Finish implementing any remaining features in your app.
2. Finish styling changes in App.


### Pending tasks
- FIGURE OUT ITEMS DETAILS PAGE and its url parameter browsing.
- Add buttons functionality to dashboard.
- create forms and add functionality to dashboard page.
- create update form and add functionality to item details page.
- integrate drag and drop functionality.
- integrate toasts display whenever a task is successfully created, updated, or deleted.
- Style the Nav bar using the restaurant menu like style theme.
- style the reduced cards into celestial bodies.
- style the different pages.

### Ideas that I would like to implement
1. Side Bar style: https://reactjsexample.com/react-burger-menu-an-off-canvas-sidebar-react-component-with-a-collection-of-effects/
2. Kanban board stlye: https://static.kanbantool.com/home/kanban-software.png taken from https://kanbantool.com/
5. Space images polaroid like carousel gallery :https://codepen.io/t_afif/pen/PoedrGY
    * Maybe on click zoom for each picture? 
6. Fonts for different aspects:
    * H1 font - https://fonts.google.com/specimen/Anta
    * slogan font - https://fonts.google.com/specimen/Kalam?classification=Handwriting
    * H2, H3 font - https://fonts.google.com/specimen/Roboto
    * Card font - https://fonts.google.com/specimen/Swanky+and+Moo+Moo?classification=Handwriting
    *  Quote font - https://fonts.google.com/specimen/Farsan?classification=Handwriting
