function motivasi(saldo) {
  const pesan = saldo < 1000000 ? 'anda perlu BEKERJA lebih KERAS lagi!' : 'anda sangat pekerja keras'

  // console.log(`saldo anda: Rp${saldo}`)
  return pesan
}

module.exports = motivasi
