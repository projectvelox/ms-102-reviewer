/* MS-102 question bank, part 29: questions 449 to 467 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q449", source: 449, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory Domain Services (AD DS) domain. The domain contains 2.000 user accounts.",
      "You have a Microsoft Entra tenant.",
      "You need to sync the domain with the Microsoft Entra tenant. The solution must meet the following requirements:",
      { list: ["Minimize infrastructure requirements.", "Minimize single points of failure.", "Minimize administrative effort."] },
      "What should you use?"
    ],
    options: [
      { key: "A", text: "pass-through authentication" },
      { key: "B", text: "Microsoft Entra Connect Sync" },
      { key: "C", text: "Active Directory Federation Services (AD FS)" },
      { key: "D", text: "Microsoft Entra Cloud Sync" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Microsoft Entra Cloud Sync moves the synchronization engine into the cloud. On premises you install only the lightweight Microsoft Entra provisioning agent, which needs no SQL database and no dedicated sync server. The sync configuration, scoping and schedule are held in Microsoft Entra ID and managed from the Microsoft Entra admin center.",
        "Installing the agent on two or more servers gives high availability: the agents are active at the same time, and if one of them stops, the others carry on. That removes the single point of failure of a single sync server. For one forest of this size with no special requirements, cloud sync meets all three requirements: the least infrastructure, no single point of failure and the least administration."
      ],
      wrong: [
        ["A", "Pass-through authentication is a sign-in method: an agent validates users' passwords against on-premises AD DS. It doesn't create or update any users in the tenant, so a sync tool is still needed alongside it."],
        ["B", "Entra Connect Sync runs the whole sync engine on a Windows server with a SQL Server database (SQL Server Express LocalDB by default). Only one server is active at a time; a staging server takes over only after you switch it over manually. That is more infrastructure to maintain and upgrade, and the active server is a single point of failure."],
        ["C", "AD FS is a federation service for sign-in that needs its own farm of servers and Web Application Proxy servers. It doesn't synchronize objects, and it adds infrastructure instead of reducing it."]
      ],
      concept: "Cloud sync keeps the sync engine in Microsoft Entra ID and needs only lightweight agents on premises, which can run on several servers for high availability.",
      takeaway: "Sync AD DS with the least infrastructure and no single point of failure: Microsoft Entra Cloud Sync with two or more agents.",
      refs: [["Microsoft Learn: What is Microsoft Entra Cloud Sync?", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync"]]
    }
  },
  {
    id: "Q450", source: 450, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory Domain Services (AD DS) forest.",
      "You have a Microsoft Entra tenant.",
      "You implement Microsoft Entra Connect Sync.",
      "The synchronization fails to complete.",
      "You review the logs and discover the following error message: \"We found an issue with the service account that is used to run Microsoft Entra Connect Sync\".",
      "You need to ensure that the synchronization completes successfully. The solution must minimize administrative effort.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the Microsoft Entra admin center, reset the password of the Microsoft Entra Connect Sync account." },
      { key: "B", text: "From PowerShell, run the `Repair-AADCloudSyncToolsAccount` cmdlet." },
      { key: "C", text: "From Active Directory Users and Computers, reset the password or the ADSync service account." },
      { key: "D", text: "From PowerShell, run the `Set-ADSyncScheduler` cmdlet." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The message points at the account the sync service uses to write to the tenant, not at anything on premises. Microsoft documented this message in the sync error reference (error code AzureActiveDirectoryInvalidCredential, worded there as \"We found an issue with the service account that is used to run Microsoft Entra Cloud Sync\"): it is raised when the sync service account, ADToAADSyncServiceAccount, no longer exists in the tenant, typically because it was deleted by accident. Every export then fails.",
        "The documented fix is a single command, `Repair-AADCloudSyncToolsAccount`, from the AADCloudSyncTools PowerShell module that is installed with the Microsoft Entra provisioning agent. After you sign in with `Connect-AADCloudSyncTools` as an administrator, the cmdlet deletes the current sync account if it is still present and resets the sync account authentication with a new sync account in Microsoft Entra ID, so the next cycle can export again. The current AADCloudSyncTools reference no longer lists this cmdlet."
      ],
      wrong: [
        ["A", "The sync service account is created and managed by the sync tooling, not by an administrator resetting a password in the portal. If the account was deleted, there is nothing to reset, and a new password would not be known to the sync service anyway."],
        ["C", "The ADSync service account is the on-premises account that runs the Synchronization Service on the server. The error concerns the account used in Microsoft Entra ID. Changing the ADSync account's password also stops the Synchronization Service from starting until its encryption key is abandoned and the password is reinitialized, which is extra work and doesn't fix the cloud account."],
        ["D", "`Set-ADSyncScheduler` changes the built-in scheduler of Entra Connect Sync, such as the cycle interval or whether the scheduler is enabled. It doesn't touch any account, so the next cycle would fail the same way."]
      ],
      concept: "A sync service that can't authenticate to Microsoft Entra ID fails every export until its service account in the tenant is repaired.",
      takeaway: "\"Issue with the service account\" sync error: repair the sync account in one step with `Repair-AADCloudSyncToolsAccount`.",
      refs: [
        ["Microsoft Learn: AADCloudSyncTools PowerShell module for Microsoft Entra Cloud Sync", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/reference-powershell"],
        ["Microsoft Learn: Microsoft Entra Cloud Sync error codes and descriptions", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/reference-error-codes"],
        ["Microsoft Learn: Microsoft Entra Connect Sync: Scheduler", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-feature-scheduler"]
      ]
    }
  },
  {
    id: "Q451", source: 451, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory Domain Services (AD DS) domain. The domain contains two organizational units (OUs) named OU1 and OU2 and the users shown in the following table.",
      { table: { head: ["Name", "OU", "Department"], rows: [
        ["User1", "OU1", "Sales"],
        ["User2", "OU2", "Sales"],
        ["User3", "OU1", "Marketing"],
        ["User4", "OU2", "Accounts"]
      ] } },
      "You have a Microsoft Entra tenant.",
      "You plan to sync the domain with the Microsoft Entra tenant by using Microsoft Entra Connect Sync.",
      "You need to ensure that only users in the sales and marketing departments sync with the tenant. The solution must minimize administrative effort.",
      "What should you configure in Microsoft Entra Connect?"
    ],
    options: [
      { key: "A", text: "OU-based filtering" },
      { key: "B", text: "domain-based filtering" },
      { key: "C", text: "group-based filtering" },
      { key: "D", text: "attribute-based filtering" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Walk through the table. The users to sync are User1 (Sales), User2 (Sales) and User3 (Marketing); User4 (Accounts) must stay out. They are spread across both OUs: OU1 holds User1 and User3, and OU2 holds User2 and User4. No OU can be included or excluded as a whole, so what separates the users is their department, not their location in the directory.",
        "Attribute-based filtering in Entra Connect Sync filters objects on an attribute value. In the Synchronization Rules Editor you create an inbound synchronization rule with a scoping filter on the department attribute that sets `cloudFiltered` to True for users outside Sales and Marketing. Users then move in or out of scope automatically from the department they already have, with no OUs or groups to maintain."
      ],
      wrong: [
        ["A", "OU-based filtering includes or excludes whole OUs. Both OUs contain users to sync, and OU2 also contains User4, who must not sync, so no selection of OUs gives the right set without moving accounts first."],
        ["B", "Domain-based filtering selects which domains of the forest are synced. There is a single domain, and it contains all four users."],
        ["C", "Group-based filtering syncs only the members of one security group and is supported only for pilot deployments. You would also have to create the group and keep its membership up to date, which is more administrative effort."]
      ],
      concept: "Entra Connect Sync filters by domain, by OU, by attribute value through synchronization rules and, for pilots only, by group membership.",
      takeaway: "Users to sync defined by an attribute such as department and mixed across OUs: attribute-based filtering.",
      refs: [["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"]]
    }
  },
  {
    id: "Q452", source: 452, type: "yesno",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two Microsoft SharePoint Online sites named Site1 and Site2.",
      "You have the documents shown in the following table.",
      { table: { head: ["Name", "Number of credit card numbers in the document", "Number of SWIFT codes in the document", "Stored on"], rows: [
        ["Document1", "3", "3", "Site1"],
        ["Document2", "7", "2", "Site2"],
        ["Document3", "15", "0", "Site1"]
      ], numeric: [1, 2] } },
      "You create a data loss prevention (DLP) policy named DLP1 that has the advanced DLP rule as shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q452-dlp-rule.png", alt: "Create rule page with a Content contains condition made of two groups joined by OR. Group1, group operator All of these, sensitive info types: Credit Card Number, Low confidence, instance count 1 to 5; SWIFT Code, Low confidence, instance count 1 to 2. An information note says that with All of these you can't add more than one retention label and one sensitivity label to a group. Group2, group operator Any of these, sensitive info types: Credit Card Number, Low confidence, instance count 10 to Any. The option Evaluate predicate for (available for Exchange workload only) is greyed out with Message or attachment selected. A Create group link and the Save and Cancel buttons follow." },
      "You apply DLP1 to Site1.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "DLP1 applies to Document1." },
      { text: "DLP1 applies to Document2." },
      { text: "DLP1 applies to Document3." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "The rule matches when Group1 OR Group2 is true. Group1 uses **All of these**, so a document must contain 1 to 5 credit card numbers and also 1 to 2 SWIFT codes. Group2 matches any document with 10 or more credit card numbers (10 to Any). An instance count range has a maximum as well as a minimum: a document with more instances than the upper value doesn't meet that condition. DLP1 is applied only to Site1, so documents stored elsewhere are not evaluated at all.",
        "Document1 is on Site1. Its 3 credit card numbers are within 1 to 5, but its 3 SWIFT codes are above the maximum of 2, so Group1 fails, and 3 credit card numbers are fewer than the 10 that Group2 needs: No. Document2 is stored on Site2, outside the policy's scope: No (its counts would not match either, since 7 credit card numbers are above 5 for Group1 and below 10 for Group2). Document3 is on Site1. Its 15 credit card numbers are outside Group1's range and it has no SWIFT codes, but 15 meets Group2's 10 or more: Yes."
      ],
      wrong: [
        ["Statement 1 — Yes", "Document1 meets the credit card part of Group1, but All of these also requires 1 to 2 SWIFT codes, and the document has 3. It has too few credit card numbers for Group2."],
        ["Statement 2 — Yes", "Document2 is stored on Site2, and DLP1 is applied only to Site1."],
        ["Statement 3 — No", "Group2 is joined to Group1 with OR and needs only 10 or more credit card numbers. Document3 has 15."]
      ],
      concept: "In an advanced DLP rule, each group combines its conditions with its group operator, groups are joined by AND or OR, and every instance count range has a minimum and a maximum.",
      takeaway: "Check the location first, then each group: every count within its min and max for All of these, any one group for OR.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Create and deploy a data loss prevention policy", "https://learn.microsoft.com/purview/dlp-create-deploy-policy"]
      ]
    }
  },
  {
    id: "Q453", source: 453, type: "single",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Windows 11 device named Device1 and a user named User1.",
      "User1 works at a branch office and reports slow connections to Microsoft 365 services.",
      "You need to ensure that User1 can test the connections by running the Microsoft 365 network connectivity test tool on Device1. The solution must follow the principle of least privilege",
      "To which group should you add User1 for Device1?"
    ],
    options: [
      { key: "A", text: "Power Users" },
      { key: "B", text: "Network Configuration Operators" },
      { key: "C", text: "Users" },
      { key: "D", text: "Administrators" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The Microsoft 365 network connectivity test has two parts: browser tests on the connectivity test website, and an advanced tests client, a Windows application that the user downloads and runs. Most of the tests come from the client, such as proxy and VPN detection, DNS resolver identification, the Teams media and connectivity checks and the traceroutes. The client requires the .NET 6.0 Runtime, and Microsoft's documentation states that administrator permissions on the machine are required to install it. The command-line version of the tool also tries to install .NET itself when it is missing.",
        "Of the local groups offered, only Administrators can install software on Device1, so it is the least privileged of these groups that lets User1 run the full test. User1 is added to the group on Device1 only."
      ],
      wrong: [
        ["A", "Power Users is a legacy group kept for compatibility with older applications. By default it grants no more rights than the standard Users group, so its members can't install the runtime either."],
        ["B", "Network Configuration Operators can change TCP/IP settings and release or renew addresses. That doesn't include installing software such as the .NET runtime."],
        ["C", "Users is the standard group. A standard user can run the browser tests but can't install the .NET runtime that the advanced tests client needs."]
      ],
      concept: "The advanced tests client of the Microsoft 365 network connectivity test needs the .NET 6.0 Runtime, and installing it requires local administrator permissions.",
      takeaway: "Full network connectivity test on a device: the user needs local administrator rights on that device.",
      refs: [["Microsoft Learn: Microsoft 365 network connectivity test tool", "https://learn.microsoft.com/microsoft-365/enterprise/office-365-network-mac-perf-onboarding-tool"]]
    }
  },
  {
    id: "Q454", source: 454, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Purview portal" },
      { key: "B", text: "the Microsoft Defender portal" },
      { key: "C", text: "the SharePoint admin center" },
      { key: "D", text: "the Microsoft 365 admin center" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A mail contact is a mail-enabled recipient for a person outside the organization. It has an external email address and appears in the address book, but it has no mailbox and can't sign in.",
        "The Microsoft 365 admin center manages contacts under **Users** > **Contacts**, where you add a contact with a display name and the external email address. The Exchange admin center (**Recipients** > **Contacts**) can create them too, but it isn't among the options."
      ],
      wrong: [
        ["A", "The Microsoft Purview portal manages compliance solutions such as DLP, retention, eDiscovery and audit. It doesn't create recipients."],
        ["B", "The Defender portal handles threats, incidents and security policies. It has no recipient management."],
        ["C", "The SharePoint admin center manages sites, sharing and SharePoint settings. Contacts are not created there."]
      ],
      concept: "Mail contacts are recipient objects for external addresses, managed in the Microsoft 365 admin center or the Exchange admin center.",
      takeaway: "An external person in the address book, without a mailbox or account: add a contact in the Microsoft 365 admin center.",
      refs: [["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"]]
    }
  },
  {
    id: "Q455", source: 455, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You configure a new Microsoft Entra enterprise application named App1. App1 requires that a user be assigned the Reports Reader role.",
      "Which type of group should you use to assign the Reports Reader role and to access App1?"
    ],
    options: [
      { key: "A", text: "a security group that has assigned membership" },
      { key: "B", text: "a Microsoft 365 group that has dynamic user membership" },
      { key: "C", text: "a security group that has dynamic user membership" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The group is used twice: it is assigned to App1 so that its members can access the app, and it is assigned the Microsoft Entra role Reports Reader. A Microsoft Entra role can be assigned to a group only if the group was created as role-assignable (the setting **Microsoft Entra roles can be assigned to the group**, `isAssignableToRole`). Role-assignable groups must have assigned membership; dynamic membership isn't supported, because a change to a user's attributes would otherwise hand out an admin role.",
        "A security group with assigned membership meets both needs: created as role-assignable it can hold the Reports Reader role, and it can be assigned to the enterprise application. Its membership is managed by Privileged Role Administrators, or by group owners to whom that is delegated, so every change is deliberate."
      ],
      wrong: [
        ["B", "Microsoft 365 groups can also be role-assignable, but only with assigned membership. With dynamic user membership the group can't be assigned the Reports Reader role."],
        ["C", "A dynamic security group can be assigned to the application, but not to a Microsoft Entra role: role-assignable groups can't have dynamic membership."]
      ],
      concept: "Microsoft Entra roles can be assigned only to role-assignable groups, and those groups must have assigned, not dynamic, membership.",
      takeaway: "A group that receives an Entra role: role-assignable with assigned membership. Dynamic groups are ruled out.",
      refs: [
        ["Microsoft Learn: Use Microsoft Entra groups to manage role assignments", "https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept"],
        ["Microsoft Learn: Manage users and groups assignment to an application", "https://learn.microsoft.com/entra/identity/enterprise-apps/assign-user-or-group-access-portal"]
      ]
    }
  },
  {
    id: "Q456", source: 456, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "Users access Microsoft 365 from both their laptop and a corporate Virtual Desktop Infrastructure (VDI) solution.",
      "From Microsoft Entra ID Protection, you enable a Sign-in risk policy.",
      "Users report that when they use the VDI solution, they are regularly blocked when they attempt to access Microsoft 365.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "a trusted location" },
      { key: "B", text: "the Microsoft 365 network connectivity settings" },
      { key: "C", text: "an Identity Protection settings" },
      { key: "D", text: "the Tenant restrictions settings in Microsoft Entra ID" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "A VDI session reaches Microsoft 365 from the public IP addresses of the VDI hosts, which can be far from where the user's laptop connects. Moving between the laptop and the VDI looks like a sudden change of location and network, which raises sign-in risk detections, and the sign-in risk policy then blocks the user.",
        "Defining the VDI egress IP ranges as a named location and selecting **Mark as trusted location** tells Microsoft Entra ID that these addresses belong to the organization. Sign-ins from trusted named locations improve the accuracy of Identity Protection's risk calculation, so sign-ins from the VDI stop being scored as risky while the policy keeps protecting every other sign-in."
      ],
      wrong: [
        ["B", "The network connectivity settings in the Microsoft 365 admin center describe office locations and egress addresses for network performance insights. Identity Protection doesn't use them."],
        ["C", "Identity Protection's own settings are the risk policies and their notifications. Raising the risk level of the policy or excluding users would weaken protection for every sign-in, and wouldn't tell Identity Protection that the VDI addresses are corporate."],
        ["D", "Tenant restrictions control which tenants users can sign in to from the corporate network. They don't change how sign-in risk is calculated."]
      ],
      concept: "Trusted named locations feed into Identity Protection's risk calculation and reduce false positives from known corporate networks.",
      takeaway: "False sign-in risk from corporate egress IPs such as VDI or proxies: add the IP ranges as a trusted named location.",
      refs: [
        ["Microsoft Learn: Network assignment in Conditional Access (trusted locations)", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"],
        ["Microsoft Learn: Risk policies in Microsoft Entra ID Protection", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-risk-policies"]
      ]
    }
  },
  {
    id: "Q457", source: 457, type: "dropdown",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "Your company has a Microsoft 365 E5 tenant.",
      "Users at the company use the following versions of Microsoft Office:",
      { list: ["Microsoft 365 Apps for enterprise", "Office for the web", "Office 2021", "Office 2024"] },
      "The company currently uses the following Office file types:",
      { list: [".docx", ".xlsx", ".doc", ".xls"] },
      "You plan to use sensitivity labels.",
      "You need to identify the following:",
      { list: ["Which versions of Office support the sensitivity labels.", "Which file types support the sensitivity labels."] },
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Office versions that support the sensitivity labels:", options: ["Office 2021 only", "Office 2021 and Office 2024 only", "Microsoft 365 Apps for enterprise only", "Microsoft 365 Apps for enterprise and Office for the web only"] },
      { id: "f2", label: "Office file types that support the sensitivity labels:", options: [".doc only", ".docx only", ".xls only", ".xlsx only", ".doc and .xls", ".doc and .xlsx", ".doc, .docs, .xls, and .xlsx"] }
    ],
    answer: { f1: 3, f2: 5 },
    explanation: {
      correct: [
        "Sensitivity labels in Office apps require a subscription edition of Office. Microsoft 365 Apps for enterprise has labeling built in, and Office for the web supports labels for Office files once sensitivity labels are enabled for files in SharePoint and OneDrive. Microsoft's documentation states that sensitivity labels aren't supported for standalone editions of Office, sometimes called Office Perpetual, which is what Office 2021 and Office 2024 are. The versions are therefore Microsoft 365 Apps for enterprise and Office for the web only.",
        "For the file types, the reference answer is the option printed as \".doc and .xlsx\". Built-in labeling in Word, Excel and PowerPoint supports the Office Open XML formats, such as .docx and .xlsx, but not the Office 97-2003 binary formats, such as .doc and .xls; a label is stored as metadata inside the Open XML file. Of the two types in the reference choice, .xlsx is an Open XML format, and the reference explanation describes the choice as the Open XML formats .docx and .xlsx."
      ],
      wrong: [
        ["Office 2021 only / Office 2021 and Office 2024 only", "Office 2021 and Office 2024 are standalone (perpetual) editions, and sensitivity labels aren't supported for standalone editions of Office."],
        ["Microsoft 365 Apps for enterprise only", "Office for the web also supports sensitivity labels for Office files once labeling is enabled for SharePoint and OneDrive, so leaving it out is incomplete."],
        [".doc and .xls", "Both are Office 97-2003 binary formats, which built-in labeling doesn't support."],
        [".docx only / .xlsx only", "Each of these names only one of the formats in use."]
      ],
      concept: "Sensitivity labels need a subscription edition of Office (Microsoft 365 Apps, Office for the web), and built-in labeling supports Open XML formats, not Office 97-2003 formats.",
      takeaway: "Perpetual Office 2021 or 2024: no sensitivity labels. Open XML files such as .docx and .xlsx can be labeled; .doc and .xls can't.",
      refs: [
        ["Microsoft Learn: Manage sensitivity labels in Office apps", "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"],
        ["Microsoft Learn: Enable sensitivity labels for Office files in SharePoint and OneDrive", "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"]
      ]
    }
  },
  {
    id: "Q458", source: 458, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "The Microsoft Secure Score for the subscription is 60, and the achievable score is 75.",
      "You need to apply a Conditional Access policy that will require users to use multifactor authentication (MFA) when they connect from an untrusted device.",
      "How will the policy affect the scores?"
    ],
    options: [
      { key: "A", text: "The Secure Score and the achievable score will increase." },
      { key: "B", text: "The Secure Score and the achievable score will remain unchanged." },
      { key: "C", text: "The Secure Score will decrease, and the achievable score will increase." },
      { key: "D", text: "The Secure Score will increase, and the achievable score will decrease." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The reference answer is A.",
        "Secure Score adds up the points earned for recommended security actions, and MFA actions carry some of the most points, for example **Ensure all users can complete multifactor authentication for secure access** and **Require MFA for administrative roles**. Many actions give partial points in proportion to the users they cover. A Conditional Access policy that requires MFA earns points once Secure Score picks up the change, usually within 24 to 48 hours, so the Secure Score goes up.",
        "The achievable score is one of the optional views on the Secure Score page: the score that can be achieved with your Microsoft licenses and your current risk acceptance. It is a ceiling, and earning points moves your score toward it without lowering it, which rules out D. The reference explanation adds that the achievable score can grow as Microsoft adds recommendations, so the option in which both scores increase is the one it selects."
      ],
      wrong: [
        ["B", "Implementing an MFA policy completes or partially completes recommended actions and adds points, so the Secure Score doesn't stay the same."],
        ["C", "Implementing a recommended control adds points. It never lowers the Secure Score."],
        ["D", "The achievable score is the maximum reachable with your licenses and accepted risks. Earning points moves your score toward it but doesn't reduce it."]
      ],
      concept: "Secure Score rises as recommended actions are implemented, and the achievable score is the ceiling set by your licenses and risk acceptance.",
      takeaway: "Implementing MFA never lowers Secure Score. For this question, the reference answer is that both scores increase.",
      logic: "Remove C (a security control can't lower Secure Score), B (the score does change) and D (earning points doesn't lower the ceiling).",
      refs: [
        ["Microsoft Learn: Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score"],
        ["Microsoft Learn: Assess your security posture through Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score-improvement-actions"]
      ]
    }
  },
  {
    id: "Q459", source: 459, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You add a cloud-based app named App1 to the Microsoft Entra enterprise applications list.",
      "You need to ensure that two-step verification is enforced for all user accounts the next time they connect to App1.",
      "Which three settings should you configure from the policy? To answer, select the appropriate settings in the answer area.",
      { image: "q459-new-ca-policy.png", alt: "New Conditional Access policy page. Name: App1 policy, with a green check mark. Assignments: Users, set to All users; Target resources, No target resources selected; Network (marked NEW), Not configured; Conditions, 0 conditions selected. Access controls: Grant, 0 controls selected; Session, 0 controls selected. Enable policy: Report-only (selected), On, Off." },
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "First setting (highest of the three on the page)", options: ["Name", "Users", "Target resources", "Network", "Conditions", "Grant", "Session", "Enable policy"] },
      { id: "f2", label: "Second setting", options: ["Name", "Users", "Target resources", "Network", "Conditions", "Grant", "Session", "Enable policy"] },
      { id: "f3", label: "Third setting (lowest of the three on the page)", options: ["Name", "Users", "Target resources", "Network", "Conditions", "Grant", "Session", "Enable policy"] }
    ],
    answer: { f1: 0, f2: 4, f3: 7 },
    explanation: {
      correct: [
        "The reference answer is Name, Conditions and Enable policy.",
        "Every Conditional Access policy needs a name before it can be saved; here it is already filled in as App1 policy. **Conditions** (device platforms, locations, client apps, sign-in risk and so on) narrow when a policy applies. Left at 0 conditions selected, the policy applies to every sign-in of the assigned users to the target resources, which is what \"all user accounts the next time they connect\" asks for. **Enable policy** decides whether the policy is enforced: in Report-only mode Conditional Access evaluates the policy and only logs the result, so the policy must be switched to **On** before users are actually prompted for MFA.",
        "For the policy to have any effect, the two empty settings have to be completed as well: **Target resources**, where App1 is selected (it shows No target resources selected), and **Grant**, where access is granted with **Require multifactor authentication** (0 controls selected). Users is already set to All users."
      ],
      wrong: [
        ["Users", "Already set to All users, which covers every user account."],
        ["Network", "A network assignment limits the policy to, or away from, specific locations. The requirement covers every connection, wherever it comes from."],
        ["Session", "Session controls such as sign-in frequency shape the session after sign-in. Requiring MFA is a grant control."],
        ["Target resources / Grant", "The reference answer doesn't select them, but a policy that enforces MFA for App1 needs App1 under Target resources and Require multifactor authentication under Grant."]
      ],
      concept: "A Conditional Access policy needs assignments (users and target resources), an access control and the On state to enforce anything; conditions are optional.",
      takeaway: "For this question, the reference answer is Name, Conditions and Enable policy. Enforcing MFA for one app also takes the app as target resource, Require multifactor authentication as grant control, and the policy On.",
      refs: [
        ["Microsoft Learn: Building a Conditional Access policy", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-policies"],
        ["Microsoft Learn: What is Conditional Access report-only mode?", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-report-only"]
      ]
    }
  },
  {
    id: "Q460", source: 460, type: "dropdown",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "Users report that they received email that contains links to malicious content.",
      "You need to identify which users clicked the links and immediately disable their user accounts. The solution must minimize administrative effort.",
      "What should you do in the Microsoft Defender portal? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To identify which users clicked the links:", options: ["Review the alerts queue.", "Run an audit log search.", "Run a message trace."] },
      { id: "f2", label: "To disable the user accounts:", options: ["Create an automated response action.", "Create a quarantine policy.", "Run a message trace.", "Run a supervision policy."] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "With Defender for Office 365, included in Microsoft 365 E5, Safe Links checks URLs in email at the time of click and records each click. These Safe Links click events are written to the unified audit log by the Threat Intelligence workload (record type ThreatIntelligenceUrl), so an audit log search on them returns the users who clicked the malicious links, and when. The same click data also feeds the URL protection report, Threat Explorer and the `UrlClickEvents` advanced hunting table.",
        "To disable the accounts immediately without manual work, you create an automated response action. In the Defender portal, a custom detection rule runs an advanced hunting query on a schedule or continuously (`UrlClickEvents` supports the near real-time frequency), raises an alert for each match and can act automatically on the users in the results, including **Disable user**, which temporarily prevents the user from signing in. Once the rule exists, every user it finds is disabled without an administrator stepping in."
      ],
      wrong: [
        ["Review the alerts queue.", "Alerts such as a potentially malicious URL click can point to some clicks, but the queue is a list of alerts to triage, not a record of every user who clicked."],
        ["Run a message trace.", "Message trace follows a message through mail flow up to delivery. It shows who received the message, not who clicked a link in it, and it doesn't act on accounts."],
        ["Create a quarantine policy.", "Quarantine policies define what users can do with their quarantined messages and how they are notified. They don't act on user accounts."],
        ["Run a supervision policy.", "Supervision policies, now communication compliance, review messages for inappropriate or sensitive content. They don't disable accounts."]
      ],
      concept: "Safe Links click events are recorded and searchable, and Defender XDR custom detection rules can disable the users they find automatically.",
      takeaway: "Who clicked a malicious link: Safe Links click records (audit log, Threat Explorer, UrlClickEvents). Disable them automatically: an automated response action such as a custom detection with Disable user.",
      refs: [
        ["Microsoft Learn: Create custom detection rules in Microsoft Defender XDR", "https://learn.microsoft.com/defender-xdr/custom-detection-rules"],
        ["Microsoft Learn: Complete Safe Links overview for Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/safe-links-about"],
        ["Microsoft Learn: Search the audit log", "https://learn.microsoft.com/purview/audit-search"]
      ]
    }
  },
  {
    id: "Q461", source: 461, type: "single",
    domain: "tenant", topic: "SharePoint, OneDrive and Teams", difficulty: "Basic",
    stem: [
      "You use Microsoft 365 Copilot.",
      "What does Copilot use to generate responses based on corporate data stored in Microsoft SharePoint?"
    ],
    options: [
      { key: "A", text: "Microsoft Purview" },
      { key: "B", text: "Microsoft Defender" },
      { key: "C", text: "Microsoft Graph" },
      { key: "D", text: "Microsoft Intune" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Microsoft 365 Copilot (now named Microsoft Copilot) coordinates three components: the large language models, the Microsoft 365 apps, and the content in Microsoft Graph. Copilot accesses content and context through Microsoft Graph, which connects the user's documents in SharePoint and OneDrive, email, calendar, chats and meetings, and it grounds its responses in that organizational data.",
        "Because the content comes through Microsoft Graph, Copilot surfaces only data that the user has at least view permission to. It honors SharePoint permissions and the usage rights of encrypted content, which is why oversharing in SharePoint matters before Copilot is rolled out."
      ],
      wrong: [
        ["A", "Microsoft Purview governs and protects the data Copilot uses, with sensitivity labels, DLP, audit and retention. It isn't the layer through which Copilot retrieves content."],
        ["B", "Microsoft Defender protects identities, devices, email and apps against threats. It doesn't supply content to Copilot."],
        ["D", "Microsoft Intune manages devices and app protection policies. It plays no part in retrieving SharePoint content."]
      ],
      concept: "Microsoft 365 Copilot is grounded in organizational data through Microsoft Graph and respects each user's existing permissions.",
      takeaway: "Copilot reads corporate data in SharePoint, OneDrive, mail and Teams through Microsoft Graph, limited to what the user can access.",
      refs: [
        ["Microsoft Learn: Data, Privacy, and Security for Microsoft Copilot", "https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-privacy"],
        ["Microsoft Learn: What is Microsoft Copilot?", "https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-overview"]
      ]
    }
  },
  {
    id: "Q462", source: 462, type: "single",
    domain: "tenant", topic: "SharePoint, OneDrive and Teams", difficulty: "Basic",
    stem: [
      "Your organization has a Microsoft 365 subscription.",
      "You need to generate a report that shows the permissions and active sharing links of content stored in Microsoft OneDrive accounts.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Reports in the Microsoft 365 admin center" },
      { key: "B", text: "Data access governance in the SharePoint admin center" },
      { key: "C", text: "Audit in the Microsoft Defender portal" },
      { key: "D", text: "eDiscovery in the Microsoft Purview portal" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "OneDrive accounts are SharePoint sites, so their permissions and sharing are reported in the SharePoint admin center. The Data access governance reports, under **Reports** > **Data access governance**, are made to find potentially overshared content in SharePoint and OneDrive.",
        "The site permissions snapshot report shows the permission structure across all SharePoint and OneDrive sites, including sites with large numbers of users, guests or the Everyone except external users group. The sharing links activity report lists the sites where users created the most Anyone, People in your organization and Specific people links in the last 28 days. The full set of reports requires SharePoint Advanced Management; with Microsoft 365 E5 alone, only the activity reports are available."
      ],
      wrong: [
        ["A", "The usage reports in the Microsoft 365 admin center, such as OneDrive usage and activity, give counts of files, storage and activity per user. They don't list permissions or sharing links."],
        ["C", "Audit records individual events, such as a sharing link being created or a file being accessed. It is a history of activities, not a report of the permissions and links in place now."],
        ["D", "eDiscovery searches, holds and exports content for legal and compliance investigations. It doesn't report on permissions or sharing links."]
      ],
      concept: "Data access governance reports in the SharePoint admin center show permissions and sharing across SharePoint and OneDrive to help find oversharing.",
      takeaway: "Who has access and which sharing links exist in SharePoint or OneDrive: SharePoint admin center > Reports > Data access governance.",
      refs: [["Microsoft Learn: Data access governance reports for SharePoint sites", "https://learn.microsoft.com/sharepoint/data-access-governance-reports"]]
    }
  },
  {
    id: "Q463", source: 463, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "Your organization has a Microsoft 365 subscription.",
      "All users have Microsoft 365 Copilot licenses.",
      "You need to identify where sensitive content is being used during Copilot interactions, analyze the content usage patterns, and provide recommendations on applying the appropriate protections.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Microsoft Security Copilot" },
      { key: "B", text: "the Microsoft Purview DSPM for AI solution" },
      { key: "C", text: "the Microsoft Purview Insider Risk Management solution" },
      { key: "D", text: "Microsoft Viva Insights" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Data Security Posture Management (DSPM) for AI in the Microsoft Purview portal is the central place to see and secure how data is used with AI apps, including Microsoft 365 Copilot and agents. Once auditing is on and users have Copilot licenses, its reports and Activity explorer show the AI interactions together with the sensitive information types and sensitive files referenced in prompts and responses, which shows where sensitive content is used and the patterns of that use.",
        "It also makes recommendations for protections, such as one-click policies, default sensitivity labels, a DLP policy that stops Copilot from processing items with chosen labels, and data risk assessments that find potentially overshared SharePoint sites. Microsoft now offers a newer version, Data Security Posture Management, that replaces the classic DSPM for AI."
      ],
      wrong: [
        ["A", "Microsoft Security Copilot is a generative AI assistant for security teams, used to investigate incidents and summarize threats. It doesn't analyze sensitive data in Microsoft 365 Copilot interactions."],
        ["C", "Insider Risk Management scores the risk of individual users from activities such as data exfiltration, and it has a Risky AI usage policy template. It doesn't report where sensitive content is used across Copilot interactions or recommend protections for that data."],
        ["D", "Viva Insights reports on work patterns, wellbeing and collaboration. It doesn't inspect content for sensitive data."]
      ],
      concept: "DSPM for AI gives insight into AI interactions that involve sensitive data and recommends Purview protections for Copilot and other AI apps.",
      takeaway: "Sensitive data in Copilot prompts and responses, with recommended protections: Microsoft Purview DSPM for AI.",
      refs: [
        ["Microsoft Learn: Learn about Data Security Posture Management for AI", "https://learn.microsoft.com/purview/dspm-for-ai"],
        ["Microsoft Learn: Learn about Microsoft Purview Data Security Posture Management (DSPM)", "https://learn.microsoft.com/purview/data-security-posture-management-learn-about"]
      ]
    }
  },
  {
    id: "Q464", source: 464, type: "single",
    domain: "tenant", topic: "SharePoint, OneDrive and Teams", difficulty: "Basic",
    stem: [
      "Your organization has a Microsoft 365 subscription.",
      "You need to generate a report that shows the permissions and active sharing links of content stored in Microsoft OneDrive accounts.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Reports in the Microsoft 365 admin center" },
      { key: "B", text: "Data access governance in the SharePoint admin center" },
      { key: "C", text: "Audit in the Microsoft Defender portal" },
      { key: "D", text: "eDiscovery in the Microsoft Purview portal" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Each OneDrive account is a SharePoint site, so access to OneDrive content is governed and reported in the SharePoint admin center. Its Data access governance reports (**Reports** > **Data access governance**) are built to show who has access to content and how it is shared, so that you can spot oversharing.",
        "For permissions, the site permissions report takes a snapshot of the permission structure of every SharePoint and OneDrive site, highlighting sites open to many users, to guests or to Everyone except external users. For sharing links, the sharing links report shows where users recently created Anyone, People in your organization and Specific people links. From these reports you can follow up with site access reviews or restricted access control."
      ],
      wrong: [
        ["A", "Microsoft 365 admin center reports cover usage and adoption, such as storage used and files viewed or edited. They contain no permission or sharing link details."],
        ["C", "Audit shows what happened, one event at a time, such as a link being created. It doesn't give the current permissions and links of OneDrive content."],
        ["D", "eDiscovery finds, preserves and exports content for investigations and legal cases. It isn't a permissions or sharing report."]
      ],
      concept: "Permissions and sharing links of SharePoint and OneDrive content are reported by the Data access governance reports in the SharePoint admin center.",
      takeaway: "Report on OneDrive permissions and sharing links: Data access governance in the SharePoint admin center.",
      refs: [["Microsoft Learn: Data access governance reports for SharePoint sites", "https://learn.microsoft.com/sharepoint/data-access-governance-reports"]]
    }
  },
  {
    id: "Q465", source: 465, type: "single",
    domain: "tenant", topic: "SharePoint, OneDrive and Teams", difficulty: "Basic",
    stem: [
      "Your organization has a Microsoft 365 subscription that contains Microsoft SharePoint sites and Microsoft Teams teams.",
      "You discover that the sites and the teams are shared to users outside your organization.",
      "You need to identify which sites and teams were shared to the external users.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Defender portal" },
      { key: "B", text: "the SharePoint admin center" },
      { key: "C", text: "the Microsoft Teams admin center" },
      { key: "D", text: "the Microsoft 365 admin center" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Every team in Microsoft Teams is backed by a SharePoint site that stores its files, so external sharing of both sites and team content is controlled and reported in SharePoint. The SharePoint admin center lists all sites, including the sites connected to teams, under **Sites** > **Active sites**, where you can see each site's external sharing setting.",
        "To find the sites that have actually been shared outside the organization, the Data access governance reports in the same admin center help: the site permissions report highlights sites whose permissions include external guests, and the sharing links report shows sites where users recently created links, including Anyone links and links for specific people outside the organization."
      ],
      wrong: [
        ["A", "The Defender portal handles threats, incidents and security policies. It doesn't report which sites or teams are shared externally."],
        ["C", "The Teams admin center manages teams, guest access and external access settings, but the sharing of a team's files and site is managed and reported in SharePoint."],
        ["D", "The Microsoft 365 admin center holds tenant-wide settings, users and usage reports, including the list of guest users, but not which sites or teams were shared with them."]
      ],
      concept: "External sharing of SharePoint sites, including the sites behind teams, is configured and reported in the SharePoint admin center.",
      takeaway: "Which sites and teams are shared externally: the SharePoint admin center (Active sites and the Data access governance reports).",
      refs: [
        ["Microsoft Learn: Overview of external sharing in SharePoint and OneDrive in Microsoft 365", "https://learn.microsoft.com/sharepoint/external-sharing-overview"],
        ["Microsoft Learn: Data access governance reports for SharePoint sites", "https://learn.microsoft.com/sharepoint/data-access-governance-reports"]
      ]
    }
  },
  {
    id: "Q466", source: 466, type: "single",
    domain: "tenant", topic: "SharePoint, OneDrive and Teams", difficulty: "Intermediate",
    stem: [
      "Your organization has a Microsoft 365 E5 subscription that contains a Microsoft SharePoint site named Site1.",
      "You need to prevent Microsoft 365 Copilot from accessing Site1 without affecting user access to the site.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Restricted site access" },
      { key: "B", text: "Restricted Content Discovery" },
      { key: "C", text: "sensitivity labels" },
      { key: "D", text: "sharing policies" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Restricted Content Discovery is a site-level setting of SharePoint Advanced Management. You turn it on for Site1 in the SharePoint admin center (**Active sites** > the site > **Settings** > **Restrict content from Microsoft Copilot**) or with `Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true`. Content from the site then no longer appears in organization-wide search results or in Copilot responses, and AI entry points such as the Copilot button are removed from the site.",
        "It changes discoverability, not access: the site's permissions stay the same, and users who have access keep opening and working with its content directly."
      ],
      wrong: [
        ["A", "Restricted site access (restricted access control) limits access to a site to the members of specified groups. It changes who can use the site, which the requirement rules out."],
        ["C", "Sensitivity labels classify and protect individual files and emails, and a DLP policy can stop Copilot from processing items with chosen labels. That works item by item, and encrypting labels also restrict what users can do; it isn't the setting that hides a whole site from Copilot while leaving access alone."],
        ["D", "Sharing policies control how content can be shared inside and outside the organization. They don't affect what Copilot can find."]
      ],
      concept: "Restricted Content Discovery hides a SharePoint site's content from organization-wide search and Copilot without changing its permissions.",
      takeaway: "Keep Copilot away from a site but keep user access: Restricted Content Discovery. Limit who can open the site: restricted access control.",
      refs: [
        ["Microsoft Learn: Restrict discovery of SharePoint sites and content", "https://learn.microsoft.com/sharepoint/restricted-content-discovery"],
        ["Microsoft Learn: Restrict SharePoint site access with Microsoft 365 groups and Microsoft Entra security groups", "https://learn.microsoft.com/sharepoint/restricted-access-control"]
      ]
    }
  },
  {
    id: "Q467", source: 467, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Basic",
    stem: [
      "You need to identify files and emails that contain social security numbers (SSNs) and credit card numbers.",
      "What should you use in the Microsoft Purview portal?"
    ],
    options: [
      { key: "A", text: "Activity explorer" },
      { key: "B", text: "Data explorer" },
      { key: "C", text: "Information Protection reports" },
      { key: "D", text: "Information Protection policies" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Data explorer (**Information Protection** > **Explorers** > **Data explorer**, formerly content explorer) shows a current snapshot of the items that have a sensitivity label or a retention label, or that have been classified as a sensitive information type. You select a sensitive information type, such as U.S. Social Security Number (SSN) or Credit Card Number, then a location such as Exchange, SharePoint or OneDrive, and drill down to the emails and files that contain it.",
        "Because it can show the contents of items, access is restricted: the Data Explorer List viewer role group shows the items and their locations, and Data Explorer Content viewer lets you open their contents."
      ],
      wrong: [
        ["A", "Activity explorer lists what happened to labeled and classified content, such as labels applied or changed, DLP matches, and files copied or printed. It lists activities, not the items that contain a given type of data."],
        ["C", "Information protection reports give totals and trends, such as the most used labels and sensitive information types found. They don't list the individual files and emails."],
        ["D", "Information protection policies, such as label policies and auto-labeling policies, publish and apply labels. They act on content but don't list where SSNs and credit card numbers are."]
      ],
      concept: "Data explorer lists the items classified by sensitive information types or labels; Activity explorer lists the activities on them.",
      takeaway: "Find which files and emails contain SSNs or credit card numbers: Data explorer (formerly content explorer).",
      refs: [
        ["Microsoft Learn: Get started with data explorer", "https://learn.microsoft.com/purview/data-classification-data-explorer"],
        ["Microsoft Learn: Get started with activity explorer", "https://learn.microsoft.com/purview/data-classification-activity-explorer"]
      ]
    }
  }
);
