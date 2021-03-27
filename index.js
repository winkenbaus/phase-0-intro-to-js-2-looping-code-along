function writeCards(gurls, event){
    let empty = []
    for (let i=0; i < gurls.length; i++){
        empty.push(`Thank you, ${gurls[i]}, for the wonderful ${event} gift!`);
    }
    return empty;
}
function countDown(integer){
    while (integer >= 0){
        console.log(integer--);
    }
    return integer;
}

// function countDown(integer){
//     let numbs = 0;
//     while (numbs < 11){
//         console.log(numbs++);
//     }
//     return integer;
// }