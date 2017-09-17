
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('请输入你的名字.');
    localStorage.setItem('名字', myName);
    if(!localStorage.getItem('名字')) {
        myHeading.innerHTML = 'Hallo World';
      } else {
        var storedName = localStorage.getItem('名字');
        myHeading.innerHTML = 'welcom , ' + myName;
      }
  }


var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/timg1.jpg') {
      myImage.setAttribute ('src','images/timg2.jpg');
    } else {
      myImage.setAttribute ('src','images/timg1.jpg');
    }
}

document.querySelector('button').onclick = function() {
    setUserName()
}