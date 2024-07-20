const app = {
  invaderContainer: document.querySelector("#invader"),
  pixelsContainer: document.createElement("div"),
  eachPixels: [],
  gridValue: 0,
  pixelValue: 0,
  colorPallet: document.querySelectorAll(".color"),
  inputGrid: document.querySelector("#grid"),
  inputPixel: document.querySelector("#pixel"),
  inputColor: document.querySelector(".inputcolor"),
  button: document.querySelector(".btn"),
  color: "",

  // Create form
  init: () => {
    // Create pixel container
    app.pixelsContainer.setAttribute("id", "pixelContainer");
    app.invaderContainer.appendChild(app.pixelsContainer);

    app.inputGrid.addEventListener("input", (e) => {
      app.gridValue = e.target.value;
    });

    app.inputPixel.addEventListener("input", (e) => {
      app.pixelValue = e.target.value;
    });

    app.button.addEventListener("click", (e) => {
      e.preventDefault();
      app.pixelsContainer.innerHTML = ``;
      app.createPixel(app.gridValue, app.pixelValue);
    });
  },

  // This function create pixel div
  createPixel: (grids, pixels) => {
    for (let i = 0; i < grids * grids; i++) {
      const pixelsElement = document.createElement("div");
      pixelsElement.setAttribute("id", "pixelsElement");
      app.pixelsContainer.appendChild(pixelsElement);
      pixelsElement.style.height = `${pixels}px`;
      pixelsElement.style.width = `${pixels}px`;
    }
    // Adjust width and heigth of pixel container according to pixels and grids
    app.pixelsContainer.style.height = `${pixels * grids + grids * 4}px`;
    app.pixelsContainer.style.width = `${pixels * grids + grids * 4}px`;

    app.eachPixels = document.querySelectorAll("#pixelsElement");

    // allow choose color

    app.inputColor.addEventListener("input", (e) => {
      setTimeout(() => {
        app.color = app.inputColor.value;
        console.log(app.color);
      }, 1000);
    });

    app.eachPixels.forEach((pixel) => {
      pixel.addEventListener("click", (e) => {
        pixel.style.backgroundColor = app.color;
      });
    });
  },
};

app.init();
