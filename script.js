function submitData() {
  alert("Data submitted!");
}
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("users");
  var data = sheet.getDataRange().getValues();

  var username = e.parameter.username;
  var password = e.parameter.password;

  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === username && data[i][1] === password) {
      return ContentService.createTextOutput("success");
    }
  }

  return ContentService.createTextOutput("fail");
}
