
function fetchUserData() {
    console.log('Fetching user data...');
    
    setTimeout(() => {
        console.log('Data received');
        
       
        const userData = {
            name: 'Akshat',
            email: 'Akshat@example.com'
        };
        
        console.log('User:', userData);
    }, 2000); 
}


fetchUserData();



