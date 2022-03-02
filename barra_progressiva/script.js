let progressive_bar = document.querySelector(".progress_bar");

let progress_value_percentage = 0;

function progress() {
    let interval = setInterval(() => {
        if (progress_value_percentage <= 100) {
            progressive_bar.style.width = `${progress_value_percentage}%`;
            progress_value_percentage += 1;
        } else {
            clearInterval(interval);
            progress_value_percentage = 0;
            progressive_bar.style.width = `${progress_value_percentage}%`;
            progress();
        }
    }, 100);
}

progress();