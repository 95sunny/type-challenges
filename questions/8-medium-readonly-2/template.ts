type MyReadonly2<T, K extends keyof T = keyof T> = T & {
    readonly [key in K]: T[key]
}

// 使用泛型K初始值，避免做是否属于K的判断
// 以K的内容为key值，取T中对应key的结果，定义成新的键值对类型并且每条都设定为只读
// 用新的类型对象，覆盖旧的