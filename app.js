const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 6 * 4;


    boxes.forEach(box => {
        const boxTap = box.getBoundingClientRect().top;

        if(boxTap < triggerBottom) {
            box.classList.add('show');
        }  else {
            box.classList.remove('show');
        }
    });
}