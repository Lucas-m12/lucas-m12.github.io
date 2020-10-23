class PreviewBook {

  _data;

  constructor() {

    this._data = this.loadItensInLocalStorage();

    this.loadImagesToFlipbook();

  }

  loadImagesToFlipbook() {
    
    let { 
      history, 
      cover: imageCover,
      name, 
      dedication, 
      backgroundDedication 
    } = this._data;

    const flipbook = document.querySelector(".flipbook");

    const cover = document.createElement("div");

    cover.classList.add("cover");

    cover.style.backgroundImage = `url(${imageCover})`;
    cover.innerHTML = `<span>Para <strong>${name}</strong></span>`;

    flipbook.appendChild(cover);

    const backCover = document.createElement("div");

    backCover.classList.add("back-cover")
    backCover.innerHTML = "Contra capa";

    flipbook.appendChild(backCover);

    const dedicationPage = document.createElement("div");

    dedicationPage.style.backgroundImage = `url(${backgroundDedication})`;

    dedicationPage.classList.add("dedication-page");
    dedicationPage.innerHTML = `<p class="dedication-text">${dedication}</p>`

    flipbook.appendChild(dedicationPage)

    history.forEach(history => {
      let page = document.createElement("div");

      page.style.backgroundImage = `url(${history.image})`;

      page.style.backgroundSize = "300px";
      page.style.backgroundPosition = "center";

      page.innerHTML = `
        <div class="top-group-history">
          <h1>${history.letter.toUpperCase()}${history.letter}</h1>
          <p>${history.textTop}</p>
        </div>

        <p class="text-bottom">${history.textBottom}</p>

      `;

      flipbook.appendChild(page);
    });

    const lastPage = document.createElement("div");

    lastPage.style.backgroundImage = `url(${imageCover})`
    lastPage.classList.add("last-page");
    lastPage.innerHTML = "<strong>Informações finais do livro</strong>";

    flipbook.appendChild(lastPage);

  }

  loadItensInLocalStorage() {
    
    let data = localStorage.getItem("data");

    data = JSON.parse(data);

    return data;

  }



}

