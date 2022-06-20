import React, {ChangeEvent, FC} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span></div>
                    : <div><input
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        type="text"
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                    </div>
                }
            </div>
        );
    }

};

