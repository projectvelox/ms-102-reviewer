/* MS-102 question bank, part 22: questions 337 to 352 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q337", source: 337, type: "single",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to configure Privileged Identity Management (PIM) for the User Administrator role in Microsoft Entra.",
      "You need to ensure that a user can make a role assignment request for the User Administrator role only during the next six months.",
      "How should you configure the assignment?"
    ],
    options: [
      { key: "A", text: "Set Assignment type to Eligible." },
      { key: "B", text: "Set Assignment type to Active." },
      { key: "C", text: "Set Allow permanent active to assignment Yes." },
      { key: "D", text: "Set Allow permanent eligible assignment to Yes." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "PIM has two assignment types. An **Active** assignment gives the user the role straight away, with nothing to request. An **Eligible** assignment gives the user the right to ask for the role: the user has to activate it (a role assignment request, which can require MFA, a justification or an approval) before the permissions apply, and only for the activation duration set in the role settings.",
        "Every assignment also has a duration with a start and an end date. Making the user eligible for User Administrator with an end date six months from now means the user can submit activation requests during those six months, and once the eligible assignment expires no further request is possible. That is exactly the requirement, so the assignment type to set is Eligible."
      ],
      wrong: [
        ["B", "An active assignment hands the user the role without any request. The requirement is about a user who must request the role."],
        ["C", "Permanent active assignments have no end date and need no request, which is the opposite of a request window limited to six months."],
        ["D", "Allowing permanent eligible assignments lets eligibility last with no end date. The limit of six months comes from giving the eligible assignment an end date; to enforce a maximum in the role settings, this option is set to No and eligible assignments are set to expire after 6 months."]
      ],
      concept: "In PIM, Eligible assignments require the user to request (activate) the role, Active assignments do not, and both can be limited in time by start and end dates.",
      takeaway: "User must request the role, only for a period: an Eligible assignment with an end date.",
      refs: [
        ["Microsoft Learn: Assign Microsoft Entra roles in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-add-role-to-user"],
        ["Microsoft Learn: Configure Microsoft Entra role settings in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"]
      ]
    }
  },
  {
    id: "Q338", source: 338, type: "dragdrop",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two security groups named Group1 and Group2.",
      "You need to recommend an authentication solution that meets the following requirements:",
      { list: [
        "Members of Group1 must be able to authenticate by using a hardware token.",
        "Members of Group2 must be able to authenticate by using a public key infrastructure (PKI)."
      ] },
      "Which authentication method should you recommend for each group? To answer, drag the appropriate methods to the correct groups. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Methods",
    sources: [
      "A FIDO2 security key",
      "Certificate-based authentication",
      "Email OTP",
      "Microsoft Authenticator",
      "Temporary Access Pass",
      "Third-party software OATH tokens"
    ],
    targets: [
      { id: "t1", label: "Group1:" },
      { id: "t2", label: "Group2:" }
    ],
    answer: { t1: 0, t2: 1 },
    explanation: {
      correct: [
        "**Group1: A FIDO2 security key.** A FIDO2 security key is a physical device, such as a USB or NFC key, that holds a private key and signs the sign-in challenge after the user touches it or enters a PIN. It is the only hardware token in the list, and it gives phishing-resistant, passwordless sign-in to Microsoft Entra ID (formerly Azure AD).",
        "**Group2: Certificate-based authentication.** Microsoft Entra certificate-based authentication (CBA) lets users sign in with an X.509 certificate, for example on a smart card or on the device, issued by the organization's own PKI. You upload the root and intermediate certificate authorities of that PKI to Microsoft Entra ID, which then validates the user's certificate against them, so CBA is the method that builds on a public key infrastructure."
      ],
      wrong: [
        ["Third-party software OATH tokens", "These are authenticator apps that generate time-based codes. They are software, not a hardware token, and they do not use certificates from a PKI."],
        ["Microsoft Authenticator", "Authenticator is an app on the user's phone. It uses neither a separate hardware token nor certificates from the organization's PKI."],
        ["Temporary Access Pass", "A Temporary Access Pass is a time-limited passcode that an administrator issues, mainly to onboard users or to let them recover and register other methods."],
        ["Email OTP", "Email one-time passcodes are used mainly by guest users and for password reset. A code sent by email is neither a hardware token nor PKI-based."]
      ],
      concept: "Microsoft Entra ID supports several authentication methods: hardware-bound FIDO2 security keys, certificate-based authentication against the organization's PKI, and app-, code- or pass-based methods.",
      takeaway: "Hardware token: FIDO2 security key. PKI and X.509 certificates or smart cards: certificate-based authentication.",
      refs: [
        ["Microsoft Learn: Authentication methods in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods"],
        ["Microsoft Learn: Overview of Microsoft Entra certificate-based authentication", "https://learn.microsoft.com/entra/identity/authentication/concept-certificate-based-authentication"],
        ["Microsoft Learn: Passwordless authentication options for Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"]
      ]
    }
  },
  {
    id: "Q339", source: 339, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Assigned role"], rows: [
        ["User1", "Groups Administrator"],
        ["User2", "User Administrator"],
        ["User3", "Teams Administrator"]
      ] } },
      "Which users can create user objects, and which users can create Microsoft 365 groups? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User objects:", options: ["User2 only", "User1 and User2 only", "User2 and User3 only", "User1, User2, and User3"] },
      { id: "f2", label: "Microsoft 365 groups:", options: ["User1 only", "User1 and User2 only", "User1 and User3 only", "User1, User2, and User3"] }
    ],
    answer: { f1: 0, f2: 3 },
    explanation: {
      correct: [
        "**User objects: User2 only.** Creating users belongs to the **User Administrator** role, which can create and manage all aspects of users and groups, including resetting the passwords of non-administrators and of some limited administrators. Groups Administrator (User1) is limited to groups and group settings, and Teams Administrator (User3) is limited to the Teams workload and its groups; neither role can create user accounts.",
        "**Microsoft 365 groups: User1, User2, and User3.** All three roles can create Microsoft 365 groups. Groups Administrator creates and manages groups and group settings such as naming and expiration policies. User Administrator manages groups as well as users. Teams Administrator manages the Microsoft Teams service and can create and manage Microsoft 365 groups, since every team is backed by one."
      ],
      wrong: [
        ["User objects: User1 and User2 only", "Groups Administrator has permissions on groups only. It cannot create user accounts."],
        ["User objects: User2 and User3 only", "Teams Administrator manages Teams and Microsoft 365 groups, but it does not include permission to create users."],
        ["Microsoft 365 groups: User1 only", "Groups Administrator is not the only role that creates groups. User Administrator and Teams Administrator can also create Microsoft 365 groups."],
        ["Microsoft 365 groups: User1 and User2 only or User1 and User3 only", "Each of these leaves out a role that can create Microsoft 365 groups: Teams Administrator in the first case, User Administrator in the second."]
      ],
      concept: "Microsoft Entra built-in roles split user management (User Administrator) from group management, which Groups Administrator, User Administrator and Teams Administrator (for Microsoft 365 groups) all include.",
      takeaway: "Create users: User Administrator. Create Microsoft 365 groups: Groups, User or Teams Administrator.",
      refs: [["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]]
    }
  },
  {
    id: "Q340", source: 340, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "You have a hybrid deployment of Microsoft Entra that contains the users shown in the following table.",
      { table: { head: ["Name", "Description"], rows: [
        ["User1", "Microsoft Entra Connect sync account"],
        ["User2", "Contributor for Microsoft Entra Connect Health"],
        ["User3", "Application administrator in Microsoft Entra ID"]
      ] } },
      "You need to identify which users can perform the following tasks:",
      { list: [
        "View sync errors in Microsoft Entra Connect Health.",
        "Configure Microsoft Entra Connect Health settings."
      ] },
      "Which user should you identify for each task? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "View sync errors in Microsoft Entra Connect Health:", options: ["User1", "User2", "User3"] },
      { id: "f2", label: "Configure Microsoft Entra Connect Health settings:", options: ["User1", "User2", "User3"] }
    ],
    answer: { f1: 1, f2: 1 },
    explanation: {
      correct: [
        "Access to Microsoft Entra Connect Health is controlled by its own role-based access control, with three roles. **Owner** can view all information, change settings and manage access; Global Administrators hold this role by default. **Contributor** can view all information, such as alerts and synchronization errors, and change settings, such as the alert notification settings. **Reader** can only view.",
        "User2 is a Contributor for Connect Health, so User2 can both view the sync errors and configure the Connect Health settings. **View sync errors: User2. Configure settings: User2.**"
      ],
      wrong: [
        ["User1", "The Microsoft Entra Connect sync account is a service account that the synchronization engine uses to read and write directory objects. It holds no Connect Health role, so it gives no access to the Connect Health portal."],
        ["User3", "Application Administrator manages enterprise applications, app registrations and Application Proxy. It is not a Connect Health role and gives no access to Connect Health data or settings."]
      ],
      concept: "Microsoft Entra Connect Health uses its own roles (Owner, Contributor, Reader) to control who can view monitoring data and who can change its settings.",
      takeaway: "Connect Health Contributor: view everything and change settings, but not manage access (that needs Owner).",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Health operations", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-health-operations"],
        ["Microsoft Learn: Monitor Microsoft Entra Connect Sync with Microsoft Entra Connect Health", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-health-sync"]
      ]
    }
  },
  {
    id: "Q341", source: 341, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains a Microsoft Entra tenant named contoso.com. The tenant includes a user named User1.",
      "You enable Microsoft Entra ID Protection.",
      "You need to ensure that User1 can review the list in Microsoft Entra ID Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Security Reader" },
      { key: "B", text: "Reports Reader" },
      { key: "C", text: "Compliance Administrator" },
      { key: "D", text: "Owner" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Microsoft Entra ID Protection documents which roles can use it. Security Administrator has full access, Security Operator can view the reports and also dismiss user risk or confirm compromise, and **Security Reader** can view all ID Protection reports and the overview, including the Risky users report, without changing anything.",
        "User1 only has to review the list of users flagged for risk, so the read-only Security Reader role is enough and is the least privileged choice among the options."
      ],
      wrong: [
        ["B", "Reports Reader reads sign-in and audit logs and usage reports. It is not one of the roles that ID Protection grants access to its risk reports."],
        ["C", "Compliance Administrator manages compliance features in Microsoft Purview. It gives no access to ID Protection, and it would grant administrative rights that are not needed."],
        ["D", "Owner is an Azure role-based access control role on Azure resources (or an ownership of a group or application). It is not a Microsoft Entra directory role and does not open ID Protection reports."]
      ],
      concept: "ID Protection access is granted through Microsoft Entra roles: Security Reader and Global Reader to view, Security Operator to view and act on risk, Security Administrator for full access.",
      takeaway: "Only view risky users in ID Protection: Security Reader.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q342", source: 342, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    caseId: "series-mdo-policy", caseOrder: 1,
    stem: [
      "Solution: You create a Strict preset security policy.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Preset security policies apply Microsoft's recommended settings for anti-spam, anti-malware and anti-phishing protection, and in Defender for Office 365 also for Safe Links and Safe Attachments, as one package. There are two profiles you assign to recipients: **Standard protection**, a baseline protection profile suitable for most users, and **Strict protection**, a more aggressive profile meant for selected users such as priority accounts and other high-value targets.",
        "Strict protection covers spam, phishing and malware, but its settings are deliberately harsher than a baseline, for example lower phishing thresholds and more messages sent to quarantine. The scenario asks for a balanced baseline profile, which is Standard protection. The answer is No."
      ],
      wrong: [
        ["A", "Strict protection protects against the same threats but with more aggressive settings, intended for high-value users. It is not the balanced baseline profile the goal asks for."]
      ],
      concept: "Preset security policies come in two profiles: Standard (baseline, for most users) and Strict (more aggressive, for high-value users).",
      takeaway: "Balanced baseline for spam, phishing and malware: Standard preset. Aggressive, for priority users: Strict preset.",
      refs: [
        ["Microsoft Learn: Preset security policies in EOP and Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/preset-security-policies"],
        ["Microsoft Learn: Recommended settings for EOP and Microsoft Defender for Office 365 security", "https://learn.microsoft.com/defender-office-365/recommended-settings-for-eop-and-office365"]
      ]
    }
  },
  {
    id: "Q343", source: 343, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    caseId: "series-mdo-policy", caseOrder: 2,
    stem: [
      "Solution: You create an anti-malware policy.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "An anti-malware policy covers one threat only: malware in email attachments, with settings such as the common attachments filter and zero-hour auto purge for malware. Spam is handled by anti-spam policies and phishing by anti-phishing policies, so a single anti-malware policy cannot protect against all three threats in the scenario.",
        "A custom policy also means choosing every setting yourself rather than applying a ready-made protection profile. The balanced baseline profile that covers spam, phishing and malware together is the **Standard** preset security policy. The answer is No."
      ],
      wrong: [
        ["A", "An anti-malware policy does not cover spam or phishing, and it is a custom policy, not a baseline protection profile."]
      ],
      concept: "EOP and Defender for Office 365 have a separate policy type for each threat (anti-spam, anti-malware, anti-phishing, Safe Links, Safe Attachments); preset security policies bundle them with recommended settings.",
      takeaway: "One protection profile for spam, phishing and malware means a preset security policy, not a single custom policy.",
      refs: [
        ["Microsoft Learn: Preset security policies in EOP and Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/preset-security-policies"],
        ["Microsoft Learn: Configure anti-malware policies in EOP", "https://learn.microsoft.com/defender-office-365/anti-malware-policies-configure"]
      ]
    }
  },
  {
    id: "Q344", source: 344, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    caseId: "series-mdo-policy", caseOrder: 3,
    stem: [
      "Solution: You create a Standard preset security policy.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "**Standard protection** is the preset security policy that Microsoft describes as a baseline protection profile suitable for most users. When you turn it on and assign recipients, it applies Microsoft's recommended Standard settings to anti-spam, anti-malware and anti-phishing protection, and with Defender for Office 365 also to impersonation protection, Safe Links and Safe Attachments.",
        "Microsoft manages these settings and updates them as threats change, so the organization gets a balanced protection against spam, phishing and malware without configuring each policy. That is the goal of the scenario. The answer is Yes."
      ],
      wrong: [
        ["B", "Standard protection is precisely the balanced baseline profile and covers spam, phishing and malware, so the solution meets the goal."]
      ],
      concept: "The Standard preset security policy applies Microsoft's recommended baseline settings for every EOP and Defender for Office 365 protection to the recipients you choose.",
      takeaway: "Balanced baseline protection profile: Standard preset security policy.",
      refs: [
        ["Microsoft Learn: Preset security policies in EOP and Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/preset-security-policies"],
        ["Microsoft Learn: Recommended settings for EOP and Microsoft Defender for Office 365 security", "https://learn.microsoft.com/defender-office-365/recommended-settings-for-eop-and-office365"]
      ]
    }
  },
  {
    id: "Q345", source: 345, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a Conditional Access policy named Policy1 that meets the following requirements:",
      { list: [
        "Applies to high-risk users",
        "Requires multifactor authentication (MFA)"
      ] },
      "Which two settings should you configure? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Applies to high-risk users", options: ["Users", "Target resources", "Conditions", "Grant", "Session"] },
      { id: "f2", label: "Requires multifactor authentication (MFA)", options: ["Users", "Target resources", "Conditions", "Grant", "Session"] }
    ],
    answer: { f1: 2, f2: 3 },
    explanation: {
      correct: [
        "A Conditional Access policy has assignments (who and what it applies to, and under which conditions) and access controls (what is enforced). The risk level of a user is a **condition**: under Conditions you select **User risk** and set it to High. The risk comes from Microsoft Entra ID Protection, which is included in Microsoft 365 E5 through Microsoft Entra ID P2.",
        "Requiring MFA is a **Grant** control: under Grant you choose Grant access with Require multifactor authentication (or an authentication strength). So the two settings to configure are Conditions and Grant."
      ],
      wrong: [
        ["Users", "Users selects who is in scope by identity, such as all users, groups or roles; it is already set to All users. The risk level is not chosen there, so high-risk users are targeted through the User risk condition."],
        ["Target resources", "Target resources selects the cloud apps or actions the policy protects. Neither requirement is about which apps are accessed."],
        ["Session", "Session controls shape the session after sign-in, for example sign-in frequency or Conditional Access App Control. MFA is required through a grant control."]
      ],
      concept: "In Conditional Access, risk levels are conditions of the assignment, while requirements such as MFA are grant controls.",
      takeaway: "High-risk users: Conditions > User risk. Require MFA: Grant.",
      refs: [
        ["Microsoft Learn: Conditional Access: Conditions", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-conditions"],
        ["Microsoft Learn: Configure and enable risk policies", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-risk-policies"]
      ]
    }
  },
  {
    id: "Q346", source: 346, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to create a Conditional Access policy named Policy1.",
      "You need to ensure that only Passwordless MFA authentication methods are used when administrators attempt to access the Azure portal. Azure PowerShell, or Azure Command-Line Interface (CLI).",
      "How should you configure Policy1? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Access controls:", options: [
        "Set Grant to Require authentication strength.",
        "Set Grant to Require multifact or authentication.",
        "Set Session to Use app enforced restrictions.",
        "Set Session to Use Conditional Access App Control."
      ] },
      { id: "f2", label: "Target resources:", options: [
        "Azure Credential Configuration Endpoint Service",
        "Windows Azure Service Management API",
        "Windows Cloud Login"
      ] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "**Access controls: Set Grant to Require authentication strength.** An authentication strength is a list of the authentication methods, or combinations of methods, that are allowed to satisfy a policy. **Passwordless MFA** is one of the built-in strengths: it accepts only passwordless methods such as Windows Hello for Business, passkeys (FIDO2) and Microsoft Authenticator phone sign-in, so a password plus a second factor is not enough.",
        "**Target resources: Windows Azure Service Management API.** This resource groups the services that Azure management depends on, including the Azure portal and Azure Resource Manager. Azure PowerShell and Azure CLI call Azure Resource Manager, so a policy that targets the Windows Azure Service Management API applies to all three tools named in the requirement."
      ],
      wrong: [
        ["Set Grant to Require multifact or authentication", "Require multifactor authentication is satisfied by any MFA method, including a password with SMS or a phone call. It does not limit the sign-in to passwordless methods."],
        ["Set Session to Use app enforced restrictions or Use Conditional Access App Control", "Session controls act after sign-in: app enforced restrictions limit the experience in Exchange Online and SharePoint, and Conditional Access App Control routes the session through Defender for Cloud Apps. Neither decides which authentication methods may be used."],
        ["Azure Credential Configuration Endpoint Service", "This is not the resource that represents the Azure portal, Azure PowerShell and Azure CLI. Those tools are covered by the Windows Azure Service Management API."],
        ["Windows Cloud Login", "Windows Cloud Login is used for Microsoft Entra sign-in to Windows sessions, such as single sign-on to Azure Virtual Desktop and Windows 365 Cloud PCs. It does not cover Azure management tools."]
      ],
      concept: "Authentication strengths let a Conditional Access grant control require specific methods, and the Windows Azure Service Management API target covers the Azure portal and the Azure Resource Manager-based tools.",
      takeaway: "Only certain MFA methods: Require authentication strength. Azure portal, PowerShell and CLI: Windows Azure Service Management API.",
      refs: [
        ["Microsoft Learn: Conditional Access authentication strengths", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"],
        ["Microsoft Learn: Conditional Access: Target resources", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"]
      ]
    }
  },
  {
    id: "Q347", source: 347, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Endpoint. The subscription contains the devices shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [
        ["Device1", "Windows 11"],
        ["Device2", "Android"],
        ["Device3", "Linux"]
      ] } },
      "You need to create the Endpoint security policies shown in the following table.",
      { table: { head: ["Name", "Template"], rows: [
        ["Policy1", "Microsoft Defender Antivirus"],
        ["Policy2", "Device Control"]
      ] } },
      "To which device can you apply each policy? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Policy1:", options: ["Device1 only", "Device1 or Device2 only", "Device1 or Device3 only", "Device1, Device2, or Device3"] },
      { id: "f2", label: "Policy2:", options: ["Device1 only", "Device1 or Device2 only", "Device1 or Device3 only", "Device1, Device2, or Device3"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "Endpoint security policies are created from templates, and each template exists only for the platforms that support its settings, so a policy can be applied only to devices of those platforms. **Policy2: Device1 only.** Device Control is an attack surface reduction profile that controls removable storage and other peripherals on Windows devices. Device1 is the only Windows device in the table.",
        "**Policy1: the reference answer is Device1 or Device2 only.** Device1 is in scope in any case: Windows 11 runs Microsoft Defender Antivirus, the component that the template configures. The reference also counts Device2, the Android device, and leaves out Device3, the Linux device. What Microsoft Learn documents around it: the Antivirus profiles of Endpoint security are offered for Windows, macOS and Linux, Linux devices being managed through Defender for Endpoint security settings management, while Android devices are protected by the Defender for Endpoint app for Android, whose settings Intune delivers through app configuration policies."
      ],
      wrong: [
        ["Policy2: any option with Device2 or Device3", "The Device Control profile is a Windows profile, so it cannot be applied to the Android device or the Linux device."],
        ["Policy1: Device1 only", "The reference answer counts a second device for the antivirus template; Microsoft Defender Antivirus policies are not limited to Windows."],
        ["Policy1: Device1, Device2, or Device3", "The reference answer does not count all three devices for the antivirus template."]
      ],
      concept: "Each Endpoint security template targets specific platforms, and a policy can be assigned only to devices that run one of them.",
      takeaway: "Check the platform list of an Endpoint security template before assigning it: Device Control is for Windows devices.",
      refs: [
        ["Microsoft Learn: Antivirus policy for endpoint security in Intune", "https://learn.microsoft.com/mem/intune/protect/endpoint-security-antivirus-policy"],
        ["Microsoft Learn: Attack surface reduction policy for endpoint security in Intune", "https://learn.microsoft.com/mem/intune/protect/endpoint-security-asr-policy"],
        ["Microsoft Learn: Device control in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/device-control-overview"]
      ]
    }
  },
  {
    id: "Q348", source: 348, type: "single",
    domain: "tenant", topic: "Exchange Online and mail flow", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Entra admin center" },
      { key: "B", text: "the Intune admin center" },
      { key: "C", text: "the Microsoft Purview compliance portal" },
      { key: "D", text: "the Exchange admin center" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A mail contact is an Exchange Online recipient that represents a person outside the organization: it has an external email address and appears in the global address list, so users can find it and send mail to it, and it can be a member of distribution groups. Recipients are managed in the **Exchange admin center**, under Recipients > Contacts, where you add the contact and its external address (or with the `New-MailContact` cmdlet in Exchange Online PowerShell)."
      ],
      wrong: [
        ["A", "The Microsoft Entra admin center manages identities such as users, groups, devices and applications. Mail contacts are Exchange recipients and are not created there."],
        ["B", "The Intune admin center manages devices and apps. It has nothing to do with recipients."],
        ["C", "The Microsoft Purview compliance portal manages compliance features such as DLP, retention and eDiscovery, not recipients."]
      ],
      concept: "Mail contacts are Exchange Online recipients with an external address, created and managed in the Exchange admin center.",
      takeaway: "Mail contacts, mail users, shared mailboxes and distribution groups: Exchange admin center.",
      refs: [["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"]]
    }
  },
  {
    id: "Q349", source: 349, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    caseId: "series-device-policy", caseOrder: 1,
    stem: [
      "Solution: You create an endpoint detection and response (EDR) policy.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "In the scenario Defender for Endpoint is already integrated with Intune, which means the service-to-service connection is in place. Through that connector Intune automatically obtains the onboarding package of your Defender for Endpoint tenant.",
        "An **endpoint detection and response (EDR) policy**, created under Endpoint security in Intune, delivers that package: you set the client configuration package type to Auto from connector and assign the policy to groups of devices. Every device that enrolls in Intune and is in an assigned group receives the policy and onboards to Defender for Endpoint without any manual step. The answer is Yes."
      ],
      wrong: [
        ["B", "The EDR policy is the method Microsoft recommends for onboarding Intune-managed devices once the connector is set up, so it does meet the goal."]
      ],
      concept: "After the Intune and Defender for Endpoint connector is enabled, an EDR policy with the onboarding package from the connector onboards the devices it is assigned to.",
      takeaway: "Onboard enrolled devices to Defender for Endpoint automatically: EDR policy with the package from the connector.",
      refs: [
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint in Intune", "https://learn.microsoft.com/mem/intune/protect/advanced-threat-protection-configure"],
        ["Microsoft Learn: Endpoint detection and response policy for endpoint security in Intune", "https://learn.microsoft.com/mem/intune/protect/endpoint-security-edr-policy"]
      ]
    }
  },
  {
    id: "Q350", source: 350, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    caseId: "series-device-policy", caseOrder: 2,
    stem: [
      "Solution: You enable co-management.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Co-management lets Configuration Manager and Intune manage the same Windows devices at the same time, and lets you move workloads, such as compliance policies or Endpoint Protection, from one to the other. It decides which management service is in charge of a device. It does not deploy the Defender for Endpoint onboarding package.",
        "With Defender for Endpoint already integrated with Intune, the devices onboard automatically when Intune deploys the onboarding package to them, which is done with an EDR policy or a device configuration profile. Enabling co-management adds no such policy. The answer is No."
      ],
      wrong: [
        ["A", "Co-management splits device management between Configuration Manager and Intune. It onboards nothing to Defender for Endpoint by itself."]
      ],
      concept: "Onboarding to Defender for Endpoint through Intune is done by a policy that delivers the onboarding package; co-management only shares management between Configuration Manager and Intune.",
      takeaway: "Co-management is about who manages the device, not about onboarding to Defender for Endpoint.",
      refs: [
        ["Microsoft Learn: What is co-management?", "https://learn.microsoft.com/mem/configmgr/comanage/overview"],
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint in Intune", "https://learn.microsoft.com/mem/intune/protect/advanced-threat-protection-configure"]
      ]
    }
  },
  {
    id: "Q351", source: 351, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    caseId: "series-device-policy", caseOrder: 3,
    stem: [
      "Solution: You configure a device configuration profile.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Besides the EDR policy, Intune can deliver the Defender for Endpoint onboarding package through a **device configuration profile**: for Windows, the template Microsoft Defender for Endpoint (desktop devices running Windows 10 or later). Because the scenario has the Intune and Defender for Endpoint connector in place, the profile uses the onboarding package from the connector automatically.",
        "Assigned to groups of devices, the profile reaches each device as it enrolls in Intune, and the device onboards to Defender for Endpoint without manual work. Microsoft now recommends the EDR policy for this task, but the device configuration profile is a working way to deliver the same onboarding. The answer is Yes."
      ],
      wrong: [
        ["B", "A device configuration profile with the Microsoft Defender for Endpoint template onboards the enrolled devices it is assigned to, so it meets the goal."]
      ],
      concept: "Intune can deliver the Defender for Endpoint onboarding package from the connector either with an EDR policy or with a device configuration profile.",
      takeaway: "Two Intune ways to onboard enrolled devices: EDR policy (recommended) or a Microsoft Defender for Endpoint device configuration profile.",
      refs: [["Microsoft Learn: Configure Microsoft Defender for Endpoint in Intune", "https://learn.microsoft.com/mem/intune/protect/advanced-threat-protection-configure"]]
    }
  },
  {
    id: "Q352", source: 352, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "You have a Conditional Access policy applied to a cloud-based app named App1. App1 has Conditional Access App Control deployed.",
      "You need to create a Microsoft Defender for Cloud Apps policy to block User1 from printing from App1.",
      "Which type of policy should you create?"
    ],
    options: [
      { key: "A", text: "activity policy" },
      { key: "B", text: "session policy" },
      { key: "C", text: "OAuth app policy" },
      { key: "D", text: "Cloud Discovery anomaly detection policy" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Conditional Access App Control routes the user's session with App1 through the Defender for Cloud Apps reverse proxy, which can watch and control what happens in the session in real time. The rules for that control are **session policies**.",
        "A session policy with the control type to block activities, filtered to User1 and to the Print activity, stops User1 from printing from App1 while other activities continue. Because App Control is already deployed for App1 through the Conditional Access policy, the session policy is the only thing left to create."
      ],
      wrong: [
        ["A", "Activity policies evaluate activities reported through app connectors after they happen and can alert or apply governance actions, such as suspending a user. They cannot block a single print action during the session."],
        ["C", "OAuth app policies monitor the permissions that users grant to third-party OAuth apps. They do not control activities inside a session."],
        ["D", "Cloud Discovery anomaly detection policies analyze traffic logs of discovered apps for unusual usage patterns. They do not act on a live session."]
      ],
      concept: "Session policies, enforced through Conditional Access App Control, control user activities such as downloads, uploads and printing in real time.",
      takeaway: "Block printing, downloading or copying inside an app session: session policy.",
      refs: [
        ["Microsoft Learn: Create session policies in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/session-policy-aad"],
        ["Microsoft Learn: Conditional Access app control in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/proxy-intro-aad"]
      ]
    }
  }
);
