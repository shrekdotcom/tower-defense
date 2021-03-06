'use strict';

require('./style.css');
const Game = require('./game');
const dom = require('./references');
const { loadSound } = require('../util/loadAsset');

dom.playButton.addEventListener('mousedown', () => {
   dom.menu.classList.add('hidden');
   const audio = loadSound('start.wav');
   const themeSong = loadSound('theme.wav');
   themeSong.volume = 0.65;
   stop();
   const game = new Game();
   game.start();
   audio.play();
   themeSong.loop = true;
   audio.addEventListener('ended', () => {
      themeSong.play();
   });
   document.children[0].style.backgroundColor = '#170a16';
});

// snow particle effects

class SnowParticle {
   constructor(x, y) {
      this.x = x;
      this.y = y;
      this.xv = leftVelocity * Math.random();
      this.radius = Math.random() * particleRadius;
      this.vel = { x: 0, y: 0 };
      this.gravity = Math.random() * gravity + 5;
   }
   bound() {
      if (this.x - this.radius < 0) {
         this.x = canvas.width - this.radius;
      }
      if (this.y + this.radius > canvas.height) {
         this.y = this.radius;
      }
      if (this.x + this.radius > canvas.width) {
         this.x = this.radius;
      }
   }
   update() {
      this.y += this.gravity;
      this.x += this.xv;
      this.bound();
   }
   render() {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(Math.round(this.x), Math.round(this.y), this.radius, 0, Math.PI * 2);
      ctx.fill();
   }
}

const canvas = document.createElement('canvas');
canvas.id = 'snowCanvas';
const ctx = canvas.getContext('2d');
document.body.insertBefore(canvas, document.body.firstChild);

window.addEventListener('load', function () {
   resize();
   for (let i = 0; i < particleAmount; i++) {
      particles.push(new SnowParticle(Math.random() * canvas.width, Math.random() * canvas.height));
   }
});

window.addEventListener('resize', function () {
   resize();
});

function resize() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}

const particleAmount = 500;
const particleRadius = 2;
const gravity = 5;
const leftVelocity = 5;
let particles = [];
let afr;
(function run() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   for (const particle of particles) {
      particle.update();
      particle.render();
   }
   afr = requestAnimationFrame(run);
})();

function stop() {
   cancelAnimationFrame(afr);
   particles = [];
   canvas.style.display = 'none';
}
