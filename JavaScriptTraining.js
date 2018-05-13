//Hold on!
//Functional Programming, no variables
//Calling another method in amethod
test(successor(5))

function successor(a) {
  myNum = (a + 1);
  return myNum;
}

//
function test() {
  return (myNum - 1);
}

var predecessor = function(myNum) {
  return (myNum - 1);
}
//var m = predecessor(n);
//var o = predecessor(successor(5));

//Upg 3
//with if
function not(v) {
  if (v == true) {
    return false;
  } else {
    return true;
  }
}

//styled with if
function not2(b) {
  if (b) {
    return false;
  } //else
  return true;
}

//without if
function not3(b) {
  return !b;
}

//console.log(not3(true), not3(false));

//upg 4
function successor2(a) {
  return ++a;
}

//upg 5
function authenticate(userName, passWord) {
if (userName == 'jonkri' && passWord == 'secret') {
  return true;
}else {
  return false;
}
}

// console.log(authenticateV('jonkri', 'secret'));
// console.log(authenticateV('jonkri', 'passWord'));

//short version
function authenticateS(userName, passWord) {
  return userName === 'jonkri' && passWord === 'secret';
}

 // console.log(authenticateS('jonkri', 'secret'));
 // console.log(authenticateS('jonkri', 'passWord'));

var authenticateV = function(u, p) {
  return u === 'jonkri' && p === 'secret';
};

// console.log(authenticateV('jonkri', 'secret'));
// console.log(authenticateV('jonkri', 'passWord'));


// upg 6
function authObject (user){
  return user.userName === 'jonkri' && user.passWord === 'secret';
}

// console.log(authObject({userName: 'jonkri', passWord: 'secret'}));

//Upg 7
function radiusToArea(radius){
  return radius * radius * Math.PI;
}

//console.log(radiusToArea(5));

//upg 8
//r?
//area = r * r * pi
//area / pi = r * r
//area / pi = r^2        extra: r^2= Math.pow(r, 2)
//Math.sqrt(area / PI) = Math.sqrt(r * r)
//Math.PI(area / PI) = r

function areaToRadius(area) {
return Math.sqrt(area / Math.PI);
}
//console.log(areaToRadius(78.53981633974483));


//upg 9
//while loop

function radiusesToTotalArea(radius) {
  var totalArea= 0;
  var i = 0;

  while (i < radius.length) {
    if(radius[i] >=0 ) {
    totalArea = totalArea + radiusToArea(radius[i]);
  }
    i++;
  }
  return totalArea;
}

console.log(radiusesToTotalAreaFor([5,10]));
console.log(radiusesToTotalAreaFor([5,10,-5]));

//same dith for loop, sammanfoogar while i= 0 och i++

function radiusesToTotalAreaFor(radius) {
  var totalArea = 0;

  for (var i=0; i<radius.length; i++) {
    if (radius[i] >=0 ) {
    totalArea = totalArea + radiusToArea(radius[i]);
  }
  }
  return totalArea;
}


//upg 10
function isPositive(value) {
  return value >= 0;
}

function radiusesToTotalAreaFilter(radius) {
  var filteredRadiuses = radius.filter(isPositive);
  var totalArea = 0;

  for (var i=0; i<filteredRadiuses.length; i++) {
    totalArea = totalArea + radiusToArea(filteredRadiuses[i]);
  }
  return totalArea;
}

//Why not?
//for (var i=0; i<radius.length && radius.filter(isPositive); i++)
function radiusesToTotalAreaFilter2(radius) {
  var totalArea = 0;

  for (var i=0; i<radius.filter(isPositive).length; i++) {
    totalArea = totalArea + radiusToArea(radius[i]);
  }
  return totalArea;
}

//with highorder method reduce
function radiusesToTotalAreaFilter3(radius) {
  return radius.filter(isPositive).reduce(function (accumulator, currentValue) {
    return accumulator + radiusToArea(currentValue);
  }, 0);
}


