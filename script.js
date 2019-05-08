// Calculator wireframe

// Length / width ;
// Functionality, what kind of functions  we will use;
// Buttons;
// Style / spacing/ color;
// Numbers / Input;
// Display the results;

// ------------ JavaScript part --------------------------

// the text of the button this is clicked to display on the screen
function input(button){
  document.calc.display.value += button.value;
}

// make the screen black
function clearDisplay(){
document.calc.display.value = "";
}

// Evaluate the string on the screen as a mathematic equation then displays yje answer back

function enter(){
  document.calc.display.value = eval(document.calc.display.value);
}

function average(){
  // variable to keep track of the sum
  var sum=0;
//Assinging to the list, values passed in the calculator
//separated by commas

listOfNums = document.calc.display.value.split(',');

// whrite a for loop to interate through every 'element' in the list in order to add them and create an actual sum
for(var i=0; i < listOfNums.length; i++){
  //the sum variable is being unsated each time the loop
  //starts over.

  sum += parseInt(listOfNums[i]);
}
//declare a variable called average that is aasigned the Value of the 'sum' over the length of the list which represents the amount of numbers being used.

var average = sum/listOfNums.length;

//Displaying that value on the calculator on our page using HTML Dom

document.calc.display.value = average;


}

