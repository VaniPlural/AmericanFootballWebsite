"use strict";

let teams = [
  { teamcode:"DAL", 
    name:"Dallas Cowboys", 
    locatedIn:"Arlington, TX"
  },
  { teamcode:"DEN", 
    name:"Denver Broncos", 
    locatedIn:"Denver, CO"
  },
  { teamcode:"HOU", 
    name:"Houston Texans", 
    locatedIn:"Houston, TX"
  },
  { teamcode:"KAN", 
    name:"Kansas City Chiefs", 
    locatedIn:"Kansas City, MO"
  }
];

window.onload = function() {
    initializeFootballTeamsSelect();
    addSelectTeamOption();
    document.getElementById("submitButton").addEventListener("click", handleButtonClick);
  };
  
  function initializeFootballTeamsSelect() {
    let selectElement = document.getElementById("footballTeams");
  
    // Loop through the teams array and create options for the select
    teams.forEach(function(team) {
      let option = document.createElement("option");
      option.text = team.name;
      option.value = team.teamcode;
      selectElement.appendChild(option);
    });
  }
  
  function addSelectTeamOption() {
    let selectElement = document.getElementById("footballTeams");
    let selectTeamOption = document.createElement("option");
    selectTeamOption.text = "Select a team";
    selectTeamOption.value = "";
    selectElement.insertBefore(selectTeamOption, selectElement.firstChild);
  }
  
  function handleButtonClick() {
    let selectElement = document.getElementById("footballTeams");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let messageElement = document.getElementById("message");
  
    if (selectedOption.value === "") {
      messageElement.textContent = ""; // Clear the message area if "Select a team" is selected
    } else {
      let teamName = selectedOption.text;
      let teamCode = selectedOption.value;
      let teamLocation = teams.find(team => team.teamcode === teamCode).locatedIn;
      messageElement.textContent = `You selected the ${teamName} (${teamCode}) who play in ${teamLocation}`;
    }
  }
  