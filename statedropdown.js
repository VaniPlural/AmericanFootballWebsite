"use strict";



window.onload = function() {
    selectstateDropdown();
    statesList.onchange = selectedIndexDropdown;
    
  };

  function selectstateDropdown() { 
    const statesList = document.getElementById("statesList");
    let selectedValue = statesList.value;
    console.log(selectedValue);
        
if (statesList.selectedIndex >= 0) {
    statesList.value = "TX";  // selects Texas
   alert("You selected # " + statesList.selectedIndex);
   

}

if (selectedValue == null) {
   alert("No state was selected");  // ugly popup!
   return;  // exit the event handler
}
else 
{
    alert(selectedValue);
    console.log(selectedValue);
    return true;
}
  }
  function selectedIndexDropdown() { 
    const statesList = document.getElementById("statesList");
    let selectedValue = statesList.value;
    console.log(selectedValue);
}   


