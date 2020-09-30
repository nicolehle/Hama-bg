// Set up canvas
const imgDiv = document.getElementById("imgDiv");
function setUpCanvas() {
  ctx = imgDiv.getContext('2d');

  // Set display size (vw/vh).
  var sizeWidth = 1028,
  sizeHeight = 2031;

  //Setting the canvas site and width to be responsive
  imgDiv.width = sizeWidth;
  imgDiv.height = sizeHeight;
  imgDiv.style.width = sizeWidth;
  imgDiv.style.height = sizeHeight;
}

window.onload = setUpCanvas();



// Change Base Color

const background = document.querySelector('#base');

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
};

background.addEventListener('change', handleUpdate);




// Display Selected file on the screen

const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    img = document.createElement("img");

  fileSelect.addEventListener("click", function (e) {
      if (fileElem) {
        fileElem.click();
      }
      e.preventDefault(); // prevent navigation to "#"
    }, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
     img.src = URL.createObjectURL(this.files[0]);
     img.onload = function() {
       URL.revokeObjectURL(this.src);
       ctx.drawImage(img, 0, 0);
     }
};
