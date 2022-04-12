(() => {
  // src/components/Serculos.js
  var T = 618;
  var [ww, wh] = [window.innerWidth, window.innerHeight];
  var SIZE = wh / 3 - 10;
  if (ww < wh) {
    SIZE = ww / 3 - 10;
  }
  function Serculos(apdiv2, json2) {
    apdiv2.style.width = `${SIZE}px`;
    apdiv2.style.height = `${SIZE}px`;
    apdiv2.style.transition = `transform ${T * 10}ms ease-in-out`;
    let scale = rand() / 2 + 0.5;
    apdiv2.style.transform = `scale(${scale})`;
    let n = json2.length;
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
      IMtop.src = json2[r].src;
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

  // src/main.js
  var json = [
    {
      "src": "imgs/circulos/2.jpeg"
    },
    {
      "src": "imgs/circulos/3.jpeg"
    },
    {
      "src": "imgs/circulos/9.jpeg"
    },
    {
      "src": "imgs/circulos/10.jpeg"
    },
    {
      "src": "imgs/circulos/11.jpeg"
    },
    {
      "src": "imgs/circulos/12.jpeg"
    },
    {
      "src": "imgs/circulos/13.jpeg"
    },
    {
      "src": "imgs/circulos/14.jpeg"
    },
    {
      "src": "imgs/circulos/15.jpeg"
    },
    {
      "src": "imgs/circulos/19.jpeg"
    },
    {
      "src": "imgs/circulos/23.jpeg"
    },
    {
      "src": "imgs/circulos/24.jpeg"
    },
    {
      "src": "imgs/circulos/26.jpeg"
    },
    {
      "src": "imgs/circulos/27.jpeg"
    },
    {
      "src": "imgs/circulos/28.jpeg"
    },
    {
      "src": "imgs/circulos/29.jpeg"
    },
    {
      "src": "imgs/circulos/3.jpeg"
    },
    {
      "src": "imgs/circulos/30.jpeg"
    },
    {
      "src": "imgs/circulos/31.jpeg"
    },
    {
      "src": "imgs/circulos/32.jpeg"
    },
    {
      "src": "imgs/circulos/33.jpeg"
    },
    {
      "src": "imgs/circulos/34.jpeg"
    },
    {
      "src": "imgs/circulos/35.jpeg"
    },
    {
      "src": "imgs/circulos/36.jpeg"
    },
    {
      "src": "imgs/circulos/37.jpeg"
    },
    {
      "src": "imgs/circulos/38.jpeg"
    },
    {
      "src": "imgs/circulos/39.jpeg"
    },
    {
      "src": "imgs/circulos/4.jpeg"
    },
    {
      "src": "imgs/circulos/41.jpeg"
    },
    {
      "src": "imgs/circulos/42.jpeg"
    },
    {
      "src": "imgs/circulos/43.jpeg"
    },
    {
      "src": "imgs/circulos/44.jpeg"
    },
    {
      "src": "imgs/circulos/45.jpeg"
    },
    {
      "src": "imgs/circulos/46.jpeg"
    },
    {
      "src": "imgs/circulos/47.jpeg"
    },
    {
      "src": "imgs/circulos/48.jpeg"
    },
    {
      "src": "imgs/circulos/49.jpeg"
    },
    {
      "src": "imgs/circulos/5.jpeg"
    },
    {
      "src": "imgs/circulos/50.jpeg"
    },
    {
      "src": "imgs/circulos/51.jpeg"
    },
    {
      "src": "imgs/circulos/52.jpeg"
    },
    {
      "src": "imgs/circulos/53.jpeg"
    },
    {
      "src": "imgs/circulos/54.jpeg"
    },
    {
      "src": "imgs/circulos/55.jpeg"
    },
    {
      "src": "imgs/circulos/56.jpeg"
    },
    {
      "src": "imgs/circulos/57.jpeg"
    },
    {
      "src": "imgs/circulos/58.jpeg"
    },
    {
      "src": "imgs/circulos/59.jpeg"
    },
    {
      "src": "imgs/circulos/60.jpeg"
    },
    {
      "src": "imgs/circulos/61.jpeg"
    },
    {
      "src": "imgs/circulos/62.jpeg"
    },
    {
      "src": "imgs/circulos/63.jpeg"
    },
    {
      "src": "imgs/circulos/64.jpeg"
    },
    {
      "src": "imgs/circulos/65.jpeg"
    },
    {
      "src": "imgs/circulos/66.jpeg"
    },
    {
      "src": "imgs/circulos/67.jpeg"
    },
    {
      "src": "imgs/circulos/68.jpeg"
    },
    {
      "src": "imgs/circulos/69.jpeg"
    },
    {
      "src": "imgs/circulos/7.jpeg"
    },
    {
      "src": "imgs/circulos/70.jpeg"
    },
    {
      "src": "imgs/circulos/71.jpeg"
    },
    {
      "src": "imgs/circulos/72.jpeg"
    },
    {
      "src": "imgs/circulos/73.jpeg"
    },
    {
      "src": "imgs/circulos/74.jpeg"
    },
    {
      "src": "imgs/circulos/75.jpeg"
    },
    {
      "src": "imgs/circulos/76.jpeg"
    },
    {
      "src": "imgs/circulos/77.jpeg"
    },
    {
      "src": "imgs/circulos/78.jpeg"
    },
    {
      "src": "imgs/circulos/79.jpeg"
    },
    {
      "src": "imgs/circulos/8.jpeg"
    },
    {
      "src": "imgs/circulos/80.jpeg"
    },
    {
      "src": "imgs/circulos/81.jpeg"
    }
  ];
  var apdiv;
  var serculos;
  window.addEventListener("DOMContentLoaded", (event) => {
    serculos = document.querySelector(".serculos");
    let ww2 = window.innerWidth;
    let hh = window.innerHeight;
    serculos.style.width = hh + "px";
    serculos.style.margin = "0 auto";
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
    console.log(json);
    apdiv.forEach(function(s) {
      Serculos(s, json);
    });
  }
})();
