function lineOn() {
    document.getElementById("access").style.borderBottom= "none";

  }
  function lineOut() {
    document.getElementById("access").style.borderBottom= "rgb(0,255,0)";
    
  }
  function onLine() {
    document.getElementById("line").style.borderBottom= "none";
  }
  function outLine() {
    document.getElementById("line").style.borderBottom= "underline";
    document.getElementById("line").style.textDecorationColor ="green"
      "rgb(0, 255, 0)";
    document.getElementById("line").style.cursor = "pointer";
  }
  function numbers() {
    document.getElementById("all").style.display = "flex";
  }