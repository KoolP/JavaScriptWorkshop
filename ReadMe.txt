
Programmering för iPhone och Android (Web)
by: Jonkri


Övning 1

Workshop 1: Repetition: JavaScript

Målet med denna workshop är att repetera några grundläggande JavaScript-koncept från kursen Internet grundkurs. Det är väsentligt att cementera dessa JavaScript-kunskaper, eftersom att resten av kursen kommer att bygga vidare på dessa.

Bakgrundsmaterial

Detta repetitionsmaterial är ett komplement till Modul 7-8 i Internet grundkurs-kursen.

JavaScript i webbläsarens konsol

Det snabbaste och enklaste sättet att komma igång med att skriva JavaScript-kod är förmodligen genom att gå via webbläsarens så kallade konsol. Detta är ett gränssnitt där användaren kan interagera med webbläsaren programmatiskt. I Firefox görs detta med Ctrl + Shift + K/Command + Option + K. Längst ner i konsolen så finns ett textfält där vi kan mata in instruktioner.



Enter används för att instruera webbläsaren att utföra den eller de instruktioner som har skrivits in. I exemplet ovan anropas den (i webbläsaren inbyggda) alert-funktionen med en sträng ('Detta visas i en dialogruta!') som ett argument. alert anropas (i och med parenteserna, ( och )) och körs, vilket resulterar i en dialogruta likt den nedan.


Om vi kollar i konsolen så ser vi att det står undefined. Detta betyder att anropet till alert-funktionen producerade, “gav tillbaka” eller returnerade, ett undefined-värde. undefined-värdet kan man säga är alert-funktions sätt att säga att den inte har något intressant att meddela den som anropade funktionen.



Vi ser här hur alert har en effekt (visar en dialogruta innehållandes argumentet som vi skickade till funktionen, och stänger ner denna dialogruta när vi klickar på OK) och ett returvärde (i det här fallet det något ointressanta undefined-värdet). Detta kan vara ett bra sätt att tänka kring funktioner: de kan ta argument, de kan ha effekter, och de returnerar (evalueras till) ett värde.

En annan funktion som finns inbyggd i webbläsare är prompt. Denna funktion liknar alert i att den visar en dialogruta, men skiljer sig från alert i att den låter användaren skriva in ett värde, och att den också returnerar värdet som användaren skriver in.

Om vi kör prompt så här…



… så visas en dialogruta som ser ut så här, och som har ett textfält som vi kan skriva in ett värde i:


Så här ser konsolen ut efter det vi har klickat på OK-knappen:



prompt-funktionens returvärde, d.v.s. det värde som prompt producerade åt koden som anropade prompt (vårt funktionsanrop), är alltså det värde som vi skrev in i textfältet. prompt-funktionens effekt, å andra sidan, var att öppna och stänga dialogrutan.

Eftersom prompt returnerar ett värde som förmodligen är användbart, så kan vi spara undan det i en variabel, så att vi kan använda det senare. Variabler kan ses på som behållare som kan innehålla värden. Om vi inte sparar undan värdet som prompt producerar åt oss, så kommer det att försvinna från datorns minne och inte längre vara tillgängligt.



= är den så kallade tilldelningsoperatorn, och gör så att värdet som produceras till höger om operatorn tilldelas till (sparas undan i) variabeln till vänster om operatorn. var skapar en variabel.

Skriver vi sedan in följande text i dialogrutan…


… så ser vi att variabeln textenSomSkrevsIn innehåller texten som vi skrev in:



Vi kan se vad variabeln innehåller genom att skriva in dess namn och trycka på Enter. Vi kan också använda funktionen console.log för att skriva ut variabelns innehåll i terminalen.

Tilldelningen har som effekt att tilldela värdet till höger om =-tecknet till variabeln textenSomSkrevsIn. Tilldelningen producerar (inte returnerar – för det är endast funktioner som returnerar värden – men evalueras till) värdet undefined, samma värde som alert evaluerades till – värdet undefined produceras eftersom att det inte finns någonting intressant att rapportera vid en tilldelning – det är effekten som är det viktiga i det här fallet.

