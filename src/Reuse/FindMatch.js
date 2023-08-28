function levenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + (s1[i - 1] !== s2[j - 1] ? 1 : 0), dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  return 1 - dp[m][n] / Math.max(m, n);
}

export default function findClosestMatches(userInput, dataArray, MatchKey) {
  // let index = 0;
  // let closestMatches = [];
  // dataArray.forEach(element => {
  //   if (dataArray[index]["MODEL"].includes(userInput)) {
  //     closestMatches.push(index);
  //   }
  //   index++;
  // });
  // const closestIndices = closestMatches.slice(0, 8).map((entry) => entry.index);
  // return closestIndices;

  const scores = [];

  userInput = userInput.replace(/[^\w\s]/gi, "").toUpperCase();

  dataArray.forEach((item, index) => {
    let model = item[MatchKey];
    model = model.replace(/[^\w\s]/gi, "").toUpperCase();
    const score = levenshteinDistance(userInput, model);
    scores.push({ index, score });
  });

  scores.sort((a, b) => b.score - a.score);

  const closestIndices = scores.slice(0, 8).map((entry) => entry.index);
  return closestIndices;
}
