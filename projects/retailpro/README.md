# RetailPro Excel Project

## Deliverables

- `RetailPro_Project_Tracker.xlsx` — six source tables, prepared Sales_Model, 11 analytical summaries, Calendar, executive dashboard with six charts, QA log, relationship map, dictionary, and insights.
- `RetailPro_Dashboard.png` — dashboard capture.
- `Data_Dictionary.md` — field definitions, types, grains, row and column counts, keys, and relationships.
- `Business_Insights.md` — eight findings, five recommendations, and metric methodology.

The six original CSV files remain unchanged in the project folder.

## Project status

- Data discovery, row/column counts, types, grains, keys, foreign-key checks, cleaning decisions, and relationships are documented.
- SalesChannel casing and missing PaymentMethod values are standardized in Sales_Model. Quantity exceptions remain visible and flagged.
- KPI calculations, monthly/product/store/region/customer/channel/payment/returns/target analyses, dashboard, and business insights are prepared.
- Power Query connections, native Data Model relationships, native PivotTables, dashboard slicers, and Timeline are not embedded. The workbook provides Excel tables, pre-aggregated analysis schedules, and a relationship map instead.
- Dashboard totals were checked against the workbook's Sales_Model aggregates. Slicer and Timeline behavior cannot be tested because those native controls are not present.
- The `portfolio` website's Retail Sales Dashboard card is the publication target; project files are stored under `projects/retailpro/` in that repository.

## Definitions and assumptions

- Grain: one row per unique OrderID in Sales_Raw; one ReturnID per Returns row; one StoreID and TargetMonth per target row.
- Gross Sales = Quantity × UnitPrice; Discount Amount = Gross Sales × DiscountPct; Net Sales = Gross Sales − Discount Amount.
- COGS = Quantity × transaction UnitCost; Gross Profit = Net Sales − COGS; Profit Margin = Gross Profit ÷ Net Sales.
- Only Quantity > 0 rows contribute to sales, orders, units, profit, and return-rate denominator. All source rows remain present.
- Blank payment methods become Unknown in Sales_Model. The raw table is untouched. SalesChannel is canonicalized as In-Store or Online.
- Return rate uses returned units linked to positive-quantity sales. One unit on a return linked to a zero-quantity sale is excluded.
- Refund value is estimated from ReturnQuantity × discounted transaction unit price because the source Returns table has no refund amount. Only Refunded records lower Net Sales After Returns; Exchanged and Pending do not.
- Total target attainment compares total eligible net sales to the sum of all supplied store-month targets (240 records). The workbook also provides detailed store-month comparisons.
