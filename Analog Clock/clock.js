
// i tried to use getElementByClassName, but it wasnt working, it kept conflicting with the style.transform buttton. i have no idea why, but query selector did the Trick.
//const hour = document.getElementsByClassName('.hour')
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minute')
const seconds = document.querySelector('.seconds')

function setDate() {
  
  const time = new Date();
  
hr = time.getHours();
min = time.getMinutes();
sec = time.getSeconds();

//Rotation Code
const hr_rotation = ((hr / 12) * 360) +((min/60) * 30) + 90;
const min_rotation = ((min/60) * 360) + ((sec / 60) *6) + 90;
const sec_rotation = ((sec /60) * 360) + 90;

// in front of the Rotation, i used backtick ``, that is the only
// way i could have added the variables in the style.transform
hour.style.transform = `rotate(${hr_rotation}deg)`
minutes.style.transform = `rotate(${min_rotation}deg)`
seconds.style.transform = `rotate(${sec_rotation}deg)`
};
setInterval(setDate, 1000);

setDate();


/*
setInterval (() => {

  d = new Date();
hr = d.getHours();
min = d.getMinutes();
sec = d.getSeconds();
hr_rotation = 30 * hr + min / 2;
min_rotation = 6 * min;
sec_rotation = 6 * sec;



hour.style.transform = `rotate(${hr_rotation}deg)`;
minute.style.transform = `rotate(${min_rotation}deg)`;
seconds.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
*/
