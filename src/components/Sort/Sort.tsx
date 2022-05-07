import { FC, Dispatch, SetStateAction } from 'react'
import { sort } from "../../actions/sort";
import { IUser } from '../../types/types';
import './Sort.scss'

interface ISortItemProps {
    setUsers: Dispatch<SetStateAction<IUser[]>>
    users: IUser[]
}

const Sort: FC<ISortItemProps>  = ({ setUsers, users }) => {

    return (
      <div className="sort">
          <div className="sort-content">
            <div className="sort-title">
                <p>Сортировка</p>
            </div>

            <div className="sort-list">

                <div className="sort-list-item">
                    <button className="sort-list-item__btn btn btn-blue" onClick={() => setUsers([...sort('address.city', users)])}>по городу</button>
                </div>

                <div className="sort-list-item">
                    <button className="sort-list-item__btn btn btn-blue" onClick={() => setUsers([...sort('company.name', users)])}>по компании</button>
                </div>

            </div>
          </div>
      </div>
    )
}

export default Sort;
