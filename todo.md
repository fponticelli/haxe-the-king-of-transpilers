# type system

# The compiler understands your code

## Syntax, sugar and other stimulants
    In JavaScript:
```
return 'My name is ' + name.toUpperCase() + ' and I am ' + age + ' old';
```

## What about?

```
    return 'My name is ${name.toUpperCase()} and I am $age old';
```

## Array Comprehension

```
var arr = [for(i in 0...5) i*2];
```
The JavaScript code would be:

```
var arr = [];
for(var i = 0; i < 5; i++) {
  arr.push(i*2);
}
```

## Inlining

```
// in a class definition you have a method like this
inline public function getNameLength() {
    return name.length;
}
```

```
// usage
trace(instance.getNameLength());
```

## Trimming your output

DCE

## Code Organization

```
-D js-flatten.
```

## Fancy Types

### Enums

### Abstracts

### Estern Types

### Evolution at a different pace

## MetaData