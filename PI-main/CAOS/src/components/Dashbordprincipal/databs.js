import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  chartsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 12,
    width: '100%',
  },
  chartContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

const clientesData1 = [
  { name: 'A', population: 40, color: '#7B1FA2', legendFontColor: '#7B1FA2', legendFontSize: 12 },
  { name: 'B', population: 60, color: '#E040FB', legendFontColor: '#E040FB', legendFontSize: 12 },
];
const trabalhosData2 = [
  { name: 'C', population: 30, color: '#3949AB', legendFontColor: '#3949AB', legendFontSize: 12 },
  { name: 'D', population: 70, color: '#00B8D4', legendFontColor: '#00B8D4', legendFontSize: 12 },
];
const lucroData3 = [
  { name: 'E', population: 55, color: '#43A047', legendFontColor: '#43A047', legendFontSize: 12 },
  { name: 'F', population: 45, color: '#FFB300', legendFontColor: '#FFB300', legendFontSize: 12 },
];

export default function Databs() {
  return (
    <ScrollView>
      <View style={styles.chartsRow}>
        <View style={styles.chartContainer}>
          <PieChart
            data={clientesData1}
            width={screenWidth / 4}
            height={120}
            chartConfig={{
              color: (opacity = 1) => `rgba(123, 31, 162, ${opacity})`,
            }}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'10'}
            hasLegend={false}
          />
        </View>
        <View style={styles.chartContainer}>
          <PieChart
            data={trabalhosData2}
            width={screenWidth / 4}
            height={120}
            chartConfig={{
              color: (opacity = 1) => `rgba(57, 73, 171, ${opacity})`,
            }}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'10'}
            hasLegend={false}
          />
        </View>
        <View style={styles.chartContainer}>
          <PieChart
            data={lucroData3}
            width={screenWidth / 4}
            height={120}
            chartConfig={{
              color: (opacity = 1) => `rgba(67, 160, 71, ${opacity})`,
            }}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'10'}
            hasLegend={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
