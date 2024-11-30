// Get modal element
var modal = document.getElementById("login-modal");

// Get open modal button
var loginBtn = document.getElementById("login-btn");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Listen for close click
closeBtn.onclick = function() {
    modal.style.display = "none"};


// Listen for outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('role-select').addEventListener('change', function() {
    const selectedRole = this.value;
    const patientLoginForm = document.getElementById('patient-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');
    const patientSignupForm = document.getElementById('patient-signup-form');

    // Hide all forms initially
    patientLoginForm.style.display = 'none';
    adminLoginForm.style.display = 'none';
    patientSignupForm.style.display = 'none';

    if (selectedRole === 'patient') {
        patientLoginForm.style.display = 'block'; // Show patient login form
    } else if (selectedRole === 'admin') {
        adminLoginForm.style.display = 'block'; // Show admin login form
    }
});

// Show signup form when link is clicked
document.getElementById('show-signup').onclick = function() {
    document.getElementById('patient-login-form').style.display = 'none';
    document.getElementById('patient-signup-form').style.display = 'block';
};

// Handle patient signup
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('signup-fullname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save user details to local storage
    localStorage.setItem('patientFullName', fullName);
    localStorage.setItem('patientEmail', email);
    localStorage.setItem('patientPassword', password); // Note: Storing passwords in local storage is not secure

    alert('Sign up successful! You can now log in.');
    document.getElementById('sign-up-form').reset(); // Reset the form
});

// Handle patient login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user details from local storage
    const storedEmail = localStorage.getItem('patientEmail');
    const storedPassword = localStorage.getItem('patientPassword');

    // Check if the entered credentials match the stored ones
    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        // Redirect or perform further actions after successful login
    } else {
        alert('Invalid email or password.');
    }
});

// Example function to fetch and display appointments
function fetchAppointments() {
    // Simulated appointment data (replace with actual API call)
    const appointments = [
        { id: 1, date: '2023-10-01', time: '10:00 AM', status: 'Upcoming' },
        { id: 2, date: '2023-09-15', time: '2:00 PM', status: 'Past' }
    ];

    const appointmentsSection = document.getElementById('appointments-list');
    appointmentsSection.innerHTML = ''; // Clear the list

    appointments.forEach(appointment => {
        const appointmentDiv = document.createElement('div');
        appointmentDiv.innerHTML = `<p>Appointment ID: ${appointment.id} - ${appointment.date} at ${appointment.time} - ${appointment.status}</p>`;
        appointmentsSection.appendChild(appointmentDiv);
    });
}

// Example function to update appointment details
function updateAppointment(event) {
    event.preventDefault();

    const appointmentId = document.getElementById('appointment-id').value;
    const newDetails = document.getElementById('new-details').value;

    // Simulated API call to update appointment (replace with actual API call)
    const updateMessage = document.getElementById(' update-message');
    updateMessage.innerText = `Appointment ID ${appointmentId} updated with new details: ${newDetails}`;
}

// Example function to book a new appointment
function bookAppointment(event) {
    event.preventDefault();

    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    // Simulated API call to book appointment (replace with actual API call)
    const bookingMessage = document.getElementById('booking-message');
    bookingMessage.innerText = `New appointment booked on ${appointmentDate} at ${appointmentTime}`;
}

// Event listeners
document.getElementById('update-appointment-form').addEventListener('submit', updateAppointment);
document.getElementById('book-appointment-form').addEventListener('submit', bookAppointment);

// Fetch appointments on page load
window.onload = fetchAppointments;