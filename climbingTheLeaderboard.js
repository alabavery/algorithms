// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
let inputString = '7\n' +
  '100 100 50 40 40 20 10\n' +
  '4\n' +
  '5 25 50 120';
let currentLine = 0;

inputString = inputString.replace(/\s*$/, '')
  .split('\n')
  .map(str => str.replace(/\s*$/, ''));

function readLine() {
  return inputString[currentLine++];
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  // first, "profile" the scores: build an object with keys of ranks and values of score for that rank
  const profiledRanks = [];
  let prevScore = null;
  // we're assuming we're getting a sorted array
  for (let i = 0; i < scores.length; i += 1) {
    const score = scores[i];
    if (score !== prevScore) {
      profiledRanks.push(score);
      prevScore = score;
    }
  }
  // iterate through alice's scores
  // if any score is smaller than her max so far, ignore it: her rank will remain that of her max score so far
  // for each score, Iterate backwards through the profiled ranks until a score greater than this one is found.
  // begin the iteration at the rank of the max score
  // the rank for this score is one less than the found score
  // if one greater than hers is not found, her rank is now 1
  const aliceRanks = [];
  let maxAliceScore = 0;
  let maxAliceScoreRank = profiledRanks.length;
  for (const aliceScore of alice) {
    if (aliceScore < maxAliceScore) {
      continue;
    }
    maxAliceScore = aliceScore;
    maxAliceScoreRank = getRank(aliceScore, profiledRanks, maxAliceScoreRank);
    aliceRanks.push(maxAliceScoreRank + 1); // add one because we want 1-indexed ranks
  }
  return aliceRanks;
}
// [100, 50, 1]
// score: 1
// starting: 3
function getRank(aliceScore, profiledRanks, startingRank) {
  let rankToCompareTo = startingRank - 1;
  while (rankToCompareTo >= 0 && profiledRanks[rankToCompareTo] <= aliceScore) {
    rankToCompareTo -= 1;
  }
  // the final rankToCompareTo will be the rank that "defeated" our score: so must add 1 to it
  return rankToCompareTo + 1;
}

function main() {
  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

  return climbingLeaderboard(scores, alice);
}

console.log(main());