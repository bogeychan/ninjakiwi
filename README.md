# @bogeychan/ninjakiwi

**Unofficial** client for the [Open Data API from Ninja Kiwi](https://support.ninjakiwi.com/hc/en-us/articles/13438499873937-Open-Data-API).

Runs in all TypeScript environments that implement the [Fetch Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Installation

```bash
yarn add @bogeychan/ninjakiwi
```

## Usage

The usage is straightforward.

```ts
import { BTD6 } from '@bogeychan/ninjakiwi';

const ct = await BTD6.ct();
```

- Get to know the [documentation of the Open Data API from Ninja Kiwi](https://data.ninjakiwi.com).
- Checkout the [examples](./examples) folder on github for further use cases.

## Author

[bogeychan](https://github.com/bogeychan)

## License

[MIT](LICENSE)
