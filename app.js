const listSlide = () => {
    const box = document.querySelector('.box');
    const list = document.querySelector('.list');
    
        box.addEventListener('click', ()=> {
            box.classlist.toggle('list-active');
            
        });
       
}
listSlide();
