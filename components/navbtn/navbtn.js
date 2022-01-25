const addNavBtn = (selector, position) => {
    const CATALOGUE_BTN = `
        <button class="catalogue-btn">
            <span></span>
            <p>Каталог</p>
        </button>
    `;
    
    const navWrap = document.querySelector('#home .header .navigation-wrapper');

    try {
        document.querySelector(`${selector}`).insertAdjacentHTML(`${position}`, CATALOGUE_BTN);
    } catch {}

    //ADD NAVBTN LOGIC
    try {
        const catalogueButton = document.querySelector('.catalogue-btn');
        const removeNavActive = (e) => {
            if (e.target.closest('.nav-active')) return;
            if (e.target.closest('.catalogue-btn')) return;

            if (navWrap.classList.contains('nav-active')) {
                navWrap.classList.remove('nav-active')
                catalogueButton.classList.remove('open');
                document.removeEventListener('click', removeNavActive);
            }
        };
        const toggleNav = (e) => {
            if (e.target.closest('.catalogue-btn')) {
                navWrap.classList.toggle('nav-active');
                catalogueButton.classList.toggle('open');

                document.addEventListener('click', removeNavActive);
            }
        };

        document.body.addEventListener('click', toggleNav);
    } catch {}
}
