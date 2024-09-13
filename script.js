// Получаем элементы бургер-меню и само меню
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('header ul');

// Обработка клика по бургер-меню
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show'); // Показать или скрыть меню
});





// Получаем элементы галереи и отзывов
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var modalVideo = document.getElementById("modalVideo");
var closeModal = document.getElementsByClassName("close")[0];
var galleryItems = document.querySelectorAll(".gallery-item, .review-item"); // Объединяем галерею и отзывы

// Функция открытия изображения или видео в модальном окне
galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var content = item.querySelector(".gallery-thumb, .review-thumb"); // Унифицируем выбор

        // Проверяем, это изображение или видео
        if (content.tagName.toLowerCase() === "img") {
            modalImg.style.display = "block"; // Показываем изображение
            modalVideo.style.display = "none"; // Скрываем видео
            modalImg.src = content.src;
        } else if (content.tagName.toLowerCase() === "video") {
            modalVideo.style.display = "block"; // Показываем видео
            modalImg.style.display = "none"; // Скрываем изображение
            modalVideo.src = content.querySelector("source").src;
        }

        modal.style.display = "flex"; // Открываем модальное окно
    });
});

// Закрытие модального окна
closeModal.onclick = function () {
    modal.style.display = "none";
    modalVideo.src = ""; // Останавливаем видео при закрытии
};






document.getElementById('toggle-music').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    
    // Проверяем, играет ли музыка
    if (audio.paused) {
        audio.play();  // Включаем музыку
        this.textContent = 'Выключить музыку';  // Меняем текст кнопки
    } else {
        audio.pause();  // Останавливаем музыку
        this.textContent = 'Включить музыку';  // Меняем текст кнопки
    }
});