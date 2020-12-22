import './App.css';
import LoadingSelect from './components/LoadingSelect';
import WithoutFilterSortSelect from './components/WithoutFilterSortSelect';
import OptionLabelSelect from './components/OptionLabelSelect';
import CustomizeInputElement from './components/CustomizeInputElement';

function App() {
  return (
    <>
    <LoadingSelect />
    <WithoutFilterSortSelect />
    <OptionLabelSelect />
    <CustomizeInputElement />
    </>
  );
}

export default App;
