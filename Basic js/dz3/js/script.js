/**
 * @param a first number
 * @type {number}
 */

 /**
  * @param b second number
  * @type {number}
  */

/**
  * @param c second number
  * @type {number}
  */

/**
  * @param d second number
  * @type {number}
  */

  /**
   * @param message message to user
   * @type {srtring}
   */

// asking the first number
var c = parseInt(prompt('Введите число'), 10);

// asking the second number
var d = parseInt(prompt('Введите большее число'), 10);

// initialize variables
var a, b;

// validate app
// if numbers are equal we start the circle and ask new numbers until we get different numbers
// after the circle we need to check variables if the first variable is less than the second.
// after this circle we have to get the highest value in variable b, and the smallest one in variable a, we'll get this result after the first if\else statement
// then we have to make the same thing to the case, when the values are different from the beginning but the highest value assigned in the first variable.
// if the first variable gets the smallest value, then we will assign the value of variable c to a and variable d to b.
if (c == d) {
    while (c == d) {
        c = parseInt(prompt('Снова введите первое число'), 10);
        d = parseInt(prompt('Введите второе число, числа должны быть разными'), 10);
    }
    if (c > d) {
        b = c;
        a = d;
    }   else {
        a = c;
        b = d;
    }
}   else if (c > d) {
    b = c;
    a = d;
}   else {
    a = c;
    b = d;
}

// setting the text of message
var message = 'Простые числа из промежутка';



// creating the circle to sort out the numbers from the section between a and b. the count will start from the value of a and end at the value of b.
// calling the function to check if the number is prime and find the results for the value of i.
for(var i = a; i <= b; i++){
    if(isPrime(i)) {            // if the function returns true, then adding the new prime number after empty space to the variable message.
        message += '\n' + i ;
    }
}
// check if there are prime numbers in the section
if ( message == 'Простые числа из промежутка' ) {
    // writing the message to the document if there is no prime numbers in the section
    document.write( 'Между заданными числами нет простых, вечно ты усложняешь все, жук!!!' );
}   else {  
    // writing the message to the document. it consist of all prime numbers of the section
    document.write(message);
}

// creating the function to check if the number is prime. The function depends on inner variable num
// if num<2 then we stop checking the number
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {     // starting the circle. the first value of variable is 2. we search the result of deviding the number to variable i and check if it results any remainder of the devision. then increasing i by 1, checking  and so on.
    if(num%i==0) {          // checking the remainder and if it is 0, then uor function returns false.
        return false;
        }
    }
        return true;        // if the remainder is not 0, then function returns true.
}
