export const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
  };
  
  export const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };
  
  export const isCurrentlyOpen = (openingHours) => {
    const currentDay = getCurrentDay();
    const currentHour = new Date().getHours();
    
    const hours = openingHours[currentDay];
    if (!hours) return false;
    
    const [open, close] = hours.split('–').map(time => {
      const hour = parseInt(time);
      return time.includes('pm') && hour !== 12 ? hour + 12 : hour;
    });
    
    return currentHour >= open && currentHour < close;
  };
  
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };