// ALMACEN

export default class Almacen{
  constructor (
    private codigoA : string,
    private nombreA : string,
    private stock   : producto[]
  ){}
  
  public ingresarProducto(P : producto){
    this.stock.push(P);
    console.log("Producto ingresado correctamente.");
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

  public moverProductoCantidad(codP : producto, codA : Almacen, cantidad : number){
    for (let index = 0; index < cantidad; index++) {
      this.moverProducto(codP,codA);
    }
  }

  public mostrarInventario(){
    let i = 0;
    console.log("******************************\n*****"+this.nombreA+"*****\n******************************");
    let inventario = new Map();

    let cont = 1
    for (let index = 0; index < this.stock.length; index++) {
      
      if(!inventario.has(this.stock[index].nombreP)){
        inventario.set(this.stock[index].nombreP,1);
      }else{
        let found = false;
        while(!found && i < inventario.size) {
          if(this.stock[i].nombreP ==  getByValue(inventario,i)) {
            cont +=1;
            found = true;
            inventario.set(this.stock[i].nombreP,cont);
            } else {
              i += 1;
            }
          }
        }
      }
    for(let CV of inventario.entries()){
      console.log(CV);
    }
  }

  public modificarInventario(R : string, codP : producto, cant : number){
    if(R == "R"){
      for (let index = 0; index < cant; index++) {
          let posicion = this.buscarProducto(codP);
          if(posicion == -1){
            console.log("Producto no habido en stock :D");
          }else{
            this.quitarProducto(codP);
          }
        }
    }else if(R == "A"){
        for (let index = 0; index < cant; index++) {
          this.ingresarProducto(codP);
        }
    }else{
      console.log("Accion no valida\nAcciones Validas: \n-> R : Retirar\n-> A : Agregar")
    }
  }
}

// PRODUCTOS


export interface producto {    
  codigoP : string;
  nombreP  : string;
}

// FUNCIONES

function getByValue(map: Map<any,string>, post: number){
 let acum = 0;
 for (let [key, value] of map.entries()) {
   if (acum == post)
   return key;
 }
 acum += 1;
}
 