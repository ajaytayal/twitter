import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Twitter extends React.Component {
  constructor(props) {
    super(props);
	this.onkeyup = this.onkeyup.bind(this);
	this.onkeydown = this.onkeydown.bind(this);
    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    axios.get('../dist/json/tweets.json')
      .then(res => {
        const tweets = res.data.tweets;
        this.setState({ tweets });
      })
  }

  onkeydown(event){
	  var targ = event.target;
	  targ.classList.remove('textareaSelect');
  }
  
  onkeyup(event){
	  var targ = event.target;
	  var val = targ.innerText;
	  if(val.length==0){
		targ.classList.add('textareaSelect');	  
	  }
	  if(event.key=='Enter'){
	  this.state.tweets.splice(0, 0, {id:(this.state.tweets.length+1), name:'ajay', message: val});
	  targ.innerText = '';
	  targ.classList.add('textareaSelect');

		this.setState({
			tweets: this.state.tweets
		})
	  }
  }

  render() {
    return (
      <div>
	  	<div onKeyDown={this.onkeydown} onKeyUp={this.onkeyup} className="textarea textareaSelect" contentEditable="true"></div>
        <ul>
			{this.state.tweets.map(tweet =>
            <li key={tweet.id}>
				<div>{tweet.name}</div>
				<div>{tweet.message}</div><br/>
			</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Twitter />,
  document.getElementById('main')
);