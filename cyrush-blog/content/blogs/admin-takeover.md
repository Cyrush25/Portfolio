# From a badminton break to a full administrative takeover

I often play badminton on weekends and sometimes on weekdays...

## Recon
While resting between games, curiosity kicked in...

## Vulnerability
The `/admin` endpoint exposed a login panel.

Client-side validation blocked email payloads, but the password field accepted:

'

This resulted in a verbose SQL syntax error.

## Exploitation
Intercepted the request and used:

' OR 1=1 --

markdown
Copy code

### Impact
- Full admin panel access
- Free court booking
- PII exposure (emails & phone numbers)

## Takeaway
Client-side validation is **not security**.

> Vulnerability was responsibly disclosed.