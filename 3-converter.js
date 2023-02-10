const Converter = {
  radian: (180 / Math.PI),
  deg2rad(degrees){
    return degrees / this.radian;
  },
  rad2deg(radians) {
    return radians * this.radian;
  },
};

let result = ''

input.split(",").filter((t) => !!t).map((i) => parseInt(i, 10)).forEach(ang => {
  const rad = Converter.deg2rad(ang)
  const degPlus10 = Converter.rad2deg(rad + 0.174533)
  result += `${rad} - ${degPlus10}\n`
})

console.log(result)

/* BUG REPORT: 
  arrow functions do not have "this". If "this" is accessed, its value is taken from outside.
*/
