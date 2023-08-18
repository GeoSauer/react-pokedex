import Query from './Query';
import './controls.css';
import Type from './Type';
import Style from './Style';
import Generation from './Generation';

export default function Controls() {
  return (
    <div className="controls">
      <Type />
      <Query />
      <Style />
      <Generation />
    </div>
  );
}
