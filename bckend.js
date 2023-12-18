// let passbox = document.getElementById("pass");
// console.log(passbox);



let ucas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lcas = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let ch = "!£$%^&*()_+-}{~#?@";
let len = 12;
let all = ucas + lcas + num + ch;

function creat_pass()
{
    let pass = "";
    // pass += ucas[Math.floor(Math.random() * ucas.length)];
    // pass += lcas[Math.floor(Math.random() * lcas.length)];
    // pass += num[Math.floor(Math.random() * num.length)];
    // pass += ch[Math.floor(Math.random() * ch.length)];
    while (pass.length < len)
    {
        pass += all[Math.floor(Math.random() * all.length)];
    }
    return pass;
}
console.log(creat_pass());
