import { useEffect, useState } from 'react'
import axios from "axios"
import { IUser } from '../../types/types'
import { Loader } from '../../components/Loader/Loader'
import Sort from '../../components/Sort/Sort';
import UserList from '../../components/UserList/UserList'

const UserListPage: React.FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
                 .then(res => setUsers(res.data))
                 .catch(e => console.log(e.message))
                 .finally(() => setIsLoading(false))
        }, 1000)
    }, [])

    if(isLoading) {
        return <Loader />
    }

    return (
      <div className='home'>
            <Sort users={users} setUsers={setUsers} />
            <UserList users={users} />
      </div>
    )
}

export default UserListPage;
