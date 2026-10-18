/* MS-102 question bank, part 6: questions 81 to 96 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q081", source: 81, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory forest named contoso.com. The forest contains the following domains:",
      { list: ["Contoso.com", "East.contoso.com"] },
      "The forest contains the users shown in the following table.",
      { table: { head: ["Name", "UPN suffix"], rows: [
        ["User1", "Contoso.com"],
        ["User2", "East.contoso.com"],
        ["User3", "Fabrikam.com"]
      ] } },
      "The forest syncs to an Azure AD tenant named contoso.com as shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q081-azure-ad-connect-status.png", alt: "Azure AD Connect page in the Azure portal. Provision from Active Directory: Azure AD Connect cloud provisioning, 'This feature allows you to manage provisioning from the cloud', link Manage provisioning (Preview). Azure AD Connect sync: Sync Status Enabled, Last Sync Less than 1 hour ago, Password Hash Sync Disabled. User sign-in: Federation Disabled, 0 domains; Seamless single sign-on Enabled, 1 domain; Pass-through authentication Enabled, 2 agents." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can authenticate to Azure AD by using a username of user1@contoso.com." },
      { text: "User2 can authenticate to Azure AD by using a username of user2@contoso.com." },
      { text: "User3 can authenticate to Azure AD by using a username of user3@contoso.com." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "A synced user signs in to Azure AD (Microsoft Entra ID) with the user principal name (UPN) that Azure AD Connect copies from the on-premises `userPrincipalName` attribute. The exhibit shows that sync is enabled and that users sign in with pass-through authentication, so the password is checked by the on-premises domain controllers, but the username they type must still be their own UPN.",
        "User1 has the UPN suffix Contoso.com, so the UPN is user1@contoso.com and User1 can sign in with that name (Yes). User2's UPN is user2@east.contoso.com. East.contoso.com is a child domain of contoso.com, but a UPN is matched as a whole string, so user2@contoso.com is simply not User2's sign-in name (No). User3's UPN uses the suffix Fabrikam.com, so User3 signs in as user3@fabrikam.com if that domain is verified in the tenant, or with an onmicrosoft.com name if it is not, never as user3@contoso.com (No)."
      ],
      wrong: [
        ["Statement 1 — No", "User1's UPN suffix matches the tenant's verified domain contoso.com, and pass-through authentication is enabled with two agents, so nothing prevents User1 from signing in as user1@contoso.com."],
        ["Statement 2 — Yes", "Belonging to a child domain of contoso.com does not create an extra sign-in name. The sign-in name is the UPN, user2@east.contoso.com."],
        ["Statement 3 — Yes", "The forest root domain plays no part in the sign-in name. User3's UPN ends in fabrikam.com, so user3@contoso.com does not exist as a username."]
      ],
      concept: "Synced users authenticate to Azure AD with their UPN, whatever authentication method (password hash sync, pass-through authentication or federation) validates the password.",
      takeaway: "Read the UPN suffix column: the username a synced user can use is exactly the on-premises UPN, not the forest name or a parent domain.",
      refs: [
        ["Microsoft Learn: Microsoft Entra UserPrincipalName population", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname"],
        ["Microsoft Learn: User sign-in with Microsoft Entra pass-through authentication", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta"]
      ]
    }
  },
  {
    id: "Q082", source: 82, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain. The domain contains the servers shown in the following table.",
      { table: { head: ["Name", "Operating system", "Configuration"], rows: [
        ["Server1", "Windows Server 2022", "Domain controller"],
        ["Server2", "Windows Server 2016", "Member server"],
        ["Server3", "Server Core installation of Windows Server 2022", "Member server"]
      ] } },
      "You purchase a Microsoft 365 E5 subscription.",
      "You need to implement Azure AD Connect cloud sync.",
      "What should you install first and on which server? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Install:", options: ["The Azure AD Application Proxy connector", "Azure AD Connect", "The Azure AD Connect provisioning agent", "Active Directory Federation Services (AD FS)"] },
      { id: "f2", label: "Server:", options: ["Server1 only", "Server2 only", "Server3 only", "Server1 or Server2 only", "Server1 or Server3 only", "Server1, Server2, or Server3"] }
    ],
    answer: { f1: 2, f2: 3 },
    explanation: {
      correct: [
        "Azure AD Connect cloud sync (now Microsoft Entra Cloud Sync) keeps the synchronization engine and its configuration in the cloud. The only thing you install on-premises is a lightweight agent, the Azure AD Connect provisioning agent (now the Microsoft Entra provisioning agent), which connects outbound to Microsoft Entra ID and reads Active Directory. It is the first component to install; the sync configuration is then created in the portal.",
        "The agent needs a domain-joined server that runs Windows Server 2016 or later, and installing it on a domain controller is supported. Installing the cloud provisioning agent on Windows Server Core is not supported. Server1 (Windows Server 2022, domain controller) and Server2 (Windows Server 2016, member server) both qualify, while Server3 is a Server Core installation, so the answer is Server1 or Server2 only."
      ],
      wrong: [
        ["The Azure AD Application Proxy connector", "The Application Proxy connector publishes on-premises web applications for remote access. It does not synchronize identities."],
        ["Azure AD Connect", "Azure AD Connect (Connect Sync) is the full synchronization server with its own database and sync engine. Cloud sync replaces it with the provisioning agent."],
        ["Active Directory Federation Services (AD FS)", "AD FS is a federated sign-in method. It has nothing to do with provisioning users to the cloud."],
        ["Server1 only / Server2 only", "Both servers meet the requirements, so limiting the choice to one of them is wrong."],
        ["Any option that includes Server3", "Server3 runs a Server Core installation, which the provisioning agent does not support, even though its version, Windows Server 2022, is recent enough."]
      ],
      concept: "Cloud sync needs only the provisioning agent on-premises, on a domain-joined Windows Server 2016 or later with Desktop Experience; a domain controller is a supported host.",
      takeaway: "Cloud sync: install the provisioning agent first, on Windows Server 2016 or later, not Server Core.",
      refs: [
        ["Microsoft Learn: Prerequisites for Microsoft Entra Cloud Sync", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/how-to-prerequisites"],
        ["Microsoft Learn: What is Microsoft Entra Cloud Sync?", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync"]
      ]
    }
  },
  {
    id: "Q083", source: 83, type: "yesno",
    domain: "identity", topic: "Conditional Access", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint Online site named Site1 and the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Device"], rows: [
        ["User1", "Group1", "Device1"],
        ["User2", "Group1", "Device2, Device3"]
      ] } },
      "The devices are configured as shown in the following table.",
      { table: { head: ["Name", "Platform", "Azure AD join type"], rows: [
        ["Device1", "Windows 11", "None"],
        ["Device2", "Windows 10", "Joined"],
        ["Device3", "Android", "Registered"]
      ] } },
      "You have a Conditional Access policy named CAPolicy1 that has the following settings:",
      { heading: "Assignments" },
      { list: ["Users or workload identities: Group1", "Cloud apps or actions: Office 365 SharePoint Online"] },
      { heading: "Conditions" },
      { list: ["Filter for devices: Exclude filtered devices from the policy", 'Rule syntax: `device.displayName -startsWith "Device"`'] },
      { heading: "Access controls" },
      { heading: "Grant" },
      { list: ["Grant: Block access", "Session: 0 controls selected"] },
      "Enable policy: On",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can access Site1 from Device1." },
      { text: "User2 can access Site1 from Device2." },
      { text: "User2 can access Site1 from Device3." }
    ],
    answer: [false, true, true],
    explanation: {
      correct: [
        "CAPolicy1 blocks Group1, which contains both users, from SharePoint Online, except on devices that match the filter. The filter for devices condition evaluates the attributes of the device object in Azure AD (Microsoft Entra ID). For a device that is not registered, every device property is treated as null, so a filter with a positive operator such as `startsWith` cannot match it: the filter is not applied to unregistered devices.",
        "Device1 has the join type None, so it has no device object and no displayName to compare. It is not excluded, the block applies and User1 cannot reach Site1 (No). Device2 is Azure AD joined and Device3 is Azure AD registered, so both exist in the directory; their display names, Device2 and Device3, start with \"Device\", so both are excluded from the policy and User2 can access Site1 from either of them (Yes, Yes)."
      ],
      wrong: [
        ["Statement 1 — Yes", "The name Device1 starts with \"Device\", but that name only exists on the local computer. The policy can only read attributes of a registered device, so the exclusion never matches Device1 and the block applies."],
        ["Statement 2 — No", "Device2 is joined, its displayName matches the rule, and matching devices are excluded from the block."],
        ["Statement 3 — No", "Registration is enough for the filter to read the device. An Azure AD registered Android device named Device3 matches the rule and is excluded, so the block does not apply."]
      ],
      concept: "Filter for devices works on registered device objects: with positive operators an unregistered device never matches, with negative operators it always does.",
      takeaway: "An exclusion based on a positive device filter does not protect unregistered devices from a block policy.",
      logic: "First ask whether each device exists in Azure AD (join type Joined or Registered). Only then compare its name with the rule.",
      refs: [["Microsoft Learn: Filter for devices as a condition in Conditional Access policy", "https://learn.microsoft.com/entra/identity/conditional-access/concept-condition-filters-for-devices"]]
    }
  },
  {
    id: "Q084", source: 84, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "Conditional Access is configured to block high-risk sign-ins for all users.",
      "All users are in France and are registered for multi-factor authentication (MFA).",
      "Users in the media department will travel to various countries during the next month.",
      "You need to ensure that if the media department users are blocked from signing in while traveling, the users can remediate the issue without administrator intervention.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "an exclusion group" },
      { key: "B", text: "the MFA registration policy" },
      { key: "C", text: "named locations" },
      { key: "D", text: "self-service password reset (SSPR)" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Sign-ins from countries the users have never used are likely to raise risk detections such as atypical travel, so the media users may hit the block. A block cannot be satisfied inside the sign-in, so the users need a recovery path outside of it. Self-service password reset (SSPR) is that path: the user goes to the reset portal, proves their identity with the methods they already registered, and sets a new password without contacting the help desk or an administrator.",
        "A password reset through SSPR also remediates user risk in Identity Protection, so the account is brought back to a safe state without an administrator. Because all users are already registered for MFA, which with combined registration also provides the methods SSPR uses, enabling SSPR for them is all that is needed."
      ],
      wrong: [
        ["A", "Excluding the media users from the policy is an administrator decision that removes their protection. It prevents the block rather than letting the users remediate it themselves."],
        ["B", "The MFA registration policy only makes users register for MFA, and all users are already registered. It gives a blocked user no way to recover."],
        ["C", "Named locations describe IP ranges or countries for Conditional Access. The users travel to various unknown countries, and marking locations does not give a blocked user any self-service action."]
      ],
      concept: "Self-remediation of risk needs users who can prove their identity themselves; a password reset through SSPR remediates user risk without an administrator.",
      takeaway: "Users must remediate a risk block on their own: enable SSPR (and keep them registered for MFA).",
      refs: [
        ["Microsoft Learn: Remediate risks and unblock users in Microsoft Entra ID Protection", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-remediate-unblock"],
        ["Microsoft Learn: How self-service password reset works", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-howitworks"]
      ]
    }
  },
  {
    id: "Q085", source: 85, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the following user:",
      { list: ["Name: User1", "UPN: [email protected]", "Email address: user1@marketing.contoso.com", "MFA enrollment status: Disabled"] },
      "When User1 attempts to sign in to Outlook on the web by using the user1@marketing.contoso.com email address, the user cannot sign in.",
      "You need to ensure that User1 can sign in to Outlook on the web by using user1@marketing.contoso.com.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Assign an MFA registration policy to User1." },
      { key: "B", text: "Reset the password of User1." },
      { key: "C", text: "Add an alternate email address for User1." },
      { key: "D", text: "Modify the UPN of User1." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Outlook on the web signs users in through Azure AD (Microsoft Entra ID), and the sign-in name there is the user principal name (UPN), not the primary email address. User1's email address is user1@marketing.contoso.com, but the UPN is a different value, so typing the email address at the sign-in page finds no account.",
        "Changing User1's UPN to user1@marketing.contoso.com makes the sign-in name and the email address the same, which is also Microsoft's recommendation to avoid this confusion. The domain marketing.contoso.com must be a verified domain in the tenant, which it already is if it is used for the user's email address."
      ],
      wrong: [
        ["A", "MFA enrollment is unrelated: the sign-in fails before any second factor is requested, because the name that was entered is not a UPN."],
        ["B", "The password is not the problem. A new password still has to be entered for the existing UPN, not for the email address."],
        ["C", "An alternate email address is contact information, used for example for password reset notifications. It cannot be used as a sign-in name."]
      ],
      concept: "Microsoft 365 sign-in uses the UPN; when users sign in with what they think of as their email address, the UPN must match that address.",
      takeaway: "Users cannot sign in with their email address: make the UPN equal to the email address.",
      refs: [
        ["Microsoft Learn: Change a user name and email address", "https://learn.microsoft.com/microsoft-365/admin/add-users/change-a-user-name-and-email-address"],
        ["Microsoft Learn: Microsoft Entra UserPrincipalName population", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname"]
      ]
    }
  },
  {
    id: "Q086", source: 86, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Advanced",
    stem: [
      "Your network contains an Active Directory domain named fabrikam.com. The domain contains the objects shown in the following table.",
      { table: { head: ["Name", "Type", "In organizational unit (OU)"], rows: [
        ["User1", "User", "OU1"],
        ["User2", "User", "OU1"],
        ["Group1", "Security Group - Global", "OU1"],
        ["User3", "User", "OU2"],
        ["Group2", "Security Group - Global", "OU2"]
      ] } },
      "The groups have the members shown in the following table.",
      { table: { head: ["Group", "Members"], rows: [
        ["Group1", "User1"],
        ["Group2", "User2, User3, Group1"]
      ] } },
      "You are configuring synchronization between fabrikam.com and an Azure AD tenant.",
      "You configure the Domain/OU Filtering settings in Azure AD Connect as shown in the Domain/OU Filtering exhibit (Click the Domain/OU Filtering tab.)",
      { image: "q086-domain-ou-filtering.png", alt: "Microsoft Azure Active Directory Connect wizard, Domain and OU filtering page. Directory: fabrikam.com. Option selected: Sync selected domains and OUs. In the tree under fabrikam.com only OU2 is checked; Builtin, Computers, Domain Controllers, ForeignSecurityPrincipals, Infrastructure, LostAndFound, Managed Service Accounts, OU1, Program Data, System and Users are cleared." },
      "You configure the Filtering settings in Azure AD Connect as shown in the Filtering exhibit. (Click the Filtering tab.)",
      { image: "q086-filtering.png", alt: "Microsoft Azure Active Directory Connect wizard, Filter users and devices page. Text: For a pilot deployment, specify a group containing your users and devices that will be synchronized. Nested groups are not supported and will be ignored. Option selected: Synchronize selected. Forest fabrikam.com, Group CN=Group2,OU=OU2,DC=fabrikam,DC=com, resolved (green check)." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User2 will synchronize to Azure AD." },
      { text: "Group2 will synchronize to Azure AD." },
      { text: "User3 will synchronize to Azure AD." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "Two filters apply, and an object must pass both. OU filtering is evaluated first: only objects in OU2 are in scope. Group-based filtering then keeps only objects that are **direct members** of Group2. Nested membership is not resolved, and when a group is a member only the group itself is added, not its members.",
        "User2 is a direct member of Group2 but sits in OU1, which is not selected, so it is filtered out (No). Group2 is in OU2, but it is the filtering group, not a member of itself, so it does not pass the group filter and is not synchronized (No). User3 is in OU2 and a direct member of Group2, so it passes both filters (Yes). Group1 and User1 fail as well: both are in OU1, and User1 is only a nested member."
      ],
      wrong: [
        ["Statement 1 — Yes", "Membership of Group2 is not enough. User2 is in OU1, and OU filtering removes it before group filtering is considered."],
        ["Statement 2 — Yes", "Being in a selected OU is not enough either. With group-based filtering, only direct members of Group2 are synchronized, and Group2 is not a member of itself."],
        ["Statement 3 — No", "User3 is in the selected OU2 and is a direct member of Group2, so it meets both conditions."]
      ],
      concept: "Azure AD Connect applies OU filtering before group-based filtering, and group-based filtering syncs only direct members of the pilot group.",
      takeaway: "With a pilot group, an object syncs only if it is in a selected OU and is itself a direct member of the group.",
      logic: "For each object check two things in order: is its OU checked, and is it listed directly in Group2's members?",
      refs: [
        ["Microsoft Learn: Customize an installation of Microsoft Entra Connect (sync filtering based on groups)", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-install-custom"],
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"]
      ]
    }
  },
  {
    id: "Q087", source: 87, type: "dropdown",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "From Azure AD Identity Protection on August 1, you configure a Multifactor authentication registration policy that has the following settings:",
      { list: ["Assignments: All users", "Controls: Require Azure AD multifactor authentication registration", "Enforce Policy: On"] },
      "On August 3, you create two users named User1 and User2.",
      "Users authenticate by using Azure Multi-Factor Authentication (MFA) for the first time on the dates shown in the following table.",
      { table: { head: ["User", "Date"], rows: [
        ["User1", "August 5"],
        ["User2", "August 7"]
      ] } },
      "By which dates will User1 and User2 be forced to complete their Azure MFA registration? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1:", options: ["August 6", "August 17", "August 19", "September 3", "September 5"] },
      { id: "f2", label: "User2:", options: ["August 8", "August 17", "August 19", "August 21", "September 7"] }
    ],
    answer: { f1: 2, f2: 3 },
    explanation: {
      correct: [
        "The Identity Protection MFA registration policy prompts each user in scope to register the next time they sign in interactively. From that first prompt the user has 14 days in which registration can be skipped; at the end of the period the user must register before the sign-in can complete.",
        "The 14 days count from each user's own first sign-in, not from the day the policy was enabled or the account was created. User1 first signs in on August 5, so registration is forced by August 19. User2 first signs in on August 7, so registration is forced by August 21."
      ],
      wrong: [
        ["August 17", "This is 14 days after August 3, when the accounts were created. The period starts at the first interactive sign-in."],
        ["August 6 / August 8", "One day after the first sign-in. Users get 14 days, not one."],
        ["September dates", "These correspond to about a month. The registration grace period is 14 days."],
        ["User2: August 19", "That is User1's deadline. Each user's period starts from their own first sign-in, August 7 for User2."]
      ],
      concept: "The MFA registration policy gives each user a 14-day grace period that starts at their first interactive sign-in after the policy applies to them.",
      takeaway: "MFA registration policy deadline = first sign-in date + 14 days, per user.",
      refs: [["Microsoft Learn: Configure the MFA registration policy", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-mfa-policy"]]
    }
  },
  {
    id: "Q088", source: 88, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your on-premises network contains an Active Directory domain.",
      "You have a Microsoft 365 subscription.",
      "You need to sync the domain with the subscription. The solution must meet the following requirements:",
      { list: ["On-premises Active Directory password complexity policies must be enforced.", "Users must be able to use self-service password reset (SSPR) in Azure AD."] },
      "What should you use?"
    ],
    options: [
      { key: "A", text: "password hash synchronization" },
      { key: "B", text: "Azure AD Identity Protection" },
      { key: "C", text: "Azure AD Seamless Single Sign-On (Azure AD Seamless SSO)" },
      { key: "D", text: "pass-through authentication" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "With pass-through authentication, Azure AD (Microsoft Entra ID) does not validate passwords itself: an agent on-premises passes each sign-in to a domain controller. The password, and the account and password policies of on-premises Active Directory, are therefore checked by Active Directory at every sign-in, which is the method Microsoft names for organizations that must enforce on-premises password policies.",
        "SSPR works with pass-through authentication through password writeback in Azure AD Connect. When a user resets a password in the cloud, writeback sets it in Active Directory, which checks it against the on-premises policy, including complexity, history and age, before accepting it. Both requirements are met."
      ],
      wrong: [
        ["A", "With password hash synchronization, Azure AD validates the password against the synced hash, so on-premises policies are not evaluated when users sign in (an expired on-premises password, for example, keeps working in the cloud by default). The question asks for on-premises enforcement, which points to pass-through authentication."],
        ["B", "Identity Protection detects and responds to risky sign-ins and users. It is not a synchronization or authentication method and does not apply on-premises password policies."],
        ["C", "Seamless SSO signs domain-joined users in automatically with Kerberos. It is an add-on to password hash sync or pass-through authentication and does not decide where passwords are validated."]
      ],
      concept: "Pass-through authentication validates passwords against on-premises Active Directory, and password writeback lets SSPR resets in the cloud be checked against the on-premises password policy.",
      takeaway: "On-premises password policy must apply: pass-through authentication, with password writeback for SSPR.",
      refs: [
        ["Microsoft Learn: Authentication for Microsoft Entra hybrid identity solutions", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"],
        ["Microsoft Learn: On-premises password writeback with self-service password reset", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  },
  {
    id: "Q089", source: 89, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "Users access Microsoft 365 from both their laptop and a corporate Virtual Desktop Infrastructure (VDI) solution.",
      "From Azure AD Identity Protection, you enable a sign-in risk policy.",
      "Users report that when they use the VDI solution, they are regularly blocked when they attempt to access Microsoft 365.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "the Tenant restrictions settings in Azure AD" },
      { key: "B", text: "a trusted location" },
      { key: "C", text: "a Conditional Access policy exclusion" },
      { key: "D", text: "the Microsoft 365 network connectivity settings" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "A VDI session reaches Microsoft 365 from the IP addresses of the VDI hosts, which can be in a different place than the user's laptop. Switching between the two looks like a change of location and network, which raises sign-in risk detections, and the sign-in risk policy then blocks the user.",
        "Defining the VDI egress IP ranges as a trusted named location tells Identity Protection that these addresses belong to the organization. Configured trusted network locations are used by Identity Protection in some risk detections to reduce false positives, so sign-ins from the VDI stop being treated as risky while the policy keeps protecting other sign-ins."
      ],
      wrong: [
        ["A", "Tenant restrictions control which tenants users can sign in to from the corporate network. They do not change how sign-in risk is calculated."],
        ["C", "An exclusion would remove the users from the policy for every sign-in, from any location. It removes the protection instead of fixing the false positives."],
        ["D", "The network connectivity settings in the Microsoft 365 admin center describe office locations to assess and improve network performance. Identity Protection does not use them."]
      ],
      concept: "Trusted named locations feed into Identity Protection's risk detections and reduce false positives from known corporate networks.",
      takeaway: "False risk detections from corporate egress IPs (VDI, proxies): mark those IP ranges as a trusted location.",
      refs: [
        ["Microsoft Learn: Risk policies in Microsoft Entra ID Protection", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-risk-policies"],
        ["Microsoft Learn: Network assignment in Conditional Access (trusted locations)", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"]
      ]
    }
  },
  {
    id: "Q090", source: 90, type: "dropdown",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "Azure AD Password Protection is configured as shown in the following exhibit.",
      { image: "q090-password-protection.png", alt: "Azure AD Password protection settings. Custom smart lockout: Lockout threshold 15, Lockout duration in seconds 600. Custom banned passwords: Enforce custom list Yes; Custom banned password list: 3hundred, Eleven, Falcon, Project, Tailspin. Password protection for Windows Server Active Directory: Enable password protection on Windows Server Active Directory Yes; Mode Enforced." },
      "User1 attempts to update their password to the following passwords:",
      { list: ["`F@lcon`", "`Project22`", "`T4il$pin45dg4`"] },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "[answer choice] will be accepted as a password.", options: ["Only T4il$pin45dg4", "Only F@lcon and T4il$pin45dg4", "Only Project22 and T4il$pin45dg4", "F@lcon, Project22, and T4il$pin45dg4"] },
      { id: "f2", label: "If User1 enters the same wrong password 15 times, waits 11 minutes, and then enters the same wrong password again, the user [answer choice].", options: ["will be locked out", "will trigger a user risk", "can attempt to sign in again immediately"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "**Box 1: Only T4il$pin45dg4.** Password Protection first normalizes a new password (lowercase, and the substitutions 0 to o, 1 to l, $ to s, @ to a), then looks for banned terms with fuzzy matching at an edit distance of one. Each banned term found scores one point, each remaining character scores one point, and a password needs at least five points. `F@lcon` becomes falcon, which is the banned term Falcon: 1 point, rejected. `Project22` becomes project22: Project plus 2 and 2 is 3 points, rejected. `T4il$pin45dg4` becomes t4ilspin45dg4; t4ilspin is one edit away from Tailspin, which scores 1 point, and the characters 4, 5, d, g and 4 add 5 more: 6 points, accepted.",
        "**Box 2: will be locked out.** The lockout threshold is 15 failed attempts and the lockout lasts 600 seconds, which is 10 minutes, so after 11 minutes the first lockout has ended. Smart lockout then locks the account again after each subsequent failed attempt: if the first sign-in after a lockout expires also fails, the account locks out again, for a longer period. The reference answer is **will be locked out**, which counts each of the attempts as a failed sign-in. Smart lockout also tracks the last three bad password hashes, so in a cloud-authenticated tenant entering the identical wrong password again does not by itself increment the lockout counter; keep that rule in mind for questions that test it directly."
      ],
      wrong: [
        ["Only F@lcon and T4il$pin45dg4", "`@` is normalized to a, so F@lcon is exactly the banned term Falcon and scores only 1 point."],
        ["Only Project22 and T4il$pin45dg4", "Project22 contains the banned term Project; with the two digits it scores 3 points, below the required 5."],
        ["F@lcon, Project22, and T4il$pin45dg4", "Two of the three passwords score fewer than five points and are rejected."],
        ["will trigger a user risk", "Failed passwords are handled by smart lockout. The lockout settings shown do not raise an Identity Protection user risk."],
        ["can attempt to sign in again immediately", "User1 may try again once the 10-minute lockout has ended, but in the reference answer that attempt fails and locks the account again."]
      ],
      concept: "Password Protection scores normalized passwords against the global and custom banned lists (five points needed), and smart lockout locks an account at the threshold and again after each failure that follows a lockout.",
      takeaway: "Normalize, find banned terms (1 point each), count the rest (1 point per character), need 5. Lockout duration is in seconds.",
      refs: [
        ["Microsoft Learn: Password protection in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-password-ban-bad"],
        ["Microsoft Learn: Prevent attacks using smart lockout", "https://learn.microsoft.com/entra/identity/authentication/howto-password-smart-lockout"]
      ]
    }
  },
  {
    id: "Q091", source: 91, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "You have a hybrid deployment of Microsoft 365 that contains the users shown in the following table.",
      { table: { head: ["Name", "Source", "Last sign in"], rows: [
        ["User1", "Azure AD", "Yesterday"],
        ["User2", "Active Directory Domain Services (AD DS)", "Two days ago"],
        ["User3", "Active Directory Domain Services (AD DS)", "Never"]
      ] } },
      "Azure AD Connect has the following settings:",
      { list: ["Password Hash Sync: Enabled", "Pass-through authentication: Enabled"] },
      "You need to identify which users will be able to authenticate by using Azure AD if connectivity between on-premises Active Directory and the internet is lost.",
      "Which users should you identify?"
    ],
    options: [
      { key: "A", text: "none" },
      { key: "B", text: "User1 only" },
      { key: "C", text: "User1 and User2 only" },
      { key: "D", text: "User1, User2, and User3" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "When both features are enabled, pass-through authentication is the sign-in method for synced users and password hash synchronization only runs in the background as a possible backup. Pass-through authentication needs the on-premises agents to reach Azure AD and the domain controllers; if on-premises Active Directory loses its internet connection, sign-ins of synced users cannot be validated. Failover to password hash synchronization does not happen automatically: an administrator has to switch the sign-in method in Azure AD Connect.",
        "User1 is a cloud account whose source is Azure AD, so its password is validated by Azure AD itself and the on-premises outage does not affect it. User2 and User3 come from AD DS and depend on pass-through authentication, so only User1 can authenticate. The Last sign in column does not change the outcome."
      ],
      wrong: [
        ["A", "Cloud-only accounts never depend on on-premises infrastructure, so User1 can still sign in."],
        ["C", "User2 is synced from AD DS. Having signed in before does not help: every sign-in is passed through to the on-premises domain controllers."],
        ["D", "Password hash sync is enabled, but it is not used for sign-in until an administrator switches to it. User2 and User3 cannot authenticate during the outage."]
      ],
      concept: "With pass-through authentication as the sign-in method, password hash synchronization is only a manual backup; cloud-only users are unaffected by on-premises outages.",
      takeaway: "PTA plus PHS enabled: synced users still fail during an on-premises outage until someone switches to PHS.",
      refs: [
        ["Microsoft Learn: Authentication for Microsoft Entra hybrid identity solutions", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"],
        ["Microsoft Learn: Pass-through authentication frequently asked questions", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta-faq"]
      ]
    }
  },
  {
    id: "Q092", source: 92, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Basic",
    stem: [
      "Your network contains an on-premises Active Directory domain named contoso.com.",
      "For all user accounts, the Logon Hours settings are configured to prevent sign-ins outside of business hours.",
      "You plan to sync contoso.com to an Azure AD tenant",
      "You need to recommend a solution to ensure that the logon hour restrictions apply when synced users sign in to Azure AD.",
      "What should you include in the recommendation?"
    ],
    options: [
      { key: "A", text: "pass-through authentication" },
      { key: "B", text: "conditional access policies" },
      { key: "C", text: "password synchronization" },
      { key: "D", text: "Azure AD Identity Protection policies" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Logon hours are an attribute of the on-premises account that only a domain controller evaluates. Pass-through authentication sends each Azure AD sign-in to an agent that validates it against Active Directory, so the on-premises account policy is enforced at the time of sign-in: access is denied when the account is disabled, locked out or expired, when the password has expired, or when the sign-in falls outside the allowed logon hours."
      ],
      wrong: [
        ["B", "Conditional Access has no condition that reads the on-premises Logon Hours setting, and there is no time-of-day condition that would reproduce it per user."],
        ["C", "With password hash synchronization, Azure AD validates the password itself and does not evaluate on-premises account restrictions such as logon hours."],
        ["D", "Identity Protection policies react to sign-in and user risk. They do not apply on-premises account settings."]
      ],
      concept: "Pass-through authentication enforces on-premises account states and sign-in hours on every Azure AD sign-in.",
      takeaway: "On-premises logon hours, account disabled or expired must apply in the cloud: pass-through authentication (or federation).",
      refs: [
        ["Microsoft Learn: Authentication for Microsoft Entra hybrid identity solutions", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"],
        ["Microsoft Learn: User sign-in with Microsoft Entra pass-through authentication", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta"]
      ]
    }
  },
  {
    id: "Q093", source: 93, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains three Active Directory forests. There are forests trust relationships between the forests.",
      "You create an Azure AD tenant.",
      "You plan to sync the on-premises Active Directory to Azure AD.",
      "You need to recommend a synchronization solution. The solution must ensure that the synchronization can complete successfully and as quickly as possible if a single server fails.",
      "What should you include in the recommendation?"
    ],
    options: [
      { key: "A", text: "one Azure AD Connect sync server and one Azure AD Connect sync server in staging mode" },
      { key: "B", text: "three Azure AD Connect sync servers and one Azure AD Connect sync server in staging mode" },
      { key: "C", text: "six Azure AD Connect sync servers and three Azure AD Connect sync servers in staging mode" },
      { key: "D", text: "three Azure AD Connect sync servers and three Azure AD Connect sync servers in staging mode" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "One Azure AD Connect sync server can connect to several Active Directory forests and synchronize all of them to a single Azure AD tenant. Only one sync server may be active, that is exporting, for a tenant; running one active server per forest against the same tenant is not a supported topology.",
        "For resilience you add a second server in staging mode. It imports and synchronizes the same data as the active server but exports nothing. If the active server fails, you switch the staging server to active mode and synchronization resumes almost immediately, with no reinstall. One active server plus one staging server therefore meets the requirement."
      ],
      wrong: [
        ["B", "Three active sync servers for one tenant is unsupported. Only one server may export to the tenant at a time, however many forests there are."],
        ["C", "Six active servers multiplies the unsupported configuration. The number of forests does not require more active servers."],
        ["D", "Three active servers is unsupported, and three staging servers are more than needed to survive the failure of a single server."]
      ],
      concept: "A single Azure AD Connect sync server handles multiple forests for one tenant; a staging-mode server is the warm standby for fast recovery.",
      takeaway: "Multi-forest to one tenant: one active Azure AD Connect server plus one in staging mode.",
      refs: [
        ["Microsoft Learn: Topologies for Microsoft Entra Connect", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-topologies"],
        ["Microsoft Learn: Microsoft Entra Connect: Staging server and disaster recovery", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-staging-server"]
      ]
    }
  },
  {
    id: "Q094", source: 94, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You have the retention policies shown in the following table.",
      { table: { head: ["Name", "Location", "Retain items for a specific period", "Start the retention period based on", "At the end of the retention period"], rows: [
        ["Policy1", "SharePoint sites", "1 years", "When items were created", "Delete items automatically"],
        ["Policy2", "SharePoint sites", "2 years", "When items were last modified", "Do nothing"]
      ] } },
      "Both policies are applied to a Microsoft SharePoint site named Site1 that contains a file named File1.docx.",
      "File1.docx was created on January 1, 2022 and last modified on January 31,2022. The file was NOT modified again.",
      "When will File1.docx be deleted automatically?"
    ],
    options: [
      { key: "A", text: "January 1, 2023" },
      { key: "B", text: "January 1, 2024" },
      { key: "C", text: "January 31, 2023" },
      { key: "D", text: "January 31, 2024" },
      { key: "E", text: "never" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "When several retention settings apply to the same item, the principles of retention decide the outcome, and the first principle is that retention wins over deletion. Policy1 would delete File1.docx one year after creation, on January 1, 2023. Policy2 retains the file for two years from its last modification, January 31, 2022, so until January 31, 2024. While Policy2's retention is in effect, Policy1's deletion is suspended.",
        "Policy2 does nothing at the end of its period, so it never deletes the file itself. Once its retention ends on January 31, 2024, nothing holds the file any longer and the suspended delete action of Policy1 takes effect. File1.docx is deleted on January 31, 2024."
      ],
      wrong: [
        ["A", "January 1, 2023 is when Policy1's deletion would be due, but Policy2 still retains the file then, and retention wins over deletion."],
        ["B", "This is two years from creation. Policy2 counts its two years from the last modification, January 31, 2022."],
        ["C", "This is one year from the last modification. Policy1 counts from creation, and Policy2 still retains the file in 2023."],
        ["E", "Policy2's Do nothing only means Policy2 itself deletes nothing. Policy1's delete action is postponed, not cancelled, and runs when the retention ends."]
      ],
      concept: "Principles of retention: retention takes precedence over deletion, and a postponed deletion runs once no retention setting holds the item any more.",
      takeaway: "Combine policies by taking the latest retention end date; if any policy deletes, the item is deleted on that date.",
      refs: [["Microsoft Learn: Learn about retention policies and retention labels (principles of retention)", "https://learn.microsoft.com/purview/retention"]]
    }
  },
  {
    id: "Q095", source: 95, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Group1", "Microsoft 365"],
        ["Group2", "Distribution"],
        ["Group3", "Mail-enabled security"],
        ["Group4", "Security"]
      ] } },
      "You plan to publish a sensitivity label named Label1.",
      "To which groups can you publish Label1?"
    ],
    options: [
      { key: "A", text: "Group1 only" },
      { key: "B", text: "Group1 and Group2 only" },
      { key: "C", text: "Group1 and Group4 only" },
      { key: "D", text: "Group1, Group2, and Group3 only" },
      { key: "E", text: "Group1, Group2, Group3, and Group4" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Sensitivity labels are published with a label policy, which is scoped to users and groups. The reference answer is D. It follows the rule documented for label policies when this question was written: a policy could be published to users and to mail-enabled groups, that is Microsoft 365 groups, distribution groups and mail-enabled security groups. Group1, Group2 and Group3 are all mail-enabled, while Group4 is a security group without an email address and was left out.",
        "Current Microsoft documentation also lists non-mail-enabled security groups among the supported groups. What has not changed is how publishing works: the label becomes visible only to the users in the policy's scope, groups are recommended over individual users, and a user removed from a group no longer receives the policy."
      ],
      wrong: [
        ["A", "Distribution groups and mail-enabled security groups can also be selected, not only Microsoft 365 groups."],
        ["B", "This leaves out Group3, a mail-enabled security group, which a label policy can target."],
        ["C", "This leaves out the mail-enabled groups Group2 and Group3 and, under the rule the reference answer follows, includes the security group Group4 that is not mail-enabled."],
        ["E", "Under the rule the reference answer follows, Group4, a security group without an email address, cannot be selected. Current documentation also lists non-mail-enabled security groups as supported."]
      ],
      concept: "Sensitivity label policies are published to users and groups; the question tests the mail-enabled group types that label policies have always supported.",
      takeaway: "Label policy targets in this question: Microsoft 365, distribution and mail-enabled security groups.",
      refs: [
        ["Microsoft Learn: Create and publish sensitivity labels", "https://learn.microsoft.com/purview/create-sensitivity-labels"],
        ["Microsoft Learn: Learn about sensitivity labels (what label policies can do)", "https://learn.microsoft.com/purview/sensitivity-labels"]
      ]
    }
  },
  {
    id: "Q096", source: 96, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint site named Site1 and a data loss prevention (DLP) policy named DLP1. DLP1 contains the rules shown in the following table.",
      { table: { head: ["Name", "Priority", "Action"], numeric: [1], rows: [
        ["Rule1", "0", "Notify users by using email and policy tips.\nCustomize the policy tip as Rule1 tip.\nDisable user overrides."],
        ["Rule2", "1", "Notify users by using email and policy tips.\nCustomize the policy tip as Rule2 tip.\nRestrict access to the content.\nDisable user overrides."],
        ["Rule3", "2", "Notify users by using email and policy tips.\nCustomize the policy tip as Rule3 tip.\nRestrict access to the content.\nEnable user overrides."],
        ["Rule4", "3", "Notify users by using email and policy tips.\nCustomize the policy tip as Rule4 tip.\nRestrict access to the content.\nDisable user overrides."]
      ] } },
      "Site1 contains the files shown in the following table.",
      { table: { head: ["Name", "Matched DLP rule"], rows: [
        ["File1.docx", "Rule1, Rule2, Rule3"],
        ["File2.docx", "Rule1, Rule3, Rule4"]
      ] } },
      "Which policy tips are shown for each file? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "File1.docx:", options: ["Rule1 tip only", "Rule2 tip only", "Rule3 tip only", "Rule1 tip and Rule2 tip only", "Rule1 tip, Rule2 tip, and Rule3 tip"] },
      { id: "f2", label: "File2.docx:", options: ["Rule1 tip only", "Rule3 tip only", "Rule4 tip only", "Rule1 tip and Rule4 tip only", "Rule1 tip, Rule3 tip, and Rule4 tip"] }
    ],
    answer: { f1: 1, f2: 2 },
    explanation: {
      correct: [
        "When content matches several rules, DLP evaluates them in priority order but enforces only the first rule that has the most restrictive action, and only the policy tip of that most restrictive, highest-priority rule is shown. This keeps users from seeing a cascade of tips. Restricting access without allowing overrides is more restrictive than restricting access with overrides, which in turn is more restrictive than only notifying.",
        "File1.docx matches Rule1 (notify only), Rule2 (restrict access, no overrides) and Rule3 (restrict access, overrides allowed). Rule2 is the most restrictive, so only the Rule2 tip is shown. File2.docx matches Rule1, Rule3 and Rule4. Rule3 has a higher priority than Rule4, but it allows overrides; Rule4 restricts access without overrides and is the most restrictive, so only the Rule4 tip is shown."
      ],
      wrong: [
        ["Rule1 tip only", "Rule1 has the highest priority (0), but it only notifies. Priority decides only between rules that are equally restrictive."],
        ["File1.docx: Rule3 tip only", "Rule3 restricts access but lets users override, which is less restrictive than Rule2."],
        ["File2.docx: Rule3 tip only", "Rule3 is evaluated before Rule4, but Rule4 is more restrictive because it does not allow overrides, so Rule4 is enforced."],
        ["Two or three tips", "Only one policy tip is shown for an item, the one from the rule that is enforced."]
      ],
      concept: "Among matched DLP rules, the most restrictive action wins, priority breaks ties, and only that rule's policy tip is displayed.",
      takeaway: "Rank matched rules: block without override, then block with override, then notify. Show the tip of the top one only.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Send email notifications and show policy tips for DLP policies", "https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips"]
      ]
    }
  }
);
