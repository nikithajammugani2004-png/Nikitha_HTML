const btn = document.getElementById("btn");
const resultDisplay = document.getElementById("result");
const categoryTag = document.getElementById("category-tag");

btn.addEventListener("click", () => {
    let weight = prompt("Enter weight (kg):");
    let height = prompt("Enter height (inches):");

    if (weight && height) {
        let hMeters = height * 0.0254;
        let bmi = weight / (hMeters * hMeters);
        
        resultDisplay.textContent = `BMI: ${bmi.toFixed(1)}`;
        
        categoryTag.className = "";
        let status = "";

        if (bmi < 18.5) {
            status = "Underweight";
            categoryTag.classList.add("underweight");
        } else if (bmi < 25) {
            status = "Normal Weight";
            categoryTag.classList.add("normal");
        } else if (bmi < 30) {
            status = "Overweight";
            categoryTag.classList.add("overweight");
        } else {
            status = "Obese";
            categoryTag.classList.add("obese");
        }

        categoryTag.textContent = status;
    }
});
