import AssetLoader from '../Loaders/AssetLoader';

export default class PlayScene extends Phaser.Scene {
  constructor(options) {
    super({ key: 'play' });
  }
  preload() {
    // The asset loader
    this.assetLoader = new AssetLoader({ scene: this });

    //
    // Any other components go here...
    //

    // Load the assets
    this.assetLoader.preload();
  }
  create() {}
  update() {}
}
