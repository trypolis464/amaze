'use strict';

class Map {
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.tiles = [];
  }

  spawnPlatform(minX, maxX, minY, maxY, tile) {
    this.tiles.push(new Tile(minX, maxX, minY, maxY, tile));
    console.log('Tiles list: ' + this.tiles);
  }

  getTileAt(x, y) {
    let temp = '';
    for (let i = 0; i < this.tiles.length; i++) {
      // Todo: Add the ability to return right in this loop, not outside of it so as to avoid nested tiles. This should be optional, of course.
      if (this.tiles[i].here(x, y)) {
        temp = this.tiles[i].surface;
      }
    }
    console.log('Tile is ' + temp);
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

  here(x, y) {
    if (x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY) {
      return true;
    }
    return false;
  }
}

export {Map};
