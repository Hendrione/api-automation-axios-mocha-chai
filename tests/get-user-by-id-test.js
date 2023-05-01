import { getUserByIDTestCase } from "../testcases/test-cases.js"
import userControllerAPI from "../api/user-controller.js"
import { userPayload } from "../data/user-data.js"
import { expect } from "chai"
import tags from "mocha-tags-ultra"

describe('Get User By ID', () => {

    let userData

    before(async () => {
        //create User
        userData = await userControllerAPI.createUser({...userPayload})
        expect(userData.status).to.be.equal(200)
    })

    tags('testhooks').
    it(getUserByIDTestCase.positive.case1, async() => {
        //get User
        let response = await userControllerAPI.getUsersByID(userData.data.id)
        expect(response.status).to.be.equal(200)
        expect(response.data.firstName).to.be.equal(userData.data.firstName)
    })
})