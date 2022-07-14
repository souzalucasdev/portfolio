document.onkeydown = detectKey;

function detectKey(e) {


  e = e || window.event;

  if (e.keyCode == "37") {
    // left arrow
    if (document.getElementById("fifth-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "flex";
      document.getElementById("fifth-date").style.display = "none";

      //display content
      document.getElementById("fourth-content").style.display= "flex";
      document.getElementById("fifth-content").style.display = "none";


    }
    else if (document.getElementById("fourth-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "flex";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "none";

      //display content
      document.getElementById("third-content").style.display= "flex";
      document.getElementById("fourth-content").style.display = "none";      
    }
    else if (document.getElementById("third-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "flex";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "none";

      //display content
      document.getElementById("second-content").style.display= "flex";
      document.getElementById("third-content").style.display = "none";        
    }
    else if (document.getElementById("second-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "flex";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "none";

      //display content
      document.getElementById("first-content").style.display= "flex";
      document.getElementById("second-content").style.display = "none";
    }

  }
  if (e.keyCode == "39") {
    // right arrow
    if (document.getElementById("first-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "flex";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "none";


      //display content
      document.getElementById("second-content").style.display = "flex";
      document.getElementById("first-content").style.display = "none";



    }
    else if (document.getElementById("second-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "flex";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "none";

      //display content
      document.getElementById("third-content").style.display = "flex";
      document.getElementById("second-content").style.display = "none";

    }
    else if (document.getElementById("third-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "flex";
      document.getElementById("fifth-date").style.display = "none";

      //display content
      document.getElementById("fourth-content").style.display = "flex";
      document.getElementById("third-content").style.display = "none";
      

    }
    else if (document.getElementById("fourth-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "flex";

      //display content
      document.getElementById("fifth-content").style.display = "flex";
      document.getElementById("fourth-content").style.display = "none";


    }
    else if (document.getElementById("fifth-date").style.display === "flex") {
      document.getElementById("first-date").style.display = "none";
      document.getElementById("second-date").style.display = "none";
      document.getElementById("third-date").style.display = "none";
      document.getElementById("fourth-date").style.display = "none";
      document.getElementById("fifth-date").style.display = "flex";

    }
  }



  // if (document.getElementById("myId").style.marginLeft === "0px") {
  //   document.getElementById("first-content").style.display = "flex";
  //   document.getElementById("second-content").style.display = "none";
  //   document.getElementById("third-content").style.display = "none";
  //   document.getElementById("fourth-content").style.display = "none";
  //   document.getElementById("fifth-content").style.display = "none";

  // } else if (document.getElementById("myId").style.marginLeft === "175px") {
  //   document.getElementById("first-content").style.display = "none";
  //   document.getElementById("second-content").style.display = "flex";
  //   document.getElementById("third-content").style.display = "none";
  //   document.getElementById("fourth-content").style.display = "none";
  //   document.getElementById("fifth-content").style.display = "none";

  // } else if (document.getElementById("myId").style.marginLeft === "350px") {
  //   document.getElementById("first-content").style.display = "none";
  //   document.getElementById("second-content").style.display = "none";
  //   document.getElementById("third-content").style.display = "flex";
  //   document.getElementById("fourth-content").style.display = "none";
  //   document.getElementById("fifth-content").style.display = "none";

  // } else if (document.getElementById("myId").style.marginLeft === "525px") {
  //   document.getElementById("first-content").style.display = "none";
  //   document.getElementById("second-content").style.display = "none";
  //   document.getElementById("third-content").style.display = "none";
  //   document.getElementById("fourth-content").style.display = "flex";
  //   document.getElementById("fifth-content").style.display = "none";

  // } else if (document.getElementById("myId").style.marginLeft === "700px") {
  //   document.getElementById("first-content").style.display = "none";
  //   document.getElementById("second-content").style.display = "none";
  //   document.getElementById("third-content").style.display = "none";
  //   document.getElementById("fourth-content").style.display = "none";
  //   document.getElementById("fifth-content").style.display = "flex";
  // }
}

function toggleLogos(){

  if(document.getElementById("frontend-logos").style.display === "flex"){
    document.getElementById("frontend-logos").style.display = "none";
    document.getElementById("beggining-btn").innerHTML = "Discover";
  }else {
    document.getElementById("frontend-logos").style.display ="flex";
    document.getElementById("beggining-btn").innerHTML = "Hide";
  }
}
function displayProjectInfo(){

  if(document.getElementById("match-home-details").style.display === "flex"){
    document.getElementById("match-home-details").style.display = "none";
    document.getElementById("see-more-btn").innerHTML = "See More";
    console.log('1');
  }else {
    document.getElementById("match-home-details").style.display = "flex";
    document.getElementById("see-more-btn").innerHTML = "Hide";
    console.log('1');
  }
}

function largeImageHome(){

  let imageClicked = document.getElementById("home-image");
  let link = imageClicked.getAttribute('src').split(".", 1);
  window.open('');

}








// const h1 = document.getElementById('hello');

// console.clear();
// function typingEffect(element,speed){
//   let text=element.getAttribute('data-text');
//   element.innerHTML="";
//   let i=0;
//   let timer=setInterval(function(){
//     if(i<text.length){
//       element.append(text.charAt(i))
//       i++;
//     }else{
//       clearInterval(timer);
//       setTimeout(function(){typingEffect(h1, 200)}, 2000)

//     }
//   },speed)
  
// }



// typingEffect(h1, 60);
