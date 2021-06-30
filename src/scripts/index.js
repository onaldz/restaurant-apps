import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
console.log('Hello Coders! :)');

//read json 
import('../DATA.json').then(({ default: jsonData }) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function (data) {
        dataList += `
            <article id="card" class="card">
                <h2 tabindex="0" class="location">${data.city}</h2>
                <img tabindex="0" class="thumbnail" src="${data.pictureId}" alt="Foto restoran ${data.name}">
                <div class="content">
                    <p tabindex="0" class="rating">Rating: ${data.rating} ⭐</p>
                    <h1 tabindex="0" class="title">${data.name}</h1>
                    <p tabindex="0" class="description">${data.description.slice(0, 100)}...</p>
                </div>
            </article>
        `;
    });
    document.querySelector('#card').innerHTML = dataList;
});

// Menu Hamburger & slide
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu li");

    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");
        //Burger Animation
        burger.classList.toggle("toggle");

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        //Burger.classList.toggle("toggle");
    });
}

navSlide();

