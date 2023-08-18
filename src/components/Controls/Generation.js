import { usePokemonDetails } from '../../context/PokemonContext';

export default function Generation() {
  const { setGeneration } = usePokemonDetails();

  return (
    <select onChange={(event) => setGeneration(event.target.value)}>
      <option value="default">Generation</option>
      <option value="generation-i">Gen. I</option>
      <option value="generation-ii">Gen. II</option>
      <option value="generation-iii">Gen. III</option>
      <option value="generation-iv">Gen. IV</option>
      <option value="generation-v">Gen. V</option>
      <option value="generation-vi">Gen. VI</option>
      <option value="generation-vii">Gen. VII</option>
      <option value="generation-viii">Gen. VIII</option>
    </select>
  );
}
