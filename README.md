# Book_search_engine
![License](https://img.shields.io/badge/License-MIT-blue.svg)

  ## Description
  Google Books GraphQL Refactor
    This project transforms an existing REST‑based Google Books search engine into a modern GraphQL API using Apollo Server. The original MERN‑stack app—built with React, Node.js/Express, and MongoDB—already lets users search for books and save their favorites. This project is to replace the REST endpoints with GraphQL queries and mutations for all data fetching and updates, adapt the authentication middleware to work with GraphQL, and wire up an Apollo Provider in the React client. Finally, deploy the full-stack application to Render, backed by a MongoDB Atlas database, following the provided deployment guide.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [URL Link](#url-link)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  
  1. Git clone: https://github.com/jyotikanwarhr/Book_search_engine

  2. Navigate to the project directory: cd Book-Search-Engine

  3. Right click the root package.json file and click open in integrated terminal

  4. Inside the terminal install the dependencies with the command: npm i

  5. After dependencies are installed build the application with the command: npm run build

  6. Once the build is done run the application with the command: npm run develop

  ## Usage
  To run the Book Search Engine:

  1. Launch the app using the npm run develop command.

  2. Open your browser and navigate to http://localhost:3000.

  3. Search for books by title, author, or keyword using the search input field.

  4. If logged out, you can browse book results with title, author, description, cover image, and a Google Books link.

  5. Click Login/Signup to create an account or log into your profile.

  6. Once logged in, you can save favorite books to your account.

  7. Navigate to your Saved Books page to view or remove saved books.

  8. Logout to return to the public view.

  ## Technologies
 
 ### Frontend
![React Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)  
![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Backend
![Node.js Badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![GraphQL Badge](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)  
![Apollo Server Badge](https://img.shields.io/badge/Apollo%20Server-311C87?style=for-the-badge&logo=apollographql&logoColor=white)  
![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![Mongoose Badge](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)  
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![bcrypt Badge](https://img.shields.io/badge/bcrypt-00A4CC?style=for-the-badge&logoColor=white)  
![JWT Badge](https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)  
![dotenv Badge](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logoColor=black)

  ## URL Link
  The live deployed application is available at: https://book-search-engine-laxn.onrender.com/
  
  ## Contributing
  No contributions are needed for this project

  ## Contributors
  Thank you to all the TA's, Tutors and Professor for all your help during this challenge!

  1. Jyoti Kanwar

  2. Joem Casusi - Tutor

  3. Sangeetha - Tutor

  ## Tests
  
  1. Make sure the latest version of node is installed, check by using the command: node -v in your terminal

  2. Run the development server: npm run develop

  3. Manually verify functionality by following the User Story and Acceptance Criteria in the application.

  ## License
  This project is licensed under the MIT license.