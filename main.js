function openPDF() {
    // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
    var pdfUrl = 'Kevin_Doan_resume_April_2024.pdf';
    
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  }
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top; // Fix typo here
        var revealpoint = 150;
        if (revealTop < windowheight - revealpoint) { // Fix typo here
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}