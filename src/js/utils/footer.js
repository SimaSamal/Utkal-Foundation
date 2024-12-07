fetch("/src/Components/Footer/footer.html")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => {
    console.log(data)
    const Footer = document.getElementById("footer");
    Footer.innerHTML = data;
  });
