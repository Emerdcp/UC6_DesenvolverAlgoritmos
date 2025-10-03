var banners = [
	"https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 5;
	document.querySelector('#banner img').src = banners[bannerAtual];
}

var banner_controle = setInterval(trocaBanner, 2000);


function Controle(acao) {
	if (acao == "play") {
		banner_controle = setInterval(trocaBanner, 2000);
	} else {
		clearInterval(banner_controle);
		// console.log('pause: intervalo parado');
	}
}