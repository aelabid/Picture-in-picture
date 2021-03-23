const videoElmn = document.getElementById('video');
const btn = document.getElementById('button');

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElmn.srcObject= mediaStream;
		videoElmn.onloadedmetadata = () => {
			videoElmn.play();
		}
	}catch(error) {
		console.log(error)
	}
}

btn.addEventListener('click', async () => {
	btn.disabled =true;

	await videoElmn.requestPictureInPicture();

	button.disabled = false;
});
selectMediaStream();