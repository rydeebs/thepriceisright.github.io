```jsx
import React from 'react';

export default function FulfillmentCalculator() {
  const [region, setRegion] = React.useState('');
  const [shipments, setShipments] = React.useState('');
  const [isAmazon, setIsAmazon] = React.useState('no');
  const [packingType, setPackingType] = React.useState('inclusive');
  const [currency, setCurrency] = React.useState('USD');
  const [copied, setCopied] = React.useState(false);

  const regions = {
    'us-domestic': {
      name: 'US Domestic (Outsourced)',
      currencies: ['USD'],
      amazenEnabled: true,
      packagingEnabled: true
    },
    'us-international': {
      name: 'US International (Outsourced)',
      currencies: ['USD'],
      amazenEnabled: true,
      packagingEnabled: true
    }
  };

  const volumeThresholds = {
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
    ]
  };

  function calculatePlan(volume, region, isAmazon, packingType, currency) {
    try {
      const regionThresholds = volumeThresholds[region];
      if (!regionThresholds) return null;

      const qualifiedTier = regionThresholds.find(t => 
        volume >= t.min && volume <= t.max
      ) || regionThresholds[regionThresholds.length - 1];

      const qualifiedIndex = regionThresholds.findIndex(t => t === qualifiedTier);
      const recommendedIndex = Math.min(regionThresholds.length - 1, qualifiedIndex + 3);
      const recommendedTier = regionThresholds[recommendedIndex];

      return {
        qualified: {
          name: qualifiedTier.name,
          volumeRange: `${qualifiedTier.min.toLocaleString()} - ${qualifiedTier.max === Infinity ? '+' : qualifiedTier.max.toLocaleString()}`,
          margin: '0.00%',
          url: '#'
        },
        recommended: {
          name: recommendedTier.name,
          volumeRange: `${recommendedTier.min.toLocaleString()} - ${recommendedTier.max === Infinity ? '+' : recommendedTier.max.toLocaleString()}`,
          margin: '0.00%',
          url: '#'
        }
      };
    } catch (error) {
      return null;
    }
  }

  function handleCopyToClipboard(planInfo) {
    const details = `
Plan Details:
Region: ${region}
Currency: ${currency}
Volume: ${parseInt(shipments).toLocaleString()} shipments/month
Amazon Integration: ${isAmazon === 'yes' ? 'Yes' : 'No'}
Packing Type: ${packingType === 'inclusive' ? 'Inclusive' : 'Exclusive'}

Qualified Plan:
Name: ${planInfo.qualified.name}
Volume Range: ${planInfo.qualified.volumeRange}
Margin: ${planInfo.qualified.margin}
URL: ${planInfo.qualified.url}

Recommended Plan:
Name: ${planInfo.recommended.name}
Volume Range: ${planInfo.recommended.volumeRange}
Margin: ${planInfo.recommended.margin}
URL: ${planInfo.recommended.url}

Additional Notes:
- All prices require approval for modifications
- 90-day grace period applies to fulfillment minimums
- Implementation fees may apply
- Warehousing discounts available for volume commitments
${isAmazon === 'yes' ? '- Additional handling surcharges do not apply with Amazon in carrier mix' : ''}
`.trim();

    navigator.clipboard.writeText(details)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  }

  const planInfo = shipments ? calculatePlan(parseInt(shipments), region, isAmazon, packingType, currency) : null;

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Global Fulfillment Calculator</h1>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Region:</label>
          <select 
            value={region} 
            onChange={(e) => {
              setRegion(e.target.value);
              if (regions[e.target.value]?.currencies[0]) {
                setCurrency(regions[e.target.value].currencies[0]);
              }
            }}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Region</option>
            {Object.entries(regions).map(([key, value]) => (
              <option key={key} value={key}>{value.name}</option>
            ))}
          </select>
        </div>

        {region && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Currency:</label>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-2 border rounded"
              >
                {regions[region].currencies.map(curr => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Monthly Shipment Volume:
              </label>
              <input
                type="number"
                value={shipments}
                onChange={(e) => setShipments(e.target.value)}
                className="w-full p-2 border rounded"
                min="0"
                placeholder="Enter shipments per month"
              />
            </div>

            {regions[region].amazenEnabled && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Include Amazon?
                </label>
                <select 
                  value={isAmazon} 
                  onChange={(e) => setIsAmazon(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            )}

            {regions[region].packagingEnabled && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Packing Type:
                </label>
                <select 
                  value={packingType} 
                  onChange={(e) => setPackingType(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="inclusive">Inclusive</option>
                  <option value="exclusive">Exclusive</option>
                </select>
              </div>
            )}
          </>
        )}

        {planInfo && (
          <div className="mt-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">Selected Options</h3>
                <button
                  onClick={() => handleCopyToClipboard(planInfo)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  <span className="material-icons-outlined text-sm">
                    {copied ? 'check_circle' : 'content_copy'}
                  </span>
                  {copied ? 'Copied!' : 'Copy Details'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Qualified Plan</h4>
                  <div className="space-y-1 text-sm">
                    <p>Name: {planInfo.qualified.name}</p>
                    <p>Volume: {planInfo.qualified.volumeRange}</p>
                    <p>Margin: {planInfo.qualified.margin}</p>
                    <a 
                      href={planInfo.qualified.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      View Plan 
                      <span className="material-icons-outlined text-sm">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Recommended Plan</h4>
                  <div className="space-y-1 text-sm">
                    <p>Name: {planInfo.recommended.name}</p>
                    <p>Volume: {planInfo.recommended.volumeRange}</p>
                    <p>Margin: {planInfo.recommended.margin}</p>
                    <a 
                      href={planInfo.recommended.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      View Plan 
                      <span className="material-icons-outlined text-sm">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold mb-2">Additional Notes:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>All prices require approval for modifications</li>
                <li>90-day grace period applies to fulfillment minimums</li>
                <li>Implementation fees may apply</li>
                <li>Warehousing discounts available for volume commitments</li>
                <li>Hourly charges apply if actual inbound doesn't match declared inbound</li>
                {isAmazon === 'yes' && (
                  <li className="text-blue-600">
                    Additional handling surcharges do not apply with Amazon in carrier mix
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```
