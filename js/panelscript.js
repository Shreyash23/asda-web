$(function(){
var o=$('.overlayp'),r=$('.revealp'),p=$('.pushp'),ob=$('.open-overlay-button'),rb=$('.reveal'),pb=$('.push'),m=$('.main'),panel=$('.panel');
  panel.css('min-height',m.outerHeight());
  
ob.click(function(){
  o.toggleClass('active');
});
rb.click(function(){
  m.toggleClass('ractive');
});
  pb.click(function(){
  m.toggleClass('pactive');
  p.toggleClass('active');
});
  $('.close-overlay-button').click(function(){
    o.removeClass('active');
    p.removeClass('active'); m.removeClass('pactive').removeClass('ractive');
  });
});
