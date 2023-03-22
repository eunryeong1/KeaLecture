import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import lottonumber from "./LottoNumber";

function App() {
  return (
    <RecoilRoot>
      <lottonumber></lottonumber>
    </RecoilRoot>
  );
}

export default App;