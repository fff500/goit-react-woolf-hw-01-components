import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics";
import { FriendList } from "./components/FriendList";
import { TransactionHistory } from "./components/TransactionHistory";


import user from "./data/user";
import data from "./data/data";
import friends from "./data/friends";
import transactions from "./data/transactions";

export const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
