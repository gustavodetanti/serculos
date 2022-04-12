(() => {
  // src/components/Serculos.js
  var T = 1018;
  function Serculos(apdiv2, json) {
    let ww = window.innerWidth, wh = window.innerHeight;
    let SIZE = wh / 3 - 10;
    if (ww < wh) {
      SIZE = ww / 3 - 10;
    }
    let sto, ended = false;
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
      if (ended)
        return;
      let aims = [...apdiv2.querySelectorAll("img")];
      aims.forEach((ai) => {
        ai.classList.add("toRemove");
      });
      const IMtop = new Image();
      IMtop.classList.add("hidden");
      IMtop.style.width = `${SIZE}px`;
      IMtop.style.height = `${SIZE}px`;
      IMtop.onload = () => {
        if (ended)
          return;
        setTimeout(() => {
          IMtop.classList.remove("hidden");
          IMtop.style.transition = `opacity ${T / 1e3}s linear`;
          scale = rand() / 2 + 0.5;
          apdiv2.style.transform = `scale(${scale})`;
          a += 5;
          if (a >= 360)
            a -= 360;
          if (rand(100) < 5) {
            console.warn("stop");
            sto = setTimeout(next, T * 5 * (1 + rand(10) / 5));
          } else
            sto = setTimeout(next, T * (1 + rand(10) / 5));
        }, 100);
      };
      apdiv2.appendChild(IMtop);
      IMtop.src = json[r].src;
    }
    function next() {
      if (ended)
        return;
      [...apdiv2.querySelectorAll(".toRemove")].forEach((tr) => {
        try {
          tr.parentNode.removeChild(tr);
        } catch (e) {
        }
        ;
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
    function end() {
      ended = true;
      clearTimeout(sto);
    }
    return { end, div: apdiv2 };
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
  var objs = [];
  var W;
  window.addEventListener("DOMContentLoaded", (event) => {
    serculos = document.querySelector(".serculos");
    let ww = window.innerWidth;
    W = ww;
    let hh = window.innerHeight;
    H = hh;
    if (ww < hh) {
      serculos.style.width = ww + "px";
      serculos.style.margin = ` ${(hh - ww) / 2}px 0`;
    } else {
      serculos.style.width = hh + "px";
      serculos.style.margin = "0 auto";
    }
    init();
  });
  window.addEventListener("resize", (event) => {
    let ww = window.innerWidth;
    let hh = window.innerHeight;
    if (ww == W)
      return;
    W = ww;
    H = hh;
    reiniciar();
  });
  var dsto;
  function reiniciar() {
    clearTimeout(dsto);
    dsto = setTimeout(() => {
      objs.forEach((o) => {
        o.end();
        serculos.removeChild(o.div);
      });
      objs = [];
      if (W < H) {
        serculos.style.width = W + "px";
        serculos.style.margin = ` ${(H - W) / 2}px 0`;
      } else {
        serculos.style.width = H + "px";
        serculos.style.margin = "0 auto";
      }
      init();
    }, 100);
  }
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
        objs.push(Serculos(s, json));
      });
    });
  }
})();
