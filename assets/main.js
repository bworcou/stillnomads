$(document).ready(function() {
  // $("#archive").click(function() {
  //   $(".archivee").toggle();
  //   console.log("you clicked it")
  // });
  $('#archive').on('click', function() {
    $('.archivee').toggle();
  })
});

function myFunction2019() {
  var x = document.getElementById("year-a");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}

function myFunction2018() {
  var y = document.getElementById("year-b");
  if (y.style.display === "grid") {
    y.style.display = "none";
  } else {
    y.style.display = "grid";
  }
}

function myFunction2017() {
  var z = document.getElementById("year-c");
  if (z.style.display === "grid") {
    z.style.display = "none";
  } else {
    z.style.display = "grid";
  }
}

//   $(document).ready(function() {
//   // $(".nine").click(function() {
//   //   $("#year-a").toggle();
//   //   console.log("you clicked it")
//   // });
//   $('.eight').on('click', function() {
//     $('#year-b').toggle();
//   })
// });
//
// $(document).ready(function() {
//   // $(".nine").click(function() {
//   //   $("#year-a").toggle();
//   //   console.log("you clicked it")
//   // });
//   $('.seven').on('click', function() {
//     $('#year-c').toggle();
//   })
// });

// $(document).ready(function() {
//   // $(".nine").click(function() {
//   //   $("#year-a").toggle();
//   //   console.log("you clicked it")
//   // });
//   $('.nine').on('click', function() {
//     $('#year-a').toggle();
//   })


window.onload=function(){
    var container = document.querySelector("#container");
     var activeItem = null;

     var active = false;

     container.addEventListener("touchstart", dragStart, false);
     container.addEventListener("touchend", dragEnd, false);
     container.addEventListener("touchmove", drag, false);

     container.addEventListener("mousedown", dragStart, false);
     container.addEventListener("mouseup", dragEnd, false);
     container.addEventListener("mousemove", drag, false);

     function dragStart(e) {

       if (e.target !== e.currentTarget) {
         active = true;

         // this is the item we are interacting with
         activeItem = e.target;

         if (activeItem !== null) {
           if (!activeItem.xOffset) {
             activeItem.xOffset = 0;
           }

           if (!activeItem.yOffset) {
             activeItem.yOffset = 0;
           }

           if (e.type === "touchstart") {
             activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
             activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
           } else {
             console.log("doing something!");
             activeItem.initialX = e.clientX - activeItem.xOffset;
             activeItem.initialY = e.clientY - activeItem.yOffset;
           }
         }
       }
     }

     function dragEnd(e) {
       if (activeItem !== null) {
         activeItem.initialX = activeItem.currentX;
         activeItem.initialY = activeItem.currentY;
       }

       active = false;
       activeItem = null;
     }

     function drag(e) {
       if (active) {
         e.preventDefault();
         if (e.type === "touchmove") {


           activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
           activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
         } else {
           activeItem.currentX = e.clientX - activeItem.initialX;
           activeItem.currentY = e.clientY - activeItem.initialY;
         }

         activeItem.xOffset = activeItem.currentX;
         activeItem.yOffset = activeItem.currentY;

         setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
       }
     }

     function setTranslate(xPos, yPos, el) {
       el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
     }
   }
