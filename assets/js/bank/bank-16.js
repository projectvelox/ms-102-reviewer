/* MS-102 question bank, part 16: questions 241 to 256 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q241", source: 241, type: "single",
    domain: "tenant", topic: "Exchange Online and mail flow", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Teams admin center" },
      { key: "B", text: "the Intune admin center" },
      { key: "C", text: "the Microsoft 365 Defender portal" },
      { key: "D", text: "the Exchange admin center" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A mail-enabled contact, or mail contact, is an Exchange recipient: a directory object that has an external email address, appears in the global address list and can be added to distribution groups, so that users can find it and send mail to it. Recipients are managed in Exchange Online, and in the Exchange admin center you create one under **Recipients** > **Contacts** > **Add a mail contact**. The `New-MailContact` cmdlet in Exchange Online PowerShell does the same.",
        "The Microsoft 365 admin center also has a Contacts page, but it is not among the options. None of the other three portals manages Exchange recipients."
      ],
      wrong: [
        ["A", "The Teams admin center manages teams, meetings, calling and Teams policies. It does not create Exchange recipients."],
        ["B", "The Intune admin center manages devices, apps and their policies. Contacts are not part of it."],
        ["C", "The Defender portal manages threat protection, incidents and email security policies, not recipients such as mail contacts."]
      ],
      concept: "Mail contacts are Exchange recipients that represent external addresses in the global address list, and they are created where Exchange recipients are managed.",
      takeaway: "Mail contacts, mail users, shared mailboxes and distribution groups: the Exchange admin center or Exchange Online PowerShell.",
      refs: [["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"]]
    }
  },
  {
    id: "Q242", source: 242, type: "yesno",
    domain: "security", topic: "Defender for Office 365", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of"], rows: [
        ["User1", "Group1"],
        ["User2", "Group1, Group2"],
        ["User3", "Group2"]
      ] } },
      "The subscription has the following two anti-spam policies:",
      { list: [
        "Name: AntiSpam1",
        "Priority: 0",
        "Include these users, groups and domains",
        "Users: User3",
        "Groups: Group1",
        "Exclude these users, groups and domains",
        "Groups: Group2",
        "Message limits",
        "Set a daily message limit: 100"
      ] },
      { list: [
        "Name: AntiSpam2",
        "Priority: 1",
        "Include these users, groups and domains",
        "Users: User1",
        "Groups: Group2",
        "Exclude these users, groups and domains",
        "Users: User3",
        "Message limits",
        "Set a daily message limit: 50"
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can send a maximum of 150 email messages per day." },
      { text: "User2 can send a maximum of 50 email messages per day." },
      { text: "User3 can send a maximum of 100 email messages per day." }
    ],
    answer: [false, true, false],
    explanation: {
      correct: [
        "Message limits are set in outbound spam policies, the outbound side of the anti-spam policies. Custom policies are checked in priority order, 0 first, and outbound spam protection stops at the first policy that applies to the sender. One policy therefore decides all of a sender's limits, and the limits of several policies are never added together. An exclusion wins over an inclusion: a sender who matches any exclusion of a policy is not covered by it. A sender that no custom policy covers gets the default outbound policy, whose limit of 0 means the service defaults.",
        "The reference answer is No, Yes, No. It reads the include settings of each policy as naming the senders that the policy covers: AntiSpam1 covers User3 and the members of Group1, and AntiSpam2 covers User1 and the members of Group2.",
        "On that reading, User1 is a member of Group1 and not of Group2, so AntiSpam1 applies first and sets a limit of 100. A limit of 150 would need 100 and 50 to be added, which never happens: No. User2 is a member of Group1 but also of Group2, which AntiSpam1 excludes. AntiSpam2 covers Group2 and does not exclude User2, so User2's limit is 50: Yes. User3 is named in AntiSpam1 but is a member of the excluded Group2, and AntiSpam2 excludes User3 by name. Neither custom policy applies, User3 falls back to the default policy, and the limit is not 100: No."
      ],
      wrong: [
        ["Statement 1 — Yes", "Only one policy applies to a sender, so the limits of 100 and 50 never combine into 150."],
        ["Statement 2 — No", "The exclusion of Group2 takes User2 out of AntiSpam1, which leaves AntiSpam2 and its limit of 50."],
        ["Statement 3 — Yes", "User3 is named in AntiSpam1, but the exclusion of Group2 removes User3 from that policy, because an exclusion beats an inclusion."]
      ],
      concept: "Each sender gets exactly one outbound spam policy: the highest-priority custom policy that covers it after exclusions, or else the default policy.",
      takeaway: "Limits are never summed across policies, an exclusion beats an inclusion, and anyone left over gets the default outbound policy.",
      logic: "For each user, apply the exclusions first, then take the first remaining policy in priority order.",
      refs: [
        ["Microsoft Learn: Configure outbound spam policies", "https://learn.microsoft.com/defender-office-365/outbound-spam-policies-configure"],
        ["Microsoft Learn: Order and precedence of email protection", "https://learn.microsoft.com/defender-office-365/how-policies-and-protections-are-combined"]
      ]
    }
  },
  {
    id: "Q243", source: 243, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1 and the administrators shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["Admin1", "Exchange Administrator"],
        ["Admin2", "Security Administrator"],
        ["Admin3", "User Administrator"]
      ] } },
      "User1 reports that after sending 1,000 email messages in the morning, the user is blocked from sending additional emails.",
      "You need to identify the following:",
      { list: [
        "What administrators can unblock User1",
        "What to configure to allow User1 to send at least 2,000 emails per day without being blocked"
      ] },
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Administrators:", options: ["Admin1 only", "Admin2 only", "Admin1 and Admin2 only", "Admin2 and Admin3 only", "Admin1, Admin2, and Admin3"] },
      { id: "f2", label: "Settings:", options: ["Anti-spam", "Anti-phishing", "Anti-malware", "Advanced delivery", "Enhanced filtering"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "A user who exceeds an outbound sending limit is restricted from sending and added to the **Restricted entities** page of the Microsoft Defender portal. An admin unblocks the account there, or with `Remove-BlockedSenderAddress` in Exchange Online PowerShell. That requires the Security Administrator role, or membership in the Organization Management or Security Administrator role group in Exchange Online. Admin2 is a Security Administrator. Admin1 is an Exchange Administrator, and that Microsoft Entra role corresponds to the Organization Management role group in Exchange Online. Admin3, a User Administrator, manages user accounts but has no Exchange Online or Defender permissions, so the answer is Admin1 and Admin2 only.",
        "The sending limits themselves come from outbound spam policies, which are found under **Anti-spam** in the threat policies. Create a custom outbound spam policy for User1, or for a group that contains User1, with **Set a daily message limit** of at least 2,000, and give it a priority that puts it before any other policy that covers User1. The daily limit can be set up to 10,000 recipients."
      ],
      wrong: [
        ["Admin1 only or Admin2 only", "Both the Exchange Administrator and the Security Administrator can unblock a restricted user, so naming only one of them is incomplete."],
        ["Admin2 and Admin3 only, or all three", "User Administrator manages accounts, passwords and licenses. It grants no permission over Exchange Online sending restrictions."],
        ["Anti-phishing", "Anti-phishing policies protect recipients from impersonation and spoofing in inbound mail. They contain no sending limits."],
        ["Anti-malware", "Anti-malware policies scan messages and attachments for malware."],
        ["Advanced delivery", "Advanced delivery lets third-party phishing simulations and SecOps mailboxes receive messages unfiltered."],
        ["Enhanced filtering", "Enhanced filtering for connectors lets Microsoft 365 see the original source IP address when mail arrives through another service first."]
      ],
      concept: "Outbound spam policies, under Anti-spam, set the recipient limits per sender, and senders who exceed them are listed on the Restricted entities page, where security or Exchange admins unblock them.",
      takeaway: "Blocked for sending too much: unblock from Restricted entities (Security Administrator or Exchange Organization Management) and raise the limit in an outbound anti-spam policy.",
      refs: [
        ["Microsoft Learn: Remove blocked users from the Restricted entities page", "https://learn.microsoft.com/defender-office-365/outbound-spam-restore-restricted-users"],
        ["Microsoft Learn: Configure outbound spam policies", "https://learn.microsoft.com/defender-office-365/outbound-spam-policies-configure"],
        ["Microsoft Learn: Permissions in Exchange Online", "https://learn.microsoft.com/exchange/permissions-exo/permissions-exo"]
      ]
    }
  },
  {
    id: "Q244", source: 244, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    caseId: "fabrikam", caseOrder: 7,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name to the tenant for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "alias (CNAME)" },
      { key: "B", text: "host information (HINFO)" },
      { key: "C", text: "host (A)" },
      { key: "D", text: "text (TXT)" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "During Project1 the mailboxes of the sales users move to Microsoft 365, and all users must keep exchanging email with their current addresses. The fabrikam.com domain therefore has to be added to the tenant. When you add a domain, Microsoft 365 first asks you to prove that you own it: it gives you a TXT record with a value such as `MS=ms12345678`, which you create in the public DNS zone of the domain, and then checks that the record is there. For Fabrikam, the public zone is managed on the external DNS server, so the record is created there.",
        "The TXT record only proves ownership and has no effect on mail flow or other services, which is why it is the preferred verification method. A verification MX record is the less common alternative, and it is not among the options."
      ],
      wrong: [
        ["A", "CNAME records, such as autodiscover, are added after verification to connect services to the domain. They do not prove ownership."],
        ["B", "An HINFO record describes the hardware and operating system of a host. Microsoft 365 does not use it."],
        ["C", "An A record maps a host name to an IP address, for example for a website. Microsoft 365 does not use it to verify a domain."]
      ],
      concept: "Adding a custom domain to Microsoft 365 starts with domain verification through a TXT record in the public DNS zone.",
      takeaway: "Verify a domain with a TXT record (MS=ms...). The MX, CNAME and other service records come afterwards.",
      refs: [
        ["Microsoft Learn: Add a custom domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Connect your domain by adding DNS records", "https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider"]
      ]
    }
  },
  {
    id: "Q245", source: 245, type: "multi",
    domain: "identity", topic: "Conditional Access", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You create a Conditional Access policy named Policy1 and assign Policy1 to all users.",
      "You need to configure Policy1 to enforce multi-factor authentication (MFA) if the user risk level is high.",
      "Which two settings should you configure in Policy1? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Users or workload identities" },
      { key: "B", text: "Cloud apps or actions" },
      { key: "C", text: "Conditions" },
      { key: "D", text: "Grant" },
      { key: "E", text: "Session" }
    ],
    answer: ["C", "D"],
    explanation: {
      correct: [
        "A Conditional Access policy is built from assignments (which users, which cloud apps, under which conditions) and access controls (what to enforce). On the New Conditional Access policy page, Policy1 already targets **All users** and **All cloud apps**, while Conditions and Grant are still empty.",
        "The risk requirement is a condition: under **Conditions** > **User risk**, configure the policy for **High**. MFA is a grant control: under **Grant**, select **Grant access** with **Require multifactor authentication**. When Identity Protection rates a user's risk as high, Policy1 then requires MFA. User risk as a condition needs Microsoft Entra ID P2, which Microsoft 365 E5 includes."
      ],
      wrong: [
        ["A", "Users or workload identities is already set to All users, which is what Policy1 needs."],
        ["B", "Cloud apps or actions is already set to All cloud apps. The requirement does not change which apps are covered."],
        ["E", "Session controls shape the session after access is granted, for example sign-in frequency or app enforced restrictions. MFA is a grant control."]
      ],
      concept: "In Conditional Access, risk levels are conditions and MFA is a grant control.",
      takeaway: "Risk-based MFA: Conditions > User risk (or Sign-in risk), plus Grant > Require multifactor authentication.",
      refs: [
        ["Microsoft Learn: How to use conditions in Conditional Access policies", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-conditions"],
        ["Microsoft Learn: How to configure grant controls", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-grant"],
        ["Microsoft Learn: Require remediation for risky users", "https://learn.microsoft.com/entra/identity/conditional-access/policy-risk-based-user"]
      ]
    }
  },
  {
    id: "Q246", source: 246, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain.",
      "You have an Azure AD tenant that has Security defaults disabled.",
      "Azure AD Connect is configured for directory synchronization. Password hash synchronization and pass-through authentication are disabled.",
      "You need to enable Azure AD Identity Protection to detect leaked credentials.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "From Azure AD Connect, enable password hash synchronization." },
      { key: "B", text: "From the Microsoft Entra admin center, enable Security defaults." },
      { key: "C", text: "From the Microsoft Entra admin center, configure verifiable credentials." },
      { key: "D", text: "From Azure AD Connect, enable pass-through authentication." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The leaked credentials detection of Identity Protection (Microsoft Entra ID Protection) compares username and password pairs that Microsoft finds in public dumps and on the dark web with the credentials of your users. For users synchronized from Active Directory, Microsoft Entra ID can only make that comparison if it holds a hash of the user's password, and that hash reaches the cloud only through password hash synchronization.",
        "In this tenant password hash synchronization is disabled, so the first step is to enable it in Azure AD Connect (Microsoft Entra Connect). Once the hashes are synchronized, leaked credentials are detected and raise the user risk."
      ],
      wrong: [
        ["B", "Security defaults require MFA registration and block legacy authentication. They give Identity Protection no password hashes to compare."],
        ["C", "Verifiable credentials are a decentralized identity service for issuing and checking digital credentials. They have nothing to do with leaked passwords."],
        ["D", "Pass-through authentication validates passwords against on-premises AD at sign-in and stores no password hashes in the cloud, so there is nothing to compare."]
      ],
      concept: "Leaked credentials detection for synchronized users depends on password hash synchronization.",
      takeaway: "Leaked credentials detection for hybrid users needs password hash sync, which can also run alongside pass-through authentication or federation.",
      refs: [
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"],
        ["Microsoft Learn: What is password hash synchronization with Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"]
      ]
    }
  },
  {
    id: "Q247", source: 247, type: "yesno",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Multi-Factor Auth Status"], rows: [
        ["User1", "Group1", "Disabled"],
        ["User2", "Group1, Group2", "Enabled"],
        ["User3", "Group2", "Disabled"]
      ] } },
      "You configure a multi-factor authentication (MFA) registration policy that has the following settings:",
      { list: [
        "Assignments: Include: Group1; Exclude: Group2",
        "Access controls: Require Azure MFA registration",
        "Enforce Policy: On"
      ] },
      "You create a conditional access policy that has the following settings:",
      { list: [
        "Name: Policy 1",
        "Assignments: Include: Group2; Exclude: Group1",
        "Access controls: Grant, Require multi-factor authentication",
        "Enable policy: On"
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 will be required to register for MFA on the next sign-in." },
      { text: "User2 will be required to register for MFA on the next sign-in." },
      { text: "User3 will be required to register for MFA on the next sign-in." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "The MFA registration policy is an Identity Protection policy. It makes the users it covers register for Microsoft Entra multifactor authentication: at their next interactive sign-in they are prompted to register, and they can postpone the registration for at most 14 days. Its scope is Group1 minus Group2, because an exclusion always overrides an inclusion. Policy 1 is a separate Conditional Access policy that requires MFA at sign-in, with the scope Group2 minus Group1.",
        "User1 is a member of Group1 and not of Group2, so the registration policy applies, and User1, whose MFA status is Disabled, is required to register: Yes. User2 is a member of Group1 but also of the excluded Group2, so the registration policy does not apply. Policy 1 does not apply either, because it excludes Group1, and the table shows MFA already Enabled for User2: No.",
        "The reference answer for User3 is No. User3 is not a member of Group1 and is a member of the excluded Group2, so the registration policy, the setting in this scenario that requires registration, does not cover User3. Policy 1 does cover User3 (in Group2, not in Group1) and requires MFA when User3 signs in, but the statement is decided by the scope of the registration policy, which leaves User3 out."
      ],
      wrong: [
        ["Statement 1 — No", "User1 is inside the scope of the registration policy, in Group1 and not in Group2."],
        ["Statement 2 — Yes", "User2 is a member of Group1, but also of Group2, and the exclusion of Group2 overrides the inclusion of Group1."],
        ["Statement 3 — Yes", "User3 is outside the registration policy twice over: not in Group1, and in the excluded Group2."]
      ],
      concept: "The Identity Protection MFA registration policy covers the included users minus the excluded users and prompts them to register at sign-in; exclusions always win.",
      takeaway: "For scope questions, subtract the excluded groups first: a user in both an included and an excluded group is out.",
      refs: [
        ["Microsoft Learn: Configure the MFA registration policy", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-mfa-policy"],
        ["Microsoft Learn: Enable per-user multifactor authentication", "https://learn.microsoft.com/entra/identity/authentication/howto-mfa-userstates"]
      ]
    }
  },
  {
    id: "Q248", source: 248, type: "multi",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain.",
      "You have a Microsoft 365 subscription.",
      "You implement a directory synchronization solution that uses pass-through authentication.",
      "You configure Azure AD smart lockout as shown in the following exhibit.",
      { image: "q248-password-protection.png", alt: "Azure AD Security, Authentication methods | Password protection page. Custom smart lockout: Lockout threshold 5, Lockout duration in seconds 60. Custom banned passwords: Enforce custom list Yes; Custom banned password list: password, Pa$$w0rd, Pa55w0rd, Contoso. Password protection for Windows Server Active Directory: Enable password protection on Windows Server Active Directory Yes; Mode Audit (not Enforced)." },
      "You discover that Active Directory users can use the passwords in the custom banned passwords list.",
      "You need to ensure that banned passwords are banned for all users.",
      "Which three actions should you perform? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 3,
    options: [
      { key: "A", text: "From a domain controller, install the Azure AD Password Protection Proxy." },
      { key: "B", text: "From Active Directory, modify the Default Domain Policy." },
      { key: "C", text: "From a domain controller, install the Azure AD Application Proxy connector." },
      { key: "D", text: "From all the domain controllers, install the Azure AD Password Protection DC Agent." },
      { key: "E", text: "From Password protection for Windows Server Active Directory, modify the Mode setting." },
      { key: "F", text: "From Custom banned passwords, modify the Enforce custom list setting." }
    ],
    answer: ["A", "D", "E"],
    explanation: {
      correct: [
        "The custom banned password list is checked whenever a password is set in Microsoft Entra ID. With pass-through authentication, users still change and reset their passwords in on-premises Active Directory, so the list takes effect there only when Azure AD Password Protection (Microsoft Entra Password Protection) for Windows Server Active Directory is deployed. It has two components. The **Proxy service** runs on at least one server in the domain (the option installs it on a domain controller) and forwards the policy downloads to Microsoft Entra ID. The **DC Agent** runs on every domain controller and checks each password change or reset against the downloaded policy; a domain controller without the agent would still accept banned passwords.",
        "The exhibit also shows **Mode** set to **Audit**. In Audit mode the DC agents only log the passwords that they would have rejected. Changing Mode to **Enforced** makes them reject banned passwords."
      ],
      wrong: [
        ["B", "The Default Domain Policy sets length, complexity, history and lockout rules. It has no connection to the Microsoft Entra banned password list."],
        ["C", "The Application Proxy connector publishes on-premises web apps for remote access. It plays no part in password validation."],
        ["F", "Enforce custom list is already Yes, so the custom list is already in use. Changing the setting would only turn it off."]
      ],
      concept: "Password protection for on-premises AD needs the proxy service, a DC agent on every domain controller, and Enforced mode before it blocks passwords.",
      takeaway: "Banned passwords on-premises: Proxy service, DC Agent on all DCs, and Mode set to Enforced.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Password Protection", "https://learn.microsoft.com/entra/identity/authentication/concept-password-ban-bad-on-premises"],
        ["Microsoft Learn: Deploy on-premises Microsoft Entra Password Protection", "https://learn.microsoft.com/entra/identity/authentication/howto-password-ban-bad-on-premises-deploy"],
        ["Microsoft Learn: Enable on-premises Microsoft Entra Password Protection", "https://learn.microsoft.com/entra/identity/authentication/howto-password-ban-bad-on-premises-operations"]
      ]
    }
  },
  {
    id: "Q249", source: 249, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain and an Azure AD tenant.",
      "The network uses a firewall that contains a list of allowed outbound domains.",
      "You begin to implement directory synchronization.",
      "You discover that the firewall configuration contains only the following domain names in the list of allowed domains:",
      { list: ["*.microsoft.com", "*.office.com"] },
      "Directory synchronization fails.",
      "You need to ensure that directory synchronization completes successfully.",
      "What is the best approach to achieve the goal? More than one answer choice may achieve the goal. Select the BEST answer."
    ],
    options: [
      { key: "A", text: "From the firewall, modify the list of allowed outbound domains." },
      { key: "B", text: "From Azure AD Connect, modify the Customize synchronization options task." },
      { key: "C", text: "From the firewall, create a list of allowed inbound domains." },
      { key: "D", text: "Deploy an Azure AD Connect sync server in staging mode." },
      { key: "E", text: "From the firewall, allow the IP address range of the Azure data center for outbound communication." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Azure AD Connect (Microsoft Entra Connect) communicates with Microsoft Entra ID over outbound HTTPS to Microsoft endpoints, and several of them are outside `*.microsoft.com` and `*.office.com`, for example the sign-in endpoint `login.microsoftonline.com`. With only those two domains allowed, the connections are blocked and synchronization fails.",
        "Microsoft's guidance for a proxy or firewall that limits URLs is to open the URLs that it publishes for Microsoft 365 and Microsoft Entra ID. The fix is therefore to add the missing domains to the list of allowed outbound domains. Allowing names rather than addresses also keeps working when Microsoft changes the IP addresses behind them, which is why this is the best of the approaches that could work."
      ],
      wrong: [
        ["B", "The synchronization options choose what is synchronized and which optional features run. They cannot get around a firewall that blocks the connection."],
        ["C", "Azure AD Connect only makes outbound connections to Microsoft Entra ID. Allowing inbound traffic changes nothing and opens the network needlessly."],
        ["D", "A staging server is a standby copy that does not export changes. It would be blocked by the same firewall."],
        ["E", "Opening IP ranges can work, but the ranges are broad and change over time. Allowing the required domain names is the supported and maintainable approach."]
      ],
      concept: "Azure AD Connect needs outbound HTTPS access to the published Microsoft Entra and Microsoft 365 endpoints, and firewalls that filter by name must allow them.",
      takeaway: "Sync blocked by a URL allow list: add the required Microsoft endpoints to the allowed outbound domains; nothing inbound is needed.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect: Prerequisites and hardware", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-install-prerequisites"],
        ["Microsoft Learn: Microsoft 365 URLs and IP address ranges", "https://learn.microsoft.com/microsoft-365/enterprise/urls-and-ip-address-ranges"]
      ]
    }
  },
  {
    id: "Q250", source: 250, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains users in the United States, Europe, and Asia.",
      "You use Azure AD Identity Protection.",
      "You have a virtual desktop infrastructure (VDI). All VDI servers are located in the United States.",
      "Users connect to Microsoft 365 from laptops and the VDI.",
      "Some VDI users report that they are blocked from signing in to Microsoft 365 due to a high sign-in risk.",
      "You need to reduce the likelihood that the VDI users will be erroneously blocked from signing in to Microsoft 365.",
      "The solution must ensure that sign-ins from the VDI environment are protected by using Identity Protection.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "ExpressRoute for Microsoft 365" },
      { key: "B", text: "a trusted location" },
      { key: "C", text: "a Satellite Geography location" },
      { key: "D", text: "a Conditional Access policy" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Several sign-in risk detections of Identity Protection, such as atypical travel and unfamiliar sign-in properties, look at where a sign-in comes from. A user in Europe or Asia who signs in from a laptop and then through a VDI server in the United States appears to change continents within minutes, which raises the sign-in risk and triggers the block.",
        "Define the public IP address ranges of the VDI as a named location and mark it as trusted. Identity Protection uses trusted locations in its risk calculation and lowers the risk of sign-ins that come from them, which reduces these false positives. The sign-ins are still evaluated by Identity Protection, so the VDI remains protected."
      ],
      wrong: [
        ["A", "ExpressRoute is a private network connection to Microsoft. It changes the network path, not how sign-in risk is calculated."],
        ["C", "A satellite geography belongs to Multi-Geo, which decides where data is stored. It has no effect on sign-in risk."],
        ["D", "A policy that skipped the risk check for VDI sign-ins would stop protecting them, which the requirement rules out. The risk calculation itself is improved by the trusted location."]
      ],
      concept: "Named locations marked as trusted feed into Identity Protection's risk calculation and lower the sign-in risk from those networks.",
      takeaway: "Known corporate egress IPs (VDI, VPN, offices) causing false risk detections: mark them as a trusted named location.",
      refs: [
        ["Microsoft Learn: Conditional Access: using network signals", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"],
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"]
      ]
    }
  },
  {
    id: "Q251", source: 251, type: "dropdown",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "From Azure AD Privileged Identity Management (PIM), you configure Role settings for the Global Administrator role as shown in the following exhibit.",
      { heading: "Activation" },
      { table: { head: ["Setting", "State"], rows: [
        ["Activation maximum duration (hours)", "8 hour(s)"],
        ["Require justification on activation", "Yes"],
        ["Require ticket information on activation", "No"],
        ["On activation, require Azure MFA", "Yes"],
        ["Require approval to activate", "No"],
        ["Approvers", "None"]
      ] } },
      { heading: "Assignment" },
      { table: { head: ["Setting", "State"], rows: [
        ["Allow permanent eligible assignment", "No"],
        ["Expire eligible assignments after", "15 day(s)"],
        ["Allow permanent active assignment", "Yes"],
        ["Expire active assignments after", "-"],
        ["Require Azure Multi-Factor Authentication on active assignment", "Yes"],
        ["Require justification on active assignment", "No"]
      ] } },
      "You make a user named admin1@contoso.com eligible for the Global Administrator role.",
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To use the Global Administrator role, admin1@contoso.com must provide [answer choice].", options: [
        "Azure Multi-Factor Authentication (MFA) and requires admin approval",
        "justification and Azure Multi-Factor Authentication (MFA)",
        "ticket information and justification",
        "ticket information and requires admin approval"
      ] },
      { id: "f2", label: "To make a new user eligible for the Global Administrator role, a PIM administrator must configure [answer choice].", options: [
        "an assignment duration and justification",
        "Azure Multi-Factor Authentication (MFA) and an assignment duration",
        "Azure Multi-Factor Authentication (MFA) and justification",
        "justification and ticket information"
      ] }
    ],
    answer: { f1: 1, f2: 1 },
    explanation: {
      correct: [
        "The Activation settings decide what an eligible user must do each time they activate the role. Require justification on activation is Yes and On activation, require Azure MFA is Yes, while ticket information and approval are both No. To use the role, admin1@contoso.com must therefore give a justification and complete Azure MFA, and the activation lasts at most 8 hours.",
        "The Assignment settings decide what the PIM administrator deals with when assigning the role. Allow permanent eligible assignment is No and eligible assignments expire after 15 days, so every eligible assignment needs an assignment duration that ends within 15 days. The other assignment requirement that is switched on is Require Azure Multi-Factor Authentication on active assignment, which gives the combination Azure MFA and an assignment duration. Require justification on active assignment is No, and ticket information is not an assignment setting, which rules out the other three choices."
      ],
      wrong: [
        ["Azure Multi-Factor Authentication (MFA) and requires admin approval", "Require approval to activate is No and no approvers are set."],
        ["ticket information and justification / ticket information and requires admin approval", "Require ticket information on activation is No, and so is approval."],
        ["an assignment duration and justification / Azure Multi-Factor Authentication (MFA) and justification", "Require justification on active assignment is No, so justification is not part of the assignment."],
        ["justification and ticket information", "Neither is required when assigning the role, and the mandatory duration is missing."]
      ],
      concept: "PIM role settings separate activation requirements, which the eligible user meets every time, from assignment requirements, which apply when an administrator assigns the role.",
      takeaway: "Activation rows: what the user provides. Assignment rows: what the admin configures. Allow permanent eligible assignment: No means a duration is mandatory.",
      logic: "In both drop-downs, strike every choice that contains a setting shown as No (ticket information, approval, justification on assignment); one choice is left in each.",
      refs: [["Microsoft Learn: Configure Microsoft Entra role settings in PIM", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"]]
    }
  },
  {
    id: "Q252", source: 252, type: "single",
    domain: "identity", topic: "Identity governance", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains more than 2,000 guest users.",
      "You need to ensure that when guest users are added to Microsoft 365 groups in the subscription, their membership is validated by the group owner every 30 days.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "group expiration policies" },
      { key: "B", text: "retention policies" },
      { key: "C", text: "access reviews" },
      { key: "D", text: "Conditional Access policies" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Access reviews in Microsoft Entra ID Governance ask chosen reviewers to confirm, on a schedule, whether users still need their access. You can create one review whose scope is the guest users in all Microsoft 365 groups, make the group owners the reviewers, and set it to recur monthly. Each owner then confirms or denies the guests of their own group, and denied guests can be removed automatically when the review ends.",
        "Because the review covers every Microsoft 365 group and only its guest members, it scales to thousands of guests without per-group setup. Access reviews require Microsoft Entra ID P2 or Microsoft Entra ID Governance licenses."
      ],
      wrong: [
        ["A", "An expiration policy deletes groups that are not renewed at the end of their lifetime. The owner renews the whole group and does not validate individual guest members."],
        ["B", "Retention policies keep or delete content such as mail and files. They do not touch group membership."],
        ["D", "Conditional Access controls how guests sign in, for example by requiring MFA. It never asks an owner to confirm membership."]
      ],
      concept: "Access reviews let group owners recertify members, including guests only, on a recurring schedule with automatic removal of denied users.",
      takeaway: "Recurring owner validation of guest membership: an access review scoped to guests in all Microsoft 365 groups, reviewers = group owners.",
      refs: [
        ["Microsoft Learn: Manage guest access with access reviews", "https://learn.microsoft.com/entra/id-governance/manage-guest-access-with-access-reviews"],
        ["Microsoft Learn: Create an access review of groups and applications", "https://learn.microsoft.com/entra/id-governance/create-access-review"]
      ]
    }
  },
  {
    id: "Q253", source: 253, type: "dropdown",
    domain: "identity", topic: "External collaboration", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses a domain name of adatum.com.",
      "In Azure AD, you set Guest invite restrictions to Only users assigned to specific admin roles can invite guest users.",
      "A user named User1@adatum.com reports that they can no longer invite external users from a domain named contoso.com to collaborate in Microsoft Teams.",
      "You need to modify the Azure AD configuration to meet the following requirements:",
      { list: [
        "Ensure that User1 can invite the contoso.com users to Teams.",
        "Ensure that only the contoso.com users can be invited as guests to the Azure AD tenant.",
        "Follow the principle of least privilege."
      ] },
      "What should you do for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Ensure that User1 can invite the contoso.com users to Teams:", options: [
        "Assign the Guest Inviter role to User1.",
        "Assign the User Administrator role to User1.",
        "Assign the Teams Administrator role to User1.",
        "Add User1 as a group owner to each team in Teams."
      ] },
      { id: "f2", label: "Ensure that only the contoso.com users can be invited as guests to the Azure AD tenant:", options: [
        "From the Cross-tenant access settings, edit the Outbound access settings.",
        "From the External collaboration settings, edit the Collaboration restrictions settings.",
        "From the External collaboration settings, edit the Guest user access restrictions settings."
      ] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "With Guest invite restrictions set to **Only users assigned to specific admin roles can invite guest users**, ordinary members such as User1 lose the right to invite guests, which is why User1 can no longer add contoso.com users to Teams. The roles that can still invite are Global Administrator, User Administrator and Guest Inviter. Guest Inviter grants nothing but the right to invite guests, so assigning it to User1 restores the ability with the least privilege.",
        "Which domains may be invited is a separate setting, **Collaboration restrictions** in the External collaboration settings. Selecting **Allow invitations only to the specified domains (most restrictive)** and entering contoso.com blocks invitations to every other domain for the whole tenant, whoever sends them."
      ],
      wrong: [
        ["Assign the User Administrator role to User1.", "User Administrator can invite guests, but it also manages all users, groups and passwords, far more than the task needs."],
        ["Assign the Teams Administrator role to User1.", "Teams Administrator manages the Teams service and is not one of the roles that can invite guests under this setting."],
        ["Add User1 as a group owner to each team in Teams.", "With the restriction in place, owning a team does not allow inviting guests, and it would give User1 control of every team."],
        ["From the Cross-tenant access settings, edit the Outbound access settings.", "Outbound access settings control how your users collaborate in other Microsoft Entra organizations. They do not decide which domains can be invited into your tenant."],
        ["From the External collaboration settings, edit the Guest user access restrictions settings.", "These settings limit what guests can see in the directory once they are in, not who can be invited."]
      ],
      concept: "Who can invite guests is controlled by the guest invite setting and admin roles; which domains can be invited is controlled by the allow or deny list under Collaboration restrictions.",
      takeaway: "Invite rights with least privilege: Guest Inviter. Guests from one domain only: External collaboration settings > Collaboration restrictions > allow list.",
      refs: [
        ["Microsoft Learn: Configure external collaboration settings", "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"],
        ["Microsoft Learn: Allow or block invitations to B2B users from specific organizations", "https://learn.microsoft.com/entra/external-id/allow-deny-list"]
      ]
    }
  },
  {
    id: "Q254", source: 254, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain that is synced to Azure AD as shown in the following exhibit.",
      { image: "q254-azure-ad-connect-review.png", alt: "Microsoft Azure Active Directory Connect, Review your solution page. Synchronized Directories: directory Adatum.com, account ADATUM.COM\\MSOL_e785c048abcc. Synchronization Settings: source anchor mS-DS-ConsistencyGuid; user principal name userPrincipalName; sync criteria AlwaysProvision; filter objects to synchronize by group Disabled; Azure AD app and attribute filtering Disabled; device writeback Disabled; directory extension attribute sync Disabled; Exchange hybrid deployment Disabled; group writeback Disabled; password hash synchronization Enabled; password writeback Disabled; user writeback Disabled; auto upgrade Enabled; Exchange mail public folders Disabled; SQL Server name (localdb); SQL Server instance name .\\ADSync." },
      "An on-premises Active Directory user account named Allan Yoo is synchronized to Azure AD. You view Allan's account from Microsoft 365 and notice that his username is set to [email protected].",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "From the Azure portal, you can reset the password of Allan Yoo." },
      { text: "From the Azure portal, you can configure the job title of Allan Yoo." },
      { text: "From the Azure portal, you can configure the usage location of Allan Yoo." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "Allan Yoo's account is synchronized from on-premises Active Directory, so AD is its source of authority: the attributes that Azure AD Connect synchronizes are owned by AD and are changed there. The exhibit shows password hash synchronization **Enabled** and password writeback **Disabled**.",
        "Password: Allan's password belongs to on-premises AD. An admin password reset in the portal reaches AD only through password writeback, which is disabled, so you cannot reset his password from the Azure portal: No. Job title: the job information attributes are synchronized from AD, and for a user whose source of authority is AD they are updated in AD and synchronized, not edited in the portal: No. Usage location: this is a Microsoft Entra attribute, needed before licenses can be assigned, and it can be set directly in the portal for users who are synchronized from AD: Yes."
      ],
      wrong: [
        ["Statement 1 — Yes", "Password hash synchronization copies hashes to the cloud, but the password is still owned by AD. Resetting it from the cloud needs password writeback, which is Disabled."],
        ["Statement 2 — Yes", "Job title is synchronized from AD and has to be changed there."],
        ["Statement 3 — No", "Usage location is a cloud attribute that you set in Microsoft Entra ID, also for synchronized users."]
      ],
      concept: "For synchronized users, attributes owned by AD are changed on-premises, cloud attributes such as usage location are set in Microsoft Entra ID, and cloud password resets need password writeback.",
      takeaway: "Synced user: profile attributes in AD, usage location in the cloud, and password resets from the portal only with password writeback.",
      refs: [
        ["Microsoft Learn: How to manage user profile information", "https://learn.microsoft.com/entra/fundamentals/how-to-manage-user-profile-info"],
        ["Microsoft Learn: On-premises password writeback with self-service password reset", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  },
  {
    id: "Q255", source: 255, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain. The domain contains 2,000 computers that run Windows 10.",
      "You purchase a Microsoft 365 subscription.",
      "You implement password hash synchronization and Azure AD Seamless Single Sign-On (Seamless SSO).",
      "You need to ensure that users can use Seamless SSO from the Windows 10 computers.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Join the computers to Azure AD." },
      { key: "B", text: "Create a conditional access policy in Azure AD." },
      { key: "C", text: "Modify the Intranet zone settings by using Group Policy." },
      { key: "D", text: "Deploy an Azure AD Connect staging server." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Seamless SSO uses Kerberos. When a user on a domain-joined computer inside the corporate network signs in to Azure AD (Microsoft Entra ID), the browser gets a Kerberos ticket for the `AZUREADSSOACC` computer account that Azure AD Connect created in AD and presents it to Microsoft Entra ID. Browsers send Kerberos tickets only to sites in the Intranet zone, so the Microsoft Entra URL `https://autologon.microsoftazuread-sso.com` must be added to the users' Intranet zone.",
        "For 2,000 computers this is done with Group Policy: in a policy that applies to the users, go to User Configuration > Policies > Administrative Templates > Windows Components > Internet Explorer > Internet Control Panel > Security Page, open **Site to Zone Assignment List** and map the URL to zone 1 (Intranet)."
      ],
      wrong: [
        ["A", "Seamless SSO is designed for computers joined to the on-premises domain. Joining 2,000 computers to Azure AD would be a different, much larger change and is not what Seamless SSO needs."],
        ["B", "Conditional Access decides whether access is allowed and under which controls. It does not make the browser send a Kerberos ticket."],
        ["D", "A staging server is a standby sync server for high availability. It has no effect on how users sign in."]
      ],
      concept: "Seamless SSO relies on Kerberos tickets that browsers send only to Intranet zone sites, so the Microsoft Entra autologon URL must be in that zone.",
      takeaway: "Seamless SSO rollout: add https://autologon.microsoftazuread-sso.com to the Intranet zone through Group Policy.",
      refs: [
        ["Microsoft Learn: Quickstart: Microsoft Entra seamless single sign-on", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso-quick-start"],
        ["Microsoft Learn: Microsoft Entra Connect: Seamless single sign-on", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso"]
      ]
    }
  },
  {
    id: "Q256", source: 256, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain named adatum.com that is synced to Azure AD.",
      "The domain contains 100 user accounts.",
      "The city attribute for all the users is set to the city where the user resides.",
      "You need to modify the value of the city attribute to the three-letter airport code of each city.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From Azure Cloud Shell, run the `Get-MsolUser` and `Set-MsolUser` cmdlets." },
      { key: "B", text: "From Windows PowerShell on a domain controller, run the `Get-MgUser` and `Update-MgUser` cmdlets." },
      { key: "C", text: "From Active Directory Administrative Center, select the Active Directory users, and then modify the Properties settings." },
      { key: "D", text: "From Azure Cloud Shell, run the `Get-MgUser` and `Update-MgUser` cmdlets." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The users are synchronized from adatum.com, so Active Directory is the source of authority for their attributes, City among them. For a synchronized user, contact and job attributes such as City are changed in AD, and Azure AD Connect then carries the new value to Azure AD (Microsoft Entra ID) in the next sync cycle.",
        "Active Directory Administrative Center lets you select several users and edit their properties in one step, so you can select the users of each city and set the airport code once per city."
      ],
      wrong: [
        ["A", "`Set-MsolUser` writes to the cloud object, and for a synchronized user the City attribute is owned by AD, so the change has to be made there. The MSOnline module is also retired."],
        ["B", "The Microsoft Graph cmdlets change the user object in Microsoft Entra ID, wherever you run them. Running them on a domain controller does not make them write to AD."],
        ["D", "Same problem: `Update-MgUser` targets the cloud object, not the AD account that owns the attribute."]
      ],
      concept: "Attributes of synchronized users are owned by on-premises AD and are changed there, then synchronized to Microsoft Entra ID.",
      takeaway: "Synced users: edit attributes in AD (ADAC, ADUC or `Set-ADUser`), never with cloud cmdlets.",
      refs: [
        ["Microsoft Learn: How to manage user profile information", "https://learn.microsoft.com/entra/fundamentals/how-to-manage-user-profile-info"],
        ["Microsoft Learn: Advanced AD DS management using Active Directory Administrative Center", "https://learn.microsoft.com/windows-server/identity/ad-ds/get-started/adac/active-directory-administrative-center"]
      ]
    }
  }
);
