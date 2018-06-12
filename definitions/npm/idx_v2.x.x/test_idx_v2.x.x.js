import idx from 'idx'

type User = {
  user: ?{
    name: string,
    friends: ?Array<User>,
  }
};

const props: User = (null: any);

(idx(props, _ => _.user.friends[0].user.friends): ?Array<User>);
(idx(props, _ => _.user.friends[0].user.name): ?string);
// $ExpectError - name is a string
(idx(props, _ => _.user.friends[0].user.name): ?number);
