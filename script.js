// 📌 Dynamic Greeting Based on Time
function setGreeting() {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerText = 'Good Morning!';
    } else if (hour < 18) {
        greeting.innerText = 'Good Afternoon!';
    } else {
        greeting.innerText = 'Good Evening!';
    }
}

// 📌 Skill Counter
function countSkills() {
    const skills = document.querySelectorAll('#skills-list li');
    document.getElementById('skillCount').innerText = skills.length;
}

// 📌 Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const currentTheme = document.body.classList.contains('dark-theme') ? 'Dark' : 'Light';
    alert(`Switched to ${currentTheme} Theme`);
}

// 📌 Form Validation
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    if (name && message) {
        feedback.style.color = 'green';
        feedback.innerText = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contactForm').reset();
    } else {
        feedback.style.color = 'red';
        feedback.innerText = 'Please fill in all fields!';
    }
}

// 📌 Show Contact Information
function showContact() {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
}

// 📌 Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    setGreeting();
    countSkills();
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('showContactButton')?.addEventListener('click', showContact);
});