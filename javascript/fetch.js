//@ts-check
const API_URL = 'https://api.adviceslip.com/advice'

const fetchRandomAdvice = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('No se pudo obtener el consejo aleatorio')
    }

    const data = await response.json();

    console.log('Este es el consejo aleatorio del día: ', data.slip.advice)
  } catch (error) {
    console.log('Error', error)
  }
}

fetchRandomAdvice();