const { VertexAI } = require("@google-cloud/vertexai");

async function generateRecommendFood({ goal, foodPreference, age, weight, eatEachDay }) {
    const vertexAI = new VertexAI({
        project: 'spoonful-bangkit-project',
        location: 'asia-southeast1',
        googleAuthOptions : {
            
        }
    })

    const generativeModel = vertexAI.getGenerativeModel({
        model: 'gemini-1.5-flash-001'
    })

    const prompt = `
        Saya sedang menjalankan gaya hidup sehat dengan tujuan ${goal}
        Dan saya memiliki preferensi makan makanan yang ${foodPreference}
        Dan saya berumur ${age} tahun
        Dan saya sekarang memiliki bobot sebesar ${weight}kg
        Dan saya sehari makan sebanyak ${eatEachDay} kali

        Berdasarkan deskripsi yang telah saya berikan, berikan saya 3 rekomendasi menu makanan atau minuman untuk mendukung gaya hidup sehat saya.
        Data rekomendasi yang diberikan hanya berisi nama dan kandungan nutrisi (karbohidrat, protein, gula, dan lemak).
    `

    const response = await generativeModel.generateContent(prompt)
    const content = await response.response

    return content

}

module.exports = { generateRecommendFood }