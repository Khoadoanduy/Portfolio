function openPDF() {
    // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
    var pdfUrl = 'Kevin_Resume.pdf';
    
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