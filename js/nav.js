'use strict';

(function () {
  /* ********  CONSTS   ******** */

  /* ******** VARIABLES ******** */
  // HTMLElements
  var burger = document.querySelector('.nav__burger');
  var nav = document.querySelector('.nav');
  var linkTemplate = document.querySelector('#link__item').content.querySelector('.nav__projects-item');
  var list = document.querySelector('.nav__projects-list');

  // Other variables

  /* ********  EXPORT   ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions
  var createListItem = function (data) {
    var clone = linkTemplate.cloneNode(true);

    clone.querySelector('.nav__projects-link').href = 'pages/' + data.location + '/';
    clone.querySelector('.nav__projects-link').textContent = data.name;

    return clone;
  };

  /* ********   CODE   ******** */

  burger.addEventListener('click', function (e) {
    e.preventDefault();
    nav.style.backgroundColor = '#141414';
    burger.classList.toggle('nav__burger--active');

    if (!burger.classList.contains('nav__burger--active')) { // if menu close

      nav.style.height = '100px';

      setTimeout(() => {
        document.querySelector('.nav__list').style.opacity = '0';
      }, 100);

      setTimeout(() => {
        nav.style.width = '100px';
        document.querySelector('.nav__list').style.display = 'none';
      }, 1400);

      setTimeout(() => {
        nav.style.backgroundColor = 'transparent';
      }, 2000);

    } else { // if menu open

      nav.style.width = '100%';
      document.querySelector('.nav__list').style.display = 'block';

      setTimeout(() => {
        nav.style.height = '100vh';
      }, 600);

      setTimeout(() => {
        document.querySelector('.nav__list').style.opacity = '1';
      }, 1000);

    }

  });

  var listFragment = document.createDocumentFragment();
  window.PROJECTS.forEach(element => {
    var link = createListItem(element);
    listFragment.appendChild(link);
  });

  list.appendChild(listFragment);
})();