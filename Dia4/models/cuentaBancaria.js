class CuentaBancaria {
    #saldo

    constructor(titular , saldoInicial){
        this.titular=titular;
        this.#saldo=saldoInicial;
    }
    

    depositar(monto){
        if(monto>0){
            this.#saldo += monto;
        }
    }

    VerSaldo(){
        return this.#saldo;
    }
}

module.exports = CuentaBancaria;

