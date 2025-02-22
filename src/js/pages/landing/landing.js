import '../../../scss/components/pages/landing/landing.scss';
import Chart from 'chart.js/auto';
/*-------------------Slider Product-------------------*/
window.addEventListener("load", () => {
    document.querySelectorAll("[scroll_container]").forEach(t => {
        let e = !1, i, s;
        t.addEventListener("mousedown", n => {
            e = !0,
                i = n.pageX - t.offsetLeft,
                s = t.scrollLeft
        }),
            t.addEventListener("mouseleave", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("mouseup", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("mousemove", n => {
                if (!e)
                    return;
                n.preventDefault();
                const r = (n.pageX - t.offsetLeft - i) * 1;
                t.scrollLeft = s - r,
                    t.classList.add("active")
            }),
            t.addEventListener("touchstart", n => {
                e = !0,
                    i = n.touches[0].pageX - t.offsetLeft,
                    s = t.scrollLeft
            }),
            t.addEventListener("touchend", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("touchmove", n => {
                if (!e)
                    return;
                const r = (n.touches[0].pageX - t.offsetLeft - i) * 1;
                t.scrollLeft = s - r,
                    t.classList.add("active")
            })
    })
});
/*-------------------Chart status------------------*/

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 75],
            backgroundColor: ['#E9EEF6', '#0B57D0'],
            hoverBorderColor: 'transparent'
        }]
    },
    options: {
        responsive: true,
        cutout: '75%',

        plugins: {
            tooltip: {
                enabled: false,
            }
        }
    }
});

/*--------------------Chart shoes----------------------*/

const abc = document.getElementById('chart-shoes').getContext('2d');

new Chart(abc, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 75],
            backgroundColor: ['#E9EEF6', '#0B57D0'],
            hoverBorderColor: 'transparent'
        }]
    },
    options: {
        responsive: true,
        cutout: '75%',

        plugins: {
            tooltip: {
                enabled: false,
            }
        }
    }
});

/*-----------------------Chart month-------------------------*/
const asd = document.getElementById('waveChart').getContext('2d');

const labels = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

const dataPoints = [50, 50, 70, 40, 90, 15, 50, 30, 60, 25];

const maxValue = Math.max(...dataPoints);
const minValue = Math.min(...dataPoints);
const maxIndex = dataPoints.indexOf(maxValue);
const minIndex = dataPoints.indexOf(minValue);

const gradient = asd.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#AEC8EF');
gradient.addColorStop(0.5, '#ffffff');

new Chart(asd, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "",
            data: dataPoints,
            borderColor: "#0B6FCC",
            borderWidth: 2,
            backgroundColor: gradient,
            fill: true,
            pointRadius: 0,
            pointBackgroundColor: "#0B6FCC",
            tension: 0.5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                    borderColor: 'transparent'
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                beginAtZero: false,
                grid: {
                    display: false,
                    drawBorder: false,
                    borderColor: 'transparent'
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: { size: 1420, weight: 'bold' },
                bodyFont: { size: 12 }
            }
        }
    }
});

document.getElementById('maxLabel').style.left = `${(maxIndex / labels.length) * 100}%`;
document.getElementById('maxLabel').textContent = maxValue;

document.getElementById('minLabel').style.left = `${(minIndex / labels.length) * 100}%`;
document.getElementById('minLabel').textContent = minValue;

/*----------------Dark & Light-----------------*/

document.addEventListener("DOMContentLoaded", function () {
    const switchInput = document.querySelector(".switch .input"); // انتخاب input
    switchInput.addEventListener("change", function () {
        document.documentElement.classList.toggle("dark");
    });
});

