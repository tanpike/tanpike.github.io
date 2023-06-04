fetch('https://gall.tanpike.repl.co/randFive', {method:"POST"})
  .then(response => response.text())
  .then(body => {console.log(body); innerc.innerHTML = body;})
