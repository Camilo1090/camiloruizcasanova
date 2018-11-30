document.addEventListener("readystatechange", () => {
  if (document.readyState == "complete"){
    document.querySelectorAll('video').forEach(elem => {
      let sibling = elem.nextSibling;
      elem.addEventListener('mouseover', function() {
        sibling.style.display = "none";
      });
      elem.addEventListener('mouseout', function() {
        sibling.style.display = "block";
      });
    });
  }
});
