// Function to store user preferences in localStorage
function savePreferences() {
    const userPreference = document.querySelector("#userPreference").value;
    localStorage.setItem("userPreference", userPreference); // Save to localStorage
    alert('Preference saved!');
}

// Retrieve stored preferences on page load
function loadPreferences() {
    const storedPreference = localStorage.getItem("userPreference");
    if (storedPreference) {
        document.querySelector("#userPreference").value = storedPreference;
    }
}

// Call the loadPreferences function when the page is loaded
window.onload = loadPreferences;

// Trigger animation on button click
document.querySelector("#animateBtn").addEventListener("click", function() {
    this.classList.add("animate");
    // Reset animation after it ends to allow future triggers
    this.addEventListener("animationend", function() {
        this.classList.remove("animate");
    });
});
