# Jest Workshop Submission

## Student Details
- Name: Sakina Farukh Ahemad
- Roll Number: 2024-B-12032006
- GitHub Username: sakina1303

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name:
**What it protects against:**  This test checks that the function calculateFinalAmount throws an error "Invalid subtotal" when the subtotal is:
1. Negative number (-100)
2. Not a number but a string ("100")
3. NaN value

---

### 2. Test Name: No Coupon & No Discount
**What it protects against:**  Verifies that when no coupon is applied and subtotal is less than 1000, the amount remains unchanged.

---

### 3. Test Name: Normalized Coupon – save10
**What it protects against:**  
Checks that the coupon "save10" (case-insensitive/normalized) correctly applies a 10% discount.

---

### 4. Test Name: Normalized Coupon – flat50
**What it protects against:**  
Checks that the coupon "flat50" correctly applies a flat ₹50 discount.

---

### 5. Test Name: 5% Auto Discount (No Coupon, subtotal ≥ 1000)
**What it protects against:**  
    Ensures a 5% discount is automatically applied when subtotal is 1000 or more without any coupon.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? 
    yes!
- GitHub Actions Run URL:
    https://github.com/sakina1303/jest-workshop/actions/workflows/testing.yml

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

