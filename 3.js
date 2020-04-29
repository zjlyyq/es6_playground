c = 10;
(function foo(i, count) {
    // if (i == 0) {
        // }
        //     count = 1;
    if (!count){
        count = 1;
        console.log(count)
    }
    else {
        console.log(++count)
    }
    if (i === 3) {
        return;
    }
    else {
        foo(++i);
    }
}(0, c));