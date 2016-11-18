'use strict';

function doGet(e) {
  return HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function onOpen(e) {
  SpreadsheetApp.getUi()
    .createMenu('HTML Waterfall Chart')
    .addItem('Insert chart v1...','waterfallChart')
    .addItem('Insert chart v2...','waterfallChart2')
    .addItem('As dialog...','showDialogChart')
    .addItem('As sidebar...','showSidebarChart')
    .addToUi();
}

// get the waterfall chart data
function getData() {
  // get the data from the active sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  
  return sheet.getDataRange().getValues();
}

function showDialogChart() {
  var html = HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setWidth(400)
    .setHeight(300);
  
  SpreadsheetApp.getUi()
    .showModalDialog(html, 'Chart using gviz');
}

function showSidebarChart() {
  var ui = HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle('Chart using gviz');
  
  SpreadsheetApp.getUi().showSidebar(ui);
}


