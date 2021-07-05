type MyReturnType<T extends (...params: any[]) => unknown> = T extends (...params: any[]) => infer R ? R : never

// 使用infer创建一个待推断的类型变量，得到返回值的类型
// 直接抛出这个类型，never又是用作不可能存在的失败条件
