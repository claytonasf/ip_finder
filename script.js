
const div = document.createElement("div");

let host = window.location.hostname;
let path = window.location.pathname;
let api = "https://exemplo.com.br/api.php";





const url = api+"?site=" + host + "&path=" + path;
fetch(url)
  .then((resp) => resp.json()).then((data) => {
    var ip = data.ip;
    const footer = document.querySelector("body");

    const container = document.createElement("div");
    container.classList.add("container__ext_busca");

    const listContainer = document.createElement("div");
    listContainer.classList.add("container__ext_busca__list");



    const spanIp = document.createElement("span");
    spanIp.innerHTML = `<strong>IP: </strong>${ip}`;
    listContainer.appendChild(spanIp);


    const linksContainer = document.createElement("div");
    linksContainer.classList.add("container__ext_busca__links");


    listContainer.appendChild(linksContainer);
    container.appendChild(listContainer);

    footer.appendChild(container);



    const moveConteiner = document.querySelector(".container__ext_busca");
    moveConteiner.addEventListener("mouseover", () => {
      const currentLeft = parseInt(window.getComputedStyle(moveConteiner).left, 10);

      if (currentLeft == 0) {
        moveConteiner.style.left = ""; 
        moveConteiner.style.right = "0px"; 
      } else {
        moveConteiner.style.right = ""; 
        moveConteiner.style.left = "0px"; 
      }
    });

  })




