/* MS-102 question bank, part 2: questions 17 to 32 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q017", source: 17, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "Your company has a Microsoft 365 E5 subscription.",
      "Users in the research department work with sensitive data.",
      "You need to prevent the research department users from accessing potentially unsafe websites by using hyperlinks embedded in email messages and documents. Users in other departments must not be restricted.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Create a data loss prevention (DLP) policy that has a Content is shared condition." },
      { key: "B", text: "Modify the safe links policy Global settings." },
      { key: "C", text: "Create a data loss prevention (DLP) policy that has a Content contains condition." },
      { key: "D", text: "Create a new safe links policy." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Safe Links in Microsoft Defender for Office 365 checks URLs at the moment a user clicks them, in email messages and in Office documents and apps, and blocks the sites that are known to be malicious. Which users are protected, and how strictly, is decided by Safe Links policies.",
        "A custom Safe Links policy has its own recipient conditions, so you can create one that applies only to the research department, for example to a group or to the users of that department. Users in other departments are not included in the policy and are not restricted by it."
      ],
      wrong: [
        ["A", "A DLP policy protects sensitive content from being shared. It does not check the websites behind hyperlinks when a user clicks them."],
        ["B", "Global settings apply to the whole organization, not to one department. A setting there cannot be limited to the research users."],
        ["C", "A Content contains condition detects sensitive information in content. It has nothing to do with blocking unsafe websites."]
      ],
      concept: "Safe Links policies scan and verify URLs at the time of click, and each custom policy is scoped to the users, groups or domains it names.",
      takeaway: "Protection for one department only: create a new Safe Links policy scoped to that department instead of changing settings for everyone.",
      refs: [
        ["Microsoft Learn: Set up Safe Links policies in Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/safe-links-policies-configure"],
        ["Microsoft Learn: Safe Links in Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/safe-links-about"]
      ]
    }
  },
  {
    id: "Q018", source: 18, type: "yesno",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Advanced",
    stem: [
      "You have an Azure AD tenant that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of"], rows: [["User1", "Group1"], ["User2", "Group2"], ["User3", "Group3"]] } },
      "Your company uses Microsoft Defender for Endpoint. Microsoft Defender for Endpoint contains the roles shown in the following table.",
      { table: { head: ["Name", "Permission", "Assigned user group"], rows: [
        ["Microsoft Defender for Endpoint administrator (default)", "View data, Alerts investigation, Active remediation actions, Manage security settings", "Group3"],
        ["Role1", "View data, Alerts investigation", "Group1"],
        ["Role2", "View data", "Group2"]
      ] } },
      "Microsoft Defender for Endpoint contains the device groups shown in the following table.",
      { table: { head: ["Rank", "Device group", "Device name", "User access"], rows: [
        ["1", "ATP1", "Device1", "Group1"],
        ["Last", "Ungrouped devices (default)", "Device2", "Group2"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can run an antivirus scan on Device2." },
      { text: "User2 can collect an investigation package from Device2." },
      { text: "User3 can isolate Device1." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "Role-based access control in Defender for Endpoint has two parts. A role decides what a user may do, and the user access of a device group decides on which devices the user may do it. An action on a device needs both.",
        "Statement 1 is No. Device2 is in Ungrouped devices, whose user access is Group2. User1 is a member of Group1 only, so Device2 is outside the devices that User1 can work with. Role1 includes Alerts investigation, which covers running scans, but only on devices in User1's scope.",
        "Statement 2 is No. User2 is in Group2, so Device2 is in scope, but Role2 grants only View data. Collecting an investigation package needs the Alerts investigation permission (or a response permission such as Active remediation actions), and View data is read-only.",
        "Statement 3 is Yes. User3 is in Group3, which holds the built-in Microsoft Defender for Endpoint administrator (default) role. That role has every permission, including Active remediation actions, which cover response actions such as isolating a device. Members of this administrator role have unrestricted access to all devices, regardless of device groups and their user group assignments, so User3 can isolate Device1 although ATP1 lists only Group1."
      ],
      wrong: [
        ["Statement 1 — Yes", "Role1 would allow a scan, but Device2 belongs to a device group that only Group2 can access."],
        ["Statement 2 — Yes", "User2 can see Device2, but View data is a read-only permission and does not include collecting an investigation package."],
        ["Statement 3 — No", "Group3 holds the full administrator role, which includes the remediation actions needed to isolate a device and is not limited by device group access."]
      ],
      concept: "In Defender for Endpoint RBAC, roles grant permissions and device groups grant the scope; a user can act on a device only when a role allows the action and the device's group gives the user's group access, except that the built-in administrator role reaches every device.",
      takeaway: "Check two things for each statement: does the user's role include the action, and does the device's group give the user's group access? The built-in administrator role passes both.",
      refs: [
        ["Microsoft Learn: Create and manage roles for role-based access control", "https://learn.microsoft.com/defender-endpoint/user-roles"],
        ["Microsoft Learn: Use role-based access control to grant fine-grained access to Microsoft Defender portal", "https://learn.microsoft.com/defender-endpoint/rbac"],
        ["Microsoft Learn: Create and manage device groups", "https://learn.microsoft.com/defender-endpoint/machine-groups"]
      ]
    }
  },
  {
    id: "Q019", source: 19, type: "dropdown",
    domain: "compliance", topic: "Compliance roles and Compliance Manager", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You need to ensure that administrators are notified when a user receives an email message that contains malware. The solution must use the principle of least privilege.",
      "Which type of policy should you create, and which Microsoft Purview solutions role is required to create the policy? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Policy type:", options: ["Alert", "Threat", "Compliance"] },
      { id: "f2", label: "Role:", options: ["Quarantine Administrator", "Security Administrator", "Organization Management", "Communication Compliance Administrators"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "An alert policy defines an activity or condition, such as an email message with malware being delivered, and generates an alert and an email notification to the recipients you choose when it occurs. That is exactly a notification to administrators when a user receives malware.",
        "Creating alert policies requires the Manage Alerts role (or the Organization Configuration role). Among the role groups offered, Security Administrator includes Manage Alerts and is focused on security features, while Organization Management also includes it but can control permissions and settings across the whole organization. Security Administrator is therefore the least privileged choice here."
      ],
      wrong: [
        ["Threat", "Threat policies, such as anti-malware, anti-phishing and Safe Attachments policies, decide how messages are filtered and handled. Raising a notification when an event occurs is the job of an alert policy."],
        ["Compliance", "There is no compliance policy type for this purpose. Compliance policies, such as DLP or retention, govern how content is handled."],
        ["Quarantine Administrator", "This role group manages quarantined messages. It does not include the Manage Alerts role needed to create alert policies."],
        ["Organization Management", "It can create alert policies, but it carries far more permissions than the task needs, so it breaks the principle of least privilege."],
        ["Communication Compliance Administrators", "This role group administers communication compliance policies, which review messages for policy violations, not malware alerts."]
      ],
      concept: "Alert policies send notifications when a defined activity or threat occurs, and creating them requires the Manage Alerts role, which is part of role groups such as Security Administrator and Organization Management.",
      takeaway: "Notify admins when something happens: an alert policy. For least privilege, pick the narrower role group that still includes Manage Alerts.",
      refs: [
        ["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/alert-policies"],
        ["Microsoft Learn: Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview", "https://learn.microsoft.com/defender-office-365/scc-permissions"]
      ]
    }
  },
  {
    id: "Q020", source: 20, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to compare the current Safe Links configuration to the Microsoft recommended configurations.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Microsoft Purview" },
      { key: "B", text: "Azure AD Identity Protection" },
      { key: "C", text: "Microsoft Secure Score" },
      { key: "D", text: "the configuration analyzer" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The configuration analyzer in the Microsoft Defender portal compares the settings of your threat policies with the recommended values of the Standard and Strict preset security policies. It covers anti-spam, anti-malware and anti-phishing policies and, in Defender for Office 365, Safe Links and Safe Attachments policies.",
        "For each setting it shows the current value, the recommended value and the policy it belongs to, and you can apply the recommendation from the same page. That is a direct comparison of the current Safe Links configuration with Microsoft's recommendations."
      ],
      wrong: [
        ["A", "Microsoft Purview is the compliance portal for data protection, retention and eDiscovery. It does not evaluate Safe Links settings."],
        ["B", "Identity Protection detects and responds to user and sign-in risk. It has nothing to do with email threat policies."],
        ["C", "Secure Score measures the overall security posture with improvement actions. It does not list each Safe Links setting next to the recommended value the way the configuration analyzer does."]
      ],
      concept: "The configuration analyzer compares existing EOP and Defender for Office 365 policy settings with the Standard and Strict recommendations and shows the differences.",
      takeaway: "Compare threat policy settings with Microsoft's recommended Standard or Strict values: the configuration analyzer.",
      refs: [["Microsoft Learn: Configuration analyzer for threat policies", "https://learn.microsoft.com/defender-office-365/configuration-analyzer-for-security-policies"]]
    }
  },
  {
    id: "Q021", source: 21, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.",
      "When users attempt to access the portal of a partner company, they receive the message shown in the following exhibit.",
      { image: "q021-smartscreen-block-page.png", alt: "Red Microsoft Defender SmartScreen block page with a warning icon: This website is blocked by your organization. Contact your administrator for more information. Hosted by www.contoso.com. A Go back button. Footer: Microsoft Defender SmartScreen." },
      "You need to enable user access to the partner company's portal.",
      "Which Microsoft Defender for Endpoint setting should you modify?"
    ],
    options: [
      { key: "A", text: "Alert notifications" },
      { key: "B", text: "Alert suppression" },
      { key: "C", text: "Custom detections" },
      { key: "D", text: "Advanced hunting" },
      { key: "E", text: "Indicators" }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "\"This website is blocked by your organization\" is the page that Microsoft Defender SmartScreen shows when Defender for Endpoint blocks a site for the organization, for example because a URL or domain indicator with the Block action matches it.",
        "Indicators are where Defender for Endpoint keeps your own allow and block decisions for files, IP addresses, URLs, domains and certificates. To let users reach the partner's portal, you change the indicator that blocks it, or create an indicator with the Allow action for the partner's URL or domain."
      ],
      wrong: [
        ["A", "Alert notifications send email to administrators about alerts. They do not control which websites users can open."],
        ["B", "Suppression rules hide or resolve alerts that match a pattern. Blocking a website is not an alert, so suppression changes nothing for the user."],
        ["C", "Custom detections are scheduled advanced hunting queries that raise alerts and can take actions. They are not an allow or block list for websites."],
        ["D", "Advanced hunting is for querying data. It can show the blocked connections but cannot unblock them."]
      ],
      concept: "Custom indicators in Defender for Endpoint let you allow or block files, IP addresses, URLs and domains based on your own decisions or threat intelligence.",
      takeaway: "A site blocked \"by your organization\" through Defender for Endpoint is unblocked under Settings, Endpoints, Indicators.",
      refs: [
        ["Microsoft Learn: Create indicators for IPs and URLs/domains", "https://learn.microsoft.com/defender-endpoint/indicator-ip-domain"],
        ["Microsoft Learn: Overview of indicators in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/indicators-overview"]
      ]
    }
  },
  {
    id: "Q022", source: 22, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E3 subscription.",
      "You plan to launch Attack simulation training for all users.",
      "Which social engineering technique and training experience will be available? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Social engineering technique:", options: ["Credential harvest", "Link to malware", "Malware attachment"] },
      { id: "f2", label: "Training experience:", options: ["Identity Theft", "Mass Market Phishing", "Web Phishing"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "The full Attack simulation training requires Microsoft 365 E5 or Microsoft Defender for Office 365 Plan 2. Microsoft 365 E3 customers get only a subset of its capabilities as a trial.",
        "That E3 trial offering contains the Credential Harvest payload, a simulated message with a link to a fake sign-in page that collects the user's credentials, and the choice of two training experiences: ISA Phishing or Mass Market Phishing. No other capabilities are part of it, so of the choices shown, Credential harvest and Mass Market Phishing are the ones available."
      ],
      wrong: [
        ["Link to malware", "Simulations that link to a malicious file are part of the full Attack simulation training of E5 or Defender for Office 365 Plan 2, not of the E3 trial."],
        ["Malware attachment", "Attachment simulations are also outside the E3 trial, which offers only the Credential Harvest payload."],
        ["Identity Theft", "The E3 trial offers only the ISA Phishing and Mass Market Phishing training experiences."],
        ["Web Phishing", "This training experience is also outside the two that the E3 trial offers."]
      ],
      concept: "Microsoft 365 E3 has a limited trial of Attack simulation training: the Credential Harvest payload and the ISA Phishing or Mass Market Phishing trainings, while E5 or Defender for Office 365 Plan 2 unlocks every technique and the full catalog.",
      takeaway: "E3 Attack simulation training: Credential harvest only, with ISA Phishing or Mass Market Phishing training. Everything else needs E5 or Defender for Office 365 Plan 2.",
      refs: [["Microsoft Learn: Get started using Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-get-started"]]
    }
  },
  {
    id: "Q023", source: 23, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.",
      "You need to ensure that users are prevented from opening or downloading malicious files from Microsoft Teams, OneDrive, or SharePoint Online.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Create a new Anti-malware policy." },
      { key: "B", text: "Configure the Safe Links global settings." },
      { key: "C", text: "Create a new Anti-phishing policy." },
      { key: "D", text: "Configure the Safe Attachments global settings." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Safe Attachments for SharePoint, OneDrive, and Microsoft Teams is not configured in a Safe Attachments policy. It is a single organization-wide switch, **Turn on Defender for Office 365 for SharePoint, OneDrive, and Microsoft Teams**, in the Safe Attachments global settings.",
        "When it is on, files that are found to be malicious are locked: by default users cannot open, move, copy or share them, but they can still delete and download them. To stop the downloads as well, you also run `Set-SPOTenant -DisallowInfectedFileDownload $true` in SharePoint Online PowerShell."
      ],
      wrong: [
        ["A", "Anti-malware policies scan email messages and their attachments. They do not cover files stored in SharePoint, OneDrive or Teams."],
        ["B", "Safe Links works on URLs, not on files. Its global settings do not scan or lock documents."],
        ["C", "Anti-phishing policies protect against impersonation and spoofing in email. They do not scan files."]
      ],
      concept: "Safe Attachments for SharePoint, OneDrive, and Microsoft Teams is turned on in the Safe Attachments global settings and locks files that are detected as malicious.",
      takeaway: "Malicious files in SharePoint, OneDrive or Teams: turn on Defender for Office 365 for those workloads in the Safe Attachments global settings, and use `DisallowInfectedFileDownload` to block downloads too.",
      refs: [
        ["Microsoft Learn: Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-about"],
        ["Microsoft Learn: Turn on Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-configure"]
      ]
    }
  },
  {
    id: "Q024", source: 24, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Advanced",
    stem: [
      "Your company uses Microsoft Defender for Endpoint. Microsoft Defender for Endpoint includes the device groups shown in the following table.",
      { table: { head: ["Rank", "Device group", "Members"], rows: [
        ["1", "Group1", "`Tag Equals demo And OS In Windows 10`"],
        ["2", "Group2", "`Tag Equals demo`"],
        ["3", "Group3", "`Domain Equals adatum.com`"],
        ["4", "Group4", "`Domain Equals adatum.com And OS In Windows 10`"],
        ["Last", "Ungrouped devices (default)", "Not applicable"]
      ] } },
      "You onboard a computer named computer1 to Microsoft Defender for Endpoint as shown in the following exhibit.",
      { image: "q024-computer1-device-page.png", alt: "Device page of computer1 under Settings > Endpoints > computer1. Device summary: Risk level None. Device details: Domain adatum.com; OS Windows 10 64-bit, Version 21H2, Build 19044.2130. No tags are shown." },
      "Use the drop-down menus to select the answer choice that completes each statement.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Computer1 will be a member of [answer choice].", options: ["Group3 only", "Group4 only", "Group3 and Group4 only", "Ungrouped devices"] },
      { id: "f2", label: "If you add the tag demo to Computer1, the computer will be a member of [answer choice].", options: ["Group1 only", "Group1 and Group2 only", "Group1, Group2, Group3, and Group4", "Ungrouped devices"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "A device in Defender for Endpoint belongs to exactly one device group. The rules are evaluated in rank order, and when a device matches several groups it is added only to the highest ranked one. A device that matches no group goes to Ungrouped devices.",
        "Computer1 is in the adatum.com domain and runs Windows 10, and it has no tag. It does not match Group1 or Group2, which both need the tag demo. It matches Group3 (rank 3) and Group4 (rank 4), so it is placed in Group3 only.",
        "With the tag demo, computer1 matches all four groups: Group1 (tag demo and Windows 10), Group2 (tag demo), Group3 and Group4. Group1 has rank 1, the highest, so computer1 becomes a member of Group1 only."
      ],
      wrong: [
        ["Group3 and Group4 only", "A device is never in two device groups. It goes only to the highest ranked group it matches."],
        ["Group4 only", "Group4 matches too, but Group3 has a higher rank (3 before 4)."],
        ["Ungrouped devices", "Computer1 matches at least one group in both cases, so it is not left ungrouped."],
        ["Group1, Group2, Group3, and Group4", "Matching several groups does not make the device a member of all of them; rank 1 wins."]
      ],
      concept: "Device group membership in Defender for Endpoint is exclusive: each device is assigned to the highest ranked group whose rules it matches.",
      takeaway: "Find every group whose rules the device matches, then keep only the one with the best rank.",
      refs: [["Microsoft Learn: Create and manage device groups", "https://learn.microsoft.com/defender-endpoint/machine-groups"]]
    }
  },
  {
    id: "Q025", source: 25, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365.",
      "The subscription has the default inbound anti-spam policy and a custom Safe Attachments policy.",
      "You need to identify the following information:",
      { list: [
        "The number of email messages quarantined by zero-hour auto purge (ZAP)",
        "The number of times users clicked a malicious link in an email message"
      ] },
      "Which Email & collaboration report should you use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To identify the number of emails quarantined by ZAP:", options: ["Mailflow status report", "Spoof detections", "Threat protection status", "URL threat protection"] },
      { id: "f2", label: "To identify the number of times users clicked a malicious link in an email:", options: ["Mailflow status report", "Spoof detections", "Threat protection status", "URL threat protection"] }
    ],
    answer: { f1: 0, f2: 3 },
    explanation: {
      correct: [
        "The Mailflow status report shows how the email threat protection features filter incoming and outgoing email. Its Mailflow view follows the total email through edge blocking and processing to the outcomes, and **ZAP removed**, the messages removed from mailboxes by zero-hour auto purge after delivery, is one of those outcomes, with its own column in the details table.",
        "The URL threat protection report (now called the URL protection report) is the Defender for Office 365 report for Safe Links. It provides summary and trend views of the threats detected and the actions taken on URL clicks, including the number of clicks by users and whether each click was blocked or clicked through."
      ],
      wrong: [
        ["Spoof detections", "This report shows messages that were allowed or blocked because of spoofing. It counts neither ZAP actions nor link clicks."],
        ["Threat protection status", "It counts messages with malicious content across the protection features. The reference answer takes the ZAP count from the Mailflow status report, where ZAP removed is a separate outcome, and user clicks on links are not part of this report."],
        ["URL threat protection (for ZAP)", "This report is about Safe Links clicks, not about messages removed after delivery."],
        ["Mailflow status report (for clicks)", "It reports how messages were filtered and delivered. What users did with links afterwards is not part of it."]
      ],
      concept: "Email & collaboration reports each answer a different question: the Mailflow status report shows how mail was processed, including ZAP removals, and the URL protection report shows Safe Links click activity.",
      takeaway: "ZAP removals: Mailflow status report. Clicks on malicious links: URL (threat) protection report.",
      refs: [
        ["Microsoft Learn: View email security reports in the Microsoft Defender portal", "https://learn.microsoft.com/defender-office-365/reports-email-security"],
        ["Microsoft Learn: View Defender for Office 365 reports in the Microsoft Defender portal", "https://learn.microsoft.com/defender-office-365/reports-defender-for-office-365"]
      ]
    }
  },
  {
    id: "Q026", source: 26, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You plan to manage incidents in the tenant by using the Microsoft 365 Defender.",
      "Which Microsoft service source will appear on the Incidents page of the Microsoft 365 Defender portal?"
    ],
    options: [
      { key: "A", text: "Microsoft Sentinel" },
      { key: "B", text: "Microsoft Defender for Cloud" },
      { key: "C", text: "Azure Arc" },
      { key: "D", text: "Microsoft Defender for Identity" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Microsoft 365 Defender (now Microsoft Defender XDR) correlates the alerts of its own workloads into incidents: Defender for Endpoint, Defender for Office 365, Defender for Identity and Defender for Cloud Apps, together with sources such as Microsoft Entra ID Protection and Microsoft Purview data loss prevention.",
        "Defender for Identity is one of these native workloads. Its alerts about on-premises Active Directory, such as reconnaissance, credential theft or lateral movement, appear in incidents in the Microsoft 365 Defender portal, combined with the related alerts from the other workloads."
      ],
      wrong: [
        ["A", "Microsoft Sentinel is a SIEM. In the design this question tests, the flow runs the other way: Microsoft 365 Defender incidents are sent to Sentinel."],
        ["B", "Defender for Cloud protects Azure, hybrid and multicloud workloads, and in the Microsoft 365 Defender design this question tests its alerts were handled in Defender for Cloud and Sentinel. It is not one of the Microsoft 365 workloads the question has in mind."],
        ["C", "Azure Arc extends Azure management to servers and clusters outside Azure. It is a management service, not a source of security alerts."]
      ],
      concept: "The incident queue of Microsoft 365 Defender is built from the alerts of the Microsoft 365 security workloads, including Defender for Identity.",
      takeaway: "Defender for Endpoint, Office 365, Identity and Cloud Apps feed Microsoft 365 Defender incidents. Sentinel is the SIEM that consumes them.",
      refs: [
        ["Microsoft Learn: Incidents and alerts in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/incidents-overview"],
        ["Microsoft Learn: What is Microsoft Defender XDR?", "https://learn.microsoft.com/defender-xdr/microsoft-365-defender"]
      ]
    }
  },
  {
    id: "Q027", source: 27, type: "multi",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain named contoso.local. The domain contains five domain controllers.",
      "Your company purchases Microsoft 365 and creates an Azure AD tenant named contoso.onmicrosoft.com.",
      "You plan to install Azure AD Connect on a member server and implement pass-through authentication.",
      "You need to prepare the environment for the planned implementation of pass-through authentication.",
      "Which three actions should you perform? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 3,
    options: [
      { key: "A", text: "From a domain controller, install an Authentication Agent." },
      { key: "B", text: "From the Microsoft Entra admin center, configure an authentication method." },
      { key: "C", text: "From Active Directory Domains and Trusts, add a UPN suffix." },
      { key: "D", text: "Modify the email address attribute for each user account." },
      { key: "E", text: "From the Microsoft Entra admin center, add a custom domain name." },
      { key: "F", text: "Modify the User logon name for each user account." }
    ],
    answer: ["C", "E", "F"],
    explanation: {
      correct: [
        "With pass-through authentication, users sign in to Microsoft 365 with their on-premises user principal name (UPN). The UPNs in this domain end in contoso.local, a non-routable suffix that cannot be verified in Azure AD, so the users would be given the contoso.onmicrosoft.com suffix instead and could not sign in with their usual name.",
        "The preparation is therefore: add a routable custom domain, such as contoso.com, to the tenant in the Microsoft Entra admin center and verify it (E); add the same name as an alternative UPN suffix in Active Directory Domains and Trusts (C); and change the User logon name of each user account to use that suffix (F), which sets the UPN. Then Azure AD Connect can be installed with pass-through authentication."
      ],
      wrong: [
        ["A", "When you choose pass-through authentication, the Azure AD Connect setup installs the first Authentication Agent on the Connect server itself. Further agents are added later for availability; installing one on a domain controller is not a preparation step."],
        ["B", "Pass-through authentication is selected as the sign-in method in the Azure AD Connect wizard. Nothing has to be configured in the admin center beforehand."],
        ["D", "The email address attribute is not the sign-in name. Pass-through authentication validates the UPN, which is the User logon name."]
      ],
      concept: "Synchronized users sign in with their UPN, so a non-routable on-premises suffix such as .local must be replaced by a verified routable domain before you deploy Azure AD Connect.",
      takeaway: "Domain ends in .local: add and verify a custom domain in Entra ID, add it as a UPN suffix in AD, and update the users' UPNs.",
      refs: [
        ["Microsoft Learn: Prepare a non-routable domain for directory synchronization", "https://learn.microsoft.com/microsoft-365/enterprise/prepare-a-non-routable-domain-for-directory-synchronization"],
        ["Microsoft Learn: Microsoft Entra pass-through authentication quickstart", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta-quick-start"]
      ]
    }
  },
  {
    id: "Q028", source: 28, type: "dropdown",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a new Microsoft 365 E5 tenant.",
      "Enable Security defaults is set to Yes.",
      "A user signs in to the tenant for the first time.",
      "Which multi-factor authentication (MFA) method can the user use, and how many days does the user have to register for MFA? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "MFA method:", options: ["Call to phone", "Email message", "Security questions", "Text message to phone", "Notification to Microsoft Authenticator app"] },
      { id: "f2", label: "Number of days:", options: ["7", "14", "30", "60"] }
    ],
    answer: { f1: 4, f2: 1 },
    explanation: {
      correct: [
        "Security defaults require every user to register for and use multifactor authentication with the Microsoft Authenticator app using notifications. Users can also use verification codes from the app, but they register with the notification option.",
        "The reference answer for the number of days is 14. Security defaults gave users a 14-day grace period after their first sign-in, during which they could skip the registration prompt; once it ended, they could not sign in until they completed the MFA registration. Microsoft removed this 14-day grace period for new and existing tenants starting July 29, 2024."
      ],
      wrong: [
        ["Email message", "Email is a method for self-service password reset, not for multifactor authentication."],
        ["Security questions", "Security questions are also only a self-service password reset method."],
        ["Call to phone / Text message to phone", "Security defaults have users register the Microsoft Authenticator app with notifications (or an OATH TOTP app for codes), not a phone for calls or text messages."],
        ["7, 30 or 60 days", "The registration grace period that security defaults offered was 14 days."]
      ],
      concept: "Security defaults require MFA registration with the Microsoft Authenticator app using notifications, and the registration grace period they offered was 14 days.",
      takeaway: "Security defaults: Authenticator app notifications. The grace period this question expects is 14 days.",
      refs: [["Microsoft Learn: Security defaults in Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/security-defaults"]]
    }
  },
  {
    id: "Q029", source: 29, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Basic",
    stem: [
      "Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the objects shown in the following table.",
      { table: { head: ["Name", "Configuration"], rows: [
        ["Group1", "Global security group"],
        ["User1", "Enabled user account"],
        ["User2", "Disabled user account"]
      ] } },
      "You configure Azure AD Connect to sync contoso.com to Azure AD.",
      "Which objects will sync to Azure AD?"
    ],
    options: [
      { key: "A", text: "Group1 only" },
      { key: "B", text: "User1 and User2 only" },
      { key: "C", text: "Group1 and User1 only" },
      { key: "D", text: "Group1, User1, and User2" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "With the default configuration, Azure AD Connect synchronizes security groups, including global security groups, together with their membership; unlike distribution groups, security groups do not need to be mail-enabled. Group1 is synchronized.",
        "User accounts are synchronized whether they are enabled or disabled. The enabled state is carried as the `accountEnabled` attribute, so a disabled account such as User2 is created in Azure AD with sign-in blocked, in the same state as on-premises. So Group1, User1 and User2 are all synchronized."
      ],
      wrong: [
        ["A", "Users are synchronized as well as groups."],
        ["B", "Security groups are synchronized by default, so Group1 is included."],
        ["C", "Disabling an account does not exclude it from synchronization. User2 is synchronized with sign-in blocked."]
      ],
      concept: "Azure AD Connect synchronizes users, including disabled ones, and security groups by default; the enabled state is carried over as an attribute.",
      takeaway: "Disabled on-premises users still sync, and arrive in the cloud with sign-in blocked.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Understanding the default configuration", "https://learn.microsoft.com/entra/identity/hybrid/connect/concept-azure-ad-connect-sync-default-configuration"],
        ["Microsoft Q&A: Will Azure AD Connect sync disabled user accounts?", "https://learn.microsoft.com/answers/questions/233667/will-azure-ad-connect-sync-disabled-user-accounts"]
      ]
    }
  },
  {
    id: "Q030", source: 30, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create Conditional Access policies to meet the following requirements:",
      { list: [
        "All users must use multi-factor authentication (MFA) when they sign in from outside the corporate network.",
        "Users must only be able to sign in from outside the corporate network if the sign-in originates from a compliant device.",
        "All users must be blocked from signing in from outside the United States and Canada.",
        "Only users in the R&D department must be blocked from signing in from both Android and iOS devices.",
        "Only users in the finance department must be able to sign in to an Azure AD enterprise application named App1. All other users must be blocked from signing in to App1."
      ] },
      "What is the minimum number of Conditional Access policies you should create?"
    ],
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "6" },
      { key: "E", text: "7" },
      { key: "F", text: "8" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Requirements can share one policy only when they apply to the same users, apps and conditions. The first two do: all users, signing in from any location except the corporate network (a trusted named location). One policy with the grant controls **Require multifactor authentication** and **Require device to be marked as compliant**, with both required, covers them.",
        "Each of the other requirements has a different scope and needs its own policy: block all users from all locations except a named location for the United States and Canada; block the R&D users when the device platform is Android or iOS; and block App1 for all users except the finance users. That makes four policies."
      ],
      wrong: [
        ["A", "Three policies would mean merging two policies with different scopes, for example the R&D platform block with the location block. Conditions in one policy are combined with AND, so the merged policy would only block R&D users on mobile devices outside the two countries."],
        ["C", "Five is what you get with separate policies for MFA and for compliant devices. Both apply to the same users and locations, so one policy with both grant controls is enough."],
        ["D", "Six is more than needed. Each scope needs only one policy."],
        ["E", "Seven is more than needed. Each scope needs only one policy."],
        ["F", "Eight is more than needed. Each scope needs only one policy."]
      ],
      concept: "One Conditional Access policy can combine several grant controls for the same assignments, but requirements with different users, apps or conditions need separate policies.",
      takeaway: "Group the requirements by who, what app and which condition. Each distinct combination is one policy; controls for the same combination go into one policy.",
      refs: [
        ["Microsoft Learn: What is Conditional Access?", "https://learn.microsoft.com/entra/identity/conditional-access/overview"],
        ["Microsoft Learn: Block access by location", "https://learn.microsoft.com/entra/identity/conditional-access/howto-conditional-access-policy-location"]
      ]
    }
  },
  {
    id: "Q031", source: 31, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain.",
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement directory synchronization.",
      "You need to identify potential synchronization issues for the domain. The solution must use the principle of least privilege.",
      "What should you use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Tool:", options: ["AccessChk", "Azure AD Connect", "Active Directory Explorer", "IdFix"] },
      { id: "f2", label: "Required group membership:", options: ["Domain Admins", "Domain Users", "Server Operators", "Enterprise Admins"] }
    ],
    answer: { f1: 3, f2: 1 },
    explanation: {
      correct: [
        "IdFix is the Microsoft tool for finding problems in on-premises directory objects before you synchronize them: duplicate values, invalid characters, wrong formats and other attribute errors in values such as the UPN, mail and proxyAddresses that would make synchronization fail.",
        "IdFix uses the security context of the user who runs it to determine the domain to query, so you sign in with an account of that domain. Finding the problems only reads the directory, and the read access that every member of Domain Users has is enough. Write permissions are needed only if you also use IdFix to apply the fixes."
      ],
      wrong: [
        ["AccessChk", "AccessChk is a Sysinternals tool that shows the permissions on files, registry keys and services. It does not check directory objects for synchronization errors."],
        ["Azure AD Connect", "Azure AD Connect performs the synchronization and reports errors once it runs. It is not a pre-synchronization scan, and installing it requires far more privileges."],
        ["Active Directory Explorer", "AD Explorer is a Sysinternals viewer and editor for Active Directory. It does not detect synchronization problems."],
        ["Domain Admins / Enterprise Admins / Server Operators", "These groups give administrative rights that a read-only scan does not need, so they break the principle of least privilege."]
      ],
      concept: "IdFix scans on-premises Active Directory for attribute errors that would block directory synchronization, and identifying them needs only read access.",
      takeaway: "Find sync problems before deploying Azure AD Connect: run IdFix, and a Domain Users account is enough to scan.",
      refs: [
        ["Microsoft Learn: Set up directory synchronization for Microsoft 365", "https://learn.microsoft.com/microsoft-365/enterprise/set-up-directory-synchronization"],
        ["Microsoft Learn: Error when you run the IdFix tool (security context)", "https://learn.microsoft.com/troubleshoot/entra/entra-id/ad-dmn-services/security-context-not-associate-domian"]
      ]
    }
  },
  {
    id: "Q032", source: 32, type: "yesno",
    domain: "identity", topic: "Conditional Access", difficulty: "Advanced",
    stem: [
      "You have an Azure AD tenant named contoso.com that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Multi-Factor Auth Status"], rows: [
        ["User1", "Group1", "Disabled"],
        ["User2", "Group1", "Enforced"]
      ] } },
      "Multi-factor authentication (MFA) is configured to use 131.107.5.0/24 as trusted IPs.",
      "The tenant contains the named locations shown in the following table.",
      { table: { head: ["Name", "IP address range", "Trusted location"], rows: [
        ["Location1", "131.107.20.0/24", "Yes"],
        ["Location2", "131.107.50.0/24", "Yes"]
      ] } },
      "You create a conditional access policy that has the following configurations:",
      { list: [
        "Users or workload identities assignments: All users",
        "Cloud apps or actions assignment: App1",
        "Conditions: Include all trusted locations",
        "Grant access: Require multi-factor authentication"
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "When User1 connects to App1 from a device that has an IP address of 131.107.50.10, User1 must use MFA." },
      { text: "When User2 connects to App1 from a device that has an IP address of 131.107.20.15, User2 must use MFA." },
      { text: "When User2 connects to App1 from a device that has an IP address of 131.107.5.5, User2 must use MFA." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "The policy applies to all users who sign in to App1 from a trusted location, and it requires MFA there. Unusually, it targets the trusted locations rather than excluding them. A Conditional Access requirement does not depend on the per-user MFA status: once the policy applies, the user must complete MFA even if per-user MFA is Disabled.",
        "Statement 1 is Yes. 131.107.50.10 is inside Location2 (131.107.50.0/24), which is marked as trusted. The policy applies, so User1 must use MFA although User1's per-user status is Disabled.",
        "Statement 2 is Yes. 131.107.20.15 is inside Location1 (131.107.20.0/24), also trusted, so the policy applies to User2 and requires MFA.",
        "Statement 3: the reference answer is No. 131.107.5.5 is in neither named location. It is in 131.107.5.0/24, the trusted IPs list of the legacy per-user MFA service settings, whose purpose is to let users skip MFA prompts when they sign in from those addresses. User2's per-user MFA is Enforced, but a sign-in from 131.107.5.5 falls in the trusted IPs range, so the reference answer treats User2 as not having to use MFA there."
      ],
      wrong: [
        ["Statement 1 — No", "User1's per-user MFA being Disabled does not matter. The Conditional Access policy applies to all users from Location2 and requires MFA."],
        ["Statement 2 — No", "Location1 is a trusted named location, so the policy applies to the sign-in and MFA is required."],
        ["Statement 3 — Yes", "The reference answer treats 131.107.5.0/24 as an MFA bypass list from the per-user MFA settings rather than as one of the trusted named locations of the policy."]
      ],
      concept: "Named locations marked as trusted are a Conditional Access condition, while trusted IPs in the per-user MFA service settings are a list of addresses from which per-user MFA prompts are skipped.",
      takeaway: "For each sign-in, match the IP address to a named location first, then check the separate MFA trusted IPs list.",
      refs: [
        ["Microsoft Learn: Conditional Access policy: Using network signals", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"],
        ["Microsoft Learn: Configure Microsoft Entra multifactor authentication settings", "https://learn.microsoft.com/entra/identity/authentication/howto-mfa-mfasettings"]
      ]
    }
  }
);
