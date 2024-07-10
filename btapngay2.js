// 1.Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
let colors = ['red', 'blue', 'pink'];
let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// 2.Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
let person = {
    name: "Kiên",
    age: 20
};
let {name, age} = person;
console.log(name);
console.log(age);

// 3.Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr);

// 4.Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
let originalArray = ['Trai', 'dep', 'vo', 'cung', 'tan'];
let copyArray = [...originalArray];
console.log(copyArray);

// 5.Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
let arr = [1, 2, 3];
let newarr = [...arr, 4];
console.log(newarr);

// 6.Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
let obj1 =
    {
        id: 1,
        name: "kiên"
    };
let obj2 =
    {
        age: 20,
        gender: "nam"
    };
let objnew = {...obj1, ...obj2};
console.log(objnew);

// 7.Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
let person2 = {
    name: "Kiên",
    age: 20,
    gender: "nam"
};
let newperson2 = {...person2, country: "Vietnam"};
console.log(newperson2);

// 8.Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr3 = arr3.filter(x => x % 2 === 0)
console.log(newarr3);

// 9.Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
let list = ['Trai', 'dep', 'vo', 'cung', 'tan'];
let newlist = list.filter(x => x.length > 3);
console.log(newlist);

// 10.Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
let obj3 = [
    {
        name: "Kiên",
        age: 21
    },
    {
        name: "Yêu",
        age: 21
    },
    {
        name: "Huy",
        age: 20
    },
    {
        name: "Huệ",
        age: 19
    },
    {
        name: "Dương",
        age: 22
    }
];
let newobj3 = obj3.filter(x => x.age > 20);
console.log(newobj3);

// 11.Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.(xem lại thầy linh chữa)
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let primenumber = n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) { //***:nghe giảng lại đoạn này chưa hiểu
        if (n % i === 0) return false;
    }
    return true;
}
let prime = arr4.filter(x => (primenumber(x))); // arr4.filter(primenumber)
console.log(prime);

// 12.Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
let list2 = ['Trai', 'dep', 'vo1', 'cung22', 'tan333'];
let blocknumber = str => {
    return str.match(/\d/) != null;     //let blockNumber = str => /\d/.test(str);  ***
};
let newlist2 = list2.filter(x => !blocknumber(x));
console.log(newlist2);

// 13.Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.
let sum = arr4.reduce((x, tong) => tong + x, 0);
console.log(sum);

// 14.Sử dụng reduce để tính tích của các số trong một mảng số nguyên.
let tich = arr3.reduce((x, tich) => tich * x, 1);
console.log(tich);

// 15.Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.
// let max = arr4[0];
let numbermax = arr4.reduce((e, x) => {
    return e > x ? e : x;
});
console.log(numbermax);

// 16.Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
const arr5 = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, "hello", "hello"];
const Dem = arr5 => {           //***
    return arr5.reduce((t, v) => (t[v] = (t[v] || 0) + 1 , t), {});
}
console.log(Dem(arr5));

// 17.Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
let obj4 = [
    {
        id: 1,
        price: 1000
    },
    {
        id: 2,
        price: 2000
    },
    {
        id: 3,
        price: 3000
    }
];
let newobj4 = obj4.reduce((e, x) => e + x.price, 0);
console.log(newobj4);