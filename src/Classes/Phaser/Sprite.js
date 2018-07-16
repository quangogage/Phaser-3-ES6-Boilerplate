/**
 * A custom Sprite class extending Phaser's sprite class.
 *
 * Necessary arguments:
 *  Scene - The scene the sprite is contained in
 *  X - X position of the sprite
 *  Y - Y position of the sprite
 *  Name - The name of the sprite (the sprite's key.)
 *
 */

export default class Sprite extends Phaser.GameObjects.Sprite {
  constructor(options) {
    super(options.scene, options.x, options.y, options.name);
    this.scene = options.scene;
    this.scene.add.existing(this);
  }
}
