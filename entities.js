var player = ({
    health: 100,
    attack: 50,
    name: '',
    defense: 25,
    currentWeapon: 'fists'
});

var enemy_ferri = ({
    health: 100,
    attack: 25,
    name: 'Ferri',
    defense: 10
});

function Monsters(health, attack){
    health = this.health;
    attack = this.attack;
}

