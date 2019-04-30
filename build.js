var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./App/electron-plane-win32-x64'), //刚才生成打包文件的路径
    outputDirectory: path.join('./tmp'), //输出路径
    authors: 'yj', // 作者名称
    exe: 'electron-plane.exe', //在appDirectory寻找exe的名字
    noMsi: true,
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
