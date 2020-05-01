var element;

element = document.body;

  //element = document.getElementById("topleft");

  //element = document.getElementsByClassName("diva");

//  //////////InnerTest/////////
  //element = document.getElementById("topleft").innerText;
element = document.getElementById("logoleft").innerHTML;



 element = document.getElementById("logoleft").getAttribute("onClick"); // attrubute value target name dena hoga
element = document.getElementById("logoleft").getAttributeNode("onClick");
 element = document.getElementById("logoleft").attributes[1].value;
 element = document.getElementById("logoleft").attributes[1].name;
 
console.log(element);