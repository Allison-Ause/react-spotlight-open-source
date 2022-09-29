import dicaprioData from '../../leo.json';
import { VictoryBar, VictoryChart } from 'victory';

export default function Charts() {
  return (
    <div>
      <h1>Leonardo DiCaprio:</h1>
      <h2>A Gross Dating History</h2>
      <VictoryChart>
        <VictoryBar data={dicaprioData} x="leo" y="leo" />
      </VictoryChart>
    </div>
  );
}
