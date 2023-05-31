currentIndex=0
images=["first.jpg","second.jpg","third.jpg","fourth.jpg",
"fifth.jpg",
"sixth.jpg"]

setInterval(
    function() {
     currentIndex=Math.round(Math.random()*5)
     document.getElementById("img1").src = 
     images[ currentIndex ]
    },10000
)

function changeImage(arrowtype){
    if(arrowtype=="right"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="left"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}

function arrow(arrow){
   // alert(arrow);
   if(arrow=="up" || arrow=="down"){
    upicon.style.display = 'block';
    downicon.style.display = 'none';
    if(arrow=="up"){
        slideshow.style.display = 'none';
        upicon.style.display = 'none';
        downicon.style.display = 'block';
        }
    if(arrow=="down"){
            slideshow.style.display = 'block';
            downicon.style.display = 'none';
            upicon.style.display = 'block';
        }
   }
}
  
