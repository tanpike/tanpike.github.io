fetch('site/static/body/home.html')
  .then(response => response.text())
  .then(body => mainb.innerHTML = body)

