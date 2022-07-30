/* eslint-disable no-unused-vars */

//~~~~~indexAndValue~~~~~//
const indexAndValue=(arr)=>{
    /*
    //Using an imperative approach
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        const obj={
            index:i,
            value:arr[i]
        };
        newArr.push(obj);
    };
    return newArr;
    */
    const newArr=arr.map(element=>({index:arr.indexOf(element),value:element}));
    return newArr;
};

//~~~~~swapCase~~~~~//
const capitalize=aString=>aString.toUpperCase();
const swapCase=aString=>{
    const stringArray=aString.split(' ');
    const capsStringArray=stringArray.map((str,index)=>index%2===0 ? capitalize(str) : str);
    /*
        if(index%2===0){
            return capitalize(str);
        }else{
            return str;
        };
    */
    const finalString=capsStringArray.join(' ');
    return finalString;
};

