
function count_max(upRight) {
    let min_row = Number.MAX_SAFE_INTEGER;
    let min_col = Number.MAX_SAFE_INTEGER;

    upRight.forEach(function(input_str) {
        //console.log(input_str);    
        let [r,c] = input_str.split(" ");
        console.log(r,c);

        min_row = Math.min(min_row, r);
        min_col = Math.min(min_col, c);

    });

    console.log( min_row * min_col );
    //console.log(upRight);
}

count_max(["2 4","3 2"])