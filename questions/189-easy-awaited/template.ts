type Awaited<T extends Promise<unknown>> = T extends Promise<infer R> ? R : never

// 又一个never的应用，在没有意义的判断条件中，永远不会生效的一方，可以用never占位
