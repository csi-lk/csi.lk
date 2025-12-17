# User Setup Instructions

## Creating the Initial Admin User

SilkOS requires at least one authenticated user to access the `/app` interface. Follow these steps to create the initial user(s).

### Step 1: Access PocketBase Admin UI

1. Navigate to your PocketHost instance admin UI:
   - Production: `https://csilk.pockethost.io/_/`
   - Enter your PocketHost admin credentials

### Step 2: Create User via Admin UI

1. In the admin UI, navigate to **Collections** → **users**
2. Click **New record**
3. Fill in the user details:

   **For Callum (Admin)**:
   - Email: `callum@silcock.io` (or your preferred email)
   - Password: (set a secure password)
   - Verified: ✓ (check this box)
   - Click **Create**

   **Optional: For Greta**:
   - Email: `greta@example.com` (or actual email)
   - Password: (set a secure password)
   - Verified: ✓ (check this box)
   - Click **Create**

### Step 3: Verify User Creation

1. In the users collection, you should see your new user(s)
2. Test the login:
   - Navigate to `https://csilk.pockethost.io/login`
   - Enter the email and password you created
   - You should be redirected to `/app` on successful login

## Access Control Rules

**Current MVP Rules**:
- Any authenticated user can access `/app/*` routes
- No role-based access control (all authenticated users have same permissions)
- Authentication is handled by middleware in `pb_hooks/middleware-auth.pb.js`

## Troubleshooting

**Login fails with "Invalid credentials"**:
- Verify the email is correct (case-sensitive)
- Verify the password matches what you set
- Check that "Verified" is checked in the admin UI

**Redirected to login after logging in**:
- Check browser console for JavaScript errors
- Verify localStorage has `pocketbase_auth` after login
- Check that middleware-auth.pb.js is deployed

**Can't access admin UI**:
- Verify you're using PocketHost admin credentials (not user credentials)
- URL should be `https://csilk.pockethost.io/_/` (note the underscore)
