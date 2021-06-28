import './App.css';
import Nav from './Nav';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />

			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />

			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

			<Row title="Romance Movies" fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
