// ALMACEN

export default class Almacen{
  constructor (
    private codigoA : string,
    private nombreA : string,
    private stock   : producto[]
  ){}
  
  public ingresarProducto(P : producto){
    this.stock.push(P);
  }
  
  public mostrarProducto(){
    console.log("******************************\n*****"+this.nombreA+"*****\n******************************");
    this.stock.forEach(function(elemento, indice, array) {
      console.table(elemento);
    })
  }

  private buscarProducto(codP : producto){
    let found = false;
    let position = -1;
    let index = 0;
 
    while(!found && index < this.stock.length) {
        if(this.stock[index] == codP) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
  }

  private quitarProducto(codP : producto){
    let posicion = this.buscarProducto(codP);

    this.stock.splice(posicion,1);
  }

  public moverProducto(codP : producto, codA : Almacen){
    let posicion = this.buscarProducto(codP);
    if(posicion == -1){
      console.log("Producto no habido en stock :D");
    }else{
      codA.ingresarProducto(this.stock[posicion])
      this.quitarProducto(codP)
      console.log("Accion Exitosa");
    }
  }
}
 
 
// PRODUCTOS
 
export interface producto {    
  codigoP : string;
  nombreP  : string;
}
 
 