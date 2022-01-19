const sizes = async (event) => {
            
    function ConvertToArray(input){
        let array = input.split(',').map(function(item) {
            return parseInt(item, 10);
        });
        return array;
        } 
    
    function Routes (arrayLength, arraySum, arrayInput){
        let output = [];
        for(let x=1 ; x<=arraySum; x++){
            let count=0;
            for (let j=0; j < arrayLength; j++){
                count = arrayInput[j] + count;
                if (count > x) break;
                else if (count == x && j != arrayLength - 1) count = 0;
                    else if (count == x && j == arrayLength - 1) output.push(x);
            }
        }
        return output;
    }    
    
    let input = event.groups;
    let arrayInput = ConvertToArray(input);
    let arrayLength = arrayInput.length;
    let arraySum = arrayInput.reduce((partial_sum, a) => partial_sum + a, 0);
    let output = Routes(arrayLength, arraySum, arrayInput);
    return {sizes: JSON.stringify(output)};        
    }
    
    exports.handler = sizes;
