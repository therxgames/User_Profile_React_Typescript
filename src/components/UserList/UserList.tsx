import UserItem from '../UserItem/UserItem'
import { IUser } from '../../types/types'
import './UserList.scss'

interface UserListProps {
  users: IUser[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {

    return (
      <div className="users-list-container">
        <div className="users-list">
          <div className="users-list-title">
              <p className="users-list-title__text">Список пользователей</p>
          </div>

          <div className="users-list-cards">
            {
                users.map(user => 
                    <UserItem key={user.id}  user={user} />
                )
            }
          </div>

          <div className="users-list-quant">
             <p className='users-list-quant__text'>Найдено {users.length} пользователей</p>
          </div>
        </div>
      </div>
    )
}

export default UserList;
