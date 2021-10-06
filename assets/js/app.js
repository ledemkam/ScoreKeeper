const teamscore1 = document.getElementById('team1-score');
const teamscore2 = document.getElementById('team2-score');

let team1 = 0;
let team2 = 0;

const addscoreOne = (team, change) => {
   //    console.log(team);
   //    console.log(change);

   if (team === 'one') {
      team1 += change;
   } else if (team === 'two') {
      team2 += change;
   }
   teamscore1.innerHTML = team1;
   teamscore2.innerHTML = team2;
};

const resetgame = () => {
   team1 = 0;
   team2 = 0;
   teamscore1.innerHTML = team1;
   teamscore2.innerHTML = team2;
};
