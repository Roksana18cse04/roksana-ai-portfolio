// Google Apps Script Code (script.google.com)
// This will save data directly to Google Sheets (Excel format)

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Open your Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('1Lnop63kcS0pX_-dHNay6fPeIxCrt4iRdbi8w4x_af7I').getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 5).setValues([
        ['Timestamp', 'Name', 'Email', 'Subject', 'Message']
      ]);
    }
    
    // Add the new row
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.subject,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Portfolio Contact API is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}