const groceryList = ["Milk", "Eggs", "Bread", "Broccoli", "Steak", "Chicken", "Apples", "Banana", "Orange", "Chocolate"];

function initialize(){
  groceryOutputBox = document.getElementById("groceryOutput");
  input = document.getElementById("inputform");
  log = "";
  
  previousIdx = -1;
  previousGrocery = "";
  previousGroceryDown = "";
  previousIdxDown = -1;
  tempIdx = 0;
  tempIdxDown = 0;
  
  document.getElementById("add").addEventListener("click", function(){addGrocery(input.groceryinput.value)}); 
  document.getElementById("delete").addEventListener("click", function(){deleteGrocery(input.groceryinput.value)});  
  document.getElementById("moveUp").addEventListener("click", function(){moveUp(input.groceryinput.value)});  
  document.getElementById("moveDown").addEventListener("click", function(){moveDown(input.groceryinput.value)});  
  display();
}

function display(){
  log = "";
  for(let i = 0; i < groceryList.length; i++){
      let numInList = i + 1;
      let grocery = groceryList[i];
      log += `${numInList}. ${grocery} <br />`;
  }
  groceryOutputBox.innerHTML = log;
}

const addGrocery = (grocery) => {
  groceryList.push(grocery);
  input.groceryinput.value = "";
  display();
}

const deleteGrocery = (idx) => {
  idx -= 1;
  //groceryList = (idx > -1) ? groceryList.splice(idx, 1);
  if (idx > -1) { 
    groceryList.splice(idx, 1);
  }
  input.groceryinput.value = "";
  display();
}

/*function deleteGrocery(idx){
  idx -= 1;
  if (idx > -1) { 
    groceryList.splice(idx, 1);
  }
  display();
}*/

function moveUp(idx){
  idx -= 1;
  if(tempIdx > 0){
    if(previousIdx === idx){
      groceryList.splice(tempIdx, 1);
      groceryList.splice(tempIdx-1, 0, previousGrocery);
      tempIdx--;
    }
    else{
      let selectedGrocery = groceryList[idx];
      groceryList.splice(idx, 1);
      groceryList.splice(idx-1, 0, selectedGrocery);
      previousGrocery = selectedGrocery;
      previousIdx = idx;
      tempIdx = idx-1;
    }
  }
  else{
    if(tempIdx != 0 || previousIdx != idx){
      let selectedGrocery = groceryList[idx];
      groceryList.splice(idx, 1);
      groceryList.splice(idx-1, 0, selectedGrocery);
      previousGrocery = selectedGrocery;
      previousIdx = idx;
      tempIdx = idx-1;
    }
  }
  display();
}
  
function moveDown(idx){
  idx -= 1;
  if(tempIdxDown < groceryList.length){
    if(previousIdx === idx){
        groceryList.splice(tempIdx, 1);
        groceryList.splice(tempIdx+1, 0, previousGrocery);
        tempIdx++;
    }
    else{
        let selectedGrocery = groceryList[idx];
      groceryList.splice(idx, 1);
      groceryList.splice(idx+1, 0, selectedGrocery);
      previousGrocery = selectedGrocery;
      previousIdx = idx;
      tempIdx = idx+1;
    }
  }
  else{
    if(tempIdxDown != groceryList.length || previousIdxDown != idx){
        let selectedGrocery = groceryList[idx];
        groceryList.splice(idx, 1);
        groceryList.splice(idx+1, 0, selectedGrocery);
        previousGrocery = selectedGrocery;
        previousIdx = idx;
        tempIdx = idx+1;
    }
  }
  display();
}
