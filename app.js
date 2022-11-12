var i = 0; //Start point
var images = [];
var time = 5000;

//Images List
images [0] = 'fnew1.jpg';
images [1] = 'fnew2.jpg';
images [2] = 'fnew3.jpg';

//Change Image
function changeImg(){
document.slide.src=images [i];

if (i < images.length-1){
i++;
}
else{
i=0;
}
setTimeout ("changeImg ()", time);
}

window.onload = changeImg;