import React, {FC, useEffect,useState} from 'react';

interface Props {

}

const App: FC<Props> = (props) => {
  const [state,setState] = useState(1);
  useEffect(() => {
    console.log(state);
  },[]);
  return (<div>{state}</div>);
};

export default App;