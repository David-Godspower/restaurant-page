# 🍽️ David's Restaurant Page

A single-page restaurant website built with vanilla JavaScript and Webpack. The app dynamically renders the Home, Menu, Contact, and About sections without reloading the page.

## ✨ Features

- **Single-page navigation:** Switch between Home, Menu, Contact, and About views dynamically.
- **Restaurant hero section:** Includes a welcome message, restaurant information, opening hours, location, and a call-to-action button.
- **Menu display:** Presents five dishes with names, prices, descriptions, and food photography.
- **Contact information:** Displays opening hours, location, and WhatsApp contact details.
- **About section:** Introduces the restaurant and its focus on providing a great dining experience.
- **Responsive menu grid:** Menu cards automatically adapt to the available screen width.
- **Light and dark theme styles:** Uses CSS variables to support themed page colors.
- **External imagery:** Uses Unsplash images for the hero section and menu items.
- **Webpack development workflow:** Bundles JavaScript and CSS and provides a local development server.

## 🛠️ Built with

- **HTML5** for the page template
- **CSS3** for layout, themes, cards, navigation, and responsive styling
- **JavaScript (ES6 modules)** for page rendering and navigation
- **Webpack 5** for bundling
- **Webpack Dev Server** for local development
- **HtmlWebpackPlugin** for generating the final HTML file
- **CSS Loader and Style Loader** for importing styles into the JavaScript bundle
- **Font Awesome** for footer and social media icons

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer
- npm, which is included with Node.js

### Installation

1. **Clone the repository**

   ```bash
   git clone <https://github.com/david-godspower/restaurant-page>
   ```

2. **Open the project directory**

   ```bash
   cd restaurant-page
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

### Run the development server

```bash
npm start
```

Webpack Dev Server starts the application at [http://localhost:8080](http://localhost:8080) and opens it in your default browser.

### Create a production bundle

```bash
npm run build
```

The compiled files are generated in the `dist/` directory.

## 📄 Available pages

### Home

The landing page introduces David's Restaurant with a full-screen hero image, welcome message, restaurant hours, location, and a **View Our Menu** button.

### Menu

The menu includes:

| Dish | Price |
|---|---:|
| Spaghetti Carbonara | $12 |
| Margherita Pizza | $10 |
| Caesar Salad | $8 |
| Grilled Salmon | $15 |
| Tiramisu | $6 |

### Contact

The Contact page displays:

- Opening hours: Monday-Friday, 8am-10pm
- Weekend hours: Saturday-Sunday, 9am-11pm
- Location: 123 Secretariat Road, Ibadan, Oyo State
- WhatsApp: +2347026111130

### About

The About page describes the restaurant as a team of food enthusiasts focused on delivering a memorable dining experience.

## 📁 Project structure

```text
restaurant-page/
├── src/
│   ├── pages/
│   │   ├── about.js       # About page renderer
│   │   ├── contact.js     # Contact page renderer
│   │   ├── home.js        # Home page renderer
│   │   └── menu.js        # Menu page renderer
│   ├── index.js           # Application entry point and navigation
│   ├── style.css          # Application styles and themes
│   └── template.html      # Base HTML template
├── webpack.config.js      # Webpack and development server configuration
├── package.json           # Project metadata and npm scripts
└── README.md              # Project documentation
```

## 🌐 External resources

The page loads the following resources from external providers:

- Font Awesome from cdnjs
- Hero and menu images from Unsplash

An internet connection is required to display the external icons and images.

## 👤 Author

**David Godspower Ajala**

- [Portfolio](https://david-godspower.github.io/david-portfolio/)
- [LinkedIn](https://www.linkedin.com/in/david-godspower-ajala/)
- [Facebook](https://facebook.com/DavidGodspowerAjalaDGA/)
- [Twitter/X](https://x.com/DavidGAjala)
- [Email](mailto:ajaladavid11@gmail.com)

## 📄 License

This project is released under the [ISC License](https://opensource.org/license/isc-license-txt).
