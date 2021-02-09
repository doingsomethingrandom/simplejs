function print(txt, Id, by) {
  if (Id === undifined && !(by === ("QSall" || "QS"))) {
    var err = "Error: you can't have the \"Id\" field as undifined when you specify \"QSall\" or \"QS\" in the \"by\" field of \"out.print()\"";
    console.log(err);
  } else if (by !== ("QS" || "QSall")) {
    var err = "Error: the \"by\" field of \"out.print()\" is not \"QS\" or \"QSall\" they are the only acceptable ones your code contains something different"
  } else if (by === "QS") {
    document.querySelector(Id).innerHTML = txt;
  } else if (by === "QSall") {
    document.querySelectorAll(Id).innerHTML = txt;
  } else if (by === null) {
    document.write(txt);
  }
}
