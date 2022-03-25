#Lesson 2 - Typescript (часть 1)

## Basic Types
```typescript
//Boolean
let isDone: boolean = false;
//Number
let decimal: number = 6;
//String
let color: string = "blue";
```
##Function Types
```typescript
function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number {
    return x + y;
};
```

##Array
```typescript
let list: number | string[] = [1, 2, 3];
let list: Array<number | string> = [1, 2, 3];
let list: Array = [1, 2, 3];
```
##Any (Любой)
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
Это способ отключить проверку типов.
Также для отключения проверки можно использовать комментарий // @ts-ignore

##Never (Никогда)
Функция, возвращающая never, не должна иметь достижимую конечную точку
```typescript
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {}
}
```
##Void
```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

##Null and Undefined
Мало что еще мы можем назначить этим переменным!
```typescript
let u: undefined = undefined;
let n: null = null;
```

##Утверждения типа (Type assertions)
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
  
Это не ванильный JavaScript, это TypeScript. as anyговорит компилятору рассматривать типизированный объект как простой нетипизированный объект JavaScript.

Ключевое as слово — это утверждение типа в TypeScript , которое указывает компилятору рассматривать объект как тип, отличный от типа, который компилятор определяет как объект.

##Types by Interface
Интерфейс определяет свойства и методы, которые объект должен реализовать. 

Другими словами, интерфейс - это определение кастомного типа данных, но без реализации.

```typescript
const user = {
    name: "Hayes",
    id: 0
};

interface User {
    name: string;
    id: number;
}
```

##Composing Types
```typescript
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

##Enum
```typescript
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
console.log(c) //1
```

По умолчанию перечисления начинаются нумерацией своих членов, начинаā с 0. Вы можете изменить
это, вручную установив значение одного из его элементов. Например, мы можем начать предыдущий
пример с 1 вместо 0.

```typescript
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
let ссс: Color = Color.Green;
console.log(ссс)//2
```

##Generics

```typescript
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

##Structural Type System

```typescript
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
} // prints "12, 26"

const point = { x: 12, y: 26 };
printPoint(point);
```

##extends/implements
Ключевое слово extends можно использовать только для интерфейсов и классов.

```typescript
type Event = {
    name: string;
    dateCreated: string;
    type: string;
}

interface UserEvent extends Event {
    UserId: string;
}
```

Интерфейсы могут быть реализованы не только объектами, но и классами. Для этого используется ключевое слово implements:
**extends** получит все свойства и методы родительского класса.
**implements** обяжет нас реализовать все свойства и методы, определенные в интерфейсе.


```typescript
interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}

class User implements IUser {
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}

let tom = new User(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));
```
Класс User реализует интерфейс IUser. В этом случае класс User обязан определить все те же свойства и функции, которые есть в IUser.

При этом объект tom является как объектом User, так и объектом IUser:
```typescript
let tom :IUser = new User(1, "Tom", 23);
//или
let tom :User = new User(1, "Tom", 23);
```

##keyof
Для любого типа T является keyof T объединением известных общедоступных имен свойств T.

```typescript
interface Person {
    age: number;
    name: string;
}
type PersonKeys = keyof Person; // "age" | "name"
```

##typeof
TypeScript добавляет typeof оператор, который можно использовать в контексте типа для ссылки на тип переменной или свойства:
```typescript
let s = "hello";
let n: typeof s;
//let n: string
```