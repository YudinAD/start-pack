
    
// ADD NAV IN HEADER WRAPPER 

try {
    const headerContainer = document.querySelector('.header-wrapper .container-fluid');
    const desktopNav = document.querySelector('.navigation-wrapper .navigation > .nav.sf-menu');
    headerContainer.insertAdjacentElement('beforeend', desktopNav);
} catch {}

//ADD TEL IN HEADER (BEFORE WIDGETS)

try {
    headerWidgets.insertAdjacentHTML('beforebegin', `
        <a style="text-align: left" href="tel:${telNum}" class="header_tel-number d-none d-lg-flex mr-3">
            <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.1698 21.9413L28.1778 21.9494L28.1872 21.956C28.3576 22.0753 28.505 22.239 28.6284 22.4503C28.8231 22.8053 28.8985 23.1645 28.8593 23.5309C28.8199 23.8989 28.664 24.2827 28.3823 24.6834L28.0447 25.1341C27.8785 25.3559 27.5943 25.6966 27.1899 26.158C26.7869 26.6178 26.3936 27.0397 26.01 27.4237C25.6302 27.8039 25.2181 28.1424 24.7736 28.439C24.33 28.7351 23.9703 28.8693 23.6886 28.8693H23.6625C22.4958 28.8319 21.246 28.5443 19.9123 28.0027C18.5764 27.4602 17.2581 26.7349 15.9572 25.8261C14.6523 24.9144 13.4465 23.9843 12.3395 23.0357C11.2318 22.0865 10.1238 21.0571 9.01555 19.9476C8.30175 19.233 7.62565 18.5232 6.98723 17.8182C6.3489 17.1134 5.68212 16.3377 4.98686 15.4911C4.2932 14.6465 3.67021 13.8023 3.11775 12.9586C2.5648 12.1142 2.06353 11.2605 1.61388 10.3977C1.1657 9.53768 0.811293 8.67377 0.55031 7.80593C0.289669 6.93922 0.150829 6.11706 0.132326 5.339L0.132391 5.339L0.132162 5.33486C0.115577 5.03599 0.239983 4.66393 0.534616 4.21225C0.83123 3.75753 1.16473 3.34021 1.53512 2.96013C1.90816 2.57732 2.33317 2.18448 2.81039 1.78165C3.29026 1.37658 3.63688 1.09057 3.85129 0.922571C4.06324 0.756503 4.21698 0.635257 4.3122 0.55907C4.45473 0.470361 4.60137 0.394986 4.75216 0.332825C4.90604 0.269387 5.0594 0.219759 5.21226 0.18375C5.36213 0.148447 5.51675 0.130702 5.67636 0.130702C6.30184 0.130702 6.74712 0.343082 7.03774 0.753852L7.03774 0.753858L7.0387 0.755179C7.18704 0.959389 7.81994 1.90738 8.94106 3.60516C10.0606 5.3006 10.7235 6.30789 10.9305 6.62802C11.2901 7.19415 11.2616 7.92169 10.7842 8.84167C10.5955 9.1816 10.116 10.0381 9.3455 11.4117L9.3052 11.4835L9.35262 11.5509C10.1682 12.7092 11.4258 14.138 13.1219 15.836C14.8368 17.5529 16.2733 18.8214 17.4303 19.638L17.4982 19.6859L17.5704 19.6447C18.9263 18.8718 19.7805 18.3925 20.1358 18.2053L20.1361 18.2059L20.1474 18.1984C20.1942 18.1672 20.2508 18.1385 20.3184 18.1131C20.3954 18.0842 20.4678 18.0552 20.5358 18.0261C20.5968 17.9999 20.6575 17.9782 20.7178 17.9609C20.7821 17.9425 20.8513 17.9241 20.9253 17.9055C20.9969 17.8876 21.0631 17.8744 21.1238 17.8657C21.1906 17.8562 21.2527 17.8466 21.3104 17.837C21.3579 17.8291 21.4163 17.8247 21.4865 17.8247C21.5921 17.8247 21.6925 17.8335 21.7877 17.8508C21.8837 17.8683 21.9801 17.8946 22.077 17.9298C22.1704 17.9638 22.248 18.0052 22.3114 18.0529L22.3111 18.0532L22.3206 18.0591L23.1097 18.5529L24.5199 19.4847L24.52 19.4848L26.1009 20.5306C26.6278 20.8791 27.0888 21.1852 27.4839 21.4489C27.6809 21.5804 27.8371 21.6877 27.9529 21.7712C28.0713 21.8566 28.1406 21.9121 28.1698 21.9413ZM23.5966 27.3215L23.6263 27.3232L23.6537 27.3119C23.8322 27.2383 24.0514 27.0903 24.3082 26.8785C24.567 26.665 24.8716 26.3801 25.2215 26.025C25.9223 25.3139 26.557 24.56 27.1255 23.7633C27.2499 23.5968 27.3159 23.4215 27.2906 23.2437L27.2825 23.1871L27.2354 23.1546C24.9948 21.6089 23.111 20.3547 21.5844 19.3924L21.5525 19.3722H21.5147H21.4865C21.2866 19.3722 21.0774 19.4485 20.8619 19.584C20.6623 19.6656 20.3291 19.843 19.8681 20.1107C19.3977 20.3838 18.8898 20.6804 18.3443 21.0005L17.4022 21.5245L16.538 20.8953L16.5381 20.8953L16.5359 20.8938C15.3027 20.0333 13.8032 18.7204 12.0364 16.9515C10.2697 15.1827 8.94866 13.6719 8.07022 12.4182L7.46828 11.5535L7.992 10.6359C8.14297 10.3714 8.27992 10.1256 8.40281 9.89845C8.52438 9.67374 8.64107 9.46816 8.75287 9.28161C8.86627 9.0924 8.96571 8.92172 9.05114 8.76968C9.13653 8.6177 9.20818 8.48384 9.26587 8.36834C9.32159 8.25676 9.36579 8.17771 9.39889 8.128L9.40453 8.11952L9.4088 8.11027C9.52435 7.85961 9.5902 7.64112 9.5902 7.46199V7.42392L9.56976 7.39181C8.21388 5.26137 6.97063 3.38488 5.84006 1.76251L5.83346 1.75303L5.8253 1.74487C5.79225 1.71178 5.74213 1.67827 5.67636 1.67827C5.61275 1.67827 5.55225 1.68356 5.49542 1.69494C5.43853 1.70633 5.38491 1.72391 5.33553 1.74862C5.28564 1.7736 5.23949 1.80839 5.19668 1.84999C4.40354 2.41785 3.65291 3.05158 2.94479 3.75107C2.58996 4.10157 2.30738 4.40691 2.09842 4.6666C1.89138 4.92392 1.74931 5.14523 1.68526 5.32692L1.67682 5.35086L1.67796 5.37623C1.75471 7.0858 2.53009 9.10117 3.98466 11.4179C5.44056 13.7368 7.48486 16.2176 10.115 18.8602C12.7453 21.503 15.2187 23.5499 17.5352 24.9983C19.8494 26.4451 21.8713 27.2256 23.5966 27.3215Z" stroke="white" stroke-width="0.261404"/>
            </svg>
            <span>${telNum}</span>
        </a>
    `);
} catch {}

