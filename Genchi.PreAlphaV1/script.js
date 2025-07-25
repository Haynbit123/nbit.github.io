document.addEventListener('DOMContentLoaded', function() {
    const webhookUrl = 'https://discord.com/api/webhooks/1308783365817765928/0e9gMELASsfPUDjrB-XX4pJNASPpeQh6koXfqI71CMaNHEjBpOOyrLqUrh1ASk3yWmUE'; // Your Discord webhook URL

    function openRatingModal() {
        const name = prompt("Please enter your name:");
        if (name) {
            let rating;
            do {
                rating = prompt("Please rate us from 1 to 5 stars:");
                if (rating === null) return; // Exit if the user cancels
            } while (!rating || isNaN(rating) || rating < 1 || rating > 5);

            const feedback = prompt("Please provide additional feedback:");
            sendRating(name, rating, feedback);
        }
    }

    function sendRating(name, rating, feedback) {
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [{
                    title: "New Rating Received",
                    description: `${name} rated ${rating} stars`,
                    fields: [
                        { name: "Feedback", value: feedback || "No feedback provided" }
                    ],
                    color: 15258703 // You can choose any hex color
                }]
            })
        });
    }

    window.openRatingModal = openRatingModal; // Expose the function to the global scope
});
