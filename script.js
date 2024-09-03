// Это функция, которая будет выполнена при загрузке страницы
function sayHello() {
    // Найдем элемент с id "greeting" и изменим его текст
    document.getElementById("greeting new 11234").innerText = "Привет, мир!";
}

// Вызовем функцию sayHello при загрузке страницы
window.onload = sayHello;