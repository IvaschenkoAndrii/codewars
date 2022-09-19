function sum() {
    return [...arguments].reduce((acc, value) => acc + value);
}

console.log(sum(1, 2, 3, 4,3,6));