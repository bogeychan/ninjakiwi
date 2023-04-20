import { Elysia } from 'elysia';
import { BTD6 } from '../..';

new Elysia().get('/', () => BTD6.ct()).listen(8080);

console.log(`Listening on http://localhost:8080`);
