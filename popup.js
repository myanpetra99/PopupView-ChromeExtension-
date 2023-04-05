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


chrome.extension.getBackgroundPage();