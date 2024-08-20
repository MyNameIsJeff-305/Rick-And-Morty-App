# Rick and Morty Info App

This app provides information about the characters, locations, and episodes of the *Rick and Morty* TV show. It is built using [Astro.JS](https://astro.build/), React, and JavaScript, and fetches data from the [Rick and Morty API](https://rickandmortyapi.com).

## Features

- Browse and view details for all characters, locations, and episodes.
- Search functionality for characters.
- Filter by status, species, and gender for characters.
- Responsive design for both mobile and desktop users.

## Technologies Used

- **Astro.JS**: Static site generation framework.
- **React**: For building user interfaces and managing component state.
- **JavaScript**: Core scripting language for the app.
- **Rick and Morty API**: Data source for the app.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rick-and-morty-app.git
Navigate to the project directory:
bash
Copy code
cd rick-and-morty-app
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
The app will be running at http://localhost:3000.
API

This app fetches data from the Rick and Morty API, a RESTful API that provides detailed information on characters, locations, and episodes of the Rick and Morty TV show.

Project Structure

bash
Copy code
├── public
├── src
│   ├── components
│   ├── pages
│   ├── styles
│   └── utils
├── astro.config.mjs
├── package.json
└── README.md
components/: Contains all React components such as CharacterCard, LocationCard, and EpisodeCard.
pages/: Contains the main pages of the app like Characters, Locations, and Episodes.
styles/: Global styles and component-specific styles.
utils/: Helper functions for API calls and data manipulation.
Usage

Characters Page: Browse and search for characters, apply filters, and view character details.
Locations Page: Explore different locations from the show with detailed descriptions.
Episodes Page: Find information on all episodes, including air dates and episode summaries.
Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make your changes in a new branch. Once your changes are ready, open a pull request.

License

This project is licensed under the MIT License.

Acknowledgements

Rick and Morty API for providing the data.
Astro.JS for the static site generation framework.
React for building user interfaces.
