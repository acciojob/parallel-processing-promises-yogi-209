//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImage(image){
	return new Promise((resolve,reject)=>{
		const img=new Image();
		img.src=image.url;
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(`Failed to load image URL:${image.url}`);
	});
}
function downloadImages(){
	output.innerHTML="";
	errorDiv.innerHTML="";
	loading.style.display="block";
	const imagePromise=images.map(downloadImage);
	Promise.all(imagePromises)
	.then((downloadImages)=>{
		loadedImages.forEach((img)=>output.appendChild(img));
	})
	.catch((error)=>{
		errorDiv.textContent="none"
	});
	btn.addEventListener("click",downloadImages)







	
}