//Upg11
//börjar ed vokal?
function stringToVowelStructure(string) {
  var numberOfVowels = 0;
  var startsWithVowel;
  //or have startsWithVowel as false from beginning and take the else away


  if (string.charAt(0).toLowerCase() === 'a') {
    startsWithVowel = true;
  } else if (string.charAt(0).toLowerCase() === 'e') {
    startsWithVowel = true;
  } else if (string.charAt(0).toLowerCase() === 'i') {
    startsWithVowel = true;
  } else if (string.charAt(0).toLowerCase() === 'o') {
    startsWithVowel = true;
  } else if (string.charAt(0).toLowerCase() === 'u') {
    startsWithVowel = true;
  } else if (string.charAt(0).toLowerCase() === 'y') {
    startsWithVowel = true;
  } else {
    return false;
  }

  // for (var i=0; i>string.length; i++) {
  //   if (i=a,e,i,o,u,y,å,ä,ö) {
  //     numberOfVowels = i++;
  //   }
  // }
  return {
    value: string,
    startsWithVowel: startsWithVowel,
    numberOfVowels: 2
  }

}


//Upg11 with switch
//börjar ed vokal?
function stringToVowelStructure2(string) {
  var numberOfVowelsArray = [];
  var numberOfVowels = 0;
  var startsWithVowel;
  //or have startsWithVowel as false from beginning and take the else away

  switch (string.charAt(0).toLowerCase()) {
    case 'a': startsWithVowel= true; break; //break behövs här!
    case 'e': startsWithVowel= true; break; //kan komprimera
    case 'i': startsWithVowel= true; break;
    case 'o': startsWithVowel= true; break;
    case 'u': startsWithVowel= true; break;
    case 'y': startsWithVowel= true; break;
    default:
      startsWithVowel = false; break;
  }

  for (var i=0; i<string.length; i++) {
    switch (string.charAt(i).toLowerCase()) {
      case 'a': case 'e': case 'i': case 'o': case 'u': case 'y':
      numberOfVowels++;
    }
  }

//What is wrong?
  for (var i=0; i<string.length; i++) {
    if (string.charAt(i).toLowerCase()) {
      numberOfVowelsArray.push(i++);
    }
  }


  return {
    value: string,
    startsWithVowel: startsWithVowel,
    numberOfVowels: numberOfVowels,
    nummberOfVowelsArray: numberOfVowelsArray.length
  }
}


// Remove duplictaes from Arrays
// First of all check this omslut
//If you ask for an index of a value that does not exist i will return -1
function putteTestArray() {
let a = [1,2,5,2,1,8];
var index = a.indexOf(6);
console.log(index);
}
//so
function removesDuplicateFromArray() {
  let array1 = [1,2,5,2,1,8];
  let array2 = [];

  for(var i=0; i<array1.length; i++) {
    //chaeck arrray 2 for non-indexes "doublettes"
    if(array2.indexOf(array1[i]) === -1) {
      array2.push(array1[i]);
    }
  }
  return array2;
}
console.log(removesDuplicateFromArray());

//With dictonary with unique key value pairs
function removesDuplicateFromArray2() {
  let array1 = [4,4,5,2,1,8];
  obj = {};

  for (var i of array1){
    obj[i] = true;
  }
  var array2 = Object.keys(obj);
  console.log(array2);
}

//Javascript2016 set, set stores unique values only
function removesDuplicateFromArray3() {
    let array1 = [4,4,5,2,1,8];
    let array2 = new Set(array1)
    console.log(array2);
}

//same but convert set to array. Uses spread operator-> ...
function removesDuplicateFromArray4() {
  let array = [4,4,4,5,6,7];
  console.log([... new Set(array)]);
}


//SPREAD OPERATOR by Bucky
// ...
//
function addNums(a,b,c) {
  console.log(a+b+c);
}
//no spread
//var nums [3,3,3];
// addNums(nums[0], nums[1], nums[2]);
//with SPREAD
//addNums (...nums);
//Lets' tes spread with adding array inside another between things:
var meats = ['bacon', 'ham'];
var food = ['apples', ...meats, 'kiwi', 'rice'];
//spread joke time:
var dude = ['dick'];
var woman = ['legLeft', ...dude, 'legRight'];



