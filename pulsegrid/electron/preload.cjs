// Reserved for future desktop bridges. Game runs fully in the renderer.
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('pulsegridDesktop', {
  platform: process.platform,
});