console.log har som effekt att värdet skrivs ut i konsolen. Returvärdet är även här undefined.

JavaScript från HTML

För att infoga JavaScript-kod i en HTML-fil, så är det bara att omsluta koden med <script> och </script>.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Workshop 1</title>
    <script>
      var textenSomSkrevsIn = prompt('Skriv in en text som skall hamna i variabeln textenSomSkrevsIn.');
      console.log(textenSomSkrevsIn);
    </script>
  </head>
  <body>
  </body>
</html>
Det är också möjligt (och ofta att föredra) att placera JavaScript-koden i en separat fil, som endast innehåller JavaScript-kod, och importera denna fil från HTML med script-elementets src-attribut, så här:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Workshop 1</title>
    <script src="workshop1.js"></script>
  </head>
  <body>
  </body>
</html>
För att köra samma JavaScript-kod som i det första exemplet ovan, så skall en JavaScript-fil, workshop1.js, placeras i samma katalog som HTML-filen och innehåller följande kod:

var textenSomSkrevsIn = prompt('Skriv in en text som skall hamna i variabeln textenSomSkrevsIn.');
console.log(textenSomSkrevsIn);
Datatyper

Nedan presenteras de vanligaste datatyperna i JavaScript.

string

För en sekvens av tecken (t.ex. ord eller meningar), såsom “Detta visas i en dialogruta!” ovan, så används datatypen string. Man kan använda antingen ' eller " för att omsluta teckensekvensen, så om man t.ex. vill ha en sträng som innehåller ordet “Hej” så kan man välja mellan att skriva 'Hej' eller "Hej".

Radbrytningar kan inkluderas i strängar med “specialtecknet” “\n”:

var signature = 'Med vänliga hälsningar,\nJon';
Detta producerar följande resultat:

Med vänliga hälsningar,
Jon
På samma sätt kan '- och "-tecken inkluderas med \' och \", men dessa specieltecken behövs endast om strängen omsluts av samma tecken. Det är t.ex. tillåtet att skriva 'Hello "jonkri"', men om strängen hade omslutits med "-tecken så hade man behövt skriva "Hello \"jonkri\"".

Strängar kan slutligen slås ihop med +-operatorn:

var signature = 'Med vänliga hälsningar,' + '\n' + 'Jon';
Resultatet av ovanstående kod är samma som Med vänliga hälsningar-resultatet visat ovan.

number

Heltal och decimaltal i JavaScript är av typen number. 10 och 10.0 är samma nummer. Nummer kan vara negativa eller positiva.

var a = 2;
var b = 2;
var c = a + b;
c ovan kommer att innehålla 4. Eftersom a och b är tal så adderar + istället för att göra strängsammanslagning. (Notera dock att '2' + 2 skulle resultera i '22', p.g.a. en mekanism som kallas för typtvång (type coercion).)

boolean

Det finns endast två möjliga boolean-värden: true (sant) eller false (falskt). 2 > 1 producerar true (eftersom 2 är större än 1), medan 2 < 1 producerar false (eftersom 2 inte är mindre än 1).

array

Ett array-värde är en sammansättning av värden i form av en ordnad lista. Arrays är alltså värden som kan innehålla flera värden.

var numbers = [1, 2, 3];
Ovanstående array (är ett värde men) innehåller tre värden.

För att komma åt värden i dessa listor så använder man hakparenteser (0 in the code below is called an index):

alert(numbers[0]); // 1
Samma värde kan förekomma två gånger i en lista. Man kan också blanda värden av olika typer.

[1, 1, 'Hej', true]
Det är också möjligt att ha tomma array:er:

[]
object

Objekt är grupperingar av värden som hör ihop på något sätt. Som array-värden så är även objekt sammansättningar av värden. Med objekt används dock nycklar istället för index för att komma åt värden.

Om man vill representera en person, så kan man t.ex. skriva så här:

var person = {
  name: 'Jon',
  age: 32
};
person är här ett värde som innehåller två “undervärden”, en string-värde och ett number-värde. name och age är nycklar, medan entiteterna till höger om kolonet är värden.

