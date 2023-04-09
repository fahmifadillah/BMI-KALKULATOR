function calculateBMI() {
  // Get height and weight input values
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  
  // Calculate BMI
  var bmi = weight / ((height / 100) ** 2);
  bmi = bmi.toFixed(1); // Round to one decimal place
  
  // Determine BMI category
  var category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }
  
  // Display result
  var result = document.getElementById("result");
  result.innerHTML = "Your BMI is " + bmi + "<br>Category: " + category;
}
