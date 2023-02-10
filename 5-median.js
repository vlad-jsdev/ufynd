function main(input) {
  let stream = [];
  input.forEach(num => {
      stream.push(num);
      stream.sort((a, b) => a - b);
      if (stream.length % 2 === 0) {
          console.log((stream[stream.length / 2 - 1] + stream[stream.length / 2]) / 2);
      } else {
          console.log(stream[Math.floor(stream.length / 2)]);
      }
  });
}
