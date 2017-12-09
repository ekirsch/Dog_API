var url= "https://dog.ceo/api/"
function callDogAPI(url, callback, ele){
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.response)
            callback(this.responseText, ele); 
        }
    };
    xhttp.open("GET", url, true)
    xhttp.send();
}
function createDropDown (rsp, ele){
    var doglist = JSON.parse(rsp)
    var dogdropdown = document.getElementById(ele).parentNode.querySelector(".dropdown-menu");
    
    for (var i = doglist.message.length-1; i >= 0; i--){
        console.log(doglist.message[i])
        var itemAnchor = document.createElement("a")
        itemAnchor.className = "dropdown-item";
        itemAnchor.href = "#"
        itemAnchor.innerText = doglist.message[i]
        itemAnchor.addEventListener("click", clickbreed)
        dogdropdown.appendChild(itemAnchor)
        
    }
}
function clickbreed(e){
    console.log(e)
    document.getElementById("dogImage").innerHTML = "";
    callDogAPI(url + "breed/" + e.target.innerHTML + "/images", createImage, "dogImage");
}

function createImage(rsp, img){
    console.log(rsp);
    var dogImages = JSON.parse(rsp);
    var dogImagecont = document.getElementById(img);
    for (var i = dogImages.message. length - 1; i >= 0; i--) {
        var dogImage = document.createElement("img");
        dogImage.src = dogImages.message[i];
        dogImagecont.appendChild(dogImage);
    }
}


callDogAPI(url + "breeds/list", createDropDown, "dogbreed");

