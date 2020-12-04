function removeHash () {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
    history.pushState("", document.title, window.location.pathname + window.location.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

function loadContent(){
  var i, hashContent;
  hashContent = document.getElementsByClassName("hash-content");
  for (i = 0; i < hashContent.length; i++) {
    hashContent[i].style.display = "none";
  }
  document.getElementById(location.hash).style.display = "inline";
}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
window.addEventListener("hashchange", removeHash);
