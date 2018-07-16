let assets = {
  body: 11,
  browLeft: 18,
  browRight: 18,
  cheekLeft: 5,
  cheekRight: 5,
  eyeLeft: 38,
  eyeRight: 38,
  foreground: 5,
  head: 25,
  mouth: 35
}

function getUri (id) {
  if(id.replace(/Left/, 's/left/')) id = id.replace(/Left/, 's/left');
  if(id.replace(/Right/, 's/right/')) id = id.replace(/Right/, 's/right');

  return id;
}

function initListener () {
  let images = document.querySelectorAll('#menu div');

  for(let image of images) {
    image.addEventListener('click', function(event) {
      let img = new Image();
      let uri = getUri(this.classList.value);
      let id = this.getAttribute('value');

      console.log(`assets/twemoji/${uri}/${id}.svg`)
      
      img.src = `assets/twemoji/${uri}/${id}.svg`;
      img.onload = function() {
        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0);
      }
    })
  }
}

function initCanvas () {
  

}

function createMenu () {
  let menu = document.querySelector('#menu');
  let html = '';

  for(let part in assets) {
    // html += `<p>${part}</p>`;
    for(let i = 1; i <= assets[part]; i++) {
      html += `<div class="${part}" value="${i}" style="background-image: url('assets/twemoji/${getUri(part)}/${i}.svg');"></div>`;
    }
  }
  
  menu.innerHTML = html;

  initListener();
  initCanvas()
}

createMenu();