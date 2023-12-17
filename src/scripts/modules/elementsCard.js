export const createDivId = (classList, textContent) => {
    const element = document.createElement('div');
    element.classList.add(classList);
    element.id = textContent;
    return element;
};

export const createDiv = (classList) => {
    const element = document.createElement('div');
    element.classList.add(classList);
    return element;
};

export const createA = (classList) => {
    const element = document.createElement('a');
    element.classList.add(classList);
    return element;
};

export const creatImg = (classList, src, alt) => {
    const element = document.createElement('img');
    element.classList.add(classList);
    element.src = src;
    element.alt = alt;
    return element;
};

export const createP = (classList, textContent) => {
    const element = document.createElement('p');
    element.classList.add(classList);
    element.textContent = textContent;
    return element;
};

export const createH3 = (classList, textContent) => {
    const element = document.createElement('p');
    element.classList.add(classList);
    element.textContent = textContent;
    return element;
};

export const createButtons = (classList, textContent) => {
    const element = document.createElement('button');
    element.classList.add(classList);
    element.textContent = textContent;
    return element;
};