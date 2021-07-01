type Length<T extends readonly unknown[]> = T['length']

// 奇怪的是，这里不支持 Length<T extends readonly Array<unknown>> 的写法