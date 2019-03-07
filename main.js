// pobranie wpisanego zadanie i przycisku add
const task = document.querySelector('.addBox>input');
const addBtn = document.querySelector('.addBox>button');

const createLi = () => {
    const liEl = document.createElement('li');
    liEl.innerHTML = `<span class="checked"><i class="fas fa-check"></i></span> ${task.value} <span class="delate"><i class="fas fa-trash-alt"></i></span>`
    task.value = '';
    document.querySelector('ul').appendChild(liEl);
}
// ustawienie klika na addBtn
addBtn.addEventListener('click', (e) => {
    console.log('dziala');
    createLi();
})