/**
 * @type {string}
 */
var name;
/**
 * @type {string}
 */
var profession;
/**
 * @type {number}
 */
var experience;
/**
 * @type {number}
 */
var lastNumber;
/**
 * @type {number}
 */
var salaryDollars;
/**
 * @type {number}
 */
var salaryHryvnas;
/**
 * @type {number}
 */
var moneyDollars;
/**
 * @type {number}
 */
var lastNumberDollars;
/**
 * @type {number}
 */
var lastNumbersDollars;
/**
 * @type {string}
 */
var dollars;
/**
 * @type {number}
 */
var moneyHryvnas;
/**
 * @type {number}
 */
var lastNumberHryvnas;
/**
 * @type {number}
 */
var lastNumbersHryvnas;
/**
 * @type {string}
 */
var hryvnas;
/**
 * @type {string}
 */
var years;
/**
 * @type {string, number}
*/
var checkedValue;



// validating if we get an empty data
// this function checks if user gave the empty data to us and in this case shows message and asks new data to save it in the variable
// function checking(checkedValue) {
//     if (checkedValue == '') {
//         checkedValue = prompt( 'Вы не ввели данные, попробуйте снова', 'не оставляйте поле пустым' );
//         checking(checkedValue); 
//     }
// }

// asking for the name of the user and assigning the value to the variable 'name' and validating it
name = prompt( 'Введите Ваше имя' , 'Вася' );
// if (name == '') {
//     checking(name);
// }
// if user sends empty string, then we show the message and asking to resend correct value, checking it on correctness and assign to variable
while (name == '') {
    name = prompt( 'Введите корректное имя', 'Вася' );
}


// asking for the profession of the user and assigning the value to the variable 'profession' and validating it
profession = prompt( 'Введите название Вашей профессии' , 'учитель' );
// if (profession == '') {
//     checking(profession);
// }
// if user sends empty string, then we show the message and asking to resend correct value, checking it on correctness and assign to variable
while (profession == '') {
    profession = prompt( 'Введите Вашу профессию, плиз', 'мойдодыр' );
}

// asking for the experience of the user and assigning the value to the variable 'experience' and validating it
experience = prompt( 'Сколько лет Вы работаете по этой профессии?' , 10 );
// if (experience == '') {
//     checking(experience);
// }
// if user sends empty string, then we show the message and asking to resend correct value, checking it on correctness and assign to variable
while (experience == '') {
    experience = prompt( 'Введите Ваш опыт работы, плиз', '4 отсидки' );
}

//calculating remainder of the division by 10 to get the last sign of the 'experience' and validating it
lastNumber = experience % 10;

// asking for the user's salary in dollars per month and assigning the value to the variable 'salaryDollars' and validating it
salaryDollars = prompt( 'Какова Ваша заработная плата в долларах за 1 месяц?' , 500 );
// if (salaryDollars == '') {
//     checking(salaryDollars);
// }
// if user sends empty string, then we show the message and asking to resend correct value, checking it on correctness and assign to variable
while (salaryDollars == '') {
    salaryDollars = prompt( 'Введите Вашу з\п в баксах, плиз', 11111 );
}

// asking for the user's salary in hryvnas per month and assigning the value to the variable 'salaryHryvnas' and validating it
salaryHryvnas = prompt( 'Какова Ваша заработная плата в гривнах за 1 месяц?' , 15000 );
// if (salaryHryvnas == '') {
//     checking(salaryHryvnas);
// }
// if user sends empty string, then we show the message and asking to resend correct value, checking it on correctness and assign to variable
while (salaryHryvnas == '') {
    salaryHryvnas = prompt( 'Введите Вашу з\п в гривеньках, плиз', 111222 );
}

// Assigning the value to the variable 'years'. It will get the value depending on the value of 'lastNumber' variable.
// if 'lastNumber' = 0, then 'лет' will be assigned to 'years'
// if 'lastNumber' = 1, then 'год' will be assigned to 'years'
// if 'lastNumber' is from 1 to 5 not including 5, then 'года' will be assigned to 'years'
// In other cases of 'lastNumber' values 'лет' will be assigned to 'years'
if ( lastNumber >= 0 && lastNumber < 1 ) {
    years = 'лет' ;
} else if ( lastNumber === 1 ) {
    years = 'год';
} else if ( lastNumber > 1 && lastNumber < 5 ) {
    years = 'года';
} else { 
    years = 'лет';
}

