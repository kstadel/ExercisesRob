const sentence = "I always loved sunny places like Argentina"

function findAs(sentence){
    let arr=[]
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]=="a" || sentence[i]=="A"){
            arr.push(i)
        }
    }
    return arr;
}

findAs(sentence)

//see result in console: console.log(findAs(sentence))