# marrow
A rich, barebones start to a JavaScript web project

## Motivation
There are a lot of web templates that include these fancy shmancy libraries and frameworks, but what about those who want to hone their fundamentals with some good ol javascript, while having industry standard tools? That's where the idea of marrow came.

## Goal
The goal with marrow is to provide the most barebones and lightweight way to get started with a javascript front-end web development project. In particular I want to include.

- Webpack with basic configuration for the most common files (css, fonts, images, and csv/json)
- ESLint and Prettier configuration with the Airbnb style guide
- A basic file structure to get going as quick as possible

## Installation
1. On the top right, you will see a "use this template" button. Click on it and click "Create a new repository" and you can now make a repository of your own using the marrow template!

![Create new repository on template button](https://docs.github.com/assets/cb-77734/mw-1440/images/help/repository/use-this-template-button.webp)

2. Copy the repository to your IDE using your preferred method.

3. In your terminal, write the following command to install the node modules needed for the project.

```bash
npm i
```

4. Open the index.html file in the dist folder

```bash
open ./dist/index.html
```

5. Run the following command to auto build the website whenever a change is made

```bash
npm run start
```

6. Make changes to the files in the src folder and have fun programming!

*If you want to go all the way and do a complete reset of this project, remove everything in the style.css file and clear the index.js besides the css imports.*

```javascript
import "./style.css";
import "./reset.css";
```

## Custom npm commands made for this template

1. Build the project once

```bash
npm run build
```

2. Build the project whenever a change is detected

```bash
npm run start
```

## Contact

If you want to contact me over anything, whether it be about the template or to just talk about programming in general, feel free to connect through my Twitter. Would love to talk about tech with other people who are in the dev world!

[Twitter @BonnyBonBon_](https://twitter.com/BonnyBonBon_)