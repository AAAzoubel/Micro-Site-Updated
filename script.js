document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;
            const targetContent = document.getElementById(targetId);

            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            tabs.forEach(t => {
                t.classList.remove('active');
            });

            tab.classList.add('active');
            targetContent.classList.add('active');
        });
    });
});

// Validando o formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(name && email && message) {
        alert('Message sent!');
        this.reset(); // 
    } else {
        alert('Please, fill all the fields.');
    }
});
