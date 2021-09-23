let changableBtn = document.querySelector(".picking-taste");
let btns = Array.from(changableBtn.children);


changableBtn.addEventListener('click', (e) => {
    let selected = e.target;

    for (let i = 0; i < btns.length; i ++) {
        if (btns[i] != selected && btns[i].classList.contains('change-blue')) {
            btns[i].classList.remove('change-blue');
            btns[i].classList.add('change-white');
        }
    }

    if (selected.classList.contains('change-white')) {
        selected.classList.remove('change-white');
        selected.classList.add('change-blue');
    } 

});