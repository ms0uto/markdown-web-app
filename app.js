const defaultText = `Hello &#x270B;
=======

This is a live markdown editor built in plain HTML,<br> CSS and AlpineJS &#128507;

### Some useful links:

* <a href="https://github.com/ms0uto" target="_blank">Markdown guide</a>

* <a href="https://github.com/ms0uto" target="_blank">Personal github page</a>

### It can even do images!

![Code](https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png)
`
function download() {
  var text = document.getElementById("text-area").value;
  var blob = new Blob([text], { type: "text/markdown" });
  var anchor = document.createElement("a");
  date = Date.now();
  anchor.download = `markdown-${date}.md`;
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none"; // just to be safe!
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function open() {
  inputfile.click();
  document.getElementById("inputfile").addEventListener("change", function () {
    var fr = new FileReader();
    fr.onload = function () {
      var textarea = document.getElementById("text-area");
      textarea.value = fr.result;
      document.getElementById("markdown").innerHTML = marked.parse(fr.result);
      textarea.focus();
    };
    fr.readAsText(this.files[0]);
  });
}

function toggleTheme() {
  document.body.classList.toggle("theme-light");
}
