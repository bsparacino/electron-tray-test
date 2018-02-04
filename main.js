const electron = require('electron');
const path = require('path');
const {app, BrowserWindow, Tray, Menu, MenuItem} = electron;

app.on('ready', function() {

  new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false
  });

  const contextMenu = new Menu();
  contextMenu.append(new MenuItem({label: 'Test'}));

  var tray = new Tray(path.join(__dirname, 'tray.png'));
	tray.setContextMenu(contextMenu);
});
