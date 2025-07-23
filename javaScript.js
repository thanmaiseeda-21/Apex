document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});
