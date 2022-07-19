const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

/* Прослушка события клика на класс calc */
/* e - event */
/* target */
/* contains - проверяет есть ли данный класс у элемента */
calc.addEventListener('click', function (e) {
    if (!e.target.classList.contains('calc__btn')) return;/* Проверка на наличие класса */
    const value = (e.target.innerText); /* innerText - получение контента из блок */

    switch (value) {
        // Нажатие на "С"
        case 'C':
            result.innerText = '';
            break;

        // Нажатие на "="
        case '=':
            // Проверка безопасности
            if (result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;

            // Вычисление
            result.innerText = eval(result.innerText).toFixed(2);
            break;

        // Нажатие любых других кнопок
        default:
            result.innerText += value;
    }

    // result.innerText += value; Присовоение результата 


});