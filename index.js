let assets = {
  twemoji: 197
}
let menu = [];
let order = document.querySelector('#order');

let sortable = Sortable.create(order, {
  handle: ".handle",
  onSort: function (event) {
    console.log(event);
  }
});


function initListener () {
  let images = document.querySelectorAll('#menu div');

  for(let image of images) {
    image.addEventListener('click', function(event) {
      order.insertBefore(this.cloneNode(), order.firstChild);
    })
  }
}

function initCanvas (el) {
  let img = new Image();
  let id = el.getAttribute('value');

  img.src = `assets/twemoji/${id}.svg`;
  img.onload = function() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0);
  }
}

function createMenu () {
  let menu = document.querySelector('#menu');
  let html = '';
  let background = '';

  for(let i = 1; i <= assets.twemoji; i++) {
    if(i > 11) background = 'yellow';
    html += `<div class="${background}" value="${i}" style="background-image: url('assets/twemoji/${i}.svg');"></div>`;
  }
  
  menu.innerHTML = html;

  initListener();
}

createMenu();