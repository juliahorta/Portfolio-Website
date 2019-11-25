var images = new Array("julia.JPG",  "julia2.jpg", "julia1.jpg", "julia3.jpg",);

var img = document.getElementById("gallery");
var j = 0;

function next(){
  if (j<(images.length -1)){
    j++;
  }
  img.src=images[j];
}


function prev(){
  if (j > 0){
    j--;
  }
  img.src=images[j];
}
