type MyExclude<T, U> = T extends U ? never : T

// 这里又是一个never的应用，never定义为不存在，同时代码可以读取整个不存在的含义
// 判断条件为T是否继承于U，是则返回一个never，作为不给予结果，否则返回本结果，做到移除T中属于U的内容
