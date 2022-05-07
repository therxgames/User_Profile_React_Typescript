export interface IAddress {
    street: string
    city: string
    zipcode: string
}

export interface ICompany {
    name: string
}

export interface IUser {
    id: number
    name: string
    email: string
    company: ICompany
    address: IAddress
}

export interface IUserProfileItemKeys {
    value: string
    required: boolean
    name: string
    label: string
    error: null | boolean
    type: string
}


export interface IUserProfileItem {
    [index: string]: IUserProfileItemKeys
}

export interface IJsonUser {
    [index: string]: string
}