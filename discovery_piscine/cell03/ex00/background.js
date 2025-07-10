function handleSubmit() {
    let hexNumbers = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "F",
    ];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexColorCode += hexNumbers[randomIndex];
    }
    document.getElementsByTagName("body")[0].style.background =
      "#" + hexColorCode;

    var btn = document.getElementById("myButton");
    txt = document.getElementById('textt');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1)+'px';
    var currwidth = btn.clientWidth;
    var currheight = btn.clientHeight;
    
    btn.style.width = (currwidth + 20) + "px";
    btn.style.height = (currheight + 10) + "px";
    
}
