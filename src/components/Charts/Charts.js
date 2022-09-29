import dicaprioData from '../../leo.json';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import './Charts.css';

export default function Charts() {
  return (
    <div>
      <div className="charts">
        <h1>Leonardo DiCaprio:</h1>
        <h2>A Gross Dating History</h2>
      </div>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryBar data={dicaprioData} x="leo" y="gap" />
      </VictoryChart>
    </div>
  );
}
