$(document).ready(function () {
  $("#weatherForm").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting via the browser.

    var city = $("#city").val();
    var apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (data) {
        var resultHtml = `
                    <h2>Weather for ${data.name}</h2>
                    <p>Temperature: ${(data.main.temp - 273.15).toFixed(
                      2
                    )} °C</p>
                    <p>Weather: ${data.weather[0].main}</p>
                    <p>Description: ${data.weather[0].description}</p>
                `;
        $("#result").html(resultHtml);
      },
      error: function (xhr) {
        if (xhr.status === 401) {
          // Handle unauthorized error
          console.error(
            "Authentication failed. Check your API key or credentials."
          );
        } else {
          console.error("An error occurred: " + xhr.status);
        }
      },
    });
  });
});
