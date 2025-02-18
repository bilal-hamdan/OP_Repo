function greet(name = "Guest", ...messages) {
    console.log(`Hello, ${name}!`);
    
    if (messages.length > 0) {
        messages.forEach(msg => console.log(`- ${msg}`));
    }
}

export default greet