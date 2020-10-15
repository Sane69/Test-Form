let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+3 8(099) 999-99-99')
im.mask(selector)

const form = document.getElementById('form')
const formShip = document.getElementById('formShip')
const btn = document.getElementById('button')
const back = document.getElementById('formShip__link--back')
const sendBack = document.getElementById('form__send--back')

back.onclick = () => {
    form.classList.remove('active')
    formShip.classList.remove('active')
}
sendBack.onclick = () => {
    form.classList.remove('active')
    formShip.classList.remove('active')
}

function checkform() {
    let nameOne = document.getElementById('nameOne')
    let nameTwo = document.getElementById('nameTwo')
    let phone = document.getElementById('phone')

    if (nameOne.value.length >= 3 && nameTwo.value.length >= 3 && phone.value.length >= 3) {
        btn.removeAttribute('disabled');
        btn.innerHTML = 'Continue'
    }
}

let validateForm = function (selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function () {
            form.classList.add('active')
            formShip.classList.add('active')
        },
    })

}
validateForm('.form', {
    Fname: {
        required: true,
        minLength: 3
    },
    name: {
        required: true,
        minLength: 3
    },
    tel: {
        required: true
    }
})