(function(){
  const KEY='arlen:lastChapter';
  const POS='arlen:scroll:';
  const progress=document.querySelector('.progress');
  function currentChapter(){return document.body.dataset.chapter||null;}
  function updateProgress(){
    if(!progress)return;
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const pct=max>0?(window.scrollY/max)*100:0;
    progress.style.width=Math.min(100,Math.max(0,pct))+'%';
  }
  function save(){
    const ch=currentChapter();
    if(!ch)return;
    localStorage.setItem(KEY,ch);
    localStorage.setItem(POS+ch,String(window.scrollY));
  }
  function restore(){
    const ch=currentChapter();
    if(ch){
      const y=parseInt(localStorage.getItem(POS+ch)||'0',10);
      if(y>80)setTimeout(()=>window.scrollTo(0,y),80);
    }
    const resume=document.querySelector('[data-resume]');
    if(resume&&window.ARLEN_CHAPTERS){
      const last=localStorage.getItem(KEY);
      const item=window.ARLEN_CHAPTERS.find(c=>String(c.index)===String(last));
      if(item){resume.href='chapters/'+item.html_file;resume.textContent='Resume reading '+(item.index?('Chapter '+String(item.index).padStart(2,'0')):'Opening Note');resume.style.display='inline-block';}
    }
  }
  window.addEventListener('scroll',()=>{updateProgress();if(window.__arlenT)clearTimeout(window.__arlenT);window.__arlenT=setTimeout(save,120);},{passive:true});
  window.addEventListener('beforeunload',save);
  document.addEventListener('DOMContentLoaded',()=>{restore();updateProgress();});
})();
