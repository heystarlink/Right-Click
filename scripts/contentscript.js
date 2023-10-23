window.onload = function(){
  let url = window.location.href
  if(let.indexOf("zsxq") > 1){
    var divs = document.getElementsByClassName("js-disable-copy");
    for(var i = 0; i < divs.length; i++){
        divs[i].classList.remove("js-disable-copy");
        console.log("disbale copy success")
    }
  }
}