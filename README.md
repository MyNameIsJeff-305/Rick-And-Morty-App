# Rick and Morty Info App

This app provides information about the characters, locations, and episodes of the *Rick and Morty* TV show. It is built using [Astro.JS](https://astro.build/), React, and JavaScript, and fetches data from the [Rick and Morty API](https://rickandmortyapi.com).

[Live Website](https://66c546b58c87830008652f2f--myrickandmortyapp.netlify.app/)

![Screenshot 2024-08-20 at 9 52 30 PM](https://github.com/user-attachments/assets/0f3ed2ce-bf3a-4874-a49a-76e1fa90af87)


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
   ```
2. Navigate to the project directory:

   ```bash
   cd rick-and-morty-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. The app will be running at http://localhost:4321.


## API

This app fetches data from the Rick and Morty API, a RESTful API that provides detailed information on characters, locations, and episodes of the Rick and Morty TV show.

## Project Structure

   ```bash
   ├── public
   ├── src
   │   ├── components
   │   ├── pages
   │   ├── styles
   │   └── utils
   ├── astro.config.mjs
   ├── package.json
   └── README.md
   ```

- components/: Contains all React components such as CharacterCard, LocationCard, and EpisodeCard.
- pages/: Contains the main pages of the app like Characters, Locations, and Episodes.
- styles/: Global styles and component-specific styles.
- utils/: Helper functions for API calls and data manipulation.

## Usage

1. Characters Page: Browse and search for characters, apply filters, and view character details.
2. Locations Page: Explore different locations from the show with detailed descriptions.
3. Episodes Page: Find information on all episodes, including air dates and episode summaries.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make your changes in a new branch. Once your changes are ready, open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

Rick and Morty API for providing the data.
Astro.JS for the static site generation framework.
React for building user interfaces.
