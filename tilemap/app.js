App = function()
{
    this.load = function()
    {
        
    };
    
    this.init = function()
    {
        
        wade.loadScene("scene1.wsc", true, function() {
                // now add a monster 
                
                let aMonster = _.Monsters.clone();
                aMonster.setPosition(32*1, 32*2);
                wade.addSceneObject(aMonster,true);
                
                aMonster =  _.Monsters.clone();
                aMonster.setPosition(32*2, 32*2);
                wade.addSceneObject(aMonster,true);
                this.load_dungeon(null);
                
        },  this);
        wade.setCameraTarget(_.objHero,0.3);
    };
    
    this.onMouseDown = function(data)  {
        //console.log(data);
        //console.log("Mouse pressed somewhere");
        var coords = wade.tilemap.getTileCoordinates(data.screenPosition.x,data.screenPosition.y);
        if (coords.valid) {
            var tile_data = wade.tilemap.getTileData(coords.x, coords.y);
            //console.log("It's on a tile");
            var hero = _.objHero.getBehavior("TilemapCharacter");
            hero.coords =  wade.tilemap.getTileCoordinates(_.objHero.getPosition().x,_.objHero.getPosition().y); 
            //var path_length = Math.abs(hero.coords.x-coords.x)+Math.abs(hero.coords.y-coords.y);
            //console.log(path_length);
            var dist = Math.floor(Math.sqrt(Math.pow(Math.abs(hero.coords.x-coords.x),2) + Math.pow(Math.abs(hero.coords.y-coords.y),2)));
            if(dist<2 && _.objHero.mov_points>=dist) {
                if (tile_data.name == 'wall') {
                    console.log("There's a wall here. Wield a pickaxe to dig throug it");
                    let sprite = wade.tilemap.getTileSprite(coords.x, coords.y);
                    sprite.setVisible(false); // but it's still there, only not visible
                    return true;
                }
                _.objHero.old_coords = hero.coords; //maybe not needed anymore
                hero.setDestination(coords);
                _.objHero.last_move = dist;
            } else {
                console.log("Moving too far away, or not enough points");
            }
        } else {
            console.log("Out of the map");
        }
        return true;
    };

};

