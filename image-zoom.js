document.onload = function () {
  function expandImage(imageElement) {
    imageElement.style.maxWidth = 'none';
    imageElement.style.width = '100vw';
  }

  var images = document.getElementsByClassName('image-zoom');
  for (var i = 0; i < images.length; images++) {
      images[i].onclick = expandImage(images[i]);
  }
};
