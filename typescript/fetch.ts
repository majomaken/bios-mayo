const API_URL: string = 'https://api.adviceslip.com/advice'

type Slip = {
  id: number;
  advice: string;
}

interface ResponseAdvice {
  slip: Slip;
}

const fetchRandomAdvice = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('No se pudo obtener el consejo aleatorio')
    }

    const data: ResponseAdvice = await response.json();

    return console.log(`Este es el consejo aleatorio del día: ${data.slip.advice}`)
  } catch (error) {
    console.log('Error', error)
  }
}

fetchRandomAdvice()

