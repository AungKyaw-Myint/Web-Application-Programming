function printNumbers(x, y) {

    setTimeout(() => {
        console.log(x);
        if (x < y) printNumbers(++x, y);
    }, 1000);
}

printNumbers(10, 20);