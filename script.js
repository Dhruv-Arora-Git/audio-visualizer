// dcoder_op - Dhruv Arora
const button1 = document.getElementById("button1");

let elButton;
let elWrapper;

const audioCtx = new AudioContext();
const lotusImg = new Image();
lotusImg.src = "./images/lotus.png";
const rainbowHeartImg = new Image();
rainbowHeartImg.src = "./images/rainbow-heart.png";

const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");
const file = document.getElementById("fileupload");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const rainbowColors = document.getElementById("one");
const sprialColors = document.getElementById("two");
const lotusPicColors = document.getElementById("three");
const rainbowHeartColors = document.getElementById("four");
const neonColors = document.getElementById("five");
const circleLayerColors = document.getElementById("six");
const rectangleBorderColors = document.getElementById("seven");
const linesAndCircleColors = document.getElementById("eight");

const audio1 = document.getElementById("audio1");
let audioSource, analyser;
file.addEventListener("change", function () {
  const files = this.files;
  const aText = files[0].name;
  let i = 0;
  const interval = setInterval(() => {
    if (i < aText.length) {
      document.getElementById("typedtext").innerHTML = aText.slice(0, i + 1);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 100);

  console.log(audio1.networkState);
  audio1.src = URL.createObjectURL(files[0]);
  audio1.load();
  audioSource = audioCtx.createMediaElementSource(audio1);
  analyser = audioCtx.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioCtx.destination);
  console.log(audio1.networkState);

  if (audio1.networkState !== 0) {
    rainbowColors.addEventListener("click", function () {
      elButton = document.getElementById("one");
      elWrapper = document.getElementById("wrapper-one");
      addTreats();
      rainbow();
    });
    sprialColors.addEventListener("click", function () {
      elButton = document.getElementById("two");
      elWrapper = document.getElementById("wrapper-two");

      addTreats();
      sprial();
    });
    lotusPicColors.addEventListener("click", function () {
      elButton = document.getElementById("three");
      elWrapper = document.getElementById("wrapper-three");

      addTreats();
      lotus();
    });
    rainbowHeartColors.addEventListener("click", function () {
      elButton = document.getElementById("four");
      elWrapper = document.getElementById("wrapper-four");

      addTreats();
      rainbowHeart();
    });
    neonColors.addEventListener("click", function () {
      elButton = document.getElementById("five");
      elWrapper = document.getElementById("wrapper-five");

      addTreats();
      neon();
    });

    circleLayerColors.addEventListener("click", function () {
      elButton = document.getElementById("six");
      elWrapper = document.getElementById("wrapper-six");

      addTreats();
      circleLayer();
    });
    rectangleBorderColors.addEventListener("click", function () {
      elButton = document.getElementById("seven");
      elWrapper = document.getElementById("wrapper-seven");

      addTreats();
      rectangleBorder();
    });
    linesAndCircleColors.addEventListener("click", function () {
      elButton = document.getElementById("eight");
      elWrapper = document.getElementById("wrapper-eight");

      addTreats();
      linesAndCircle();
    });
  }
});

function rainbow() {
  // rotate
  console.log("rainbow clicked");
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();
  console.log(audio1.paused);
  const barWidth = 15;
  let barHeight;
  let x;
  // console.log(bufferLength);
  function animate() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "source-over";

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.8;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((i * Math.PI * 8) / bufferLength);
      const hue = i * 15;
      ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";
      ctx.fillRect(0, 0, barWidth, barHeight);
      x += barWidth;
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function sprial() {
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 15;
  let barHeight;
  let x;
  function animate() {
    x = 0;

    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 5;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "source-over";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.3;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(i * bufferLength * -4.5);
      const hue = 250 + i * 2;
      ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";
      ctx.beginPath();
      ctx.arc(0, barHeight, barHeight / 10, 0, Math.PI * 2);
      ctx.arc(0, barHeight / 1.5, barHeight / 20, 0, Math.PI * 2);

      ctx.arc(0, barHeight / 2, barHeight / 30, 0, Math.PI * 2);

      ctx.arc(0, barHeight / 3, barHeight / 40, 0, Math.PI * 2);
      ctx.fill();
      x += barWidth;
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }
  animate();
}

function lotus() {
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 15;
  let barHeight;
  let x;
  function animate() {
    x = 0;

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "source-over";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.3;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(i * bufferLength * 4);
      ctx.drawImage(lotusImg, 0, barHeight, barHeight / 3, barHeight / 3);
      x += barWidth;
      ctx.restore();
    }
    const size = dataArray[15] * 1.5 > 100 ? dataArray[15] : 100;
    ctx.drawImage(
      lotusImg,
      canvas.width / 2 - size / 2,
      canvas.height / 2 - size / 2,
      size,
      size
    );

    requestAnimationFrame(animate);
  }
  animate();
}

function rainbowHeart() {
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 15;
  let barHeight;
  let x;
  function animate() {
    x = 0;

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "source-over";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.5;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      ctx.rotate(i * 2);
      ctx.drawImage(
        rainbowHeartImg,
        0,
        barHeight,
        barHeight / 4,
        barHeight / 4
      );
      x += barWidth;
      ctx.restore();
    }
    const size = dataArray[15] * 1.5 > 100 ? dataArray[15] : 100;
    ctx.drawImage(
      rainbowHeartImg,
      canvas.width / 2 - size / 2,
      canvas.height / 2 - size / 2,
      size,
      size
    );

    requestAnimationFrame(animate);
  }
  animate();
}

