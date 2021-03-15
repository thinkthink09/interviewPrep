# Personal Interview Prep
Here are some interview questions I personally came across before and had hard time answering, this repo is intended to be a place to go when I'm getting an interview and don't have much time to prepare, feel free to use/copy this and good luck with your upcoming interview!

# Javascript Interview Questions:
for more: https://github.com/sudheerj/javascript-interview-questions/blob/master/README.md

### What is the currying function
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function. Let's take an example of n-ary function and how it turns into a currying function

```javascript
const multiArgFunction = (a, b, c) => a + b + c;
const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction (1) (2); // returns a function: c => 3 + c
curryUnaryFunction (1) (2) (3); // returns the number 6
Curried functions are great to improve code reusability and functional composition.
```

### Pure function
A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value. Let's take an example to see the difference between pure and impure functions,

### What is the difference between let and var
You can list out the differences in a tabular format
| var | let |
|---- | ---------
| It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
| It has function scope | It has block scope  |
| Variables will be hoisted | Hoisted but not initialized |

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

### IIFE

```javascript
(function ()
    {
      // logic here
    }
 )
();
```

### What are closures
A closure is the combination of a function and the lexical environment within which that function was declared.

### What is scope in javascript
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

### What is a promise
A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error).

### What is a callback function
A callback function is a function passed into another function as an argument. Callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

### What is event bubbling
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

### What is same-origin policy
The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries.

### JavaScript:void(0);
Void(0) is used to prevent the page from refreshing.

### What is an event delegation
Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

### What is a proxy object
The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.

### What is call stack
Call Stack is a data structure for javascript interpreters to keep track of function calls in the program.

### What is this
It has different values depending on where it is used:
In a method, `this` refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

---

## React Interview Questions:

### The Component Lifecycle:

#### Mounting:
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

#### Updating:
1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

#### Unmounting:
1. componentWillUnmount()

### Hooks:
If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined. Hooks are introduced so you don't have to understand how `this` works in JavaScript, Hooks let you use more of React’s features without classes.

### Saga:
Redux-Saga utilizes a new ES6 feature called generators.

redux-saga increases testability. It's very easy to test sagas as call() returns a pure object. Testing thunks normally requires you to include a mockStore inside your test.

redux-saga comes with lots of helper functions about tasks.

Sagas offer independent place to handle all side effects. It is usually easier to modify and manage than thunk actions.

#### Comparison:
redux-thunk v1.0.0 on Sep 17, 2015 and only has 14 lines of code till now
redux-saga beta.0 on Nov 5, 2017, v1.0.0 on Jan 20, 2019, with thousands of lines of code

---

# Java Interview Questions:

## GC
A process that the garbage collector finds unreferenced objects and deletes them to free up memory. The jvm heap is divided into three sections:

#### Young Generation:
Newly created objects start in the Young Generation. The Young Generation is further subdivided into an Eden space, where all new objects start, and two Survivor spaces, where objects are moved from Eden after surviving one garbage collection cycle. When objects are garbage collected from the Young Generation, it is a minor garbage collection event.

#### Old Generation:
Objects that are long-lived are eventually moved from the Young Generation to the Old Generation. When objects are garbage collected from the Old Generation, it is a major garbage collection event.

#### Permanent Generation:
Metadata such as classes and methods are stored in the Permanent Generation. Classes that are no longer in use may be garbage collected from the Permanent Generation.

During a full garbage collection event, unused objects in all generations are garbage collected.

Oracle HotSpot has four garbage collectors:

#### Serial:
All garbage collection events are conducted serially in one thread. Compaction is executed after each garbage collection.

#### Parallel:
Multiple threads are used for minor garbage collection. A single thread is used for major garbage collection and Old Generation compaction. Alternatively, the Parallel Old variant uses multiple threads for major garbage collection and Old Generation compaction.

#### CMS (Concurrent Mark Sweep):
Multiple threads are used for minor garbage collection using the same algorithm as Parallel. Major garbage collection is multi-threaded, like Parallel Old, but CMS runs concurrently alongside application processes to minimize “stop the world” events (i.e. when the garbage collector running stops the application). No compaction is performed.

