type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}

// 取出键名key，赋予只读关键字，再用key去取value