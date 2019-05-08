import React from 'react'

const MovieContext = React.createContext({
  userReviews:[],
  searchMovies: [],
  userMovies: [],
  searchTerm: '',
  loading:false,
  fromOrigin: true,
  handleReviewSubmit: () => {},
  onSearchTermChange: ()=>{},
  onSearchSubmit: ()=>{},
  clearSearchResults: ()=>{},
  setReviews: ()=>{},
  clearReviews: ()=>{},
  })

export default MovieContext;

export class MovieProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userReviews:[],
      userMovies: [],
      searchMovies: [],
      selected: null,
      searchTerm: '',
      loading:false,

    }
  }

  apiCall = (searchTerm) =>{
    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDb_API_KEY}&s=${searchTerm}`;
    return fetch(url)
  }

  clearSearchResults= ()=>{
    this.setState({
      ...this.state,
      searchMovies: []
    })
  }

  onSearchTermChange =(searchTerm) =>{
    this.setState({searchTerm})
  }

  onSearchSubmit = (e)=>{
    e.preventDefault();
    const searchTerm = e.currentTarget['search-term'].value;
    this.setState({
      ...this.state,
      searchMovies:[],
      searchTerm,
      loading: true
    })
  }

  componentDidMount(){
  }

  componentDidUpdate = () =>{
    if (this.state.loading){
      this.apiCall(this.state.searchTerm)
        .then(res=>res.json())
        .then((data=>{
          this.updateData(data)
        }))
    }
  }

  setReviews=(userReviews)=>{
    this.setState({userReviews})
  }

  clearReviews = ()=>{
    this.setState({userReviews:[]})
  }


  updateData = (data) =>{
    let count = 0;
    let searchMovies = [];
    if (data["Response"]){
      count = data["Search"].length
    }
    for (let i =0; i <count; i++){
      searchMovies.push(data["Search"][i])
    }
    this.setState({
      ...this.state,
      searchMovies,
      loading:false
    })
  }
  render() {
    const {
      userReviews,
      userMovies,
      searchMovies,
      searchTerm,
      loading
    } = this.state;
    const {
      handleReviewSubmit,
      handleGoBack,
      onSearchTermChange,
      onSearchSubmit,
      clearSearchResults,
      setReviews,
      clearReviews,
    } = this;
    return (
      <MovieContext.Provider value={{
        userReviews,
        userMovies,
        searchMovies,
        searchTerm,
        loading,
        handleReviewSubmit,
        handleGoBack,
        onSearchTermChange,
        onSearchSubmit,
        clearSearchResults,
        setReviews,
        clearReviews,
      }}>
      {this.props.children}
      </MovieContext.Provider>
      )
  }
}