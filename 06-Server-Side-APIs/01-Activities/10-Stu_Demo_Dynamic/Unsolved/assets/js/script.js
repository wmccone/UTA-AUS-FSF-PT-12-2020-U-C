var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        var login = document.createElement('h4');
        var url = document.createElement('a');
        login.textContent = data[i].login;
        url.textContent = data[i].url;
        url.href = data[i].html_url
        userContainer.append(login);
        userContainer.append(url);
      }
    });
}
fetchButton.addEventListener('click', getApi);
