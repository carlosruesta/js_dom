"use strict"

const criarTarefa = (evento) => {

	evento.preventDefault()

	const lista = document.querySelector('[data-list]')
	const input = document.querySelector('[data-form-input]')
	const valor = input.value

	const tarefa = document.createElement('li');
	tarefa.classList.add('task');
	tarefa.innerHTML = `<p class="content">${valor}</p>`

	lista.appendChild(tarefa)
	input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)