type MyOmit<T, K extends keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key]
}

// 定义参数K一定是T中的一个key值 K extends keyof T
// 取出T中的key值 key in keyof T
// 判断这个值是否属于K，存在则抛出never，不存在则正常需要这个key
// 值直接取T的当前key的值T[]key
// 需要注意的是，其中的 as 关键字，在此做用是拼接上另一个操作语句
// 另外never的新的理解是：并非一个不存在的值，更合适理解为一个错误的情况，即跳过这个错误环节，让最终结果内不包含出现又never的项
