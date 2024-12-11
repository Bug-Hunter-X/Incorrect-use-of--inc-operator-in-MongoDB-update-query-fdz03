# MongoDB $inc Operator Bug
This repository demonstrates a common bug when using the `$inc` operator in MongoDB update queries. The bug arises from not handling cases where the field to increment does not exist or where the current value is zero.

## Bug Description
The code uses `$inc` to decrement a quantity field. However, it fails to consider that the field might not exist or that the value could be zero. This could lead to negative quantity values which can be problematic.

## Solution
The solution checks for the existence of the field and handles the case where the quantity is zero, ensuring no negative values are produced.

## How to reproduce
1. Create a MongoDB collection named 'myCollection'.
2. Insert a document with the quantity field equal to 0.
3. Run the buggy code.
4. Observe that the quantity field becomes -1 instead of remaining 0.
