# ES6-Phaser-3-Boilerplate
A boilerplate for my Phaser 3 games, that allows me to use es6 syntax.

## Features
* The es6 syntax that everyone loves! Import, export, report, meeshmort. Never code in html again! 😈

* Easy startup/setup.

* Live reloading  

* Connect to your local server on your mobile device, just make sure you are on the same network.

## The Structure
* Go to `/src/index.js` to see where the Phaser game gets initialized  

* There is a `/src/Scenes` directory where all of the individual scenes are placed.  

* There is a `/src/Loaders` directory where you can find a custom asset loader that I created. This class simplifies the process of loading assets and ensures you won't be trying to load the same asset multiple times. In your scene, just do `this.assetLoader.add(asset)` to place it in the load-queue.  

* Finally, there is a `/src/Classes` directory. Here is where you can extend phaser classes from your own, to customize their abilities, and make initializing new phaser classes easier. Right now you will find my `Sprite` class, which extends `Phaser.GameObjects.Sprite`.

## Setup
Install dependencies
```
npm install
```

## Develop
Run webpack-dev-server:
```
npm start
```
Go to local page at `localhost:8080`


