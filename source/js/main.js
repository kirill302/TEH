/* эта функция из jquery $('') для удобства доступа к DOM элэментам, 
------ JQUERY НЕ ПОДКЛЮЧЕНА! ------- */
function $(selector) {
    let element = document.querySelectorAll(selector);

    if (element.length > 1) {
        return element;
    } else {
        return element[0];
    }
}

function burger (burgerSelector, NavBurgerSelector) {
    let burger = document.querySelector(burgerSelector);
    let block = document.querySelector(NavBurgerSelector);

    burger.addEventListener('click', () => {
        block.classList.toggle('bg-active');
        burger.classList.toggle('active');
    });
};
burger('.burger', '.header');

window.addEventListener('scroll', () => {
    let scrolling = window.pageYOffset;

    if (scrolling > 100) {
        document.querySelector('.header')
            .classList.add('header-fixed');
    } else {
        document.querySelector('.header')
            .classList.remove('header-fixed');
    }
});