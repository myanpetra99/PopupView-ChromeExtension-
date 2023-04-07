document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("url") != null) {
    document.getElementById("webpage").src = localStorage.getItem("url");
	document.getElementById("url").value = localStorage.getItem("url").replace("https://","");
  }
});

document.getElementById("go").addEventListener('click',function(){
	var currentUrl = "https://"
	var currentUrl = currentUrl+document.getElementById("url").value
    // Display the URL in the popup
    var webpageIframe = document.getElementById("webpage");
	webpageIframe.src = currentUrl;
	localStorage.setItem("url", currentUrl);
});


document.getElementById("url").addEventListener('keypress',function(e){
  if (e.key === 'Enter') {
    document.getElementById("go").click();
  }
});

document.getElementById('webpage').onload = function() {
   // Get the iframe element
   var iframe = document.getElementById('myIframe');

   // Access the content of the iframe
   var iframeContent = iframe.contentWindow || iframe.contentDocument;
 
   // Access the location object of the iframe's content document
   var iframeLocation = iframeContent.location;
 
   // Get the updated/actual URL from the iframe
   var actualURL = iframeLocation.href;
 
   localStorage.setItem("url",actualURL);
}

chrome.extension.getBackgroundPage();