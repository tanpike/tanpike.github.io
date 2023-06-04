fetch('https://gall.tanpike.repl.co/randFive', {method:"POST"})
  .then(response => response.text())
  .then(body => {
        moustr = parseRez(body);
        innerc.innerHTML = moustr;
      })

function parseRez(rezstr){
  rezstr = rezstr.replace("[","");
  rezstr = rezstr.replace("]",""); 
  rezstr = rezstr.replaceAll("), (",") (");
  rezstr = rezstr.replaceAll("(","<tr><td>");
  rezstr = rezstr.replaceAll(")","</td></tr>");
  rezstr = rezstr.replaceAll(",","</td><td>");
  oustr = "<table><thead><tr><td scope='col'>id</td><td scope='col'>txt</td><td scope='col'>type</td><td scope='col'>wid</td><td scope='col'>hig</td><td scope='col'>size</td><td scope='col'>fav</td></tr></thead>"
  oustr = oustr + "<tbody>";
  oustr = oustr + rezstr;
  oustr = oustr + "</tbody></table>";
  return oustr
}
