// Show a random motivational quote
function showMotivation() {
    const quotes = [
        "You are stronger than you think!",
        "Every day is a fresh start.",
        "Believe in yourself and your abilities.",
        "Small steps every day lead to big changes.",
        "You are not alone. Keep going!"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("motivationText").innerText = quotes[randomIndex];
}

// Function to prompt user to share a story
function addStory() {
    let story = prompt("Share your motivational story:");
    if (story) {
        alert("Thank you for sharing your story! It may inspire others.");
    }
}
