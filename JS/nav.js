const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
    <div class="nav">
        <a href="/index.html"><img src="IMG/pedalLogo.svg" class="brand-logo" alt=""></a>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Nombre...">
                <button class="search-btn">buscar</button>
            </div>
            <a href="#"><img class="login-btn" src="IMG/user.png" alt=""></a>
            <a href="#"><img class="cart-btn" src="IMG/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li id="simulationFilter" class="link-item"><a href="#" class="link">simulation</a></li>
        <li id="modulationFilter" class="link-item"><a href="#" class="link">modulation</a></li>
        <li id="distortionFilter" class="link-item"><a href="#" class="link">distortion</a></li>
        <li id="dynamicFilter" class="link-item"><a href="#" class="link">dynamic</a></li>
        <li id="looperFilter" class="link-item"><a href="#" class="link">looper</a></li>
        <li id="todosFilter" class="link-item"><a href="#" class="link">todos</a></li>
    </ul>
    </nav>
    `;
}

createNav();