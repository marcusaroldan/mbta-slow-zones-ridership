# Dataset types:
    1. Speed Restrictions by Day
        - Attributes
            * Calendar Date - Keep
            * ID - Keep
            * Track direction - keep
            * Line - keep
            * Branch - keep
            * Track Name - keep
            * Location Description - get rid
            * **GTFS Stop ID**
            * Location type - keep
            * Direction sort - get rid
            * Restriction Status - keep
            * Date Restriction Reported - compress
            * Date Restriction Cleared - compress into (date reported, date cleared)
            * Restriction Speed (MPH) - keep
            * Restriction Reason -keep
            * Restriction Distance (Feet) - keep
            * Restriction Distance (Miles) - get rid
            * Line Restricted Track Percent - keep
            * Line total track (miles) - get rid
            * System-wide Restricted Track Percent - keep
            * System-wide Total Track (miles) - get rid
            * SR Restriction Distance Span  - keep
            * Restriction Path - keep
            * Restrictions Dats active on calendar - keep
            * Restriction days to clear - keep
            * Daily Restriction count start - keep
            * Month Restriction Count Start - keep
            * Restriction count new - keep
            * restriction count cleared - keep
            * Month restriction count end - keep
            * Daily restriction count end - keep
    2. Gated Station Entries (GSE)
        - Attributes:
            * Service date
            * Time period - compress into hours instead of every 30 mins
                - Make daily total and AM/PM rush hour total
            * **Stop id**
                - Get rid of silver line stations (not present in speed restrictions dataset)
            * Station name
            * route or line
            * gated entries
        - Plan:
            * Keep all attributes, but compress rows into one per day (new attributes of daily, am/pm rush hour total)