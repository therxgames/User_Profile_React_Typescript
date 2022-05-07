import { Fragment, FC, ChangeEvent } from 'react'
import './UserProfileItem.scss'

interface ProfilleIemProps {
    label: string
    name: string
    value: string
    disabled: boolean
    required: boolean
    type: string
    handleChange: (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
}

const ProfileItem: FC<ProfilleIemProps> = ({ label, name, value, disabled, handleChange, required, type }) => {

    return (
        <div className="profile-main-item">
            <label>{label}</label><br/>
            {
                type === 'textarea' 
                
                ?

                <Fragment>
                    <textarea className={`profile-main-item__textarea ${required && value.length === 0 ? 'error' : ''}`}
                           name={name} value={value} disabled={disabled} 
                           onChange={(e) => handleChange(e)} />
                </Fragment>

                :

                <Fragment>    
                    <input type={type} className={`profile-main-item__input ${required && value.length === 0 ? 'error' : ''}`}
                           name={name} value={value} disabled={disabled} 
                           onChange={(e) => handleChange(e)} />
                </Fragment>
            }
        </div>
    ) 
}

export default ProfileItem;
