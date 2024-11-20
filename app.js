//QUESTION NO 01
// Define marks for different subjects using let and const
const subject1 = 85; // Marks for Subject 1
const subject2 = 90; // Marks for Subject 2
const subject3 = 78; // Marks for Subject 3
const subject4 = 88; // Marks for Subject 4
const subject5 = 92; // Marks for Subject 5

// Calculate total marks
const totalMarks = 500; // Assuming each subject has 100 marks
let obtainedMarks = subject1 + subject2 + subject3 + subject4 + subject5;

// Calculate percentage
let percentage = (obtainedMarks / totalMarks) * 100;

// Determine grade
let grade;
if (percentage >= 90) {
grade = "A+";
} else if (percentage >= 80) {
grade = "A";
} else if (percentage >= 70) {
grade = "B";
} else if (percentage >= 60) {
grade = "C";
} else {
grade = "Fail";
}

// Create the marksheet using template literals
const marksheet = `
<h2>Marksheet</h2>
<p><strong>Subject 1:</strong> ${subject1}</p>
<p><strong>Subject 2:</strong> ${subject2}</p>
<p><strong>Subject 3:</strong> ${subject3}</p>
<p><strong>Subject 4:</strong> ${subject4}</p>
<p><strong>Subject 5:</strong> ${subject5}</p>
<p><strong>Total Marks:</strong> ${totalMarks}</p>
<p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
<p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
<p><strong>Grade:</strong> ${grade}</p>
`;

// Display the marksheet using document.write
document.write(marksheet);

//QUESTION NO 02
 // Mobile data
 const mobileData = {
    Samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy Z Flip"],
    Apple: ["iPhone 13", "iPhone 12", "iPhone SE"],
    OnePlus: ["OnePlus 9", "OnePlus 8T", "OnePlus Nord"]
  };

  // DOM elements
  const brandDropdown = document.getElementById("brand");
  const modelDropdown = document.getElementById("model");
  const searchButton = document.getElementById("search");
  const outputDiv = document.getElementById("output");

  // Populate models based on selected brand
  brandDropdown.addEventListener("change", function () {
    const selectedBrand = brandDropdown.value;

    // Clear and disable model dropdown if no brand selected
    if (!selectedBrand) {
      modelDropdown.innerHTML = `<option value="">--Select a Model--</option>`;
      modelDropdown.disabled = true;
      searchButton.disabled = true;
      return;
    }

    // Populate models for the selected brand
    const models = mobileData[selectedBrand];
    modelDropdown.innerHTML = `<option value="">--Select a Model--</option>`;
    models.forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelDropdown.appendChild(option);
    });
    
    modelDropdown.disabled = false; // Enable model dropdown
  });

  // Enable search button when a model is selected
  modelDropdown.addEventListener("change", function () {
    searchButton.disabled = !modelDropdown.value;
  });

  // Display selected brand and model on search
  searchButton.addEventListener("click", function () {
    const selectedBrand = brandDropdown.value;
    const selectedModel = modelDropdown.value;
    outputDiv.innerHTML = `<strong>Selected Brand:</strong> ${selectedBrand}<br>
                           <strong>Selected Model:</strong> ${selectedModel}`;
  });