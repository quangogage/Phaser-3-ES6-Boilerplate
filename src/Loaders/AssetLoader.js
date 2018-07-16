export default class AssetLoader {
  constructor(options) {
    // Store values
    this.scene = options.scene;

    // The assets
    this.assets = [];

    // Binding public functions
    this.add = this.add.bind(this);
  }

  /* ** Public Functions ** */
  preload() {
    for (var i = 0; i < this.assets.length; i++) {
      var asset = this.assets[i];

      if (asset.type === 'image') {
        // Images
        this.scene.load.image(asset.name, asset.filePath);
      } else if (asset.type === 'spritesheet') {
        // Spritesheets
        this.scene.load.spritesheet(asset.name, asset.filePath, {
          frameWidth: asset.frameWidth,
          frameHeight: asset.frameHeight
        });
      }
    }
  }

  // Add an asset to be loaded
  add(asset) {
    this.assets.push(asset);
  }
}
