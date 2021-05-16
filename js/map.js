'use strict';

class Map {
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.tiles = [];
    this.spawnPlatform(0, this.maxX, 0, this.maxY, 'wall');
  }

  spawnPlatform(minX, maxX, minY, maxY, tile) {
    this.tiles.push(new Tile(minX, maxX, minY, maxY, tile));
  }

  getTileAt(x, y) {
    let temp = '';
    for (let i = 0; i < this.tiles.length; i++) {
      // Todo: Add the ability to return right in this loop, not outside of it so as to avoid nested tiles. This should be optional, of course.
      if (x >= i.minX && x <= i.maxX && y >= i.minY && y <= i.maxY) {
        temp = i.surface;
      }
    }
    console.log(temp);
    return temp
  }
}

class Tile {
  constructor(minX, maxX, minY, maxY, surface) {
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
    this.surface = surface;
  }
}

export {Map};
