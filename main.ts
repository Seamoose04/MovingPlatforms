let platforms: Platform[] = [];
class Platform {
    width: number;
    platform_image: Image;
    background_image: Image;
    constructor(_width: number, _platform_image: Image, _background_image: Image) {
        this.width = _width;
        this.platform_image = _platform_image;
        this.background_image = _background_image;
    }

    /**
        * Automatically creates platforms from your tilemap for future use.
        * @param platform_image The tile image of your platforms.
        * @param background_image The tile image of your background.
        * @param start_image Unused
        * @param end_image Unused
    */
    static fromScene(platform_image: Image, background_image: Image, start_image?: Image, end_image?: Image) {
        
    }
}
class MovingPlatform extends Platform {
    xMin: number;
    xMax: number;
    y: number;
    lead: number;
    dir: number = 1;
    constructor(_xMin: number, _xMax: number, _width: number, _y: number, _platform_image: Image, _background_image: Image) {
        super(_width, _platform_image, _background_image);
        this.xMin = _xMin;
        this.xMax = _xMax;
        this.y = _y;

        this.lead = this.xMin + this.width;

        for (let j = this.xMin; j < this.xMin + this.width; j++) {
            tiles.setTileAt(tiles.getTileLocation(j, this.y), this.platform_image);
            tiles.setWallAt(tiles.getTileLocation(j, this.y), true);
        }
    }
    update(): void {
        tiles.setTileAt(tiles.getTileLocation(this.lead, this.y), this.platform_image);
        tiles.setWallAt(tiles.getTileLocation(this.lead, this.y), true);

        tiles.setTileAt(tiles.getTileLocation(this.lead + (-this.dir * this.width), this.y), this.background_image);
        tiles.setWallAt(tiles.getTileLocation(this.lead + (-this.dir * this.width), this.y), false);

        this.lead += this.dir;

        if (this.lead == this.xMin) {
            this.dir = 1;
            this.lead = this.xMin + this.width;
        }
        if (this.lead == this.xMax) {
            this.dir = -1;
            this.lead = this.xMax - this.width;
        }
    }
    /**
        * Automatically creates moving platforms from your tilemap for future use.
        * @param platform_image The tile image of your platforms.
        * @param background_image The tile image of your background.
        * @param start_image The tile representing the left boundary of the platform movement.
        * @param end_image The tile representing the rightmost boundary of the platform movement.
    */
    static fromScene(platform_image: Image, background_image: Image, start_image: Image, end_image: Image) {
        let pTileX = 0;
        let platform_tiles = tiles.getTilesByType(platform_image);
        let start_tiles = tiles.getTilesByType(start_image);
        let end_tiles = tiles.getTilesByType(end_image);

        start_tiles.forEach(function (location: tiles.Location, index: number): void {
            let col = location.col;
            let xMin = col;
            let y = location.row;
            let width = 0;
            while (tiles.tileImageAtLocation(tiles.getTileLocation(col, y)) !== platform_image) {
                col++;
            }
            while (tiles.tileImageAtLocation(tiles.getTileLocation(col, y)) == platform_image) {
                width++;
                col++;
            }
            while (tiles.tileImageAtLocation(tiles.getTileLocation(col, y)) !== end_image) {
                col++;
            }
            let xMax = col;
            tiles.setTileAt(tiles.getTileLocation(col, location.row), background_image);
            tiles.setTileAt(location, background_image);

            platforms.push(new MovingPlatform(xMin, xMax, width, y, platform_image, background_image));
        });
    }
}

game.onUpdateInterval(300, function () {
    platforms.forEach((platform) => {
        if (platform instanceof MovingPlatform) {
            platform.update();
        }
    });
});