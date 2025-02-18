function safeDivide(a, b) {
    try {
        let result = a / b;
        if (b==0) {
            throw new Error("Division by zero is not allowed.");
        }
        else console.log(result);
        
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

// Example usage:
safeDivide(10, 0); // 5
safeDivide(15,3);
// safeDivide

