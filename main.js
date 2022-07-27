console.log('Hello World!');

const human = {
  name: "Radha",
  age: 19,
  gender: "female",
  hands: 2,
  legs: 2,
  given_multiple_exams: true,
  favourite_actor: [" S.S.Rajput ", " Selena gomez  ", " Jeon Jungkook ", ],

  write: function() {
    console.log(" Radha write a diary of every memoriable days! ");
  }
}

console.log(human);
console.log(human.name);
console.log(human["favourite_actor"]);
human.write();
console.log(human.given_multiple_exams);

var gj = " Human having " + human.hands + " hands  & " + human.legs + " legs .";
console.log(gj);


const bird_Downy = {
  name: "Downy bird ",
  wings: 2,
  types: "woodpeakers",
  color: [" black ", "white"],
  bird_can_swim: false,

  peakers: function() {
    console.log(" Downy  peak a  big hole on treewood ! ");
  },

  nest: function() {
    console.log("downy live on tree .");
  }
}

console.log(bird_Downy);
console.log(bird_Downy.name);
console.log(bird_Downy.types);
bird_Downy.peakers();
console.log(bird_Downy.bird_can_swim);

// next i.g.=>...

const bird_Duck = {
  name: "Duck",
  wings: 2,
  types: "woodpeakers",
  color: " white ",
  can_fly: true,

  swim: function() {
    console.log(" Duck can  swim easily ! ");
  },

  nest: function() {
    console.log(" Duck alway live on ground around lake  ^")
  }
}

console.log(bird_Duck);
console.log(bird_Duck.name);
console.log(bird_Duck.color);
bird_Duck.swim();
console.log(bird_Duck.can_fly);

// Array of strings

const Birds = [bird_Downy, bird_Duck];

 var procedure = Birds[1];
  console.log (procedure);
  procedure.nest();
  
 var procedure1 = Birds[0];
  console.log (procedure1);
  procedure1.nest();
  
 var output = (Birds [0] .wings / Birds [1] .wings );
  console.log (output);