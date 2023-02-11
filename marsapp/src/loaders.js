const  curiosity_url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json'
const perserverance_url = "https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json"
const insight_url = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0"

export const curiosityLoader = async () => {
    const response =  await fetch(curiosity_url)
    const data = await response.json()
    return data
}

export const perserveranceLoader = async () => {
    const response = await fetch(perserverance_url)
    const data = await response.json()
    return data
}

export const insightLoader = async () => {
    const response = await fetch(insight_url)
    const data = await response.json()
    return data
}