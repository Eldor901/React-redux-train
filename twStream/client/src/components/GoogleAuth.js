import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";


class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '634395594281-t58tqcruuupqv2a9mqpjejtvfons923j.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.OnAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.OnAuthChange);
            });
        });
    }



    OnAuthChange = isSignedIn =>
    {
        if(isSignedIn)
        {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else
        {
            this.props.signOut();
        }
    };


    OnSignInClick = ()=>
    {
        this.auth.signIn();
    };

    OnSignOutClick = () =>
    {
        this.auth.signOut();
    };



    renderAuthButton()
    {
        if(this.props.isSignedIn === null)
        {
            return null
        }else if(this.props.isSignedIn)
        {
            return ( <button onClick={this.OnSignOutClick} className="ui red google button">
                <i className="google icon"/>
                SignOut
            </button> );
        }else
        {
            return ( <button onClick={this.OnSignInClick} className="ui red google button">
                <i className="google icon"/>
                SignIn
            </button> );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps,
    {signIn, signOut})
(GoogleAuth);
