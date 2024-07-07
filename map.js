let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// 1. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
let newarr = [];
arr.map(i => {
    newarr.push(Math.pow(i, 2)); // i*i
    return newarr;
})
console.log("1. Bình phương của các phần tử trong mảng ", arr, "là:", newarr);
// 2.Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
let chuoi = ['trai', 'dep', 'vo', 'cung', 'tan'];
let newchuoi = [];
chuoi.map(i => {
    newchuoi.push(i.length);
    return newchuoi;
})
console.log("2. Độ dài của mỗi chuỗi trong mảng", chuoi, "là:", newchuoi);
// 3.Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
let list = [
    {
        name: 'BMW S1000rr',
        price: 1100
    },
    {
        name: 'Honda CBR1000r',
        price: 1000
    },
    {
        name: 'Kawasaki Ninja H2R',
        price: 1500
    }
]
let newlist = [];
list.map(i => {
    newlist.push(i.name);
    return newlist;
})
console.log("3. Mảng mới chứa giá trị của thuộc tính name là: ", newlist);
// 4.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
let newchanle = [];
arr.map(i => {
    if (i % 2 === 0) {
        i = 'even';
    } else {
        i = 'odd';
    }
    newchanle.push(i);
    return newchanle;
})
console.log("4. Mảng mới chứa chuỗi 'even' hoặc 'odd' tương ứng với mỗi số là: ", newchanle);
// 5.Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
let newchuoiviethoa = [];
chuoi.map(i => {
    newchuoiviethoa.push(i.toUpperCase());
    return newchuoiviethoa;
})
console.log("5. Mảng mới chứa các tử viết hoa của mảng ", chuoi, "là:", newchuoiviethoa);