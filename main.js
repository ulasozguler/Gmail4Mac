require('crash-reporter').start();
var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');
var title = "Gmail4Mac";

var template = [
  {
    label: title,
    submenu: [
      {
        label: 'Hide',
        accelerator: 'Command+H',
        selector: 'hide:'
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      },
      {
        label: 'Show All',
        selector: 'unhideAllApplications:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() { app.quit(); }
      },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click: function() { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); }
      },
    ]
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:'
      },
      {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:'
      },
    ]
  },
  {
    label: 'Help',
    submenu: []
  },
];

app.on('window-all-closed', function() {
  //if(process.platform != 'darwin') {
    app.quit();
  //}
});

var mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1200, height: 800});
  mainWindow.loadURL('https://mail.google.com/');
  //mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.setTitle(title);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  mainWindow.webContents.on('dom-ready', function() {
    // remove ads
    mainWindow.webContents.executeJavaScript("var s = document.createElement('style'); s.appendChild(document.createTextNode('.Bu.y3{display:none;}')); document.body.appendChild(s);");
  });


  mainWindow.webContents.on('new-window', function(e, url) {
    // open links in external browser
    e.preventDefault();
    require('shell').openExternal(url);
  });

  mainWindow.on('page-title-updated', function(ev, newVal) {
    ev.preventDefault();
    var match = /\(([0-9]+)\)/g.exec(newVal);
    if(match !== null) {
      app.dock.setBadge(match[1]);
    } else {
      app.dock.setBadge('');
    }
  });

  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});