function neon() {
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 16;
  let barHeight;
  let x;
  function animate() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "white";
    ctx.shadowBlur = 40;
    ctx.globalCompositeOperation = "source-over";

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.2;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((i * bufferLength) / 1.2);
      ctx.lineWidth = barHeight / 10;
      const hue = 200 + i * 5;
      ctx.strokeStyle = "hsl(" + hue + ",100%, 50%)";
      ctx.beginPath();
      ctx.moveTo(0, barHeight / 1.1);
      ctx.lineTo(barHeight / 1.1, barHeight);
      ctx.stroke();
      x += barWidth;
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function circleLayer() {
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 13;
  let barHeight;
  let x;
  // console.log(bufferLength);
  function animate() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "difference";

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.6;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((i * Math.PI * 4) / bufferLength);

      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";

      ctx.lineWidth = barHeight / 20;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, barHeight / 1.1);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, barHeight + barHeight / 20, barHeight / 50, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, barHeight + barHeight / 5, barHeight / 30, 0, Math.PI * 2);
      ctx.fill();
      x += barWidth;
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function rectangleBorder() {
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 15;
  let barHeight;
  let x;

  function animate() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "source-over";

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.1;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(i * 0.14);
      const hue = i * 30;
      ctx.fillStyle = "hsl(" + hue + ",100%," + barHeight / 3 + "%)";
      ctx.strokeStyle = "white";
      ctx.fillRect(barHeight / 2 + 5, barHeight / 2 + 5, barWidth, barHeight);
      barHeight > 50
        ? ctx.strokeRect(
            barHeight / 2 + 7,
            barHeight / 2 + 7,
            barWidth,
            barHeight * 1.2
          )
        : ctx.strokeRect(0, 0, 0, 0);
      barHeight > 80
        ? ctx.strokeRect(
            barHeight / 2 + 7,
            barHeight * 1.8,
            barWidth,
            barHeight * 0.2
          )
        : ctx.strokeRect(0, 0, 0, 0);

      x += barWidth;
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function linesAndCircle() {
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  audio1.play();

  const barWidth = 15;
  let barHeight;
  let x;
  function animate() {
    x = 0;
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";
    ctx.globalCompositeOperation = "source-over";

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.8;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(i * 3.2);
      const hue = i * 0.1;
      ctx.strokeStyle = "hsl(" + hue + ",100%," + barHeight / 4 + "%)";
      ctx.lineWidth = barHeight / 40;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, barHeight / 1.1);
      ctx.stroke();

      if (i > bufferLength * 0.6) {
        ctx.beginPath();
        ctx.arc(0, 0, barHeight / 1.6, 0, Math.PI * 2);
        ctx.stroke();
      }
      x += barWidth;
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

let width = window.innerWidth - 10;
let height = window.innerHeight - 10;
const body = document.body;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const treatmojis = [
  "&#127926;",
  "&#10024;",
  "&#127927;",
  "&#129395;",
  "&#127911;",
  "&#128150;",
  "&#127928;",
  "&#127752;",
  "&#127878;",
  "&#127929;",
  "&#127930;",
];
const treats = [];
const radius = 15;

const Cd = 0.47; // Dimensionless
const rho = 1.22; // kg / m^3
const A = (Math.PI * radius * radius) / 10000; // m^2
const ag = 9.81; // m / s^2
const frameRate = 1 / 60;

function createTreat() /* create a treat */ {
  const vx = getRandomArbitrary(-10, 10); // x velocity
  const vy = getRandomArbitrary(-10, 1); // y velocity

  const el = document.createElement("div");
  el.className = "treat";

  const inner = document.createElement("span");
  inner.className = "inner";
  inner.innerHTML = treatmojis[getRandomInt(0, treatmojis.length - 1)];
  el.appendChild(inner);

  elWrapper.appendChild(el);

  const rect = el.getBoundingClientRect();

  const lifetime = getRandomArbitrary(2000, 3000);

  el.style.setProperty("--lifetime", lifetime);

  const treat = {
    el,
    absolutePosition: { x: rect.left, y: rect.top },
    position: { x: rect.left, y: rect.top },
    velocity: { x: vx, y: vy },
    mass: 0.1, //kg
    radius: el.offsetWidth, // 1px = 1cm
    restitution: -0.7,

    lifetime,
    direction: vx > 0 ? 1 : -1,

    animating: true,

    remove() {
      this.animating = false;
      this.el.parentNode.removeChild(this.el);
    },

    animate() {
      const treat = this;
      let Fx =
        (-0.5 *
          Cd *
          A *
          rho *
          treat.velocity.x *
          treat.velocity.x *
          treat.velocity.x) /
        Math.abs(treat.velocity.x);
      let Fy =
        (-0.5 *
          Cd *
          A *
          rho *
          treat.velocity.y *
          treat.velocity.y *
          treat.velocity.y) /
        Math.abs(treat.velocity.y);

      Fx = isNaN(Fx) ? 0 : Fx;
      Fy = isNaN(Fy) ? 0 : Fy;

      // Calculate acceleration ( F = ma )
      var ax = Fx / treat.mass;
      var ay = ag + Fy / treat.mass;
      // Integrate to get velocity
      treat.velocity.x += ax * frameRate;
      treat.velocity.y += ay * frameRate;

      // Integrate to get position
      treat.position.x += treat.velocity.x * frameRate * 100;
      treat.position.y += treat.velocity.y * frameRate * 100;

      treat.checkBounds();
      treat.update();
    },

    checkBounds() {
      if (treat.position.y > height - treat.radius) {
        treat.velocity.y *= treat.restitution;
        treat.position.y = height - treat.radius;
      }
      if (treat.position.x > width - treat.radius) {
        treat.velocity.x *= treat.restitution;
        treat.position.x = width - treat.radius;
        treat.direction = -1;
      }
      if (treat.position.x < treat.radius) {
        treat.velocity.x *= treat.restitution;
        treat.position.x = treat.radius;
        treat.direction = 1;
      }
    },

    update() {
      const relX = this.position.x - this.absolutePosition.x;
      const relY = this.position.y - this.absolutePosition.y;

      this.el.style.setProperty("--x", relX);
      this.el.style.setProperty("--y", relY);
      this.el.style.setProperty("--direction", this.direction);
    },
  };

  setTimeout(() => {
    treat.remove();
  }, lifetime);

  return treat;
}

function animationLoop() {
  var i = treats.length;
  while (i--) {
    treats[i].animate();

    if (!treats[i].animating) {
      treats.splice(i, 1);
    }
  }

  requestAnimationFrame(animationLoop);
}

animationLoop();

function addTreats() {
  //cancelAnimationFrame(frame);
  if (treats.length > 40) {
    return;
  }
  for (let i = 0; i < 10; i++) {
    treats.push(createTreat());
  }
}

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
});

window.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
  const key = event.keyCode;

  if (key === 32) {
    // space
    event.preventDefault();
    audio1.paused ? audio1.play() : audio1.pause();
  } else if (key == 37) {
    // left arrow
    event.preventDefault();
    audio1.currentTime = audio1.currentTime - 10;
  } else if (key == 39) {
    // right arrow
    event.preventDefault();
    audio1.currentTime = audio1.currentTime + 10;
  } else if (key == 38) {
    // up arrow
    event.preventDefault();
    if (audio1.volume < 1) audio1.volume += 0.1;
  } else if (key == 40) {
    // down arrow
    event.preventDefault();
    if (audio1.volume > 0) audio1.volume -= 0.1;
    console.log(audio1.volume);
  } else if (key == 90) {
    // r - reset
    event.preventDefault();
    audio1.currentTime = 0;
  } else if (key == 13) {
    // enter
    event.preventDefault();
    document.querySelector(".btn-1").click();
  } else if (key == 85) {
    // u - up
    window.scrollTo(0, 0);
    event.preventDefault();
  } else if (key == 68) {
    // d - down
    window.scrollTo(0, document.body.scrollHeight);
    event.preventDefault();
  }
});
