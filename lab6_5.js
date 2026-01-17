document.addEventListener('DOMContentLoaded', function() {

    const cells = document.querySelectorAll('td');
  
    cells.forEach(cell => {
      const [i, j] = cell.textContent.trim().split(':').map(Number);
      
      if ((i + j) % 2 === 0) {
        cell.style.backgroundColor = 'red';
       
      }
    });
  });