#### G1 (Garbage First):
The newest garbage collector is intended as a replacement for CMS. It is parallel and concurrent like CMS, but it works quite differently under the hood compared to the older garbage collectors.

## Design Patterns:
Name some commonly used design patterns(just to show you've prepared for this interview):

### Factory Pattern:
Factory Pattern define an interface or abstract class for creating an object but let the subclasses decide which class to instantiate.
```java
public class ShapeFactory {

   //use getShape method to get object of type shape
   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }		
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();

      } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();

      } else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }

      return null;
   }
}
```

```java
public class FactoryPatternDemo {

   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();

      //get an object of Circle and call its draw method.
      Shape shape1 = shapeFactory.getShape("CIRCLE");

      //call draw method of Circle
      shape1.draw();

      //get an object of Rectangle and call its draw method.
      Shape shape2 = shapeFactory.getShape("RECTANGLE");

      //call draw method of Rectangle
      shape2.draw();

      //get an object of Square and call its draw method.
      Shape shape3 = shapeFactory.getShape("SQUARE");

      //call draw method of square
      shape3.draw();
   }
}
```

### Builder Pattern:
Builder pattern builds a complex object using simple objects and using a step by step approach.
```java
public class User
{
    //All final attributes
    private final String firstName; // required
    private final String lastName; // required
    private final int age; // optional
    private final String phone; // optional
    private final String address; // optional

    private User(UserBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.phone = builder.phone;
        this.address = builder.address;
    }

    //All getter, and NO setter to provde immutability
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public int getAge() {
        return age;
    }
    public String getPhone() {
        return phone;
    }
    public String getAddress() {
        return address;
    }

    @Override
    public String toString() {
        return "User: "+this.firstName+", "+this.lastName+", "+this.age+", "+this.phone+", "+this.address;
    }

    public static class UserBuilder
    {
        private final String firstName;
        private final String lastName;
        private int age;
        private String phone;
        private String address;

        public UserBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }
        public UserBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }
        public UserBuilder address(String address) {
            this.address = address;
            return this;
        }
        //Return the finally consrcuted User object
        public User build() {
            User user =  new User(this);
            validateUserObject(user);
            return user;
        }
        private void validateUserObject(User user) {
            //Do some basic validations to check
            //if user object does not break any assumption of system
        }
    }
}
```

```java
public static void main(String[] args) {
    User user1 = new User.UserBuilder("Lokesh", "Gupta")
    .age(30)
    .phone("1234567")
    .address("Fake address 1234")
    .build();

    System.out.println(user1);

    User user2 = new User.UserBuilder("Jack", "Reacher")
    .age(40)
    .phone("5655")
    //no address
    .build();

    System.out.println(user2);

    User user3 = new User.UserBuilder("Super", "Man")
    //No age
    //No phone
    //no address
    .build();

    System.out.println(user3);
}
```

### Decorator Pattern:
Decorator pattern allows a user to add new functionality to an existing object without altering its structure.
```java
public abstract class ShapeDecorator implements Shape {
   protected Shape decoratedShape;

   public ShapeDecorator(Shape decoratedShape) {
      this.decoratedShape = decoratedShape;
   }

   public void draw() {
      decoratedShape.draw();
   }
}
```

```java
public class DecoratorPatternDemo {
   public static void main(String[] args) {

      Shape circle = new Circle();

      Shape redCircle = new RedShapeDecorator(new Circle());

      Shape redRectangle = new RedShapeDecorator(new Rectangle());
      System.out.println("Circle with normal border");
      circle.draw();

      System.out.println("\nCircle of red border");
      redCircle.draw();

      System.out.println("\nRectangle of red border");
      redRectangle.draw();
   }
}
```

### Singleton Pattern:
Singleton Pattern defines a class that has only one instance and provides a global point of access to it
```java
public class SingletonObject {

   private static SingletonObject instance = new SingletonObject();

   //make the constructor private so that this class cannot be instantiated
   private SingletonObject(){}

   //Get the only object available
   public static SingletonObject getInstance(){
      return instance;
   }
}
```

---

# SQL Interview Questions:

### Find third highest salary:
```sql
SELECT * FROM salary ORDER BY salary DESC LIMIT 1 OFFSET 2
```
