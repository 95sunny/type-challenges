type TupleToObject<T extends readonly string[]> = {
    [key in T[number]]: key
}

// as const 设置数组 tuple 为只读，typeof tuple 泛型传入数组tuple的ts类型，即为一个只读数组
// 泛型T接收一个只读string数组，key取当前数组T的每一项的值，数组每一项的值可以用T[number]，类似(arr[index])的意思
// key属于当前项的值，值为当前的key，所以是 key in T[number]: key