// Запрашиваем число

let a = b = parseInt(prompt('Введите количество строк и столбцов'));

// Обычная последовательность

// создаем таблицу
let table = '<table width="20%"> <tr>';

for (let i = 1; i <= (a*b); i++) {
  // если текущий элемент кратен длине строки, то делаем перенос на следующую строку таблицы, иначе добавляем текущий элемент в новую ячейку
        if (i%b == 0) {
            table += `<td> ${i} </td></tr><tr>`;
        } else {
            table += `<td> ${i} </td>`;    
        }
}
table += "</table>";
document.write(table);

// Змейка

// создаем матрицу
let matrix = [];
 
let m = 1; // начало отсчета.
 
let left = 1;// будет ли двигаться заполнение влево.(да)
 
for(let i=0,curr; i<a; i++ ){
     
    // текущая строка
    curr = matrix[i] = [];
     
    // формируем столбцы строки.
    for( let k=0; k<b; k++ ){
         
        // заполняем массив в зав-ти от направления.
        // и увеличиваем тект внутри ячейки
        curr[ left ? "push":"unshift" ]( m++ );
    }
     
    // меняем направление с каждой строкой.
    left = left == false;
}
 
//Выводим таблицу
 
let s = '<table width="20%">';
for( let i=0;i<matrix.length;i++ ){
    s+= "<tr>";
    for( let k=0;k<matrix[i].length;k++ )
        s+= "<td>"+matrix[i][k]+"</td>";
    s+="</tr>"
}
s+="</table>";
document.write(s);

// Спиральная


matrixView(spiralMatrix(a));
// создаем функцию для заполнения матрицы
function spiralMatrix( dimension ) {
  let matrix = [],  // создаем пустой массив
    x = y = 0,
    steps = dimension - 1; // Кол-во шагов в ту или иную сторону
    
  for(let i = 0; i < dimension; i++) matrix[i] = []; // Создаем массив по количеству элементов и заполняем его

  for(let i = 1; i <= (dimension*dimension); i++) {
    matrix[x][y] = i; // Задаем значение

    // Меняем кол-во шагов
    if(x === steps && y === dimension - steps - 1) steps--;

    // Движение "вниз"
    if((y >= x && y < steps) || (x - 1 === y && x === dimension - steps - 1)) y++;
    // Движение "вверх"
    else if(y <= x && y >= dimension - steps) y--;
    // Движение "вправо"
    else if(x <= y && x < steps) x++;
    // Движение "влево"
    else if(x >= y && x >= dimension - steps) x--;
  }
  
  return matrix;
}
// создаем функцию вывода матрицы
function matrixView( matrix ) {
  let rows = '';

  for(let i = 0; i < matrix.length; i++) {
    let cells = '';

    for(let j = 0; j < matrix[i].length; j++) {
      cells += '<div class="block_cell">' + matrix[i][j] + '</div>';
    }

    rows += '<div class="block_row">' + cells + '</div>';
  }
// принтим в body после последнего дочернего элемента
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="block">' + rows + '</div>');
}