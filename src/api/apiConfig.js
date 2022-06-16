const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9b76fbc1d676c36ef30c9e3f4c91cb24',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;