# Total Vizualizations: 2 Static, 2 Interactive, 1 Other

## Static:
### Static Visualization 1: Effect of Sinlge-segment Speed Restriction
    Platform: 
    Restriction ID:
    Timeframe:
    Control:
    COVID-19:
### Static Visualization 2: Effect of Multi-segment Speed Restriction
    Platform:
    Restriction ID:
    Timeframe:
    Control:
    COVID-19:
### Static Visualization 3: Stacked Line Chart for Evolution of Restrictions across 2023
    Platform: D3
    Objective: Show how speed restrictions increased and decreased throughout 2023 (with proportions)
    Data Sources: Aggregated Speed Restriction Data
    Vizualization Type: Stacked Line Chart / Area plot across 2023
        Groups: Active Restrictions, Cleared Restrictions

## Interactive:
### Interactive Visualization 1: Intro to GSE Data
    Platform: Altair
    Objective: Show ridership across 10 years
    Data Sources: Gated Station Entries (2014 - 2023)
    Visualization Type: Line Plot across 2014, 2023 (aggregated by quarter) 
    Interactivity: 
        Filters: 
            by Station (nested dropdowns, all stations --> lines --> individual stations): additive among selections (will add together all lines, stations that are selected)
            by Total, AM Rush, PM Rush (checkbox)
        Tooltip:
            - Actual Value (# Entries)
            - Percent Change (from last year, quarter, etc)
### Interactive Visualization 2: Intro to Speed Restr Data
    Platform: TBD - something good for GIS Data
    Objective: Show location of restrictions
    Data Sources: Speed Restrictions Data 2023
    Visualization Type: MBTA System Map Geospatial
    Interactivity:
        Filters:
            by Restriction Speed (Slider)
            by Restriction Length (Slider)
            by Restriction Pct (Slider)
            by Active vs Cleared (Checkbox)
            by Line / Branch (Nested Dropdown)
        Tooltip:
            - Start / End Date
            - Reason
            - Direction
            - Speed, Length, Pcts



