// code your solution here
//function1
saturdayFun();
function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog");


//function2
function mondayWork(task = 'go to the office') {
    console.log(`This Monday, I will ${task}.`)
    return `This Monday, I will ${task}.`
}

//function3
function wrapAdjective(flair = '*') {
    return function(title = 'special') {
        return `You are ${flair}${title}${flair}!`
    }
    }
    wrapAdjective("%")("a dedicated programmer");

