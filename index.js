// Find longest sequence of zeros in binary representation of an integer. 

function solution(N) {
    let gap = "";

    const bin = (N >>> 0).toString(2);
    let filter = bin.match("1(.*)1") != null ? bin.match("1(.*)1")[1].split("1") : "";
    
    for (let i of filter) {
        if (gap.length < i.length) {
            gap = i;
        }
    }

    return gap.length;
}

solution(1041);
// solution(1);
// solution(1024);
// solution(365);