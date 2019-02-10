var inp1 = document.querySelectorAll("input");
console.log(inp1);
var body = document.getElementById("grad1");

function input1(){
		//mainContent.style.background = "linear-gradient(to right, inp1[0].value , inp1[1].value)";
		body.style.background = 
	"linear-gradient(to right, " 
	+ inp1[0].value 
	+ ", " 
	+ inp1[1].value 
	+ ")";

	document.getElementById("LR").innerHTML = "Red value is : "+inp1[0].value[1]+inp1[0].value[2];
	document.getElementById("LG").innerHTML = "Green value is : "+inp1[0].value[2]+inp1[0].value[3];
	document.getElementById("LB").innerHTML = "Blue value is : "+inp1[0].value[4]+inp1[0].value[5];

}


function input2(){
		//mainContent.style.background = "linear-gradient(to right, inp1[0].value , inp1[1].value)";
		body.style.background = 
	"linear-gradient(to right, " 
	+ inp1[0].value 
	+ ", " 
	+ inp1[1].value 
	+ ")";
	document.getElementById("RR").innerHTML = "Red value is : "+inp1[1].value[1]+inp1[1].value[1];
	document.getElementById("RG").innerHTML = "Green value is : "+inp1[1].value[2]+inp1[1].value[2];
	document.getElementById("RB").innerHTML = "Blue value is : "+inp1[1].value[4]+inp1[1].value[5];
}


inp1[0].addEventListener("input",input1);


inp1[1].addEventListener("input",input2);

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
	var r1 =  rgbToHex(Math.floor(Math.random() * 256));
	var g1 =  rgbToHex(Math.floor(Math.random() * 256));
	var b1 =  rgbToHex(Math.floor(Math.random() * 256));
	var r2 =  rgbToHex(Math.floor(Math.random() * 256));
	var g2 =  rgbToHex(Math.floor(Math.random() * 256));
	var b2 =  rgbToHex(Math.floor(Math.random() * 256));
	var s1 = "#"+r1+g1+b1;
	var s2 = "#"+r2+g2+b2;
	inp1[0].value = s1;
	inp1[1].value =  s2;
	input1();
	input2();
	//console.log(s1+" "+s2);
})