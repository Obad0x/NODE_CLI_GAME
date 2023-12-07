#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName; 


    const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));


async function Welcome(){
            const rainbowTitle = chalkAnimation.rainbow(
                'Who wants to be a Javascript Millionaire?'
            );


            await sleep();
            rainbowTitle.stop();
            console.log(`
            ${chalk.bgBlue('HOW TO PLAY')}
            i am a process on your computer.
            if you get any question wrong i will be ${chalk.bgRed('Killed')}
            so get all the questions right... 

            `);
;}


await Welcome();



async function askName() {
        const answers = await inquirer.prompt({
            name :'player_name',
            type : 'input',
            message : ' What is your name',
            default(){
                    return 'Player';
            },
        });

        playerName = answers.player_name;
}

await askName();


async function question1(){
    const answers = await inquirer.prompt({
        name :'question_1',
        type : 'list',
        message : ' Javascript was created in 10 days then released on \n',
        choices :[
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17th, 1995',
        ],
    });
    return handleAnswer(answers.question_1 == 'Dec 4th, 1995');
}


async function handleAnswer(isCorrect){
        const spinner = createSpinner('Checking answer...').start();
        await sleep();


        if(isCorrect){
                spinner.success({ text: `Nice Work ${playerName}.`})
        }else{
            spinner.error({ text: `💀💀💀 Game Over , you lose ${playerName}!`});
            process.exit(1);
        }
}

await question1();


function winner(){
    console.clear();
    const msg = `Congrats, ${playerName}! \n $ 1 , 0 0 0 , 0 0 0` 

    figlet(msg, (err, data)=>{
        console.log(gradient.pastel.multiline(data))
    })
}

await winner();

