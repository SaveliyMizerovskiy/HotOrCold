function intialize(){
    let number = Math.floor(Math.random() * 100);
    let guess = 50;
    guesses = 5;
    current = document.getElementById("currentGuess");
    hotOrCold = document.getElementById("hotOrCold");
    counter = document.getElementById("counter");
    console.log(number);
    display();
}

function add(num){
    if (guesses > 0){
        guess += num;
        if (guess > 100){
            guess = 100;
        }
        guesses --;
    }
    console.log(guess);
    display();
}

function subtract(num){
    if (guesses > 0){
        guess -= num;
        if (guess < 0){
            guess = 0;
        }
        guesses --;
    }
    console.log(guess);
    display();
}

function temp(){
    if (number == guess){
        return 'Correct';
    } else if (Math.abs(number - guess) <= 5){
        return 'Very Hot';
    } else if (Math.abs(number - guess) <= 8){
        return 'Hot';
    } else if (Math.abs(number - guess) <= 15){
        return 'Very Warm';
    } else if (Math.abs(number - guess) <= 20){
        return 'Warm';
    } else if (Math.abs(number - guess) <= 30){
        return 'Cool';
    } else if (Math.abs(number - guess) <= 40){
        return 'Very Cool';
    } else if (Math.abs(number - guess) <= 55){
        return 'Cold';
    } else if (Math.abs(number - guess) > 55){
        return 'Very Cold'
    } 
}

function display(){
    current.innerHTML = guess;
    counter.innerHTML = guesses;
    if (guesses < 5){
        hotOrCold.innerHTML = temp();
    }
}