import axios from 'axios'


export async function getFunction() {
    const response = await axios.get('http://localhost:8000/api/')
    return response.data
}

