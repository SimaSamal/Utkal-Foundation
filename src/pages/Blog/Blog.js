document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      const paragraph = button.previousElementSibling; // Selects the paragraph before the button
      if (paragraph.classList.contains('collapsed')) {
        paragraph.classList.remove('collapsed');
        button.textContent = 'Read Less';
      } else {
        paragraph.classList.add('collapsed');
        button.textContent = 'Read More';
      }
    });
  });
  