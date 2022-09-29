import dicaprioData from '../../leo.json';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

export default function Charts() {
  return (
    <div>
      <h1>Leonardo DiCaprio:</h1>
      <h2>A Gross Dating History</h2>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryBar data={dicaprioData} x="leo" y="gap" />
      </VictoryChart>
    </div>
  );
}
