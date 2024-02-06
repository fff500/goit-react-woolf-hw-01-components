import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
            })}
        </ul>
    )
}