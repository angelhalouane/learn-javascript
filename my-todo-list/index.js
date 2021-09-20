const inputBox = document.querySelector(".inputBox input"); //call the user's input
const plusButton = document.querySelector(".inputBox button"); //call the plus button
const checkBox = document.querySelector(".checkBox"); //call the check list box
 
loopTaskInArray(); //call the loop function to show each task in the array  

plusButton.onclick = ()=>{ //when user click on plus button
  let inputValue = inputBox.value; //create a variable to obtain user's input value
  let obtainLocalStorageData = localStorage.getItem("Here is new task"); //create a variable to obtain local storage data
  if(obtainLocalStorageData == null){ //if local storage has no data
    taskArray = []; //create an empty array
  }else{ // if it has data
    taskArray = JSON.parse(obtainLocalStorageData);  //transform json string into a js object
  }
  taskArray.push(inputValue); //adding new value into the task array
  localStorage.setItem("Here is new task", JSON.stringify(taskArray)); //transform java script object into a json string
  loopTaskInArray(); //call the loop function to show each task in the array
}
 
function onCheckBoxClick(index) {
  console.log(index)
}

function loopTaskInArray() {
  let obtainLocalStorageData = localStorage.getItem("Here is new task"); //create a variable to obtain local storage data
  if (obtainLocalStorageData == null) { //if local storage has no data
    taskArray = []; //create an empty array
  } else { //if it has data
    taskArray = JSON.parse(obtainLocalStorageData); //transform json string into a js object
  }
  let ulTag = ""; //create a string variable to add each task into the array 
  taskArray.forEach((task, index) => { //create a loop to add each string put in the input with in parameter the task and where to put it the array
    ulTag += `<li><input type="checkbox" onclick="onCheckBoxClick(${index})"/>${task}<span class="icon" onclick="removeTask(${index})"><i class="fas fa-trash deleteButton"></i></span></li>`; //the ul list with the class, icon, and delete function 
  });
  checkBox.innerHTML = ulTag; //display the ul list on the actual page
  inputBox.value = ""; //when task added leave the input value empty
}
 
// remove task function
function removeTask(index) { 
  let obtainLocalStorageData = localStorage.getItem("Here is new task");  //create a variable to obtain local storage data
  taskArray = JSON.parse(obtainLocalStorageData); //transform json string into a js object
  taskArray.splice(index, 1); //remove the task the array at the given input
  localStorage.setItem("Here is new task", JSON.stringify(taskArray)); //transform java script object into a json string
  loopTaskInArray(); //call the loop function to show each task in the array
}

