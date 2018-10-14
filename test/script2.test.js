const getPromise = require('../script2')


describe("test asynchonous",()=>{
    test("call swapi to get people",done=>{
        getPromise.getData().then(data=>{
            expect.assertions(1)
            expect(data.count).toEqual(87)
            done()
        })
    })
})