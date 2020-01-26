export class Dto<T> {
    constructor(obj?: T) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}
