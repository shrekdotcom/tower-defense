'use strict';

const enemy = require('../game/enemy/all');
module.exports = function spawnEnemy(enemyArray, path, json) {
   function spawn(type, amount, time) {
      for (let i = 0; i < amount; i++) {
         setTimeout(() => {
            enemyArray.push(new type(path));
         }, i * time);
      }
   }
   for (const object of json) {
      const { type, amount } = object;
      if (type === 'basic') {
         spawn(enemy.Basic, amount, object['time-in-between-ms']);
      } else if (type === 'fast') {
         spawn(enemy.Fast, amount, object['time-in-between-ms']);
      }
   }
};