# Portfolio Website

This is a personal portfolio website built using React. It includes sections for Home, About, Skills, Projects, and Contact, with smooth scrolling functionality between sections.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
  - [EmailJS](#emailjs)
  - [React Scroll](#react-scroll)
- [Contributing](#contributing)
- [License](#license)

## Demo

A live demo of the website can be found [here](https://abulmonsur.netlify.app/).

## Features

- Responsive design
- Smooth scrolling between sections
- Contact form with EmailJS integration
- Dynamic project display
- Social media links

## Technologies Used

- React
- React Router DOM
- React Scroll
- EmailJS
- Tailwind CSS
- React Icons

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

portfolio-website/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ │ ├── logo.png
│ │ └── ...
│ ├── Components/
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ ├── Home.jsx
│ │ ├── Navbar.jsx
│ │ ├── Projects.jsx
│ │ └── Skills.jsx
│ ├── index.css
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

## Configuration

### EmailJS

1.  Create an account on [EmailJS](https://www.emailjs.com/).
2.  Create a new email service and get the Service ID, Template ID, and User ID.
3.  Update the `Contact.jsx` component with your EmailJS credentials:

        ```js
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        ```

### Contributing

Contributions are welcome! Please fork the repository and create a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
