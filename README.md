# portfolio_photo - application front

Le serveur api accéssible en [cliquant ici](https://github.com/mathieuCstn/portfolio_photo_api_back).

## Compte administrateur de test
Afin de tester les fonctionnalités que procurent les privilèges administrateur. Un compte utilisateur a été créé à cet escient:

compt : contact@mathieu.admin

mdp   : root

## Accéder à l'espace administrateur
L'administrateur est le seul rôle vous permettant d'ajouter, de supprimer ou de modifier les articles.
Pour accéder à cet espace en local, rendez-vous sur le lien suvant une fois le serveur api et l'application front lancés : http://localhost:3000/dashboard

## Fichier de configuration
Un fichier src/config.js a été créé pour vous permettre d'utiliser votre compte Cloudinary.

`src/config.js`
```
const config = {
    cloudinaryConfiguration: {
        /**
         * Fill this field to use the images in your cloudinary account.
         */
        cloudName: 'dmkyrjr2d'
    }
}

export default config
```

## Maquette Figma
Vous pouvez consulté la maquette figma en [cliquant ici](https://www.figma.com/file/nwRXEbc6HkD2QxuD3fW2B0/Portfolio-%26-vente-photo?type=design&t=Pd7MG4vIJMKfKroQ-6).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
