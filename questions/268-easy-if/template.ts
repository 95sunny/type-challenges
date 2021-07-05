type If<C extends boolean, T, F> = C extends true ? T : F
// type If<C extends Boolean, T, F> = C extends true ? T : F

// boolean是限制泛型范围为布尔值，Boolean是继承原生类Boolean