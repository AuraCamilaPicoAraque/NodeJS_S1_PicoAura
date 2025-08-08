// Un pedido conoce sus lineitem , pero cada uno no conoce el pedido. utilizando relacion uno a uno y uno a muchos

class lineitems{
    constructor(producto,cantidad,precioUnitario){
        this.producto = producto
        this.cantidad = cantidad
        this.precioUnitario = precioUnitario
    }

    subtotal() {
        return this.cantidad * this.precioUnitario;
    }

}

module.exports = lineitems;