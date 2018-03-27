var myIndex=0;
function slide(){
      var i;
	  var x= document.getElementsByClassName("myslides");
	  for(i=0;i<x.length;i++){
		  x[i].style.display="none";
	  }
	  
	  myIndex++;
	  if(myIndex > x.length){
		  myIndex++;
	  }
	  x[myIndex-1].style.display="block";
	  setTimeout("slide()",9000);
	  
}