// let Add: (x: number, y: number) => number

// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number

let Add: Add = (a, b) => a + b

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => { }) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => { console.log(lib.version) };
    return lib
}
let lib1 = getLib();
lib1.doSomething();




