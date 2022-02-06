document.addEventListener('DOMContentLoaded', () => {
    
    //ADD HEADER SEARCH BTN EFFECT
    try {
        const headerSearch = document.querySelector('#search');
        const headerSearchInput = headerSearch.querySelector('.form-control');
        const headerSearchBtn = document.querySelector('#search button');

        headerSearchBtn.addEventListener('click', () => {
            const searchText = headerSearchInput.value.trim();

                if (searchText) window.open(`/search/?search=${searchText}&description=true`)
                else headerSearchInput.click()
        });
    } catch (e) { console.log(e) }

    //REMOVE UNNECESSARY STEP-WORDS IN CHECKOUT

    try {
        if (document.querySelector('#home.checkout-checkout')) {
            document.querySelectorAll('h2').forEach(h2 => h2.textContent = h2.textContent.trim().slice(6));
        }
    } catch (e) { console.log(e) }

    //RENAME STEPS TEXTCONTENT

    try {
        if (document.querySelectorAll('.step-name')) {
            document.querySelectorAll('.step-name').forEach(elem => {
                if (elem.textContent.toLowerCase().includes('корзина')) elem.textContent = 'Корзина';
                if (elem.textContent.toLowerCase().includes('касса')) elem.textContent = 'Оформление';
            })
        }
    } catch (e) { console.log(e) }

    //RENAME CHECKOUT COMMENT LABEL

    try {
        const checkoutLabelComments = document.querySelector('#home.checkout-checkout .seller-comments label');

        checkoutLabelComments.textContent = 'Комментарий к заказу';
    } catch (e) { console.log(e) }

    //REMOVE UNNECESSARY WORDS (E-MAIL NEWSLETTER, FILES)

    try {
        const xpathNews = "//legend[text()='Рассылка новостей']";
        const xpathEmail = "//a[text()='E-Mail рассылка']";
        const xpathFiles = "//a[text()='Файлы для скачивания']";
        const newsElem = document.evaluate(xpathNews, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const emailElem = document.evaluate(xpathEmail, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const filesElem = document.evaluate(xpathFiles, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                
        if (newsElem) newsElem.closest('fieldset').style.display = 'none';
        if (emailElem) emailElem.closest('li').style.display = 'none';
        if (filesElem) filesElem.closest('li').style.display = 'none';


        const blockTitles = document.querySelectorAll('.block-title.alt');
        const blockDetails = document.querySelectorAll('.details-box');
        const accountDetails = document.querySelectorAll('.widget.account-details li');

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
    } catch (e) { console.log(e) }

    //RENAME INFORMATION TITLE IN ACCOUNT
    
    try {
        const accountTitles = document.querySelectorAll('#home .widget.account-details .widget-title');

        if (accountTitles) accountTitles.forEach(elem => {
            if (elem.textContent.trim() === 'Изменить контактную информацию') {
                elem.textContent = 'Информация';
            }
        })
    } catch (e) { console.log(e) }

    //RENAME ADD TO CART BTNS IN WISHLIST

    try {
        document.querySelectorAll('#home.account-wishlist .add_to_cart button').forEach(btn => {
            if (btn.textContent.toLowerCase().includes('cart')) btn.textContent = 'Купить';
        });
    } catch (e) { console.log(e) }
});