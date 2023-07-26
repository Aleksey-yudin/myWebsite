
//Tabs-start

const tabsBtn = document.querySelectorAll('.menu__item');
const tabsItems = document.querySelectorAll('.work__item');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        })

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
});

//Tabs-end