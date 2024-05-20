'use strict'

function rnd(min, max) {
    return Math.random() * (max - min) + min;
  }

let count=0;
let x1 = Math.round(rnd(1,1001));
let x2 = Math.round(rnd(1,1001));
console.log("leha-Lnd") 
let str1 = document.querySelector('p11');
str1.textContent = x1 + " + " + x2 + " = ?";
let ansr1 = x1+x2;
let buttn = document.querySelector('bt1')
let mnu = document.querySelector('bt1');
buttn.onclick = function()
{
    let inpt = document.querySelector('input')
    console.log(inpt.value);
    console.log(ansr1)
    if(inpt.value == ansr1)
    {
        mnu.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu.textContent =  "Неверно!";
    }
   
}


x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
str1 = document.querySelector('p12');
str1.textContent = x1 + " + " + x2 + " = ?";
let ansr2 = x1+x2;
let buttn2 = document.querySelector('bt2')
let mnu2 = document.querySelector('bt2');
buttn2.onclick = function()
{
  console.log(ansr2)
    let inpt = document.getElementById("i2");
    console.log(inpt.value);
   
    if(inpt.value == ansr2)
    {
        mnu2.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu2.textContent =  "Неверно!";
    }
   
}

x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
str1 = document.querySelector('p13');
str1.textContent = x1 + " + " + x2 + " = ?";
let ansr3 = x1+x2;
let buttn3 = document.querySelector('bt3')
let mnu3 = document.querySelector('bt3');
buttn3.onclick = function()
{
  console.log(ansr3)
    let inpt = document.getElementById("i3");
    console.log(inpt.value);
   
    if(inpt.value == ansr3)
    {
        mnu3.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu3.textContent =  "Неверно!";
    }
   
}

x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
str1 = document.querySelector('p14');
str1.textContent = x1 + " + " + x2 + " = ?";
let ansr4 = x1+x2;
let buttn4= document.querySelector('bt4')
let mnu4= document.querySelector('bt4');
buttn4.onclick = function()
{
  console.log(ansr4)
    let inpt = document.getElementById("i4");
    console.log(inpt.value);
   
    if(inpt.value == ansr4)
    {
        mnu4.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu4.textContent =  "Неверно!";
    }
   
  }

x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
str1 = document.querySelector('p15');
str1.textContent = x1 + " + " + x2 + " = ?";
let ansr5 = x1+x2;
let buttn5 = document.querySelector('bt5')
let mnu5 = document.querySelector('bt5');
buttn5.onclick = function()
{
  console.log(ansr5)
    let inpt = document.getElementById("i5");
    console.log(inpt.value);
   
    if(inpt.value == ansr5)
    {
        mnu5.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu5.textContent =  "Неверно!";
    }
   
}


x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
if(x1 < x2)
{
  [x1, x2] = [x2, x1];
}
str1 = document.querySelector('p16');
str1.textContent = x1 + " - " + x2 + " = ?";
let ansr6 = x1-x2;
let buttn6 = document.querySelector('bt6')
let mnu6 = document.querySelector('bt6');
buttn6.onclick = function()
{
  console.log(ansr6)
    let inpt = document.getElementById("i6");
    console.log(inpt.value);
   
    if(inpt.value == ansr6)
    {
        mnu6.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu6.textContent =  "Неверно!";
    }
   
}


x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
if(x1 < x2)
{
  [x1, x2] = [x2, x1];
}
str1 = document.querySelector('p17');
str1.textContent = x1 + " - " + x2 + " = ?";
let ansr7 = x1-x2;
let buttn7 = document.querySelector('bt7')
let mnu7= document.querySelector('bt7');
buttn7.onclick = function()
{
  console.log(ansr7)
    let inpt = document.getElementById("i7");
    console.log(inpt.value);
   
    if(inpt.value == ansr7)
    {
        mnu7.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu7.textContent =  "Неверно!";
    }
   
}



x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
if(x1 < x2)
{
  [x1, x2] = [x2, x1];
}
str1 = document.querySelector('p18');
str1.textContent = x1 + " - " + x2 + " = ?";
let ansr8 = x1-x2;
let buttn8= document.querySelector('bt8')
let mnu8 = document.querySelector('bt8');
buttn8.onclick = function()
{
  console.log(ansr8)
    let inpt = document.getElementById("i8");
    console.log(inpt.value);
   
    if(inpt.value == ansr8)
    {
        mnu8.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu8.textContent =  "Неверно!";
    }
   
}



x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
if(x1 < x2)
{
  [x1, x2] = [x2, x1];
}
str1 = document.querySelector('p19');
str1.textContent = x1 + " - " + x2 + " = ?";
let ansr9 = x1-x2;
let buttn9 = document.querySelector('bt9')
let mnu9 = document.querySelector('bt9');
buttn9.onclick = function()
{
  console.log(ansr9)
    let inpt = document.getElementById("i9");
    console.log(inpt.value);
   
    if(inpt.value == ansr9)
    {
        mnu9.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu9.textContent =  "Неверно!";
    }
   
}


x1 = Math.round(rnd(1,1001));
x2 = Math.round(rnd(1,1001));
if(x1 < x2)
{
  [x1, x2] = [x2, x1];
}
str1 = document.querySelector('p20');
str1.textContent = x1 + " - " + x2 + " = ?";
let ansr10 = x1-x2;
let buttn10 = document.querySelector('bt10')
let mnu10 = document.querySelector('bt10');
buttn10.onclick = function()
{
  console.log(ansr10)
    let inpt = document.getElementById("i10");
    console.log(inpt.value);
   
    if(inpt.value == ansr10)
    {
        mnu10.textContent =  "Верно!";
        count++;
    }
    else
    {
        mnu10.textContent =  "Неверно!";
    }
   
}
let e1 = document.getElementById("end1");
e1.onclick = function()
{
  e1.textContent = "Ваш результат " + count;
}

