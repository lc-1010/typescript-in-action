interface List {
    readonly id: number;
    name: string;
    // [x: string]: any;
    age?: number
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, '->', value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}
let result = {
    data: [
        { id: 1, name: 'a', age: 129 },
        { id: 2, name: 'b' },
    ]
}
// as 类型断言 
//<Reuslt>{}
// 
render({
    data: [
        { id: 1, name: 'a', age: 129 },
        { id: 2, name: 'b' },
    ]
} as Result)

render({
    data: [
        { id: 1, name: 'a', age: 129 },
        { id: 2, name: 'b' },
    ]
})

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [index: string]: string;
    [z: number]: string;
}
