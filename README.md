# Clone of the Vinted website 👚 | client side

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)

Responsive - non SPA - clone of the [Vinted website](https://www.vinted.fr/) bootstrapped with React Library. Deployed version available [here](https://vinted-clone-eld.netlify.app)<br>
Connected to a [backend](https://github.com/Emlych/Vinted-clone) developped with node.js.
API : https://api-vinted-project.herokuapp.com/

## Features

✔️ Search engine on article name (example: "robe")<br>
✔️ Filter by ascending/descending price, min and max price <br>
✔️ Authentication system based on cookie token<br>
✔️ Display all offers with pagination system<br>
✔️ Open each offer in a new page<br>
✔️ Publish offers<br>
✔️ "Buy" these offers<br>

## Dependencies

- react-router-dom
- axios
- js-cookie
- fontawesome
- react-range
- stripe-js

## Future features to work on later

- Filter bar to make disappear when not on Offers page
- Confirmation message once article bought

## How to install and run the project

Clone this repository :

`git clone https://github.com/Emlych/vinted-clone-frontend`

`cd vinted-clone-fronted`

Install dependencies :

`yarn add `

When installation is complete, run :

`yarn start`
