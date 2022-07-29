const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="./IMG/pedalLogo.svg" alt="" class="logo">
            <div class="infoContainer">
                <p class="footer-title">sobre nosotros</p>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus minima quasi in. Commodi rerum at ullam aliquam! Exercitationem nam nobis soluta quidem, magni quaerat enim voluptatem eius necessitatibus unde.</p>     
            </div>
        </div>
    `;
}

createFooter();