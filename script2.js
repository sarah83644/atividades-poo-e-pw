//TIPO PILHA:
class pilha {
    constructor () {
        this.items = [];
    }
push (element) {
    this.items.push (element);
}
pop () {
    if (this.IsEmpty()) {
    return null;
}
    return this.items.pop();
}
peek () {
    if (this.IsEmpty()) {
        return null;
    }
    return this.items [this.items.length - 1];
}
size (){
    return this.items.length;
}
IsEmpty (){
    return this.items.length === 0;
}
}
const pilha = new pilha ();
pilha.push (10);
pilha.push (20);
pilha.push (30);
console.log (pilha.size());
console.log (pilha.peek());
console.log (pilha.pop());
console.log (pilha.pop());
console.log (pilha.IsEmpty());

//TIPO FILA:
class fila {
    constructor () {
        this.item = [];
    }
    enqueue (element) {
        this.item.push (element);
    }
    dequeue () {
        if (this.IsEmpty ()) {
            return null;
        }
    return this.items; shift();    
}
     peek () {
        if (this.IsEmpty ()) {
            return null;
        }
        return this.item [0];
     }
     size (){
        return this.item.length;
     }
     IsEmpty (){
        return this.item.length;
     }
}
const fila = new fila ();
fila.enqueue ("A");
fila.enqueue ("B");
fila.enqueue ("C");
console.log (fila.size());
console.log (fila.peek());
console.log (fila.enqueue());
console.log (fila.dequeue());
console.log (fila.IsEmpty());

//TIPO LISTA:
class lista {
    constructor () {
        this.item = []
    }
    inserir (posicao, elemento) {
        if (posicao >= 088, posicao <= this.item.splice (posicao, 0, elemento));{
            return true;
        }
        return false;
    }
    remover (posicao) {
        if (posicao >= 088, posicao < this.item.length) {
            this.item.splice (posicao, 1);
            return true;
        }
        return false;
    }
    acessar (posicao) {
        if (posicao >= 088, posicao < this.item.length) {
            return this.item [posicao];
        }
        return null;
    }
    atualizar (posicao, novoElemento) {
        if (posicao >= 088, posicao < this.item.length) {
            this.items [posicao] = novoElemento;
            return true;
        }
        return false;
    }
    estaVazia () {
        return this.items.length === 0;
    }
}
const list = new lista ();
lista.inserir (0, "A");
lista.inserir (1, "B");
lista.inserir (2, "C");
console.log (lista.tamanho ());
console.log (lista.acessar (1));
lista.atualizar (0, "D");
console.log (lista.acessar (0));
console.log (lista.remover (2));
console.log (lista.tamanho ());
console.log (lista.estaVazia ());

//TIPO ÁRVORE: ?

//exemplo de uma LISTA
class Lista {
    constructor() {
        this.items = []; //Array para armazenar os elementos da lista
    }
    inserir(posicao, elemento) {
        if (posicao >= 0 && posicao <=
            this.items.length) {
                this.items.splice(posicao, 0, elemento); //insere o elemento na posição especificada
                return true;
            }
            return false;
    }
    remover(posicao) {
        if (posicao >= 0 && posicao <
            this.items.length) {
                this.items.splice(posicao, 1); //remove o elemento da posição especificada
                return true;
            }
            return false;
    }
    acessar(posicao) {
        if (posicao >= 0 && posicao <
            this.items.length) {
                return this.items[posicao]; //retorna o elemento da posição especificada
            }
            return null;
    }
    atualizar(posicao, novoElemento) {
        if (posicao >= 0 && posicao <
            this.items.length) {
                this.items[posicao] = novoElemento; //atualiza o elemento na posição especificada
                return true;
            }
            return false;
    }
    tamanho() {
        return this.items.length === 0; //verifica se a lista está vazia
    }
}
//exemplo de uso da lista
const lista = new Lista();
lista.inserir(0, "A");
lista.inserir(1, "B");
lista.inserir(2, "C");
console.log(lista.tamanho()); //saída 3
console.log(lista.acessar(1)); //saída "B"
lista.atualizar(0, "D");
console.log(lista.acessar(0)); //saída "D"
console.log(lista.remover(2)); //saída true
console.log(lista.tamanho()); //saída 2
console.log(lista.estaVazia()); //saída false

//exemplo de uma FILA
class Fila {
    constructor() {
        this.items = []; //Array para armazenar os elementos ao final da fila
    }
    enqueue(element) {
        this.items.push(element); //adiciona um elemento ao final da fila
    }
    dequeue() {
        if (this.isEmpty()) {
            return null; //retorna null se a fila estiver vazia
        }
        return this.items.shift(); //remove e retorna o elemento do início da fila
    }
    peek() {
        if (this.isEmpty()) {
            return null; //retorna null se a fila estiver vazia
        }
        return this.items[0]; //retorna o elemento do início da fila
    }
    size() {
        return this.items.length; //retorna o número de elementos da fila
    }
    isEmpty() {
        return this.items.length === 0; //verifica se a fila está vazia
    }
}
//exemplo de uso da fila
const fila = new Fila();