import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 200,
  duration: '120s',
  rps: 200
};

export default function() {
	const randomNum = Math.floor(Math.random() * (10000000 - 9000000 + 1) + 9000000);
    http.get(`http://127.0.0.1:3000/${randomNum}/sizes`);
    sleep(1);
};