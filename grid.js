function createDivs() {
    const container = document.querySelector('#container');
    const btndiv = document.querySelector('#button');
    const btn = createElementWithClass('button', 'button')
    btn.textContent = "Cleanse Grid";
    //btn.onclick = function () { document.querySelectorAll('.row').forEach(e => e.remove()); };
    btn.onclick = function () { wholeGrid.forEach((row) => { row.classList.remove('hovered') }) };
    btndiv.appendChild(btn);


    for (let i = 1; i <= Math.pow(totalDivs, 2); i++) {
        const content = createElementWithClass('grid-container', 'row');
        content.classList.add('content');
        content.textContent = "";
        container.appendChild(content);
    }

}

function createElementWithClass(type, className) {
    const element = document.createElement(type);
    element.className = className;
    return element;
}

function removeTransition(e) {
    if (e.propertyName !== 'background-color') return;
    e.target.classList.remove('hovered');
}

////////////////////////////////execution//////////////////////////////////////////

const totalDivs = 16;
createElementWithClass('grid-container', 'div')
createDivs();
const wholeGrid = document.querySelectorAll('.row');
wholeGrid.forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.classList.add('hovered');
    });
});

// fade effect for the trail (auto cleanses after .5s)
// wholeGrid.forEach(row => row.addEventListener('transitionend', removeTransition));

