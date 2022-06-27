export const required = (values: any) => {
    if (values) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number) => (values: any) => {
    if (values.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else {
        return undefined
    }
}