//ADD WHATSAPP BTN IN BURGER MENU

try {
    const whatsappBtn = document.querySelector('.whatsapp-button');
    const nav = document.querySelector('.navigation.mobile_side_nav');

    nav.insertAdjacentElement('afterbegin', whatsappBtn.cloneNode(true));
} catch (e) { console.log(e)}

//REMOVE ARROWS IN NAV

try {
    const divs = document.querySelectorAll(
        '#home ul.nav.sf-menu>li.flexy>ul>li.megaline>div');
    divs.forEach(item => {
        if (!item.querySelector('ul')) item.classList.add('div-no-arrow')
    })
} catch (e) {}

//MAKE ADAPTIVE NAV DROPDOWN-MENUS

if (window.matchMedia('(min-width: 992px)').matches) {
    try {
        document.querySelectorAll('.sf-menu .megamenu').forEach(item => {
            const firstList = item.childNodes[3];
            const secondList = firstList.querySelector('.megaline ul');
            const distanceToRight = window.innerWidth - item.getBoundingClientRect().left;

            if (distanceToRight < 750) {
                firstList.style.right = '0';
                secondList.style.cssText = 'right: auto; left: -100%;';
            } else {
                firstList.style.right = '';
                secondList.style.cssText = '';
            }
            })
    } catch(e) {console.log(e)}
    
    window.addEventListener('resize', () => {
        try {
            document.querySelectorAll('.sf-menu .megamenu').forEach(item => {
                const firstList = item.childNodes[3];
                const secondList = firstList.querySelector('.megaline ul');
                const distanceToRight = window.innerWidth - item.getBoundingClientRect().left;

                if (distanceToRight < 750) {
                    firstList.style.right = '0';
                    secondList.style.cssText = 'right: auto; left: -100%;';
                } else {
                    firstList.style.right = '';
                    secondList.style.cssText = '';
                }
            })
        } catch(e) {console.log(e)}
    })
}

