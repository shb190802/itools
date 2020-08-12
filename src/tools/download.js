/**
 * 下载URL另存为文件名
 * @param {*} filename 
 * @param {*} data 
 */
const download = (filename, data) => {
	let DownloadLink = document.createElement('a');

	if (DownloadLink) {
		document.body.appendChild(DownloadLink);
		DownloadLink.style = 'display: none';
		DownloadLink.download = filename;
		DownloadLink.href = data;

		if (document.createEvent) {
			let DownloadEvt = document.createEvent('MouseEvents');

			DownloadEvt.initEvent('click', true, false);
			DownloadLink.dispatchEvent(DownloadEvt);
		}
		else if (document.createEventObject)
			DownloadLink.fireEvent('onclick');
		else if (typeof DownloadLink.onclick == 'function')
			DownloadLink.onclick();

		document.body.removeChild(DownloadLink);
	}
}

export default download