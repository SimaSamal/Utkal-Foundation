// fetch("../Components/Header/header.html")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     document.getElementById("header").innerHTML = data;
//     // console.log(data);
//   });
fetch("/src/Components/Header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    initializeHeader(); // Initialize JavaScript after content is loaded
  })
  .catch((error) => console.error("Error loading the header:", error));



