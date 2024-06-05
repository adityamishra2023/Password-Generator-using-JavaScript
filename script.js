const length = document.querySelector('#length-number')
const upper = document.querySelector('#uppercase')
const lower = document.querySelector('#lowercase')
const number = document.querySelector('#number')
const symbol = document.querySelector('#symbol')
const passin = document.querySelector('#pass-input')
const copy = document.querySelector('#copy')
const generate = document.querySelector('#generate')

console.log(length.value)
console.log(upper.checked)
console.log(lower.checked)
console.log(number.checked)
console.log(symbol.checked)

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz'
const numbercasestr = '0123456789'
const symbolcasestr = '!@$#%^&*()_+'
let password = '';
generate.addEventListener('click', () => {
    let str = '';
    if (upper.checked) {
        str += uppercasestr;
    }
    if (lower.checked) {
        str += lowercasestr;
    }
    if (number.checked) {
        str += numbercasestr
    }
    if (symbol.checked) {
        str += symbolcasestr
    }



    for (let i = 0; i < length.value; i++) {
        console.log(str, "str")
        let index = Math.floor(Math.random() * str.length)
        console.log(index, "index")
        console.log("Math.random()", Math.random())
        console.log("Math.random() * str.length", Math.random() * str.length)
        console.log("Math.floor(Math.random() *str.length)", Math.floor(Math.random() * str.length))
        console.log(str[index])
        password += str[index];
    }
    console.log(password, "password")
    passin.value = password;
})

copy.addEventListener('click', () => {
    if (passin.value === '') {
        alert('Please Generate a Password First');
    } else {
        const newele = document.createElement('textarea');
        newele.value = passin.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();
    }
})