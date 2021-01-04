'use strict';

const resizeCanvas = require('../util/resizeCanvas');
const Path = require('./path');
const Camera = require('./camera');
const State = require('./state');
const { BACKGROUND_COLOR, SIMULATION_RATE } = require('../util/constants');
const currentTick = require('../util/currentTick');
const spawnEnemy = require('../util/spawnEnemy');

module.exports = class Game {
   constructor() {
      this.wave = 0;
      this.towers = [];
      this.events = Object.create(null);
      this.fov = 0.1;
      this.camera = new Camera();
      this.path = require('./map/path.json');
      this.pathObject = new Path(this.path);
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.state = new State();
      this.tick = 0;
      this.startTime = window.performance.now();
      resizeCanvas(this.canvas);
      spawnEnemy(this.path, require('./map/enemy.json'), this);
      this.listen('resize', () => resizeCanvas(this.canvas));
      document.body.appendChild(this.canvas);
   }
   newEvent(func, tick) {
      if (this.events[tick] === undefined) {
         this.events[tick] = [];
      }
      this.events[tick].push(func);
   }
   listen(type, func) {
      window.addEventListener(type, func.bind(this));
   }
   stop() {
      if (this.afr) {
         window.cancelAnimationFrame(this.afr);
      }
   }
   start() {
      (function run() {
         this.update();
         this.render();
         this.afr = requestAnimationFrame(run.bind(this));
      }.bind(this)());
   }
   render() {
      this.ctx.fillStyle = BACKGROUND_COLOR;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.pathObject.render(this.ctx, this.camera);
      this.state.render(this.ctx, this.camera);
   }
   simulate() {
      this.state.simulate();
   }
   update() {
      const expectedTick = currentTick(this.startTime);
      let amount = 0;
      while (this.tick < expectedTick) {
         if (this.events[this.tick]) {
            for (const func of this.events[this.tick]) {
               func();
            }
         }
         if (amount <= SIMULATION_RATE) {
            this.simulate();
         }
         if (amount >= SIMULATION_RATE * 120) {
            alert('You left the tab for too long. Please refresh.');
            break;
         }
         this.tick++;
         amount++;
      }
   }
};
