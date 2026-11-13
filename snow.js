/* Jis line pe data-snow="0.1 se 1" likha ho, wo screen ke beech mein aate hi baraf girti hai. */
(function(){
  var els=[].slice.call(document.querySelectorAll('[data-snow]'));
  if(!els.length)return;
  var root=document.documentElement,busy=false;
  function update(){
    busy=false;
    var h=innerHeight,lo=h*.2,hi=h*.8,v=0;
    els.forEach(function(e){
      var r=e.getBoundingClientRect();
      if(r.bottom>lo&&r.top<hi)v=Math.max(v,parseFloat(e.getAttribute('data-snow'))||0);
    });
    root.style.setProperty('--snow',v);
  }
  function onScroll(){if(!busy){busy=true;requestAnimationFrame(update);}}
  addEventListener('scroll',onScroll,{passive:true});
  addEventListener('resize',onScroll);
  update();
})();
