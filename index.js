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
function wrapAdjective(msg = 'You are') {
    return function(*) {msg
    return
    }
}

/*Implement a function called wrapAdjective:

It should return a function
This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.
return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
It should take as parameter a String that will be used to create visual flair
You may call the parameter whatever you like, but its default value should be "*"
Call example: const encouragingPromptFunction = wrapAdjective("!!!")
function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`; */