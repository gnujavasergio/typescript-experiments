interface Generic<T,K>{

    add(obj: T): boolean;

    update(obj:T) : boolean;

    delete(id: K) : boolean;

    findById(id: K): T;

    findAll(): Array<T>;
}