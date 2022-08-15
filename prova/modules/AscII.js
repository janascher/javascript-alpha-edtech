export default class AscII {
    
    string;
    code;

    constructor(_string) {
        this.string = _string;
    }

    getArray(element) {
        this.string = [];
    
        for(let i = 0; i < this.string.lenght; i++){
            let code = element.this.string(i);
            this.string.push(code);
        }
        
        return this.getCode();
    }

    getCode(value) {
        this.code = value;
        return parseInt(this.code);
    }
}