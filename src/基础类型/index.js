"use strict";
~(function () {
    // number
    var number = 10;
    // string
    var string = "string";
    // boolean
    var boolean = true;
    // symbol
    var symbol = Symbol();
    // Array
    var array1 = [1, 2];
    var array2 = [true, false];
    // tuple
    var tuple;
    // tuple = ["string", 0];
    // tuple[5] = 10;
    // console.log(tuple[5].toString());
    // enum
    // 0 -> 1 -> 2
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Purple"] = 1] = "Purple";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    // 1 -> 2 -> 3
    var Color1;
    (function (Color1) {
        Color1[Color1["Red"] = 1] = "Red";
        Color1[Color1["Purple"] = 2] = "Purple";
        Color1[Color1["Blue"] = 3] = "Blue";
    })(Color1 || (Color1 = {}));
    // 1 -> 3 -> 6
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Purple"] = 3] = "Purple";
        Color2[Color2["Blue"] = 6] = "Blue";
    })(Color2 || (Color2 = {}));
    console.log(Color.Purple);
    console.log(Color["1"]);
    console.log(1 /* a */);
    // 加上const就会报错，不做反向映射
    console.log(BB["1"]);
    // any
    var anyt = 10;
    anyt = true;
    // void
    var void1 = null;
    void1 = undefined;
    function void2() { }
    // null
    var null1 = null;
    null1 = undefined;
    // undefined
    var undefined1 = undefined;
    undefined1 = null;
    // never
    function never1() {
        while (true) { }
    }
    function never2() {
        throw new Error("q");
    }
    create({ prop: 0 }); // OK
    create(null); // OK
    create(42); // Error
    create("string"); // Error
    create(false); // Error
    create(undefined); // Error
    // {}
    // 这就是一个空对象，无法访问对象属性也无法设置
})();
