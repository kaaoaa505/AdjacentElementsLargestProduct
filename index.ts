function solve(a: number[]): number {
    let pre = 0;
    let target = 0;

    a.forEach(v => {
        if(pre * v > target){
            target = pre * v;
        }
        pre = v;
    });

    return target;
}

const a = [3, 6, -2, -5, 7, 3];

console.log(solve(a));

