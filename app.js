import { showSec} from "./s.js";


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

//////


