document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;

    let ripple = document.createElement('span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // Ripple duration
  });
});
