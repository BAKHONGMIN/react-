import React, { Component } from "react";
import $ from "jquery";
class Fourth extends Component{

    htmlView = (e) => {
        // 함수의 매개인자가 실행문과 상관이 없다.
        // 이건 이벤트를 저장하는 매개자임
        $("#swiperWrapDiv li").each(function(){
            // each는 함수에 여러개가 있을때 각각을 불러온다.
            var index = $(this).index();
            $(this).html(`${index+1} . 번째 li 입니다.`);
        });
    }

    constructor(props){
        super(props);
        this.state = {}
    }




    render(){
        return(
            <div id="swiperWrapDiv"  onClick={hm => this.htmlView(hm)} className="Fourth-box">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            </div>
        );
    }
}
export default Fourth;