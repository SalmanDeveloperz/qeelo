# Qeelo contact form → Google Sheets

Use this to connect the website form to your spreadsheet:

`https://docs.google.com/spreadsheets/d/1Iu9Z-MW7QaPXEYCfz0WThQJRBJF1MkyZpAPfICMkk8k/edit`

## 1) Create the Apps Script

1. Open the spreadsheet.
2. Go to **Extensions → Apps Script**.
3. Replace the file contents with this code:

```javascript
const SPREADSHEET_ID = "1Iu9Z-MW7QaPXEYCfz0WThQJRBJF1MkyZpAPfICMkk8k";
const SHEET_NAME = "Responses";

function doPost(e) {
  const data = (e && e.parameter) ? e.parameter : {};
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Address",
      "Order or Query",
      "Source",
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.address || "",
    data.orderQuery || "",
    data.source || "qeelo.cloud",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 2) Deploy the script as a web app

1. Click **Deploy → New deployment**.
2. Choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and approve access.
5. Copy the **Web app URL**.

## 3) Add the URL to Vercel

In your Vercel project:

1. Open **Project → Settings → Environment Variables**.
2. Add:
   - `VITE_GOOGLE_SHEETS_WEB_APP_URL` = your Apps Script web app URL
3. Redeploy the site.

## 4) Test the form

1. Open `https://qeelo.cloud`
2. Fill:
   - Name
   - Phone number
   - Address
   - Order or query
3. Press **Send**
4. Check the `Responses` tab in the spreadsheet

## Notes

- Keep the sheet ID the same unless you move to a different spreadsheet.
- If you want email/WhatsApp notifications later, we can add that next.
- If the form shows an error, re-check that the Vercel env var matches the deployed Apps Script URL exactly.
