window.onload = initLinks;

 var myPix = new
 Array("s.png","r.png","t.png");
 var thisPic = 0;

 function initLinks(){
 document.getElementById("prevLink").onclick=processPrevious;
 document.getElementById("nextLink").onclick=processNext;
 }
 function processPrevious(){
   if(thisPic == 0) {
   thisPic = myPix.length;
   }
   thisPic--;
   document.getElementById("myPicture").src=myPix[thisPic];
return false;
   }

   function processNext(){
  thisPic++;
  if(thisPic == myPix.length){
    thisPic = 0;
	}
	document.getElementById("myPicture").src =myPix[thisPic];
return false;
	}