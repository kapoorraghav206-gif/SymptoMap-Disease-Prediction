# 🏥 SymptoMap - Card-Based Symptom Report Dashboard

## 📋 Overview

A modern, healthcare-grade dashboard interface for the SymptoMap symptom reporting system. This implementation features a card-based design system that matches government/hospital UI standards with risk-coded disease selection cards.

---

## 🎯 What Was Created

### Components Created:

1. **`DiseaseCard.jsx`** - Individual disease/symptom card component
2. **`SubmitCard.jsx`** - Card-style submit button component  
3. **`SymptomReport.jsx`** - Main dashboard page component

### Styling:

4. **`SymptomReport.css`** - Comprehensive CSS with dashboard styling

### Routing:

- Added new route: `/report-dashboard`
- Original `/report` route preserved

---

## 🚀 How to View

### Option 1: View in Browser (Recommended)

Since your dev server is already running (`npm run dev`), you can view the new dashboard at:

```
http://localhost:5173/report-dashboard
```

Just open this URL in your browser to see the new card-based interface!

### Option 2: Replace Existing Report Page

If you want to replace the current report page with this new design:

1. Open `src/pages/Report.jsx`
2. Replace the content with:

```jsx
import SymptomReport from '../components/SymptomReport'
import './Report.css'

function Report() {
  return (
    <div className="page report-page">
      <SymptomReport />
    </div>
  )
}

export default Report
```

3. Navigate to `http://localhost:5173/report`

---

## 🎨 Design Features Implemented

### ✅ Disease/Symptom Cards

Each card includes:

- ✅ White card container with rounded corners (20px)
- ✅ Soft box shadow
- ✅ **Left vertical colored accent bar** (4px, expands to 6px when selected)
- ✅ Circular icon container with risk-colored background
- ✅ Risk badge pill (HIGH/MEDIUM/LOW RISK)
- ✅ Disease name (bold, large)
- ✅ Case count display
- ✅ Trend indicator (Rising 📈 / Stable ➡️ / Falling 📉)

### 🎨 Risk Color Coding

