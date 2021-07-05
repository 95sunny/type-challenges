type TupleToUnion<T extends readonly unknown[]> = T[number]

// 需要在<>内把T限制成数组，才能在后面取到number
