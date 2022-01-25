document.addEventListener('DOMContentLoaded', () => {
    const styleHeader = () => {
        const telNumElem = document.querySelector('.widget-categories a[href^="tel"]');
        const telNum = telNumElem ? telNumElem.textContent : '';
        const mobileNav = document.querySelector('.mobile_side_nav_menu');
        const headerLogo = document.querySelector('.header .logo');
    
        // ADD HEADER BTNS COMPONENT (IF NEEDED)
    
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
    
    const editRegistration = () => {
        const xpathNews = "//legend[text()='Рассылка новостей']";
        const xpathEmail = "//a[text()='E-Mail рассылка']";
        const xpathFiles = "//a[text()='Файлы для скачивания']";
        const blockTitles = document.querySelectorAll('.block-title.alt');
        const blockDetails = document.querySelectorAll('.details-box');
        const accountDetails = document.querySelectorAll('.widget.account-details li');
    
        const newsElem = document.evaluate(xpathNews, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const emailElem = document.evaluate(xpathEmail, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const filesElem = document.evaluate(xpathFiles, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
        
        try {
            document.querySelectorAll('.add_to_cart button').forEach(btn => {
                if (btn.textContent.trim().toLowerCase() === 'add to cart') btn.textContent = 'Купить';
            });
        } catch (e) {}
        
        if (newsElem) newsElem.closest('fieldset').style.display = 'none';
        if (emailElem) emailElem.closest('li').style.display = 'none';
        if (filesElem) filesElem.closest('li').style.display = 'none';
        if (blockTitles) blockTitles.forEach(elem => {
            if (elem.textContent.trim() === 'Подписка') elem.remove();
        })
        if (blockDetails) blockDetails.forEach(elem => {
            if (elem.textContent.trim() === 'Подписаться или отказаться от рассылки новостей') elem.remove();
            if (elem.textContent.trim() === 'Файлы для скачивания') elem.remove();
        });
        if (accountDetails) accountDetails.forEach(item => {
            if (item.textContent.trim() === 'Файлы для скачивания') item.remove();
        })
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
    
    styleHeader();
    styleFooter();
    editRegistration();
    replaceBuyButtons()
    //addPopup(popupHTML, popupTitle);
    
    // if (document.querySelector('#home.common-home')) {
    //     banners();
    //     addContent(categoriesTitle);
    //     addSlider();
    // }
});