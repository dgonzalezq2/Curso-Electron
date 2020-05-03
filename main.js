const electron = require('electron')
const { app, BrowserWindow } = electron

const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {

            nodeIntegration: true

        }
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    win.webContents.openDevTools() //Esta opción permite abrir las herramientas de desarrollador para revisar posibles errores en la aplicación
}

exports.openWindow = () => {
    let newWin = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences: {

            nodeIntegration: true

        }
    })
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, 'enupal.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)