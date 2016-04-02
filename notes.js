// stuff i might look into later.
var remote = require('remote');
var app = remote.require('app');
var dialog = remote.require('dialog');

function setBadge(message) {
   app.dock.setBadge(String(message || '•'));
}
function alertMessage() {
   var result = dialog.showMessageBox({
      type: 'info',
      message: 'message',
      buttons: ['Yes', 'No']
   });
   console.log(result);
}

/*
webview.getTitle();
alertMessage();
setBadge();
app.dock.bounce('critical');
new Notification(webview.getTitle());
*/

// Query all cookies.
mainWindow.webContents.session.cookies.get({}, function(error, cookies) {
  if (error) throw error;
  console.log(cookies);
});