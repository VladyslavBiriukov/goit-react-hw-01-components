import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name} from './FriendList.styled';

export const FriendsIteam = ({avatar, name, isOnline }) => {
    return (
       <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
    );
};

FriendsIteam.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}