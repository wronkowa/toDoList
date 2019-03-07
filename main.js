// pobranie 
const task = document.querySelector('.addBox>input');
let numberTask = 0;

//stworzenie li i dodanie do ul
const createLi = () => {
    const liEl = document.createElement('li');
    liEl.innerHTML = `<span class="checked"><i class="fas fa-check"></i></span> ${task.value} <span class="delate"><i class="fas fa-trash-alt"></i></span>`
    task.value = '';
    document.querySelector('ul').appendChild(liEl);
    numberTask++;
    document.querySelector('.numberTask').textContent = numberTask;
}

// zaznaczanie zrobionego elementu 
const checkLi = (e) => {
    // console.log(e.target.parentNode);
    e.target.parentNode.classList.toggle('active');
    e.target.classList.add('active');
    e.target.parentNode.parentNode.classList.toggle('active');
}
const delateLi = (e) => {
    e.target.parentNode.parentNode.remove();
    numberTask--;
    document.querySelector('.numberTask').textContent = numberTask;
}
// ustawienie klika na addBtn
document.querySelector('.addBox>button').addEventListener('click', () => {
    // console.log('dziala');
    // if (task.value) {
    //     createLi();
    // } else alert('Wpisz zadanie')
    createLi();
    document.querySelectorAll(".checked").forEach(item => item.addEventListener('click', checkLi));
    document.querySelectorAll(".delate").forEach(item => item.addEventListener('click', delateLi));

})