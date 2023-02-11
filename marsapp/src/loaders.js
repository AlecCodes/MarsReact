const  curiosity_url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json'
const perserverance_url = "https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json"
const insight_url = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0"

export const curiosityLoader = async () => {
    const response = await (await fetch(curiosity_url))
    console.log('LOADEE')
    const data = await response.json()
    return data
}