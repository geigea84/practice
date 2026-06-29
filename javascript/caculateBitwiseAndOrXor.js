// Scratch test file

function main(n1, n2) {
    const bitDict = createBase10ToBase2Dict(n1, n2);
    
    if (bitDict.n1.length !== bitDict.n2.length) {
        throw new Error("Comparison strings do not match length.");
    }

    bitwiseAND(bitDict);
    bitwiseOR(bitDict);
    bitwiseXOR(bitDict);
}

function createBase10ToBase2Dict(n1, n2) {
    return {
        n1: convertToBase2String(n1),
        n2: convertToBase2String(n2)
    };
}

function bitwiseAND(dict) {
    let comparisonString = '';
    
    for (let i = 0; i < dict.n1.length; i++) {
        if (dict.n1[i] === '1' && dict.n2[i] === '1') {    
            comparisonString += '1';
        } else {
            comparisonString += '0';
        }        
    }

    return convertToBase10Integer(comparisonString);
}

function bitwiseOR(dict) {
    let comparisonString = '';
    
    for (let i = 0; i < dict.n1.length; i++) {
        if (dict.n1[i] === '1' || dict.n2[i] === '1') {
            comparisonString += '1';
        } else {
            comparisonString += '0';
        }    
    }

    return convertToBase10Integer(comparisonString);
}

function bitwiseXOR(dict) {
    let comparisonString = '';
    
    for (let i = 0; i < dict.n1.length; i++) {
        if (dict.n1[i] !== dict.n2[i]) {
            comparisonString += '1';
        } else {
            comparisonString += '0';
        }    
    }

    return convertToBase10Integer(comparisonString);
}

function convertToBase2String(n) {
    return n.toString(2).padStart(8, "0");
}

function convertToBase10Integer(s) {
    const convertedInt = parseInt(s, 2);
    console.log("convertedInt: " + convertedInt);
    
    return convertedInt;
}

main(7, 12);
