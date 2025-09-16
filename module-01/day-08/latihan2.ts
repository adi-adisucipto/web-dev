interface Person {
    name: string
    health: number;
    power: number;

    showStatus: () => void
    useItem: (item: {health: number, power: number}) => void
    damage: (power: number) => void
}

interface Persons {
    player1: Person;
    player2: Person;
}

class Player implements Person{
    name: string;
    health: number;
    power: number;

    constructor(name:string, health: number = 100, power: number = 10){
        this.name = name;
        this.health = health;
        this.power = power;
    }

    damage(power: number): void{
        this.health -= power
        if(this.health < 0){
            this.health = 0;
        }
    }

    useItem(item: {health: number, power: number}): void{
        this.health += item.health;
        this.power += item.power;
    }

    showStatus(): void{
        console.log(`${this.name}: (Health: ${this.health} & Power: ${this.power})`)
    }
}

class ShootingGame implements Persons {
    player1;
    player2;
    constructor(player1: Person, player2: Person){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem(): {health: number, power: number}{
        let a = [0, 10];
        let healthRand = Math.floor(Math.random() * 2)
        let powerRand = Math.floor(Math.random() * 2)
        return {
            health: a[healthRand],
            power: a[powerRand]
        }
    }

    start(): void{
        console.log("Game Started!");
        let turn: number = 1;

        while(this.player1.health > 0 && this.player2.health > 0){
            console.log(`Turn ${turn}`);

            const shooter: Person = turn % 2 !== 0 ? this.player1 : this.player2;
            const target: Person = turn % 2 !== 0 ? this.player2 : this.player1;

            console.log("Before Shooting");
            shooter.showStatus();
            target.showStatus();

            const itemForShooter = this.getRandomItem();
            const itemForTarget = this.getRandomItem();

            shooter.useItem(itemForShooter);
            target.useItem(itemForTarget);

            console.log(`${shooter.name} menadapatkan +${itemForShooter.health} health dan +${itemForShooter.power} power`)
            console.log(`${target.name} menadapatkan +${itemForTarget.health} health dan +${itemForTarget.power} power`)

            console.log(`${shooter.name} shoot ${target.name}`)
            target.damage(shooter.power);

            console.log("After Shooting");
            shooter.showStatus();
            target.showStatus();

            turn++
        }

        console.log("\n--- Game Over ---");
        if (this.player1.health <= 0) {
            console.log(`${this.player2.name} wins! 🎉`);
        } else {
            console.log(`${this.player1.name} wins! 🎉`);
        }
    }
}

const player1 = new Player("Adi");
const player2 = new Player("Dimas");

const shootingGame = new ShootingGame(player1, player2)
shootingGame.start();