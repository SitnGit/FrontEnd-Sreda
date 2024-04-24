let about = document.getElementById('ab');
about.addEventListener('click',function(){
    document.querySelector('.body').classList.add('hidden')
    document.querySelector('.about').classList.remove('hidden')
})

let list = document.getElementById('list');
list.addEventListener('click',function(){
    document.querySelector('.body').classList.remove('hidden')
    document.querySelector('.about').classList.add('hidden')
})
