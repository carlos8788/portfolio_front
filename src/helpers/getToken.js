export const getCsrfToken = () => {
    const cookies = document.cookie.split(';');
    const csrfCookie = cookies.find(cookie => cookie.trim().startsWith('csrftoken='));
    return csrfCookie ? decodeURIComponent(csrfCookie.split('=')[1]) : null;
  };
  
