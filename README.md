# js_dom
Manipulando o DOM com Javascript

### Aula 01 - Conhecendo o DOM 

Utilizamos o método querySelector para percorrer a árvore do DOM e encontrar o elemento que queremos utilizando JavaScript. Porém existem outros métodos que podem ser utilizados para o mesmo fim.

* document.getElementById(‘id’) seleciona o elemento pelo id passado.
* document.getElementsByClassName(‘classe’) retorna um array dos elementos pelo nome da classe passada.
* document.getElementsByTagName(‘tag’) retorna um array dos elementos pelo nome da tag passada
* document.querySelectorAll(seletor) devolve todos os seletores com o mesmo nome

### Aula 02 - Comportamento do formulário

Nesta aula, aprendemos:

* Utilizar data-attributes
* Utilizar o método addEventListner para escutar eventos no elemento
* Prevenir o comportamento padrão do formulário

### Aula 03 - Adicionando itens na lista

Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós:

* insertBefore(pai, filho): Coloca um nó antes do outro.
* replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
* removeChild(elemento): Remove um nó da árvore.

Nesta aula, aprendemos:

* Utilizar template strings
* Colocar um elemento filho dentro do elemento pai utilizando o método appendChild
* Criar elementos utilizando o método createElement