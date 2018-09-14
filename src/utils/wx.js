export function getSystemInfo() {
    return new Promise(async function(resolve, reject) {
        wx.getSystemInfo({
            success: function(res) {
                resolve(res);
            },
            fail: function(res) {
                reject(res);
            }
        })
    });
}

export function canvasToTempFilePath(obj) {
    return new Promise(async function (resolve, reject) {
        wx.canvasToTempFilePath({
            x: obj.x,
            y: obj.y,
            width: obj.width,
            height: obj.height,
            destWidth: obj.destWidth,
            destHeight: obj.destHeight,
            canvasId: obj.canvasId,
            fileType: obj.fileType ? obj.fileType : 'png',
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        })
    });
}

export function saveImageToPhotosAlbum(path) {
    return new Promise(async function(resolve, reject) {
        wx.saveImageToPhotosAlbum({
            filePath:path,
            success: function(res) {
                resolve(res);
            },
            fail: function(res) {
                reject(res);
            }
        })
    });
}