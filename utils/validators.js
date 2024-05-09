// validor de password con regex
export const acceptablePassword = (value) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return regex.test(value)
}