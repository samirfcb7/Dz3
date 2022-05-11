let aa = prompt('Как вас зовут?');
let a = prompt('Сколько вам лет?');
let b = prompt('Сколько у вас денег?');
let c = prompt('Сколько человек?');
if(aa[0] === 'A','a') {
    console.log('Входите');
}
else {
    console.log('Ваше имя должно начинаться с буквы "a" ')
}
if(a >= 20 && a <= 40)   {
    console.log('Входите');
}
 else  {
    console.log('Выходите');
}


if(b >= 100)  {
   console.log('Входите');
}
else {
    console.log('Мы не можем впустить вас так как у вас недостаточно денег');
}

if(c >=0 && c <= 10) {
    console.log('Входите');
}
else {
    console.log('Мы можем пропустить только 10 человек');
}
