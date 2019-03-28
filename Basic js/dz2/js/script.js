/**
 * @type {string}
 */
var login;
/**
 * @type {string}
 */
var password;
// asking the login
var login = prompt( 'Введите логин' );

// begin switch/case
switch (login) {            
    case 'Админ':           //if login = 'Админ'
    var password = prompt( 'Введите пароль' );      // then asking for password
    switch (password) {     // begin new switch/case
        case 'Черный Властелин':    //if password = 'Черный Властелин'
        alert( 'С возвращением в Мордор!' );    // writing 'С возвращением в Мордор!'
        break;  // if all right - breaking the app
        case null:  //if password was cancelled
        alert( 'Вход отменен' );    // writing 'Вход отменен'
        break;  // if all right - breaking the app
        default:    // if password = something else
        alert( 'Ха-ха! Пароль неверен! Шах и мат, досвидули!' );  // writing 'Ха-ха! Пароль неверен! Шах и мат, досвидули!'
        break;  // if all right - breaking the app
    }
    break;  // if all right - breaking the app
    case null:  //if login was cancelled
    alert( 'Вход отменен' );    // writing 'Вход отменен'
    break;  // if all right - breaking the app
    default:    // if login = something else
    alert( 'Я вас не знаю, уходите' );  //then writing 'Я вас не знаю, уходите'
    break;  // if all right - breaking the app
}
