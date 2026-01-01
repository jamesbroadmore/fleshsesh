# Age Gateway Implementation

## Overview
An age verification gateway has been implemented to ensure all visitors confirm they are 18+ before accessing the site.

## Features

### User Experience
- **First Visit**: Users are presented with an age verification screen before accessing any content
- **Verified Users**: Age verification is remembered using localStorage
- **Return Visits**: Verified users skip the gateway and access the site directly

### Design
- Dark premium theme matching the site aesthetic
- Hot pink accents for CTAs and highlights
- Large, clear messaging about age requirements
- Professional shield icon and warning indicators
- Mobile-responsive design

### Legal Compliance
The gateway includes:
- Clear "18+ only" messaging
- Legal requirements checklist:
  - User is at least 18 years old
  - Adult content is legal in their jurisdiction
  - They are accessing voluntarily
  - They agree to Terms of Service
- Cookie/storage notice
- Exit option for underage users

### Actions
1. **"I am 18 or Older - Enter"** - Verifies age and grants access
2. **"I am Under 18 - Exit"** - Redirects to Google.com

## Technical Implementation

### Component Location
`/app/components/AgeGateway.jsx`

### Integration
Wrapped around the entire application in `/app/app/layout.js`

### Storage
- Uses `localStorage` to persist verification
- Key: `fleshsesh_age_verified`
- Value: `'true'` when verified

### States
1. **Loading**: Shows loading spinner while checking localStorage
2. **Unverified**: Shows age gateway screen
3. **Verified**: Renders children (main site content)

## How It Works

```javascript
1. Component mounts → Check localStorage for 'fleshsesh_age_verified'
2. If verified → Show site content immediately
3. If not verified → Show age gateway
4. User clicks "Enter" → Set localStorage → Show site content
5. User clicks "Exit" → Redirect to external site
```

## Bypassing for Development
If needed for testing, you can bypass the gateway by:
1. Opening browser console
2. Running: `localStorage.setItem('fleshsesh_age_verified', 'true')`
3. Refreshing the page

Or clear verification:
```javascript
localStorage.removeItem('fleshsesh_age_verified')
```

## Legal Notes
- This age verification meets common requirements for adult content websites
- Uses honor system (user self-declaration)
- For stricter verification, consider integrating third-party age verification services
- Complies with the "18+ only" messaging throughout the site

## Browser Support
- Works in all modern browsers that support localStorage
- Gracefully handles browsers with localStorage disabled (shows gateway on every visit)

## Future Enhancements
- Add date of birth input for stricter verification
- Integrate third-party age verification service (e.g., AgeChecker.Net)
- Add analytics tracking for gateway interactions
- Support for different age requirements by region
- Remember me option with configurable expiry
