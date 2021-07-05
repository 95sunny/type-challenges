type Includes<T extends readonly unknown[], U> = 'has' extends {
    [key in keyof T]: T[key] extends U ? 'has' : 'none'
}[number] ? true : false

// 这是暂时找打的最好的解法了
// 把判断U是否属于T内的思维逆转过来对比
// 第一步---产生一个元组 { [key in keyof T]: T[key] extends U ? 'has' : 'none' }
// 该元组的内容为只有'has'和'none'两种值的一个集合
// 取出T中每一项，去判断是否extends U，即得到结果'has'或'none'
// 第二步---判断产生的元组中是否包含有'has'项
// 写法即是用[number]的形式去造成元组每个下标位置均执行
// 第三步---得到最终结果，但凡有一个'has'，即可生效返回true，若不存在'has'则返回false