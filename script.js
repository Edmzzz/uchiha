document.addEventListener('DOMContentLoaded', function () {
    const transformBtn = document.getElementById('transform-btn');
    const sharinganContainer = document.getElementById('sharingan-container');
    const mangekyouContainer = document.getElementById('mangekyou-container');
    const sharinganInfo = document.getElementById('sharingan-info');
    const mangekyouInfo = document.getElementById('mangekyou-info'); // corrected ID here
    const body = document.body;

    // Toggle between Sharingan and Mangekyou display
    transformBtn.addEventListener('click', function () {
        // Toggle background classes
        body.classList.toggle('light-bg');
        body.classList.toggle('dark-bg');

        // Toggle visibility of Sharingan and Mangekyou containers
        if (sharinganContainer.style.display === 'none') {
            sharinganContainer.style.display = 'block';
            sharinganInfo.style.display = 'block';
            mangekyouContainer.style.display = 'none';
            mangekyouInfo.style.display = 'none';
            transformBtn.textContent = 'Transform to Mangekyou';
        } else {
            sharinganContainer.style.display = 'none';
            sharinganInfo.style.display = 'none';
            mangekyouContainer.style.display = 'block';
            mangekyouInfo.style.display = 'block'; // corrected reference here
            transformBtn.textContent = 'Transform to Sharingan';
        }
    });
});
