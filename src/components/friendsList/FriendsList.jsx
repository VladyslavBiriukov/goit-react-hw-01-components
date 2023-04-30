import PropTypes from 'prop-types';
import { FriendsIteam } from './FriendsItem';
import { Container } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
    return (
<Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsIteam
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
    );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      })
    ),
};