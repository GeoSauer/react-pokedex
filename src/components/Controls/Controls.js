import Query from './Query';
import './controls.css';
import Type from './Type';

export default function Controls() {
  return (
    <div className="controls">
      <Type />
      <Query />
    </div>
  );
}
