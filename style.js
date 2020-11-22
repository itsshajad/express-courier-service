/* ========== TOGGLE ============*/
/* ========== BANNER SLIDES ============*/
var num = 0;
function slide(){
var my_banner = document.getElementsByClassName('banner');
for (var i = 0; i < my_banner.length; i++) {
	my_banner[i].style.opacity=0;
}
my_banner[num].style.opacity = 0;
if (num < my_banner.length-1) {
	num++;
}
else{
	num = 0;
}
	my_banner[num].style.opacity=1;
}
setInterval("slide()",4000)

/* ========== SOCIAL ICONS ============*/
		function icontime(){
			var myIcon = document.getElementById('icons');
			myIcon.style.left="0px"
			myIcon.style.transition="all 2s linear"			
		}setTimeout(icontime,3000)

/* ========== COLORPLATE ============*/
function toggle(){
	var nav = document.getElementById('nav-right');
	var myToggle = document.getElementById('line-1');
	var myToggle2 = document.getElementById('line-2');
	var myToggle3 = document.getElementById('line-3');
	if (unSld == true) {
	nav.style.right="0"
	nav.style.transition="all 1s"
	unSld = false;
	myToggle.style.top="0"
	myToggle3.style.top="0"
	myToggle.style.transform="Rotate(45deg)"
	myToggle3.style.transform="Rotate(135deg)"
	myToggle2.style.backgroundColor="rgba(203,25,30,0)"


}
else{
nav.style.right="101%"
unSld = true;
myToggle.style.transform="Rotate(0)"
	myToggle3.style.transform="Rotate(0)"
	myToggle2.style.backgroundColor="rgba(203,25,30,1)"
	myToggle.style.top="-9px"
	myToggle3.style.top="9px"
}
}
/* ========== COLORPLATE ============*/

		var unSld = true
	function clrslide(){
		 slide = document.getElementById('clrlist');

		if (unSld == true) {
			slide.style.right="0"
			unSld = false;
		}
		else{
			slide.style.right="-345px"
			unSld = true;
		}
	}
	function chng(clrid){
		var cloring = document.getElementsByClassName('js');
		for(var i=0; i<cloring.length; i++){
			cloring[i].style.color=clrid
		}
	}


/* ========== CONTACT VALIDATION =========== */
function validation(){
	var msg = ""
	var first_name = document.getElementById('first')
	var last_name = document.getElementById('last')
	var my_Phone = document.getElementById('phone')
	var my_Email = document.getElementById('email')

var email_patt =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var phone_patt = /^[0-9]{10,10}$/	
var name_patt = /^[a-zA-Z]+$/
var name_patt2 = /[0-9]/

if (!name_patt.test(first_name.value)) {
	msg +="Enter First Name\n"
}
if (name_patt2.test(first_name.value) || name_patt2.test(last_name.value)) {
	msg+="Number Is Not Allowed In First or Last Name \n"
}
if (!name_patt.test(last_name.value)) {
	msg +="Enter Last Name \n"
}
if (!phone_patt.test(my_Phone.value)) {
	msg +="Enter Ten Digit Phone No. \n"
}
if (!email_patt.test(my_Email.value)) {
	msg +="Enter Valid Email Id. \n"
}

if (msg) {
	alert(msg);
	return false;
}
else{
	return true;
}
}