const animeTitle = (element) => {
	const arrayText = element.innerHTML.split("");
	element.innerHTML = "";
	arrayText.forEach((letter, indice) => {
		setTimeout(() => (element.innerHTML += letter), 135 * indice);
	});
	element.classList.add("animate__shakeY");
};

const h1 = document.querySelector("h1.title");

animeTitle(h1);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting
			? entry.target.classList.add("show")
			: entry.target.classList.remove("show");
	});
});

const hiddenElements = document.querySelectorAll("div.hidden");

hiddenElements.forEach((el) => observer.observe(el));


document.getElementById('exampleInputEmail1').addEventListener('input', function() {z
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
});