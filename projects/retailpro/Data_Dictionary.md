# RetailPro Data Dictionary

The six source tables contain 40 columns total and the workbook preserves their original rows. The sales fact is one record per unique `OrderID`; each sales record describes one transaction line. All SAR fields are in Saudi riyals.

| Table | Rows × columns | Grain | Primary key |
|---|---:|---|---|
| Sales_Raw | 15,000 × 11 | One transaction/order line | OrderID |
| Customers | 1,200 × 8 | One customer | CustomerID |
| Products | 25 × 6 | One product | ProductID |
| Stores | 10 × 6 | One store | StoreID |
| Returns | 675 × 6 | One return record | ReturnID |
| Monthly_Targets | 240 × 3 | One store-month | StoreID + TargetMonth |

## Source fields

### Sales_Raw

| Column | Type | Key / role | Meaning |
|---|---|---|---|
| OrderID | Text | PK; FK in Returns | Unique transaction identifier |
| OrderDate | Date | FK to Calendar | Date of sale |
| CustomerID | Text | FK to Customers | Customer who purchased |
| ProductID | Text | FK to Products | Product sold |
| StoreID | Text | FK to Stores | Selling store |
| Quantity | Whole number | Measure | Transaction units; 6 zero and 6 negative values are flagged |
| UnitPrice_SAR | Decimal | Measure | Unit selling price before discount |
| DiscountPct | Decimal / percentage | Measure | Discount rate applied to the transaction |
| UnitCost_SAR | Decimal | Measure | Transaction unit cost |
| PaymentMethod | Text | Attribute | Payment type; 35 source values are blank |
| SalesChannel | Text | Attribute | Sales channel; case variants are standardized in Sales_Model |

### Customers

| Column | Type | Key / role | Meaning |
|---|---|---|---|
| CustomerID | Text | PK; FK in Sales_Raw | Unique customer identifier |
| CustomerName | Text | Attribute | Customer display name |
| Gender | Text | Attribute | Recorded gender |
| Age | Whole number | Attribute | Customer age in years |
| City | Text | Attribute | Customer city |
| CustomerSegment | Text | Attribute | Consumer, Corporate, or Small Business grouping |
| JoinDate | Date | Attribute | Customer join date |
| LoyaltyMember | Text (Yes/No) | Attribute | Loyalty membership indicator |

### Products

| Column | Type | Key / role | Meaning |
|---|---|---|---|
| ProductID | Text | PK; FK in Sales_Raw | Unique product identifier |
| ProductName | Text | Attribute | Product name |
| Category | Text | Attribute | Product category |
| ListPrice_SAR | Decimal | Attribute | Published list price |
| UnitCost_SAR | Decimal | Attribute | Reference product cost |
| SourcingType | Text | Attribute | Sourcing classification |

### Stores

| Column | Type | Key / role | Meaning |
|---|---|---|---|
| StoreID | Text | PK; FK in Sales_Raw and Monthly_Targets | Unique store identifier |
| StoreName | Text | Attribute | Store name |
| City | Text | Attribute | Store city |
| Region | Text | Attribute | Store region |
| StoreType | Text | Attribute | Store format |
| OpeningDate | Date | Attribute | Store opening date |

### Returns

| Column | Type | Key / role | Meaning |
|---|---|---|---|
| ReturnID | Text | PK | Unique return record identifier |
| OrderID | Text | FK to Sales_Raw | Original sales transaction |
| ReturnDate | Date | FK to Calendar | Date return was recorded |
| ReturnQuantity | Whole number | Measure | Units listed on return record |
| ReturnReason | Text | Attribute | Recorded return reason |
| RefundStatus | Text | Attribute | Refunded, Exchanged, or Pending |

### Monthly_Targets

| Column | Type | Key / role | Meaning |
|---|---|---|---|
| StoreID | Text | Composite PK; FK to Stores | Target store |
| TargetMonth | Date | Composite PK; FK to Calendar | First day of target month |
| SalesTarget_SAR | Decimal | Measure | Store sales target for that month |

## Sales_Model calculated fields

| Column | Type | Definition |
|---|---|---|
| Year | Whole number | Calendar year from OrderDate |
| CustomerSegment, Category, Region | Text | Lookup attributes from Customers, Products, and Stores |
| GrossSales_SAR | Decimal SAR | Quantity × UnitPrice for Quantity > 0; otherwise 0 |
| DiscountAmount_SAR | Decimal SAR | Gross Sales × DiscountPct |
| NetSales_SAR | Decimal SAR | Gross Sales − Discount Amount |
| COGS_SAR | Decimal SAR | Quantity × transaction UnitCost for eligible records |
| GrossProfit_SAR | Decimal SAR | Net Sales − COGS |
| ProfitMarginPct | Percentage | Gross Profit ÷ Net Sales |
| UnitsSold | Whole number | Quantity when positive, else 0 |
| EligibleOrders | Whole number | 1 when Quantity > 0, else 0 |
| ReturnedUnits | Whole number | Returns joined by OrderID, only when the sale quantity is positive |
| RefundAmount_SAR | Decimal SAR | Refunded units × discounted transaction unit price; Exchanged and Pending excluded |
| NetSalesAfterReturns_SAR | Decimal SAR | Net Sales − Refund Amount |
| QualityFlag | Text | Valid or Review: quantity <= 0 |

## Relationships

Customers, Products, and Stores each relate one-to-many to Sales_Model. Sales_Model relates one-to-many to Returns. Stores relate one-to-many to Monthly_Targets. Calendar relates one-to-many to Sales_Model by OrderDate, Returns by ReturnDate, and Monthly_Targets by TargetMonth. The Excel workbook includes this relationship map; native Data Model relationships were not embedded.
