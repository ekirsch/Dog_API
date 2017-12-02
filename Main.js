var xhttp = new XMLHttpRequest();
var url= "https://dog.ceo/api/breeds/list"
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.response)
    }
};
xhttp.open("GET", url, true);
xhttp.send();

