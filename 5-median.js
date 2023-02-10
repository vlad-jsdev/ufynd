const data = input.split("\n").filter((t) => !!t).map((i) => parseInt(i, 10))

const binarySearch = (arr, item, low, high) => {
  if (low >= high) {
    return (item > arr[low]) ? (low + 1) : low;
  }
  let mid = parseInt((low + high) / 2);
  if (item == arr[mid])
    return mid + 1;
  if (item > arr[mid])
    return binarySearch(arr, item, mid + 1, high);
  return binarySearch(arr, item, low, mid - 1);
}

const main = (arr) => {
		let i, j, pos, num;
		let count = 1;
    let n = arr.length

		console.log(`A${arr[0]}`);

		for (i = 1; i < n; i++) {
			let median;
			j = i - 1;
			num = arr[i];
			pos = binarySearch(arr, num, 0, j);
			while (j >= pos) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = num;
			count++;
			if (count % 2 != 0) {
				median = arr[parseInt(count / 2)];
			}
			else {
				median = (arr[parseInt(count / 2) - 1] + arr[parseInt(count / 2)]) / 2;
			}

			console.log(`Median${median}`);
		}
}

main(data);