//REMOVE MINUSES IN MOBILE NAV MENU

try {
    const mobileNavItems = document.querySelectorAll('.mobile_side_nav_menu>.flexy>div>ul>li>a');

    mobileNavItems.forEach(item => {
        item.textContent = item.textContent.replace('-', '').trim();
    })
} catch (e) {console.log(e)}

//REMOVE PLATFORM CART TRIM

cartDescriptionTrim = () => console.log('hi');

//RENAME CART

const renameCart = () => {
    const cartContent = document.querySelector('#cart+.dropdown-menu .cart-items');
    const cartBtn = document.querySelector('#button-cart');
    
    const config = {
        childList: true
    };

    const replaceCartContent = () => {
        const cartHeader = cartContent.querySelector('.cart-header p');
        const emptyCartText = cartContent.querySelector('.empty_cart p');
        const goToCartBtn = cartContent.querySelector('.button-wrapper.cart-button a');

        if (cartHeader) cartHeader.textContent = cartHeader.textContent.replace('Ваша корзина', 'Услуги').replace('товар/ы', 'услуг');
        if (emptyCartText) emptyCartText.textContent = 'Ваш список услуг пуст';
        if (goToCartBtn) goToCartBtn.textContent = 'Мой список услуг';
    };

    if (cartContent) {
        replaceCartContent();
        const observer = new MutationObserver(replaceCartContent);
        observer.observe(cartContent, config);
    }

    if (document.querySelector('#home.checkout-cart')) {
        const errorMsg = document.querySelector('.error-page h2');
        const cartHeading = document.querySelector('h3');
        const pageTitle = document.querySelector('title');
        const h1 = document.querySelector('.page-header h1');

        if (errorMsg) errorMsg.textContent = 'Ваш список услуг пуст'
        if (cartHeading) cartHeading.textContent = 'Ваш список услуг';
        if (h1) h1.textContent = 'Ваш список услуг';


        pageTitle.textContent = pageTitle.textContent.replace('Корзина покупок', 'Ваш список услуг');
    }

    if (cartBtn) {
        cartBtn.textContent = 'Оформить заявку';
    }
}

//REPLACE PRODUCTS IMG

const replaceProductsImg = () => {
    try {
        const products = document.querySelector('.content-area .products');
        const config = {
            childList: true
        };
        const replaceImgs = () => {
            const images = document.querySelectorAll('.content-area .products .thumbnail .media img');
            const productItems = products.querySelectorAll('.product-item');

            productItems.forEach(item => {
                item.setAttribute('class', 'product-item product-layout col-12 col-sm-6 ltr');
            });
            
            images.forEach(img => {
                img.setAttribute('data-src', img.src.replace('if_ar_gt_2:1/c_mpad,h_452,w_452,q_100/c_fill,h_452,w_525/if_else/c_pad,h_452,q_100,w_452/if_end/', '').replace('/e_blur:2000,q_20', ''));
                img.setAttribute('src', img.src.replace('if_ar_gt_2:1/c_mpad,h_452,w_452,q_100/c_fill,h_452,w_525/if_else/c_pad,h_452,q_100,w_452/if_end/', '').replace('/e_blur:2000,q_20', ''));
            })
        };
        
        try {
            replaceImgs()
        } catch(e) {
            console.log(e);
        }

        if (content) {
            const observer = new MutationObserver(replaceImgs);
            observer.observe(products, config);
        }
    } catch (e) {console.log(e)}
};

//REPLACE CATEGORIES IMG

const replaceCategoriesImg = () => {
    try {
        const images = document.querySelectorAll('.homefeatured_category .img-bg img');

        images.forEach(img => {
            img.src = img.src.replace(/(if)(.*)(if_end\/)/gi, '')
        })
    } catch {}
};

//ADD INNER PAGES

const addInnerPages = () => {
    const path = document.location.pathname;

    if (decodeURI(path) === "/about/") {
        const contentArea = document.querySelector('.content-area');
        contentArea.innerHTML = ABOUT_HTML;
    }
};