import React, {ChangeEvent, FC} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType> {
    state: LocalStateType = {
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

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || '-----'}
                        </span>
                    </div>
                    : <div>
                        <input
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                    </div>
                }
            </div>
        );
    }

};

