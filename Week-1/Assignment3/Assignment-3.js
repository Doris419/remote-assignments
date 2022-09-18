function max(numbers) {
    let a = 0; 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>a){
            a = numbers[i];
        }
    }
    return a;
}
function findPosition(numbers, target) {
    let a = 0;
    let b = 0;
    for(let i=0;i<numbers.length;i++){
        
            if(numbers[i] == target){
                a = i;
                break;
            }else{
                b++;
            }   
    }
    if(b===(numbers.length)){
        a = -1;
    }
    return a;
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1