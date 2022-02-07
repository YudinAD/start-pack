document.addEventListener('DOMContentLoaded', () => {
    const styleHeader = () => {
        const telNumElem = document.querySelector('.widget-categories a[href^="tel"]');
        const telNum = telNumElem ? telNumElem.textContent : '';
        const mobileNav = document.querySelector('.mobile_side_nav_menu');
        const headerLogo = document.querySelector('.header .logo');
    
        // ADD HEADER BTNS COMPONENT (IF NEEDED)

        //Нужный код из компонентов пока копипастить сюда, ненужный - убирать
    
        // const HEADER_LOGIN_BTN = `
        //     INSERT YOUR HTML HERE
        // `;
    
        // const HEADER_CART_SVG = `
        //     INSERT YOUR HTML HERE
        // `;
    
        // addHeaderBtns({
        //     login: HEADER_LOGIN_BTN,
        //     cart: HEADER_CART_SVG,
        //     wishlist: true,
        //     search: true
        // });
    
        //END HEADER BTNS COMPONENT
    
        // ADD MOBILE NAV COMPONENT (IF NEEDED)
    
        // styleMobileNav({
        //     replaceSearchBtn: false,
        //     addLoginBtn: true,
        //     addTel: false,
        // });
    
        //END MOBILE NAV COMPONENT
    
        //ADD NAV IN HEADER WRAPPER 
    
        // try {
        //     const headerContainer = document.querySelector('.header-wrapper .container-fluid');
        //     const desktopNav = document.querySelector('.navigation-wrapper .navigation > .nav.sf-menu');
        //     headerContainer.insertAdjacentElement('beforeend', desktopNav);
        // } catch {}
    
        // REMOVE EMPTY ITEM IN NAV
        try {
            const navEmptyItem = document.querySelector('.empty-item');
            navEmptyItem.remove();
        } catch {}
    };
    
    // const banners = () => {
    //     //CHANGE BANNERS HEIGHT
    //     try {
    //         const slides = document.querySelectorAll('#home.common-home .main-slider source');
    
    //         slides.forEach(pic => pic.srcset = pic.srcset.replaceAll('h_460', 'h_1080'));
    //     } catch {}
    // };
    
    const addContent = (params) => {
        //INSERT SECTIONS HTML AFTER BANNER
        try {
            const mainSlider = document.querySelector("#home.common-home .main-slider");
    
            //mainSlider.insertAdjacentHTML("afterend", YOUR_HTML);
        } catch {}
    
        //INSERT CATEGORIES TITLE
        try {
            if (params.categoriesTitle && typeof params.categoriesTitle === 'string') {
                const categories = document.querySelector('.homefeatured_category .container');
            
                categories.insertAdjacentHTML('afterbegin',
                    `<h2 class="section-title mb-4 mt-4"><span>${params.categoriesTitle}</span></h2>`);
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
        const SELLAVI_LOGO = '';
        const footerSellaviLogo = document.querySelector('#sellavi_logo');
        const col3 = document.querySelector('.footer-widgets .row>div:last-child ul');
    
        //REMOVE UNNECESSARY LINK IN THIRD COL
    
        col3.querySelectorAll('li').forEach(item => {
            if (item.textContent === 'Рассылка') item.remove();
        });
    
        //REPLACE SELLAVI LOGO
    
        footerSellaviLogo.innerHTML = `<img data-src="${SELLAVI_LOGO}" alt="" class="img-fluid" src="${SELLAVI_LOGO}">`;
    };

    const replaceBuyButtons = (text) => {
        if (typeof text !== 'string') {
            throw new Error('Текст кнопки должен быть строкой!')
        }
        
        try {
            const buyBtn = document.getElementById('button-cart');
            const products = document.querySelector('#content .products');
            const config = {
                childList: true
            };
            const replaceBtns = () => {
                const buyButtons = document.querySelectorAll('#home .add_to_cart button span');
                
                buyButtons.forEach(btn => btn.textContent = text);
            };

            if (buyBtn) buyBtn.textContent = text;
            
            try {
                replaceBtns()
            } catch(e) {
                console.log(e);
            }

            if (content) {
                const observer = new MutationObserver(replaceBtns);
                observer.observe(products, config);
            }
        } catch (e) {}
    };

    const removeCheckoutFields = () => {
        const cityName = 'Москва';
        
        if (document.querySelector('#home.checkout-checkout')) {
            //HIDE FIELDS ADDITIONAL, INDEX
            document.getElementById('input-payment-additional').closest('.form-row').style.display = 'none';
            document.getElementById('input-shipping-additional').closest('.form-row').style.display = 'none';

            //HIDE FIELDS ROOM, HOUSE
            document.getElementById('input-payment-house-number').closest('.form-row').style.display = 'none';
            document.getElementById('input-payment-address-1').closest('.form-row').style.display = 'none';

            //HIDE STEPS TITLES
            document.querySelectorAll('h2').forEach(h2 => h2.style.display = 'none');

            //HIDE FIELD CITY, INSERT YOUR OWN ONE (REQUIRED TO SUBMIT THE FORM)
            const cityPayer = document.getElementById('input-payment-city').closest('.ajax-city-active');
            const htmlPayer = `
                <div style="left:5px; right:5px; display:none!important;" class="md-bg-holder"></div>
                <label style="display: none !important" for="input-payment-city" class="placeholder">Город</label>
                <input style="display: none !important" type="text" name="city" value="${cityName}" placeholder="Город" id="input-payment-city" class="form-control">
            `;

            cityPayer.innerHTML = htmlPayer;

            document.querySelector('input[name="address_1"]').value = cityName;
        }
    };
    
    styleHeader();
    styleFooter();
    editRegistration();
    replaceBuyButtons()
    //addPopup(popupHTML, popupTitle);
    //removeCheckoutFields();
    
    // if (document.querySelector('#home.common-home')) {
    //     banners();
    //     addContent(categoriesTitle);
    //     addSlider();
    // }
});