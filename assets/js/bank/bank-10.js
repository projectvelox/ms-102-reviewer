/* MS-102 question bank, part 10: questions 145 to 160 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q145", source: 145, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "Your company has a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Global Administrator"],
        ["User2", "Security Administrator, Guest Inviter"],
        ["User3", "None"],
        ["User4", "Password Administrator"]
      ] } },
      "External collaboration settings have default configuration.",
      "You need to identify which users can perform the following administrative tasks:",
      { list: ["Modify the password protection policy.", "Create guest user accounts."] },
      "Which users should you identify for each task? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Modify the password protection policy:", options: ["User1 only", "User1 and User2 only", "User1, User2, and User4 only", "User1, User2, User3, and User4"] },
      { id: "f2", label: "Create new guest users in Azure AD:", options: ["User1 only", "User1 and User2 only", "User1, User2, and User4 only", "User1, User2, User3, and User4"] }
    ],
    answer: { f1: 1, f2: 3 },
    explanation: {
      correct: [
        "For the password protection policy the reference answer is **User1 and User2 only**. Password protection (the custom banned password list and the smart lockout settings, under Authentication methods) is a tenant-wide security setting. User1, as Global Administrator, can change every setting in the tenant. The answer also counts User2, whose Security Administrator role manages security configuration in Azure AD (Microsoft Entra ID) and can read and update the tenant's directory policies. User4's Password Administrator role only resets the passwords of non-administrators and other Password Administrators and changes no tenant policy, and User3 has no role. Current Microsoft Learn articles name Authentication Policy Administrator as the least-privileged role for these settings; no user in the table holds it.",
        "Creating guests is governed by the guest invite settings in External collaboration settings. With the default configuration, all users in the organization, including guest users, can invite external users, and sending an invitation creates the guest user account in the directory. Every user in the table can therefore create guest users: User3 as an ordinary member, and User1, User2 and User4 as well. User2's Guest Inviter role only makes a difference when invitations are restricted to specific admin roles."
      ],
      wrong: [
        ["Password protection: User1, User2, and User4 only", "Password Administrator can reset passwords for a limited set of users. It has no permission to change tenant-wide settings such as the banned password list."],
        ["Password protection: User1 only", "The reference answer also includes User2, whose Security Administrator role manages security configuration in Azure AD."],
        ["Guest users: User1 and User2 only", "That would be the result only if invitations were limited to admin roles such as User Administrator and Guest Inviter. With the default settings, every member can invite guests."]
      ],
      concept: "Tenant-wide password protection settings are changed by administrators who manage policy, while guest creation is controlled by the guest invite settings, which by default let every user invite guests.",
      takeaway: "Default external collaboration settings: anyone in the organization can invite guests. The Guest Inviter role matters only when invitations are restricted.",
      refs: [
        ["Microsoft Learn: Configure external collaboration settings", "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"],
        ["Microsoft Learn: Configure custom password protection lists", "https://learn.microsoft.com/entra/identity/authentication/tutorial-configure-custom-password-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q146", source: 146, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Microsoft 365 admin role", "Microsoft Exchange Online admin role"], rows: [
        ["User1", "Global Administrator", "None"],
        ["User2", "Exchange Administrator", "None"],
        ["User3", "Service Support Administrator", "None"],
        ["User4", "None", "Organization Management"]
      ] } },
      "You plan to use Exchange Online to manage email for a DNS domain.",
      "An administrator adds the DNS domain to the subscription.",
      "The DNS domain has a status of Incomplete setup.",
      "You need to identify which user can complete the setup of the DNS domain. The solution must use the principle of least privilege.",
      "Which user should you identify?"
    ],
    options: [
      { key: "A", text: "User1" },
      { key: "B", text: "User2" },
      { key: "C", text: "User3" },
      { key: "D", text: "User4" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "A domain with the status Incomplete setup has been added to the tenant, but the setup wizard in the Microsoft 365 admin center has not finished: the DNS records for the services, such as the MX, Autodiscover and SPF records for Exchange Online, still have to be added and checked. Completing that wizard is domain management, which Microsoft 365 allows to the Global Administrator and to the Domain Name Administrator, whose role is limited to managing domain names.",
        "No user in the table holds Domain Name Administrator, so User1, the Global Administrator, is the only user who can complete the setup. The least-privilege principle picks the smallest role that can do the task, and among these users that is User1's."
      ],
      wrong: [
        ["B", "Exchange Administrator manages Exchange Online, such as mailboxes and mail flow. It cannot manage the domains of the tenant in the Microsoft 365 admin center."],
        ["C", "Service Support Administrator opens service requests and reads service health and the message center. It has no permissions over domains."],
        ["D", "Organization Management is a role group inside Exchange Online. It controls the Exchange organization, but adding and setting up domains in Microsoft 365 is a directory task outside Exchange permissions."]
      ],
      concept: "Domains of a Microsoft 365 tenant are managed by the Global Administrator or the Domain Name Administrator, not by workload administrators such as the Exchange Administrator.",
      takeaway: "Domain setup in the Microsoft 365 admin center: Domain Name Administrator if available, otherwise Global Administrator.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q147", source: 147, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Passwordless authentication", "Multi-factor authentication (MFA) method registered"], rows: [
        ["User1", "Not configured", "Microsoft Authenticator app (push notification)"],
        ["User2", "Configured", "Microsoft Authenticator app (push notification)"],
        ["User3", "Not configured", "Mobile phone"],
        ["User4", "Not configured", "Email"]
      ] } },
      "You plan to create a Conditional Access policy that will use GPS-based named locations.",
      "Which users can the policy protect?"
    ],
    options: [
      { key: "A", text: "User2 and User4 only" },
      { key: "B", text: "User1, User2, User3, and User4" },
      { key: "C", text: "User1 only" },
      { key: "D", text: "User1 and User3 only" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "A countries named location can determine the country by GPS coordinates instead of the IP address. The coordinates come from the Microsoft Authenticator app: the user receives a notification in the app, grants location permission and shares the location of the mobile device. A user can only be evaluated against a GPS-based location if the sign-in goes through Authenticator in this way.",
        "User1 signs in with a password and approves Authenticator push notifications, so the policy can obtain User1's location. User3 (mobile phone, that is SMS or voice) and User4 (email) have no Authenticator registration that could share a location. User2 has passwordless authentication configured. A passwordless sign-in does not share the location by itself: Microsoft documents that GPS location doesn't work when only passwordless methods are set, and that passwordless phone sign-in users must additionally approve an MFA push notification to share their location. The answer therefore counts only User1 as a user the policy can protect."
      ],
      wrong: [
        ["A", "User4's method is email, which is not an Authenticator method and cannot provide GPS coordinates. User2 uses passwordless authentication."],
        ["B", "User3 and User4 have no Authenticator registration, so their sign-ins cannot supply a GPS location, and User2 signs in passwordless."],
        ["D", "User3's mobile phone method is a text message or voice call. Neither shares the device's location."]
      ],
      concept: "GPS-based named locations rely on the Microsoft Authenticator app to report the device's location during sign-in.",
      takeaway: "GPS named locations work for users who approve Authenticator notifications; SMS, voice, email and passwordless users are not covered.",
      refs: [["Microsoft Learn: Conditional Access network and location assignments", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"]]
    }
  },
  {
    id: "Q148", source: 148, type: "dropdown",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Role"], rows: [
        ["User1", "Group1", "User Administrator"],
        ["User2", "Group1", "None"],
        ["User3", "Group2", "None"],
        ["User4", "None", "Global Administrator"]
      ] } },
      "You enable self-service password reset (SSPR) for Group1. You configure security questions as the only authentication method for SSPR.",
      "Which users can use SSPR, and which users must answer security questions to reset their password? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Users that can use SSPR:", options: ["User1 and User2 only", "User1, User2, and User3 only", "User1, User2, and User4 only", "User1, User2, User3, and User4"] },
      { id: "f2", label: "Users that must answer security questions to reset their password:", options: ["User1 only", "User2 only", "User1 and User2 only", "User1, User2, and User3 only", "User1, User2, and User4 only", "User1, User2, User3, and User4"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "Two SSPR policies are at work. The policy you configure applies to users in its scope, here the members of Group1, with security questions as the only method. Accounts that hold an administrator role are handled separately: by default they are enabled for SSPR under a strong two-gate policy that you cannot change. It requires two pieces of authentication data, such as an email address, the Authenticator app or a phone number, and it prohibits security questions.",
        "User2 is a member of Group1 without a role, so User2 uses the configured policy and must answer security questions. User1 is also in Group1, but as a User Administrator User1 falls under the administrator policy, and so does User4, the Global Administrator, even though User4 is in no group. User3 is a non-admin member of Group2 only and is outside the scope. The users who can use SSPR are therefore User1, User2 and User4, and only User2 answers security questions."
      ],
      wrong: [
        ["Can use SSPR: User1 and User2 only", "User4 is not in Group1, but as a Global Administrator User4 is covered by the administrator reset policy, which is on by default for admin roles."],
        ["Can use SSPR: an option that includes User3", "User3 is a member of Group2 only and holds no admin role, so neither policy applies to User3."],
        ["Security questions: an option that includes User1 or User4", "User1 and User4 hold admin roles. The administrator policy requires two other methods and never uses security questions."]
      ],
      concept: "Administrator accounts get a fixed two-gate SSPR policy that ignores the scope and methods of the user policy and prohibits security questions.",
      takeaway: "SSPR scope applies to ordinary users; admins can always use SSPR, but never with security questions.",
      refs: [
        ["Microsoft Learn: Self-service password reset policies (administrator reset policy differences)", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-policy"],
        ["Microsoft Learn: Enable Microsoft Entra self-service password reset", "https://learn.microsoft.com/entra/identity/authentication/tutorial-enable-sspr"]
      ]
    }
  },
  {
    id: "Q149", source: 149, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory forest named contoso.local.",
      "You have a Microsoft 365 subscription.",
      "You plan to implement a directory synchronization solution that will use password hash synchronization.",
      "From the Microsoft 365 admin center, you successfully verify the contoso.com domain name.",
      "You need to prepare the environment for the planned directory synchronization solution.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "From the Microsoft 365 admin center, verify the contoso.local domain name." },
      { key: "B", text: "From the public DNS zone of contoso.com, add a new mail exchanger (MX) record." },
      { key: "C", text: "From Active Directory Domains and Trusts, add contoso.com as a UPN suffix." },
      { key: "D", text: "From Active Directory Users and Computers, modify the UPN suffix for all users." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "contoso.local is a non-routable domain, so the users' UPNs end in @contoso.local, a suffix that cannot be verified in Microsoft 365. Directory synchronization copies the UPN to the cloud, and a user whose UPN suffix is not a verified domain gets an @<tenant>.onmicrosoft.com sign-in name instead.",
        "The fix is to give the users UPNs in the verified domain. First you add contoso.com as an alternative UPN suffix in Active Directory Domains and Trusts, which makes the suffix available in the forest. Only then can you change the UPN suffix of the users to contoso.com and run synchronization."
      ],
      wrong: [
        ["A", "A .local domain is not registered in public DNS, so Microsoft 365 cannot verify it."],
        ["B", "An MX record routes mail for the domain. It has nothing to do with preparing user names for directory synchronization."],
        ["D", "This is the second step. The contoso.com suffix has to be added to the forest before you can assign it to the users."]
      ],
      concept: "Before synchronizing a forest with a non-routable domain, add a verified, routable domain as an alternative UPN suffix and assign it to the users.",
      takeaway: "Non-routable forest: verify the public domain, add it as a UPN suffix in Domains and Trusts, then change the users' UPNs.",
      refs: [["Microsoft Learn: Prepare a non-routable domain for directory synchronization", "https://learn.microsoft.com/microsoft-365/enterprise/prepare-a-non-routable-domain-for-directory-synchronization"]]
    }
  },
  {
    id: "Q150", source: 150, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 ES subscription.",
      "On Monday, you create a new user named User1.",
      "On Tuesday, User1 signs in for the first time and perform the following actions:",
      { list: [
        "Signs in to Microsoft Exchange Online from an anonymous IP address.",
        "Signs in to Microsoft SharePoint Online from a device in New York City.",
        "Establishes Remote Desktop connections to hosts in Berlin and Hong Kong, and then signs in to SharePoint Online from the Remote Desktop connections."
      ] },
      "Which types of sign-in risks will Azure AD Identity Protection detect for User1?"
    ],
    options: [
      { key: "A", text: "anonymous IP address and atypical travel only" },
      { key: "B", text: "anonymous IP address only" },
      { key: "C", text: "unfamiliar sign-in properties and atypical travel only" },
      { key: "D", text: "anonymous IP address and unfamiliar sign-in properties only" },
      { key: "E", text: "anonymous IP address, atypical travel, and unfamiliar sign-in properties" }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "The reference answer is E: the answer maps each of User1's activities to its own detection. **Anonymous IP address** flags sign-ins from an anonymous IP address, such as the Tor browser or an anonymizer VPN, which is the Exchange Online sign-in. **Atypical travel** flags two sign-ins from geographically distant locations in less time than the travel between them would take; the SharePoint sign-ins from New York and then, through the Remote Desktop hosts, from Berlin and Hong Kong on the same day fit that pattern, because SharePoint sees the IP addresses of the hosts. **Unfamiliar sign-in properties** flags a sign-in whose properties, such as IP address, ASN, location, device or browser, are unfamiliar for the user, which the answer applies to the new locations and Remote Desktop sessions.",
        "Anonymous IP address is evaluated from the IP address alone. The other two are behavior-based: Identity Protection compares each sign-in with the sign-in history it learns for the user, and for User1 that history starts on Tuesday."
      ],
      wrong: [
        ["A", "This leaves out unfamiliar sign-in properties, which the reference answer counts for the new locations and Remote Desktop sessions."],
        ["B", "This keeps only the detection that does not depend on the user's history. The reference answer also counts atypical travel and unfamiliar sign-in properties."],
        ["C", "This leaves out the anonymous IP address detection for the Exchange Online sign-in."],
        ["D", "This leaves out atypical travel for the sign-ins from New York, Berlin and Hong Kong."]
      ],
      concept: "Identity Protection sign-in risk detections include anonymous IP address (judged from the IP itself), atypical travel (distance against time) and unfamiliar sign-in properties (compared with the user's history).",
      takeaway: "Anonymizer IP: anonymous IP address. Distant cities in a short time: atypical travel. New IP, location or device: unfamiliar sign-in properties.",
      refs: [["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"]]
    }
  },
  {
    id: "Q151", source: 151, type: "yesno",
    domain: "identity", topic: "Conditional Access", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Group", "MFA Status"], rows: [
        ["User1", "Group1", "Enabled"],
        ["User2", "Group1, Group2", "Enforced"]
      ] } },
      "You have the named locations shown in the following table.",
      { table: { head: ["Named location", "IP range"], rows: [
        ["Montreal", "133.107.0.0/16"],
        ["Toronto", "193.77.10.0/24"]
      ] } },
      "You create a conditional access policy that has the following configurations:",
      { list: [
        "Users or workload identities:",
        "Include: Group1",
        "Exclude: Group2",
        "Cloud apps or actions: Include all cloud apps",
        "Conditions:",
        "Include: Any location",
        "Exclude: Montreal",
        "Access control: Grant access, Require multi-factor authentication"
      ] },
      "User1 is on the multi-factor authentication (MFA) blocked users list.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can access Microsoft Office 365 from a device that has an IP address of 133.107.10.20." },
      { text: "User1 can access Microsoft Office 365 from a device that has an IP address of 193.77.10.15." },
      { text: "User2 can access Microsoft Office 365 from a device that has an IP address of 193.77.10.20." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "The policy includes Group1 and excludes Group2, and an exclusion always wins over an inclusion. For the users it applies to, it requires MFA for all cloud apps from any location except Montreal (133.107.0.0/16). Two more facts matter: the MFA Status column is per-user MFA, under which a user performs MFA each time they sign in whatever Conditional Access does, and User1 is on the MFA blocked users list. That legacy Block/unblock users feature, since replaced by Report suspicious activity, automatically denied every MFA attempt of a blocked user.",
        "Statement 1 is No. 133.107.10.20 is in the Montreal range, so the Conditional Access policy does not apply to this sign-in. User1 is still enabled for per-user MFA, and as a blocked user User1 cannot complete MFA, so the sign-in fails.",
        "Statement 2 is No. 193.77.10.15 is in the Toronto range, which is not excluded, so both the policy and per-user MFA require MFA, and User1's MFA attempts are denied.",
        "Statement 3 is Yes. User2 is a member of Group2, so the policy does not apply to User2 at all. User2's per-user MFA status is Enforced, so User2 performs MFA at sign-in, and because User2 is not blocked, the MFA succeeds and User2 can access Office 365 from 193.77.10.20."
      ],
      wrong: [
        ["Statement 1 — Yes", "The Montreal exclusion only takes the sign-in out of the Conditional Access policy. Per-user MFA still requires MFA, and MFA attempts of a blocked user are denied."],
        ["Statement 2 — Yes", "From the Toronto range both the policy and per-user MFA require MFA, which User1 cannot complete while blocked."],
        ["Statement 3 — No", "Membership of Group2 excludes User2 from the policy, and the Enforced per-user MFA is a requirement User2 can meet because User2 is not blocked."]
      ],
      concept: "In Conditional Access an exclusion overrides an inclusion, and a user whose MFA attempts are blocked cannot satisfy any MFA requirement, whether it comes from a policy or from per-user MFA.",
      takeaway: "Evaluate who is excluded first, then the location; and remember that per-user MFA applies on its own, outside Conditional Access.",
      refs: [
        ["Microsoft Learn: Conditional Access users, groups and workload identities", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-users-groups"],
        ["Microsoft Learn: Enable per-user multifactor authentication", "https://learn.microsoft.com/entra/identity/authentication/howto-mfa-userstates"],
        ["Microsoft Learn: Conditional Access network and location assignments", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"]
      ]
    }
  },
  {
    id: "Q152", source: 152, type: "yesno",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", ""], rows: [
        ["User1", "Group1", "Microsoft Authenticator app (push notification)"],
        ["User2", "Group2", "Microsoft Authenticator app (push notification)"],
        ["User3", "Group1, Group2", "None"]
      ] } },
      "Each user has an Android device with the Microsoft Authenticator app installed and has set up phone sign-in.",
      "The subscription has the following Conditional Access policy:",
      { list: [
        "Name: Policy1",
        "Assignments",
        "Users and groups: Group1, Group2",
        "Cloud apps or actions: All cloud apps",
        "Access controls",
        "Grant: Require multi-factor authentication",
        "Enable policy: On"
      ] },
      "From Microsoft Authenticator settings for the subscription, the Enable and Target settings are configured as shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q152-authenticator-settings.png", alt: "Microsoft Authenticator settings, Enable and Target tab. A banner says that Number Matching will begin to be enabled for all users of the Microsoft Authenticator app starting 27th of February 2023. Enable is on. On the Include tab, Target is set to Select groups (not All users). Group1, type Group, Registration Optional, Authentication mode Passwordless. Group2, type Group, Registration Optional, Authentication mode Passwordless." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can sign in by using number matching in the Microsoft Authenticator app." },
      { text: "User2 can sign in by using a username and password." },
      { text: "User3 can sign in by using number matching in the Microsoft Authenticator app." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "The exhibit enables Microsoft Authenticator for Group1 and Group2 with the authentication mode Passwordless. In passwordless phone sign-in the sign-in screen shows a number, the user enters that number in Authenticator, approves and unlocks with a PIN or biometric. That is number matching, which the banner also announces for all Authenticator users. The sign-in combines the registered device with the PIN or biometric, so it counts as multifactor authentication.",
        "Statement 1 is Yes. User1 is in Group1, has Authenticator registered and has set up phone sign-in, so User1 can sign in with number matching, and the sign-in satisfies the MFA requirement of Policy1.",
        "Statement 2 is No. Policy1 targets Group2 and requires MFA for all cloud apps. A username and password is a single factor, so User2 cannot get access with it alone.",
        "Statement 3 is No. The table shows None as User3's registered method, so the answer treats User3 as having no Authenticator registration for the account. Without one there is no app registration to receive the request in which the number is entered."
      ],
      wrong: [
        ["Statement 1 — No", "Group1 is targeted with the Passwordless mode, and passwordless phone sign-in is itself a number matching sign-in."],
        ["Statement 2 — Yes", "Policy1 requires MFA for Group2, so a password alone is not enough."],
        ["Statement 3 — Yes", "User3 is targeted by the Authenticator policy through both groups, but the table lists no registered method for User3."]
      ],
      concept: "The Authenticator policy decides which groups can use the app and in which mode, passwordless phone sign-in uses number matching, and a Conditional Access policy that requires MFA rules out password-only sign-ins.",
      takeaway: "Passwordless phone sign-in = enter the displayed number in Authenticator and unlock; it satisfies an MFA requirement, a password alone does not.",
      refs: [
        ["Microsoft Learn: Passwordless sign-in with Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone"],
        ["Microsoft Learn: Number matching in Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-number-match"]
      ]
    }
  },
  {
    id: "Q153", source: 153, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses an Azure AD tenant named contoso.com. The tenant contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Report Reader"],
        ["User2", "User Administrator"],
        ["User3", "Security Administrator"],
        ["User4", "Global Administrator"]
      ] } },
      "From the Sign-ins blade of the Microsoft Entra admin center, for which users can User1 and User2 view the sign-ins? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1 can view the sign-ins for the following users:", options: ["User1 only", "User1 and User2 only", "User1, User2, and User3 only", "User1, User2, User3, and User4"] },
      { id: "f2", label: "User2 can view the sign-ins for the following users:", options: ["User1 only", "User1 and User2 only", "User1, User2, and User3 only", "User1, User2, User3, and User4"] }
    ],
    answer: { f1: 3, f2: 1 },
    explanation: {
      correct: [
        "The sign-in logs in the Microsoft Entra admin center are opened with a role that can read the tenant's reports, and Reports Reader (printed here as Report Reader) is the least-privileged role named for viewing them. The role is not limited to particular users: it reads the sign-ins of the whole tenant. User1 can therefore view the sign-ins of all four users, administrators included.",
        "For User2 the reference answer is **User1 and User2 only**. User2's User Administrator role manages users and groups, and its reach over other accounts stops at limited admin roles: a User Administrator can manage accounts that hold Reports Reader or User Administrator, like User1 and User2, but not a Security Administrator or a Global Administrator such as User3 and User4. The answer applies that boundary to the sign-ins User2 can view. Full sign-in log access is a reporting permission that roles such as Reports Reader, Security Reader, Security Administrator and Global Reader include."
      ],
      wrong: [
        ["User1: fewer than all four users", "Reports Reader is not scoped to certain users. It reads the sign-in logs of the whole tenant, including those of administrators."],
        ["User2: User1 only", "The reference answer includes User2's own sign-ins along with User1's."],
        ["User2: User1, User2, User3, and User4", "The reference answer does not extend User2's view to User3 and User4, the Security Administrator and the Global Administrator, which are outside a User Administrator's reach."]
      ],
      concept: "Access to the sign-in logs comes from directory roles, and Reports Reader is the least-privileged role that reads the sign-in logs of the whole tenant.",
      takeaway: "Reports Reader: read-only access to all sign-in and audit logs, nothing else.",
      refs: [
        ["Microsoft Learn: Sign-in logs in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q154", source: 154, type: "single",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains an Azure AD tenant named contoso.com.",
      "Corporate policy states that user passwords must not include the word Contoso.",
      "What should you do to implement the corporate policy?"
    ],
    options: [
      { key: "A", text: "From the Microsoft Entra admin center, create a conditional access policy." },
      { key: "B", text: "From the Microsoft Entra admin center, configure the Password protection settings." },
      { key: "C", text: "From the Microsoft 365 admin center, configure the Password policy settings." },
      { key: "D", text: "From Azure AD Identity Protection, configure a sign-in risk policy." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Password protection checks every password change and reset against the global banned password list and, when **Enforce custom list** is on, against a custom banned password list. You add organization-specific terms such as brand names to the custom list (up to 1,000 terms of 4 to 16 characters). The check is case-insensitive and allows for common character substitutions, such as \"o\" and \"0\", so variations like C0nt0so are caught as well. A password that contains Contoso is then rejected.",
        "The settings are under Authentication methods, Password protection in the Microsoft Entra admin center. With the on-premises agents of password protection, the same lists also apply to password changes in Active Directory."
      ],
      wrong: [
        ["A", "A Conditional Access policy decides how a sign-in is granted, for example with MFA. It never inspects the content of a password."],
        ["C", "The password policy of the Microsoft 365 admin center sets password expiration. It cannot ban words."],
        ["D", "A sign-in risk policy reacts to risky sign-ins by requiring MFA or blocking access. It does not evaluate new passwords."]
      ],
      concept: "Microsoft Entra password protection rejects passwords that match the global or the custom banned password list.",
      takeaway: "Ban a company name in passwords: add it to the custom banned password list in Password protection.",
      refs: [
        ["Microsoft Learn: Configure custom password protection lists", "https://learn.microsoft.com/entra/identity/authentication/tutorial-configure-custom-password-protection"],
        ["Microsoft Learn: Eliminate bad passwords with Microsoft Entra Password Protection", "https://learn.microsoft.com/entra/identity/authentication/concept-password-ban-bad"]
      ]
    }
  },
  {
    id: "Q155", source: 155, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-password-policy", caseOrder: 1,
    stem: [
      "Solution: Implement pass-through authentication and modify the password settings from the Default Domain Policy in Active Directory.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "With pass-through authentication, Azure AD (Microsoft Entra ID) does not check passwords itself. It passes each sign-in to an authentication agent on an on-premises server, and the agent validates the password against an Active Directory domain controller. If Active Directory becomes unavailable, nobody can validate the password and sign-ins to Microsoft 365 fail, so the first requirement is not met.",
        "The second requirement would be met: setting the minimum password length to 10 in the Default Domain Policy applies to all domain accounts, and pass-through authentication enforces the on-premises password policy at sign-in. Because one requirement fails, the solution does not meet the goal."
      ],
      wrong: [
        ["A", "Pass-through authentication depends on on-premises domain controllers at every sign-in, so users cannot authenticate to Microsoft 365 while Active Directory is unavailable."]
      ],
      concept: "Pass-through authentication validates passwords on-premises at sign-in time, while password hash synchronization lets the cloud validate them on its own.",
      takeaway: "Requirement to sign in during an Active Directory outage: password hash synchronization. Pass-through authentication fails it.",
      refs: [
        ["Microsoft Learn: Pass-through authentication", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta"],
        ["Microsoft Learn: Authentication for Microsoft Entra hybrid identity solutions", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"]
      ]
    }
  },
  {
    id: "Q156", source: 156, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-password-policy", caseOrder: 2,
    stem: [
      "Solution: Implement password hash synchronization and configure password protection in the Azure AD tenant.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The reference answer is A (Yes). Password hash synchronization copies a hash of each user's password hash to Azure AD (Microsoft Entra ID), which then validates sign-ins in the cloud without contacting Active Directory. Users can therefore still authenticate to Microsoft 365 when Active Directory becomes unavailable, which meets the first requirement.",
        "For the password requirement, the reference answer credits Azure AD password protection, the tenant's control over password strength. Password protection checks every password change and reset against the global and custom banned password lists, and with its on-premises agents the same check applies to password changes on the domain controllers. Its settings are the banned password lists and smart lockout. The setting that fixes a minimum length for synchronized users is the Minimum password length of the Active Directory password policy, such as the one in the Default Domain Policy."
      ],
      wrong: [
        ["B", "The reference answer treats both requirements as met: password hash synchronization keeps cloud sign-in working during an Active Directory outage, and password protection is configured as the control on password strength."]
      ],
      concept: "Password hash synchronization is cloud authentication, so sign-ins to Microsoft 365 do not depend on Active Directory being available.",
      takeaway: "Survive an Active Directory outage: password hash synchronization. Password protection bans weak passwords; the length rule lives in the password policy.",
      refs: [
        ["Microsoft Learn: What is password hash synchronization?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"],
        ["Microsoft Learn: Eliminate bad passwords with Microsoft Entra Password Protection", "https://learn.microsoft.com/entra/identity/authentication/concept-password-ban-bad"]
      ]
    }
  },
  {
    id: "Q157", source: 157, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-password-policy", caseOrder: 3,
    stem: [
      "Solution: Implement pass-through authentication and configure password protection in the Azure AD tenant.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Pass-through authentication needs the on-premises environment at every sign-in: the authentication agents validate each password against an Active Directory domain controller. When Active Directory becomes unavailable, users can no longer authenticate to Microsoft 365, so the first requirement fails whatever is configured for passwords.",
        "Password protection only checks new passwords against banned password lists and does not change where sign-ins are validated. With one requirement failing, the solution does not meet the goal."
      ],
      wrong: [
        ["A", "Pass-through authentication relies on on-premises domain controllers to validate passwords, so sign-ins fail while Active Directory is unavailable."]
      ],
      concept: "Pass-through authentication keeps password validation on-premises, so it cannot work without Active Directory.",
      takeaway: "Any solution with pass-through authentication fails the requirement to authenticate while Active Directory is unavailable.",
      refs: [
        ["Microsoft Learn: Pass-through authentication", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta"],
        ["Microsoft Learn: Authentication for Microsoft Entra hybrid identity solutions", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"]
      ]
    }
  },
  {
    id: "Q158", source: 158, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-password-policy", caseOrder: 4,
    stem: [
      "Solution: Implement password hash synchronization and modify the password settings from the Default Domain Policy in Active Directory.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Password hash synchronization stores a hash of each user's password hash in Azure AD (Microsoft Entra ID), which validates sign-ins in the cloud. If Active Directory becomes unavailable, users can still authenticate to Microsoft 365, so the first requirement is met.",
        "Synchronized users set and change their passwords in Active Directory, and with password hash synchronization the on-premises password policy overrides the cloud policy for them. The Default Domain Policy is the Group Policy object that holds the domain's password policy, so setting Minimum password length to 10 characters there makes every new domain password at least 10 characters long, and those passwords are what synchronization sends to the cloud. Both requirements are met."
      ],
      wrong: [
        ["B", "Both requirements are covered: cloud validation through password hash synchronization survives an Active Directory outage, and the domain password policy enforces the 10-character minimum for the synchronized accounts."]
      ],
      concept: "With password hash synchronization, sign-in happens in the cloud while the on-premises password policy governs the passwords of synchronized users.",
      takeaway: "Password hash synchronization plus a domain password policy (Default Domain Policy) covers both cloud sign-in during outages and password length.",
      refs: [
        ["Microsoft Learn: Implement password hash synchronization", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-password-hash-synchronization"],
        ["Microsoft Learn: Authentication for Microsoft Entra hybrid identity solutions", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"]
      ]
    }
  },
  {
    id: "Q159", source: 159, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "You have a hybrid deployment of Azure AD that contains the users shown in the following table.",
      { table: { head: ["Name", "Description"], rows: [
        ["User1", "Azure AD Connect sync account"],
        ["User2", "Contributor for Azure AD Connect Health"],
        ["User3", "Application administrator in Azure AD"]
      ] } },
      "You need to identify which users can perform the following tasks:",
      { list: ["View sync errors in Azure AD Connect Health.", "Configure Azure AD Connect Health settings."] },
      "Which user should you identify for each task? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "View sync errors in Azure AD Connect Health:", options: ["User1", "User2", "User3"] },
      { id: "f2", label: "Configure Azure AD Connect Health settings:", options: ["User1", "User2", "User3"] }
    ],
    answer: { f1: 1, f2: 1 },
    explanation: {
      correct: [
        "Access to Azure AD Connect Health (Microsoft Entra Connect Health) is granted with its own role-based access control. It has three built-in roles: Owner manages access, views all information and changes settings; Contributor views all information, such as alerts and sync errors, and changes settings, such as email notifications; Reader only views. Global Administrators always have full access.",
        "User2 is a Contributor for Connect Health, so User2 can both view the sync errors and configure the settings. No other user in the table has a Connect Health role."
      ],
      wrong: [
        ["User1", "The Azure AD Connect sync account is the service account that Azure AD Connect uses to write objects to the directory. It is not a Connect Health role and gives no access to the Connect Health portal."],
        ["User3", "Application Administrator manages app registrations and enterprise applications. Connect Health access comes only from its Owner, Contributor and Reader roles or from Global Administrator."]
      ],
      concept: "Connect Health uses its own Owner, Contributor and Reader roles, and Contributor can view everything and change settings but cannot manage access.",
      takeaway: "Connect Health: Reader views, Contributor views and configures, Owner also grants access.",
      refs: [["Microsoft Learn: Microsoft Entra Connect Health operations", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-health-operations"]]
    }
  },
  {
    id: "Q160", source: 160, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Basic",
    stem: [
      "Your company has three main offices and one branch office. The branch office is used for research.",
      "The company plans to implement a Microsoft 365 tenant and to deploy multi-factor authentication.",
      "You need to recommend a Microsoft 365 solution to ensure that multi-factor authentication is enforced only for users in the branch office.",
      "What should you include in the recommendation?"
    ],
    options: [
      { key: "A", text: "Azure AD password protection" },
      { key: "B", text: "a Microsoft Intune device configuration profile" },
      { key: "C", text: "a Microsoft Intune device compliance policy" },
      { key: "D", text: "Azure AD conditional access" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Conditional Access applies access requirements to a chosen set of sign-ins. A policy can target the branch office users, for example through a group that contains them, or a named location with the public IP ranges of the branch office, and grant access only with **Require multifactor authentication**. Users in the main offices are not in the policy's scope, so MFA is enforced only for the branch office."
      ],
      wrong: [
        ["A", "Password protection blocks weak and banned passwords. It cannot require MFA."],
        ["B", "A device configuration profile applies settings to managed devices. It does not decide how users authenticate to Microsoft 365."],
        ["C", "A compliance policy evaluates whether devices meet requirements. Compliance can be used as a condition in Conditional Access, but by itself it does not enforce MFA for a set of users."]
      ],
      concept: "Conditional Access policies apply grant controls such as MFA to the users, locations and apps you select.",
      takeaway: "MFA for only some users or places: a Conditional Access policy scoped by group or named location.",
      refs: [
        ["Microsoft Learn: What is Conditional Access?", "https://learn.microsoft.com/entra/identity/conditional-access/overview"],
        ["Microsoft Learn: Conditional Access network and location assignments", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"]
      ]
    }
  }
);
