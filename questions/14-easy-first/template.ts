type First<T extends unknown[]> = T extends never[] ? never : T[0];

// type First<T extends Array<unknown>> = T extends never[] ? never : T[0];
// type First<T extends Array<any>> = T extends never[] ? never : T[0];

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// never[]可以理解为空数组，以此作为判断条件