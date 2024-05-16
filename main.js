#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userinput",
    message: "please enter the number of seconds",
    type: "number",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid number";
        }
        else if (input > 60) {
            return " seconds must be in 60 ";
        }
        else {
            return true;
        }
    }
});
let input = res.userinput;
function countDownStart(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 4)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
countDownStart(input);
