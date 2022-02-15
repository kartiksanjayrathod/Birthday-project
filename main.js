var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg" , function(Img){
block_Image_Object=Img
block_Image_Object.scaletowidth(700)
block_Image_Object.scaletoheight(510)
block_Image_Object.set({
top:0,left:0
})
})	
canvas.add(block_Image_Object)	
}

function playSound(){
x.play()
}
