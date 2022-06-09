import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AuthDataType, AuthType, StateType} from '../../redux/store';
import {setUserData} from '../../redux/auth-reducer';

type mapStatePropsType={
    isAuth: boolean,
    login: string | null,
}
type MapDispatchPropsType = {
    setUserData: (id: number, email:string, login: string) => void
}

type HeaderContainerPropsType = mapStatePropsType & MapDispatchPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render(): React.ReactNode {
        return (
            <Header {...this.props}/>
        );
    }
};

const mapStateToProps = (state: StateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);