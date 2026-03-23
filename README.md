# Endpoint 1: Get All Subscription Plans. 

#### Description: 

My section will require the assistance of the following APIs.
***(JSONs are described in the next section)***

  1. Customer Payment POST-API: I'll require an API that receives the customer payment information. 
  
  The payment information sent is:
  * Payment information:
      - Card number.
      - Expiry month.
      - Expire year.
      - CVC
      - Card Holder name. 

  * Transaction information:
      - Product Id.
      - Plan name.
      - Amount.
      - Currency (US/CAD)

  * Card information:
      - Eamil. 
      - Zip code.
 
 The payment information expected from the API:
 * Success Transaction.
      - Status.
      - Transaction Id.
      - Charge information:
        - Amount.
        - Currency.
        - Payment method.
        - Card brand.
      - URL Receipt.
      - Message.
  
  * Failed transaction.
      - Status.
      - Error type.
      - Errod code.
      - Message.
      - Decline code.

 2. Product Information API: This API is required to get the full product information. This API already stays in "Stripe" site  and the information gotten  will be displayed in the main screen under the “Product” section. 

 * Information to get from the Stripe API.
    - Product Id.
    - Product name.
    - Description.
    - Features.
    - Price.


#### HTTP Method and URL:  (e.g., POST /api/v1/auth/login)
- To retrive the products information directly from Stripe 
GET /api/v1/products (I got this based on Stripe’ documentation: http://localhost:3000/api/products - https://docs.stripe.com/api/products/list) 

#### Request JSON Format:  A sample of the data sent to the server.
- N/A (This is a GET request, so nothing is sent). 

#### Response JSON Format: A sample of the expected data returned by the server.
* This an example of the information sent as part of the payment process
```json
{
  "order_details": {
    "product_id": "prod_P123456789",
    "plan_name": "Premium Plan",
    "amount": 399,
    "currency": "usd"
  },
  "payment_method": {
    "card_number": "4242424242424242", 
    "expiry_month": 12,
    "expiry_year": 2028,
    "cvc": "123",
    "cardholder_name": "Alex Johnson"
  },
  "customer_info": {
    "email": "alex.j@example.com",
    "zip_code": "M5V 2L7"
  }
}
```

* This is an example of the payment response (successful)
```json
{
  "status": "success",
  "transaction_id": "ch_3O5ncXLrO7VaOxlC1u2u...",
  "charge_details": {
    "amount_captured": 399,
    "currency": "usd",
    "payment_method_type": "card",
    "card_brand": "visa"
  },
  "receipt_url": "https://pay.stripe.com/receipts/acct_123/ch_123/rcpt_123",
  "message": "Payment processed successfully. Your Premium features are now active."
}
```

* This is an example of the reponse in case an error.
```json
{
  "status": "error",
  "error_type": "card_error",
  "error_code": "insufficient_funds",
  "message": "Your card has insufficient funds to complete this purchase.",
  "decline_code": "insufficient_funds"
}
```

* This an example of the API to get the products information
```json
[
  {
    "id": "prod_ID",
    "name": "Name",
    "description": "Description",
    "features": [],
    "default_price": null
  },
  {
    "id": "prod_ID",
    "name": "Name",
    "description": "Description",
    "features": [],
    "default_price": null
  },
  {
    "id": "prod_ID",
    "name": "Name",
    "description": "Description",
    "features": [],
    "default_price": null
  }
]
```
#### Headers: Specify if an Authorization Bearer token or other headers are required.

- I need to verify this with professor in class

#### Possible Error Responses: Document expected status codes (400, 401, 403, 500).
 
 - Possible codes expected:
    -   400 (Bad request): If the API did not understand the query parameters.
    - 401 (Unauthorized): In case we need to specify access information in the headers.
    - 500 (Server error): Any problem in the server.

# Application Flow and Folder Structure

**Step-by-Step Flow: Provide a written sequence of the frontend behavior: User Action → API Call → Response Handling → UI Update.**

The process starts:
1. The main page which contains the product's information must be loaded completely.
2. Automatically a separated function must initiate a GET request to the API, let's say: http://localhost:123/api/products
3. Once the information is received, it must be converted in JSON
4. The information is then send back to the front end which will present it in the corresponding HTML and CSS (Taildwind) format.

**Project Organization: Propose a clean folder structure. For example, separate directories for JavaScript logic (/js), assets (/assets), and HTML files. Provide a brief explanation for the purpose of each file.**

Directory:
 - css: This directory will contain personilized style.
 - img: This directory will contain all images used in the project.
 - script: All Javascript must be placed in this directory.
 - others: In case of other unexpected files, this is the place to store them.
 (In the root must be only the index.html)

