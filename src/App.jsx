import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics";

import user from "./data/user";
import data from "./data/data";

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
    </div>
  );
};
