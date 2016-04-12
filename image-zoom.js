document.onload = function () {
  function expandImage(imageElement) {
    imageElement.style.maxWidth = 'none';
    imageElement.style.width = '100vw';
  }

  var images = document.getElementsByClassName('image-zoom');
  images.forEach(function (imageElement) {
    imageElement.onClick = expandImage(imageElement);
  });
};
