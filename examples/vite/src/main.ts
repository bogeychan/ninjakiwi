import { BTD6 } from '../../..';

const ct = await BTD6.ct();

document.querySelector<HTMLElement>('#app')!.textContent = `${JSON.stringify(
  ct,
  null,
  '\t'
)}`;