| Risk Level | Accent Bar | Icon Background | Badge Color |
|-----------|-----------|----------------|-------------|
| **High**   | Red (#ef4444) | Light Red (#fee2e2) | Red (#fecaca) |
| **Medium** | Orange (#f97316) | Light Orange (#fed7aa) | Orange (#fdba74) |
| **Low**    | Green (#22c55e) | Light Green (#dcfce7) | Green (#bbf7d0) |

### 🖱️ Interactions

- ✅ Entire card is clickable
- ✅ Hover: Scale-up (1.02) + stronger shadow
- ✅ Selected: Accent bar glow + border highlight
- ✅ Active: Scale-down animation (0.99)
- ✅ Multiple selection support via React useState

### 📤 Submit Button Design

- ✅ Card-style container (NOT a flat button)
- ✅ White background with rounded corners
- ✅ Top blue accent line (gradient)
- ✅ Icon on left (blue gradient background)
- ✅ Arrow on right (slides right on hover)
- ✅ Hover: Scale + shadow animation
- ✅ Loading state with spinner

### 📐 Responsive Grid Layout

| Screen Size | Grid Columns | Card Behavior |
|------------|-------------|---------------|
| Desktop (>1200px) | 4 columns | Full layout |
| Tablet (768-1200px) | 2 columns | Adjusted spacing |
| Mobile (<768px) | 1 column | Stacked layout |

---

## 🧠 React Implementation

### State Management

```jsx
const [selectedDiseases, setSelectedDiseases] = useState([])
const [formData, setFormData] = useState({
  date: new Date().toISOString().split('T')[0],
  district: ''
})
const [status, setStatus] = useState('idle')
```

### Firebase Integration

- ✅ Connected to Firestore
- ✅ Stores data in `diseaseReports` collection
- ✅ Anonymous data collection
- ✅ Serverside timestamps
- ✅ Error handling with user feedback

### Form Validation

- ✅ District selection required
- ✅ At least one disease must be selected
- ✅ Date cannot be in the future
- ✅ Error messages displayed in styled alert

---

## 📊 Sample Data

The component comes pre-loaded with 8 sample diseases:

1. 🦟 **Dengue Fever** - High Risk, Rising
2. 🦠 **Malaria** - Medium Risk, Stable
3. 🌡️ **Typhoid** - Medium Risk, Falling
4. 💧 **Cholera** - Low Risk, Stable
5. 🫁 **Tuberculosis** - High Risk, Stable
6. 🤧 **Influenza** - Low Risk, Falling
7. 😷 **COVID-19** - Medium Risk, Rising
8. 🩺 **Hepatitis** - Low Risk, Stable

You can easily modify this data in `SymptomReport.jsx` (DISEASES array).

---

## 🎯 No External Libraries Used

✅ **Pure React** - Functional components only  
✅ **Plain CSS** - No Tailwind, Bootstrap, or MUI  
✅ **CSS Custom Properties** - For dynamic theming  
✅ **Native React Hooks** - useState for state management  
✅ **Firebase SDK** - For backend integration only  

---

## 🔧 Customization Guide

### Change Disease List

Edit the `DISEASES` array in `SymptomReport.jsx`:

```jsx
const DISEASES = [
  { 
    id: 'your_disease_id',
    name: 'Your Disease Name',
    icon: '🏥', // Any emoji
    risk: 'high', // 'high' | 'medium' | 'low'
    trend: 'rising', // 'rising' | 'stable' | 'falling'
    count: 150 // Optional number
  },
  // ... more diseases
]
```

### Modify Risk Colors

Edit `SymptomReport.jsx` - `riskConfig` object in DiseaseCard component:

```jsx
const riskConfig = {
  high: {
    accentColor: '#ef4444',
    iconBg: '#fee2e2',
    badgeText: 'HIGH RISK',
    badgeBg: '#fecaca'
  },
  // ... customize as needed
}
```

### Adjust Card Sizing

Edit `SymptomReport.css`:

```css
.disease-card-content {
  padding: 20px; /* Adjust padding */
}

.disease-icon-container {
  width: 56px; /* Adjust icon size */
  height: 56px;
}
```

---

## 🏗️ Component Structure

```
SymptomReport.jsx (Main Container)
├── Header Section
├── Form Inputs (Date + District)
│   └── Grid Layout
├── Disease Cards Section
│   └── DiseaseCard.jsx (x8)
│       ├── Accent Bar
│       ├── Icon Container
│       ├── Risk Badge
│       ├── Disease Name
│       └── Trend Indicator
├── Error Message (conditional)
├── SubmitCard.jsx
│   ├── Top Accent Line
│   ├── Icon
│   ├── Text
│   └── Arrow
└── Privacy Notice
```

---

## 🎨 CSS Architecture

### Naming Convention
- BEM-inspired class names
- Component-scoped styles
- No global pollution

### Key Classes
- `.disease-card` - Main card container
- `.disease-card.selected` - Selected state
- `.submit-card` - Submit button card
- `.risk-badge` - Risk level indicator
- `.disease-card-trend` - Trend display

---

## ✨ Animations & Transitions

All transitions use:
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

This provides smooth, professional animations matching modern web standards.

---

## 📱 Accessibility

✅ Semantic HTML structure  
✅ ARIA attributes (`aria-pressed` for toggles)  
✅ Keyboard navigable  
✅ Focus states defined  
✅ Color contrast meets WCAG standards  

---

## 🔐 Privacy & Security

✅ No personal data collected  
✅ Anonymous submissions  
✅ Encrypted Firebase connection  
✅ Privacy notice displayed  

---

## 🐛 Testing Checklist

- [ ] Visit `/report-dashboard` route
- [ ] Select multiple disease cards
- [ ] Verify card selection state (accent bar glow)
- [ ] Test hover animations
- [ ] Submit without district (should show error)
- [ ] Submit without diseases (should show error)
- [ ] Valid submission (should show success message)
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Verify Firebase data storage in Firestore console

---

## 📦 Files Modified/Created

### New Files:
```
src/components/DiseaseCard.jsx
src/components/SubmitCard.jsx
src/components/SymptomReport.jsx
src/styles/SymptomReport.css
```

### Modified Files:
```
src/App.jsx (added new route)
```

### Preserved Files:
```
src/components/SymptomForm.jsx (original form intact)
src/pages/Report.jsx (original report page intact)
```

---

## 🎯 Next Steps

1. **Navigate to** `http://localhost:5173/report-dashboard`
2. **Test the interface** - Select diseases, submit report
3. **Check Firestore** - Verify data is being stored
4. **Customize** - Modify colors, diseases, or layout as needed
5. **Replace or keep** - Decide if you want to replace `/report` or keep both

---

## 💡 Pro Tips

- The disease list is easily expandable - just add more objects to the `DISEASES` array
- Risk colors can be customized via the `riskConfig` object
- All animations can be disabled by removing transition properties
- Component is fully self-contained - easy to move or duplicate
- CSS is modular - change one component without affecting others

---

## 📞 Support

If you need to modify anything or have questions about the implementation, just let me know!

**Created with ❤️ for SymptoMap**
