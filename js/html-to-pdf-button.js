document.getElementById('download-pdf-button').onclick = () => {
  const element = document.getElementById('main-article')
  const title = document.querySelector('title').innerText
  const opt = {
    margin:       0.5,
    filename:     `${title}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  
  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
}