
//  TASK - 1
//  Распарсите строку и замените 
var someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

//  %%HOMEDIR%% -> './JavaScript-Basic'
//  %%APP_DIR%% -> 'fixtures/src'
//  %%APPNAME%% -> 'app.js'
 
//  Вам нужно написать функцию которая в зависимости от разных параметров
//  будет изменять заданные значения на необходимые вам
//  Сделайте несколько экземпляров данной функции
 


   var myRegExp = (str, homeDir, appDir, appName) => {
    str = str.replace(/%%HOMEDIR%%?/g, homeDir).replace(/%%APP_DIR%%/g, appDir).replace(/%%APPNAME%%/g, appName);
   return str
};

console.log(myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js'));


/*
 TASK - 2 
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги
*/
/*
	<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>
	
	
	<style type="text/css">
	body{
		margin-left: 85px;
	}
	h3{
		font-weight: normal;
		margin-left: 100px;
	}
	 button{
		 margin-left: 100px;
		 height: 50px;
		 width: 300px;
		 background-color: #cfe2f3;
		 border: 2px solid #000;
	 }

  </style>
</head>

<body>
<h3>Тест по программированию</h3>
<ol>
	<li>
		<p>Что такое функция высшего порядка?</p>
	<label><input type="checkbox">Функция, представленна в виде "() => {}"</label></br>
		<label><input type="checkbox">Функция, которая является значением свойства объекта</label></br>
		<label><input type="checkbox" checked>Функция, которая возвращает функцию</label>
	</li>

	<li>
		<p>Вопрос №2</p>
		<label><input type="checkbox">Вариант ответа №1</label></br>
		<label><input type="checkbox">Вариант ответа №2</label></br>
		<label><input type="checkbox">Вариант ответа №3</label>
	</li>
	<li>
		<p>Вопрос №3</p>
		<label><input type="checkbox">Вариант ответа №1</label></br>
		<label><input type="checkbox">Вариант ответа №2</label></br>
		<label><input type="checkbox">Вариант ответа №3</label>
	</li>

</ol>

<button>Проверить мои результаты</button>
<script src="JS/main.js"></script>
</body>

</html>
*/


/* TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM. 
  Это будет тест, который мы будем разрабатывать в следующих заданиях. 
  Сейчас вам нужно только динамически создать html, 
  методы должны храниться в одном объекте. Для того чтоб страница выглядела красиво можете использовать Bootstrap 
  и создавать DOM-элементы с готовыми бутстраповскими классами. 
  Изначально на странице должен быть только <body>, вызывая методы объекта нужно создать dom-элементы
*/


// var app = {
// 	render() {
		
// 		var body = document.body;
// 		var title = document.createElement('h3');
// 		title.textContent = 'Тест по программированию';
// 		var input1 = document.createElement('input');
// 		var input2 = document.createElement('input');
// 		var input3 = document.createElement('input');
// 		var input4 = document.createElement('input');
// 		var input5 = document.createElement('input');
// 		var input6 = document.createElement('input');
// 		var input7 = document.createElement('input');
// 		var input8 = document.createElement('input');
// 		var input9 = document.createElement('input');

// 		input1.setAttribute('type', 'checkbox');
// 		input2.setAttribute('type', 'checkbox');
// 		input3.setAttribute('type', 'checkbox');
// 		input4.setAttribute('type', 'checkbox');
// 		input5.setAttribute('type', 'checkbox');
// 		input6.setAttribute('type', 'checkbox');
// 		input7.setAttribute('type', 'checkbox');
// 		input8.setAttribute('type', 'checkbox');
// 		input9.setAttribute('type', 'checkbox');

// 		var lable1 = document.createElement('lable');
// 		var lable2 = document.createElement('lable');
// 		var lable3 = document.createElement('lable');
// 		var li1 = document.createElement('li');
// 		var li2 = document.createElement('li');
// 		var li3 = document.createElement('li');
// 		var ol = document.createElement('ol');

// 		li1.appendChild(document.createTextNode("Что такое функция высшего порядка?"));
// 		li1.appendChild(document.createElement('br'));
// 		lable1.appendChild(input1);
// 		lable1.appendChild(document.createTextNode('Функция, представленна в виде "() => {}"'));
// 		lable1.appendChild(document.createElement('br'));
// 		lable1.appendChild(input2);
// 		lable1.appendChild(document.createTextNode('Функция, которая является значением свойства объекта'));
// 		lable1.appendChild(document.createElement('br'));
// 		lable1.appendChild(input3);
// 		lable1.appendChild(document.createTextNode('Функция, которая возвращает функцию'));
// 		lable1.appendChild(document.createElement('br'));


// 		li2.appendChild(document.createTextNode("Вопрос №2"));
// 		li2.appendChild(document.createElement('br'));
// 		lable2.appendChild(input4);
// 		lable2.appendChild(document.createTextNode('Вариант ответа №1'));
// 		lable2.appendChild(document.createElement('br'));
// 		lable2.appendChild(input5);
// 		lable2.appendChild(document.createTextNode('Вариант ответа №2'));
// 		lable2.appendChild(document.createElement('br'));
// 		lable2.appendChild(input6);
// 		lable2.appendChild(document.createTextNode('Вариант ответа №3'));
// 		lable2.appendChild(document.createElement('br'));

// 		li3.appendChild(document.createTextNode("Вопрос №3"));
// 		li3.appendChild(document.createElement('br'));
// 		lable3.appendChild(input7);
// 		lable3.appendChild(document.createTextNode('Вариант ответа №1'));
// 		lable3.appendChild(document.createElement('br'));
// 		lable3.appendChild(input8);
// 		lable3.appendChild(document.createTextNode('Вариант ответа №2'));
// 		lable3.appendChild(document.createElement('br'));
// 		lable3.appendChild(input9);
// 		lable3.appendChild(document.createTextNode('Вариант ответа №3'));
// 		lable3.appendChild(document.createElement('br'));


// 		var button = document.createElement('button');
// 		button.setAttribute('type', 'button');
// 		button.textContent = 'Проверить мои результаты'

// 		body.appendChild(title);
// 		body.appendChild(ol);
// 		ol.appendChild(li1);
// 		li1.appendChild(lable1);
// 		ol.appendChild(li2);
// 		li2.appendChild(lable2);
// 		ol.appendChild(li3);
// 		li3.appendChild(lable3);
// 		body.appendChild(button);
// 		input3.setAttribute('checked', 'checked');
// 	}
// };
// app.render();
