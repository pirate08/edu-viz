import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Difference of male and female education rate in India from first cencus.',
    },
  },
};

const labels = [
  1881, 1891, 1901, 1911, 1921, 1931, 1941, 1951, 1961, 1971, 1981, 1991, 2001,
  2011,
];

export const data = {
  labels,
  datasets: {
    label: 'Male',
    // data: labels.map(() => )
  },
};

const FirstMap = () => {
  return <div></div>;
};

export default FirstMap;
