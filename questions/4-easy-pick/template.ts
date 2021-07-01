type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

// key取K中的键名，value取刚才得到的键名key在T中对应的值
