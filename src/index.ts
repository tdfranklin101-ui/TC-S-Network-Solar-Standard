import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

const SOLAR_CONSTANT = 4913.0;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'solar-standard' });
});

app.post('/api/convert/kwh-to-solar', (req, res) => {
  const { kwh } = req.body;
  if (!kwh || isNaN(kwh)) {
    return res.status(400).json({ error: 'Invalid kWh value' });
  }
  const solar = parseFloat(kwh) / SOLAR_CONSTANT;
  res.json({ kwh: parseFloat(kwh), solar, constant: SOLAR_CONSTANT });
});

app.post('/api/convert/solar-to-kwh', (req, res) => {
  const { solar } = req.body;
  if (!solar || isNaN(solar)) {
    return res.status(400).json({ error: 'Invalid SOLAR value' });
  }
  const kwh = parseFloat(solar) * SOLAR_CONSTANT;
  res.json({ solar: parseFloat(solar), kwh, constant: SOLAR_CONSTANT });
});

app.listen(PORT, () => {
  console.log(`Solar Standard API running on port ${PORT}`);
});
