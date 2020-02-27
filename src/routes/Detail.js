import React from "react";

//Link를 사용해서 리다이렉트하거나 유저의 네비게이션 방식을 바꾸는 방법
//라우터를 통해 옮겨지는 prop을 이용해서 조작하는 것이다.

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
        
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
        
    }
}

export default Detail;