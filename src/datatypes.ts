//origion data types 
let bool: boolean = true;
let num: number = 123
let str: string = 'abc'

//array
// Array  & string 
let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<number> = [1, 2, 3, 4]
let arr3: Array<number | string> = [1.2, 3443, '23']

//tuple

let tuple: [number, string] = [0, '1']
tuple.push(2)//可以插入但是不能访问
console.log(tuple)
//tuple[2]// 报错
//TS2493: Tuple type '[number, string]' of length '2' has no element at index '2'.

//function 

//let add = (x, y) => x + y
//(x,y) TS7006: Parameter 'x' implicitly has an 'any' type.
let add = (x: number, y: number): number => x + y

let compute: (x: number, y: number) => number
//fun types
compute = (a, b) => a + b;

let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 23
console.log(obj)

//symbol 唯一值
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

//undefined ,null
let num_nu_null: number | null | undefined = 123
let un: undefined = undefined
let nu: null = null
num_nu_null = undefined
num_nu_null = null
//"strictNullChecks": false 
// 子集 关系
console.log("==============================")

//void -->  return undefined
let noReturn = () => { }
//any
let x
x = 1
x = []

//never 
let error = () => {
    throw new Error('error')
}

let endless = () => {
    while (true) { }
}