import React, { Component } from 'react';
import './App.css';
//import { connect } from 'react-redux';
import ResultPage from './components/resultPage';
import SearchBar from './components/searchBar' ;
import getJSON from './services/wordsGetService';
import FrequentWords from './components/frequentWords'
import Header from './components/header';
import Footer from './components/footer';
import getFrequentWords from './services/getFrequentWords';
import history from './history';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-67084629-2'); //Unique Google Analytics tracking number




class App extends Component {
  word={}
  loading = false;
  constructor(props){
    super(props);
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state={
        query:"",
        isLoadingMeaning :true,
        data:{},
        frequentWords:[],
        isLoadingFrequentWords:true,
        errorData :{"addSentences":"nan","wordContent":{"allMeanings":
        [],"mainWord":"Not Found","pronunciation":"","otherBlocks":
        [{"name":"Try these things","content":["Check your spelling","Try singular form of the word"]}]},
        "word":"Not Found"}
    }
}


 loadJSON(word){
    // tracking with google analytics
    ReactGA.pageview(window.location.pathname);

    this.setState({isLoadingMeaning:true});
    getJSON(word)
    .then(response=>{
      if(JSON.stringify(response)!=="{}"){
      this.setState({data:response,isLoadingMeaning:false});
        }
      else{
      this.setState({data:this.state.errorData,isLoadingMeaning:false});
      }
    })
 }

 loadFrequentWords(){
   getFrequentWords()
   .then(response=>{
      this.setState({frequentWords:response,isLoadingFrequentWords:false});
      //this.loadJSON(response[0]['word']);
      //console.log(this.state)
    })
 }


  
  componentDidMount(){
    if(this.props) {
       //let word = "-aholic";
       if(this.props.queryParam) {
          let word = this.props.queryParam.match.params.word;
          document.title = word + " meaning in English";
          this.loadJSON(word);
          //document.setTitle(word+" meaning in english")

      }
      this.loadFrequentWords();
     //this.setState({data:this.loadJSON("-aholic")})
    }


  }

  componentWillReceiveProps(nextProps){
    //console.log('nextProps', nextProps)
    if(nextProps) {
       //let word = "-aholic";
       if(nextProps.queryParam) {
        
        let word = nextProps.queryParam.match.params.word;
        document.title = word + " meaning in English";
        this.loadJSON(word);
      }
     //this.setState({data:this.loadJSON("-aholic")})
    }


  }


  onSearchClicked=()=>{ 
    history.push("/browse/"+this.state.query)
    //this.loadJSON(this.state.query)  handled in componentWillReceiveProps
  }

  handleInputChange(event) {
    this.setState({query: event.target.value});
    //console.log("state changed")
  };
  
  onKeyPressCalled=(event)=>{
    if(event.key==="Enter"){
      this.onSearchClicked();
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  goToTop = ()=> {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  render() {
    return (
   
    <div className="App">
       <Header/>
       <div className = "row">
          <div className="col-md-8 col-sm-12">
              <SearchBar query={this.state.query} onChangeCalled = {this.handleInputChange} 
              onSearchClicked={this.onSearchClicked} onKeyPressCalled={this.onKeyPressCalled}/>
              {<ResultPage query={this.props.queryParam} data = {this.state.data} isLoadingMeaning={this.state.isLoadingMeaning }/>}   
          </div>
          <div className = "col-md-4 col-sm-12">
              {!this.state.isLoadingFrequentWords &&  <FrequentWords goToTop = {this.goToTop} frequentWords = {this.state.frequentWords}/>}  
           </div>
        
        </div>
        <Footer/>
       
    </div>
    );
  }
}



export default App;


