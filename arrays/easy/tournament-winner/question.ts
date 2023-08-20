export function tournamentWinner(
  competitions: string[][],
  results: number[]
): string {
  return '';
}

console.assert(
  tournamentWinner(
    [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ],
    [0, 0, 1]
  ) === 'Python',
  '❌'
);

console.assert(
  tournamentWinner(
    [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
    ],
    [0, 1, 1]
  ) === 'Java',
  '❌'
);

console.assert(
  tournamentWinner(
    [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
      ['C#', 'Python'],
      ['Java', 'C#'],
      ['C#', 'HTML'],
    ],
    [0, 1, 1, 1, 0, 1]
  ) === 'C#',
  '❌'
);

console.assert(
  tournamentWinner(
    [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
      ['C#', 'Python'],
      ['Java', 'C#'],
      ['C#', 'HTML'],
      ['SQL', 'C#'],
      ['HTML', 'SQL'],
      ['SQL', 'Python'],
      ['SQL', 'Java'],
    ],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
  ) === 'C#',
  '❌'
);

console.assert(tournamentWinner([['Bulls', 'Eagles']], [1]) === 'Bulls', '❌');

console.assert(
  tournamentWinner(
    [
      ['Bulls', 'Eagles'],
      ['Bulls', 'Bears'],
      ['Bears', 'Eagles'],
    ],
    [0, 0, 0]
  ) === 'Eagles',
  '❌'
);

console.assert(
  tournamentWinner(
    [
      ['Bulls', 'Eagles'],
      ['Bulls', 'Bears'],
      ['Bulls', 'Monkeys'],
      ['Eagles', 'Bears'],
      ['Eagles', 'Monkeys'],
      ['Bears', 'Monkeys'],
    ],
    [1, 1, 1, 1, 1, 1]
  ) === 'Bulls',
  '❌'
);

console.assert(
  tournamentWinner(
    [
      ['AlgoMasters', 'FrontPage Freebirds'],
      ['Runtime Terror', 'Static Startup'],
      ['WeC#', 'Hypertext Assassins'],
      ['AlgoMasters', 'WeC#'],
      ['Static Startup', 'Hypertext Assassins'],
      ['Runtime Terror', 'FrontPage Freebirds'],
      ['AlgoMasters', 'Runtime Terror'],
      ['Hypertext Assassins', 'FrontPage Freebirds'],
      ['Static Startup', 'WeC#'],
      ['AlgoMasters', 'Static Startup'],
      ['FrontPage Freebirds', 'WeC#'],
      ['Hypertext Assassins', 'Runtime Terror'],
      ['AlgoMasters', 'Hypertext Assassins'],
      ['WeC#', 'Runtime Terror'],
      ['FrontPage Freebirds', 'Static Startup'],
    ],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
  ) === 'AlgoMasters',
  '❌'
);

console.assert(
  tournamentWinner(
    [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
      ['C#', 'Python'],
      ['Java', 'C#'],
      ['C#', 'HTML'],
      ['SQL', 'C#'],
      ['HTML', 'SQL'],
      ['SQL', 'Python'],
      ['SQL', 'Java'],
    ],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
  ) === 'SQL',
  '❌'
);

console.assert(tournamentWinner([['A', 'B']], [0]) === 'B', '❌');
