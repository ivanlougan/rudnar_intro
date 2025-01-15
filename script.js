window.addEventListener('load', () => {
    const introAnimation = document.querySelector('.logo');
    const mainHeader = document.querySelector('.main-header');

    // Check if the intro has already been shown
    if (!localStorage.getItem('introPlayed')) {
        // Play the intro animation
        introAnimation.style.display = 'flex';

        // Hide the intro and show the main header after the animation
        setTimeout(() => {
            introAnimation.style.display = 'none';
            mainHeader.style.display = 'block';
        }, 4000); // 2 seconds for animation + 2 seconds fade out

        // Mark intro as played
        localStorage.setItem('introPlayed', 'true');
    } else {
        // Skip the intro and show the main header
        mainHeader.style.display = 'block';
    }
});
