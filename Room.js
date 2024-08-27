const m01 = document.getElementById('img01');
const m02 = document.getElementById('img02');
const m03 = document.getElementById('img03');

let run = [m01, m02, m03];
let currentImageIndex = 0; // Track the currently displayed image

document.getElementById('grp-btn').addEventListener('click', slide);

function slide() {
    // Hide all images
    for (let i = 0; i < run.length; i++) {
        run[i].classList.add('hidden');
    }

    // Show the current image
    run[currentImageIndex].classList.remove('hidden');

    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % run.length; 
}






