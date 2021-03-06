import React, { Component } from 'react';
import MainTopComponent from '../components/maintop';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
    this.initData = this.initData.bind(this);
  }

  initData () {
    // 备用代码。打开文件夹的简单逻辑
  }

  componentWillMount () {
  }

  componentDidMount () {
    this.initData();
    // const { dispatch } = this.props;
    // dispatch(fetchMoviesInfo());
  }

  componentWillReceiveProps (nextprops) {
    // console.log(nextprops);
  }


  render () {
    return (
      <div className="app">
        {/*<SidebarContainer />*/}
        <div className="main">
          <MainTopComponent />
          <div className="main-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
};

export default connect(
  mapStateToProps
)(App);