import React from "react";

export default class LoadingLine extends React.Component {

    render(){
        return(
            <div className="loading">
                <marquee behavior="" direction="">
                    Loading... Please Wait....
                </marquee>
            </div>
        )
    }
}