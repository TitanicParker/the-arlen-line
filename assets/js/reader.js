(function(){
  var lastKey='arlen:lastChapter';
  var bar=document.querySelector('.progress');
  function progress(){
    if(!bar)return;
    var max=document.documentElement.scrollHeight-window.innerHeight;
    var pct=max>0?(window.scrollY/max)*100:0;
    bar.style.width=Math.max(0,Math.min(100,pct))+'%';
  }
  function chapterNumber(){
    var value=document.body.getAttribute('data-chapter');
    return value===null?null:value;
  }
  function save(){
    var n=chapterNumber();
    if(n!==null)localStorage.setItem(lastKey,n);
  }
  function resume(){
    var link=document.querySelector('[data-resume]');
    var n=localStorage.getItem(lastKey);
    if(link&&n!==null){link.href='chapters/'+String(n).padStart(2,'0')+'.html';link.style.display='inline-block';}
  }
  window.addEventListener('scroll',function(){progress();save();},{passive:true});
  document.addEventListener('DOMContentLoaded',function(){resume();progress();save();});
})();
