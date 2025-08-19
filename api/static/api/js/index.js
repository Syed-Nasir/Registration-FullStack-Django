document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const data = {
            first_name: document.getElementById("first_name").value,
            last_name: document.getElementById("last_name").value,
            email: document.getElementById("email").value,
        };

        fetch("http://127.0.0.1:8000/frmprc/frm/frmprc/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCSRFToken(),
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json(); // Or .text() if your view returns plain text
        })
        // .then(result => {
        //     alert("Form submitted successfully!");
        //     console.log(result);
        // })
        .then(data => {
            // Assuming the API response includes the ID or full object
            window.location.href = `/frmprc/profile/${data.id}/`;
        })
        .catch(error => {
            alert("There was a problem submitting the form.");
            console.error(error);
        });
    });
});

// Utility to get CSRF token from cookie (for Django)
function getCSRFToken() {
    let name = "csrftoken";
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}