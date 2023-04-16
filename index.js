function lineOn() {
    document.getElementById("access").style.borderBottom= "none";
  }
  function lineOut() {
    document.getElementById("access").style.borderBottom= "2px solid rgb(0, 128, 0)";
  }
  function onLine() {
    document.getElementById("line").style.borderBottom= "none";
  }
  function outLine() {
    document.getElementById("line").style.borderBottom= "3px solid rgb(0, 128, 0)";
  }
  function numbers() {
    document.getElementById("all").style.display = "flex";
  }
  function number(){
    document.getElementById("hover").style.backgroundColor="rgb(0,0,255)"
  }
  function numbe(){
    document.getElementById("hover").style.backgroundColor="#3aff9e"
  }
  function pic(){
    this.setAttribute("src","image-hero.webp")
  }
  function picOut(){
    this.setAttribute("src","image-founder.webp")
  }