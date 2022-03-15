~(function () {
  // number
  let number: number = 10;

  // string
  let string: string = "string";

  // boolean
  let boolean: boolean = true;

  // symbol
  let symbol: symbol = Symbol();

  // Array
  let array1: number[] = [1, 2];
  let array2: Array<boolean> = [true, false];

  // tuple
  let tuple: [string, number];
  // tuple = ["string", 0];
  // tuple[5] = 10;
  // console.log(tuple[5].toString());

  // enum
  // 0 -> 1 -> 2
  enum Color {
    Red,
    Purple,
    Blue,
  }
  // 1 -> 2 -> 3
  enum Color1 {
    Red = 1,
    Purple,
    Blue,
  }
  // 1 -> 3 -> 6
  enum Color2 {
    Red = 1,
    Purple = 3,
    Blue = 6,
  }
  console.log(Color.Purple);
  console.log(Color["1"]);
  const enum BB {
    a = 1,
    b = 2,
  }
  console.log(BB.a);
  // 加上const就会报错，不做反向映射
  console.log(BB["1"]);

  // any
  let anyt: any = 10;
  anyt = true;

  // void
  let void1: void = null;
  void1 = undefined;
  function void2(): void {}

  // null
  let null1: null = null;
  null1 = undefined;

  // undefined
  let undefined1: undefined = undefined;
  undefined1 = null;

  // never
  function never1(): never {
    while (true) {}
  }
  function never2(): never {
    throw new Error("q");
  }

  // object
  function create(o: object | null): void;

  create({ prop: 0 }); // OK
  create(null); // OK

  create(42); // Error
  create("string"); // Error
  create(false); // Error
  create(undefined); // Error

  // {}
  // 这就是一个空对象，无法访问对象属性也无法设置
})();
