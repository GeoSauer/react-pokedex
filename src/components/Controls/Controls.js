import Select from './Select';
import Query from './Query';
import './controls.css';

export default function Controls() {
  return (
    <div className="controls">
      <Select />
      <Query />
    </div>
  );
}
