import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds');
let timerId = null;
startBtn.disabled = true;

const fp = flatpickr(input);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    endDate = selectedDates[0];
    console.log(selectedDates[0]);
      if (endDate <= new Date()) {
        console.log(Notiflix.Notify.failure('Please choose a date in the future'));
        startBtn.disabled = false;
      } else {
        startBtn.disabled = true;
        console.log(selectedDates[0]);
      }
        },
  }

flatpickr(input, options);

