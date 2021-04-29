function hero_onMoveComplete(hero) {
    var aftermove = {
        x: hero.getPosition().x,
        y: hero.getPosition().y
    }
    //hero.mov_points -= Math.floor(Math.sqrt(Math.pow(Math.abs(hero.beforemove.x-aftermove.x),2) + Math.pow(Math.abs(hero.beforemove.y-aftermove.y),2)));
    hero.mov_points -= hero.last_move;
    hero.last_move = 0;
    _.objScores.getSpriteByName("Movement points").setText(hero.mov_points);

    hero.beforemove = {
        x: hero.getPosition().x,
        y: hero.getPosition().y
    }    
}

function hero_onKeyUp(data, hero) {
    // all the hero actions here (pick-up, change weapon, etc
    // NO movements. Only mouse clicks
}