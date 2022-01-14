import React,{Component} from 'react';
// 불러오고 싶을때 불러온다 Component
import $ from 'jquery';
// jequery $를 사용하겟다

class Gnb extends Component{
    constructor(props){
        super(props);
        // 부모속성의 최상의 속성까지 불러온다/html까지 불러옴
        // 당장은 필요없으나 보험으로 언제 필요할지 몰라 넣어둠
        this.state={
        // 여기의 this는 App.js 의 Gnb 노드 
            bbylink : this.props.gnblink,
            bbynm : this.props.gnbtext,
            bbytarget : this.props.gnbtarget
        }
        // {}오브젝트json으로 많이 받을 준비를 한다.
    } 


    render(){
        // render는 선언문 기능을 불러온다
        return(
            // <li><a href={this.state.gnblink}>{this.state.gnbtext}</a></li>
            <li><a href={this.state.bbylink} target={this.state.bbytarget}>{this.state.bbynm}</a></li>
            // a 노드 href 속성 this.props.gnbtext contents


        )
    }
}
export default Gnb;