För att komma åt ett av dessa värden så kan man använda en punkt och namnet på nyckeln, t.ex. så här:

alert(person.name); // Jon
{} skapar ett tomt objekt, d.v.s. ett objekt utan nycklar och värden.

function

Funktioner kan innehålla en samling instruktioner, och går att anropa, så att funktionen körs. Funktioner är även värden, d.v.s. man kan lagra en funktion i en variabel, eller skicka med en funktion som ett argument till en annan funktion.

Man kan skapa funktioner med hjälp av funktionsdeklarationer eller funktionsuttryck.

En funktionsdeklaration är en sats som börjar på ordet “function”, följt av (blanksteg och) funktionens namn, följt av parenteser innehållande eventuella parametrar (variabler för värden som funktionen tar som argument), samt ett kodblock (kod mellan { och }). (Värdena som skickas till en funktion heter argument när man anropar en funktion. Samma värden refereras till som parametrar från perspektivet av funktionen som tar emot värdena (argumenten).)

function add(a, b) {
  return a + b;
}
Ovanstående kod producerar en funktion som heter “add” som kan anropas både innan och efter ovanstående kod.

Ett annat sätt att skapa en funktion är via ett funktionsuttryck. Ett funktionsuttryck är ett värde som man kan tilldela till en variabel, skicka med som argument till en funktion, o.s.v.

var add = function add(a, b) {
  return a + b;
};
Notera två skillnader med ovanstående kod jämfört med funktionsdeklarationsexemplet: Satsen börjar inte med ordet “function” (och det är så vi vet att det inte är en funktionsdeklaration), och satsen avslutas också med ett semikolon, precis som om vi hade tilldelat vår variabel vilket annat värde som helst.

I både exemplen ovan så kan man anropa funktionen som skapats via add följt av parenteser och argument, t.ex. add(2, 2). I det sistnämnda exemplet så måste dock anropet ske efter funktionsdeklarationen, d.v.s. längre ner i koden.

I det sistnämnda exemplet så hade man kunnat utelämna det sistnämnda förekommandet av “add”, eller bytt ut det till något annat ord. Funktionens namn och namnet på variabeln som innehåller funktionen kan alltså vara olika, och funktioner behöver inte ha ett namn (kan vara anonyma).

Funktionsuttrycksdelen är delen efter =-tecknet. Man kan ha ett funktionsuttryck utan att involvera en variabel.

Funktionen ovan har ingen effekt, utan har tar endast parametrar och producerar ett returvärde. Följande funktion har en effekt, men hade returnerat undefined (eftersom att det inte finns en return-sats):

function add(a, b) {
  alert(a + b);
}
Den här funktionen har en effekt, men också returnerat det korrekta värdet:

function add(a, b) {
  alert(a + b);
  return a + b;
}
Den här funktionen har samma funktionalitet som om alert-instruktionen inte hade varit med, eftersom return avslutar exekveringen av funktionen.

function add(a, b) {
  return a + b;
  alert(a + b);
}
Som en utgångspunkt vill man generellt sett undvika effekter, eftersom effekter gör funktioner svårare att resonera kring, testa och återanvända. En funktion som returnerar a + b kan återanvändas i fler sammanhang än en funktion som skapar t.ex. en dialogruta.

Slutligen är det generellt en bra idé att låta funktionen arbeta med argument/parametrar istället för med externa variabler som koden nedan.

var a = 2;
var b = 2;

function add() {
  return a + b;
}

alert(add());
Ovanstående kod fungerar, men den här typen av approach resulterar i kod som är mer komplicerad och svårhanterlig, och är därför generellt sett inte att föredra.

Kontrollstrukturer

Kontrollstrukturer låter ett program ta “olika vägar” beroende på vissa omständigheter (värden). Nedan illustreras if och en relaterad struktur (switch), samt två typer av loop-strukturer (while och for).

if

Ibland vill man köra en viss kod om ett visst kriterie stämmer, men inte annars. Man kanske vill köra en viss kod om en person är under 18, och en annan kod om personen i fråga är 18 eller äldre. Detta går att göra med if.

