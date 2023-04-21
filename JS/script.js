const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const collage = document.querySelector(".collage");
const copy_collage = document.querySelector(".copy-collage");
const title = document.querySelector(".img-title");
const text = document.querySelector(".img-text");

let i = 1;
let time = 7000;
document.querySelector(".load" + i).style.borderColor = "rgb(255, 67, 67)";

let interval = setInterval(changeCollage, time);

function page_1() {
    title.textContent = "Зернові напівпричепи";
    text.textContent = "Виготовлення та продаж стандартних та індивідуально розроблених моделей з можливістю лізингу та trade-in."

}

function page_2() {
    title.textContent = "Обслуговування";
    text.textContent = "Надання послуг з установки гідравлічних циліндрів, пневматики, електрики та допоміжних механізмів з індивідуальним підходом до кожного замовника."
}

function page_3() {
    title.textContent = "Перевезення хімії";
    text.textContent = "Швидке та надійне перевезення хімії з України в Європу."
}

function page_4() {
    title.textContent = "Продаж палива";
    text.textContent = "Оптовий продаж якісного палива за привабливими цінами."
}

function choose(num) {
    switch (num) {
        case 1: page_1(); break;
        case 2: page_2(); break;
        case 3: page_3(); break;
        case 4: page_4(); break;
    }
}

function changeCollage() {
    if (i == 4) {
        collage.classList.remove('img' + i);
        copy_collage.classList.remove('img' + i);
        document.querySelector(".load" + i).style.borderColor = "white";
        i = 1;
        choose(i)
        collage.classList.add('img' + i);
        copy_collage.classList.add('img' + i);
        document.querySelector(".load" + i).style.borderColor = "rgb(255, 67, 67)"
    }
    else {
        collage.classList.remove('img' + i);
        copy_collage.classList.remove('img' + i);
        document.querySelector(".load" + i).style.borderColor = "white";
        i++;
        choose(i)
        collage.classList.add('img' + i);
        copy_collage.classList.add('img' + i);
        document.querySelector(".load" + i).style.borderColor = "rgb(255, 67, 67)";
    }
}

next.addEventListener("click", function () {
    clearInterval(interval);
    changeCollage();
    interval = setInterval(changeCollage, time);
});

previous.addEventListener("click", function () {
    clearInterval(interval);
    if (i == 1) {
        collage.classList.remove('img' + i);
        copy_collage.classList.remove('img' + i);
        document.querySelector(".load" + i).style.borderColor = "white";
        i = 4;
        choose(i)
        collage.classList.add('img' + i);
        copy_collage.classList.add('img' + i);
        document.querySelector(".load" + i).style.borderColor = "rgb(255, 67, 67)"
    }
    else {
        collage.classList.remove('img' + i);
        copy_collage.classList.remove('img' + i);
        document.querySelector(".load" + i).style.borderColor = "white";
        i--;
        choose(i)
        collage.classList.add('img' + i);
        copy_collage.classList.add('img' + i);
        document.querySelector(".load" + i).style.borderColor = "rgb(255, 67, 67)";
    }
    interval = setInterval(changeCollage, time);
});


