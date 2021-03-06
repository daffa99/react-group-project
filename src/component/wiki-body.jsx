import React from 'react';
import {store, actions} from '../store';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'unistore/react';
class WikiBody extends React.Component{
    render(){
        console.log("iiniiiiiii  dari wikibody", this.props)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-11 py-2">
                        <h1 style={{fontWeight:"bold"}}>WIKIPEDYA</h1>
                    </div>
                    <div className="col-md-1 py-2">
                        <button className="btn btn-danger" onClick={this.props.getRandomJoke}>GetJoke</button>
                        <div>
                            <audio src={this.props.linkAudio} className="myAudio">
                                <source src="" type="audio/wav"/>
                            </audio>
                        </div>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 py-1 text-justify border-bottom border-top" style={{backgroundColor:"#F7F7F7"}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit et velit ut elementum. Nulla facilisi. Nullam volutpat nulla massa, ut eleifend dui molestie eu. Suspendisse nec mi mauris. Mauris ornare justo ut lobortis pharetra. Fusce a nisl eu justo viverra ornare et ac arcu. Suspendisse eget nunc pharetra, sagittis neque nec, pretium justo. Praesent et odio at tellus luctus posuere. Pellentesque non gravida risus, accumsan ultrices risus. Pellentesque dapibus magna sit amet rhoncus convallis. Morbi et nibh venenatis, suscipit sapien non, ullamcorper ligula. Proin imperdiet mollis massa, id tincidunt arcu euismod sit amet. Vestibulum et porta lectus. Nunc pretium.</p>
                    </div>
                </div>
                <div className="col-md-12">
                <div className="row py-1">
                    <div className="col-md-6 text-center border-right border-bottom border-left">
                        <div className="row">

                            <div className="col-md-12 pt-4 pb-2">
                                <span>Click here to get random article!</span>

                            </div>
                            <div className="col-md-12 mb-2">
                                <button type="button" className="btn btn-primary" onClick={this.props.handleRandomArticle}>Random</button>                              
                            </div>
                            <div className="col-md-12 pt-4 pb-2">
                                <span>Click here to show article!</span>
                            </div>

                            <div className="col-md-12 mb-3">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Show Article</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center border-left border-bottom border-right">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <span>Search here to search for article!</span>
                            </div>
                            <div className="col-md-12">
                                <form class="form text-center">
                                <input 
                                    class="form-group text-center" 
                                    type="search"
                                    placeholder="Search" 
                                    aria-label="Search" 
                                    onChange={(e) => this.props.handleSearchKeyword(e)}
                                />
                                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModalLong">
                                        <i class="fa fa-fw fa-search" ></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
// export default WikiBody;
export default connect('linkAudio, textAudio', actions
)(withRouter(WikiBody));