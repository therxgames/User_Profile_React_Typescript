import { FC, ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { IUserProfileItem, IJsonUser } from "../../types/types"
import ProfileItem from "../UserProfileItem/UserProfileItem"
import { Loader } from "../Loader/Loader"
import './UserProfile.scss'

const UserProfile: FC = () => {

    const { id } = useParams<string>();
    const [disabled, setDisabled] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [user, setUser] = useState<IUserProfileItem>({
        name: {
            value: '',
            required: true,
            name: 'name',
            label: 'Name',
            error: null,
            type: 'text',
        },
        username: {
            value: '',
            required: true,
            name: 'username',
            label: 'User name',
            error: null,
            type: 'text',
        },
        email: {
            value: '',
            required: true,
            name: 'email',
            label: 'E-mail',
            error: null,
            type: 'email',
        },
        street: {
            value: '',
            required: true,
            name: 'street',
            label: 'Street',
            error: null,
            type: 'text',
        },
        city: {
            value: '',
            required: true,
            name: 'city',
            label: 'City',
            error: null,
            type: 'text',
        },
        zipcode: {
            value: '',
            required: true,
            name: 'zipcode',
            label: 'Zip code',
            error: null,
            type: 'text',
        },
        phone: {
            value: '',
            required: true,
            name: 'phone',
            label: 'Phone',
            error: null,
            type: 'phone',
        },
        website: {
            value: '',
            required: true,
            name: 'website',
            label: 'Website',
            error: null,
            type: 'text',
        },
        comment: {
            value: '',
            required: false,
            name: 'comment',
            label: 'Comment',
            error: null,
            type: 'textarea',
        },
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setUser({
            ...user, 
            [name]: {
                ...user[name],
                error: value.length === 0,
                value,
            }
        })
    }

    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const errorCount:number = Object.values(user).filter(item => item.required && item.error).length
        const jsonObj:IJsonUser = {}

        Object.entries(user).map(item => {
            jsonObj[item[0]] = item[1].value;
            return true
        })

        if(errorCount === 0) {
            console.log(JSON.stringify(jsonObj))
        } else {
            alert('Заполнены не все поля')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                 .then(res => {
                const data = res.data

                setUser({
                    ...user,
                    name: {
                        ...user.name,
                        value: data.name
                    },
                    username: {
                        ...user.username,
                        value: data.username
                    },
                    email: {
                        ...user.email,
                        value: data.email
                    },
                    street: {
                        ...user.street,
                        value: data.address.street
                    },
                    city: {
                        ...user.city,
                        value: data.address.city
                    },
                    zipcode: {
                        ...user.zipcode,
                        value: data.address.zipcode
                    },
                    phone: {
                        ...user.phone,
                        value: data.phone
                    },
                    website: {
                        ...user.website,
                        value: data.website
                    },
                })
                 })
                 .catch(e => console.log(e.message))
                 .finally(() => setIsLoading(false))
        }, 1000)
    }, [id])

    if(isLoading) {
        return <Loader />
    }

    return (
        <div className="profile_container">
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-header-title">
                        <p className="profile-header-title__text">Профиль пользователя</p>
                    </div>

                    <div className="profile-header-edit">
                        <button className="profile-header-edit__btn btn btn-blue" type="button" onClick={() => setDisabled(false)}>Редактироввать</button>
                    </div>
                </div>

                <div className="profile-main-wrapper" >
                    <form action="/" method="post" onSubmit={(e:  FormEvent<HTMLFormElement>) => onSubmitForm(e)}>
                        <div className="profile-main">
                                
                            {
                                Object.values(user).map((item, index) => {
                                    return(
                                        <ProfileItem key = {index}
                                                     value = {item.value}
                                                     required={item.required}
                                                     disabled = {disabled} 
                                                     name = {item.name} 
                                                     label = {item.label}
                                                     type = {item.type}
                                                     handleChange = {handleChange}  />
                                    )
                                })
                            }
                        </div>

                        <div className="profile-main-submit">
                            <button className="profile-main-submit__btn btn btn-green" disabled = {disabled}>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
