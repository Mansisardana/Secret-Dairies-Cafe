document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contract-container');
    const submitBtn = document.querySelector('.submit-btn');
    const backBtn = document.querySelector('.back-btn');
    const confirmationModal = document.createElement('div');
    
    // Create confirmation modal
    confirmationModal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FFF8E7;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
        text-align: center;
        display: none;
        z-index: 1000;
        border: 2px solid #D2B48C;
    `;
    confirmationModal.innerHTML = `
        <h3 style="color: #6F4E37; margin-top: 0;">☕ Contract Sealed! ☕</h3>
        <p>Your secret is safe with us</p>
        <div style="font-size: 3rem;">📜➡️🗝️</div>
        <button class="modal-close-btn" style="margin-top: 1rem;">Close</button>
    `;
    document.body.appendChild(confirmationModal);

    // Back button functionality
    backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
        // Alternatively: window.location.href = '/your-cafe-page.html';
    });

    // Modal close functionality
    confirmationModal.querySelector('.modal-close-btn').addEventListener('click', () => {
        confirmationModal.style.display = 'none';
        form.style.opacity = '1';
    });

    // Form validation and submission
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const signature = document.querySelector('textarea').value;
        const date = document.querySelector('input[type="date"]').value;
        const agreement = document.querySelector('input[type="checkbox"]').checked;

        // Validation
        const errorMessages = [];
        if (!name) errorMessages.push('Please enter your full name');
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errorMessages.push('Please enter a valid email');
        if (!signature) errorMessages.push('Please provide your digital signature');
        if (!date) errorMessages.push('Please select a commitment date');
        if (!agreement) errorMessages.push('Please agree to preserve our atmosphere');

        if (errorMessages.length > 0) {
            showError(errorMessages.join('<br>'));
            return;
        }

        // Simulate form submission
        submitBtn.innerHTML = 'Sealing... ☕';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            confirmationModal.style.display = 'block';
            form.style.opacity = '0.5';
            submitBtn.innerHTML = 'Seal with a Coffee Stain ☕';
            submitBtn.disabled = false;
            form.reset();
        }, 1500);
    });

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #FFEBEE;
            color: #B71C1C;
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid #FFCDD2;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        `;
        errorDiv.innerHTML = message;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
});