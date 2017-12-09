var url= "https://dog.ceo/api/"
function callDogAPI(url, callback){
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.response)
            callback(this.responseText); 
        }
    };
    xhttp.open("GET", url, true)
    xhttp.send();
}
function createDropDown (rsp){
    var doglist = JSON.parse(rsp)
    var dogdropdown = document.getElementById("dogbreed").parentNode.querySelector(".dropdown-menu");
    
    for (var i = doglist.message.length-1; i >= 0; i--){
        console.log(doglist.message[i])
        var itemAnchor = document.createElement("a")
        itemAnchor.className = "dropdown-item";
        itemAnchor.href = "#"
        itemAnchor.innerText = doglist.message[i]
        dogdropdown.appendChild(itemAnchor)
    }
}


function createImage(rsp){
    console.log(rsp);
    var dogImages = JSON.parse(rsp)
    var dogImagecont = document.getElementById("dogImage");
    for (var i = dogImages.message. length - 1; i >= 0; i--) {
        var dogImage = document.createElement("img")
        dogImage.src = dogImages.message[i]
        dogImagecont.appendChild(dogImage)
    }
}


callDogAPI(url + "breed/list", createDropDown);
callDogAPI(url + "breed/hound/images", createImage);
