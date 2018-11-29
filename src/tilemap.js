class TileMap
{
    /**
     *
     * Default constructor
     * @param {*} level The level name passed as a string
     */
<<<<<<< HEAD
    constructor(level)
    {
        this.level = level - 1; //to get the index array
        this.width = levels[0]["level1"].width; //width in number of tiles
        this.height = levels[0]["level1"].height; //height in number of tiles
        this.tileWidth = levels[0]["level1"].tilewidth; //width in pixels of individual tiles
        this.tileHeight = levels[0]["level1"].tileheight; //height in pixels of individual tile
=======
    constructor(level, tileSheetPath) {
        this.path = tileSheetPath;
        this.levelNumber = level - 1; //to get the index array
        this.width = level2[0].width; //width in number of tiles
        this.height = level2[0].height; //height in number of tiles
        this.tileWidth = level2[0].tilewidth; //width in pixels of individual tiles
        this.tileHeight = level2[0].tileheight; //height in pixels of individual tile
>>>>>>> 0976291a3a5125489226d4a75fbb6edce5ecdbfb
        this.frameLeft = 0;
        this.frameTop = 0;
        this.tileTypes = Object.freeze({'Air':0, 'Grass':26, 'Dirt':30, 'Right lip':18, 'Left lip':25});
    }

    init() {
        //Create 2d array for tile objects
        this.tileArray = new Array(this.height);

        for (var i = 0; i < this.tileArray.length; i++) {
            this.tileArray[i] = [];
        }

        //Create 2d array of numbers from the level data
        this.dataArray = new Array(this.height);

        for (var i = 0; i < this.dataArray.length; i++) {
            this.dataArray[i] = new Array(this.width);
        }

        //Get the values from levelData and load them into an array we can reference
<<<<<<< HEAD
        for(var i = 0; i < (this.width * this.height); i += this.width)
        {
            for(var j = 0; j < this.width; j++)
            {
                this.dataArray[i / this.width][j] = levels[0]["level1"]["layers"][0]["data"][i + j];
            }
        }

        for(var i = 0; i < this.height; i++)
        {
            for(var j = 0; j < this.width; j++)
            {
=======
        for (var i = 0; i < (this.width * this.height); i += this.width) {
            for (var j = 0; j < this.width; j++) {
                this.dataArray[i / this.width][j] = level2[0].layers[0].data[i + j];
            }
        }

        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
>>>>>>> 0976291a3a5125489226d4a75fbb6edce5ecdbfb
                //Change the sprite's frame sizes based on what tile we want to create
                if (this.dataArray[i][j] === this.tileTypes['Grass']) {
                    this.frameLeft = 280;
                    this.frameTop = 210;
                } else if(this.dataArray[i][j] === this.tileTypes['Dirt']) {
                    this.frameLeft = 70;
                    this.frameTop = 280;
                } else if(this.dataArray[i][j] === this.tileTypes["Left lip"]) {
                    this.frameLeft = 210;
                    this.frameTop = 210;
                } else if(this.dataArray[i][j] === this.tileTypes["Right lip"]) {
                    this.frameLeft = 208;
                    this.frameTop = 140;
                } else {
                    this.frameLeft = 400;
                    this.frameTop = 200;
                }

                //lastly push the new tile to the 2d array
<<<<<<< HEAD

                


                this.tileArray[i].push(new Tile(j * this.tileWidth,
                    i * this.tileHeight,
                    this.frameLeft,
                    this.frameTop,
                    this.tileWidth,
                    this.tileHeight,
                    gameNs.game.ctx));



=======
                this.tileArray[i].push(new Tile(j * this.tileWidth, 
                                                i * this.tileHeight, 
                                                this.frameLeft, 
                                                this.frameTop, 
                                                this.tileWidth, 
                                                this.tileHeight, 
                                                this.dataArray[i][j]));
>>>>>>> 0976291a3a5125489226d4a75fbb6edce5ecdbfb
            }
        }
    }

    render() {
        for (var i = 0; i < this.height; i++) {
            this.tileArray[i].forEach(function(element) {
                element.render();
            });
        }
    }
}
