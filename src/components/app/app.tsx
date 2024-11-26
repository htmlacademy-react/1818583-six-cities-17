import MainPage from '../../pages/main-page/main-page.tsx';
import {MainPageType} from '../../types/types.ts';

type Props = {
  data: MainPageType;
}

function App({ data }: Props) {
  return (
    <MainPage offersCount={5} data={data}/>
  );
}

export default App;
