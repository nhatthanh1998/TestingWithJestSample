const googleSearch = require('../script')
dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]
describe("googleSearch function", () => {
    test("google search", () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
    })
    test("google search dog", () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })
    test("google search work with undefined input", () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
    })
    test("google search work with null input", () => {
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    test("google search return array of 3 value", () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
    test("google search return value to be an array", () => {
        expect(typeof (googleSearch(".com", dbMock))).toEqual(typeof ([]))
    })
})