export const sort = (prop: string | string[], arr: any[]): any[] => {

    prop = (<string>prop).split('.')

    arr.sort((a, b)  => {
        for(let i = 0; i < prop.length; i++) {
            a = a[prop[i]]
            b = b[prop[i]]
        }

        return a > b ? 1 : -1
    })

    return arr
}