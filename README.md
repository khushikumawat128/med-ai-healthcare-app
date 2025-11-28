# Med.AI - Intelligent Healthcare Assistant

A modern, AI-powered healthcare platform connecting patients, doctors, and hospital staff with dedicated role-based dashboards, AI symptom analysis, and comprehensive medical management tools.

## Features

### Authentication System
- **Login & Signup**: Role-based authentication for Patients, Doctors, and Hospital Staff
- **Demo Credentials**: Use any role with email `john.doe@example.com` and password `demo123`
- **Role-Specific Registration**: Specialized signup forms for each role with relevant fields

### Patient Dashboard
- **AI Symptom Checker**: Describe symptoms and get AI-powered analysis with:
  - Condition ranking with probability scores
  - Urgency levels (Self-care, OPD, Emergency)
  - Medical recommendations
  - History tracking
- **Health Overview**: Quick stats on health status, appointments, and medical records
- **Appointment Management**: Book, view, and manage medical consultations
- **Medical Records**: Upload, view, and organize medical documents

### Doctor Dashboard
- **Patient Management**: Browse and manage patient list with urgency indicators
- **Appointments**: Today's schedule and appointment management
- **Case Details**: Access complete patient history and create prescriptions
- **Clinical Notes**: Add detailed notes and prescriptions for patients

### Hospital Staff Dashboard
- **Hospital Statistics**: Overview of admitted patients, discharges, and alerts
- **Task Management**: Daily task tracking with priority levels
- **Patient Admission**: Manage patient admissions and bed assignments
- **Inventory Management**: Track medical supplies with low-stock alerts

### Additional Features
- **Appointments Page**: Comprehensive appointment history and management
- **Medical Records Page**: Searchable, filterable medical documents
- **History Timeline**: Visual timeline of all healthcare events
- **Symptom Checker Page**: Dedicated AI symptom analysis interface
- **Dark/Light Mode**: Full theme support
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Role Switching**: Easy switching between roles for testing

## Design System

- **Color Palette**: Medical Blue (#0B5ED7), Teal (#0CC7BD), White, Soft Grey (#F3F6FA)
- **Components**: Glassmorphic cards, smooth animations, professional healthcare UI
- **Typography**: Clean, modern font system
- **Animations**: Smooth transitions, fade-ins, and interactive hover effects

## Technology Stack

- **React 19**: Latest React features
- **Next.js 16**: App Router with server/client components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Medical-themed icons

## Getting Started

1. **Login**: Visit the app and use demo credentials
2. **Select Role**: Choose between Patient, Doctor, or Staff
3. **Explore**: Navigate through role-specific dashboards
4. **Try Features**: Test symptom checker, appointments, and management tools

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                    # Auth page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Theme & animations
│   ├── dashboard/
│   │   ├── patient/page.tsx        # Patient dashboard
│   │   ├── doctor/page.tsx         # Doctor dashboard
│   │   └── staff/page.tsx          # Staff dashboard
│   ├── appointments/page.tsx       # Appointments view
│   ├── records/page.tsx            # Medical records
│   ├── history/page.tsx            # History timeline
│   └── symptom-checker/page.tsx    # Symptom checker
├── components/
│   ├── navbar.tsx                  # Navigation bar
│   ├── auth/                       # Auth components
│   ├── patient/                    # Patient components
│   ├── doctor/                     # Doctor components
│   └── staff/                      # Staff components
├── lib/
│   ├── auth-context.tsx            # Auth state management
│   ├── types.ts                    # TypeScript definitions
│   └── dummy-data.ts               # Mock data
└── public/                         # Assets

\`\`\`

## Features Implemented

✅ Complete authentication system with role-based signup
✅ Patient dashboard with AI symptom checker
✅ Doctor dashboard with patient management
✅ Hospital staff dashboard with task & inventory management
✅ Appointments management across all roles
✅ Medical records viewer and manager
✅ History timeline tracking
✅ Responsive design for all screen sizes
✅ Dark/light mode support
✅ Glassmorphic UI with animations
✅ Role-based navigation and access control
✅ Dummy data for all features
✅ Professional healthcare UI design

## Future Enhancements

- Backend API integration
- Real-time notifications
- Video consultation support
- Advanced medical analytics
- Integration with EHR systems
- Mobile app version
- Machine learning improvements

## Notes

This is a frontend-only demonstration with placeholder API calls and dummy data. All features are interactive and fully functional for demonstration purposes.
