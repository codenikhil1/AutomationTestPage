$('#newWindow').click(function () {
  window.open('https://www.google.com', 'blank')
})
var temp = 1

var val = ['','test','qaulitia','zensoft','','','automation','nikhil'];

//change attribute value over time
setInterval(myTimer, 1000)
function myTimer() {
  var str = 'test' + temp
  var enableOrDisable = $('#EnableDisable').attr('name');
  if(enableOrDisable === 'disable'){
	  $('#EnableDisable').removeAttr('disabled');
	  
	  $('#EnableDisable').attr('name','enable')
  }else{
	$('#EnableDisable').attr('disabled','')
	$('#EnableDisable').attr('name','disable')
  }
  if(temp === 7) {
	$('#EnableDisable').detach();
	$('#changeAttr').attr('attr', val[temp]);
	$('#changeAttr').attr('value',val[temp]);
	temp = 0;
  }
  else {
	$('#changeAttr').attr('value',val[temp]);
	$('#changeAttr').attr('attr', val[temp])  
  }
  	
  temp++
}
