const sidebarToggle = document.querySelector('.sidebar-toggle'),
        darkToggle = document.querySelector('#dark-toggle'),
        sidebar = document.querySelector('.sidebar'),
        container = document.querySelector('.container');

sidebarToggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('close');
    container.classList.toggle('wsidebar');
})

darkToggle.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    this.classList.toggle('active');
});


// if($('iframe').length != 0){
//     $('iframe').contents().find('html').toggleClass('dark')
//     let iframes = $('iframe').contents().find('iframe')
//     iframes.contents().find('html').toggleClass('dark')
// }