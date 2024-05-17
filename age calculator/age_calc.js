function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    
    var dob = new Date(dobInput);
    
    var today = new Date();
    
    var ageDiffMs = today - dob;
    
    var ageDate = new Date(ageDiffMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your age is: " + age + " years";
}
