const motionkim = {};

motionkim.navScroll = function () {
  const ScrollChk = window.scrollY || document.documentElement.scrollTop;
  const setScroll = document.querySelector('body').classList;
  ScrollChk <= 0 ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');
};

let intervalScroll;
motionkim.scrollMove = function (tagName, gap) {
  if (document.querySelector(tagName) === null) {
    return false;
  }
  gap !== undefined ? gap : (gap = 25);
  let positionY =
    window.pageYOffset +
    document.querySelector(tagName).getBoundingClientRect().top -
    (document.querySelector('header') !== null
      ? document.querySelector('header').offsetHeight
      : 0);
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  let scrollMoving = scrollPosition;
  clearInterval(intervalScroll);

  intervalScroll = setInterval(function () {
    if (Math.floor(positionY / gap) === Math.floor(scrollMoving / gap)) {
      scrollMoving = positionY;
      window.scrollTo({ top: positionY });
      clearInterval(intervalScroll);
    } else if (positionY < scrollMoving) {
      window.scrollTo({ top: scrollMoving });
      scrollMoving -= gap;
    } else if (positionY > scrollMoving) {
      window.scrollTo({ top: scrollMoving });
      scrollMoving += gap;
    }
  }, 1);
};

motionkim.minHeightFull = function (tagName) {
  document.querySelector(tagName).style.minHeight = window.innerHeight + 'px';
};

motionkim.consoleTest = function (text) {
  console.log(text);
};

motionkim.scrollActive = function (tagName) {
  const tagItem = document.querySelectorAll(tagName);
  let itemBoxHeight = 0;

  for(let i = tagItem.length -1; 0 <= i; i--){
      itemBoxHeight = tagItem[i].offsetHeight;
      if(0 >= tagItem[i].getBoundingClientRect().top - window.innerHeight/2 && tagItem[i].getBoundingClientRect().top > - itemBoxHeight){  
          tagItem[i].classList.add('active');
      } else if(scrollSave < window.scrollY){
          tagItem[i].classList.remove('active');
      }
  }
  scrollSave = window.scrollY;
}

motionkim.skpNavScroll = function () {
  const scrollChk = window.scrollY || document.documentElement.scrollTop;
  const setScroll = document.querySelector('#root').classList;
	const headrNav = document.querySelector('header').querySelector('nav');
	const sectionBox = document.getElementById('root').querySelectorAll('section');
	
	(scrollChk <= document.querySelector('header').offsetHeight - headrNav.offsetHeight) ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');

	for(let i = sectionBox.length - 1; i >= 0; i--){
		if(sectionBox[i].getBoundingClientRect().top + sectionBox[i].offsetHeight - headrNav.querySelector('ul').offsetHeight > 0){
			for(let j = 0; j < headrNav.querySelectorAll('li').length; j++){
				headrNav.querySelectorAll('li')[j].classList.remove('active');
			}
			headrNav.querySelectorAll('li')[i].classList.add('active');
		}
	}
}

module.exports = motionkim;
