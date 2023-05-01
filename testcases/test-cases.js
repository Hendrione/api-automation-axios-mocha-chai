export const createUserTestCase = {
    positive: {
        case1: "Create user with valid data"
    },
    negative: {
        case1 : "create user with invalid data (age is zero)",
        case2 : "create user with invalid data (firstName is empty)"
    }
}

export const getUserByIDTestCase = {
    positive: {
        case1: "Get user with valid id"
    },
    negative: {
        case1 : "Get user with invalid id"
    }
}