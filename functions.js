window.onload = (event) => {
  
};

let imageBox1 = document.getElementById("imageBox");

function galleryFunction(smallImg) {
  imageBox1.src = smallImg.src;
}

// Get the modal image tag
var modal = document.getElementById("imgModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalImage = document.getElementById("modal-image");

// When the user clicks the big picture, set the image and open the modal
imageBox1.onclick = function (e) {
  var src = e.srcElement.src;
  modal.style.display = "block";
  modalImage.src = src;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == document.getElementsByClassName("modal-content")[0]) {
    modal.style.display = "none";
  }
};