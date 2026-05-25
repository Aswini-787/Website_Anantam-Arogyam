/*email*/

emailjs.init("WEFDUz-xztSy6EXAO");

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Consultation booking loading...");
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        num: document.getElementById("phone").value,
        service: document.getElementById("mode").value
    };

    emailjs.send(
        "service_7uszok7",
        "template_4vgwsyi",
        templateParams
    )
    .then(function() {
        alert("Consultation booked successfully!");
        document.getElementById("bookingForm").reset();
    })
    .catch(function(error) {
        alert("Failed to send booking.");
        console.log(error);
    });

});

/*services transition*/

const track = document.querySelector(".carousel-track");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentSlide = 0;
let visibleSlides = 3;

next.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide <  visibleSlides)
    {
    track.style.transform = `translateX(-${currentSlide * 320}px)`;
    }
     
});

prev.addEventListener("click", () => {
    if(currentSlide > 0){
        currentSlide--;
        track.style.transform = `translateX(-${currentSlide * 320}px)`;
    }
});

/*book appointment button*/

document.getElementById("bookNowBtn").addEventListener("click", function() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
});