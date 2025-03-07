document.addEventListener("DOMContentLoaded", function () {
    function toggleMedia(mediaId) {
        const media = document.getElementById(mediaId);

        if (media) {
            if (media.tagName === "VIDEO") {
                media.classList.toggle("hidden");
                if (!media.classList.contains("hidden")) {
                    media.play();
                } else {
                    media.pause();
                    media.currentTime = 0;
                }
            } else if (media.tagName === "IMG") {
                media.classList.toggle("hidden");
            }
        }
    }

    document.querySelectorAll(".project-box").forEach((box) => {
        box.addEventListener("click", function () {
            const project = this.closest(".project");
            const media = project.querySelector("video, img");

            if (media) {
                toggleMedia(media.id);
            }
        });
    });
});

