// 滑鼠可以直接水平滾
let overflow_menu = document.querySelector(".overflow_menu");
    overflow_menu.addEventListener("wheel", (event) => { event.preventDefault; overflow_menu.scrollLeft += event.deltaY;});


var swiper = new Swiper(".mySwiper", {
    /* 一開始顯示 3 欄 */
    slidesPerView: 3,
    /* 物件間隔 */
    spaceBetween: 16,

    breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
        slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        767: {
        slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
        slidesPerView: 1
        }
    },
    /* 指示器點點依附在哪一個CSS */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


