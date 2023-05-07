![](https://github.com/chumarie/my-media-server/blob/master/tekflix.gif)
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="http://tekflix.marie-chu.com/">
    <img src="https://i.ibb.co/Jvz8d9Z/tekflix-1.png" alt="Logo" width="200">
  </a>
  <p align="center">
    Media server with Emby API
    <br />
    <br />
    <a href="http://tekflix.marie-chu.com/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

TEKFLIX is a media server client that is directly connected to your EMBY server. The project was carried out with the goal of achieving a modular design while adhering to the hexagonal architecture.

### Built With

* [![React][React.js]][React-url]
* [![Tailwind CSS](https://img.shields.io/badge/tailwind-css-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
* [![Vite.js](https://img.shields.io/badge/vite.js-%23649EFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
* [![Emby API](https://img.shields.io/badge/Emby_API-%234782C2?style=for-the-badge&logoColor=white)](https://emby.media/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get your EMBY API Key from [http://app.emby.media/](http://app.emby.media/)
2. Install NPM packages
   ```sh
   npm install
   ```
3. Edit yout`.env.local` into `.env` with yout emby config
   ```js
   const VITE_EMBY_SERVER_API_URL = 'ENTER YOUR API URL';
   const VITE_EMBY_SERVER_API_KEY = 'ENTER YOUR API KEY.env.local';
   ```

<!-- USAGE EXAMPLES -->
## Usage
### Run the project

   ```sh
   npm run dev
   ```

### Build for production
    npm run build