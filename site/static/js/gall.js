var simpleCrypto;
var picurlstart;

function gimmeFive(){
  picurlstart = simpleCrypto.decrypt("d094e410adce78d1b47f5085b6b3df505cdeb771a570bcda6c281ce0bf2003f0Hap0Vdau0E1y3uPhAPVVCfsVt4/Ef17VjtnzZE5atSqeVwNf6sCbo8QVvT5+mlp+2455eca59824cc563881fd7384edec7c14079e590ed96133eaa6fe79ca960e11");
  imgThumbs.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Waking up repl...</span></div>';
  imgWindow.innerHTML = '';
  fetch(backendURL + '/randFive', {method:"POST"})
    .then(response => response.text())
    .then(body => {
          moustr = gallRez(body);
          imgThumbs.innerHTML = moustr;
        })
}

function getFaves(){
  imgWindow.innerHTML = '';
  fetch(backendURL + '/getFaves', {method:"POST"})
    .then(response => response.text())
    .then(body => {
          moustr = gallRez(body);
          imgThumbs.innerHTML = moustr;
        })
}

function parseRez(rezstr){
  rezstr = rezstr.replace("[","");
  rezstr = rezstr.replace("]",""); 
  rezstr = rezstr.replaceAll("), (",") (");
  rezstr = rezstr.replaceAll("(","<tr><td>");
  rezstr = rezstr.replaceAll(")","</td></tr>");
  rezstr = rezstr.replaceAll(",","</td><td>");
  oustr = "<table><thead><tr><td scope='col'>id</td><td scope='col'>text</td><td scope='col'>type</td><td scope='col'>wid</td><td scope='col'>hig</td><td scope='col'>size</td><td scope='col'>fav</td></tr></thead>"
  oustr = oustr + "<tbody>";
  oustr = oustr + rezstr;
  oustr = oustr + "</tbody></table>";
  return oustr
}

function gallRez(rezstr){
  oustr = '';
  rezstr = rezstr.replace("[","");
  rezstr = rezstr.replace("]",""); 
  rezstr = rezstr.replaceAll("), (",") (");
  
  for (elm of rezstr.split(") (")){
    oustr = oustr + '<div class="col">';
    picnum = elm.split(",")[0].replace("(","")
    picid =  elm.split(",")[1].split("'")[1]
    pictype = elm.split(",")[2].split("'")[1]
    picwd = elm.split(",")[3]
    picht = elm.split(",")[4]
    picsz = elm.split(",")[5]
    picfv = elm.split(",")[6].replace(")","")
    console.log(picnum + " " + picid + " " + pictype + " " + picwd  + " " + picht + " " + picsz + " " + picfv)
    //console.log(pictype)
    picurl = picurlstart + picid.slice(9,11) + "/" + picid.slice(7,9) + "/" + picid + "/" + picnum + "." + pictype;
    picthumb = picurlstart + picid.slice(9,11) + "/" + picid.slice(7,9) + "/" + picid + "/" + picnum + "_190x152." + pictype;
    //oustr = oustr + picid + "<br><img src = \"" + picthumb + "\"></img><br>";
    oustr = oustr + "<img src = \"" + picthumb + "\" ";
    oustr = oustr + "onclick = \"showImg(0,\'" + picurl + "\',0,0,0,0)\"";
    oustr = oustr + "></img>";
    oustr = oustr + "</div>";
  };
  //console.log(sjcl.encrypt("ghuzub", "datazub"))
  return oustr
}

function showImg(imNum,imUrl,imType,imW,imH,imSize,imFave){
  //console.log("Show Image clicked: " + imUrl);
  //imgWindow.innerHTML = "<td>hwoowoo " + imUrl + "</td>";
  imgWindow.innerHTML = '<div class="col-lg"><img src="' + imUrl + '" width=800></div>';
}

yktxt.addEventListener("input", updateValue);

function updateValue(e) {
  simpleCrypto = new SimpleCrypto(e.target.value)
  if (simpleCrypto.decrypt("4c6586e03aa84618a2cac6b0d47f4e3551c06fdf65a5b276b6e56051a740d90c1anLE/rnHV1347U3yt/saw==d5ad6ce2f2a5f3bfe0926d126c096379250d30b1360c7ce593c27e8745b0b5d8") == "NSFW"){
    gimmeFive();
  }
}



