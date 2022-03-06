const iconLinks = document.querySelectorAll('.icon__link');

iconLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    let iconItalic = link.querySelector('.icon__italic');
    iconItalic.classList.add('mouse-over-color');
  });

  link.addEventListener('mouseleave', () => {
    let iconItalic = link.querySelector('.icon__italic');
    iconItalic.classList.remove('mouse-over-color');
  });
});

/* CHANGE you can take off the comments but in css file I put  the next things

  .icon__link:hover .icon__italic {
    color: #e882e8;
    border-color: #e882e8;
  }

  And that have the same effect that you want , without javascript
*/



/* 
CHANGE : this in on a css file, no here watch the 5 last line of code in style.css
DON'T  take off this comment , this is not javascript
css-file.mouse-over-color {
    color = '#E882E8';
} */
