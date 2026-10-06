// =================================
// ARTORA JAVASCRIPT
// =================================


// CONTACT FORM
// =================================

const contactForm = document.querySelector(".contact-form");
const successMessage = document.getElementById("successMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        successMessage.textContent =
            "Thank you for contacting ARTORA! We will get back to you soon.";

        contactForm.reset();

    });

}
// =================================
// GALLERY FILTER
// =================================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter = button.getAttribute("data-filter");


        // Remove active from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });


        // Add active to clicked button
        button.classList.add("active");


        // Filter artworks
        galleryItems.forEach(function(item) {

            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });

    });

});

// =================================
// IMAGE LIGHTBOX
// =================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const artworkImages = document.querySelectorAll(".gallery-item img");

let currentImage = 0;


// Open image

artworkImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentImage = index;

        showImage();

        lightbox.classList.add("show");

    });

});


// Show image

function showImage() {

    if (artworkImages.length === 0) {
        return;
    }

    lightboxImage.src = artworkImages[currentImage].src;

    lightboxImage.alt = artworkImages[currentImage].alt;

}


// Previous button

if (lightboxPrev) {

    lightboxPrev.addEventListener("click", function(event) {

        event.stopPropagation();

        currentImage--;

        if (currentImage < 0) {
            currentImage = artworkImages.length - 1;
        }

        showImage();

    });

}


// Next button

if (lightboxNext) {

    lightboxNext.addEventListener("click", function(event) {

        event.stopPropagation();

        currentImage++;

        if (currentImage >= artworkImages.length) {
            currentImage = 0;
        }

        showImage();

    });

}


// Close button

if (lightboxClose) {

    lightboxClose.addEventListener("click", function() {

        lightbox.classList.remove("show");

    });

}


// Click outside to close

if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}