# This is my first challenge from FrontendMentor.io

- In this project  I used ReactJS, HTML5, CSS3, Redux, Redux-Toolkit, React-Router, FontAwesome, Vite.
- I took this challenge just to show my skills. It might has some errors but Im still learning and I will improve.
- In this page you can find different countries with some of their info.
- [Click here](https://country-react-app-fede.netlify.app/) to enter in the app.

Here are some changes that I made in the last commit:

First we're going to look at the first version of the project:

-The filter retained the last valid input; however, for each character introduced by the user, it made an API call. As a consequence, this resulted in massive data consumption. 
-Additionally, when the user used the input field, the select field set its value to an empty string ('').
![First Version of the project, filter](./src/assets/Primera-Version-filtro.PNG)

-The first version had no routing and it still had multiple api calls for each change, that aplies even to the "Back" button.
![First Version of the project, routing](./src/assets/Primera-Version-routing.PNG)

Now we look at the changes:

-The filter was modified in a way that it only calls the API once, no matter wich filter is aplied.
-Also, it filters now by name AND region.
![Latest Version of the project, filter](./src/assets/Nueva-Version-filtro.PNG)

-Now the app has routing, the user can access to any country following the especific rout.
![Latest Version of the project, routing](./src/assets/Nueva-Version-routing.PNG)

-Also, the user can access to a country info via its code.
![Latest Version of the project, routing 2](./src/assets/Nueva-Version-routing-2.PNG)

