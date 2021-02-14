const Previous = document.getElementById('previous');
const Next = document.getElementById('next');
const Picture = document.getElementById('picture');
var Page = 0;
const Pictures = new Array("pg1.jpg", "pg2.jpg", "pg3.jpg");
const Pagenumber = document.getElementById('pagenr');
const Sizebutton = document.getElementById('size');


Previous.addEventListener('click',() => {
Page = Page - 1;
Picture.src=String(Pictures[Page]);
Pagenumber.innerHTML = "PageNr:" + String(Page + 1);
});
Next.addEventListener('click',() => {
Page = Page + 1;
Picture.src = String(Pictures[Page]);
Pagenumber.innerHTML = "PageNr:" + String(Page + 1);
});
Sizebutton.addEventListener('click',() => {
if(Sizebutton.textContent === '+') {
	document.getElementById('picture').width = "754";
	Picture.height = "982";
	Sizebutton.textContent = '-'; }
        else {
	Picture.width = "554";
	Picture.height = "742";
	Sizebutton.textContent = '+'; }
});