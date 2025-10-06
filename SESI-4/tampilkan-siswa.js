let studentsScore = [
  {
    name: 'Andi',
    score: 90
  },
  {
    name: 'Rudi',
    score: 80
  },
  {
    name: 'Dira',
    score: 100
  }
];

// for (let i = 1; i < studentsScore.length; i++) {
//   if (studentsScore[i].score > tertinggi.score) {
//     tertinggi = studentsScore[i];
//   }
// }

// console.log(`${tertinggi.name} - ${tertinggi.score}`);
console.log(JSON.stringify([studentsScore[2]], null, 2)) // agar output log ke bawah tidk se line. alternatif /n