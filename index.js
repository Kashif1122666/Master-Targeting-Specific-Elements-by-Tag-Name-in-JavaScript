// get all p Elements 
const paragraphs = document.getElementsByTagName('p');

// Highlight even paragraphs 
document.getElementById('highLightEven').onclick= function () {
  for (let i = 0; i < paragraphs.length; i++) {
     if( (i + 1) % 2 === 0) { // for Even
        paragraphs[i].classList.add('styled');
     }
  }
   
}
console.log(paragraphs);

// Highlight Odd pargraphs 
document.getElementById('highLightOdd').onclick= function () {
    for (let i = 0; i < paragraphs.length; i++) {
       if( (i + 1) % 2 !== 0) { // for Odd
          paragraphs[i].classList.add('styled');
       }
    }
  }

//   reset all 
document.getElementById('reset').onclick= function () {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.remove('styled');
     } 
}