// function unique(arr) {
//     let set=new Set(arr);
//     let result=[];
//     for (let value of set.keys()) result.push(value);
//     //array.from
//     return result;

    
    
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) ); // Hare, Krishna, :-O


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


function aclean(arr){
    let map=new Map();
    for(let word of arr){
        

        let sorted=word.toLowerCase().split('').sort().join('');
        map.set(sorted,word);

    }
    console.log(map);
    return Array.from(map.values())
}