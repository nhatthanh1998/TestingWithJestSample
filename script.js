const googleDatabase = [
    "cats.com",
    "dogs.com",
    "flower.com",
    "sushi.com",
    "suhiOishi.com",
    "bestsushiworld.com",
    "sunflower.com"
]

const googleSearch = (searchValue,db) => {
    const result = db.filter(web=>web.includes(searchValue))
    return result.length > 3 ? result.slice(0,3):result
}

module.exports = googleSearch