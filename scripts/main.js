let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/SF.jpeg') {
        myImage.setAttribute('src','images/NYC.jpeg');
    } else {
        myImage.setAttribute('src','images/SF.jpeg')
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Hi " + myName + "! " + "Welcome to my website. Take a look below to find out more about me!"
    }
    
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Hi " + storedName + "! " + "Welcome to my website. Take a look below to find out more about me!"
}

myButton.onclick = function() {
    setUserName();
}