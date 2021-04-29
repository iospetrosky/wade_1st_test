// this is actually a method of App (curious)
function load_dungeon(id_dungeon) {
    // for now we ignore the ID dungeon
            
        var myMap = ["wall_top_corner", "wall_horiz", "wall_horiz" , "wall_horiz" , "wall_top_corner",
                     "wall_vert", "floor" , "floor", "floor","wall_vert",
                     "wall_vert" , "floor", "floor", "floor","wall_vert",
                     "wall_vert" , "floor", "floor", "floor","wall_vert",
                     "wall_bot_corner", "wall_horiz","floor", "wall_horiz", "wall_bot_corner"];
                     
        var tileTemplates =
        {
            "wall_horiz":{
                "scale": 1,
                "name": "wall",
                "texture": "nh_tile_map.png",
                "collision": true,
                "rotation": 0,
                "type": "terrain tile",
                "imageArea": {
                    "minX": 0.1,
                    "minY": 0.0,
                    "maxX": 0.2,
                    "maxY": 0.1
                }
            },
            "wall_top_corner":{
                "scale": 1,
                "name": "wall",
                "texture": "nh_tile_map.png",
                "collision": true,
                "rotation": 0,
                "type": "terrain tile",
                "imageArea": {
                    "minX": 0.2,
                    "minY": 0.0,
                    "maxX": 0.3,
                    "maxY": 0.1
                }
            },
            "wall_bot_corner":{
                "scale": 1,
                "name": "wall",
                "texture": "nh_tile_map.png",
                "collision": true,
                "rotation": 0,
                "type": "terrain tile",
                "imageArea": {
                    "minX": 0.3,
                    "minY": 0.0,
                    "maxX": 0.4,
                    "maxY": 0.1
                }
            },
            "wall_vert":{
                "scale": 1,
                "name": "wall",
                "texture": "nh_tile_map.png",
                "collision": true,
                "rotation": 0,
                "type": "terrain tile",
                "imageArea": {
                    "minX": 0.0,
                    "minY": 0.0,
                    "maxX": 0.1,
                    "maxY": 0.1
                }
            },
            "floor":{
                "scale": 1,
                "name": "floor",
                "texture": "nh_tile_map.png",
                "collision": false,
                "rotation": 0,
                "type": "terrain tile",
                "imageArea": {
                    "minX": 0.1,
                    "minY": 0.1,
                    "maxX": 0.2,
                    "maxY": 0.2
                }
            }
        };
    
        wade.tilemap.init(
        {
            numTiles:{x:5, y:5},
            tileSize:{x:32, y:32}
        });
        wade.tilemap.setTiles(myMap, tileTemplates);        
    }