function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
// ==========================================
// 3.1 Retrieve Player Information
// ==========================================

function numPointsScored(playerName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    for (const [name, stats] of Object.entries(team.players)) {
      if (name === playerName) {
        return stats.points;
      }
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    for (const [name, stats] of Object.entries(team.players)) {
      if (name === playerName) {
        return stats.shoe;
      }
    }
  }
}


// ==========================================
// 3.2 Retrieve Team Information
// ==========================================

function teamColors(teamName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return Object.values(game).map(team => team.teamName);
}


// ==========================================
// 3.3 Retrieve Player Numbers and Stats
// ==========================================

function playerNumbers(teamName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    if (team.teamName === teamName) {
      return Object.values(team.players).map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    for (const [name, stats] of Object.entries(team.players)) {
      if (name === playerName) {
        return stats;
      }
    }
  }
}


// ==========================================
// 3.4 Advanced Challenge
// ==========================================

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;

  // Loop through both teams
  for (const team of Object.values(game)) {
    // Loop through each player on the team
    for (const player of Object.values(team.players)) {
      // Check if current player's shoe is larger than the biggest we've seen
      if (player.shoe > biggestShoe) {
        biggestShoe = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }
  
  return rebounds;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds
  }
}
