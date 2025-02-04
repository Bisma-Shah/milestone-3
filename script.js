var _a;
// Event listener for form submission
(_a = document
    .querySelector("#resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    // Get references to form fields
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var skillsElement = document.getElementById("skills");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var profilePictureElement = document.getElementById("profile-Picture");
    // Check if all fields are available
    if (nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        skillsElement &&
        educationElement &&
        experienceElement &&
        profilePictureElement) {
        // Get the values from the form
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var skills = skillsElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        // Handle profile picture file
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Prepare the formatted resume output
        var output = "\n      <h2>Personal Information</h2>\n      ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile-Picture\" class=\"profile-Picture\">")
            : "", "\n      <div><strong>Name:</strong> ").concat(name_1, "</div>\n      <div><strong>Email:</strong> ").concat(email, "</div>\n      <div><strong>Phone:</strong> ").concat(phone, "</div>\n      <div><strong>Address:</strong> ").concat(address, "</div>\n      <div><strong>Skills:</strong> ").concat(skills, "</div>\n      <div><strong>Education:</strong> ").concat(education, "</div>\n      <div><strong>Experience:</strong> ").concat(experience, "</div>");
        // Get the output element and display the resume
        var outputElement = document.getElementById("output");
        if (outputElement) {
            outputElement.innerHTML = output;
            outputElement.style.display = "block"; // Show the output div after form submission
        }
    }
    else {
        console.log("One or more input fields are missing");
    }
});
