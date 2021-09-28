///// Soal 1 /////
console.log("----- SOAL 1 -----")
console.log("----- Release 0 -----")

class Animal {
  constructor(animal){
    this._name = animal;
	this._legs = 4;
	this._cold_blooded = false;
  }
  get name(){
	return this._name;
  }
  get legs(){
	return this._legs;
  }
  get cold_blooded(){
	return this._cold_blooded ;
  } 
  set legs(x){
	this._legs = x;
  }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)

///// Soal 2 /////
console.log("----- Release 1 -----")

class Ape extends Animal {
  constructor(animal){
	super(animal);
	this._yell = "Auooo"
  }
  yell(){
	return console.log(this._yell);
  }
  legs(x){
	this._legs = x;
  }
}

class Frog extends Animal {
  constructor(animal){
	super(animal);
	this._jump = "hop hop"
  }
  jump(){
	return console.log(this._jump);
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

///// Soal 2 /////
console.log("\n----- SOAL 2 -----")

class Clock {
  constructor({ template }) {
	this._template = template;
	this._timer;
  }
  render() {
	var date = new Date();

	var hours = date.getHours();
	if (hours < 10) hours = '0' + hours;
	
	var mins = date.getMinutes();
	if (mins < 10) mins = '0' + mins;
	
	var secs = date.getSeconds();
	if (secs < 10) secs = '0' + secs;
	
	var output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
	
	console.log(output);
  }
  stop() {
	clearInterval(this._timer)
  }
  start() {
	this.render();
    this.timer = setInterval(() => this.render(), 1000)
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 
