const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item')



function tabClick(item) {
    item.addEventListener('click', function () {
        let btn = item;
        let tabId = btn.getAttribute('data-tab');
        let tab = document.querySelector(tabId);

        if (!btn.classList.contains('active')) {

            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            })
            tabsItems.forEach(function (item) {
                item.classList.remove('active')
            })
            btn.classList.add('active');
            tab.classList.add('active');
        }

    })
}
tabsBtn.forEach(tabClick);


document.querySelector('.tabs__nav-btn').click();

