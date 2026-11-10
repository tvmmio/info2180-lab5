document.addEventListener("DOMContentLoaded", function () {
  const lookupButton = document.getElementById("lookup");
  const citiesButton = document.getElementById("lookup-cities");
  const countryInput = document.getElementById("country");
  const result = document.getElementById("result");

  function search(lookupType) {
    const country = countryInput.value.trim();
    let url = "world.php?country=" + encodeURIComponent(country);

    if (lookupType === "cities") {
      url += "&lookup=cities";
    }

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      })
      .catch(function (error) {
        result.innerHTML = "<p>Something went wrong. Please try again.</p>";
        console.log(error);
      });
  }

  lookupButton.addEventListener("click", function () {
    search("countries");
  });

  citiesButton.addEventListener("click", function () {
    search("cities");
  });
});