if (age >= 18) {
  alert('Du är vuxen.');
} else {
  alert('Du är inte vuxen.');
}
Ovanstående kod visar endast en dialogruta. Vilken som visas beror på värdet i age-variabeln.

if can optionally be followed with else and another code block, like above. If the boolean expression within the two parenthesis is evaluated to true then the code block that follows the closing parenthesis is executed, otherwise the code block that follows else is executed.

if kan valfritt efterföljas av else och ett till kodblock, som ovan. Om boolean-uttrycket inom de två parenteserna evalueras till true så kör det kodblock som efterföljer den första stängningsparentesen, annars körs det kodblock som efterföljer else (om något).

if-konstruktionen skall inte avslutas med ett semikolon.

switch

Ibland vill man göra många tester i stil med detta:

if (day == 0) {
    return 'Måndag';
} else if (day == 1) {
    return 'Tisdag';
} else if (day == 2) {
    return 'Onsdag';
} else if (day == 3) {
    return 'Torsdag';
} else if (day == 4) {
    return 'Fredag';
} else if (day == 5) {
    return 'Lördag';
} else if (day == 6) {
    return 'Söndag';
}
I dessa lägen kan det vara lämpligare att använda switch-konstruktionen istället:

switch (day) {
case 0:
    return 'Måndag';
case 1:
    return 'Tisdag';
case 2:
    return 'Onsdag';
case 3:
    return 'Torsdag';
case 4:
    return 'Fredag';
case 5:
    return 'Lördag';
case 6:
    return 'Söndag';
}
switch-konstruktionen kommer att jämföra de olika case-värdena med värdet inom parentesen på switch-raden, tills den hittar ett värde som matchar.

Notera att switch, när ett värde matchar, kommer att fortsätta exekvera instruktioner tills dess att en break-instruktion påträffas.

Följande if-sats visar “Ett”:

function test(day) {
    if (day == 0) {
        alert('Noll');
    } else if (day == 1) {
        alert('Ett');
    } else if (day == 2) {
        alert('Två');
    }
}

test(1);
Följande switch-sats visar dock “Ett” och “Två”:

var test = function (day) {
    switch (day) {
    case 0:
        alert('Noll');
    case 1:
        alert('Ett');
    case 2:
        alert('Två');
    }
}

test(1);
För att få switch-satsen att bete sig som if-satsen, så kan vi lägga in break-instruktioner så här:

