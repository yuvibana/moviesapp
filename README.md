# moviesapp

 const getMoviesData = async (searchQuery, category) => {
    setIsLoading(true);
    try {
        let apiUrl = '';
        switch (category) {
            case 'hollywood':
                apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_original_language=en';
                break;
            case 'bollywood':
                apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_original_language=hi';
                break;
            case 'latest':
                apiUrl = 'https://api.themoviedb.org/3/movie/latest?api_key=YOUR_API_KEY';
                break;
            default:
                apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`;
                break;
        }
        const response = await fetch(apiUrl);
        const resData = await response.json();
        setMoviesData(resData);
    } catch (error) {
        console.log('fetching error:', error);
    } finally {
        setIsLoading(false);
    }
};
