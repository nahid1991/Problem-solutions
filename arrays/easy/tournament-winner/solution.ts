export function tournamentWinner(competitions: string[][], results: number[]) {
  const pointTable: { [key: string]: number } = {};
  let champion: string = '';
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    if (!(homeTeam in pointTable)) pointTable[homeTeam] = 0;
    if (!(awayTeam in pointTable)) pointTable[awayTeam] = 0;
    pointTable[results[i] === 1 ? homeTeam : awayTeam] += 3;
  }
  for (const [key, value] of Object.entries(pointTable)) {
    const highestPoint = pointTable[champion] ? pointTable[champion] : 0;
    if (value > highestPoint) {
      champion = key;
    }
  }

  return champion;
}
