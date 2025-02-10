### README.md

# Customers and Pets Dashboard

## Overview

This project is a **Customers and Pets Dashboard**, allowing users to search for customers, filter them by pet species, and view their details in a responsive UI. It is built using **Next.js**, **React**, and **TailwindCSS**, ensuring a modern, scalable, and accessible experience.

## Features

✅ **Search Functionality** – Users can search for customers using their **ID, name, email, or phone number**.  
✅ **Filter System** – Users can filter customers based on pet species using a **dynamic filter**.  
✅ **Responsive Design** – Fully optimized for **desktop, tablet, and mobile** screens.  
✅ **Loading & Error Handling** – Displays appropriate states when fetching customer data.  
✅ **Tailwind Design Tokens** – Centralized design values for colors, spacing, and typography.  
✅ **Modular Components** – Reusable UI components such as **Button, SpeciesIcon, and SearchInput**.  

---

## Installation & Setup

1️⃣ Clone the repository:
```sh
git clone https://github.com/your-repo/customers-dashboard.git
cd customers-dashboard
```

2️⃣ Install dependencies:
```sh
npm install
```

3️⃣ Run the development server:
```sh
npm run dev
```

4️⃣ Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

```
.
├── src
│   ├── app
│   │   ├── api
│   │   │   └── customers
│   │   │       ├── customers.json  # Mock customer & pets data
│   │   │       └── route.ts         # API handler for fetching customer data
│   │   ├── components
│   │   │   ├── Button.tsx           # Reusable button component
│   │   │   ├── CustomerList.tsx      # List of customers & pets
│   │   │   ├── CustomersPage.tsx     # Main dashboard page
│   │   │   ├── FilterWindow.tsx      # Pet filtering UI
│   │   │   ├── SearchInput.tsx       # Search bar component
│   │   │   ├── SpeciesButton.tsx     # Dynamic species filter buttons
│   │   │   ├── SpeciesIcon.tsx       # Pet species icons
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Page layout
│   │   ├── page.tsx                  # App entry point
│   │   ├── types.ts                   # TypeScript types
│   │   ├── utils
│   │   │   ├── normalizeSpecies.ts   # Utility function for normalizing species names
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── tsconfig.json                  # TypeScript config
│   ├── README.md                      # Documentation
```

---

## Key Enhancements

### 1️⃣ **Responsive UI with TailwindCSS**
- Optimized **spacing, typography, and layout** for **mobile (sm), tablet (md), and desktop (lg)**.
- Introduced **design tokens** (`colors, spacing, typography`) in `tailwind.config.ts`:
  ```ts
  theme: {
    extend: {
      colors: {
        primary: "#1369D9",
        background: "#F5F7FA",
        textPrimary: "#374151",
        textSecondary: "#838993",
      },
      fontSize: {
        md: "18px",
      },
      spacing: {
        18: "4.5rem",
      },
    }
  }
  ```
- Updated components to use these **tokens instead of hardcoded values**.

### 2️⃣ **Better State Management**
- **Filtering is applied only when "Apply Filters" is clicked.**

### 3️⃣ **Reusability Improvements**
- **Created `Button.tsx`** to avoid code duplication for Reset & Apply buttons.
- **Created `SpeciesButton.tsx`** for dynamic species filtering.

### 4️⃣ **Loading & Error Handling**
- **`loading` state** ensures a smooth experience while fetching customers.
- **`error` state** properly displays error messages when fetching fails.

---

## Next Steps
📌 **Potential Improvements:**
- ✅ Add a **dark mode toggle**.
- ✅ Implement **unit tests** for components.

---

## Contributors
🚀 **Developed by:** *Oleksandr "Xander" Rybalov*  
💬 **Feedback & Issues:** Open a GitHub Issue!  

---

## License
This project is licensed under the **MIT License**.