(function(){var d=document,h=d.documentElement,m=d.querySelector('.menu'),n=d.getElementById('nav');
if(m&&n){m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');m.setAttribute('aria-expanded','false')}});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');m.setAttribute('aria-expanded','false')}})}
var p=d.querySelector('.pause');if(p){p.addEventListener('click',function(){var on=h.classList.toggle('paused');p.setAttribute('aria-pressed',on);p.textContent=on?'Play motion':'Pause motion'})}
var s=d.querySelector('.sticky'),hero=d.querySelector('.hero'),gone=false;try{gone=sessionStorage.getItem('offerClosed')==='1'}catch(e){}
if(s&&hero&&!gone&&'IntersectionObserver' in window){new IntersectionObserver(function(en){s.classList.toggle('show',!en[0].isIntersecting&&!gone)}).observe(hero);
s.querySelector('.x').addEventListener('click',function(){gone=true;s.classList.remove('show');try{sessionStorage.setItem('offerClosed','1')}catch(e){}})}
var y=d.querySelector('[data-year]');if(y){y.textContent=new Date().getFullYear()}})();
if(!location.hash){try{history.scrollRestoration='manual'}catch(e){}window.scrollTo(0,0);window.addEventListener('pageshow',function(){window.scrollTo(0,0)})}
document.addEventListener('submit',function(e){e.preventDefault()});
