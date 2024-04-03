// const person = {
//     name: 'Alex',
//     age: 32
// }

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// console.log(Object.getOwnPropertyDescriptors(person))

// person.name = 'Victor'

// for(let key in person) {
//     console.log(person[key])
// }

// Object.defineProperty(person, 'gender', {
//     value: 'male',
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })

// console.log(person)

// Object.defineProperty(person, 'gender', {
//     value: 'male',
//     writable: true,
//     enumerable: false,
//     configurable: true,
// })

// console.log(Object.getOwnPropertyDescriptor(person, 'gender'))



// person.gender = 'female'

// console.log(Object.keys(person))
// console.log(Object.values(person))

// for(let key in person) console.log(person[key])

// const person = {
//     name: 'Alex',
//     age: 32
// }

// person.city = 'Chisinau'

// console.log(person)

// Object.preventExtensions(person);

// person.job = 'developer'

// Object.prototype.func = () => console.log('test')

// person.func()

// console.log(Object.isExtensible(person))

// Object.seal(person)

// console.log(Object.isSealed(person))

// person.name = 'Victor'

// console.log(person)

// Object.defineProperty(person, 'name', {
//     value: 'Victor',
//     writable: true,
//     enumerable: false,
//     configurable: true,
// })



// Object.freeze(person)

// person.name = 'Victor'

// console.log(Object.isFrozen(person))

// Object.defineProperties(person, {
//     city: {
//         value: 'Chisinau',
//         writable: true
//     },
//     hobby: {
//         value: ['swiming', 'cycling'],
//     }
// })

// console.log(Object.getOwnPropertyDescriptors(person))

// const person = {
//     name: 'Alex',
//     age: null,
//     a: {
//         b: {
//             c: {
//                 d: {
//                     e: 'value',
//                     arr: [],
//                     func: () => console.log('test')
//                 }
//             }
//         }
//     }
// }

// const deepClone = (obj) => {
//     if(obj === null) return obj;
//     let clone;
//     if(Array.isArray(obj)) {
//         clone = [...obj]
        
//     }else {
//         clone = {...obj}
//     }

//     for (let key in clone) {
//             clone[key] = typeof clone[key] === 'object' ? deepClone(clone[key]) : clone[key]   
//     }

//     return clone;
// }

// const person2 = deepClone(person)

// person2.a.b.c.d.e = 'new value';

// person2.a.b.c.d.func()

// function greet(arg, arg2){
//     return arg + " My name is: " + this.name + arg2
// }

// const obj1 = {
//     name: 'Alex',
//     greet: greet
// }

// const obj2 = {
//     name: 'Victor',
//     greet
// }

// console.log(obj1.greet('Hi', "!"))
// console.log(obj2.greet.apply(obj1, ['Hey', '?']))

// const bound = greet.bind(obj1)

// console.log(bound('Ola', '!!!'))

// (function func(arg) {
//     console.log('test' + arg)
// }('1'))

// for (let i = 0; i < 5; i++) {
//     const btn = document.createElement('button');
//     btn.innerText = `Button ${i}`
//     btn.onclick = function () {
//         console.log(i)
//     }    

//     document.body.appendChild(btn)
// }

// const list = [1, 2, 3, 4]

// ex output: [2,3,4,5]

// const result = list.reduce((acc, curr) => {
//     acc.push(curr + 1)
//     return acc;
// }, [])

// console.log(result)