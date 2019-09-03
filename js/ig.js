var request = new XMLHttpRequest();
request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=31338044.7bf166c.83733c761a354b738b4a9bb882487e89&tags=tree', true);

request.onload = function(container) {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    for (var i=0;i < data.data.length;i++) {
        var container = document.getElementById('insta-feed');
        var imgURL = data.data[i].images.standard_resolution.url;
        console.log(imgURL);
        var li = document.createElement('li');
        li.setAttribute('class','instapic');
        container.appendChild(li);
        var img = document.createElement('img');
        img.setAttribute('src',imgURL)
        li.appendChild(img);
    }

    console.log(data);
  } else {
  }
};
request.onerror = function() {
  // There was a connection error of some sort
};
request.send();