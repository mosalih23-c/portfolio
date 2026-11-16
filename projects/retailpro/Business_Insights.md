# RetailPro Business Insights

## Executive summary

The eligible dataset contains 14,988 positive-quantity transactions and 28,730 units sold. Over 2024–2025, it produces approximately SAR 16.57m gross sales, SAR 1.36m discount, SAR 15.20m net sales, SAR 9.71m COGS, SAR 5.50m gross profit, and a 36.2% blended gross margin. Average order value is about SAR 1,014.

## Findings

1. **Sales are concentrated in Electronics.** Electronics contributes SAR 9.04m, or about 59.5% of eligible net sales. Its margin is about 35.5%, below the overall 36.2%.
2. **Laptop leads the product list.** Laptops contribute approximately SAR 4.00m net sales and SAR 1.99m gross profit. This makes the category and laptop availability important drivers of results.
3. **The Western region leads in scale.** Western stores contribute SAR 6.31m (about 41.5% of sales). Southern is smallest at SAR 1.51m. Regional mix and store execution should be checked before shifting investment.
4. **In-Store remains the main channel.** In-Store contributes SAR 10.89m (71.6%) compared with SAR 4.31m online. Online has a slightly higher margin (36.6% vs 36.0%) in this data.
5. **Consumers are the largest customer segment.** Consumer sales are SAR 10.22m (67.2%); Corporate contributes SAR 3.07m and Small Business SAR 1.91m.
6. **“Not as Described” is the most frequent valid return reason by units.** It accounts for 171 eligible return units. Overall return rate is about 2.7% using 775 valid returned units divided by 28,730 eligible sold units.
7. **Target attainment is low on the supplied aggregate.** Total eligible net sales are 23.2% of the summed monthly targets (SAR 65.66m). The detailed workbook schedule shows attainment by store and month; confirm that the target and sales periods and definitions are intended to match.
8. **April 2024 is the strongest sales month in this period.** Net sales are about SAR 735.6k; March 2024 is lowest at SAR 525.8k.

## Recommendations

1. Review electronics and laptop availability, contribution margin, and discount depth together before changing promotion or buying plans.
2. Compare stores within the Western region to identify practices worth testing elsewhere; investigate Southern product mix, local demand, and execution before reallocating budget.
3. Review return notes and “Not as Described” products, then improve product listings and quality checks where a specific cause is confirmed.
4. Reconcile the monthly target definition and coverage with the business owner, given 23.2% total-period attainment.
5. Resolve the 12 non-positive quantity records and 35 blank payment methods in the source process. Keep the records flagged and payment as Unknown until confirmed.

## Method and limits

Gross sales = Quantity × UnitPrice. Discount amount = Gross Sales × DiscountPct. Net Sales = Gross Sales − Discount Amount. COGS = Quantity × transaction UnitCost. Gross Profit = Net Sales − COGS. Profit Margin = Gross Profit ÷ Net Sales. The 12 rows with Quantity <= 0 are preserved and excluded from these KPIs. The source contains 776 return units; one unit is linked to a zero-quantity sale and is excluded. Refund value is estimated using returned quantity and the sale’s discounted unit price because no refund amount is present. Only RefundStatus = Refunded reduces net sales after returns. Targets are summed across 240 store-month records for total attainment.
