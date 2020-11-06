Question 2: Monolithic apps are more easy and faster to develop and deploy as well as debugging since the apps is build on one single server and database. while microservices will take longer to develop but easier to making changes and usually more scalable. I implement monolithic apps on the first question because the code base is not big enough to implement microservices.

Question 3: To make sure that engineers are working in the same project does not replace each other code is by implementing git pull request. So every time the engineer need to push code to develop branch or master, the engineer to pull request and reviewed by other engineer in order to merge to develop or master branch.

Question 4: Microservices are in like normal applications, and they communicate to each other using http request, since microservices talks to each other using network, which is always a potential threat. Thus, in order to make it more secure, we could assign token for each microservices.

Question 5: Sync requests are typically used when the client must wait to receive the response before processing continues on the client side, while async requests do not. Async request is very useful when requestion large request. Sync request usually used on website for login, or submit form. While async request is used on requesting large file or request such as queue

Question 6: If the application needs to run on different OS, we could use docker as virtual machine that will run the code in OS of your choosing.

Question 7:
- use https instead of http
- implement encryption and decryption on server-client level
- Disable cors

Question 8:
- create an api documentation using swagger or other third party application
- build apps using microservices so it is more scalable
- write product requirement documentation
