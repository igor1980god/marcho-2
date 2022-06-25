"use strict";

// $(function () {
  // $('.top-slider__inner').slick({
  //   nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.1" cx="24" cy="24" r="23.5" stroke="white"/><path d="M31.3536 24.3536C31.5488 24.1583 31.5488 23.8417 31.3536 23.6464L28.1716 20.4645C27.9763 20.2692 27.6597 20.2692 27.4645 20.4645C27.2692 20.6597 27.2692 20.9763 27.4645 21.1716L30.2929 24L27.4645 26.8284C27.2692 27.0237 27.2692 27.3403 27.4645 27.5355C27.6597 27.7308 27.9763 27.7308 28.1716 27.5355L31.3536 24.3536ZM16 24.5H31V23.5H16V24.5Z" fill="white"/></svg></button>',
  //   prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.1" cx="24" cy="24" r="23.5" stroke="white"/><path d="M15.6464 23.6464C15.4512 23.8417 15.4512 24.1583 15.6464 24.3536L18.8284 27.5355C19.0237 27.7308 19.3403 27.7308 19.5355 27.5355C19.7308 27.3403 19.7308 27.0237 19.5355 26.8284L16.7071 24L19.5355 21.1716C19.7308 20.9763 19.7308 20.6597 19.5355 20.4645C19.3403 20.2692 19.0237 20.2692 18.8284 20.4645L15.6464 23.6464ZM16 24.5H31V23.5H16V24.5Z" fill="white"/></svg></button>',
    
  //   dots: true,
  //   infinite: false,
  //   fade: true,
  // });


  // TABS
  // $('.catalog-tabs__item').on('click', function (e){
  //   e.preventDefault();
  //   $('.catalog-tabs__item').removeClass('catalog-tabs__item--active');
  //   $(this).addClass('catalog-tabs__item--active');

  //   $('.catalog-tabs__content-item').removeClass
  //   ('catalog-tabs__content-item--active');
  //   $($(this).attr('href')).addClass('catalog-tabs__content-item--active');
    
  // });
  // TABS
// });

  

  // Учеба

  const vehicleBodyWidth = 5000;
  const vehicleBodyLength = 4000;

  console.log(
    "Ширина кузова автомобиля:" +
      vehicleBodyWidth +
      ", длина:" +
      vehicleBodyLength
  );

  let number = 4;

  console.log(4/0);
  console.log('string' * 9);

  const person = 'Alex';

  const bool = true;

  // console.log(something);

  let und;
  console.log(und);

  // const obj = {
  //   name: 'John',
  //   age: 25,
  //   isMarried: false
  // };
  // console.log(obj.name);


  // let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
  // console.log(arr[1]);


  const arr = [1, 2, 3,];

  const obj ={
    Anna: 500,
    Alice: 800
  };
  obj.Koly = 1000;
  console.log(obj.Koly);

  // alert('Hello World');
  // const result = confirm('Are yon here?');
  // console.log(result);

  // const answer = +prompt('Вам есть 18?', '18');
  // console.log(typeof(answer));

  // const answers = [];

  // answers[0] = prompt('Как ваше имя?', '');
  // answers[1] = prompt("Как ваше фамилия?", "");
  // answers[2] = prompt("Сколько вам лет?", "");
  // console.log(answers);
  // console.log(typeof(answers));


  const category = 'toys';
  console.log(`https://someurl.com/${category}/5`);

  // const user = 'Ivan';
  // alert(`Привет, ${user}`);

  let incr = 10,
      decr = 10;

  incr++;
  decr--;
  console.log(incr);
  console.log(decr);

  const isChecket = true,
        isClose = !true;

  console.log(isChecket && isClose);      


  // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

  // const personalMovieDB = {
  //   count: numberOfFilms,
  //   movies: {},
  //   actors: {},
  //   genres: [],
  //   privat: false
  // };

  // const a = prompt('Один из последних просмотренных фильмов', ''),   
  //       b = prompt('На сколько оцените его?', ''),
  //       c = prompt('Один из последних просмотренных фильмов', ''), 
  //       d = prompt('На сколько оцените его?', '');

  // personalMovieDB.movies[a] = b;
  // personalMovieDB.movies[c] = d;

  // console.log(personalMovieDB);

  if (4 == 9) {
    console.log('OK');
  } else {
      console.log('ERROR');
  }


  

  // if (num < 49) {
  //   console.log('Error');
  // } else if(num > 100) {
  //   console.log('Много');
  // } else {
  //   console.log('ОК');
  // }

const num = 50;

  switch (num) {
    case 49:
      console.log('Неверно');
      break;
    case 100:
      console.log("Неверно");  
      break;
    case 51:
      console.log('Верно');
      break;
    default:
      console.log('Не в этот раз');
      break;  
  }


  const hamburger = 3;
  const fries = 3;
  const cola = 0;
  const nuggets = 2;

  if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
      console.log('Я сыт');
  } else {
    console.log('Мы уходим');
  }


  let johnReport, alexReport, samReport, mariaReport = 'done';

  console.log(johnReport || alexReport ||samReport||mariaReport);