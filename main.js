const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

//Hàm hiển thị modal mua vé (thêm class open vào modal)

function showBuytickets() {
    modal.classList.add('open')
    
}

//Hàm ẩn modal mua vé (gỡ bỏ class open của hàm modal đi )
function hideBuytickets() {
    modal.classList.remove('open')   
} 

//Lặp qua từng thẻ button và lắng nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click' , showBuytickets )
}

//Nghe hành vi click vào button close
modalClose.addEventListener('click' ,hideBuytickets)

modal.addEventListener('click' ,hideBuytickets)

modalContainer.addEventListener('click' ,function(event)
{
    event.stopPropagation()
}
)

// Nghe hành vi click vào menu ẩn hiện 
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }

}

// Tự động đóng menu khi chọn menu
var menuItems = document.querySelectorAll ('#nav li a[href*="#"]');
for (var i = 0 ; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu){
            event.preventDefault();
        } else{
            header.style.height = null;
        }
        
    }
}



