function print(txt, ID, by) {
  if (ID === undifined && !(by === ("QSall" || "QS"))) {
    var err = "Error: you can't have the ID field as undifined when you specify QSall or QS in the by field of out.print()";
    console.log(err);
  } else if (by !== ("QS" || "QSall")) {
    var err = "Error: the by field of out.print() is not QS or QSall they are the only acceptable ones your code contains something different"
  } else if (by === "QS") {
    document.querySelector(ID);
  } else if (by === "QSall") {
    document.querySelectorAll(ID).innerHTML = txt;
  } else if (by === null) {
    document.write(txt);
  }
}
