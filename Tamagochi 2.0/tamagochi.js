class Pets{

	id = 0;
	name = "user_default";
	age = 0;
	life = 100;
	hungry = 0;
	sleeping = 0;
	bored = 0;
	happy = 100;

	constructor(){
		this.createdTime = this.getActualTime();
	}

	getActualTime(){
		var d = new Date();
		var actualTime = d.getTime();
			return actualTime;
	}

	setId(id){
	this.id = id
	}

	setName(name){
	this.name = name
	}

	setAge(ageValue){
		var newAge =  this.age + ageValue;
		if(newAge >= 100){
			newAge = 100;
		}
		this.age = newAge;
	}

	setLife(lifeValue){
	var newLife = this.life - lifeValue;
		if(newLife < 0){
			newLife = 0;
		}
		this.life = newLife;
	}

	setHungry(foodValue){
		let newHungry = this.hungry - foodValue;
		if(newHungry < 0){
			newHungry = 0;
		}
		this.hungry = newHungry;
	}

	setSleeping(breatherValue){
		let newSleeping = this.sleeping - breatherValue;
		if(newSleeping < 0){
			newSleeping = 0;
		}
		
		this.sleeping = newSleeping;
	}

	setBored(funnyValue){
		let newBored = this.bored - funnyValue;
		if(newBored < 0){
			newBored = 0
		}
		this.bored = newBored;
	}

	isDead(){
			if(this.life <= 0){
				return true;
			}
			return false;
	}
}

class House{

	refrigerator = 50;
	ball = 6;
	bed = 30;
	toys = 12;
	sofa = 15;
}
	//let refrigerator = array("Carne" => 10, "Verduras" => 20, "agua" => 20, "Golosinas" => 5);

var pets = new Pets;
var house = new House;

var intervalMiliSeconds = 100;
	setInterval(() => { 
		petsData(pets);
	

		console.log(pets);

}, intervalMiliSeconds);

var intervalMiliSeconds = 1000 //3600000; // 1 hora
	setInterval(() => { 
		incrementStats();
		decrementStats();

}, intervalMiliSeconds);

var intervalMiliSeconds = 1000//86400000; //1 dia
	setInterval(() => { 
		incrementAge();

}, intervalMiliSeconds);

function incrementStats(){ 
	if(pets.hungry < 100){
		pets.hungry = pets.hungry + 10;
	}

	if(pets.sleeping < 100){
		let	sleeping = 10;
		if(pets.bored > 50){
			sleeping = sleeping + 2;
		}
		if(pets.sleeping + sleeping >= 100){
			pets.sleeping = 100;
			return;
		}
		pets.sleeping = pets.sleeping + sleeping;		
	}

	if(pets.bored < 100){
		pets.bored = pets.bored + 10;
	}	
}

function decrementStats(){
		let life = 1;

		if(pets.hungry > 50){
			life = life + 2;
		}

		if (pets.sleeping > 70){
			life = life + 2;
		}
		
		pets.setLife(life);	
}


function petsData(pets){
	var petLife = document.getElementsByClassName('LifeValue')[0];
	var petAge = document.getElementsByClassName('AgeValue')[0];
	var petHungry = document.getElementsByClassName('HungryValue')[0];
	var petSleeping = document.getElementsByClassName('sleepingValue')[0];
	var petBored = document.getElementsByClassName('BoredValue')[0];

  petLife.innerHTML = pets.life;
  petAge.innerHTML = pets.age;
  petHungry.innerHTML = pets.hungry;
  petSleeping.innerHTML = pets.sleeping;
  petBored.innerHTML = pets.bored;
}

function feedPet(){
	//if(house.refrigerator > 0){
		pets.setHungry(10);
		//house.refrigerator = house.refrigerator - 1;
	//}
}

function playWhitBall(){
	pets.setBored(10);
}

function playWhitToys(){
	pets.setBored(20);
}

function breatherInSofa(){
	pets.setSleeping(20);
}

function breatherInBed(){
	pets.setSleeping(50);
}

function consumeLife(){
	pets.setLife(1)
}

function incrementAge(){
	pets.setAge(1)
}


/*
complejizar el juego.
imagenes: modificar imagenes de acuerdo a la edad de la mascota
0-5: huevo
5-10:infante
10-15:pre teen
15-20:teen
20-50: adulto - en los 30, posibilidad de tener otra mascota.
50-100: persona mayor.

modificar botones: de acuerdo a las edades, se podran realizar diferentes operaciones
etapa huevo: abrigar, cantar, jugar, (abierto)
etapa infante: jugar, bañar, cantar, dormir, (abierto)
etapa pre teen: jugar (otras opciones), ordenar la casa, (abierto)
etapa teen: estudiar, (abierto)
etapa adulto: trabajar, (abierto)
etapa persona mayor: (abierto)

cumplir objetivos: en cada etapa se deberan cumplir ciertos objetivos.
huevo: abrigar 1 vez al dia (abierto)
infante: jugar y bañarse al menos 5 veces (abierto)
pre teen: jugar a la pelota al menos 4 dias consecutivos
teen: estudiar, limpiar, organizar una fiesta y limpiar
adulto: cambiar de trabajos 2 veces ( crear periodico)




*/