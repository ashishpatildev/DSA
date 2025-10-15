function getAllComnination(cMap, result,digits,index,currStr){
    if(index == digits.length){
        result.push(currStr)
        return;
    }
    for(let char of cMap[digits[index]]){
        getAllComnination(cMap, result,digits,index+1,currStr+char)
    }
}

var letterCombinations = function(digits) {
    if(digits.length == 0){
        return [];
    }
    const charNumMap = Object.freeze({
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"]
    });
    const result = [];
    getAllComnination(charNumMap, result,digits, 0, "")
    return result;
};

// Cases : 2, 23, 234, 2345, ""