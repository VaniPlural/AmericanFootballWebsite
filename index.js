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
