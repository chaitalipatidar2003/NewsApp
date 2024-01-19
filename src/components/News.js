//108dbbe0db974bdebea2b5c04eecb504

import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    language: "en"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    language: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalresult: 0
    }

    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
  }

  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.language}&apiKey=108dbbe0db974bdebea2b5c04eecb504&county=${this.props.country}&page=1&pagesize=${this.props.pageSize}`;
    this.setState(
      { loading: true }
    )
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalresult: parsedData.totalresults,
      loading: false
    })
    this.props.setProgress(100)
  }
  async componentDidMount() {
    console.log("cdm");
    this.updateNews()
  }

  handleprev = async () => {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.language}&apiKey=108dbbe0db974bdebea2b5c04eecb504&country=${this.props.country}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState(
      { loading: true }
    )
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    console.log(parsedData)


    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
    this.props.setProgress(100)
  }

  handlenext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalresult / this.state.pageSize)) {
      // no operation
    }

    else {
      this.props.setProgress(10)
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.language}&apiKey=108dbbe0db974bdebea2b5c04eecb504&county=${this.props.country}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState(
        { loading: true }
      )
      let data = await fetch(url);
      this.props.setProgress(30)
      let parsedData = await data.json()
      this.props.setProgress(70)
      console.log(parsedData)


      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
      this.props.setProgress(100)
    }

  }

  fetchMoreData = async () => {
    this.props.setProgress(10)
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.language}&apiKey=108dbbe0db974bdebea2b5c04eecb504&county=${this.props.country}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState(
      { loading: true }
    )
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)

    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalresult: parsedData.totalresult,                        //---------------------------------totalresult
      page: this.state.page + 1
    })
    this.props.setProgress(100)
  };

  render() {
    console.log("render")
    return (
      <>
        <h2 className='text-center mb-5 mt-5 pt-4'>NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)}  Headlines</h2>
         {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresult}
          loader={<Spinner />}
          direction="top"
        >
          <div className='container'>
            <div className='row mt-4 mr-2 ml-3'>

              {this.state.articles && this.state.articles.map((element) => {
                return (<div className='col-md-3' key={element.url}>
                  <Newsitem 
                  title={element.title ? element.title.slice(0, 45) : ""}
                   discription={element.content ? element.content.slice(0, 88) : ""} 
                   imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOdXKPUZUEYvx8VxWESYqS5IAKhhDwk01MFUGnBvG&s"} 
                   newsUrl={element.url} 
                   author={element.author} 
                   date={element.publishedAt} 
                   source={element.source.name} />
                </div>)

              })}


            </div>
          </div>
        </InfiniteScroll>
        {/* {this.state.loading && <Spinner/>} */}
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark mx-3" onClick={this.handleprev}>&larr; Prev </button>
        <button  disabled="true" type="button" class="btn btn-light mx-3" >Page no...{this.state.page}</button>

        <button  disabled={this.state.page + 1 > 5} type="button" class="btn btn-dark mx-3" onClick={this.handlenext}>Next &rarr;</button>

        </div> */}

      </>
    )
  }
}

export default News
