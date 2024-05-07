function printNumbers(x, y) {

    setTimeout(() => {
        console.log(x);
        if (x < y) printNumbers(++x, y);
    }, 1000, x);
}

printNumbers(10, 20);