const express = require('express')

const app = express();
const PORT = 3000

let motoGp = [
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
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK"
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy"
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy"
    },
  }
]

function pengkategorian(data, properti) {
  const hasil = {}

  for (const item of data) {
    const kategori = properti(item)

    if (!hasil[kategori]) {
      hasil[kategori] = []
    }

    hasil[kategori].push(item)
  }

  return hasil
}

app.get('/', (req, res) => {
  res.status(200).json(motoGp)
})

app.get('/country', (req, res) => {
  const grouped = pengkategorian(motoGp, (item) => item.winner.country)
  res.status(200).json(grouped)
})

app.get('/name', (req, res) => { 
  const grouped = pengkategorian(motoGp, (item) => `${item.winner.firstName} ${item.winner.lastName}`)
  res.status(200).json(grouped)
})

app.use((_req, res) => { // _ tidak digunakan hanya pemanggilan sj
  res.status(404).json("Bad Request")
})

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})