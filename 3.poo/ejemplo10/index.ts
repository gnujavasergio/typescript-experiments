/**
 * Declaración de una clase abstracta
 */
abstract class Asset {    
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    name:string = "";

    getCoords(): string {
        return `{ "x": ${this.x}, "y": ${this.y}}`;
    }

    /**
     * Una metodo abstracto no se puede implementar
     */
    abstract move(): boolean;    
}

class Hero extends Asset {        
    
    constructor(name: string){
        super();
        this.name = name;
    }    

    move(): boolean {
        return true;
    }
}


const hero: Asset = new Hero("Typescript");
console.log(hero.move());