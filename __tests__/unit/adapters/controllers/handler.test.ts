import * as chai from 'chai'
import {hello} from "../../../../src/adapters/controllers/handler";

chai.should()
const expect = chai.expect


describe('GET /hello', () => {
    it('should return 200', () => {
        hello(null, null, (error: Error, result: any) => {
            expect(error).to.be.null;
            result.statusCode.should.equal(200)
            result.body.should.equal('{"message":"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!","input":null}');
        })
    })
})
