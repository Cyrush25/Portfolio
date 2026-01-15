# Full Administrative Takeover via SQL Injection

I often play badminton on weekends and sometimes on weekdays. Before playing we have to book a court, which is usually booked on a per-hour basis. The logic behind the booking goes like this: You select a time slot -> You enter your name, email and phone number -> you make the payment -> Court is booked.

## Recon
When I arrive at the court, there is a receptionist who checks the details before letting players in. While I was resting in between a game this weekend I got curious. I thought there must be some kind of an admin page or a subdomain, to which the receptionist had access to.

## Vulnerability
The `/admin` endpoint exposed a login panel.

Client-side validation blocked email payloads, but the password field accepted:

'

This resulted in a verbose SQL syntax error.
![Admin login page](content/blogs/images/sqli-error.png)

## Exploitation
Intercepted the request and used:

' OR 1=1 --
![Admin login page](content/blogs/images/burp-sqli.png)

## Impact
- Full admin panel access
- Free court booking
- PII exposure (emails & phone numbers)

## Takeaway
Client-side validation is **not security**.

> Vulnerability was responsibly disclosed.