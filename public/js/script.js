////// upload images in page //////


let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

function preview() {
    return new Promise((resolve, reject) => {
      imageContainer.innerHTML = "";
      numOfFiles.textContent = `${fileInput.files.length} Files Selected`;
  
      let numLoaded = 0;
  
      for (i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
          let img = document.createElement("img");
          img.setAttribute("src", reader.result);
          figure.insertBefore(img, figCap);
          numLoaded++;
          if (numLoaded === fileInput.files.length) {
            resolve();
          }
        };
        reader.readAsDataURL(i);
        imageContainer.appendChild(figure);
      }
    });

  }
  
////// upload images in page //////


////// make the images as url and print it using domtoimage////
function lencheck() {
    alert("sdf")
    preview().then(() => {
      let node = document.querySelector("#images");
      const divs = node.querySelectorAll("figure");
  
      for (let i = 0; i < divs.length; i++) {
        let img = new Image();
        img.onload = function () {
          let src = divs[i].querySelector("img").src;
          fetch("/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ src: src })
          })
          .then(response => {
            console.log(response + "asldf");
          })
          .catch(error => {
            console.error(error);
          });
        };
        img.src = divs[i].querySelector("img").src;
      }
    });
  }
  