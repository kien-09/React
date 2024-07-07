let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// 1.Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
let sum = 0;
let sumArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("1. Tổng của các phần tử trong mảng", arr, "là:", sumArray(arr));
// 2.Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
let newarr = [];
let squareArray = squareArr => {
    for (let i = 0; i < squareArr.length; i++) {
        newarr.push(Math.pow(squareArr[i], 2));
    }
    return newarr;
}
console.log("2. Bình phương của các phần tử trong mảng", arr, "là:", squareArray(arr));
// 3.Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
let newfilter = [];
let n = 5;
let filterGreaterThan = filterarr => {
    for (let i = 0; i < filterarr.length; i++) {
        if (filterarr[i] > n) {
            newfilter.push(filterarr[i]);
        }
    }
    return newfilter;
}
console.log("3. Các phần tử lớn hơn", n ,"là:", filterGreaterThan(arr))
// 4.Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
let max = arr[0];
let maxInArray = maxarr => {
    for (let i = 0; i < maxarr.length; i++) {
        if (max < maxarr[i]) {
            max = maxarr[i];
        }
    }
    return max;
}
console.log("4. Giá trị lớn nhất của mảng", arr, "là:", maxInArray(arr))
// 5.Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
let avg = 0;
let avgArray = avgarr => {
    for (let i = 0; i < avgarr.length; i++) {
        avg = sum / avgarr.length;
    }
    return avg;
}
console.log("5. Trung bình của các giá trị trong mảng", arr, "là:", avgArray(arr));