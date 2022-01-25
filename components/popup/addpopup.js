const FORM_HTML = `
<form id="contact-form" action="/contact/" method="post" enctype="multipart/form-data" class="contact-form">
    <div class="outer required">
        <div class="form-group af-inner">
        <label class="sr-only" for="input-name">Ваше имя</label>
        <input type="text" name="name" id="input-name" placeholder="Ваше имя" value="" size="30" data-toggle="tooltip" title="" class="form-control placeholder" data-original-title="Ваше имя">
    </div>

    </div>
    <div class="outer required">
        <div class="form-group af-inner">
            <label class="sr-only" for="input-tel">Ваше имя</label>
            <input type="text" name="phone" id="input-tel" placeholder="Номер телефона" value="" size="30" data-toggle="tooltip" title="" class="form-control placeholder" data-original-title="Номер телефона">
        </div>
    </div>

    <div class="outer required">
        <div class="form-group af-inner">
            <label class="sr-only" for="input-email">Ваш E-Mail</label>
            <input type="text" name="email" id="input-email" placeholder="Ваш E-Mail" value="" size="30" data-toggle="tooltip" title="" class="form-control placeholder" data-original-title="Ваш E-Mail">
        </div>
    </div>

    <div class="form-group af-inner">
        <label class="sr-only" for="input-enquiry">Ваш вопрос или сообщение</label>
        <textarea name="enquiry" id="input-enquiry" placeholder="Ваш вопрос или сообщение" rows="4" cols="50" data-toggle="tooltip" title="" class="form-control placeholder" data-original-title="Ваш вопрос или сообщение"></textarea>
        </div>

        <fieldset>
            <div class="form-group required">
                <div class="contact-form">
                    <label class="col-sm-12 control-label" for="input-captcha">Введите код в поле ниже</label>
                    <div class="form-row captcha">
                        <div class="form-group col-sm-8">
                            <input placeholder="Введите код в поле ниже" type="text" name="captcha" id="input-captcha" class="form-control">
                        </div>

                        <div class="form-group col-sm-4">
                            <div class="captcha_img">
                                <img src="index.php?route=captcha/basic_captcha/captcha" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>

        <div class="outer required">
            <div class="form-group af-inner">
                <input type="submit" name="submit" class="form-button form-button-submit btn btn-theme btn-theme-dark" value="Отправить сообщение">
            </div>
    </div>
</form>
`;

const addPopup = (popupContent = FORM_HTML, popupTitle = 'Обратная связь') => {
    const POPUP_BTN = `<button class="popup-trigger">Кнопка попапа</button>`; //ADD ON PAGE TO ENABLE POPUP

    const POPUP_HTML = `
        <div class="popup">
            <div class="popup-wrap">
                <div class="popup-content">
                    <div class="popup-description">
                        <h2 class="section-title mt-4 section-about__title"><span>${popupTitle}</span></h2>

                        ${popupContent}
                    </div>
                    <button class="popup-close-btn"></button>
                </div>
            </div>

            <div class="popup-overlay"></div>
        </div>
    `;

    const ACTIVATE_POPUP = () => {
        const popup = document.querySelector(".popup");
        const popupOverlay = document.querySelector(".popup-overlay");
        const popupContent = document.querySelector(".popup-content");
        const html = document.documentElement;
        let scrollPos;

        const toggleScrollBlock = () => {
            if (html.classList.contains("js-scroll-block")) {
                html.classList.remove("js-scroll-block");
                window.scrollTo(0, scrollPos);
                html.style.top = "";
                return;
            }

            scrollPos = window.pageYOffset;
            html.style.top = -scrollPos + "px";
            html.classList.add("js-scroll-block");
        };

        const closePopup = (e) => {
            const target = e.target;

            if (
                !target.closest(".popup-content") ||
                target.classList.contains("popup-close-btn") ||
                e.code === "Escape"
            ) {
                popup.classList.toggle("popup_active");
                popupContent.classList.toggle("popup-content_active");
                popupOverlay.classList.toggle("popup-overlay_active");
                toggleScrollBlock();
                popup.removeEventListener("click", closePopup);
                window.removeEventListener("keydown", handlePopupKeydown);
            }
        };

        const handlePopupKeydown = (e) => {
            if (e.code === "Escape") {
                e.preventDefault();
                closePopup(e);
            }
        };

        const activatePopup = () => {
            popup.classList.toggle("popup_active");
            popupOverlay.classList.toggle("popup-overlay_active");
            popupContent.classList.toggle("popup-content_active");
            toggleScrollBlock();
            popup.addEventListener("click", closePopup);
            window.addEventListener("keydown", handlePopupKeydown);
        };


        document.body.addEventListener('click', e => {
            if (e.target.closest('.popup-trigger')) activatePopup();
        })
    };

    document.body.insertAdjacentHTML('beforeend', POPUP_HTML);
    ACTIVATE_POPUP();
};