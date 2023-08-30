// function createTable(data) {
//   let tableHTML = document.getElementById("tableId");

//   const headers = Object.keys(data[0]);

//   for (const header of headers) {
//     tableHTML += `<th className="resize overflow-auto w-full h-full">${header}</th>`;
//   }

//   tableHTML += "</tr></thead><tbody>";

//   for (const row of data) {
//     tableHTML += `<tr>`;

//     for (const header of headers) {
//       tableHTML += `<td className="resize overflow-auto w-full h-full">${row[header]}</td>`;
//     }

//     tableHTML += "</tr>";
//   }

//   tableHTML += "</tbody></table>";
//   return tableHTML;
// }

// function createTable(objectData) {
//   const table = document.getElementById("tableId");
//   const tableHeader = table.createTHead();
//   const headerRow = tableHeader.insertRow();

//   for (const key in objectData) {
//     if (key !== "Object") {
//       const th = document.createElement("th");
//       th.textContent = key;
//       headerRow.appendChild(th);
//     }
//   }

//   const tableBody = table.createTBody();
//   const bodyRow = tableBody.insertRow();

//   for (const key in objectData) {
//     if (key !== "Object") {
//       const td = document.createElement("td");
//       td.textContent = objectData[key];
//       bodyRow.appendChild(td);
//     }
//   }
//   console.log(table);

//   return table;
// }

function createTable(data, tableId) {
  var table = document.getElementById(tableId);

  var headerRow = document.createElement("tr");
  for (var key in data[0]) {
    var headerCell = document.createElement("th");
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  data.forEach(function (rowObj) {
    var row = document.createElement("tr");
    for (var key in rowObj) {
      var cell = document.createElement("td");
      cell.textContent = rowObj[key];
      row.appendChild(cell);
    }
    table.appendChild(row);
  });
}

export default createTable;
