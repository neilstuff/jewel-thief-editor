Tile.prototype.UNBLOCKED = 0;
Tile.prototype.WALK = 1;
Tile.prototype.SAIL = 2;    

Tile.prototype.WALKING = 0;
Tile.prototype.SAILING = 1; 

Tile.prototype.BOAT = 0;
Tile.prototype.AXE = 1;
Tile.prototype.KEY = 2;
Tile.prototype.DIAMOND = 3;
Tile.prototype.GATE = 4;

Tile.prototype.PLAYER = 0;

const UNBLOCKED = 0;
const BLOCKED = 1;

const WALKING = 0;
const ROWING = 1;

function Tile(image, type) {

    this._image = image;
    this._type = type;

};

Tile.prototype.getImage = function() {

    return this._image;

};

Tile.prototype.getType = function() {

    return this._type;

};