// In the case, if 'experience' is from 10 to 21 not including 21, then 'лет' will be assigned to 'years'
if ( experience > 9 && experience < 21) {
    years = 'лет';
}

// Calculating the all salary in dollars for the period of working and assigning calculated value to 'moneyDollars'
moneyDollars = salaryDollars * 12 * experience;

// Calculating the all salary in hryvnas for the period of working and assigning calculated value to 'moneyHryvnas'
moneyHryvnas = salaryHryvnas * 12 * experience;

//calculating remainder of the division by 10 to get the last sign of the 'moneyDollars'
lastNumberDollars = moneyDollars % 10;

//calculating remainder of the division by 100 to get the last two sign of the 'moneyDollars'. We need it if the value of 'moneyDollars' will end with 11-19
lastNumbersDollars = moneyDollars % 100;

//calculating remainder of the division by 10 to get the last sign of the 'moneyHryvnas'
lastNumberHryvnas = moneyHryvnas % 10;

//calculating remainder of the division by 100 to get the last two sign of the 'moneyHryvnas'. We need it if the value of 'moneyHryvnas' will end with 11-19
lastNumbersHryvnas = moneyHryvnas % 100;

// Assigning the value to the variable 'dollars'. It will get the value depending on the value of 'lastNumberDollars' variable.
// if 'lastNumberDollars' = 0, then 'долларов' will be assigned to 'dollars'
// if 'lastNumberDollars' = 1, then 'доллар' will be assigned to 'dollars'
// if 'lastNumberDollars' is from 1 to 5 not including 5, then 'доллара' will be assigned to 'dollars'
// In other cases of 'lastNumberDollars' values 'долларов' will be assigned to 'dollars'
if ( lastNumberDollars === 0 ) {
    dollars = 'долларов' ;
} else if ( lastNumberDollars === 1 ) {
    dollars = 'доллар';
} else if ( lastNumberDollars > 1 && lastNumberDollars < 5 ) {
    dollars = 'доллара';
} else {
    dollars = 'долларов';
}

// In the case, if 'lastNumbersDollars' is from 10 to 21 not including 21, then 'долларов' will be assigned to 'dollars'
// We need for the case if 'moneyDollars' will end on numbers from 10 to 21 not including 21
if ( lastNumbersDollars > 9 && lastNumbersDollars < 21) {
    dollars = 'долларов';
}

// Assigning the value to the variable 'hryvnas'. It will get the value depending on the value of 'lastNumberHryvnas' variable.
// if 'lastNumberHryvnas' = 0, then 'гривень' will be assigned to 'hryvnas'
// if 'lastNumberHryvnas' = 1, then 'гривна' will be assigned to 'hryvnas'
// if 'lastNumberHryvnas' is from 1 to 5 not including 5, then 'гривны' will be assigned to 'hryvnas'
// In other cases of 'lastNumberHryvnas' values 'гривень' will be assigned to 'hryvnas'
if ( lastNumberHryvnas === 0) {
    hryvnas = 'гривень' ;
} else if ( lastNumberHryvnas === 1 ) {
    dollars = 'гривна';
} else if ( lastNumberHryvnas > 1 && lastNumberHryvnas < 5 ) {
    hryvnas = 'гривны';
} else {
    hryvnas = 'гривень';
}

// In the case, if 'lastNumbersHryvnas' is from 10 to 21 not including 21, then 'гривень' will be assigned to 'dollars'
// We need for the case if 'moneyHryvnas' will end on numbers from 10 to 21 not including 21
if ( lastNumbersHryvnas > 9 && lastNumbersHryvnas < 21) {
    hryvnas = 'гривень';
}

// Writing the complete information to the document
document.write( 'Уважаемый(/ая) ' + name + ', за ' + experience + ' ' + years + ' работы по профессии ' + profession + ' Вы заработали ' + moneyDollars + ' ' + dollars + ' и ' + moneyHryvnas + ' ' + hryvnas + ' ! Оно того стоило?');

