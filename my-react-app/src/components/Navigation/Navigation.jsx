import React from 'react';
import { navigationMenu } from './NavigationMenue';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing local storage, session, etc.)
    localStorage.clear();  // Example: clear any stored data
    navigate('/login');  // Redirect to the login page after logout
  };

  return (
    <div className='space-y-6'>
      {navigationMenu.map((item) => (
        <div
          key={item.title} // Add a unique key for each item
          className='cursor-pointer flex space-x-3 items-center'
          onClick={() => {
            // Navigate based on item.title or item.path
            if (item.title === "Profile") {
              navigate(`/profile/${5}`); // Example for profile with dynamic ID
            } else {
              navigate(item.path); // General case for other routes
            }
          }}
        >
          {item.icon}
          <p className='text-x1'>{item.title}</p>
        </div>
      ))}

      <div className='py-10'>
        <Button 
          sx={{width: "100%", borderRadius: "29px", py: "15px", backgroundColor: "#1d9bf0"}}
          variant='contained'
        >
          Tweet
        </Button>
      </div>

      {/* Move Logout button under the Avatar section */}
      <div className='flex flex-col items-center mt-6'>
        <div className='flex items-center space-x-3'>
          <Avatar src="/images/profile.jpg" alt="profile" />
          <div>
            <span>Code with Zosh</span>
            <span className='opacity-70'>@codewithzosh</span>
          </div>
        </div>

        {/* Logout Button below the avatar */}
        <Button 
          sx={{ borderRadius: "29px", py: "10px", backgroundColor: "#ff4d4d", width: "100%", mt: 3 }}
          variant='contained'
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