var test = function (day) {
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
Som nämnt ovan, så stödjer if också else:

if (day == 0) {
    alert('Noll');
} else if (day == 1) {
    alert('Ett');
} else if (day == 2) {
    alert('Två');
} else {
    alert('Någonting annat');
}
Om vi vill ha en liknande effekt med switch så kan vi använda default-etiketten:

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
while

while ser ut lite som if, men if genomför de efterföljande instruktionerna en gång om boolean-uttrycket är sant, medan while utför dessa instruktioner medan boolean-uttrycket är sant. Nyckelordet break kan, som i fallet med switch, användas för att avbryta loop:en.

var a = 5;

while (a > 3) {
  alert('a är större än tre');
  a--;
}
while-konstruktionen behöver inte, likt if-konstruktionen, avslutas med ett semikolon.

for

Betrakta nedanstående while-relaterad kod.

var i = 0;

while (i < 10) {
    alert('Utförs');
    i++;
}
Kod enligt ovanstående mönster – initiering (i = 0), samt upprepade tester (i < 10) och upprepade åtgärder (i++) – är så vanligt att det finns en kortform för det: for.

for (var i = 0; i < 10; i++) {
    alert('Utförs');
}
for är alltså en loop-konstruktion, likt while, som är mer specialiserad än while, men som i fall där den är lämpad gör ett bättre jobb.

Läsmaterial

Boken You Don't Know JS: Up & Going, som finns på github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going.

Övningar

Övning 1

Skapa en funktion successor, i konsolen, som tar emot ett number som en parameter, och returnerar efterföljaren till det numret, d.v.s. nummerargumentet adderat med 1. Funktionen skall inte ha någon effekt, utan skall endast göra det som krävs för att returnera det korrekta värdet. Använd +-operatorn.

Funktionen skall skapas som en funktionsdeklaration, t.ex. som nedan, där TODO-kommentaren skall bytas ut med någon form av uttryck som använder n-variabeln:

function successor(n) {
  return /* TODO */;
}
Funktionen skall, när den är implementerad, kunna anropas så här:



Ovan används värdena 5 och 10, men funktionen skall även kunna fungera med andra nummervärden.

Tips: För att göra en radbrytning i konsolen utan att köra den aktuella instruktionen, så kan Shift + Enter användas.

Övning 2

Flytta lösningen från Övning 1 till en HTML-fil (d.v.s. inom <script> och </script>), och komplettera lösningen med en funktion predecessor, som returnerar föregångaren till numret som skickas in som argument (d.v.s. nummerargumentet subraherat med 1).

Använd den här gången ett funktionsuttryck, t.ex. som nedan, där TODO-kommentaren återigen skall bytas ut:

var predecessor = function (n) {
  return /* TODO */;
};
Funktionerna skall kunna anropas från JavaScript-koden i HTML-filen, och funktionernas returvärde skall loggas i konsolen. Detta kan göras så här:



Tips: Använd console.log-funktionen.

Övning 3

Skapa en funktion, not, via en funktionsdeklaration, som tar ett argument och returnerar false om argumentet är true, och true om argumentet är false. Lös uppgiften med if först, och övergå sedan till att inte använda if.

not(true) skall evalueras till false, medan not(false) skall evalueras till true.

Tips: Använd en viss unär operator istället för att använda if.

Övning 4

Anpassa lösningarna på Övning 1 och Övning 2 till att använda de unära ++- och ---operatorerna. Flytta också all JavaScript-kod till en separat JavaScript-fil, och importera denna från HTML-koden.

Övning 5

Skapa en funktion, authenticate, återigen via en funktionsdeklaration, som tar två argument av typen string – ett användarnamn och lösenord – och returnerar true om användarnamnet är 'jonkri' och lösenordet är 'secret', och false annars. Tanken med den här funktionen är att den skall representera en (väldigt förenklad) kontroll av ett användarnamn och lösenord.

authenticate('jonkri', 'secret'); skall utvärderas till (returnera) true, och andra värden (t.ex. authenticate('jonkri', 'password');) skall utvärderas till false. Använd console.log-anrop för att verifiera att så är fallet. Prova att anropa funktionen på raderna innan, och raderna efter, funktionen har deklarerats. Testa slutligen att definiera authenticate-funktionen med ett funktionsuttryck och en variabel istället, och prova att anropa funktionen både på raderna innan och på raderna efter funktionsuttrycket, och notera skillnadeni resultatet.

Övning 6

Ändra lösningen på Övning 5 till att, istället för att ta två värden (av typen string), tar ett objekt (som i sin tur innehåller två string-värden), och representerar inloggningsinformationen.

Anrop till funktionen skall vara strukturerade så här: authenticate({ userName: 'jonkri', password: 'secret' });.

Övning 7

Skapa en funktion, radiusToArea, som tar ett cirkelradievärde och returnerar det korrekta areavärdet.

En cirkels radie är avståndet från mittpunkten till dess kant, och om radien betecknas r, så kan detta värde kan räknas ut som r · r · π (eller, ekvivalent, πr2). π, eller pi, är ungefär 3,14. Konstanten Math.PI kan användas i JavaScript.



radiusToArea(5) skall producera 78.53981633974483.

Övning 8

Skapa en funktion, areaToRadius som går “åt andra hållet”, d.v.s. som kan ta cirkelareavärden som argument och returnera korrekta radievärden.

Tips: Strukturera om ekvationen från Övning 7 och använd den matematiska roten ur för att gå från r · r till r.

Denna funktionalitet kommer att vara användbar när vi börjar arbeta med datavisualisering.

areaToRadius(78.53981633974483) skall producera 5.

Övning 9

Skapa en funktion, radiusesToTotalArea, som tar en array med radievärden och returnerar summan av alla areor. radiusesToTotalArea([5, 10]) skall returnera 392.69908169872417. Använd en while-loop för att räkna ut den totala arean. Använd en räkningsvariabel (t.ex. i) och array-värdets length metod för att loop:a lika många gånger som array-värdet har element.

När lösningen producerar korrekta värden enligt exemplet ovan, så skall den expanderas till att ignorera negativa radievärden med if. Resultatet av detta skall vara att radiusesToTotalArea([5, 10, -5]) returnar samma sak som radiusesToTotalArea([5, 10]).

Konvertera slutligen while-loop:en till en for-loop.

Övning 10

Konvertera din lösning kring Övning 9 till att använda filter-metoden, som finns tillgänglig på array-värden, istället för if. Använd en sökmotor för att hitta information om vad filter gör.

Konvertera även din lösning till att använda reduce-metoden istället för for, även detta med hjälp av information på webben.

Använd funktionsuttryck med både reduce och filter.

Övning 11

Skapa en funktion, stringToVowelStructure, som, givet en sträng, producerar ett objekt med följande fält (nyckel/värde-par): value (av typen string), startsWithVowel (av typen boolean) och numberOfVowels (av typen number). Använd en for-loop med en switch-sats för att producera numberOfVowels-värdet. (Vowel betyder vokal.)

Övning 12

Ett ganska vanligt sätt att lagra och kommunicera data på är via ett format som heter CSV. CSV står för Comma-Separated Values (kommaseparerade värden), och är ganska mycket vad det låter som: värden separerade med komma. Varje rad är en “sak”. Man skulle t.ex. kunna tänka sig att representera de tio högst befolkade svenska städerna så här med CSV:

Stockholm,1372565
Göteborg,549839
Malmö,280415
Uppsala,140454
Västerås,110877
Örebro,107038
Linköping,104232
Helsingborg,97122
Jönköping,89396
Norrköping,87247
Skapa en funktion, parseCsv, som tar en CSV-sträng (likt den ovan, men skulle även kunna vara en CSV-sträng där varje rad innehåller fler värden/kommatecken) och producerar en array bestående av array:er, där de inre array:erna innehåller lika många värden som varje CSV-rad har värden.

I ovanstående exempel så skulle den yttre array:en innehålla tio (array-)värden, och de inre array:erna skulle allihop innehålla två värden. array[0] skulle t.ex. innehålla ['Stockholm', '1372565'].

Tips: Använd radbrytningstecken (\n) för att separera raderna ovan i en JavaScript-sträng. Använd också string-metoden split.

Övning 13

TSV-data, eller Tab-Separated Values, är ett format likt CSV, men där tabbtecken används istället för kommatecken, för att separera värden.

Byt namn på parseCsv till parse, och gör så att den kan hantera antingen CSV-data eller TSV-data, beroende på värdet på en parameter som vi skickar med till funktionen. Samma funktion skall alltså kunna användas för att konvertera CSV och TSV till JavaScript-värden (men inte båda samtidigt).

Tips: Tabbtecken representeras med \t.

Övning 14

Bygg ett hänga gubbe-spel där man har sju försök på sig att gissa på tecken, innan spelet avslutas.

En interaktion med spelet skulle vara driven med prompt:


Gissar man på en bokstav som inte ingår i ordet så förlorar man en gissning:


Gissar man rätt så förlorar man inte en gissning:


Förbrukar man sina gissningar utan att ha lyckats lista ut hela ordet så förlorar man spelet, och får inte gissa mer.

Tips: Skapa variabler för det rätta ordet, antalet gissningarna kvar, hur många tecken som man har gissat rätt kring, och ordet som visas mot användaren.

Övning 15

Använd en array med strängar, Math.random, Math.round och multiplikation, för att göra så att spelet från Övning 14 kan variera mellan några olika ord då sidan laddas in.

För de som hinner klart med övningarna

Gör klart eventuella ofärdiga övningar från Modul 7-8 i Internet grundkurs-kursen, och om ytterligare tid finns, läs boken You Don't Know JS: Up & Going (se Läsmaterial-sektionen ovan). Det är också möjligt att börja arbeta på delarna av Laboration 1 som är uppmärkta med Workshop 1.
