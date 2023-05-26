# Getting Started with Create React App

### `In the project directory, you can deploy the GitHub Page:`

1.  firstly create React App.
```bash
npx create-react-app my-app
cd my-app
npm start
```
2. create react components
```bash 
npm start 
    or
npm run dev 
```

3. Build the React App.
```bash
npm run build
```

4. Open your `package.json` and add a `homepage` field for your project:
```
  "homepage": "https://myusername.github.io/my-app",
```

5. Add the following `scripts` in your `package.json`:
```bash
"scripts": 
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build", 
#    you'll need to make one additional modification:
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```
6. Deploy the site by running
```bash
npm run deploy
```

### Note:  
For a project page, ensure your project’s settings use gh-pages.\
Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

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
