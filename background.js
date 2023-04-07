chrome.webRequest.onHeadersReceived.addListener(

  function (details) {
    for (var j = 0; j < details.responseHeaders.length; ++j) {
      if (details.responseHeaders[j].name.toLowerCase() == 'x-frame-options') {
        details.responseHeaders.splice(j, 1);
		
        return {
          responseHeaders: details.responseHeaders 
        };
      }
    }
  }, {
    urls: ["<all_urls>"]
  }, ["blocking", "responseHeaders"]);

  // background.js
chrome.runtime.onConnect.addListener(function(port) {
  if (port.name === "popup") {
      port.onDisconnect.addListener(function() {
        var currentUrl = document.getElementById("iframe_id").contentWindow.location.href
        localStorage.setItem("url",currentUrl);
      });
  }
});
