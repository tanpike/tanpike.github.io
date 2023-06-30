const dropElement = document.getElementById("drop_zone");

dropElement.addEventListener("dragenter", (event) => {
  event.preventDefault();
});

dropElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});

/*dropElement.onpaste = function (event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items)); // might give you mime types
    for (var index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function (event) {
                console.log(event.target.result); // data url!
            }; 
            reader.readAsDataURL(blob);
        }
        else {console.log("itemzzz " + item)};
    }
};
*/

function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if ((item.kind === "file")) {
        console.log("bo");
        const file = item.getAsFile();
        console.log(` file[${i}].name = ${file.name}`);
      }
      else {console.log("itemk " + item.kind + " OK " + item.type)}
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(` file[${i}].name = ${file.name}`);
    });
  }
}
