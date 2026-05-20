# Security Specification: IC-AIHISD 2026

## Data Invariants
1. A registration must have all required fields: fullName, email, organization, phone, category, and createdAt.
2. The registration ID must be a valid ID.
3. No one can read the registrations collection except for admins (since it contains PII).
4. Anyone can create a registration, but they cannot update or delete it once submitted (immutable records for security).

## The Dirty Dozen Payloads
1. **Payload 1: Missing Fields** - Attempt to create a registration without an email.
2. **Payload 2: Invalid Category** - Attempt to create a registration with a category not in the enum (e.g., "Guest").
3. **Payload 3: Giant String** - Attempt to submit a 1MB string for the fullName.
4. **Payload 4: Identity Spoofing** - Attempt to set a custom UID in the payload if UID was used (though here we use anonymous or pub submission).
5. **Payload 5: Unauthorized Read** - An unauthenticated user tries to list all registrations.
6. **Payload 6: Unauthorized Update** - A user tries to change their email after submission.
7. **Payload 7: Unauthorized Delete** - A user tries to delete a registration record.
8. **Payload 8: PII Leak** - A user tries to `get` another user's registration.
9. **Payload 9: Path Poisoning** - Using a malicious string like `../../system` as a registration ID.
10. **Payload 10: Future Timestamp** - Attempt to set a future `createdAt` (though rules should enforce server time).
11. **Payload 11: Extra Keys** - Attempt to inject a field like `isPaid: true`.
12. **Payload 12: Empty Payload** - Sending an empty object.

## The Test Runner
(Verifies PERMISSION_DENIED for above scenarios)
