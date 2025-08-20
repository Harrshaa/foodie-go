import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserDummy from "./UserDummy";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("parent constructore")
    }

        fetchProfile = async ()=>{
        const data = await fetch ("https://api.github.com/users/harrshaa");
        const json = await data.json();
        console.log(json);
    }

    componentDidMount(){
        console.log("parent did mount ");

        //API Call
        this.fetchProfile();

      

    }

    render(){
        console.log("parent render")
        return(
            <div className="about">
            <h1>About</h1>
            <h2>This is built Harrshaa</h2>
            <div>
                LoggedInuser 
                <UserContext.Consumer>{({loggedInUser})=><h1>{loggedInUser}</h1>}</UserContext.Consumer>
            </div>
            {/* <User name= {"Harsha (function)"} location={"Hyderabad (function)"} /> */}
            <UserClass name={"Harsha (class)"} location={"Hyderabad (class)"} />
            <UserDummy name={"Harrshaa"} location={"Gachibowli"}/>
            </div>
        )

    }
}


export default About;