const binaryField=document.getElementById('binaryField');
const decimalField=document.getElementById('decimalField');
const toConvertButton=document.getElementById('convertTo');

function analyzeNumber(val){
    if(val !== '0' && val !== '1'){throw new RangeError('Not Binary')}
}

function analyzeBinaryNumber(binaryField){
    let array=binaryField.split("");
    if(array.length===0){throw new RangeError('None Number')}
    array.forEach(analyzeNumber);
    return array;
}

function calculateIndividualValue(val,index){
    return Number(val)*Math.pow(2,index)
}

function calculateDecimal(array){
    let result=0;
    let reversedArray=analyzeBinaryNumber(array).reverse();
    for(let i=0;i<reversedArray.length;i+=1){
        result+=calculateIndividualValue(reversedArray[i],i)
    }
    return result;
}

function toPutValue(array){
    decimalField.value=calculateDecimal(array);
}