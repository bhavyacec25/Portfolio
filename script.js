const title = document.querySelector("header h1");
const titleText = "BHAVYA CHHAJER";
let i = 0;

function typeWriterEffect() {
    if (i < titleText.length) {
        title.innerHTML = titleText.substring(0, i + 1);
        i++;
        setTimeout(typeWriterEffect, 120);
    }
}
typeWriterEffect();

/* -----------------------------------------------
   2️⃣ DARK MODE TOGGLE BUTTON (Animated)
------------------------------------------------- */
let darkButton = document.createElement("button");
darkButton.innerHTML = "🌙";
darkButton.id = "darkBtn";

document.body.appendChild(darkButton);

darkButton.style.position = "fixed";
darkButton.style.bottom = "25px";
darkButton.style.right = "25px";
darkButton.style.padding = "14px 18px";
darkButton.style.background = "#0a3d62";
darkButton.style.color = "white";
darkButton.style.fontSize = "20px";
darkButton.style.border = "none";
darkButton.style.borderRadius = "50%";
darkButton.style.cursor = "pointer";
darkButton.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
darkButton.style.transition = "0.3s";

darkButton.onmouseover = () => {
    darkButton.style.transform = "scale(1.1)";
};

darkButton.onmouseout = () => {
    darkButton.style.transform = "scale(1)";
};

darkButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
    darkButton.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};

/* -----------------------------------------------
   3️⃣ SCROLL REVEAL ANIMATION
------------------------------------------------- */
const revealElements = document.querySelectorAll("section, aside, table");

function revealOnScroll() {
    revealElements.forEach(elem => {
        const position = elem.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            elem.style.opacity = "1";
            elem.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(elem => {
    elem.style.opacity = "0";
    elem.style.transform = "translateY(60px)";
    elem.style.transition = "1s ease";
});

window.addEventListener("scroll", revealOnScroll);

/* -----------------------------------------------
   4️⃣ BACK TO TOP BUTTON
------------------------------------------------- */
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topButton";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "90px";
topBtn.style.right = "25px";
topBtn.style.padding = "12px 18px";
topBtn.style.fontSize = "20px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#38ada9";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
topBtn.style.display = "none";
topBtn.style.transition = "0.3s";

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* -----------------------------------------------
   5️⃣ 3D TILT CARD EFFECT
------------------------------------------------- */
document.querySelectorAll("section, aside").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `
            perspective(1000px)
            rotateX(${-(y / 25)}deg)
            rotateY(${x / 25}deg)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
});

/* -----------------------------------------------
   6️⃣ NAVBAR ACTIVE LINK INDICATOR
------------------------------------------------- */
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

/* -----------------------------------------------
   7️⃣ IMAGE LIGHTBOX POPUP
------------------------------------------------- */
const img = document.querySelector(".about img");

img.style.cursor = "pointer";

img.onclick = () => {
    let popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,0.8)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "9999";

    let bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.width = "40%";
    bigImg.style.borderRadius = "15px";
    bigImg.style.boxShadow = "0 0 20px white";

    popup.appendChild(bigImg);
    document.body.appendChild(popup);

    popup.onclick = () => popup.remove();
};