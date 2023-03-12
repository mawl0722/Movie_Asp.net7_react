import { observer } from 'mobx-react-lite'
import { Movie } from '../../../App/model/movie'
import { UseStore } from '../../../App/Stores/BaseStore'

interface Props {
  movie: Movie
}

export default observer(function MovieList({ movie }: Props) {
  const {
    MovieStore: { deleteMovie, selectedMovieHandler },
  } = UseStore()

  return (
    <div className="m-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg"
          alt=""
          className="rounded-lg shadow-lg"
        />
      <div className="relative bg-gradient-to-t from-black to-transparent -mt-20 text-white text-center rounded-b-lg">
        <p className="drop-shadow text-lg font-medium mb-1">{movie.title}</p>
        <button
          className="duration-300 bg-red-500 hover:bg-red-600 m-1 mr-2 mb-3 p-1 rounded-xl shadow-md font-semibold text-white"
          onClick={() => deleteMovie(movie.id)}
        >
          Click to Delete{' '}
        </button>
        <button
          className="duration-300 bg-blue-300 hover:bg-blue-400 p-1 m-1 rounded-xl shadow-md font-semibold text-blue-800"
          onClick={() => selectedMovieHandler(movie.id)}
        >
          Select Movie
        </button>
      </div>
    </div>
  )
})
