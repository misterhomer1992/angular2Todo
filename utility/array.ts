export class ArrayUtility {
    static  removeFromArray(array:string[], value:string) {
        let index:number;

        index = array.indexOf(value);

        if (index !== -1) {
            array.splice(index, 1);
        }

        return array;
    }
}