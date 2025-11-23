# Checklist

- [x] Ask top 3 clarifying questions
- [x] Review current project structure and checkout implementation
- [x] Create new database tables (orders, order_items)
- [x] Create checkout page UI
- [x] Implement checkout page backend logic
- [x] Update existing checkout flow to redirect to new page
- [x] Add 5% tax calculation
- [x] Implement order creation with order items
- [x] Test the complete checkout flow

## User's Original Prompt
When a user checks out, instead of putting out a popup, there should be a checkout page that confirms the elements in the cart and the total price. There should also be a default 5% tax applied to the total amount.

Once the checkout finishes, we should retain the current activities where the card is added to the user's user_card table as well as removed from inventory. There should also be an order record in a new order table which records the order details like the total cost, user, and order_id. The costs of the individual items should live in an order_item table that relates back to the order table and has individual item information.