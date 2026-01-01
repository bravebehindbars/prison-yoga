const now = new Date ();
console.log(now);  // Full date and time
console.log(now.toDateString());  // Only date (e.g. "Tuesday Jul 22 2025")
console.log(now.toTimeString());  // Only time (e.g. "19:16:30 EST")

function updateClock() {
      const now = new Date();

      // Get date parts
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = now.getFullYear();
      const	dateString = `${month}/${day}/${year}`;

      // Get time parts
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';

     // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // '0' becomes '12'
      hours = String(hours).padStart(2, '0');

      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

      document.getElementById('clock').textContent = `${dateString} ${timeString}`;
    }

    setInterval(updateClock, 1000); // Update every second
    updateClock(); // Initial call


    function addYogaGif() {
      const img = document.createElement("img");
      img.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGEwYnJvcnNzbWVvYzA1dnRlMnlsMXJpb21kcWRxeTRoNWFxOTU2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6VsSJhslIFqbLDCytI/giphy.gif"; 
      img.alt = "Person doing yoga";
      img.style.width = "300px"; // optional
      document.getElementById("yogaContainer").appendChild(img);
}

function playAudio() {
      const audio = document.getElementById('backgroundAudio');
      audio.play()
        .then(() => {
          console.log("Audio is playing.");
        })
        .catch(error => {
          console.error("Error playing audio:", error);
        });
    }



const scriptURL = 'https://script.google.com/macros/s/AKfycbw5OlC9yQQbd59chNZpB8JKAYQjtcBm0ROXQZ_OIgJEGtliBvRv505LDHVLbavlYa02/exec'; 
  document.getElementById('feedback-form').addEventListener('submit', e => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      question1: form.question1.value,
      comments: form.comments.value,
      comments: form.comments.value,
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert('Thanks for your feedback!');
        form.reset();
      } else {
        alert('Error submitting the form.');
      }
    })
    .catch(error => alert('Error: ' + error.message));
  });