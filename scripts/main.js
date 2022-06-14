// ------------Image switcher code------------

let myImage = document.querySelector('img');
myImage.onclick = function() {
   let mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/header1.jpg') {
    myImage.setAttribute('src','images/header2.jpg');
   } else {
    myImage.setAttribute('src','images/header1.jpg');
   }

}

// ------------Wellcome message code------------
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
// функция для установки персонализированного приветствия 
  function setUserName() {
    let myName = prompt('Пожалуйста, введите свое имя.');
    localStorage.setItem('имя', myName);
    myHeading.textContent = 'Спаситель Этого Мира, ' + myName;
  }
// кодом инициализации, поскольку он структурирует приложение при его первой загрузке  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Спаситель Этого Мира, ' + storedName;
}
// установка обработчика события onclick на кнопку
myButton.onclick = function() {
    setUserName();
}