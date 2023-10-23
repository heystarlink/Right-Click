window.onload = function(){
  var url = window.location.href
  if(url.indexOf("zsxq") > 1){
    var divs = document.getElementsByClassName("js-disable-copy");
    for(var i = 0; i < divs.length; i++){
        divs[i].classList.remove("js-disable-copy");
        console.log("disbale copy success")
    }
  }
}
