```javascript
export const volumeThresholds = {
  'us-domestic': [
    { min: 40000, max: Infinity, name: 'MIN-1' },
    { min: 25001, max: 40000, name: 'MidMarket-1' },
    { min: 15001, max: 25000, name: 'MidMarket-2' },
    { min: 10001, max: 15000, name: 'MidMarket-3' },
    { min: 5001, max: 10000, name: 'MidMarket-4' },
    { min: 4501, max: 5000, name: 'SMB-1' },
    { min: 2001, max: 4500, name: 'SMB-2' },
    { min: 1001, max: 2000, name: 'SMB-3' },
    { min: 701, max: 1000, name: 'SMB-4' },
    { min: 501, max: 700, name: 'SMB-5' },
    { min: 301, max: 500, name: 'Growth-1' },
    { min: 101, max: 300, name: 'Growth-2' },
    { min: 0, max: 100, name: 'Growth-3' }
  ],
  'us-international': [
    { min: 40000, max: Infinity, name: 'MIN-1' },
    { min: 25001, max: 40000, name: 'MidMarket-1' },
    { min: 15001, max: 25000, name: 'MidMarket-2' },
    { min: 10001, max: 15000, name: 'MidMarket-3' },
    { min: 5001, max: 10000, name: 'MidMarket-4' },
    { min: 4501, max: 5000, name: 'SMB-1' },
    { min: 2001, max: 4500, name: 'SMB-2' },
    { min: 1001, max: 2000, name: 'SMB-3' },
    { min: 701, max: 1000, name: 'SMB-4' },
    { min: 501, max: 700, name: 'SMB-5' },
    { min: 301, max: 500, name: 'Growth-1' },
    { min: 101, max: 300, name: 'Growth-2' },
    { min: 0, max: 100, name: 'Growth-3' }
  ],
  'us-wms-domestic': [
    { min: 20000, max: Infinity, name: 'Minimum' },
    { min: 15000, max: 20000, name: 'MidMarket-1' },
    { min: 9000, max: 15000, name: 'MidMarket-2' },
    { min: 7000, max: 9000, name: 'MidMarket-3' },
    { min: 6000, max: 7000, name: 'SMB-1' },
    { min: 3000, max: 6000, name: 'SMB-2' },
    { min: 1000, max: 3000, name: 'SMB-3' },
    { min: 500, max: 1000, name: 'Growth-1' },
    { min: 200, max: 500, name: 'Growth-2' },
    { min: 0, max: 200, name: 'Growth-3' }
  ],
  'ca-domestic': [
    { min: 10000, max: Infinity, name: 'MIN-1' },
    { min: 7500, max: Infinity, name: 'MidMarket-1' },
    { min: 5001, max: 7000, name: 'MidMarket-2' },
    { min: 3001, max: 5000, name: 'MidMarket-3' },
    { min: 2001, max: 3000, name: 'MidMarket-4' },
    { min: 1001, max: 2000, name: 'SMB-1' },
    { min: 751, max: 1000, name: 'SMB-2' },
    { min: 501, max: 750, name: 'SMB-3' },
    { min: 251, max: 500, name: 'SMB-4' },
    { min: 101, max: 250, name: 'SMB-5' },
    { min: 0, max: 100, name: 'Growth-1' }
  ],
  'ca-international': [
    { min: 10000, max: Infinity, name: 'MIN-1' },
    { min: 7500, max: Infinity, name: 'MidMarket-1' },
    { min: 5001, max: 7000, name: 'MidMarket-2' },
    { min: 3001, max: 5000, name: 'MidMarket-3' },
    { min: 2001, max: 3000, name: 'MidMarket-4' },
    { min: 1001, max: 2000, name: 'SMB-1' },
    { min: 751, max: 1000, name: 'SMB-2' },
    { min: 501, max: 750, name: 'SMB-3' },
    { min: 251, max: 500, name: 'SMB-4' },
    { min: 101, max: 250, name: 'SMB-5' },
    { min: 0, max: 100, name: 'Growth-1' }
  ],
  'gb-domestic': [
    { min: 15000, max: Infinity, name: 'MIN-1' },
    { min: 11001, max: 15000, name: 'MidMarket-1' },
    { min: 8001, max: 11000, name: 'MidMarket-2' },
    { min: 5001, max: 8000, name: 'MidMarket-3' },
    { min: 2501, max: 5000, name: 'SMB-1' },
    { min: 1201, max: 2500, name: 'SMB-2' },
    { min: 701, max: 1200, name: 'SMB-3' },
    { min: 401, max: 700, name: 'Growth-1' },
    { min: 201, max: 400, name: 'Growth-2' },
    { min: 0, max: 200, name: 'Growth-3' }
  ],
  'gb-international': [
    { min: 6000, max: Infinity, name: 'MIN-1' },
    { min: 4000, max: 4500, name: 'MidMarket-1' },
    { min: 4000, max: 4500, name: 'MidMarket-2' },
    { min: 2500, max: 4000, name: 'MidMarket-3' },
    { min: 1000, max: 2500, name: 'SMB-1' },
    { min: 1000, max: 2500, name: 'SMB-2' },
    { min: 400, max: 1000, name: 'SMB-3' },
    { min: 400, max: 1000, name: 'Growth-1' },
    { min: 0, max: 400, name: 'Growth-2' },
    { min: 0, max: 400, name: 'Growth-3' }
  ],
  'nl-domestic': [
    { min: 6000, max: Infinity, name: 'MIN-1' },
    { min: 4000, max: 4500, name: 'MidMarket-1' },
    { min: 4000, max: 4500, name: 'MidMarket-2' },
    { min: 2500, max: 4000, name: 'MidMarket-3' },
    { min: 1000, max: 2500, name: 'SMB-1' },
    { min: 1000, max: 2500, name: 'SMB-2' },
    { min: 400, max: 1000, name: 'SMB-3' },
    { min: 400, max: 1000, name: 'Growth-1' },
    { min: 0, max: 400, name: 'Growth-2' },
    { min: 0, max: 400, name: 'Growth-3' }
  ],
  'nl-international': [
    { min: 6000, max: Infinity, name: 'MIN-1' },
    { min: 4000, max: 4500, name: 'MidMarket-1' },
    { min: 4000, max: 4500, name: 'MidMarket-2' },
    { min: 2500, max: 4000, name: 'MidMarket-3' },
    { min: 1000, max: 2500, name: 'SMB-1' },
    { min: 1000, max: 2500, name: 'SMB-2' },
    { min: 400, max: 1000, name: 'SMB-3' },
    { min: 400, max: 1000, name: 'Growth-1' },
    { min: 0, max: 400, name: 'Growth-2' },
    { min: 0, max: 400, name: 'Growth-3' }
  ],
  'au-domestic': [
    { min: 6000, max: Infinity, name: 'MIN-1' },
    { min: 2500, max: 4500, name: 'MidMarket-1' },
    { min: 1500, max: 4500, name: 'MidMarket-2' },
    { min: 1000, max: 4000, name: 'MidMarket-3' },
    { min: 800, max: 2000, name: 'SMB-1' },
    { min: 400, max: 1000, name: 'SMB-2' },
    { min: 400, max: 1000, name: 'SMB-3' },
    { min: 0, max: 800, name: 'Growth-1' },
    { min: 0, max: 400, name: 'Growth-2' },
    { min: 0, max: 400, name: 'Growth-3' }
  ],
  'pl-domestic': [
    { min: 6000, max: Infinity, name: 'Minimum' },
    { min: 4000, max: 4500, name: 'MidMarket1' },
    { min: 4000, max: 4500, name: 'MidMarket2' }
  ],
  'pl-international': [
    { min: 6000, max: Infinity, name: 'Minimum' },
    { min: 4000, max: 4500, name: 'MidMarket1' },
    { min: 4000, max: 4500, name: 'MidMarket2' }
  ]
};