import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
// import ActionButton from 'antd/lib/modal/ActionButton';
import {connect} from 'react-redux';
import * as actions from  './store/actions/auth';
// import ArticleList from './containers/ArticleListView';
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render(){
    return (
      <div>
        <Router>
       <CustomLayout {...this.props}>
          <BaseRouter />
       </CustomLayout>
       </Router>
      </div>
    );
  }
}

const mapStateToProps =  state => {
  return {
    isAuthenticated : state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
