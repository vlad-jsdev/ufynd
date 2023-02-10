let input = `{"value": 10, "targetDate": "2020-01-01"}/n{"value": 14, "targetDate": "2020-01-03"}/n{"value": 12, "targetDate": "2020-01-02"}`
const data = input.split('/n').filter((t) => !!t).map((i) => JSON.parse(i))
const dates = new Map()
for(let i = 0; data.length - 1 >= i; i++){
  dates.set(data[i].targetDate, data[i].value)
}
let jsonText = JSON.stringify(Array.from(dates.entries()))
console.log(jsonText)
