import userData from "./userCard/user.json";
import statisticsData from "./statistics/data.json";
import friendsData from "./friendsList/friends.json"
import transactionsData from "./transactionsHistory/transactions.json"
import { UserCard } from "./userCard/UserCard";
import { StatisticsInfo } from "./statistics/Statistics";
import { FriendsList } from "./friendsList/FriendsList";
import { TransactionHistory } from "./transactionsHistory/TransactionHistory";

import { Section } from "./App.styled";




export const App = () => {
  return (
    <Section>
      <UserCard
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes} />
      <StatisticsInfo
        title="Upload stats"
        stats={statisticsData} />
      <FriendsList
        friends={friendsData} />
      <TransactionHistory
        items={transactionsData} />
    </Section>
  );
};
