export function setRotationSpeed(seconds) {
    const imagem = document.getElementById('spinn');
    imagem.style.animationDuration = seconds + 's';

}






export function calculateHue(value) {
    if (value <= 25) {
        // Blue to green transition
        return 240 - (value) // Hues from 240 (blue) to 120 (green)
    } else if (value <= 50) {
        // Green to yellow transition
        return 120 + ((value - 25)) // Hues from 120 (green) to 60 (yellow)
    } else if (value <= 75) {
        // Yellow to red transition
        return 60 - ((value - 50)) // Hues from 60 (yellow) to 0 (red)
    } else {
        // Red
        return 0; // Hues around 0 (red)
    }
}
