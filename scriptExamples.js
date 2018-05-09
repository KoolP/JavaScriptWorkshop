//Prompts value
var promptsValue = prompt('give prompts value');
alert(promptsValue);
alert(promptsValue + 4);
//?
//gives 24?
//(Notera dock att '2' + 2 skulle resultera i '22', p.g.a. en mekanism som kallas för typtvång (type coercion).)
//Undefined even prompt written in prompt..
//undefined produceras eftersom att det inte finns någonting intressant att rapportera vid en tilldelning, returvärdet undefined.

//Console-log
var textThatWasWritten = prompt('Put text here');
console.log(textThatWasWritten);


//DATATYPES

//String + radbyte
var signature = 'Med vänlig hälsningar,\nJon';
//same
var signature = 'Med vänliga hälsningar,' + '\n' + 'Jon';

//number
var a = 2;
var b = 3;
var c = a + b;


//Array
var numbers = [1, 2, 3];
alert(numbers[0]);
//can do:
[1, 1, 'Hej', true]
[]

//Object
var person = {
  name: 'Jon',
  age: 32
};
alert(person.name);
//empty
{}


//Functions
//funktionsdeklaration
function add(a, b) {
  return a + b;
}

//functionsuttryck, obs har semicolon i slutet
var add = function add(a, b) {
  return a + b;
};


//CONTROLLSTUCKTURES
//if
if (age > 18) {
  alert('You are an adult');
} else {
  alert('You are not adult')
}
//if or Switch
if (day == 0) {
  return 'Maanantai';
} else if (day == 1) {
  return 'Tiistai';
} else if (day == 2) {
  return 'Keskiviikko';
} else if (day == 3) {
  return 'Torstai';
} else if (day == 4) {
  return 'Perjantai';
}
//Switch OBS put isnide function
switch (day) {
  case 0:
    return 'Monday';
  case 1:
    return 'Tuesday';
  case 2:
    return 'Wednesday';
    break;
  default:
    return 'I dont know the day';
}

//Making switch act as if with break:
var test = function(day) {
  switch (day) {
    case 0:
      alert('Noll');
      break;
    case 1:
      alert('Ett');
      break;
    case 2:
      alert('Två');
      break;
  }
}
test(1);

//if can also use else
if (day == 0) {
  alert('Noll');
} else if (day == 1) {
  alert('Ett');
} else if (day == 2) {
  alert('Två');
} else {
  alert('Någonting annat');
}

//Once more switch:
switch (day) {
  case 0:
    alert('Noll');
    break;
  case 1:
    alert('Ett');
    break;
  case 2:
    alert('Två');
    break;
  default:
    alert('Någonting annat');
    break;
}

//while
var a = 8;
while (a > 4) {
  alert('a is bigger than 4');
  a--;
}

var i = 0;
while (i < 10) {
  alert('Executes')
  i++;
}

//for
for (var i = 0; i < 10; i++) {
  alert('Ajaa');
}
//for är alltså en loop-konstruktion, likt while, som är mer specialiserad än while, men som i fall där den är lämpad gör ett bättre jobb.