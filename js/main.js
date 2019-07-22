"use strict";

let slist = document.querySelector(".s-list");
let sframe = document.querySelector(".s-frame");

[...slist.children].map(li => {
    li.onclick = function ()
    {
        sframe.classList.remove("d-none");
        let active = document.querySelector("li.active").classList.remove("active");
        this.classList.add("active");
        sframe.firstElementChild.src = document.querySelector("li.active").firstElementChild.src;
        slist.classList.remove("d-flex");
        slist.classList.add("d-none");
    }
})

let sclose = document.querySelector(".s-close");

sclose.onclick = function()
{
    sclose.classList.toggle("d-block");
    sframe.classList.add("d-none");
    slist.classList.remove("d-none");
    slist.classList.add("d-flex");

}

let left = document.querySelector(".s-arrow-left");

left.onclick = function()
{
    let prev = document.querySelector("li.active").previousElementSibling;

    if(prev)
    {
        document.querySelector("li.active").classList.remove("active");
        prev.classList.add("active");
        sframe.firstElementChild.src = document.querySelector("li.active img").src;
    }
    else if(prev === null)
    {
        document.querySelector("li.active").classList.remove("active");   
        document.querySelector(".s-list li:last-child").classList.add("active");
        sframe.firstElementChild.src = document.querySelector("li.active img").src;
    }

   
}


let right = document.querySelector(".s-arrow-right");

right.onclick = function()
{
    let next = document.querySelector("li.active").nextElementSibling;

    if(next)
    {
        document.querySelector("li.active").classList.remove("active");
        next.classList.add("active");
        sframe.firstElementChild.src = document.querySelector("li.active img").src;

    }
    else
    {
        document.querySelector("li.active").classList.remove("active");   
        document.querySelector(".s-list li:first-child").classList.add("active");
        sframe.firstElementChild.src = document.querySelector("li.active img").src;
    }

   
}





















// let slist = document.querySelector(".s-list");
// let sframe = document.querySelector(".s-frame");

// [...slist.children].map(li => {
//     li.onclick = function ()
//     {
//         sframe.classList.remove("d-none")
//         let active = document.querySelector("li.active").classList.remove("active");
//         this.classList.add("active");
//         slist.classList.remove("d-flex");
//         slist.classList.add("d-none");

//         sframe.firstElementChild.src = document.querySelector("li.active").firstElementChild.src;
//     }
// })