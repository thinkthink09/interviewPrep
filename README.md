# interviewPrep

# Javascript Interview Questions:
for more: https://github.com/sudheerj/javascript-interview-questions/blob/master/README.md

## What is the currying function
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function. Let's take an example of n-ary function and how it turns into a currying function

```javascript
const multiArgFunction = (a, b, c) => a + b + c;
const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction (1) (2); // returns a function: c => 3 + c
curryUnaryFunction (1) (2) (3); // returns the number 6
Curried functions are great to improve code reusability and functional composition.
```

## Pure function
A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value. Let's take an example to see the difference between pure and impure functions,

## What is the difference between let and var
You can list out the differences in a tabular format
| var | let |
|---- | ---------
| It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
| It has function scope | It has block scope  |
| Variables will be hoisted | Hoisted but not initialized |

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

## IIFE

```javascript
(function ()
    {
      // logic here
    }
 )
();
```

## What are closures
A closure is the combination of a function and the lexical environment within which that function was declared.

## What is scope in javascript
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

## What is a promise
A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error).

## What is a callback function
A callback function is a function passed into another function as an argument. Callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

## What is event bubbling
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

## What is same-origin policy
The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries.

## JavaScript:void(0);
Void(0) is used to prevent the page from refreshing.

## What is an event delegation
Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

## What is a proxy object
The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.

## What is call stack
Call Stack is a data structure for javascript interpreters to keep track of function calls in the program.

## What is this
It has different values depending on where it is used:
In a method, `this` refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

---

# React Interview Questions:

## The Component Lifecycle:

### Mounting:
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

### Updating:
1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

### Unmounting:
1. componentWillUnmount()

If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

## Introducing Hooks:
You have to understand how `this` works in JavaScript, Hooks let you use more of React’s features without classes.

## Saga:
Redux-Saga utilizes a new ES6 feature called generators.

redux-saga increases testability. It's very easy to test sagas as call() returns a pure object. Testing thunks normally requires you to include a mockStore inside your test.

redux-saga comes with lots of helper functions about tasks.

Sagas offer independent place to handle all side effects. It is usually easier to modify and manage than thunk actions.

### Comparison:
redux-thunk v1.0.0 on Sep 17, 2015 and only has 14 lines of code till now
redux-saga beta.0 on Nov 5, 2017, v1.0.0 on Jan 20, 2019, with thousands of lines of code
