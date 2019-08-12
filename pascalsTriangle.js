// iterative solution
const pascalsTriangle = (n) => {
    if (n < 1) {
        return 'Please enter a number greater than or equal to one';
    }
    let first = [1];
    let second = [1, 1];
    let final = []; 
    final.push(first);
    if (n == 1) {
        return final;
    }
    final.push(second);
    if (n == 2) {
        return final
    }
    let a =  2;
    let start = second;
    while (a < n){
        let len = start.length; 
        let current = []; 
        for (let x = 1; x < start.length; x++){
            current.push(start[x] + start[x - 1]); 
        }
        let temp = current;
        current = [1].concat(temp).concat([1]);
        final.push(current);
        start = current;
        a++;
    }
    return final; 
}

let pascal = pascalsTriangle(3);
console.log({ pascal });
console.log(pascalsTriangle(process.argv[2]));
