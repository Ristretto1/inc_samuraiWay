import React, {FC} from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
        editMode: false,
        title: 'Yo!'
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })

    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>
                    : <div><input autoFocus onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }

};