//UPG 12
// var cityArray = (parseCsv("Stockholm,1372565\nGöteborg,549839\nMalmö,280415\nUppsala,140454\nVästerås,110877\nÖrebro,107038\nLinköping,104232\nHelsingborg,97122\nJönköping,89396\nNorrköping,87247"));
//
// console.log(cityArray[0][0]);
// console.log(cityArray[0][1]);
//
// function parseCsv(string) {
//     return string.split('\n').map(function(row) {
//       return row.split(',');
//     });
// }


//UPG 13
var csv = "Stockholm,1372565\nGöteborg,549839\nMalmö,280415\nUppsala,140454\nVästerås,110877\nÖrebro,107038\nLinköping,104232\nHelsingborg,97122\nJönköping,89396\nNorrköping,87247";
var tsv = "Stockholm\t1372565\nGöteborg\t549839\nMalmö\t280415\nUppsala\t140454\nVästerås\t110877\nÖrebro\t107038\nLinköping\t104232\nHelsingborg\t97122\nJönköping\t89396\nNorrköping\t87247";

// console.log(cityArray2[0][0]);
// console.log(cityArray2[0][0]);

//Puttes lösning
function parse(string, d) {
    return string.split('\n').map(function(row) {
      if (d === 'csv'){
      return row.split(',');
    } else if (d === 'tsv'){
      return row.split('\t');
    }
    });
}


//PARSE2
//Parametrisering nice
function parse2(string, char) {
    return string.split('\n').map(function(row) {
      return row.split(char);
    });
}
//anropa metod via variabel
// var arrayUno = parse2(csv, ',');
// var arrayDeux = parse2(tsv, '\t');
// console.log(arrayUno[1][1]);
// console.log(arrayDeux[1][1]);


//PARSE3
//Med true/false låsning, hmm kanske inte..

function parse3(string, isCsv) {
  var separator;

  if(isCsv) {
    separator = ',';
  }else {
    separator = '\t';
  }
  return string.split('\n').map(function(row) {
    return row.split(separator);
  });
}

//anropa metod via variabel
// var array3 = parse3(csv, true);
// var array4 = parse3(tsv, false);
// console.log(array3[1][1]);
// console.log(array4[1][1]);


//PARSE4
//very nice! Conditional operatpr. Takes 3 arguments on return isCvs om true:, eller om false: \t
function parse4(string, isCsv) {
    return string.split('\n').map(function(row) {
      return row.split(isCsv ? ',' : '\t');
    });
}

var array6 = parse4(csv, true);
var array7 = parse4(tsv, false);
console.log(array6[1][1]);
console.log(array7[1][1]);


//PutteTestaa
var arkisto = [];
//var klikki = lataaArkistoo(true)

function lataaArkistoo(osuma) {
  if (osuma === 1) {
    arkisto.push('ruisleipä', 'maito');
  } else if (osuma === 2){
    arkisto.push('ruisleipä', 'maito', 'voi');
  }
  //Varför kan man inte returnere en return var arkistoToText?
  return arkistoToText = arkisto.join(" - ");
}


// UPG 14
var gronsakArr = ['tomat', 'gurka', 'selleribanan'];
var mysteryWord = gronsakArr[Math.floor(Math.random() * gronsakArr.length)];
//var guessesLeft = 3;
var s;
var count = 0;
var answeredArr = [];

function startUp() {
  var bokstav = alert("Gissa bokstav på en gömd grönsak");

  for (var i =0; i < mysteryWord.length; i++) {
    answeredArr[i] = "-";
  }
  s = answeredArr.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function Letter() {
  console.log("Letter function fired");
  console.log(mysteryWord.count);
  //Here we get the lette user typed
  var letter = document.getElementById("letter").value;
  //make sure we have a guessesLeft
  if (letter.length > 0) {
    for (var i=0; i < mysteryWord.length; i++){
      //if mysteryWord contains a lette that is typed in
      if (mysteryWord[i] === letter) {
        //assign it to letter
        answeredArr[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "Clicks: " + count;
    document.getElementById("answer").innerHTML = answeredArr.join(" ");
  }
  //annoy
  // if (count>2){
  //   document.getElementById("stat").innerHTML = "Come on";
  // }
  if (answeredArr.includes("-")) {
    document.getElementById("stat").innerHTML = "Come on, not yet";
  } else {
    document.getElementById("stat").innerHTML = "Yay Congrats! You got the word";
  }

}
