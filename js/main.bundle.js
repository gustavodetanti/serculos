(() => {
  // src/components/Serculos.js
  var T = 618;
  var ww = window.innerWidth;
  var wh = window.innerHeight;
  var SIZE = wh / 3 - 10;
  if (ww < wh) {
    SIZE = ww / 3 - 10;
  }
  function Serculos(apdiv2, json) {
    apdiv2.style.width = `${SIZE}px`;
    apdiv2.style.height = `${SIZE}px`;
    apdiv2.style.transition = `transform ${T * 10}ms ease-in-out`;
    let scale = rand() / 2 + 0.5;
    apdiv2.style.transform = `scale(${scale})`;
    let n = json.length;
    let r = rand(n);
    let dir = 1;
    let a = 0;
    apdiv2.innerHTML = ``;
    showActual();
    function showActual() {
      let aims = [...apdiv2.querySelectorAll("img")];
      aims.forEach((ai) => {
        ai.classList.add("toRemove");
      });
      const IMtop = new Image();
      IMtop.classList.add("hidden");
      IMtop.style.width = `${SIZE}px`;
      IMtop.style.height = `${SIZE}px`;
      IMtop.onload = () => {
        setTimeout(() => {
          IMtop.classList.remove("hidden");
          IMtop.style.transition = `opacity ${T / 1e3}s linear`;
          scale = rand() / 2 + 0.5;
          apdiv2.style.transform = `scale(${scale})`;
          a += 5;
          if (a >= 360)
            a -= 360;
          sto = setTimeout(next, T * (1 + rand(10) / 5));
        }, 100);
      };
      apdiv2.appendChild(IMtop);
      IMtop.src = json[r].src;
    }
    function next() {
      [...apdiv2.querySelectorAll(".toRemove")].forEach((tr) => {
        tr.parentNode.removeChild(tr);
      });
      r += dir;
      if (rand(4) < 1)
        dir = dir == -1 ? 1 : -1;
      if (r < 0)
        r = n - 1;
      if (r > n - 1)
        r = 0;
      console.log(r);
      showActual();
    }
    function rand(n2) {
      if (isNaN(n2))
        return Math.random();
      return parseInt(Math.random() * n2);
    }
    function add(n2) {
      return n2 + 1;
    }
  }

  // src/components/functions/Send.js
  function Send(url, fn, obj, com) {
    let formData = new FormData();
    if (com && obj) {
      formData.append("com", com);
      formData.append("data", JSON.stringify(obj));
      fetch(url, {
        body: formData,
        method: "post"
      }).then((data) => data.json()).then((json) => {
        if (fn)
          fn(json);
      }).catch((err) => {
        console.log(err);
        if (fn)
          fn({ "error": "error de datos leyendo " + url });
      });
    } else if (obj) {
      for (var k in obj) {
        formData.append(k, obj[k]);
      }
      fetch(url, {
        body: formData,
        method: "post"
      }).then((data) => data.json()).then((json) => {
        if (fn)
          fn(json);
      }).catch((err) => {
        console.log(err);
        if (fn)
          fn({ "error": "error de datos leyendo " + url });
      });
    } else {
      fetch(url).then((data) => data.json()).then((json) => {
        if (fn)
          fn(json);
      }).catch((err) => {
        console.log(err);
        if (fn)
          fn({ "error": "error de datos leyendo " + url });
      });
    }
  }

  // src/main.js
  var apdiv;
  var serculos;
  window.addEventListener("DOMContentLoaded", (event) => {
    serculos = document.querySelector(".serculos");
    let ww2 = window.innerWidth;
    let hh = window.innerHeight;
    if (ww2 < hh) {
      serculos.style.width = ww2 + "px";
      serculos.style.margin = ` ${(hh - ww2) / 2}px 0`;
    } else {
      serculos.style.width = hh + "px";
      serculos.style.margin = "0 auto";
    }
    init();
  });
  function init() {
    for (let i = 0; i < 9; i++) {
      let el = document.createElement("div");
      el.classList.add("js-app");
      el.classList.add("target");
      serculos.appendChild(el);
    }
    apdiv = [...serculos.querySelectorAll(".js-app")];
    Send("images.json", (json) => {
      console.log(json);
      apdiv.forEach(function(s) {
        Serculos(s, json);
      });
    });
  }
})();
