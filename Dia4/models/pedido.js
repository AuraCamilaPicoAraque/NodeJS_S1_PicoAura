class pedido {
    constructor(id){
        this.id = id
        this.items = [];
    }

    addItems(items){
        this.items.push(items);
    }
    total(){
        // el acc puede ser cualquier cosa -> acc = acumulador
        return this.items.reduce((acc,it) => acc+it.subtotal(), 0);
    }
}

module.exports = pedido;