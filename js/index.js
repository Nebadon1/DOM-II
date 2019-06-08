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
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 7000);

    
  });