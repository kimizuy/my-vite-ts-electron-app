import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  startHeavyOperation: () => ipcRenderer.send("startHeavyOperation"),
});
