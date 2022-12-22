//import { showSec} from "https://github.com/Mitpf/Simple-nav-menu/blob/main/s.js";


document.querySelector('nav').addEventListener('click', navigator);



const objViews = {

    btn1:'s1',
    btn2:'s2',
    btn3:'s3',
    btn4:'s4',
};


function navigator(event) {

    if(event.target.tagName=='A'){
        const id =objViews[event.target.id]
        showSec(id)

    }    
}

//

const objAlls = {};

Array.from(document.querySelector('#stuff').children).forEach(s => {
    objAlls[s.id]=s
});


document.querySelector('#stuff').replaceChildren();

const main = document.querySelector('#main-view');


export function showSec(id) {

    const element = objAlls[id]
    main.replaceChildren(element);
}

