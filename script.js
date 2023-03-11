window.onload = () => {
  
  const boxes = document.querySelectorAll('.box');
  const inputs = document.querySelectorAll('.input');
  
  function generate() {
    // looping boxes
    boxes.forEach(box => {
      // looping inputs
      inputs.forEach(input => {
        // dapatkan warna acak
        const color = hexColorGenerator();
        // set warna ke element box dan input
        box.style.background = color;
        input.value = color;
      });
    });
  }
  
  generate();
  
  function hexColorGenerator() {
    // string 
    const str = '0123456789abcdef';
    let result = '#';
    // looping
    for (let i = 0; i < 6; i++) {
      // masukka hasil looping ke variabel result
      result += str[Math.floor(Math.random() * str.length)];
    }
    // kembalikan nilai berupa kode warna
    return result.toUpperCase();
  }
  
  // fitur menyalin
  inputs.forEach(input => {
    input.addEventListener('click', function() {
      // jika input kosong
      if (!this.value) return alert('field is empty!');
      // ambil value input
      this.select();
      // salin
      document.execCommand('copy');
      // tampilkan pesan
      alert('color has been copied!');
    });
  });
  
  // generate warna baru 
  const generateButton = document.querySelector('.button');
  generateButton.addEventListener('click', generate);
  
}