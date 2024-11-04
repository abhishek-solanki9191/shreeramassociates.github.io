
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(this);

        // Send data to Google Apps Script
        fetch("https://script.google.com/macros/s/AKfycbw93Ix1VFBGrv3BLsHQsQpZNxa9L7y6_1iLJ0KGvNj7tXJ69sFNNugJYrketwS2b0C6hA/exec", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                // Optionally reset the form or hide it
                this.reset();
                document.querySelector(".contact-page").style.display = "none";
            } else {
                alert("There was a problem with the submission.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was a problem with the submission.");
        });
    });

