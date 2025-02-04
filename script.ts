// Event listener for form submission
document
  .querySelector("#resumeForm")
  ?.addEventListener("submit", function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get references to form fields
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const profilePictureElement = document.getElementById(
      "profile-Picture"
    ) as HTMLInputElement;

    // Check if all fields are available
    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      skillsElement &&
      educationElement &&
      experienceElement &&
      profilePictureElement
    ) {
      // Get the values from the form
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const skills = skillsElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;

      // Handle profile picture file
      const profilePictureFile = profilePictureElement.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // Prepare the formatted resume output
      const output = `
      <h2>Personal Information</h2>
      ${
        profilePictureURL
          ? `<img src="${profilePictureURL}" alt="profile-Picture" class="profile-Picture">`
          : ""
      }
      <div><strong>Name:</strong> ${name}</div>
      <div><strong>Email:</strong> ${email}</div>
      <div><strong>Phone:</strong> ${phone}</div>
      <div><strong>Address:</strong> ${address}</div>
      <div><strong>Skills:</strong> ${skills}</div>
      <div><strong>Education:</strong> ${education}</div>
      <div><strong>Experience:</strong> ${experience}</div>`;

      // Get the output element and display the resume
      const outputElement = document.getElementById("output");
      if (outputElement) {
        outputElement.innerHTML = output;
        outputElement.style.display = "block"; // Show the output div after form submission
      }
    } else {
      console.log("One or more input fields are missing");
    }
  });
