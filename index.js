const SHOP_NUMBER = '';

document.addEventListener('DOMContentLoaded', () => {
    const styleHeader = () => {
        const telNumElem = document.querySelector('.widget-categories a[href^="tel"]');
        const telNum = telNumElem ? telNumElem.textContent : '';
        const mobileNav = document.querySelector('.mobile_side_nav_menu');
        const headerLogo = document.querySelector('.header .logo');
        const headerWidgets = document.querySelector('.header_widgets');

        // ADD HEADER BTNS COMPONENT (IF NEEDED)

        //Нужный код из компонентов пока копипастить сюда, ненужный - убирать
    
        // addHeaderBtns({
        //     login: true,
        //     cart: true,
        //     wishlist: true,
        //     search: false
        // });
    
        //END HEADER BTNS COMPONENT
    
        // ADD MOBILE NAV COMPONENT (IF NEEDED)
    
        // styleMobileNav({
        //     replaceSearchBtn: false,
        //     addLoginBtn: true,
        //     addTel: false,
        // });
    
        //END MOBILE NAV COMPONENT
    
        // REMOVE EMPTY ITEM IN NAV
        try {
            const navEmptyItem = document.querySelectorAll('.empty-item');
            navEmptyItem.forEach(item => item.remove());
        } catch {}
    };
    
    // const banners = () => {
    //     //CHANGE BANNERS HEIGHT
    //     try {
    //         const slides = document.querySelectorAll('#home.common-home .main-slider source');
    
    //         slides.forEach(pic => pic.srcset = pic.srcset.replaceAll('h_460', 'h_1080'));
    //     } catch {}
    // };
    
    const addContent = (categoriesTitle) => {
        //INSERT SECTIONS HTML AFTER BANNER
        try {
            const mainSlider = document.querySelector("#home.common-home .main-slider");
    
            //mainSlider.insertAdjacentHTML("afterend", YOUR_HTML);
        } catch {}
    
        //INSERT CATEGORIES TITLE
        try {
            if (categoriesTitle && typeof categoriesTitle === 'string') {
                const categories = document.querySelector('.homefeatured_category .container');
            
                categories.insertAdjacentHTML('afterbegin',
                    `<h2 class="section-title mb-4 mt-4"><span>${categoriesTitle}</span></h2>`);
            }
        } catch {}
    
        //INSERT SECTIONS HTML BEFORE MAIN PAGE CONTENT END
        try {
            const contentArea = document.querySelector("#home.common-home .content-area");
            //contentArea.insertAdjacentHTML("beforeend", YOUR_HTML);
        } catch {}
    };
    
    //INSERT POPUP COMPONENT HERE (IF NEEDED)
    
    //INSER SLIDER COMPONENT HERE (IF NEEDED)
    
    //Футер обычно стилизуется в одном ключе.
    //Добавить Sellavi Logo.
    
    const styleFooter = () => {
        const SELLAVI_LOGO = `https://sellavi-russia-dev.github.io/${SHOP_NUMBER}/images/sellavi-logo.svg`;
        const PAYMENTS_HTML = `
        <div class="col-sm-6">
            <div class="payments">
                <div>
                    <img src="https://sellavi-russia-dev.github.io/${SHOP_NUMBER}/images/payments.png" class="img-fluid" alt=""/>
                </div>
            </div>
        </div>
        `;
        const footerSellaviLogo = document.querySelector('#sellavi_logo');
        const col3 = document.querySelector('.footer-widgets .row>div:last-child ul');

        const copyright = document.querySelector('.footer .copyright_row');
    
        //REMOVE UNNECESSARY LINK IN THIRD COL
    
        col3.querySelectorAll('li').forEach(item => {
            if (item.textContent === 'Рассылка') item.remove();
        });
    
        //REPLACE SELLAVI LOGO
    
        footerSellaviLogo.innerHTML = `<img data-src="${SELLAVI_LOGO}" alt="" class="img-fluid" src="${SELLAVI_LOGO}">`;

        copyright.insertAdjacentHTML('beforeend', PAYMENTS_HTML);
    };
    
    styleHeader();
    styleFooter();
    //addPopup(popupHTML, popupTitle);
    
    // if (document.querySelector('#home.common-home')) {
    //     banners();
    //     addContent(categoriesTitle);
    //     addSlider();
    // }
});