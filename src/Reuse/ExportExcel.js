import * as XLSX from "xlsx";

function exportToExcel(type, fn, dl) {
  var elt = document.getElementById("ExportTable");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" }) : XLSX.writeFile(wb, fn || "MySheetName." + (type || "xlsx"));
}

export default exportToExcel;
