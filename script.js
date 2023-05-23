// 1 спосіб.

function getPow(num, degree) {
  return degree === 0 ? 1 : num * getPow(num, degree - 1);
}

console.log(getPow(3, 5));


// 2 спосіб. Спробувала врахувати різні варіанти введення.

function getPow(num, degree) {
  if (num === 0 && degree === 0) {
    return `Не має сенсу.`;
  } else if (degree === 0) {
    return 1;
  } else if (!Number.isInteger(degree)) {
    return Math.pow(num, degree);
  } else if (degree < 0) {
    return 1 / getPow(num, -degree);
  } else {
    return num * getPow(num, degree - 1);
  }
}
console.log(getPow(0, 0));
console.log(getPow(3, 0));
console.log(getPow(3, 2.5));
console.log(getPow(3, -5));
console.log(getPow(3, 4)); 
