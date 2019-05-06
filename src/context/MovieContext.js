import React from 'react'

const MovieContext = React.createContext({
  userReviews:[],
  searchMovies: [],
  userMovies: [],
  searchTerm: '',
  loading:false,
  handleReviewSubmit: () => {},
  handleGoBack: () => {},
  onSearchTermChange: ()=>{},
  onSearchSubmit: ()=>{},
  clearSearchResults: ()=>{},
  setReviews: ()=>{},


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
      fromOrigin: true,
      
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
      //TODO:
      console.log('Fetching...');
      this.apiCall(this.state.searchTerm)
        .then(res=>res.json())
        .then((data=>{
          this.updateData(data)
        }))
    }
  }

  handleGoBack = () =>{
    this.props.history.goBack();
  }

  setReviews=(userReviews)=>{
    this.setState({userReviews})
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
return (
  <MovieContext.Provider value={{
    userReviews: this.state.userReviews,
    userMovies: this.state.userMovies,
    searchMovies: this.state.searchMovies,
    handleReviewSubmit: this.handleReviewSubmit,
    handleGoBack: this.handleGoBack,
    onSearchTermChange: this.onSearchTermChange,
    onSearchSubmit: this.onSearchSubmit,
    searchTerm: this.state.searchTerm,
    loading:this.state.loading,
    clearSearchResults: this.clearSearchResults,
    setReviews: this.setReviews,


  }}>
   {this.props.children}
  </MovieContext.Provider>
  )
  }
}