# Rock, Paper, Scissors Game

## Overview

This repository contains the code for a Rock, Paper, Scissors game built using Vite, React, TypeScript, and Tailwind CSS. The game allows the player to choose between Rock, Paper, and Scissors and compete against the computer.

## Specifications
- Player starts with a balance of 5000.
- Each bet should be 500 (player can place several bets on any position: 500, 1000,
1500 etc)
- Player can not bet more than 2 positions per one game
- Winning rate for bet on 1 position is 14
- Winning rate for bet on 2 positions is 3

## Requirements
- There should be three betting positions, rock, paper, scissors.
- Player can bet on rock, paper, or scissors, but not on all three at the same time.
- The bet is reduced from the balance.
- When betting done button is clicked, the computer runs a random paper, scissors,
rock match.
- Player choice should be compared to computers choice and only one bet can win –
every tie counts as loss
- If player bets on one of them and wins, the return is 14 times the bet.
- If player bets on two of them and wins the return is 3 times the bet.
- Loss bets are not returned to player
- Bets with tie result are returned to player
- After round ends the return adds to the balance
- Player cannot bet if player has less balance than available for bet.

## Technologies Used
- Vite: A build tool for modern web development with blazing-fast development and build times.
- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.

## Getting Started

To run the Rock, Paper, Scissors game locally on your machine, follow these steps:

1. Clone the repository from GitHub:

```
git clone https://github.com/jumbodaniel/rock-paper-scissors-game.git
```

2. Navigate to the project folder:

```
cd rock-paper-scissors-game
```

3. Install the dependencies using Yarn:

```
yarn install
```

4. Start the development server:

```
yarn dev
```

5. Open your web browser and go to `http://localhost:3000` to access the game.

## Deployment

To deploy the Rock, Paper, Scissors game to GitHub Pages or any other hosting service, follow these steps:

1. Build the production version of the application:

```
yarn build
```

2. Deploy the contents of the `dist` folder to your preferred hosting service.

## Contributing

If you would like to contribute to the development of this game, feel free to submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Credits

This Rock, Paper, Scissors game was built by [Your Name](https://github.com/your-username). Thank you for playing!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
