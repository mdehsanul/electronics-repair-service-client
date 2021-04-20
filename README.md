# website name: 
Electronics Repair Service

## live:
https://electronics-repair-service.web.app/

or,

https://electronics-repair-service.firebaseapp.com/

### Feature:
1. Navbar -> name of the website, Home, Bookings, Our Team, Admin button added. Home button redirects the user to the Home page. Bookings button redirects the user to the User                page, The Admin button uses to go to the Admin page.

2. Home page -> On this page, users will get service cards with service information(device type, service name, price, service info) for choice their service with Go for Service                 button. After click on any of the service by Go for Service button they will redirect the user to the Login page for login. Besides anyone can see the review of                 the users who take service from Electronics Repair Service
3. Login page -> in this page, user can login.
      
                 login can be done using:
                 * google.
                 
4. when a user login the user redirect to the Dashboard which have two part user and admin. the route will redirect them according to their role using email.

5. user page -> 
                   * Book -> In this page user get the service(service name, price) book form(user name, user email)  with payment method for place booking service.                                          When clicking submit button the user will get confirmation alert that the service placed on the booking list and using strip payment card                                        they can pay the service bill and after click on pay button they get confirmation message.
                   * Booking List -> all the booking depending on user who loggedIn will show here with total booking, user name, user email. and Booking service                                                      information. Interesting  matter here user can their order status(pending, ongoing, done) which are controlled from Admin page.
                   * Review page ->  a loggedIn user can write review about the service they taken from the shop which will be visible in the Home page Review                                                        section. 
7. Admin page ->   
                   * Book -> process same as user
                   * Booking List -> process same as user
                   * Review page -> process same as user
                   * order list -> admin can see all the service that are booked and change the status(pending, ongoing, done) of booking service from here.
                   * Add service -> a loggedIn admin user can Add new service information.
                                  (device  type, service name, price, service description, image)
                   * Make Admin -> admin can make a user another admin using the email of that user 
                   * Manage services -> a loggedIn admin user can Manage services( can see all the services that are add).
                                       Also the admin user can Delete service that is not available  
8. Logout -> In the side both Admin and User has a logout button the logged out both of them and return to the home page.
8. React Router is used to switch between the pages and the URL is Dynamically generated.
9. PrivateRoute -> PrivateRoute used to make difference between user and admin using email.

### Responsiveness:(Home page)
1. Desktop
2. mobile devices are
    * Galaxy Note 3(360 X 640), 100%, Online
    * Moto G4(360 X 640), 100%, Online
    * Galaxy S5(360 X 640), 100%, Online
 
### Attention: 
1. in my website user can go for book service by choosing service from home page then they will redirect to the booking form or can go directly to see their previous booking. those who(admin, user) not selecting service from home page they will get a chance to choose service from dashboard Book page. when they select service they will redirect to the booking form for book the service.

2. Sometime Home page -> HIGHLIGHTS OF OUR SERVICE will not load due to net problem please reload the home page again
Thank You... 
