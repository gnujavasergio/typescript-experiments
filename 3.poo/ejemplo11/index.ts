
namespace dev.syscode {
    export const URL: string = "http://syscode.dev";

    /**
     * Si colocas export esta clase podra ser reutilizada
     */
    export class Youtube {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        get name(): string {
            return this._name;
        }

        set name(name: string) {
            this._name = name;
        }
    }

    /**
     * Sino se coloca export esta clase no podra ser visible
     * fuera del namespace
     */
    class Vimeo {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        get name(): string {
            return this._name;
        }

        set name(name: string) {
            this._name = name;
        }
    }
}

let youtube: dev.syscode.Youtube = new dev.syscode.Youtube("Typescript");
console.log(youtube.name);
console.log(dev.syscode.URL);
