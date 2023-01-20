var menu = document.getElementById("mm");
var ul = document.getElementById("nn");
var ul2=document.getElementById("mn");
var counter = 0;

if(screen.width<=768){
    menu.style= "display:block;";
    ul.style="display:none";
    console.log(screen.width);  
}


menu.addEventListener("click",function(){ 
    
    counter=counter+1;
    if(counter%2==0){
       
        ul2.style="display:none";
    }
    else{
        ul2.style="display:block";
    }

})

