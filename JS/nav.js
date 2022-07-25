const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
    <div class="nav">
        <img src="IMG/dark-logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="marca, producto...">
                <button class="search-btn">buscar</button>
            </div>
            <a href="#"><img src="IMG/user.png" alt=""></a>
            <a href="#"><img src="IMG/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">mujer</a></li>
        <li class="link-item"><a href="#" class="link">hombre</a></li>
        <li class="link-item"><a href="#" class="link">niño</a></li>
        <li class="link-item"><a href="#" class="link">accesorios</a></li>
    </ul>
    </nav>
    `;
}

createNav();