//NEW CODE

//HARD NAV

const DESKTOP_NAV_HTML = `
    <div class="new-navigation-wrapper d-none d-lg-block">
        <div class="container">
            <ul class="d-flex"> 
                <li class="catalogue-item">
                    <button class="catalogue-btn">
                        <span></span>
                        <p>Каталог</p>
                    </button>
                </li>
                <li data-nav-part="0">
                    <a href="/lorem">Lorem</a>
                </li>
                <li data-nav-part="0">
                    <a href="/ipsum">Ipsumы</a>
                </li>
                <li data-nav-part="0">
                    <a href="/dolor">Dolor</a>
                </li>
                <li data-nav-part="0">
                    <a href="/sit">Sit</a>
                </li>
            </ul>
        </div>
    </div>
`;

//INSERT HARD NAV, ADD CHECK-ALL LINKS IN NAV

try {
    //INSERT NEW HEADER NAV

    headerWrapper.insertAdjacentHTML('afterend', DESKTOP_NAV_HTML);

    const links = document.querySelectorAll('.megaline .block-title a');

    links.forEach(link => {
        const clone = link.cloneNode();
        clone.textContent = 'Смотреть все';
        clone.className = 'check-all-link';

        link.closest('div:not(.h4)').insertAdjacentElement('beforeend', clone);
    })

    document.querySelectorAll('.check-all-link').forEach(elem => {
        elem.insertAdjacentHTML('afterbegin', '<i class="fa fa-angle-right" aria-hidden="true"></i>');
    })
} catch(e) {console.log(e)}

//ADD NAV BTN LOGIC

const addNavBtn = () => {
    const navWrap = document.querySelector('#home .header .navigation-wrapper');

    //ADD NAVBTN LOGIC
    try {
        const catalogueButton = document.querySelector('.catalogue-btn');
        const megamenu = document.querySelector('.megamenu');
        
        const removeNavActive = (e) => {
            if (e.target.closest('.nav-active')) return;
            if (e.target.closest('.catalogue-btn')) return;

            if (navWrap.classList.contains('nav-active')) {
                navWrap.classList.remove('nav-active')
                catalogueButton.classList.remove('open');
                megamenu.classList.remove('fake-hover');

                if (navWrap.querySelector('.fake-hover')) {
                    navWrap.querySelector('.fake-hover').classList.remove('fake-hover');
                }
                document.removeEventListener('click', removeNavActive);
            }
        };

        const removeFakeHover = (e) => {
            if (e.target.closest('.flexy:not(.megamenu)')) {
                document.removeEventListener('mouseover', removeFakeHover);
                megamenu.classList.remove('fake-hover');
            }
        };

        const toggleNav = (e) => {
            if (e.target.closest('.catalogue-btn')) {
                navWrap.classList.toggle('nav-active');
                catalogueButton.classList.toggle('open');
                if (navWrap.querySelector('.fake-hover')) {
                    navWrap.querySelector('.fake-hover').classList.remove('fake-hover');
                }
                megamenu.classList.add('fake-hover');

                document.addEventListener('mouseover', removeFakeHover);
                document.addEventListener('click', removeNavActive);
            }
        };

        document.body.addEventListener('click', toggleNav);

        document.querySelectorAll('.has_children').forEach(elem => {
            elem.addEventListener('mouseleave', (e) => {
                if (navWrap.querySelector('.fake-hover')) {
                    navWrap.querySelector('.fake-hover').classList.remove('fake-hover');
                }
                e.target.classList.add('fake-hover');
            })

            elem.addEventListener('mouseenter', () => {
                if (navWrap.querySelector('.fake-hover')) {
                    navWrap.querySelector('.fake-hover').classList.remove('fake-hover');
                }
            })
        });
    } catch(e) {console.log(e)}
};

//OLD CODE

const addNavBtnOld = (selector, position) => {
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
