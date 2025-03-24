
const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreLinks = document.getElementById("moreLinks");

window.addEventListener('scroll', () => {
    const floatingBar = document.querySelector('.floating-bar');
    const scrollY = window.scrollY;
    
    if (scrollY > 800) {
        floatingBar.classList.add('scrolling');
    } else {
        floatingBar.classList.remove('scrolling');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".hey_anmt span");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transform = "translateX(0)";
        }, index * 200);
    });
});

window.addEventListener('scroll', () => {
    const hrLine = document.querySelector('.hr-line');
    const scrollY = window.scrollY;

    if (scrollY > 250) {
        if (scrollY > 800){
            hrLine.classList.remove('unite');
        }
        else{
            hrLine.classList.add('unite'); 
        }
    } 
    
    else {
        hrLine.classList.remove('unite'); 
    }
});

/*
document.addEventListener('mousemove', (e) => {
    const overlay = document.querySelector('.vignette-overlay');
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    
    overlay.style.background = `radial-gradient(
        circle at ${x}% ${y}%,
        rgba(255, 255, 255, 0) 40%,
        rgba(0, 0, 0, 0.9) 85%
    )`;
});*/

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const box = entry.target;
            
            if (entry.isIntersecting) {
                box.classList.remove('animate-out');
                box.classList.add('animate-in');
            } 
        });
    }, {
        threshold: 0.35,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.project-box').forEach(box => observer.observe(box));
});

document.addEventListener('DOMContentLoaded', () => {
    // Esperar al próximo frame de renderizado
    requestAnimationFrame(() => {
        const overlay = document.createElement('div');
        overlay.className = 'vignette-overlay';
        
        // Forzar sincronización con el compositor
        overlay.style.transform = 'translateZ(0)';
        
        // Añadir al DOM usando requestIdleCallback
        requestIdleCallback(() => {
            document.body.appendChild(overlay);
        }, { timeout: 100 });
    });
});


learnMoreBtn.addEventListener("click", function () {
    moreLinks.classList.toggle("show"); // Alternar la clase sin modificar "display"
});

(function(){
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
            if (entry.duration > 50) {
                console.warn('Long Task detected:', entry);
            }
        });
    });
    observer.observe({ entryTypes: ['longtask'] });
})();

function createParticles() {
    const container = document.querySelector('.particles');
    const particleCount = 40; // Ajusta la cantidad
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Tamaño aleatorio entre 1px y 3px
        const size = 1 + Math.random() * 2;
        particle.style.width = particle.style.height = `${size}px`;
        
        // Retraso de animación aleatorio
        particle.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(particle);
    }
}

createParticles();