var imageFile=document.getElementById("imgFile");
var canvas=document.getElementById("canvas");
var button=document.getElementById("btn");


     // PDF DOWNLOAD SECTION or CODE

button.onclick=imageToPDF;
function imageToPDF(){
  html2canvas(canvas,{
    onrendered: function(canvas){
      var imgData=canvas.toDataURL('image/svg');

      var pdfdocument =new jsPDF('p','mm');
      pdfdocument.addImage(imgData,'SVG',10,10);
      pdfdocument.save("image.pdf");
    }
  })
}

     //Canvas image drawing section or code

var context=canvas.getContext('2d');

imageFile.addEventListener("change",function handleImage(e){

   var read=new FileReader();

  read.onload=  function(event){
    //creating image object using image constructor
    var image = new Image();

       //drawing loaded image on Canvas
    image.onload=function(){
      canvas.width=image.width;
      canvas.height=image.height;
      context.drawImage(image,0,0);
    }

    //source of image to be loaded
    image.src= event.target.result;

  }

  read.readAsDataURL(e.target.files[0]);

},false);
