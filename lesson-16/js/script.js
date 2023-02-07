const form = document.forms['form'];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements['button'];
const checkbox = form.elements['checked'];
const inputName = form.elements['name'];
const inputPhone = form.elements['phone'];
function toggleButton(f) {
    if(f.checked.checked && f.name.value !== '' && f.phone.value !== '' ) {
        alert('Letter sent');
    } else {
        alert('Letter not sent');
    }
}
function Init() {
    let myName = document.getElementById('name');
        myName.addEventListener('keypress',checkName,false);
    let myPhone = document.getElementById('phone');
        myPhone.addEventListener('keypress',checkPhone,false);
}
function checkPhone(evt) {
    let charCode = evt.charCode;
        if(charCode != 0) {
        if(charCode < 48 || charCode > 57) {
            evt.preventDefault();
            alert('Error input phone');
        }
    }
}
function checkName(evt) {
    let charCode = evt.charCode;
        if(charCode != 0) {
        if(charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122 && charCode < 192 || charCode > 255) {
            evt.preventDefault();
            alert('Error input name');
        }
    }
}




