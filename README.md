# Who Wants to Be a JavaScript Millionaire?

This is a CLI (Command Line Interface) application that simulates the popular game show "Who Wants to Be a Millionaire?", but with a JavaScript twist. The game asks JavaScript-related questions, and if you answer incorrectly, the game ends.

## Getting Started

To get started with the game, you need to have Node.js installed on your machine. Once you have Node.js installed, you can clone this repository and install the dependencies.

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

Usage
To start the game, run the following command:
```
node index.mjs
```

Game Rules
The game rules are simple:

The game will ask you JavaScript-related questions.
If you answer a question incorrectly, the game ends.
Code Explanation
The game is written in JavaScript and uses several npm packages:
```
chalk: This library is used for styling the console output.
inquirer: This library is used for creating interactive command line user interfaces.
gradient-string: This library is used to apply gradient color effects to the console output.
chalk-animation: This library is used to apply animations to the console output.
figlet: This library is used to create ASCII Art from text.
nanospinner: This library is used to create a spinner in the console, which is used when checking the answers.
The game starts by welcoming the player and explaining the rules. It then asks for the player’s name and proceeds to ask the questions. If the player answers a question correctly, the game proceeds to the next question. If the player answers incorrectly, the game ends.
```

File Explanation
The root file of the project is index.mjs. The .mjs extension is used to specify that the file is a module. This was necessary because the "type": "module" field in the package.json file was causing some issues.

Contributing
Contributions are welcome. Please open an issue or submit a pull request if you would like to contribute.

License
This project is licensed under the MIT License.
