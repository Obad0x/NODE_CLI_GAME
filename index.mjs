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