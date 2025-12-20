# React News App

A modern, responsive news application built with React and Vite that fetches real-time news articles using the NewsAPI. This application provides a seamless browsing experience with category filtering and a clean user interface.

## Features

*   **Real-time News:** Fetches the latest headlines and articles from NewsAPI.
*   **Category Filtering:** Browse news by categories such as Business, Entertainment, General, Health, Science, Sports, and Technology.
*   **Response Design:** Fully responsive layout optimized for mobile, tablet, and desktop devices.
*   **Modern UI:** Built with Tailwind CSS and DaisyUI for a polished and accessible interface.
*   **Context API:** Efficient state management using React Context for data flow.

## Tech Stack

*   **Frontend Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **HTTP Client:** [Axios](https://axios-http.com/)
*   **State Management:** React Context API

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   Node.js (version 14.18+ or 16+ recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd newsApp
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the root directory of the project and add your NewsAPI key:

    ```env
    VITE_API_KEY=your_newsapi_key_here
    ```

    > **Note:** You can get a free API key from [NewsAPI.org](https://newsapi.org/).

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open your browser and navigate to the local URL provided (usually `http://localhost:5173`).

## Project Structure

```
newsApp/
├── src/
│   ├── components/      # Reusable UI components (Navbar, Category, News, etc.)
│   ├── config/          # Configuration files (Axios setup)
│   ├── context/         # React Context for state management
│   ├── page/            # Page components
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── .env                 # Environment variables
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Usage

*   **Home Page:** Displays the latest news articles from the "General" category by default (or "India" based on initial fetch).
*   **Categories:** Click on the category buttons (e.g., Sports, Tech) in the navigation bar or category section to filter news articles.
*   **Read More:** functionality to view full details of an article (if implemented/available in UI).
