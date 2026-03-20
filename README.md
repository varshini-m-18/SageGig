# SafeGig – AI-Powered Income Protection for Gig Workers

## Problem Statement

Gig workers (Zomato, Swiggy, Amazon delivery partners) lose income due to external disruptions like heavy rain, heat, pollution, or sudden curfews. Currently, they have no financial protection against these uncontrollable events.

---

## Solution

SafeGig is an AI-powered parametric insurance platform that automatically protects gig workers from income loss.  

It detects real-world disruptions using APIs and instantly triggers claims and payouts without manual intervention.

---

## Target Persona

- Food Delivery Partners (Zomato, Swiggy)
- E-commerce Delivery Agents (Amazon, Flipkart)
- Grocery Delivery Workers (Zepto, Blinkit)

---

## Workflow of the Application

1. User registers and enters work details  
2. System calculates weekly premium using AI  
3. User activates insurance policy  
4. System continuously monitors external conditions (weather, pollution)  
5. If disruption occurs (e.g., heavy rain):  
   - Claim is automatically triggered  
6. Fraud detection checks validity  
7. If valid → Instant payout is processed  

---

## Weekly Premium Model

- Premium is calculated on a **weekly basis**
- Example:
  - Low-risk area → ₹29/week  
  - Medium-risk area → ₹49/week  
  - High-risk area → ₹79/week  
- Pricing is dynamic based on location and predicted risk  

---

## Parametric Triggers

Payout is triggered automatically when:

- Heavy Rain   
- Extreme Heat   
- High Pollution   
- Flood conditions   

(Note: Only income loss is covered)

---

## AI/ML Integration

- **Risk Prediction:**  
  Calculates premium based on location and historical data  

- **Fraud Detection:**  
  - Verifies weather data with user location  
  - Prevents fake claims  
  - Detects anomalies  

---

## Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Python (Flask)  
- Database: SQLite  
- APIs: OpenWeatherMap (Weather Data)  
- Payment: Mock / Razorpay (Test Mode)  

---

## Key Features

- AI-based dynamic pricing  
- Automated claim triggering  
- Real-time disruption detection  
- Fraud prevention system  
- Instant payout simulation  
- Simple and user-friendly interface  

---

## Development Plan

### Phase 1:
- Idea, UI design, architecture

### Phase 2:
- Backend + API integration  
- Policy management system  
- Claim system  

### Phase 3:
- Fraud detection improvements  
- Payment integration  
- Analytics dashboard  

---

## 🎥 Demo Video

CLick here to watch our 2 - minute demo :

https://drive.google.com/file/d/1Ezc1H_2kyOEDbOy7Av-84QU08mvt0WcI/view?usp=sharing

---

## Conclusion

SafeGig provides a simple, automated, and intelligent way to protect gig workers’ income, ensuring financial stability during unexpected disruptions.
