

// Call the function to start displaying text
// displayTextOneByOne(text, 0);
// Text to be displayed one by one
const text = "I'm Olawale Theophilus Temitope 👻"

// Get the text container and text element
const textContainer = document.getElementById("text-container");
const textElement = document.getElementById("text1");

// Function to display text one by one
function displayTextOneByOne(text, index) {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(function() {
            displayTextOneByOne(text, index);
        }, 100); // Adjust the delay here (in milliseconds)
    } else {
        // Reset the text after it's fully displayed
        setTimeout(function() {
            textElement.innerHTML = "";
            displayTextOneByOne(text, 0);
        }, 3000); // Delay before resetting (adjust as needed)
    }
}

// Call the function to start displaying text
displayTextOneByOne(text, 0);

