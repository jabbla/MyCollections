$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red',
  });
  $('input').on('ifChanged', function(event){
  	let Event = document.createEvent("MouseEvents");
  	Event.initMouseEvent('change');
  	event.target.dispatchEvent(Event);
  })
});