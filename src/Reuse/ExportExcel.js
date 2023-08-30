function download_to_excel(e, modalBlock, ID) {
  var tab_text = "<table><tr>";
  // var textRange = "";
  var j = 0;
  var tab = document.getElementById(ID);
  for (j = 0; j < tab.rows.length; j++) {
    tab_text += tab.rows[j].innerHTML + "</tr>";
  }
  tab_text += "</table>";
  var a = document.createElement("a");
  var data_type = "data:application/vnd.ms-excel";
  a.href = data_type + ", " + encodeURIComponent(tab_text);
  a.download = modalBlock + "_Survey.xls";
  a.click();
  e.preventDefault();
}

export default download_to_excel;
