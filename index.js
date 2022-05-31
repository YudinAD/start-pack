const SHOP_NUMBER = '';

document.addEventListener('DOMContentLoaded', () => {
    const styleHeader = () => {
        const telNumElem = document.querySelector('.widget-categories a[href^="tel"]');
        const telNum = telNumElem ? telNumElem.textContent : '';
        const mobileNav = document.querySelector('.mobile_side_nav_menu');
        const headerLogo = document.querySelector('.header .logo');
        const headerWidgets = document.querySelector('.header_widgets');

        const addHeaderBtns = (buttons) => {
            const HEADER_LOGIN_BTN = buttons.login ? `
            <div class="header_login">
                <a class="d-none d-lg-block" href="/login/" title="Авторизация">
                    <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9996 1.36523C8.36994 1.36523 1.35962 8.37556 1.35962 17.0052C1.35962 25.6349 8.36994 32.6452 16.9996 32.6452C25.6293 32.6452 32.6396 25.6349 32.6396 17.0052C32.6396 8.37556 25.6293 1.36523 16.9996 1.36523ZM16.9996 2.72523C24.8943 2.72523 31.2796 9.11055 31.2796 17.0052C31.2796 20.9035 29.7183 24.4295 27.1917 27.0047C25.9474 26.0912 24.4307 25.6329 23.1462 25.1759C22.4228 24.9184 21.7723 24.6634 21.2974 24.379C20.8426 24.1066 20.5901 23.8268 20.4567 23.5051C20.3943 22.7252 20.4069 22.0974 20.4116 21.3562C20.494 21.2741 20.5996 21.2165 20.6838 21.1171C20.8824 20.8828 21.0846 20.598 21.2775 20.2777C21.6084 19.7286 21.8492 19.0569 21.9841 18.3759C22.1901 18.2708 22.4102 18.2481 22.5777 18.0345C22.8871 17.6402 23.096 17.0852 23.1887 16.312C23.2709 15.6292 23.0509 15.1596 22.7677 14.7992C23.0724 13.8031 23.4496 12.2191 23.3215 10.5798C23.251 9.67788 23.0241 8.77006 22.4781 8.01516C21.9569 7.29444 21.1108 6.77637 20.0277 6.58875C19.3399 5.80779 18.2472 5.43992 16.9412 5.43992H16.9345H16.9292C14.0034 5.49364 12.1156 6.70461 11.3073 8.55172C10.5387 10.3081 10.7039 12.4948 11.2555 14.7713C10.959 15.1317 10.7267 15.6103 10.8106 16.312C10.9036 17.085 11.1123 17.6402 11.4215 18.0345C11.5889 18.2481 11.809 18.2708 12.0152 18.3759C12.1501 19.0563 12.3909 19.7271 12.7217 20.2764C12.9147 20.5968 13.1166 20.8812 13.3154 21.1158C13.3996 21.2152 13.5052 21.2741 13.5877 21.3562C13.5921 22.097 13.6046 22.7246 13.5425 23.5051C13.4094 23.8256 13.1572 24.1056 12.7031 24.379C12.229 24.6644 11.5793 24.921 10.857 25.1798C9.57389 25.6397 8.05803 26.1014 6.81024 27.0073C4.28201 24.4319 2.71962 20.9048 2.71962 17.0052C2.71962 9.11055 9.10494 2.72523 16.9996 2.72523ZM16.9465 6.80125C18.2005 6.80254 18.9895 7.17383 19.2056 7.55297L19.3717 7.84383L19.7024 7.88898C20.5566 8.00767 21.0338 8.33916 21.3758 8.81203C21.7178 9.28491 21.9075 9.94485 21.9655 10.686C22.0814 12.1683 21.657 13.9188 21.3877 14.7288L21.2164 15.2428L21.6799 15.5244C21.6328 15.4957 21.8979 15.6526 21.838 16.1499C21.7654 16.755 21.6108 17.0632 21.5073 17.1952C21.4037 17.3271 21.3594 17.3103 21.3705 17.3094L20.81 17.3559L20.7502 17.915C20.699 18.3954 20.4288 19.0507 20.1127 19.5752C19.9547 19.8374 19.7866 20.071 19.6452 20.2379C19.5039 20.4048 19.3533 20.5081 19.4102 20.4783L19.0463 20.6682V21.0799C19.0463 21.9805 19.0096 22.7169 19.1047 23.7654L19.1127 23.8557L19.1445 23.9407C19.4121 24.6608 19.9707 25.1689 20.5988 25.5451C21.2269 25.9212 21.9476 26.1931 22.6906 26.4575C23.9153 26.8933 25.1919 27.3221 26.165 27.9556C23.6855 30.0324 20.4918 31.2852 16.9996 31.2852C13.5088 31.2852 10.316 30.0336 7.83688 27.9583C8.81553 27.3284 10.094 26.8983 11.3166 26.4602C12.0592 26.194 12.7779 25.921 13.4044 25.5437C14.0309 25.1665 14.5875 24.6585 14.8547 23.9407L14.8866 23.8557L14.8945 23.7654C14.9889 22.7177 14.953 21.9811 14.953 21.0799V20.6682L14.5891 20.477C14.646 20.5067 14.4954 20.4035 14.354 20.2366C14.2126 20.0697 14.0445 19.8375 13.8865 19.5752C13.5705 19.0505 13.3003 18.3947 13.249 17.915L13.1892 17.3559L12.6288 17.3094C12.6393 17.3103 12.5954 17.3271 12.492 17.1952C12.3885 17.0632 12.2341 16.7552 12.1613 16.1499C12.1018 15.6525 12.3699 15.4936 12.3193 15.5244L12.7509 15.2627L12.6248 14.7727C12.0397 12.5207 11.9512 10.4717 12.5531 9.09625C13.1543 7.72219 14.3588 6.85044 16.9465 6.80125Z"/>
                    </svg>
                </a>
            </div>
            ` : '';
            const HEADER_CART_SVG = buttons.cart ? `
                <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14_1143)">
                    <path d="M15.81 3.0831e-05C14.96 0.0319058 14.1472 0.393156 13.515 0.786281C12.8031 1.22987 12.5455 1.53003 12.3038 1.76378C12.3011 1.76644 12.2852 1.76112 12.2825 1.76378H12.2613C11.7831 1.54331 10.9544 1.19269 10.0088 1.10503C9.06313 1.01737 7.93688 1.22191 7.11876 2.12503H7.09751C6.36438 2.94316 6.18907 3.97909 6.24751 4.88753C6.27673 5.36034 6.38298 5.80128 6.50251 6.20503C5.93673 6.19972 5.56751 6.24753 5.56751 6.24753C5.36829 6.26612 5.19032 6.37238 5.0761 6.53706C4.96188 6.69909 4.92204 6.90362 4.97251 7.09753L8.37251 21.0588L0.19126 29.24C0.0371978 29.4047 -0.0265522 29.6358 0.0212603 29.8563C0.0212603 29.8563 0.326729 31.28 1.57251 32.4488C2.7811 33.583 4.10126 33.9788 4.10126 33.9788C4.33501 34.0425 4.58735 33.9788 4.76001 33.8088L12.5375 26.0313C12.5614 26.18 12.5694 26.3421 12.5588 26.5413C12.5269 27.1018 12.3516 27.8349 12.1975 28.6238C12.0434 29.4127 11.9027 30.268 12.0275 31.1738C12.1524 32.0796 12.572 33.0119 13.4088 33.8088C13.5734 34.0213 13.847 34.1196 14.11 34.0558C14.3703 33.9947 14.5722 33.7849 14.6227 33.5192C14.6731 33.2563 14.5642 32.9853 14.3438 32.8313C13.7195 32.2363 13.4778 31.6333 13.3875 30.9825C13.2972 30.3318 13.3928 29.6199 13.5363 28.8788C13.6505 28.2891 13.7992 27.6968 13.8763 27.0938C15.0663 28.5839 15.6772 29.9678 16.405 31.1525C16.9044 31.9653 17.4808 32.6958 18.3388 33.2138C19.1967 33.7318 20.2858 34 21.76 34C22.0203 34.0293 22.2753 33.9071 22.4134 33.6839C22.5542 33.4608 22.5542 33.1792 22.4134 32.9561C22.2753 32.733 22.0203 32.6108 21.76 32.64C20.4478 32.64 19.635 32.4063 19.04 32.045C18.445 31.6838 18.0253 31.1632 17.5738 30.43C16.8964 29.3277 16.1952 27.7817 14.8113 26.095L26.9025 29.0275C27.0805 29.07 27.2664 29.0408 27.4231 28.9452C27.5799 28.8496 27.6888 28.6955 27.7313 28.5175C27.7313 28.5175 27.7499 28.4432 27.7738 28.305C28.7699 27.7924 29.2905 26.7299 29.6225 25.84C29.9041 25.0857 29.9545 24.7058 30.005 24.4163C30.3025 24.3578 30.7302 24.3047 31.5138 23.9488C32.5284 23.4893 33.737 22.6552 34 21.2075V21.1863C34.2258 19.8794 33.4634 18.8196 32.6825 18.105C32.0158 17.4941 31.3889 17.1886 30.9613 16.9788C31.0038 16.5352 31.0383 15.6719 30.7913 14.6413C31.4128 14.3066 31.9786 13.8152 32.3 13.0688H32.3213C32.3239 13.0635 32.3186 13.0528 32.3213 13.0475C32.8445 11.8416 32.3584 10.6197 31.7688 9.75378C31.2534 8.99941 30.7169 8.54519 30.345 8.24503C30.4566 7.93425 30.6292 7.55972 30.7275 6.71503C30.8577 5.60206 30.7355 4.13316 29.6013 3.23003L29.6225 3.20878C29.6092 3.19816 29.5933 3.19816 29.58 3.18753C28.4564 2.27644 26.9902 2.50753 25.925 2.86878C25.1414 3.13441 24.8386 3.34691 24.5438 3.52753C24.5384 3.52487 24.5278 3.51159 24.5225 3.50628C24.0922 3.18488 23.3883 2.68019 22.5038 2.38003C22.0549 2.22862 21.5395 2.13566 21.0163 2.16753C20.5009 2.19675 19.9777 2.36144 19.4863 2.69878C19.4809 2.70409 19.4703 2.69347 19.465 2.69878V2.72003C19.2631 2.85284 19.0905 3.00691 18.9338 3.16628C18.7717 2.07456 18.36 0.850031 17.17 0.276281C16.8406 0.116906 16.498 0.0265933 16.1713 3.0831e-05C16.0491 -0.0105942 15.9322 -0.00528167 15.81 3.0831e-05ZM15.7463 1.38128C16.0411 1.35472 16.328 1.38925 16.575 1.50878C17.2178 1.81956 17.5366 2.72534 17.6375 3.69753C17.7384 4.66972 17.6163 5.54628 17.6163 5.54628L17.51 6.33253H18.0838C18.2166 6.51316 18.4317 6.61675 18.6575 6.60878C18.9895 6.808 19.3747 7.07362 19.7413 7.41628C20.3363 7.97409 20.7294 8.593 20.6125 9.26503C20.5142 9.80691 20.1875 10.2133 19.72 10.5613C19.3747 10.8189 18.9683 11.0075 18.5725 11.1563C18.0652 10.5108 17.4569 9.99816 16.7875 9.62628C16.4953 9.46425 16.1952 9.33409 15.895 9.22253C15.9959 8.91441 16.0438 8.59034 16.0438 8.28753C16.0438 6.75487 14.7927 5.50378 13.26 5.50378C12.1258 5.50378 11.1403 6.20769 10.71 7.20378C9.97157 6.78144 9.16938 6.53175 8.43626 6.39628C8.27954 6.36706 8.14142 6.35378 7.99001 6.33253C7.82267 5.92878 7.66329 5.35769 7.62876 4.80253C7.58626 4.1305 7.69517 3.51159 8.11751 3.03878C8.59298 2.5155 9.19329 2.40128 9.88126 2.46503C10.5613 2.52878 11.2599 2.81034 11.6663 2.99628C11.6716 2.99894 11.6822 2.99362 11.6875 2.99628L12.07 3.18753L12.5163 3.42128L12.8775 3.06003C12.8775 3.06003 13.4486 2.44378 14.2375 1.95503C14.7316 1.64956 15.2549 1.42644 15.7463 1.38128ZM21.1225 3.52753C21.42 3.51159 21.7308 3.56472 22.0575 3.67628C22.7083 3.89941 23.3484 4.34034 23.7363 4.63253L23.7575 4.65378C23.8 4.683 23.8213 4.683 23.8213 4.67503L24.14 5.35503L24.7988 4.93003C24.7988 4.93003 25.492 4.46253 26.3713 4.16503C27.2505 3.86753 28.1589 3.7905 28.73 4.27128H28.7513V4.29253C29.3489 4.75206 29.4738 5.63128 29.3675 6.54503C29.2613 7.45878 28.9425 8.24503 28.9425 8.24503L28.56 9.18003H29.3675C29.6066 9.36597 30.2042 9.87331 30.6425 10.5188C31.1047 11.1961 31.3438 11.8947 31.0675 12.5163C30.7541 13.26 29.8961 13.6372 29.0063 13.8125C28.1164 13.9878 27.3275 13.94 27.3275 13.94L26.7963 13.8975L26.6263 14.3863C26.6263 14.3863 26.3474 15.1141 25.8613 15.8525C25.4309 16.5086 24.8678 17.0797 24.31 17.2338C24.1745 17.0133 24.0231 16.7982 23.8638 16.5963C23.197 15.7463 22.3736 15.0211 21.4838 14.5775C21.3828 14.3411 21.335 14.1525 21.335 14.1525L21.2288 13.6H20.6763C20.6763 13.6 20.238 13.5788 19.6988 13.515C19.5952 13.1086 19.4597 12.7235 19.295 12.3675C19.7014 12.1975 20.1211 11.9664 20.5275 11.6663C20.8808 11.4033 21.2208 11.0686 21.4838 10.6675C21.8131 11.8416 22.8677 12.7288 24.14 12.7288C25.6727 12.7288 26.9238 11.4564 26.9238 9.92378C26.9238 8.39112 25.6727 7.14003 24.14 7.14003C23.2183 7.14003 22.3949 7.59425 21.8875 8.28753C21.6803 7.5305 21.1889 6.89831 20.6763 6.41753C20.1769 5.95003 19.7253 5.69237 19.3375 5.48253C19.3959 4.81581 19.627 4.23409 20.23 3.84628V3.82503H20.2513C20.5355 3.62581 20.825 3.54347 21.1225 3.52753ZM13.26 6.86378C14.0409 6.86378 14.6838 7.50659 14.6838 8.28753C14.6838 8.51862 14.6386 8.7205 14.5563 8.88253C13.8417 8.77894 13.1431 8.78956 12.5163 8.90378C12.3224 8.59566 12.0992 8.31941 11.8575 8.07503C11.9691 7.41894 12.588 6.86378 13.26 6.86378ZM7.18251 7.62878C7.43485 7.63144 7.7536 7.65269 8.20251 7.73503C9.52798 7.97941 10.9092 8.55316 11.56 9.88128C11.7034 10.1841 12.0461 10.3355 12.3675 10.2425C13.1989 9.98222 14.8006 10.1124 16.1075 10.8375C16.7184 11.1775 17.2763 11.6132 17.7013 12.1975C17.7145 12.2188 17.7278 12.24 17.7438 12.2613C17.7464 12.2666 17.7411 12.2772 17.7438 12.2825C17.757 12.2985 17.7703 12.3118 17.7863 12.325C17.7942 12.3383 17.7995 12.3542 17.8075 12.3675C17.8208 12.3888 17.8341 12.41 17.85 12.4313C18.1342 12.8802 18.352 13.4141 18.4663 14.025C18.4477 14.1472 18.4609 14.2721 18.5088 14.3863C18.5247 14.5191 18.5459 14.6493 18.5513 14.79C18.5619 14.9813 18.6549 15.1619 18.8036 15.2814C18.9524 15.4036 19.1463 15.4567 19.3375 15.4275C20.2088 15.3133 21.7653 16.1553 22.78 17.4463C23.7947 18.7372 24.2436 20.2725 23.545 21.4838C23.4467 21.6432 23.4202 21.8371 23.468 22.0177C23.5158 22.1983 23.6353 22.3497 23.8 22.44C23.808 22.44 23.8133 22.44 23.8213 22.44C23.9195 22.5702 24.063 22.6605 24.225 22.695C24.2303 22.6977 24.2409 22.6924 24.2463 22.695C25.7178 23.6274 26.2464 24.8705 26.435 25.9888C26.5758 26.8228 26.4695 27.1257 26.4138 27.4975L13.0688 24.2675L9.73251 20.9313L6.52376 7.65003C6.74157 7.63941 6.93017 7.62612 7.18251 7.62878ZM24.14 8.50003C24.9342 8.50003 25.5638 9.12956 25.5638 9.92378C25.5638 10.718 24.9342 11.3475 24.14 11.3475C23.3458 11.3475 22.7163 10.718 22.7163 9.92378C22.7163 9.12956 23.3458 8.50003 24.14 8.50003ZM29.5163 15.1088C29.7208 16.166 29.58 17.255 29.58 17.255L29.4738 18.02H30.0688L30.1113 18.0413C30.3477 18.1449 31.1339 18.5433 31.7475 19.1038C32.3531 19.6589 32.7436 20.2938 32.64 20.9525C32.64 20.9605 32.64 20.9658 32.64 20.9738C32.4886 21.76 31.7555 22.3258 30.94 22.695C30.1192 23.0669 29.3463 23.1838 29.3463 23.1838L28.8363 23.2688L28.7725 23.7788C28.7725 23.7788 28.6583 24.5411 28.3475 25.3725C28.2174 25.7232 28.0314 26.0393 27.8375 26.3288C27.8216 26.1508 27.8056 25.9649 27.7738 25.7763C27.6064 24.7802 27.1389 23.6486 26.2225 22.6525C27.2691 22.2488 28.0288 21.2394 28.0288 20.06C28.0288 18.9125 27.3116 17.9138 26.3075 17.4888C26.5705 17.2046 26.8175 16.9097 27.0088 16.6175C27.455 15.9402 27.5772 15.5577 27.6888 15.2788C27.9942 15.2921 28.4325 15.3399 29.2825 15.1725C29.3569 15.1566 29.4392 15.1274 29.5163 15.1088ZM25.2238 18.6363C26.0047 18.6363 26.6475 19.2791 26.6475 20.06C26.6475 20.841 26.0047 21.4838 25.2238 21.4838C25.152 21.4838 25.0644 21.4785 24.9688 21.4625C25.2849 20.5355 25.2556 19.5713 24.9688 18.6575C25.0511 18.6469 25.1361 18.6363 25.2238 18.6363ZM9.11626 22.2488L11.7513 24.8838L4.12251 32.5125C3.77454 32.3744 3.19814 32.1194 2.50751 31.4713C1.82485 30.8311 1.58048 30.2388 1.46626 29.8988L9.11626 22.2488Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_14_1143">
                    <rect width="34" height="34" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>            
            ` : '';
            const HEADER_WISHLIST_BTN = buttons.wishlist ? `
            <div class="header-wishlist">
                <a class="header-wishlist__link" href="/index.php?route=account/wishlist" title="Список закладок">
                    <svg width="28" height="25" viewBox="0 0 28 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.562 1C16.1666 1 14 5.1818 14 5.1818C14 5.1818 11.8335 1 7.43806 1C3.86596 1 1.03725 3.88414 1.00069 7.32563C0.926217 14.4693 6.87273 19.5496 13.3907 23.8189C13.5704 23.9369 13.7827 24 14 24C14.2173 24 14.4297 23.9369 14.6093 23.8189C21.1266 19.5496 27.0731 14.4693 26.9993 7.32563C26.9628 3.88414 24.1341 1 20.562 1V1Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            ` : '';
            const HEADER_SEARCH_SVG = buttons.search ? `
            <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3854 3.625C7.5579 3.625 3.625 7.55791 3.625 12.3854C3.625 17.2129 7.5579 21.1458 12.3854 21.1458C14.4736 21.1458 16.3933 20.4082 17.9008 19.1823L23.828 25.1095C23.9115 25.1965 24.0115 25.2659 24.1222 25.3137C24.2329 25.3616 24.352 25.3868 24.4726 25.3881C24.5931 25.3893 24.7127 25.3665 24.8244 25.3209C24.936 25.2753 25.0374 25.2079 25.1227 25.1227C25.2079 25.0374 25.2753 24.936 25.3209 24.8244C25.3665 24.7127 25.3893 24.5931 25.3881 24.4726C25.3868 24.352 25.3616 24.2329 25.3137 24.1222C25.2659 24.0115 25.1965 23.9115 25.1095 23.828L19.1823 17.9008C20.4082 16.3933 21.1458 14.4736 21.1458 12.3854C21.1458 7.55791 17.2129 3.625 12.3854 3.625ZM12.3854 5.4375C16.2334 5.4375 19.3333 8.53745 19.3333 12.3854C19.3333 14.2599 18.594 15.9535 17.3946 17.201C17.3206 17.2554 17.2554 17.3206 17.201 17.3946C15.9535 18.594 14.2599 19.3333 12.3854 19.3333C8.53745 19.3333 5.4375 16.2334 5.4375 12.3854C5.4375 8.53745 8.53745 5.4375 12.3854 5.4375Z" />
            </svg>
            ` : '';
            const headerLogin = document.querySelector('.header_login');
            const headerCartBtn = document.querySelector('.header-cart');
            const searchBtn = document.querySelector('.header-search>button');
            const searchDiv = document.querySelector('.header-search .search_field');
            const searchInput = document.querySelector('.header-search .search_field input');
        
            
            try {
                if (buttons.login && headerLogin) headerLogin.remove();
        
                headerCartBtn.insertAdjacentHTML('beforebegin', HEADER_LOGIN_BTN + HEADER_WISHLIST_BTN);
                headerCartBtn.querySelector('.fa-shopping-cart').remove();
                headerCartBtn.querySelector('.dropdown a').insertAdjacentHTML('afterbegin', HEADER_CART_SVG);
            } catch {}
        
            //STYLE HEADER SEARCH
            if (buttons.search) {
                try {
                    searchBtn.innerHTML = HEADER_SEARCH_SVG;
        
                    const handleBodyClick = (e) => {
                        if (!e.target.closest('#search')) {
                            searchDiv.classList.remove('active');
                            document.body.removeEventListener('click', handleBodyClick);
                        }
                    };
        
                    searchBtn.addEventListener('click', () => {
                        searchDiv.classList.add('active');
                        searchInput.click();
        
                        document.body.addEventListener('click', handleBodyClick);
                    })
                } catch {}
            }
        };
    
        // addHeaderBtns({
        //     login: true,
        //     cart: true,
        //     wishlist: true,
        //     search: false
        // });
    
        const styleMobileNav = (params) => {
            const MOBILE_NAV_LOGIN_HTML = `
                <li class="header_login-mobile flexy"> 
                    <a class="d-flex align-items-center" href="/login/" title="Личный кабинет">
                        <svg class="mr-2" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0001 0.445801C7.86276 0.445801 0.440064 7.86849 0.440063 17.0058C0.440063 26.1431 7.86276 33.5658 17.0001 33.5658C26.1374 33.5658 33.5601 26.1431 33.5601 17.0058C33.5601 7.86849 26.1374 0.445801 17.0001 0.445801ZM17.0001 1.8858C25.3591 1.8858 32.1201 8.64673 32.1201 17.0058C32.1201 21.1333 30.4669 24.8668 27.7916 27.5935C26.4742 26.6263 24.8683 26.141 23.5082 25.657C22.7422 25.3845 22.0535 25.1144 21.5507 24.8133C21.0691 24.5249 20.8017 24.2286 20.6605 23.888C20.5944 23.0622 20.6078 22.3975 20.6127 21.6127C20.6999 21.5258 20.8119 21.4648 20.901 21.3596C21.1112 21.1114 21.3253 20.8099 21.5296 20.4708C21.8799 19.8893 22.1349 19.1781 22.2777 18.4571C22.4959 18.3459 22.7289 18.3218 22.9063 18.0956C23.2339 17.6781 23.455 17.0905 23.5532 16.2717C23.6402 15.5488 23.4073 15.0516 23.1074 14.67C23.43 13.6153 23.8295 11.9381 23.6938 10.2024C23.6192 9.24742 23.3789 8.28621 22.8008 7.48689C22.249 6.72378 21.353 6.17524 20.2063 5.97658C19.478 5.14968 18.3211 4.76018 16.9382 4.76018H16.9312H16.9255C13.8276 4.81705 11.8287 6.09926 10.9729 8.05502C10.1591 9.91476 10.334 12.23 10.918 14.6405C10.6041 15.0221 10.3582 15.5288 10.4469 16.2717C10.5455 17.0902 10.7665 17.6781 11.0938 18.0956C11.2711 18.3218 11.5042 18.3458 11.7224 18.4571C11.8652 19.1776 12.1202 19.8878 12.4705 20.4694C12.6748 20.8086 12.8887 21.1098 13.0991 21.3581C13.1883 21.4634 13.3001 21.5258 13.3874 21.6127C13.3921 22.3971 13.4054 23.0616 13.3396 23.888C13.1987 24.2273 12.9316 24.5238 12.4508 24.8133C11.9488 25.1156 11.261 25.3871 10.4962 25.6613C9.13752 26.1482 7.5325 26.637 6.21131 27.5963C3.53436 24.8694 1.88006 21.1348 1.88006 17.0058C1.88006 8.64673 8.64099 1.8858 17.0001 1.8858ZM16.9438 6.20158C18.2716 6.20295 19.107 6.59608 19.3358 6.99752L19.5116 7.30549L19.8618 7.3533C20.7662 7.47897 21.2716 7.82995 21.6337 8.33064C21.9957 8.83134 22.1967 9.5301 22.258 10.3149C22.3807 11.8844 21.9314 13.7378 21.6463 14.5955L21.4649 15.1397L21.9557 15.4378C21.9058 15.4074 22.1864 15.5736 22.123 16.1002C22.0462 16.7408 21.8825 17.0671 21.7729 17.2069C21.6632 17.3466 21.6163 17.3288 21.628 17.3278L21.0346 17.3771L20.9713 17.9691C20.917 18.4777 20.6309 19.1715 20.2963 19.7269C20.129 20.0046 19.951 20.2519 19.8013 20.4286C19.6516 20.6053 19.4922 20.7147 19.5524 20.6831L19.1671 20.8842V21.3202C19.1671 22.2737 19.1282 23.0534 19.229 24.1636L19.2374 24.2592L19.2712 24.3492C19.5545 25.1117 20.1459 25.6497 20.811 26.048C21.4761 26.4463 22.2391 26.7341 23.0258 27.0141C24.3225 27.4755 25.6742 27.9295 26.7046 28.6003C24.0793 30.7993 20.6977 32.1258 17.0001 32.1258C13.3039 32.1258 9.92324 30.8006 7.29834 28.6031C8.33455 27.9362 9.68827 27.4808 10.9827 27.0169C11.769 26.7351 12.53 26.446 13.1933 26.0466C13.8567 25.6472 14.446 25.1093 14.729 24.3492L14.7627 24.2592L14.7712 24.1636C14.8711 23.0543 14.833 22.2744 14.833 21.3202V20.8842L14.4477 20.6817C14.508 20.7133 14.3486 20.6039 14.1988 20.4272C14.0491 20.2505 13.8711 20.0046 13.7038 19.7269C13.3692 19.1714 13.0831 18.477 13.0288 17.9691L12.9655 17.3771L12.3721 17.3278C12.3832 17.3288 12.3368 17.3466 12.2273 17.2069C12.1177 17.0672 11.9542 16.7411 11.8771 16.1002C11.8142 15.5735 12.098 15.4053 12.0444 15.4378L12.5015 15.1608L12.3679 14.6419C11.7483 12.2575 11.6547 10.0879 12.2919 8.63158C12.9286 7.1767 14.2039 6.25366 16.9438 6.20158Z" fill="#3E3E3E"/>
                        </svg>
                        Личный кабинет
                    </a>
                </li>
            `;
            const MOBILE_NAV_TEL_HTML = `
                <li data-nav-part="0" class="header_tel-mobile flexy">
                    <div>
                        <a style="text-align: left" href="tel:${telNum}" class="header_tel-number d-flex align-items-center">
                        <svg class="mr-2" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33105 0.891028C5.85457 0.852329 5.32487 0.990195 4.83629 1.33365C4.40577 1.63357 3.47699 2.37127 2.60868 3.20572C2.17573 3.62174 1.76213 4.05468 1.44286 4.48037C1.12118 4.90606 0.840609 5.29547 0.85754 5.86145C0.874471 6.36937 0.925264 7.87138 2.00642 10.174C3.08758 12.4742 5.18459 15.6306 9.2746 19.723C13.367 23.8154 16.5234 25.9124 18.8236 26.9936C21.1238 28.0747 22.6282 28.1255 23.1361 28.1425C23.6997 28.1594 24.0891 27.8788 24.5148 27.5571C24.9405 27.2355 25.3734 26.8243 25.7895 26.3913C26.6215 25.523 27.3592 24.5942 27.6591 24.1637C28.3436 23.189 28.2299 22.0377 27.468 21.5032C26.9891 21.167 22.5847 18.2355 21.922 17.8292C21.2496 17.418 20.4756 17.6042 19.7838 17.9694C19.2396 18.2573 17.7666 19.1014 17.3458 19.3433C17.0289 19.1425 15.8268 18.3419 13.2413 15.7563C10.6533 13.1707 9.85509 11.9687 9.65434 11.6518C9.8962 11.231 10.7379 9.76522 11.0282 9.21134C11.391 8.52201 11.5941 7.74077 11.1612 7.06354C10.9798 6.77571 10.155 5.52041 9.32297 4.26027C8.48852 3.00013 7.69761 1.8053 7.49202 1.51989V1.51747C7.22355 1.14741 6.80511 0.929728 6.33105 0.891028ZM6.21737 2.15601C6.38668 2.17777 6.48826 2.2455 6.48826 2.2455C6.58743 2.38336 7.45574 3.68462 8.28777 4.94234C9.1198 6.20248 9.96877 7.49407 10.1163 7.72868C10.1405 7.76496 10.1744 8.17614 9.93249 8.63327V8.63569C9.65917 9.15571 8.38452 11.3833 8.38452 11.3833L8.20796 11.6953L8.38936 12.0049C8.38936 12.0049 9.33991 13.6085 12.3633 16.6319C15.3891 19.6553 16.9927 20.6082 16.9927 20.6082L17.3022 20.7896L17.6143 20.6131C17.6143 20.6131 19.837 19.3408 20.3619 19.0651C20.819 18.8257 21.2302 18.8571 21.2786 18.8861C21.7067 19.1498 26.4643 22.311 26.7569 22.5166C26.7666 22.5238 27.0254 22.9157 26.6481 23.4526H26.6457C26.4183 23.7791 25.6734 24.7249 24.897 25.5327C24.5075 25.9366 24.1085 26.3139 23.7698 26.5679C23.4312 26.8219 23.1289 26.9017 23.1773 26.9041C22.65 26.8872 21.4866 26.8751 19.3509 25.8713C17.2152 24.87 14.1676 22.8649 10.1502 18.845C6.13513 14.83 4.13004 11.7824 3.12628 9.64429C2.12494 7.50858 2.11284 6.34519 2.09591 5.82033C2.09833 5.8687 2.17815 5.56395 2.43211 5.22533C2.68607 4.88671 3.06097 4.48521 3.46489 4.0958C4.27516 3.3194 5.21845 2.57444 5.54497 2.34708V2.3495C5.81345 2.16084 6.04806 2.13666 6.21737 2.15601Z" fill="#6E6054"/>
                        </svg>
            
                        <span>${telNum}</span>
                        </a>
                    </div>
                </li>
            `;
            const mobileNav = document.querySelector('.mobile_side_nav_menu');
            const mobileNavWrapper = document.querySelector('.navigation.mobile_side_nav');
            const headerWrapper = document.querySelector('.header-wrapper');

            //INSERT MOBILE NAV IN HEADER WRAPPER
            //Нужно только если делаем бургер меню на всю ширину экрана (не платформенный стиль)
            // try {
            //     headerWrapper.insertAdjacentElement('beforeend', mobileNavWrapper);
            // } catch (e) {}
            
            //INSERT MOBILE NAV TEL
            //INSERT MOBILE NAV LOGIN
            try {
                if (params.addTel) mobileNav.insertAdjacentHTML('afterbegin', MOBILE_NAV_TEL_HTML);
                if (params.addLoginBtn) mobileNav.insertAdjacentHTML("beforeend", MOBILE_NAV_LOGIN_HTML);
            } catch {}
        
            //REPLACE SEARCH ICON WITH TEXT
            if (params.replaceSearchBtn) {
                try {
                    const mobileSearchBtn = document.querySelector('.mobile_side_nav_menu .sidenav_search .far.fa-search')
            
                    mobileSearchBtn.className = 'mobile-nav-search';
                    mobileSearchBtn.textContent = 'Найти';
                } catch (e) {}
            }
        };
    
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