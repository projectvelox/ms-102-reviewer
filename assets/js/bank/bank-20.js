/* MS-102 question bank, part 20: questions 305 to 320 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q305", source: 305, type: "multi",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to ingest syslog data from a supported firewall device to Microsoft Defender for Cloud Apps.",
      "You need to configure automatic log upload.",
      "Which two components should you configure for the log collector? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "the receiver type" },
      { key: "B", text: "the data source" },
      { key: "C", text: "the username and password" },
      { key: "D", text: "a connection string" },
      { key: "E", text: "the host IP address or FQDN" }
    ],
    answer: ["A", "B"],
    explanation: {
      correct: [
        "Automatic log upload in Defender for Cloud Apps uses a log collector, a Docker container in your network that receives the traffic logs of your firewalls and proxies and uploads them to Cloud Discovery. You set it up under Settings > Cloud apps > Cloud Discovery > Automatic log upload in two parts: first a data source for each appliance, then the log collector, which you link to those data sources.",
        "The data source (B) tells the collector which appliance the logs come from, so that it parses them in that vendor's log format. The receiver type (A), chosen with the data source, tells it how the logs arrive: FTP, FTPS, or Syslog over UDP, TCP or TLS. For a firewall that sends syslog, these two settings are what make the collector listen for the syslog stream and understand it."
      ],
      wrong: [
        ["C", "The log collector settings do not ask for a user name and password. Credentials play a part only for an FTP receiver, where the collector provides the FTP account that the appliance uploads to; a syslog receiver uses none."],
        ["D", "A connection string is not part of the log collector configuration. The collector is linked to Defender for Cloud Apps by the deployment command that the portal generates for it."],
        ["E", "When you add a log collector, the portal also records the IP address or FQDN of the machine that runs it, which is where the firewall sends its syslog. That identifies where the collector runs; it does not define which appliance's logs are parsed or how they are received, which is what the data source and its receiver type do."]
      ],
      concept: "Automatic log upload pairs a data source (appliance type and receiver type) with a log collector that runs as a Docker container on a host in your network.",
      takeaway: "Log collector for a syslog firewall: define the data source for the appliance with a Syslog receiver type, then link it to the collector.",
      refs: [
        ["Microsoft Learn: Configure automatic log upload for continuous reports", "https://learn.microsoft.com/defender-cloud-apps/discovery-docker"],
        ["Microsoft Learn: Set up Cloud Discovery", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"]
      ]
    }
  },
  {
    id: "Q306", source: 306, type: "multi",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender XDR.",
      "From Automatic remediation in the Microsoft Defender portal, you set Automation level to Semi – require approval for non-temp folders for the endpoints.",
      "You need to identify the impact of the Automation level setting on the endpoints.",
      "Which two actions will occur based on the remediation settings? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Devices will be remediated only after end-user approval." },
      { key: "B", text: "Devices will be remediated automatically if a threat is detected in the \\program files (X86)\\* folder" },
      { key: "C", text: "Devices will be remediated automatically if a threat is detected in the \\windows\\ folder." },
      { key: "D", text: "Devices will be remediated automatically if a threat is detected in the \\users\\*\\downloads\\* folder." }
    ],
    answer: ["B", "D"],
    explanation: {
      correct: [
        "The automation level of a device group decides what automated investigation and remediation (AIR) may do on its own once it finds a malicious file. With **Semi - require approval for non-temp folders**, remediation of files in temporary folders runs automatically, while remediation of files in any other folder waits until the security team approves it in the Action center.",
        "Microsoft's list of temporary folders for this level includes `\\users\\*\\downloads\\*` and `\\program files (x86)\\*`, together with folders such as `\\users\\*\\appdata\\local\\temp\\*`, `\\windows\\temp\\*` and `\\program files\\`. A threat found in either of the folders of options B and D is therefore remediated automatically."
      ],
      wrong: [
        ["A", "Pending actions are approved by the security operations team in the Action center of the Microsoft Defender portal, not by the end user. Files in temporary folders need no approval at all."],
        ["C", "The Windows folder itself is not a temporary folder; only `\\windows\\temp\\*` is on the list. A threat found elsewhere in the Windows folder waits for approval."]
      ],
      concept: "Each automation level of AIR sets which remediation actions run automatically and which wait for approval in the Action center.",
      takeaway: "Semi - require approval for non-temp folders: Downloads, Temp and Program Files folders are remediated automatically; everything else waits for approval.",
      refs: [
        ["Microsoft Learn: Automation levels in automated investigation and remediation", "https://learn.microsoft.com/defender-endpoint/automation-levels"],
        ["Microsoft Learn: Configure automated investigation and remediation capabilities", "https://learn.microsoft.com/defender-endpoint/configure-automated-investigations-remediation"]
      ]
    }
  },
  {
    id: "Q307", source: 307, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains devices onboarded to Microsoft Defender for Endpoint.",
      "You integrate Microsoft Defender for Cloud Apps with Defender for Endpoint.",
      "You need identify which cloud apps and services were used most during the last 30 days.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Generate a monthly security summary report." },
      { key: "B", text: "Generate a Cloud Discovery snapshot report." },
      { key: "C", text: "Create a threat analytics alert notification." },
      { key: "D", text: "Generate a Cloud Discovery executive report." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The reference answer is B. Cloud Discovery in Defender for Cloud Apps analyzes traffic data and reports the cloud apps and services in use, with the traffic, transactions, users and IP addresses of each app over a period. A snapshot report is the manual kind: you upload traffic logs from your firewalls and proxies, and Defender for Cloud Apps produces a one-time report of the apps found in them, which you can sort by traffic or number of users to see the most used apps for the period the logs cover, such as the last 30 days.",
        "What else is true here: continuous reports collect data on an ongoing basis, from log collectors or, with the Defender for Endpoint integration of this scenario, directly from the onboarded devices, and the Cloud Discovery dashboard shows them for a selectable time range."
      ],
      wrong: [
        ["A", "A monthly security summary report summarizes the security status of the organization, such as threats detected and devices protected. It does not list the cloud apps and services that users access."],
        ["C", "Threat analytics reports describe active threat campaigns and their impact on your organization. A notification about them says nothing about cloud app usage."],
        ["D", "The Cloud Discovery executive report is a PDF overview of shadow IT use and its main risks, meant for management. The reference answer uses the snapshot report to identify the most used apps."]
      ],
      concept: "Cloud Discovery reports list the cloud apps found in traffic data with usage figures per app; snapshot reports come from manually uploaded logs, continuous reports from log collectors or Defender for Endpoint.",
      takeaway: "Snapshot report: one-time upload of logs. Continuous report: ongoing data from log collectors or Defender for Endpoint. Executive report: PDF summary for management.",
      refs: [
        ["Microsoft Learn: Create snapshot Cloud Discovery reports", "https://learn.microsoft.com/defender-cloud-apps/create-snapshot-cloud-discovery-reports"],
        ["Microsoft Learn: Set up Cloud Discovery", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"],
        ["Microsoft Learn: Microsoft Defender for Endpoint integration with Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/mde-integration"]
      ]
    }
  },
  {
    id: "Q308", source: 308, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "You create an outbound anti-spam policy named Policy1 as shown in the following exhibit.",
      { image: "q308-outbound-spam-policy.png", alt: "Protection settings of the outbound anti-spam policy: 'Set your outbound anti-spam settings for this policy.' Message limits: Set an external message limit 10; Set an internal message limit 20; Set a daily message limit 1000. Restriction placed on users who reach the message limit: Restrict the user from sending mail until the following day. Forwarding rules: Automatic forwarding rules set to Automatic - System-controlled. Notifications: both check boxes cleared (Send a copy of suspicious outbound messages or message that exceed these limits to these users and groups; Notify these users and groups if a sender is blocked due to sending outbound spam)." },
      "You assign Policy1 to User1.",
      "What is the maximum number of email messages that User1 can send in a 24-hour period?"
    ],
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "720" },
      { key: "C", text: "1000" },
      { key: "D", text: "1030" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "An outbound spam policy sets three sending limits. The external and internal message limits are the maximum numbers of external and internal recipients per hour, and the daily message limit is the maximum number of recipients in a day. A user who reaches any one of them gets the restriction set in the policy, here a block until the following day.",
        "Policy1 allows 10 external and 20 internal recipients per hour, so at most 30 an hour. Over 24 hours that is 24 × 30 = 720, which stays below the daily limit of 1000. With one recipient per message, User1 can therefore send at most 720 messages in a 24-hour period: the hourly limits cap the day before the daily limit is reached."
      ],
      wrong: [
        ["A", "30 is the combined limit for one hour (10 external plus 20 internal). The hourly limits apply to every hour, so User1 can send that many again in each of the 24 hours."],
        ["C", "1000 is the daily limit, but User1 cannot reach it: the hourly limits allow no more than 30 recipients an hour, which is 720 in 24 hours."],
        ["D", "1030 adds the hourly total to the daily limit. The limits are not added together; whichever limit is reached first stops the user."]
      ],
      concept: "Outbound spam policy limits count recipients per hour (external and internal) and per day, and the limit reached first decides how much a user can send.",
      takeaway: "Daily ceiling = the lower of the daily limit and 24 × (external + internal hourly limits).",
      logic: "Compute 24 × (10 + 20) = 720 and compare it with the daily limit of 1000; the lower number wins.",
      refs: [
        ["Microsoft Learn: Configure outbound spam policies in EOP", "https://learn.microsoft.com/defender-office-365/outbound-spam-policies-configure"],
        ["Microsoft Learn: Outbound spam protection in EOP", "https://learn.microsoft.com/defender-office-365/outbound-spam-protection-about"]
      ]
    }
  },
  {
    id: "Q309", source: 309, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You connect a cloud app that contains a group named Group1 to Microsoft Defender for Cloud Apps.",
      "You need to configure the Cloud apps settings to monitor all activities performed by the members of Group1.",
      "Which two settings should you configure? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "First setting (in list order)", options: ["About", "Organization details", "Mail settings", "Scoped deployment and privacy", "Preview Features", "IP address ranges", "User groups", "API tokens", "SIEM agents", "Playbooks"] },
      { id: "f2", label: "Second setting (in list order)", options: ["About", "Organization details", "Mail settings", "Scoped deployment and privacy", "Preview Features", "IP address ranges", "User groups", "API tokens", "SIEM agents", "Playbooks"] }
    ],
    answer: { f1: 3, f2: 6 },
    explanation: {
      correct: [
        "Defender for Cloud Apps can limit monitoring to selected users. **User groups**, in the System section of Settings > Cloud apps, is where you import user groups from a connected app, such as Group1, so that Defender for Cloud Apps knows the group and its members. Microsoft Entra groups are available automatically, but a group that lives in the connected app has to be imported.",
        "**Scoped deployment and privacy** is where you then choose the user groups whose activities are monitored, by including them (or excluding others). With Group1 included, Defender for Cloud Apps monitors the activities of the members of Group1 in the connected app."
      ],
      wrong: [
        ["IP address ranges", "Tags IP address ranges, for example as corporate, VPN or risky, to make activity and discovery data easier to read. It does not select users."],
        ["SIEM agents", "Forwards Defender for Cloud Apps alerts and activities to a SIEM server. It does not decide which users are monitored."],
        ["API tokens", "Creates tokens for scripts and tools that call the Defender for Cloud Apps API."],
        ["Organization details", "Holds the organization's display name, logo and managed domains, not the users in scope for monitoring."]
      ],
      concept: "Scoped deployment limits Defender for Cloud Apps monitoring to included user groups, which must first be known to it through the User groups setting.",
      takeaway: "Monitor one group of a connected app: import it under User groups, then include it under Scoped deployment and privacy.",
      refs: [
        ["Microsoft Learn: Scope your Defender for Cloud Apps deployment", "https://learn.microsoft.com/defender-cloud-apps/scoped-deployment"],
        ["Microsoft Learn: Import user groups from connected apps", "https://learn.microsoft.com/defender-cloud-apps/user-groups"]
      ]
    }
  },
  {
    id: "Q310", source: 310, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription. The subscription contains a Microsoft SharePoint Online site named Site1.",
      "Site1 contains the following files:",
      { list: ["File.docx", "ImportantFile.docx", "File_Important.docx"] },
      "From Microsoft Defender Cloud Apps, you create a file policy named Policy that has the filter shown in the following exhibit.",
      { image: "q310-file-policy-filter.png", alt: "File policy filter. Files matching all of the following: File name, contains words, \"important\" \"File\" (both words in quotation marks). Below it, + Add a filter; at the top right, Edit and preview results." },
      "To which files will Policy1 apply?"
    ],
    options: [
      { key: "A", text: "ImportantFile.docx and File_Important.docx only" },
      { key: "B", text: "File.docx only" },
      { key: "C", text: "File_Important.docx only" },
      { key: "D", text: "ImportantFile.docx only" },
      { key: "E", text: "File.docx, ImportantFile.docx, and File_Important.docx" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "With **contains words**, a file name filter of Defender for Cloud Apps matches whole words only, the parts of a name that are separated by characters such as spaces, dots, hyphens and commas. Unquoted words work like OR. Words in quotation marks work like AND, so `\"important\" \"File\"` requires both the word important and the word File in the name, in any order; in this question capitalization does not matter.",
        "Walk through the files. File.docx contains the word File but not important. ImportantFile.docx holds both strings, but run together as one word, so neither whole word is present. File_Important.docx is the only name in which File and Important appear as two separate words, so Policy1 applies to File_Important.docx only. The documentation names spaces, dots, hyphens and commas as separators; the reference answer reads the underscore the same way."
      ],
      wrong: [
        ["A", "ImportantFile.docx contains the two strings only inside a single word. Contains words matches whole words, so this file does not match."],
        ["B", "File.docx has the word File but not the word important, and every quoted word must be present."],
        ["D", "ImportantFile.docx is the single word ImportantFile followed by the extension, so neither whole word is found in it."],
        ["E", "That would be a substring match on either string. The filter needs both words, each as a whole word."]
      ],
      concept: "File name filters with contains words match whole words; quoted words must all be present (AND), unquoted words are alternatives (OR).",
      takeaway: "\"word1\" \"word2\" = both whole words required; a word glued to another word (ImportantFile) does not count.",
      refs: [
        ["Microsoft Learn: File filters in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/file-filters"],
        ["Microsoft Learn: File policies in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/data-protection-policies"]
      ]
    }
  },
  {
    id: "Q311", source: 311, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription. The subscription contains users that have the following types of devices:",
      { list: ["Windows 10", "Android", "iOS"] },
      "To which devices can you apply Endpoint DLP policies?"
    ],
    options: [
      { key: "A", text: "Windows 10 only" },
      { key: "B", text: "Windows 10 and Android only" },
      { key: "C", text: "Windows 10 and iOS only" },
      { key: "D", text: "Windows 10, Android, and iOS" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Endpoint DLP extends Microsoft Purview data loss prevention to activities on the device itself, such as copying a sensitive file to a USB drive, printing it or uploading it to a cloud service. The device has to be onboarded to Microsoft Purview, and the supported platforms are Windows 10, Windows 11 and macOS. Mobile platforms are not covered.",
        "Of the device types in this subscription, only the Windows 10 devices can therefore receive Endpoint DLP policies. Android and iOS devices are protected by other means, for example Intune app protection policies, but Endpoint DLP policies do not apply to them."
      ],
      wrong: [
        ["B", "Android is not a supported platform for Endpoint DLP."],
        ["C", "iOS is not a supported platform for Endpoint DLP."],
        ["D", "Neither mobile platform is supported. Endpoint DLP covers Windows and macOS devices only."]
      ],
      concept: "Endpoint DLP applies DLP policies to activities on onboarded Windows 10, Windows 11 and macOS devices.",
      takeaway: "Endpoint DLP: Windows and macOS. Android and iOS: not supported.",
      refs: [
        ["Microsoft Learn: Learn about Endpoint data loss prevention", "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"],
        ["Microsoft Learn: Get started with Endpoint data loss prevention", "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"]
      ]
    }
  },
  {
    id: "Q312", source: 312, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "Your company has an office in London.",
      "You have a Microsoft 365 subscription.",
      "You need to create a Conditional Access policy named Policy that meets the following requirements:",
      { list: [
        "Only FIDO2 security keys, Windows Hello for Business, and certificates must be supported for authentication.",
        "The London office must be marked as a trusted location and excluded from Policy1."
      ] },
      "How should you configure Policy1? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Authentication strength:", options: ["Multifactor authentication", "Passwordless MFA", "Phishing-resistant MFA"] },
      { id: "f2", label: "Named location:", options: ["Countries", "IP ranges", "Trusted IPs"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "**Authentication strength: Phishing-resistant MFA.** An authentication strength is the Conditional Access grant control that lists the method combinations a sign-in may use. The built-in Phishing-resistant MFA strength allows only Windows Hello for Business, FIDO2 security keys (passkeys) and certificate-based authentication (multifactor), which is exactly the list in the first requirement.",
        "**Named location: IP ranges.** Only an IP ranges location can be marked as trusted: you enter the public IP ranges of the London office and select **Mark as trusted location**. In Policy1 you then exclude that location under the Network (Locations) condition, so sign-ins from the London office are not subject to the policy."
      ],
      wrong: [
        ["Multifactor authentication", "The built-in Multifactor authentication strength accepts any combination that satisfies MFA, including a password with a text message or an Authenticator notification."],
        ["Passwordless MFA", "Passwordless MFA also allows Microsoft Authenticator phone sign-in, so more than FIDO2 keys, Windows Hello for Business and certificates would be accepted."],
        ["Countries", "A countries location is defined by country or region and cannot be marked as a trusted location."],
        ["Trusted IPs", "MFA trusted IPs belong to the legacy per-user MFA service settings, a list of address ranges whose users skip MFA prompts. The location that you create and mark as trusted for Conditional Access is an IP ranges location."]
      ],
      concept: "Authentication strengths decide which authentication methods satisfy a Conditional Access policy, and IP ranges named locations can be marked as trusted and included or excluded in a policy.",
      takeaway: "Only FIDO2, Windows Hello for Business and certificates: Phishing-resistant MFA. Trusted office: an IP ranges named location marked as trusted.",
      refs: [
        ["Microsoft Learn: Conditional Access authentication strengths", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"],
        ["Microsoft Learn: Network location in Conditional Access", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"]
      ]
    }
  },
  {
    id: "Q313", source: 313, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to use Microsoft Graph PowerShell to perform the following tasks:",
      { list: ["Change the Company name property for all users.", "Create new Microsoft 365 groups."] },
      "Which PowerShell cmdlet should you run? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To change the property:", options: ["Set-MgGraphUser", "Set-MgUser", "Update-MgGraphUser", "Update-MgUser"] },
      { id: "f2", label: "To create the groups:", options: ["New-MgGraphGroup", "New-MgGraphUnifiedGroup", "New-MgGroup", "New-MgUnifiedGroup"] }
    ],
    answer: { f1: 1, f2: 2 },
    explanation: {
      correct: [
        "**To change the property: Set-MgUser.** The reference answer is Set-MgUser. What is true around it: Microsoft Graph PowerShell cmdlets are generated from the Graph API. Their noun is `Mg` followed by the resource (`MgUser`, `MgGroup`), and the verb follows the HTTP method: `Get-` reads, `New-` creates, `Update-` changes properties with a PATCH request and `Remove-` deletes, while `Set-` appears in a few cmdlets such as `Set-MgUserLicense`. The cmdlet that Microsoft documents for changing properties of an existing user, such as `CompanyName`, is `Update-MgUser`, run for each user, for example `Get-MgUser -All | ForEach-Object { Update-MgUser -UserId $_.Id -CompanyName \"Contoso\" }`.",
        "**To create the groups: New-MgGroup.** `New-MgGroup` creates a group in Microsoft Entra ID. A Microsoft 365 group is a group with the group type `Unified`, so you create one with `New-MgGroup -DisplayName \"Sales\" -MailNickname \"sales\" -GroupTypes \"Unified\" -MailEnabled:$true -SecurityEnabled:$false`. With other parameters, the same cmdlet creates security groups."
      ],
      wrong: [
        ["Set-MgGraphUser, Update-MgGraphUser, New-MgGraphGroup, New-MgGraphUnifiedGroup", "The noun of a Graph PowerShell cmdlet is Mg plus the resource name. MgGraph appears only in the session cmdlets, such as `Connect-MgGraph` and `Disconnect-MgGraph`; these four names are not cmdlets of the SDK."],
        ["New-MgUnifiedGroup", "Graph PowerShell has no separate cmdlet for Microsoft 365 groups; the group type is a parameter of `New-MgGroup`. The similar name `New-UnifiedGroup` is a cmdlet of Exchange Online PowerShell, not of Microsoft Graph."]
      ],
      concept: "Microsoft Graph PowerShell cmdlets are named verb-Mg plus the resource, and Microsoft 365 groups are created with New-MgGroup and the Unified group type.",
      takeaway: "Graph PowerShell nouns start with Mg, never MgGraph; a Microsoft 365 group is `New-MgGroup -GroupTypes \"Unified\"`.",
      refs: [
        ["Microsoft Learn: Update-MgUser", "https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser"],
        ["Microsoft Learn: New-MgGroup", "https://learn.microsoft.com/powershell/module/microsoft.graph.groups/new-mggroup"],
        ["Microsoft Learn: Microsoft Graph PowerShell overview", "https://learn.microsoft.com/powershell/microsoftgraph/overview"]
      ]
    }
  },
  {
    id: "Q314", source: 314, type: "multi",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to use a third-party protection service to scan email messages before they are delivered to Microsoft 365.",
      "You configure a mail flow rule to bypass spam filtering for incoming messages.",
      "Which two messages will still be scanned by Microsoft 365 and cannot be bypassed by the mail flow rule? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "a message that contains malware" },
      { key: "B", text: "a high-confidence phishing message" },
      { key: "C", text: "an encrypted message" },
      { key: "D", text: "a message that includes HTML code" },
      { key: "E", text: "a messages that includes URL links" }
    ],
    answer: ["A", "B"],
    explanation: {
      correct: [
        "A mail flow rule that sets the spam confidence level (SCL) to -1 tells Exchange Online Protection to skip spam filtering, which is what you do when a third-party service already filters mail before it reaches Microsoft 365. Microsoft 365 is secure by default, however: overrides such as mail flow rules that bypass filtering and allowed sender lists do not apply to messages identified as malware or as high confidence phishing. Those messages are still detected and quarantined.",
        "A message that contains malware (A) and a high-confidence phishing message (B) are therefore still handled by Microsoft 365, whatever the mail flow rule says."
      ],
      wrong: [
        ["C", "Encryption is not a filtering verdict. An encrypted message is subject to the rule like any other message, so spam filtering is bypassed for it."],
        ["D", "HTML content is not a verdict that overrides the rule; spam filtering of such messages is bypassed."],
        ["E", "Containing URLs is not in itself a verdict that overrides the rule. What cannot be bypassed is a malware or high confidence phishing verdict, whatever led to it."]
      ],
      concept: "Secure by default: malware and high confidence phishing verdicts are acted on even when mail flow rules or allow lists bypass filtering.",
      takeaway: "SCL -1 bypasses spam filtering, but never malware or high confidence phishing.",
      refs: [
        ["Microsoft Learn: Secure by default in Office 365", "https://learn.microsoft.com/defender-office-365/secure-by-default"],
        ["Microsoft Learn: Use mail flow rules to set the spam confidence level (SCL) in messages", "https://learn.microsoft.com/exchange/security-and-compliance/mail-flow-rules/use-rules-to-set-scl"]
      ]
    }
  },
  {
    id: "Q315", source: 315, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "Administrators are issued FIDO2 security keys.",
      "You need to create a Conditional Access policy that will use a FIDO2 security key as an authentication method.",
      "Which Access controls option should you select for the policy?"
    ],
    options: [
      { key: "A", text: "Require approved client app" },
      { key: "B", text: "Require token protection for sign-in sessions" },
      { key: "C", text: "Require multifactor authentication" },
      { key: "D", text: "Require authentication strength" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "An authentication strength is a grant control of Conditional Access that lists the authentication methods, or combinations of methods, that a sign-in must use to satisfy the policy. Selecting **Require authentication strength** with the built-in Phishing-resistant MFA strength, or with a custom strength that contains only FIDO2 security keys, makes the policy accept a sign-in only when the administrator uses a method from that list, here the FIDO2 key."
      ],
      wrong: [
        ["A", "Require approved client app applies to access from mobile client apps on iOS and Android. It says nothing about which authentication method is used."],
        ["B", "Token protection binds the sign-in session tokens to the device so that stolen tokens cannot be replayed elsewhere. It does not choose the authentication method."],
        ["C", "Require multifactor authentication accepts any MFA method the user has registered, such as a text message or the Authenticator app, so it cannot make the FIDO2 key mandatory."]
      ],
      concept: "Require authentication strength lets a Conditional Access policy demand specific authentication methods instead of any MFA method.",
      takeaway: "A specific method such as FIDO2 in Conditional Access: Require authentication strength. Any MFA method: Require multifactor authentication.",
      refs: [
        ["Microsoft Learn: Conditional Access authentication strengths", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"],
        ["Microsoft Learn: Conditional Access grant controls", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-grant"]
      ]
    }
  },
  {
    id: "Q316", source: 316, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Office 365.",
      "You need to implement a social engineering awareness solution that meets the following requirements:",
      { list: [
        "To reset a user's password, emulate an email message that contains a link.",
        "Track any user that selects the email message link.",
        "Suggest further social engineering training."
      ] },
      "What should you use in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Attack simulation training" },
      { key: "B", text: "Learning hub" },
      { key: "C", text: "Exposure insights" },
      { key: "D", text: "Threat tracker" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Attack simulation training, part of Microsoft Defender for Office 365 Plan 2 and included in Microsoft 365 E5, runs realistic but harmless phishing simulations against your users. You choose a social engineering technique, such as credential harvest with a link in the message, and a payload, for example a message that asks the user to reset their password through that link.",
        "The simulation reports which users opened the message, selected the link or entered credentials, and you can assign training modules to the users, for example automatically to those who were compromised in the simulation. That covers all three requirements."
      ],
      wrong: [
        ["B", "Learning hub collects training resources about Microsoft security products for administrators. It does not send simulated attacks or track users."],
        ["C", "Exposure insights belongs to Microsoft Security Exposure Management and shows the organization's security posture and exposure. It has no phishing simulations."],
        ["D", "Threat trackers are widgets of Defender for Office 365 Plan 2 that show information about cybersecurity issues that might affect the organization. They do not simulate attacks."]
      ],
      concept: "Attack simulation training simulates phishing techniques, tracks how users respond and assigns training.",
      takeaway: "Simulated phishing email plus click tracking plus training: Attack simulation training.",
      refs: [
        ["Microsoft Learn: Get started using Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-get-started"],
        ["Microsoft Learn: Simulations in Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-simulations"]
      ]
    }
  },
  {
    id: "Q317", source: 317, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You integrate Microsoft Defender for Cloud Apps with Microsoft Defender for Endpoint.",
      "You need to create a policy to block users from accessing discovered apps that have a risk score of 4 or lower.",
      "Which two settings should you configure? To answer, select the appropriate settings in the answer area.",
      { image: "q317-app-discovery-policy.png", alt: "Policy form in Defender for Cloud Apps. Apps matching all of the following: Select a filter, with an empty box '+ Add a filter'. Apply to: All continuous reports (drop-down). Check box, cleared: Trigger a policy match if all the following occur on the same day:. Alerts: check box, cleared: Create an alert for each matching event with the policy's severity. Governance actions: four check boxes, all cleared: Tag app as sanctioned; Tag app as unsanctioned; Tag app as monitored; Tag app with custom tag, with a Select app tag drop-down beside it." },
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "First setting (in the order of the form)", options: ["Add a filter", "All continuous reports", "Trigger a policy match if all the following occur on the same day:", "Create an alert for each matching event with the policy's severity", "Tag app as sanctioned", "Tag app as unsanctioned", "Tag app as monitored", "Tag app with custom tag"] },
      { id: "f2", label: "Second setting (in the order of the form)", options: ["Add a filter", "All continuous reports", "Trigger a policy match if all the following occur on the same day:", "Create an alert for each matching event with the policy's severity", "Tag app as sanctioned", "Tag app as unsanctioned", "Tag app as monitored", "Tag app with custom tag"] }
    ],
    answer: { f1: 0, f2: 5 },
    explanation: {
      correct: [
        "The form is an app discovery policy, which evaluates the apps that Cloud Discovery finds. Two settings do the work. **Add a filter** defines which apps match: a Risk score filter set to 4 or lower. **Tag app as unsanctioned** is the governance action: every discovered app that matches the filter is tagged as unsanctioned.",
        "The block itself comes from the integration with Defender for Endpoint. With **Enforce app access** turned on in the integration settings, Defender for Cloud Apps passes unsanctioned apps to Defender for Endpoint as indicators, and Defender for Endpoint blocks access to them on onboarded devices through network protection."
      ],
      wrong: [
        ["Tag app as sanctioned", "Sanctioned marks apps as approved, so nothing is blocked."],
        ["Tag app as monitored", "Monitored apps stay accessible: with app access enforcement, users see a warning that they can bypass, so access is not blocked."],
        ["Create an alert for each matching event with the policy's severity", "An alert tells you about matching apps but does not block them."],
        ["All continuous reports", "Apply to sets which Cloud Discovery reports the policy evaluates. It is already set to all continuous reports and does not select apps by risk score."]
      ],
      concept: "App discovery policies filter discovered apps and apply governance tags; with the Defender for Endpoint integration, the unsanctioned tag becomes a block on devices.",
      takeaway: "Block risky discovered apps: an app discovery policy with a Risk score filter and the action Tag app as unsanctioned.",
      refs: [
        ["Microsoft Learn: Cloud Discovery policies", "https://learn.microsoft.com/defender-cloud-apps/cloud-discovery-policies"],
        ["Microsoft Learn: Govern discovered apps using Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-cloud-apps/mde-govern"]
      ]
    }
  },
  {
    id: "Q318", source: 318, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that includes Microsoft Intune.",
      "You manage all iOS devices by using Intune.",
      "You plan to protect corporate-owned iOS devices by using Microsoft Defender for Endpoint. You configure a connection between Intune and Defender for Endpoint.",
      "You need to onboard the devices to Defender for Endpoint.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Download an onboarding package." },
      { key: "B", text: "Create an app protection policy." },
      { key: "C", text: "Enable Microsoft Defender for Cloud." },
      { key: "D", text: "Add an app to Intune." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The reference answer is A. Onboarding connects a device to your Defender for Endpoint tenant. In the Microsoft Defender portal, under Settings > Endpoints > Onboarding, you select the operating system and the deployment method; for Windows, macOS and Linux the page offers an onboarding package with the configuration for your tenant, which you deploy with Intune, Group Policy, Configuration Manager or a local script.",
        "What is true around it for iOS: on iOS, Defender for Endpoint is the Microsoft Defender app. With the connection between Intune and Defender for Endpoint in place, the app is deployed to the managed iOS devices through Intune, and a device is onboarded when the user signs in to the app, or without user interaction on supervised devices through zero-touch onboarding with an Intune VPN profile."
      ],
      wrong: [
        ["B", "An app protection policy protects corporate data inside apps and can use the device risk level from Defender for Endpoint, but it does not onboard the device."],
        ["C", "Microsoft Defender for Cloud protects Azure, hybrid and multicloud workloads such as servers. It does not onboard iOS devices."],
        ["D", "Adding the Microsoft Defender app to Intune as an iOS store app and assigning it is how the app reaches the managed devices. The reference answer for onboarding is A."]
      ],
      concept: "Each platform onboards to Defender for Endpoint in its own way: an onboarding package for Windows, macOS and Linux, the Microsoft Defender app for iOS and Android.",
      takeaway: "Onboarding page of the Defender portal: choose the OS and the deployment method; on iOS, Defender for Endpoint runs as the Microsoft Defender app deployed through Intune.",
      refs: [
        ["Microsoft Learn: Onboard devices to Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/onboarding"],
        ["Microsoft Learn: Deploy Microsoft Defender for Endpoint on iOS with Microsoft Intune", "https://learn.microsoft.com/defender-endpoint/ios-install"]
      ]
    }
  },
  {
    id: "Q319", source: 319, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You register a cloud app named App1 in Microsoft Entra ID.",
      "You need to create an access policy for App1.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Deploy Conditional Access App Control to App1." },
      { key: "B", text: "Create an app tag for App1." },
      { key: "C", text: "Add a security information and event management (SIEM) agent to Defender for Cloud Apps." },
      { key: "D", text: "Configure an app connector to Defender for Cloud Apps." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The reference answer is D. Defender for Cloud Apps connects to cloud apps in two ways. An app connector uses the app's API to give Defender for Cloud Apps visibility into the app's activities, accounts and files, and is the basis of activity and file policies. Conditional Access App Control routes user sessions through a reverse proxy, which lets Defender for Cloud Apps act in real time while users sign in and work.",
        "Access policies are enforced by Conditional Access App Control: they allow or block access to an app depending on the user, device and location of the sign-in. For an app registered in Microsoft Entra ID, the app is brought under that control by a Conditional Access policy that uses the session control **Use Conditional Access App Control**. The reference answer makes connecting App1 to Defender for Cloud Apps the first step before the access policy is created."
      ],
      wrong: [
        ["A", "Conditional Access App Control is the proxy that enforces access and session policies in real time. The reference answer makes connecting App1 with an app connector the first step."],
        ["B", "App tags, such as sanctioned, unsanctioned or a custom tag, classify apps in the catalog and in Cloud Discovery. They are not a prerequisite for an access policy."],
        ["C", "A SIEM agent forwards Defender for Cloud Apps alerts and activities to a SIEM server. It plays no part in controlling access to an app."]
      ],
      concept: "Defender for Cloud Apps protects apps through API-based app connectors and through the Conditional Access App Control proxy, which enforces access and session policies.",
      takeaway: "App connector: API visibility, activity and file policies. Conditional Access App Control: real-time access and session policies.",
      refs: [
        ["Microsoft Learn: Create Microsoft Defender for Cloud Apps access policies", "https://learn.microsoft.com/defender-cloud-apps/access-policy-aad"],
        ["Microsoft Learn: Overview of Conditional Access App Control", "https://learn.microsoft.com/defender-cloud-apps/proxy-intro-aad"],
        ["Microsoft Learn: Connect apps to get visibility and control", "https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps"]
      ]
    }
  },
  {
    id: "Q320", source: 320, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "From Policy management, you open Information protection as shown in the following exhibit.",
      { image: "q320-policies-information-protection.png", alt: "Policies page with the tabs Threat detection, Information protection (selected), Conditional access, Shadow IT and All policies. Filters: Name (Policy name), Type: Select type, Status: ACTIVE (selected) or DISABLED, Severity, Category: Select risk category, and an Advanced filters toggle that is off. Toolbar: + Create policy (drop-down), Export, Hide filters and Table settings." },
      "Which type of policy can you create?"
    ],
    options: [
      { key: "A", text: "session policy" },
      { key: "B", text: "activity policy" },
      { key: "C", text: "OAuth app policy" },
      { key: "D", text: "access policy" },
      { key: "E", text: "file policy" }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "Policy management in Defender for Cloud Apps groups the policy types into tabs, and the Create policy menu of each tab offers the types that belong to it. Information protection is the tab of the file policy, which scans files in connected apps such as SharePoint, OneDrive or Box for sensitive content, sharing level and other properties, and applies governance actions such as removing external sharing, applying a sensitivity label or putting the file in quarantine.",
        "The other types live on other tabs: activity, anomaly detection and OAuth app policies under Threat detection, access and session policies under Conditional access, and app discovery and Cloud Discovery anomaly detection policies under Shadow IT."
      ],
      wrong: [
        ["A", "Session policies are created from the Conditional access tab and are enforced by Conditional Access App Control."],
        ["B", "Activity policies are created from the Threat detection tab."],
        ["C", "OAuth app policies belong to Threat detection (today they are managed in app governance), not to Information protection."],
        ["D", "Access policies are created from the Conditional access tab, together with session policies."]
      ],
      concept: "The Policy management tabs of Defender for Cloud Apps group policy types by purpose, and Information protection holds file policies.",
      takeaway: "Information protection tab: file policies. Conditional access tab: access and session policies. Threat detection tab: activity and anomaly policies. Shadow IT tab: app discovery policies.",
      refs: [
        ["Microsoft Learn: Control cloud apps with policies", "https://learn.microsoft.com/defender-cloud-apps/control-cloud-apps-with-policies"],
        ["Microsoft Learn: File policies in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/data-protection-policies"]
      ]
    }
  }
);
