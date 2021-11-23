/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/// JS File content

// 1 - Add List items to page header and link it to the content
// 2 - add scroll behavior smoothn to Style by JS
// 3 - Notice when the section in viewport and highlight it

/**
 * Define Global Variables
*/

// making array of sections so we can do our calculations on it
const allSections = Array.from(document.querySelectorAll('section'));
const headerContent = document.getElementById ('navbar__list');
// Off seen Dom tree to inhance performance - prevent reflow
var fragment = document.createDocumentFragment();

//making this const to add style to the page " scroll behaviour smooth"
const smoothy = document.querySelector('html')

/**
 * End Global Variables


 * Begin Main Functions
*/

/*
add list items of sections to the navagation bar + link it to the sections content
 and giving it name of the data nav.
*/

function pageHeader ()
{
   for (section of allSections)
{
  const listNew = document.createElement('li');
     let listName = section.getAttribute('data-nav');
         let menuLink = section.getAttribute ('id');
   listNew.innerHTML =`<a href='#${menuLink}' class ='menu__link' > ${listName}</a>`;
   fragment.appendChild(listNew);

}
headerContent.appendChild(fragment);
}

// build the nav

pageHeader ();

//Add style to the HTML
//smoothy.setAttribute('style', 'scroll-behavior: smooth;' )
//const scrll = document.querySelector('body')



// use getBoundingClientRect to know when section in view port

function onScreen(section)
{

  let rectangle = section.getBoundingClientRect();
        return (rectangle.top >= 0 );
}


// Add class 'active' to section when near top of viewport

function whereActiveClass()
{
  for (section of allSections){
      if (onScreen (section)){
        if ( ! section.classList.contains('your-active-class')  )
               {section.classList.add('your-active-class');}
      }
       else { section.classList.remove('your-active-class') ;}

                               }
}



// Set sections as active when scrolling to it

document.addEventListener('scroll', whereActiveClass );
