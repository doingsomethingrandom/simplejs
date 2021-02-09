function print(txt, q, by) {
  if (q === undefined && !(by === ("QSall" || "QS"))) {
    var err = "Error: you can't have the \"q\" field as undefined when you specify \"QSall\" or \"QS\" in the \"by\" field of \"out.print()\"";
    console.log(err);
  } else if (by !== ("QS" || "QSall") && !(by === undefined)) {
    var err = "Error: the \"by\" field of \"out.print()\" is not \"QS\" or \"QSall\" they are the only acceptable ones your code contains something different"
  } else if (by === "QS") {
    document.querySelector(q).innerHTML = txt;
  } else if (by === "QSall") {
    document.querySelectorAll(q).innerHTML = txt;
  } else if (by === undefined && q === undefined) {
    document.write(txt);
  }
}
export print;
