function count(input) {
    let obj = {};
    let word = [];
    let num = [];
    for(let i=0;i<input.length;i++){
        if(!word.includes(input[i])){
            word.push(input[i]);
            num.push(1);
        }else{
            pos=word.indexOf(input[i]);
            num[pos]+=1;
        }
    }
    for(let i=0;i<num.length;i++){
        obj[word[i]] = num[i];
    }
    
    return obj;
}
    let input1 = ["a", "b", "c", "a", "c", "a", "x"];
    console.log(count(input1));
    // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    let obj = [];
    let word = [];
    let num = [];
    for(let i=0;i<input.length;i++){
        if(!word.includes(input[i].key)){
            word.push(input[i].key);
            num.push(input[i].value);
        }else{
            pos=word.indexOf(input[i].key);
            num[pos]+=input[i].value;
        }
    }
    
    for(let i=0;i<num.length;i++){
        obj[word[i]] = num[i];
    }
    
    return obj;
}
    let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
    ];
    console.log(groupByKey(input2));