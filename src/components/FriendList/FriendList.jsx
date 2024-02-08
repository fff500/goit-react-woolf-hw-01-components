import { FriendListItem } from "./FriendListItem";

import style from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={style['friend-list']}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
            })}
        </ul>
    )
}