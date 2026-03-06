document.addEventListener("DOMContentLoaded", function () {

 const dateElement = document.getElementById("date");
    if (dateElement) {
        const today = new Date();
        dateElement.innerHTML = today.toDateString();
    }
});

function confirmBooking() {
    alert("Your appointment has been successfully submitted!");
}

