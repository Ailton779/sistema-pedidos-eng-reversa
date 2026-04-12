class Pedido {
  constructor() {
    this.itens = [];
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  removerUltimo() {
    this.itens.pop();
  }

  calcularTotal() {
    let total = 0;

    for (let item of this.itens) {
      total += item.subtotal;
    }

    return total;
  }

  limpar() {
    this.itens = [];
  }
}       