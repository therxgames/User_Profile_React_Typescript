import { Link } from 'react-router-dom';
import { IUser } from '../../types/types';
import './UserItem.scss'

interface IUserItemProps {
    user: IUser
}

const User: React.FC<IUserItemProps> = ({ user }) => {

    const { id, name, company, address } = user

    return (
      <div className="user-card">
        <div className="user-card-content">
            <div className="user-card-item">
                <span className="user-card-item__key">ФИО:</span> &nbsp;
                <span className="user-card-item__value">{name}</span>
            </div>

            <div className="user-card-item">
                <span className="user-card-item__key">город:</span> &nbsp;
                <span className="user-card-item__value">{address.city}</span>
            </div>

            <div className="user-card-item">
                <span className="user-card-item__key">компания:</span> &nbsp;
                <span className="user-card-item__value">{company.name}</span>
            </div>

            <button className="user-card-item__details">
                <Link to={`/${id}`}>Подробнее</Link>
            </button>
        </div>
      </div>
    )
}

export default User;
