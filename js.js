/* Это объявление переменной, мы наши кнопку по тегу */
const button1 = document.querySelector('button1');
const button2 = document.querySelector('button2');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button1.addEventListener('click', function() {
	alert('Ты очень любопытный котик! Хорошего тебе дня :)')
})

button2.addEventListener('click', function() {
	alert(' :)')
})