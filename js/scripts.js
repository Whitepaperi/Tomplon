/*!
* Scripts
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('animation-piti')) {
                entry.target.classList.add('animate__bounceIn');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null, 
        rootMargin: '0px',
        threshold: 1 
    });

   
    document.querySelectorAll('div.animation-piti').forEach(div => {
        observer.observe(div);
    });
});

// Colorful
function randomizeColors() {
    var text = "algorithmically"; 
    var colorfulText = '';

    for (var i = 0; i < text.length; i++) {
        var color = "#" + Math.floor(Math.random()*16777215).toString(16);
        colorfulText += '<span style="color:' + color + ';">' + text.charAt(i) + '</span>';
    }
    
    document.getElementById('colorful').innerHTML = colorfulText;
}


// Colorful-2
function randomizeColors2() {
    var text = "RATS"; 
    var colorfulText = '';

    for (var i = 0; i < text.length; i++) {
        var color = "#" + Math.floor(Math.random()*16777215).toString(16);
        colorfulText += '<span style="color:' + color + ';">' + text.charAt(i) + '</span>';
    }
    
    document.getElementById('pitifun-colorful').innerHTML = colorfulText;
}


// Dynamic Color
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function getContrastColor(bgColor) {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? '#000000' : '#FFFFFF';
}

function changeColors() {
    const words = document.querySelectorAll('.dynamic-color');
    words.forEach(word => {
        const bgColor = generateColor();
        const textColor = getContrastColor(bgColor);
        word.style.backgroundColor = bgColor;
        word.style.color = textColor;
    });
}

window.onload = function() {
    changeColors();
    setInterval(changeColors, 100); // Every second
    randomizeColors();
    setInterval(randomizeColors, 100); 
    randomizeColors2();
    setInterval(randomizeColors2, 100); 
};

function copyText() {
    var text = document.getElementById("cont-addr-pitifun");
    //navigator.clipboard.writeText(text.innerText);
    navigator.clipboard.writeText("konyol");
  
    setTimeout(function() { 
        text.style.animation = 'bounce 0.5s ease 1';
    }, 20);

    document.getElementById("copied-ca").style.display = "block";

}

function comingSoon() {
    document.getElementById("soon-piti").style.display = "block";
  }