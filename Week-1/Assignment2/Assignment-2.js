function countAandB(input) {
    let a = 0;
    for(let i=0;i<input.length;i++){
        if(input[i]=='a'||input[i]=='b'){
            a++;
        }
    }
    return a;
    }

    function toNumber(input) {
    let array = [];
    for(let i=0;i<input.length;i++){
        if(input[i]=='a'){
            array.push('1');
        }else if(input[i]=='b'){
            array.push('2');
        }else if(input[i]=='c'){
            array.push('3');
        }else if(input[i]=='d'){
            array.push('4');
        }else if(input[i]=='e'){
            array.push('5');
        }
    }
    return `[${array.join(', ')}]`;
    }
    let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
    console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
    console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
    let input2 = ['e', 'd', 'c', 'd', 'e'];
    console.log(countAandB(input2)); // should print 0
    console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]