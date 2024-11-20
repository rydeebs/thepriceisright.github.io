import streamlit as st
import json
from typing import Dict, Any

# Data structures (you can move these to separate files if needed)
regions = {
    'us-domestic': {
        'name': 'US Domestic (Outsourced)',
        'currencies': ['USD'],
        'amazenEnabled': True,
        'packagingEnabled': True
    },
    # ... copy all regions from regions.js
}

volume_thresholds = {
    'us-domestic': [
        {'min': 40000, 'max': float('inf'), 'name': 'MIN-1'},
        {'min': 25001, 'max': 40000, 'name': 'MidMarket-1'},
        # ... copy all thresholds from volumeThresholds.js
    ],
    # ... copy other regions
}

def calculate_plan(volume: int, region: str, is_amazon: str, packing_type: str, currency: str) -> Dict[str, Any]:
    """Calculate the qualified and recommended plans based on input parameters."""
    try:
        region_thresholds = volume_thresholds[region]
        if not region_thresholds:
            return None

        # Find qualified tier
        qualified_tier = None
        for tier in region_thresholds:
            if tier['min'] <= volume <= tier['max']:
                qualified_tier = tier
                break
        
        if not qualified_tier:
            qualified_tier = region_thresholds[-1]

        # Find recommended tier (3 tiers up from qualified)
        qualified_index = region_thresholds.index(qualified_tier)
        recommended_index = max(0, qualified_index - 3)  # Move up 3 tiers if possible
        recommended_tier = region_thresholds[recommended_index]

        return {
            'qualified': {
                'name': qualified_tier['name'],
                'volume_range': f"{qualified_tier['min']:,} - {'∞' if qualified_tier['max'] == float('inf') else qualified_tier['max']:,}",
                'margin': '0.00%',
                'url': '#'
            },
            'recommended': {
                'name': recommended_tier['name'],
                'volume_range': f"{recommended_tier['min']:,} - {'∞' if recommended_tier['max'] == float('inf') else recommended_tier['max']:,}",
                'margin': '0.00%',
                'url': '#'
            }
        }
    except Exception as e:
        st.error(f"Error calculating plan: {str(e)}")
        return None

def main():
    st.set_page_config(page_title="Global Fulfillment Calculator", layout="wide")
    
    st.title("Global Fulfillment Calculator")

    # Create columns for form layout
    col1, col2 = st.columns(2)

    with col1:
        # Region selection
        region = st.selectbox(
            "Region:",
            options=[""] + list(regions.keys()),
            format_func=lambda x: regions[x]['name'] if x else "Select Region"
        )

        if region:
            # Currency selection
            currency = st.selectbox(
                "Currency:",
                options=regions[region]['currencies']
            )

            # Volume input
            shipments = st.number_input(
                "Monthly Shipment Volume:",
                min_value=0,
                value=None,
                placeholder="Enter shipments per month"
            )

            # Amazon integration
            if regions[region]['amazenEnabled']:
                is_amazon = st.selectbox(
                    "Include Amazon?",
                    options=['no', 'yes'],
                    format_func=lambda x: "Yes" if x == 'yes' else "No"
                )
            else:
                is_amazon = 'no'

            # Packing type
            if regions[region]['packagingEnabled']:
                packing_type = st.selectbox(
                    "Packing Type:",
                    options=['inclusive', 'exclusive'],
                    format_func=lambda x: x.capitalize()
                )
            else:
                packing_type = 'inclusive'

    # Calculate and display results
    if region and shipments:
        plan_info = calculate_plan(shipments, region, is_amazon, packing_type, currency)
        
        if plan_info:
            with col2:
                st.subheader("Plan Details")
                
                # Qualified Plan
                st.markdown("### Qualified Plan")
                st.write(f"Name: {plan_info['qualified']['name']}")
                st.write(f"Volume: {plan_info['qualified']['volume_range']}")
                st.write(f"Margin: {plan_info['qualified']['margin']}")
                
                # Recommended Plan
                st.markdown("### Recommended Plan")
                st.write(f"Name: {plan_info['recommended']['name']}")
                st.write(f"Volume: {plan_info['recommended']['volume_range']}")
                st.write(f"Margin: {plan_info['recommended']['margin']}")

                # Additional Notes
                st.markdown("### Additional Notes:")
                notes = [
                    "All prices require approval for modifications",
                    "90-day grace period applies to fulfillment minimums",
                    "Implementation fees may apply",
                    "Warehousing discounts available for volume commitments",
                    "Hourly charges apply if actual inbound doesn't match declared inbound"
                ]
                
                if is_amazon == 'yes':
                    notes.append("Additional handling surcharges do not apply with Amazon in carrier mix")
                
                for note in notes:
                    st.markdown(f"- {note}")

if __name__ == "__main__":
    main()
