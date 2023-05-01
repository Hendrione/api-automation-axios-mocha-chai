import userControllerAPI from "../api/user-controller.js"
import { expect, assert } from "chai"
import { userPayload } from "../data/user-data.js"
import { createUserTestCase } from "../testcases/test-cases.js"
import tags from 'mocha-tags-ultra'
import chaiArrays from "chai-arrays"
import chai from "chai"
import chaiJsonSchema from "chai-json-schema"
import userSchema from '../schemas/user-schema.json' assert {type: 'json'}

chai.use(chaiArrays)
chai.use(chaiJsonSchema)

// tags('createuser').
describe("Create User API", () => {

    // const allureReqBody = allure.createStep("requestData", (requestBody) => {
    //     allure.createAttachment("Request JSON",JSON.stringify(requestBody, null, 4));
    // });

    // const allureResBody = allure.createStep("responseBody", (response) => {
    //     allure.createAttachment("Response JSON",JSON.stringify(response, null, 4));
    // });

    tags('regression', 'smoke').
    it(createUserTestCase.positive.case1, async () => {
        let requestBody = {...userPayload}
        //uncomment to attach the JSON on report
        // allureReqBody(requestBody)
        const response = await userControllerAPI.createUser(requestBody)
        //uncomment to attach the JSON on report
        // allureResBody(response.data)
        expect(response.status).to.be.equal(200)
        expect(response.data.firstName).to.equal(requestBody.firstName)
        expect(response.data.lastName).to.equal(requestBody.lastName)
        assert.equal(response.status, 200, "statuscode is not 200")
        expect(response.data.hobbies).to.be.equalTo(requestBody.hobbies)
        expect(response.data).to.be.jsonSchema(userSchema)
        console.log(response.headers)
    })

    tags('regression').
    it(createUserTestCase.negative.case1, async () => {
        let requestBody = {...userPayload}
        requestBody.age = 0
        const response = await userControllerAPI.createUser(requestBody)
        expect(response.status).to.equal(400)
        expect(response.data.errorCode).to.be.equal("ER-03")
        expect(response.data.message).to.be.equal("you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender")
    })

})