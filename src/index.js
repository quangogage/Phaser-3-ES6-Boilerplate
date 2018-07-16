import Phaser from 'phaser';
import PlayScene from './Scenes/Play';

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: new PlayScene(),
  pixelArt: true
};

export default class Game {
  constructor() {
    // The Game
    this.game = new Phaser.Game(config);
  }
}

new Game();
