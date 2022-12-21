
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




