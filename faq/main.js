let buttons = document.querySelectorAll('img')

let faqs = document.querySelectorAll('.flex')

// faqs.forEach(function(faq){
//     faq.addEventListener('click', display1)
// })




buttons.forEach(function(btn){
    btn.addEventListener('click', display2)
})

// function display1(e){
//     if(e.target.parentNode.lastElementChild.style.display === 'none'){
//         e.target.parentNode.lastElementChild.style.display = 'block'
//     }else{
//         e.target.parentNode.lastElementChild.style.display = 'none'
//     }
// }

function display2(e){
    if(e.target.parentNode.nextElementSibling.style.display === 'none'){
        e.target.parentNode.nextElementSibling.style.display = 'block'
    } else{
        e.target.parentNode.nextElementSibling.style.display = 'none'
    }

    if(e.target.style.transform === 'rotate(360deg)'){
        e.target.style.transform = 'rotate(-90deg)'
    } else{
        e.target.style.transform = 'rotate(360deg)'
    }
}