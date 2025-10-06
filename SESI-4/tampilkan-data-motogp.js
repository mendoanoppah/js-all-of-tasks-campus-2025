// ini array of object
const motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

let groupedWinners = {};

for (let race of motoGP) {
  let country = race.winner.country;
  let name = `${race.winner.firstName} ${race.winner.lastName}`;
  let winLocation = `${race.circuit}, ${race.location}`;

  // buat objctny
  if (!groupedWinners[country]) {
    groupedWinners[country] = { winningCircuits: [], totalWin: 0 };
  }

  // adding data kemenangan
  groupedWinners[country].winningCircuits.push({
    name: name,
    winLocation: winLocation
  });

  groupedWinners[country].totalWin++;
}

// console.log(JSON.stringify(groupedWinners, null, 2))
console.dir(groupedWinners, {
  depth: null,
})