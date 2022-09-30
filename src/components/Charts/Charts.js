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
      <p className="label">Y Axis: Girlfriend Age ------ X Axis: Leonardo Age</p>
      <h2 className="summary">
        As you can see in this handy chart, as Leonardo DiCaprio ages, his girlfriends remain 25
        years old or younger. It is... not great.
      </h2>
    </div>
  );
}
