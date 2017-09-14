let modalWindow = document.querySelector('.modal-window-write-us');
let openBtn = document.querySelector('.contacts .btn');
let closeBtn = document.querySelector('.modal-window-write-us .close-window')


openBtn.addEventListener('click', openModalWindow);
closeBtn.addEventListener('click', closeModalWindow);

function openModalWindow(event) {
	event.preventDefault();
	modalWindow.classList.add('modal-window-show');
}

function closeModalWindow(event) {
	event.preventDefault();
	modalWindow.classList.remove('modal-window-show');
}
