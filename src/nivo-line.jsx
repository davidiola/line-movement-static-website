import React from 'react';
import { connect } from 'react-redux';
import { fetchGraphData } from './actions/index.js';
import { ResponsiveLine } from '@nivo/line';

const mapStateToProps = (state) => ({
  graphData: state.graphDataReducer.graphData,
});

const mapDispatchToProps = {
  fetchGraphData,
};

class MyResponsiveLine extends React.Component {

  componentDidMount() {
    this.props.fetchGraphData();
  }

  render() {
    return (
      <ResponsiveLine
        data={this.props.data}
        margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
        xScale={{ type: 'time', format: '%Y-%m-%d %H:%M' }}
        xFormat="time:%Y-%m-%d %H:%M"
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: '%b %d %I%p',
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: this.props.gameEventTitle,
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: this.props.lineType,
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={5}
        pointColor={{ from: 'color' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: 70,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'square',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyResponsiveLine);
