// Your code goes here

//MOUSE OVER 

// let introImg = document.querySelectorAll(".nav .nav-link");

let introImg = document.querySelector("nav");

introImg.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.fontSize = "1.8rem";
  });

  //font size change with hover
  
  
//WITH MOUSEOUT 

  introImg.addEventListener("mouseout", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "black";
    event.target.style.fontSize = "1.6rem";
  });

 



  //WHEEL

  window.addEventListener("wheel", function( event ){
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

    
  });

  //BDLCLICK

  let grumpy = document.querySelector("img");
//console.log(grumpy)
  //console.log(grumpy);
 
  grumpy.addEventListener("dblclick", function( event){
    grumpy.style.display = "none";
    Image.textContent = "WHAT HAVE YOU DONE"

  });


  //propagation 

  let containerprop = document.querySelector(".home");
  //console.log(containerprop);
  containerprop.addEventListener("click", function(event){
      containerprop.style.background = "yellow";
  })

  let buttonLow = document.querySelector(".btn");
 //console.log(buttonLow);

  buttonLow.addEventListener("click", function(event){
      event.stopPropagation();
      buttonLow.style.background = "salmon";
  })
   