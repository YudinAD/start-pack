/*
params: object;

replaceSearchBtn: boolean,
addLoginBtn: boolean,
addTel: boolean

*/

const styleMobileNav = (params) => {
    const MOBILE_NAV_LOGIN_HTML = `
        <li class="header_login-mobile flexy"> 
            <a class="d-lg-block" href="/login/" title="Личный кабинет">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0001 0.445801C7.86276 0.445801 0.440064 7.86849 0.440063 17.0058C0.440063 26.1431 7.86276 33.5658 17.0001 33.5658C26.1374 33.5658 33.5601 26.1431 33.5601 17.0058C33.5601 7.86849 26.1374 0.445801 17.0001 0.445801ZM17.0001 1.8858C25.3591 1.8858 32.1201 8.64673 32.1201 17.0058C32.1201 21.1333 30.4669 24.8668 27.7916 27.5935C26.4742 26.6263 24.8683 26.141 23.5082 25.657C22.7422 25.3845 22.0535 25.1144 21.5507 24.8133C21.0691 24.5249 20.8017 24.2286 20.6605 23.888C20.5944 23.0622 20.6078 22.3975 20.6127 21.6127C20.6999 21.5258 20.8119 21.4648 20.901 21.3596C21.1112 21.1114 21.3253 20.8099 21.5296 20.4708C21.8799 19.8893 22.1349 19.1781 22.2777 18.4571C22.4959 18.3459 22.7289 18.3218 22.9063 18.0956C23.2339 17.6781 23.455 17.0905 23.5532 16.2717C23.6402 15.5488 23.4073 15.0516 23.1074 14.67C23.43 13.6153 23.8295 11.9381 23.6938 10.2024C23.6192 9.24742 23.3789 8.28621 22.8008 7.48689C22.249 6.72378 21.353 6.17524 20.2063 5.97658C19.478 5.14968 18.3211 4.76018 16.9382 4.76018H16.9312H16.9255C13.8276 4.81705 11.8287 6.09926 10.9729 8.05502C10.1591 9.91476 10.334 12.23 10.918 14.6405C10.6041 15.0221 10.3582 15.5288 10.4469 16.2717C10.5455 17.0902 10.7665 17.6781 11.0938 18.0956C11.2711 18.3218 11.5042 18.3458 11.7224 18.4571C11.8652 19.1776 12.1202 19.8878 12.4705 20.4694C12.6748 20.8086 12.8887 21.1098 13.0991 21.3581C13.1883 21.4634 13.3001 21.5258 13.3874 21.6127C13.3921 22.3971 13.4054 23.0616 13.3396 23.888C13.1987 24.2273 12.9316 24.5238 12.4508 24.8133C11.9488 25.1156 11.261 25.3871 10.4962 25.6613C9.13752 26.1482 7.5325 26.637 6.21131 27.5963C3.53436 24.8694 1.88006 21.1348 1.88006 17.0058C1.88006 8.64673 8.64099 1.8858 17.0001 1.8858ZM16.9438 6.20158C18.2716 6.20295 19.107 6.59608 19.3358 6.99752L19.5116 7.30549L19.8618 7.3533C20.7662 7.47897 21.2716 7.82995 21.6337 8.33064C21.9957 8.83134 22.1967 9.5301 22.258 10.3149C22.3807 11.8844 21.9314 13.7378 21.6463 14.5955L21.4649 15.1397L21.9557 15.4378C21.9058 15.4074 22.1864 15.5736 22.123 16.1002C22.0462 16.7408 21.8825 17.0671 21.7729 17.2069C21.6632 17.3466 21.6163 17.3288 21.628 17.3278L21.0346 17.3771L20.9713 17.9691C20.917 18.4777 20.6309 19.1715 20.2963 19.7269C20.129 20.0046 19.951 20.2519 19.8013 20.4286C19.6516 20.6053 19.4922 20.7147 19.5524 20.6831L19.1671 20.8842V21.3202C19.1671 22.2737 19.1282 23.0534 19.229 24.1636L19.2374 24.2592L19.2712 24.3492C19.5545 25.1117 20.1459 25.6497 20.811 26.048C21.4761 26.4463 22.2391 26.7341 23.0258 27.0141C24.3225 27.4755 25.6742 27.9295 26.7046 28.6003C24.0793 30.7993 20.6977 32.1258 17.0001 32.1258C13.3039 32.1258 9.92324 30.8006 7.29834 28.6031C8.33455 27.9362 9.68827 27.4808 10.9827 27.0169C11.769 26.7351 12.53 26.446 13.1933 26.0466C13.8567 25.6472 14.446 25.1093 14.729 24.3492L14.7627 24.2592L14.7712 24.1636C14.8711 23.0543 14.833 22.2744 14.833 21.3202V20.8842L14.4477 20.6817C14.508 20.7133 14.3486 20.6039 14.1988 20.4272C14.0491 20.2505 13.8711 20.0046 13.7038 19.7269C13.3692 19.1714 13.0831 18.477 13.0288 17.9691L12.9655 17.3771L12.3721 17.3278C12.3832 17.3288 12.3368 17.3466 12.2273 17.2069C12.1177 17.0672 11.9542 16.7411 11.8771 16.1002C11.8142 15.5735 12.098 15.4053 12.0444 15.4378L12.5015 15.1608L12.3679 14.6419C11.7483 12.2575 11.6547 10.0879 12.2919 8.63158C12.9286 7.1767 14.2039 6.25366 16.9438 6.20158Z" fill="#3E3E3E"/>
                </svg>
                Личный кабинет
            </a>
        </li>
    `;
    const MOBILE_NAV_TEL_HTML = `
        <li data-nav-part="0" class="header_login-mobile flexy">
            <div>
                <a style="text-align: left" href="tel:${telNum}" class="header_tel-number">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33105 0.891028C5.85457 0.852329 5.32487 0.990195 4.83629 1.33365C4.40577 1.63357 3.47699 2.37127 2.60868 3.20572C2.17573 3.62174 1.76213 4.05468 1.44286 4.48037C1.12118 4.90606 0.840609 5.29547 0.85754 5.86145C0.874471 6.36937 0.925264 7.87138 2.00642 10.174C3.08758 12.4742 5.18459 15.6306 9.2746 19.723C13.367 23.8154 16.5234 25.9124 18.8236 26.9936C21.1238 28.0747 22.6282 28.1255 23.1361 28.1425C23.6997 28.1594 24.0891 27.8788 24.5148 27.5571C24.9405 27.2355 25.3734 26.8243 25.7895 26.3913C26.6215 25.523 27.3592 24.5942 27.6591 24.1637C28.3436 23.189 28.2299 22.0377 27.468 21.5032C26.9891 21.167 22.5847 18.2355 21.922 17.8292C21.2496 17.418 20.4756 17.6042 19.7838 17.9694C19.2396 18.2573 17.7666 19.1014 17.3458 19.3433C17.0289 19.1425 15.8268 18.3419 13.2413 15.7563C10.6533 13.1707 9.85509 11.9687 9.65434 11.6518C9.8962 11.231 10.7379 9.76522 11.0282 9.21134C11.391 8.52201 11.5941 7.74077 11.1612 7.06354C10.9798 6.77571 10.155 5.52041 9.32297 4.26027C8.48852 3.00013 7.69761 1.8053 7.49202 1.51989V1.51747C7.22355 1.14741 6.80511 0.929728 6.33105 0.891028ZM6.21737 2.15601C6.38668 2.17777 6.48826 2.2455 6.48826 2.2455C6.58743 2.38336 7.45574 3.68462 8.28777 4.94234C9.1198 6.20248 9.96877 7.49407 10.1163 7.72868C10.1405 7.76496 10.1744 8.17614 9.93249 8.63327V8.63569C9.65917 9.15571 8.38452 11.3833 8.38452 11.3833L8.20796 11.6953L8.38936 12.0049C8.38936 12.0049 9.33991 13.6085 12.3633 16.6319C15.3891 19.6553 16.9927 20.6082 16.9927 20.6082L17.3022 20.7896L17.6143 20.6131C17.6143 20.6131 19.837 19.3408 20.3619 19.0651C20.819 18.8257 21.2302 18.8571 21.2786 18.8861C21.7067 19.1498 26.4643 22.311 26.7569 22.5166C26.7666 22.5238 27.0254 22.9157 26.6481 23.4526H26.6457C26.4183 23.7791 25.6734 24.7249 24.897 25.5327C24.5075 25.9366 24.1085 26.3139 23.7698 26.5679C23.4312 26.8219 23.1289 26.9017 23.1773 26.9041C22.65 26.8872 21.4866 26.8751 19.3509 25.8713C17.2152 24.87 14.1676 22.8649 10.1502 18.845C6.13513 14.83 4.13004 11.7824 3.12628 9.64429C2.12494 7.50858 2.11284 6.34519 2.09591 5.82033C2.09833 5.8687 2.17815 5.56395 2.43211 5.22533C2.68607 4.88671 3.06097 4.48521 3.46489 4.0958C4.27516 3.3194 5.21845 2.57444 5.54497 2.34708V2.3495C5.81345 2.16084 6.04806 2.13666 6.21737 2.15601Z" fill="#6E6054"/>
                </svg>
    
                <span>${telNum}</span>
                </a>
            </div>
        </li>
    `;
    const mobileNav = document.querySelector('.mobile_side_nav_menu');
    
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