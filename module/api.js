'use scrict'

export const getMinhaEscola = async () => {
    const url = 'https://minhaescola-backend.onrender.com/fotos'
    const response = await fetch(url)
    const data = await response.json()
    return data;
}
