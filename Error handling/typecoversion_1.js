function convertToNumber(str) {
    try {
        let num = Number(str);
        if (Number.isNaN(num)) {
            throw new Error("Invalid number");
        }
    } catch (error) {
        return error.message
        
    }    
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));