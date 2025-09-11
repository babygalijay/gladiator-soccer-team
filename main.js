//  live score update logic

function updateScores(team1, team2) {
  document.getElementById("team1-score").textContent = team1;
  document.getElementById("team2-score").textContent = team2;
}

// Simulate score change after 5 seconds
setTimeout(() => {
  updateScores(3, 5);
}, 5000);
