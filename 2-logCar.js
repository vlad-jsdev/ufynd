let input = `{"color": "Red", "brand": "Mercedes"}/n{"color": "White", "brand": "Toyota"}/n{"color": "Gray", "brand": "Audi"}`
const data = input.split('/n').filter((t) => !!t).map((i) => JSON.parse(i))
function logCar() {
  console.log(this.color + ' ' + this.brand)
}

for(let i = 0; data.length - 1>= i; i++){
  const boundLog = logCar.bind(data[i]);
  boundLog()
}
