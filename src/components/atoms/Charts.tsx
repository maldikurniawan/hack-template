import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartsProps {
    variant: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar';
}

const Charts: React.FC<ChartsProps> = ({ variant }) => {

    const chartOptions: Record<string, { series: any[]; options: ApexOptions }> = {
        line: {
            series: [
                {
                    name: 'Sales',
                    data: [45, 55, 75, 25, 45, 110],
                },
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'line',
                    toolbar: { show: false },
                },
                colors: ['#5CED73'],
                tooltip: {
                    y: {
                        formatter(number: number) {
                            return '$' + number;
                        },
                    },
                    theme: 'dark',
                },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                    labels: {
                        style: {
                            colors: '#FFF',
                        },
                    },
                    axisBorder: {
                        color: '#FFF',
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        offsetX: 0,
                        style: {
                            colors: '#FFF',
                        },
                    },
                },
                grid: {
                    borderColor: '#FFF',
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
            },
        },
        area: {
            series: [
                {
                    name: 'Income',
                    data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
                },
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 300,
                    zoom: { enabled: false },
                    toolbar: { show: false },
                },
                colors: ['#805dca'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                xaxis: {
                    axisBorder: {
                        color: '#FFF',
                    },
                    labels: {
                        style: {
                            colors: '#FFF',
                        },
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        offsetX: 0,
                        style: {
                            colors: '#FFF',
                        },
                    },
                },
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                legend: {
                    horizontalAlign: 'left',
                },
                grid: {
                    borderColor: '#FFF',
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                tooltip: {
                    theme: 'dark',
                },
            },
        },
        bar: {
            series: [
                {
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                },
                {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'bar',
                    zoom: { enabled: false },
                    toolbar: { show: false },
                },
                colors: ['#805dca', '#e7515a'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent'],
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                    },
                },
                grid: {
                    borderColor: '#fff',
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    axisBorder: {
                        color: '#fff',
                    },
                    labels: {
                        style: {
                            colors: '#FFF',
                        },
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        offsetX: 0,
                        style: {
                            colors: '#FFF',
                        },
                    },
                },
                tooltip: {
                    theme: 'dark',
                    y: {
                        formatter(val: any) {
                            return val;
                        },
                    },
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: ["text-white", "text-white"],
                    },
                },
            },
        },
        pie: {
            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    height: 300,
                    type: 'pie',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                        },
                    },
                ],
                stroke: {
                    show: false,
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: ["text-white", "text-white", "text-white", "text-white", "text-white"],
                    },
                },
            },
        },
        donut: {
            series: [44, 55, 13],
            options: {
                chart: {
                    height: 300,
                    type: 'donut',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                stroke: {
                    show: false,
                },
                labels: ['Team A', 'Team B', 'Team C'],
                colors: ['#4361ee', '#805dca', '#e2a03f'],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                        },
                    },
                ],
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: ["text-white", "text-white", "text-white"],
                    },
                },
            },
        },
        radialBar: {
            series: [44, 55, 41],
            options: {
                chart: {
                    height: 300,
                    type: 'radialBar',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#2563eb', '#9333ea', '#ca8a04'],
                grid: {
                    borderColor: '#FFF',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                                color: '#FFF'
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#FFF',
                                formatter: function () {
                                    return String(249);
                                },
                            },
                        },
                    },
                },
                labels: ['Apples', 'Oranges', 'Bananas'],
                fill: {
                    opacity: 0.85,
                },
            },
        },
    };

    const chartData = chartOptions[variant];

    return <Chart options={chartData.options} series={chartData.series} type={variant} height={300} />;
};

export default Charts;