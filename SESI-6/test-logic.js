// const key1= ['country']
// const obj1 = {}

// const key2 = 'wapons'
// const obj2 = {}


// obj1[key1] = ['Nazi, USA, Russia']
// console.dir(obj1, { depth: null })

// obj2[key2] = ['Nuclear', 'javelin', 'M416']
// console.dir(obj2, { depth: null, colors: true })

const data = {
  Indonesia: {
    name: ['SUPRI', 'JAWIR', 'UCUP'],
    country: 'Indonesia'
  },
  UK: {
    name: ['ALEXANDRE', 'CHURCHIL', 'HITLER'],
    country: 'United Kingdom'
  }
}


console.log(JSON.stringify(data, null, 2))