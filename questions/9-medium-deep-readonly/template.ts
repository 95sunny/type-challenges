// type DeepReadonly<T> = {
//     readonly [A in keyof T]: T[A] extends string | number | boolean | null | undefined | symbol | bigint | Function ? T[A] : DeepReadonly<T[A]>
// }

// 直接定义只读只读属性
// 然后在值的位置判断是否属于已知类型，不属于则当做是有下级的对象，传入当前值进行递归

type DeepReadonly<T> = {
    readonly [A in keyof T]: keyof T[A] extends undefined ? T[A] : DeepReadonly<T[A]>;
}

// 优化，在值的位置判断，当前值能不能取到內部一个key，能则说明是个键值对，不能则是其他类型
// 键值对的格式则进入递归，其他类型直接输出