const quote = document.getElementById('quote');
const btn = document.querySelector('.btn');
const pic = document.querySelector('.pic');
const auteur = document.querySelector('#auteur');


const get_quote_and_img = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then(data => {
        console.log(`Le citation: ${data.content} - Auteur: ${data.author}`);
        quote.innerHTML = `<p>${data.content}</p>`;
        auteur.innerHTML = `<p>${data.author}</p>`;
    })

    // l'api nous renvoie une image aléatoire
    fetch('https://picsum.photos/1955/1955')
    // .then((response) => response.json())
    .then((response) => {
        console.log(`L'image: ${response.url}`);
        document.body.style.backgroundImage = `url(${response.url})`;
    })
}

btn.addEventListener('click', get_quote_and_img);



