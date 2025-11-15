# TC-S Network Solar Standard

Energy conversion and validation protocol for the Solar Standard.

## Features

- kWh to SOLAR conversion (constant: 4913.0)
- SOLAR to kWh conversion
- Energy validation and verification
- Protocol compliance checking

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

- `POST /api/convert/kwh-to-solar` - Convert kWh to SOLAR
- `POST /api/convert/solar-to-kwh` - Convert SOLAR to kWh

## License

MIT - TC-S Network Foundation
