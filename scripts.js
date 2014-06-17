var playerTurn = 1;
var enemyTurn = 0;
var txt = 'Gaan met die banaan! <br />';
var enemyDead = 0;

function battle() {
    
    var weapon = player.currentWeapon;
    
    
    if(playerTurn == 1 && enemy_ferri.health > 0){
        var attackPower = player.attack + fists.attackBonus;
        var enemyHealth = enemy_ferri.health;
        var attackBonus = fists.attackBonus;
        
        
        
        var hit = Math.floor(Math.random() * attackPower) + attackBonus;
        
        if(enemy_ferri.health - hit > 0 && enemyDead != 1){   
            enemy_ferri.health -= hit
            txt += "You hit " + hit + " to " + enemy_ferri.name + ". He now has " + enemy_ferri.health + "HP left. <br />"; 
        } else {
           txt += "You hit " + hit + " to " + enemy_ferri.name + ". He's dead now, good job. <br />"; 
            enemyDead = 1;
        }

        document.getElementById('tester').innerHTML = txt;
        playerTurn = 0;
        enemyTurn = 1; 
    } if(playerTurn != 1 && player.health > 0 && enemyDead != 1) {
        
        
        var hit = Math.floor(Math.random() * enemy_ferri.attack) + 1;
        
          
            player.health -= hit
            txt += "You got hit for " + hit + ". You now have " + player.health + "HP left. <br />"; 
        
        
        
        document.getElementById('tester').innerHTML = txt;
       
        playerTurn = 1;
        enemyTurn = 0;
        
    }
}