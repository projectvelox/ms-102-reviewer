/* MS-102 question bank, part 23: questions 353 to 368 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q353", source: 353, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You plan to perform a security audit of all the apps detected by Cloud Discovery.",
      "You need to track which apps were audited. The solution must ensure that the list of audited apps can be displayed in the cloud app catalog.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Define each app as a critical asset." },
      { key: "B", text: "Deploy Conditional Access App Control." },
      { key: "C", text: "Enable app governance." },
      { key: "D", text: "Generate a Cloud Discovery snapshot report." },
      { key: "E", text: "Apply a custom app tag to each app." }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "Every app in the cloud app catalog and in the Cloud Discovery results can carry app tags. Besides the built-in tags Sanctioned, Unsanctioned and Monitored, Defender for Cloud Apps lets you create custom app tags for your own grouping of apps. For this audit you would create a tag such as Audited and apply it to each app as its review is finished.",
        "App tags are available as a filter in the cloud app catalog and in the list of discovered apps. Filtering on the custom tag displays exactly the apps that were audited, and the apps without the tag are the ones still to review. A custom tag only records a fact about the app; it does not block or allow anything, which is all a tracking requirement needs."
      ],
      wrong: [
        ["A", "Critical asset management classifies devices, identities and cloud resources as critical so that their exposure and incidents get more attention. It does not mark apps in the cloud app catalog as audited."],
        ["B", "Conditional Access App Control routes user sessions through a reverse proxy so that session policies can monitor and control activity in real time. It does not record which apps were reviewed."],
        ["C", "App governance monitors OAuth apps registered in Microsoft Entra ID, their permissions and their data access. It is not a way to label Cloud Discovery apps in the catalog."],
        ["D", "A snapshot report is a one-time analysis of uploaded firewall or proxy logs that shows which apps are in use. It discovers apps; it does not record which of them were audited."]
      ],
      concept: "Custom app tags in Defender for Cloud Apps label apps for your own purposes and can be used as a filter in the cloud app catalog and in the discovered apps.",
      takeaway: "To mark a set of apps and list them later (audited, reviewed, approved for a project), apply a custom app tag and filter on it.",
      refs: [
        ["Microsoft Learn: Govern discovered apps", "https://learn.microsoft.com/defender-cloud-apps/governance-discovery"],
        ["Microsoft Learn: Work with discovered apps", "https://learn.microsoft.com/defender-cloud-apps/discovered-apps"]
      ]
    }
  },
  {
    id: "Q354", source: 354, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You use Microsoft Defender for Office 365.",
      "You plan to automate an attack simulation campaign.",
      "Any users that fail the simulation must take additional training based on the simulation results.",
      "What is the maximum number of days the training will be available to the users after the simulation?"
    ],
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "15" },
      { key: "C", text: "30" },
      { key: "D", text: "45" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "When Attack simulation training assigns training to the users who were compromised by a simulation, the training gets a due date that is counted from the end of the simulation. In the training settings you select one of three values: 30 days after simulation ends (the default), 15 days after simulation ends or 7 days after simulation ends.",
        "30 days is therefore the longest period that users who fail the simulation are given to complete the assigned training."
      ],
      wrong: [
        ["A", "7 days after the simulation ends is one of the due dates, but it is the shortest."],
        ["B", "15 days after the simulation ends is the middle value, not the maximum."],
        ["D", "45 days is not one of the training due dates."]
      ],
      concept: "Training assigned by Attack simulation training has a due date of 7, 15 or 30 days after the simulation ends.",
      takeaway: "Attack simulation training due dates: 7, 15 or 30 days after the simulation ends. 30 is the default and the maximum.",
      refs: [
        ["Microsoft Learn: Simulate a phishing attack with Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-simulations"],
        ["Microsoft Learn: Get started using Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-get-started"]
      ]
    }
  },
  {
    id: "Q355", source: 355, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "The subscription contains users that have devices onboarded to Microsoft Defender for Endpoint. Defender for Endpoint is configured to forward signals to Microsoft Defender for Cloud Apps.",
      "Cloud Discovery identifies a risky web app named App1.",
      "You need to block users from connecting to Appl from Microsoft Edge. Users must be able to bypass the restriction.",
      "Which type of app tag should you use. and what should you configure to integrate Defender for Endpoint with Defender for Cloud Apps? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "App tag type:", options: ["Monitored", "Sanctioned", "Unsanctioned"] },
      { id: "f2", label: "Integrate by configuring:", options: ["Anonymization", "Asset rule management", "Enforce app access"] }
    ],
    answer: { f1: 2, f2: 2 },
    explanation: {
      correct: [
        "The reference answer is Unsanctioned. Defender for Cloud Apps can enforce its app tags on devices that are onboarded to Defender for Endpoint. Apps tagged **Unsanctioned** are synced to Defender for Endpoint as custom URL indicators: the domains the app uses are sent to the devices, and Microsoft Defender Antivirus network protection blocks connections to them. Tagging App1 Unsanctioned is how Defender for Cloud Apps blocks a risky discovered app on the devices.",
        "The integration is switched on in the Microsoft Defender portal under Settings > Cloud Apps > Cloud Discovery > Microsoft Defender for Endpoint, by selecting **Enforce app access**. On the Defender for Endpoint side, the advanced feature Custom network indicators must be turned on, and network protection must be enabled in block mode on the devices."
      ],
      wrong: [
        ["Monitored", "Monitored apps are not blocked. With Enforce app access turned on, a user who opens a monitored app sees a warning and can bypass it and continue to the app; the bypass lasts for a configurable number of hours."],
        ["Sanctioned", "Sanctioned marks an app as approved for use. Defender for Endpoint neither blocks nor warns on it."],
        ["Anonymization", "Cloud Discovery data anonymization replaces user names in discovery data with encrypted identifiers to protect privacy. It plays no part in enforcing app access."],
        ["Asset rule management", "Asset rule management in Defender for Endpoint creates rules that tag devices automatically. It does not connect app tags to enforcement on the devices."]
      ],
      concept: "With Enforce app access, Defender for Cloud Apps app tags become network indicators that Defender for Endpoint enforces on onboarded devices: Unsanctioned apps are blocked, Monitored apps get a warning that users can bypass.",
      takeaway: "Enforcing app tags on devices needs Enforce app access in Defender for Cloud Apps and Custom network indicators in Defender for Endpoint. Unsanctioned blocks; Monitored warns.",
      refs: [
        ["Microsoft Learn: Govern discovered apps using Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-cloud-apps/mde-govern"],
        ["Microsoft Learn: Govern discovered apps", "https://learn.microsoft.com/defender-cloud-apps/governance-discovery"]
      ]
    }
  },
  {
    id: "Q356", source: 356, type: "single",
    domain: "security", topic: "Intune and device compliance", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to assign a Microsoft Defender for Endpoint baseline.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Intune admin center" },
      { key: "B", text: "the Microsoft Purview compliance portal" },
      { key: "C", text: "the Microsoft Defender portal" },
      { key: "D", text: "the Microsoft 365 admin center" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Security baselines are groups of preconfigured, recommended Windows settings that Intune deploys. The Microsoft Defender for Endpoint baseline is one of them. In the Microsoft Intune admin center you go to Endpoint security > Security baselines, create a profile from the Defender for Endpoint baseline, adjust settings if needed, and assign the profile to groups of users or devices. Intune then delivers the settings to the devices it manages."
      ],
      wrong: [
        ["B", "The Microsoft Purview compliance portal manages data protection and compliance features such as DLP, sensitivity labels and retention. It has no device security baselines."],
        ["C", "The Microsoft Defender portal is where Defender for Endpoint is monitored and investigated, and its security baselines assessment measures devices against benchmarks such as CIS. The Intune security baseline profiles are created and assigned in the Intune admin center."],
        ["D", "The Microsoft 365 admin center manages users, licenses, billing and service settings. It does not deploy device security settings."]
      ],
      concept: "Intune security baselines, including the Microsoft Defender for Endpoint baseline, are deployed as profiles from Endpoint security in the Intune admin center.",
      takeaway: "Assigning a Defender for Endpoint security baseline: Intune admin center > Endpoint security > Security baselines.",
      refs: [
        ["Microsoft Learn: Security baselines in Intune", "https://learn.microsoft.com/intune/device-security/security-baselines/overview"],
        ["Microsoft Learn: Configure security baseline profiles in Intune", "https://learn.microsoft.com/intune/device-security/security-baselines/configure-baselines"]
      ]
    }
  },
  {
    id: "Q357", source: 357, type: "single",
    domain: "tenant", topic: "Exchange Online and mail flow", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Entra admin center" },
      { key: "B", text: "the Exchange admin center" },
      { key: "C", text: "the Intune admin center" },
      { key: "D", text: "the SharePoint admin center" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "A mail contact (mail-enabled contact) is an Exchange Online recipient that represents a person outside the organization. It has an external email address and appears in the global address list, so users can find it and it can be added to distribution groups. Because it is an Exchange recipient, it is created in the Exchange admin center under Recipients > Contacts, or with `New-MailContact` in Exchange Online PowerShell."
      ],
      wrong: [
        ["A", "The Microsoft Entra admin center manages users, groups, devices and applications in the directory. Mail contacts are Exchange recipients and are created with the Exchange tools."],
        ["C", "The Intune admin center manages devices and apps. It has no mail recipients."],
        ["D", "The SharePoint admin center manages sites, sharing and storage. It cannot create mail recipients."]
      ],
      concept: "Mail contacts are Exchange Online recipients for external addresses and are managed in the Exchange admin center.",
      takeaway: "Mail recipients of every kind (mailboxes, mail contacts, mail users, distribution groups) are managed in the Exchange admin center.",
      refs: [["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"]]
    }
  },
  {
    id: "Q358", source: 358, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to be alerted when Microsoft Defender XDR detects high-severity incidents.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "a custom detection rule" },
      { key: "B", text: "a threat policy" },
      { key: "C", text: "a notification rule" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Defender XDR sends email about new incidents and updates to incidents through incident notification rules. In the Microsoft Defender portal you go to Settings > Microsoft Defender XDR > Email notifications, and on the Incidents tab you select Add incident notification rule. The rule sets the alert severities that trigger a notification, the device group scope and the recipients. Selecting only High gives a notification for high-severity incidents."
      ],
      wrong: [
        ["A", "A custom detection rule runs an advanced hunting query on a schedule and creates alerts from the rows the query returns. It detects activity; it is not how you are notified about incidents of a given severity."],
        ["B", "Threat policies in Defender for Office 365, such as anti-phishing, anti-spam, anti-malware, Safe Links and Safe Attachments, protect email and collaboration content. They do not send incident notifications."]
      ],
      concept: "Incident email notification rules in Defender XDR send emails to chosen recipients for incidents that match conditions such as alert severity.",
      takeaway: "To be told about high-severity incidents, create an incident email notification rule with the severity set to High.",
      refs: [["Microsoft Learn: Get incident notifications by email", "https://learn.microsoft.com/defender-xdr/m365d-notifications-incidents"]]
    }
  },
  {
    id: "Q359", source: 359, type: "yesno",
    domain: "security", topic: "Defender for Office 365", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the identities shown in the following table.",
      { table: { head: ["Name", "Type", "Member of"], rows: [
        ["User1", "User", "Group1"],
        ["User2", "User", "Group2"],
        ["User3", "User", "None"],
        ["Group1", "Group", "None"],
        ["Group2", "Group", "Group1"]
      ] } },
      "From the Microsoft Defender portal, you create an anti-spam inbound policy named Policy1 that has the following settings:",
      { list: [
        "Include these users, groups and domains\n- Users: User3\n- Groups: Group 1",
        "Exclude these users, groups and domains\n- Users: User1"
      ] },
      "Policy1 has the following Bulk email threshold & spam properties settings:",
      { list: ["Mark as spam\n- Empty messages: On\n- Object tags in HTML On\n- Sensitive words: Off\n- Backscatter: On"] },
      "Policy1 has the following Actions settings:",
      { list: ["Message actions\n- Spam: Move message to Junk Email folder\n- High confidence spam: Move message to Junk Email folder"] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "If User1 sends an empty email message to User2, Policy1 will move the message to the Junk Email folder of User2." },
      { text: "If User2 sends User3 an email message that contains sensitive words, Policy1 will move the message to the Junk Email folder of User3." },
      { text: "If User3 sends an empty email message to User1, Policy1 will move the message to the Junk Email folder of User1." }
    ],
    answer: [false, false, false],
    explanation: {
      correct: [
        "Inbound anti-spam policies apply to recipients, and the recipient conditions combine in a specific way. Several values of the **same** condition are joined with OR, but **different** conditions are joined with AND: the recipient must match all of them. Policy1 includes Users: User3 and Groups: Group1, so it applies only to a recipient who is User3 **and** a member of Group1. Exceptions are joined with OR, so User1 is out of scope whatever else is true.",
        "According to the table, User3 is not a member of any group, so no recipient meets both conditions and Policy1 applies to nobody. Statement 1: the recipient User2 belongs to Group2, which is nested in Group1, but User2 is not User3, so Policy1 does not apply and its Empty messages setting does not act on the message. Statement 2: the recipient User3 is not a member of Group1, and Sensitive words is Off in any case. Statement 3: the recipient User1 is excluded, and is not User3 either. All three statements are No."
      ],
      wrong: [
        ["Statement 1 — Yes", "This reads the Users and Groups conditions as OR, so that User2 would be covered through Group2 inside Group1. Different conditions are combined with AND, and User2 is not User3. Only if Policy1 applied would Empty messages: On mark a message without subject, body and attachments as high confidence spam and move it to Junk Email."],
        ["Statement 2 — Yes", "Even if Policy1 applied to User3, Sensitive words is Off, so sensitive words would not mark the message as spam. And Policy1 does not apply, because User3 is not a member of Group1."],
        ["Statement 3 — Yes", "User1 is in the exceptions of Policy1, and an exception removes the recipient from the policy whatever the conditions say."]
      ],
      concept: "In the scope of an anti-spam policy, values of one condition are ORed, different conditions are ANDed, and any matching exception removes the recipient.",
      takeaway: "Users: X plus Groups: Y in one policy means X and a member of Y. Check that a recipient actually matches before evaluating the settings.",
      logic: "Find who matches the scope first. Nobody is both User3 and a member of Group1, so every statement about what Policy1 does is No.",
      refs: [
        ["Microsoft Learn: Configure spam filter policies", "https://learn.microsoft.com/defender-office-365/anti-spam-policies-configure"],
        ["Microsoft Learn: ASF settings in anti-spam policies", "https://learn.microsoft.com/defender-office-365/anti-spam-policies-asf-settings-about"]
      ]
    }
  },
  {
    id: "Q360", source: 360, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    caseId: "series-device-policy", caseOrder: 4,
    stem: [
      "Solution: You configure a compliance policy.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "In the scenario, Defender for Endpoint is already integrated with Intune, and devices must onboard to Defender for Endpoint automatically when they enroll. Onboarding means delivering the Defender for Endpoint onboarding package to each device. With the Intune connection in place, that is done by an endpoint detection and response (EDR) policy whose client configuration package type is **Auto from connector**, so Intune takes the current onboarding package from Defender for Endpoint and applies it to every device the policy is assigned to. A device configuration profile for Defender for Endpoint can also onboard devices.",
        "A compliance policy does not do this. It evaluates devices against rules and marks them compliant or not compliant. With the Defender for Endpoint integration it can require a device to be at or under a machine risk score, but that score exists only for devices that are already onboarded. The compliance policy reads the result of onboarding; it does not onboard the device. The answer is No."
      ],
      wrong: [
        ["A", "A compliance policy only evaluates the device and reports compliance, which Conditional Access can then use. It does not deploy the onboarding package, so enrolled devices are not onboarded to Defender for Endpoint."]
      ],
      concept: "Intune onboards devices to Defender for Endpoint with an EDR policy (or a configuration profile) that uses the onboarding package from the connector; compliance policies only consume the device risk afterward.",
      takeaway: "Onboard at enrollment: EDR policy with Auto from connector. Compliance policy: machine risk score, which needs devices that are already onboarded.",
      refs: [
        ["Microsoft Learn: Deploy endpoint detection and response policy with Intune", "https://learn.microsoft.com/intune/device-configuration/endpoint-security/deploy-edr"],
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint in Intune", "https://learn.microsoft.com/intune/device-security/microsoft-defender/configure-integration"]
      ]
    }
  },
  {
    id: "Q361", source: 361, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription and use Microsoft Defender for Office 365.",
      "You need to create a policy to ensure that any email messages containing an attachment that has the .extl extension is quarantined for inspection.",
      "Which type of policy should you create?"
    ],
    options: [
      { key: "A", text: "anti-phishing" },
      { key: "B", text: "quarantine" },
      { key: "C", text: "anti-spam" },
      { key: "D", text: "anti-malware" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Filtering attachments by file type is a feature of anti-malware policies: the **common attachments filter**. When the filter is turned on, the policy checks attachments against a list of file types, and you can add types to that list, such as `extl`. For a matching message you choose what happens: reject it with a non-delivery report, or **quarantine the message**. Choosing quarantine holds the messages so that administrators can inspect them and release them if needed."
      ],
      wrong: [
        ["A", "Anti-phishing policies protect against impersonation and spoofing. They have no setting for attachment file types."],
        ["B", "A quarantine policy defines what users can do with quarantined messages and whether they receive quarantine notifications. It is selected inside a protection policy and detects nothing on its own."],
        ["C", "Anti-spam policies act on spam, phishing and bulk verdicts. They cannot filter attachments by file type."]
      ],
      concept: "The common attachments filter of anti-malware policies acts on attachments by file type and can reject or quarantine the messages.",
      takeaway: "To block or quarantine a file extension in email, use the anti-malware policy's common attachments filter with the action Quarantine the message.",
      refs: [
        ["Microsoft Learn: Configure anti-malware policies", "https://learn.microsoft.com/defender-office-365/anti-malware-policies-configure"],
        ["Microsoft Learn: Anti-malware protection", "https://learn.microsoft.com/defender-office-365/anti-malware-protection-about"]
      ]
    }
  },
  {
    id: "Q362", source: 362, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.",
      { table: { head: ["Name", "Type", "Role assignments allowed", "Security enabled"], rows: [
        ["Group1", "Security", "No", "Yes"],
        ["Group2", "Microsoft 365", "Yes", "No"],
        ["Group3", "Distribution", "Not applicable", "Not applicable"]
      ] } },
      "You plan to create 10 new users and configure group-based licensing to assign each user a Microsoft 365 E5 license.",
      "To which group should you add the users, and which portal should you use to assign the license? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Group:", options: ["Group1", "Group2", "Group3"] },
      { id: "f2", label: "Portal:", options: ["The Microsoft 365 admin center", "The Microsoft Entra admin center", "The Microsoft Purview compliance portal"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "Group-based licensing assigns a license to every member of a group, and the group has to be security-enabled: a security group, or a Microsoft 365 group whose securityEnabled property is true. Group1 is a security group with Security enabled Yes, so it is the group to add the 10 users to. Group2 is a Microsoft 365 group with Security enabled No, and Group3 is a distribution group, so neither is the one to license. The Role assignments allowed column decides whether Microsoft Entra roles can be assigned to the group, which has nothing to do with licensing.",
        "Microsoft documents group-based licensing in the Microsoft 365 admin center: go to Billing > Licenses, select Assign licenses, choose Group1 and the Microsoft 365 E5 subscription, and assign. From then on every member of Group1, including the new users as soon as they are added, receives the license automatically."
      ],
      wrong: [
        ["Group2", "A Microsoft 365 group can carry licenses only when it is security-enabled, and Group2 shows Security enabled No. That Group2 allows role assignments does not change this."],
        ["Group3", "Distribution groups are used for email distribution and are not security-enabled, so they are not used for group-based licensing."],
        ["The Microsoft Entra admin center", "Microsoft's group-licensing documentation for Entra now points to the Microsoft 365 admin center, where group licenses are assigned on the Licenses page; the Entra admin center is referred to there for finding licensing errors."],
        ["The Microsoft Purview compliance portal", "The Purview portal manages compliance features such as DLP and retention. It does not assign licenses."]
      ],
      concept: "Group-based licensing assigns licenses through membership of a security-enabled group and is managed on the Licenses page of the Microsoft 365 admin center.",
      takeaway: "License by group: a security group (or a security-enabled Microsoft 365 group), assigned in the Microsoft 365 admin center under Billing > Licenses.",
      refs: [["Microsoft Learn: Assign or unassign licenses to a group in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses"]]
    }
  },
  {
    id: "Q363", source: 363, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Windows 11 device named Device1.",
      "Device1 is onboarded to Microsoft Defender for Endpoint.",
      "You need to ensure that Device1 is blocked from connecting to IP address 131.107.10.15.",
      "What should you configure in the Microsoft Defender Endpoint settings? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Advanced features:", options: ["Custom network indicators", "Live Response", "Web content filtering"] },
      { id: "f2", label: "Rules:", options: ["Asset rule management", "Indicators", "Process Memory Indicators"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "Defender for Endpoint blocks a specific IP address with an IP indicator. Two settings are involved, both under Settings > Endpoints in the Microsoft Defender portal. Under **Advanced features**, **Custom network indicators** must be turned on; it allows devices to enforce IP, URL and domain indicators through network protection, which must be in block mode on the device.",
        "Under **Rules**, **Indicators** is where you create the indicator itself: on the IP addresses tab, add 131.107.10.15 with a block action. The indicator can be scoped to a device group that contains Device1, and from then on Device1 cannot connect to that address."
      ],
      wrong: [
        ["Live Response", "Live response opens a remote shell on a device for investigation. It does not create a lasting block."],
        ["Web content filtering", "Web content filtering blocks categories of websites, such as gambling sites. It is not used to block one specific IP address."],
        ["Asset rule management", "Asset rule management creates rules that tag devices automatically from their properties. It does not block connections."],
        ["Process Memory Indicators", "This rules page is not where network destinations are blocked; IP addresses, URLs and domains are added under Indicators."]
      ],
      concept: "Defender for Endpoint blocks IP addresses, URLs and domains with network indicators, which need the Custom network indicators advanced feature.",
      takeaway: "Block an IP on devices: turn on Custom network indicators, then add an IP indicator under Settings > Endpoints > Indicators.",
      refs: [
        ["Microsoft Learn: Create indicators for IPs and URLs/domains", "https://learn.microsoft.com/defender-endpoint/indicator-ip-domain"],
        ["Microsoft Learn: Configure advanced features in Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/advanced-features"]
      ]
    }
  },
  {
    id: "Q364", source: 364, type: "yesno",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Multi-Factor Auth Status"], rows: [
        ["User1", "Group1", "Disabled"],
        ["User2", "Group1, Group2", "Enabled"],
        ["User3", "Group2", "Disabled"]
      ] } },
      "You configure a Multifactor authentication registration policy that has the following settings:",
      { list: [
        "Assignments:\n- Include: Group1\n- Exclude: Group2",
        "Controls: Require Microsoft Entra ID multifactor authentication registration",
        "Policy enforcement: Enabled"
      ] },
      "You create a conditional access policy that has the following settings:",
      { list: [
        "Name: Policy1",
        "Assignments:\n- Include: Group2\n- Exclude: Group1",
        "Grant: Require multifactor authentication",
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
    answer: [false, false, true],
    explanation: {
      correct: [
        "Start with scope; in both policies an exclusion beats an inclusion. The MFA registration policy of Identity Protection includes Group1 and excludes Group2, so it covers User1 only (User2 is in Group2, and User3 is not in Group1). Policy1 includes Group2 and excludes Group1, so it covers User3 only (User2 is in Group1, and User1 is not in Group2). User2 is outside both policies.",
        "The two policies also act differently at sign-in. The registration policy prompts users to register at their next interactive sign-in but gives them 14 days to complete it; during those 14 days they can skip the registration as long as MFA is not required as a condition of the sign-in. Policy1 makes MFA a condition of the sign-in itself, and a user who has not registered a method can only meet it by registering one. So User3 is required to register on the next sign-in (Yes). User1 is prompted by the registration policy but can skip it, because no policy requires MFA for User1's sign-ins (No). Neither policy applies to User2 (No)."
      ],
      wrong: [
        ["Statement 1 — Yes", "User1 is in scope of the registration policy and is prompted, but that policy allows skipping registration for 14 days when MFA is not required for the sign-in. Policy1 does not cover User1, who is not in Group2, so nothing forces the registration at the next sign-in."],
        ["Statement 2 — Yes", "User2 is excluded from both policies: from the registration policy through Group2 and from Policy1 through Group1. User2's per-user MFA status is Enabled; that state prompts a user to register only when no method is registered yet, and the reference answer treats User2 as having nothing to register."],
        ["Statement 3 — No", "Policy1 covers User3, and a grant that requires MFA cannot be met without a registered method. It is only the registration policy that leaves User3 out, because User3 is not in Group1."]
      ],
      concept: "The Identity Protection MFA registration policy prompts and allows a 14-day skip, while a Conditional Access policy that requires MFA makes an unregistered user register at once; in both, exclusions win.",
      takeaway: "Forced to register at the next sign-in means in scope of a policy that requires MFA for that sign-in. The registration policy alone can be postponed for 14 days.",
      logic: "Resolve the scope of each policy first (exclusions win), then ask which policy actually demands MFA at sign-in.",
      refs: [
        ["Microsoft Learn: Configure the MFA registration policy", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-mfa-policy"],
        ["Microsoft Learn: Enable per-user Microsoft Entra multifactor authentication", "https://learn.microsoft.com/entra/identity/authentication/howto-mfa-userstates"],
        ["Microsoft Learn: Users and groups in Conditional Access policies", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-users-groups"]
      ]
    }
  },
  {
    id: "Q365", source: 365, type: "yesno",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Advanced",
    stem: [
      "Your company has offices in Montreal, Seattle, and New York City.",
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Email address"], rows: [
        ["User1", "user1@contoso.com"],
        ["User2", "user2@contoso.com"]
      ] } },
      "The offices have the IP addresses shown in the following table.",
      { table: { head: ["Office", "IP address space", "Public NAT segment"], rows: [
        ["Montreal", "10.10.0.0/16", "190.15.1.0/24"],
        ["Seattle", "172.16.0.0/16", "194.25.2.0/24"],
        ["New York", "192.168.0.0/16", "198.35.3.0/24"]
      ] } },
      "From Microsoft Defender for Cloud Apps, you create the activity policy shown in the following exhibit.",
      { image: "q365-activity-policy.png", alt: "Defender for Cloud Apps activity policy, Create filters for the policy. Act on: Repeated activity (repeated activity by a single user) is selected, with Minimum repeated activities 30 and Within timeframe 1 minutes; In a single app and Count only unique target files or folders per user are cleared. Activities matching all of the following: IP address, Raw IP address, equals 10.10.0.0/24 OR 194.25.2.0/24; Activity type equals Download; User, From group, equals Application (Defender for Cloud Apps) as Actor only. Alerts: Create an alert for each matching event with the policy's severity is selected; Send alert as email is cleared; Daily alert limit per policy is 5; the Power Automate option is cleared and unavailable." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "At the Montreal office, if User1 downloads 40 files in 45 seconds, an alert will be created." },
      { text: "At the Seattle office, if User2 downloads one file per second for two minutes, an alert will be created." },
      { text: "At the New York City office, if User1 downloads 40 files in 10 seconds, an alert will be created." }
    ],
    answer: [false, true, false],
    explanation: {
      correct: [
        "The policy acts on **repeated activity**: it creates an alert when a single user performs at least 30 matching activities within 1 minute. An activity matches only if all the filters match. The policy also has a user group filter, but the three statements differ only in the office and the rate, and those are decided by two filters: the activity type, Download, and the IP address, which must be in 10.10.0.0/24 or 194.25.2.0/24.",
        "Defender for Cloud Apps sees the IP address from which an activity reaches the cloud app. Users in an office reach the internet through the office's public NAT segment, so their activities carry addresses from that segment, not from the internal address space. Montreal appears as 190.15.1.0/24, which is not in the filter; 10.10.0.0/24 lies in Montreal's private address space, which is not the source address of cloud activity. Statement 1 is No, even though 40 downloads in 45 seconds would exceed the rate. Seattle appears as 194.25.2.0/24, which is in the filter, and one download per second is 60 downloads a minute, above the minimum of 30 within 1 minute: statement 2 is Yes. New York appears as 198.35.3.0/24, which is not in the filter, so statement 3 is No, however fast the downloads are."
      ],
      wrong: [
        ["Statement 1 — Yes", "40 downloads in 45 seconds does exceed 30 within 1 minute, but the downloads come from Montreal's public NAT addresses (190.15.1.0/24), which are not in the IP filter. The internal range in the filter is not what the cloud app sees."],
        ["Statement 2 — No", "One file per second for two minutes is 60 downloads in each minute, twice the minimum, and Seattle's NAT segment 194.25.2.0/24 is in the filter."],
        ["Statement 3 — Yes", "The rate is high, but New York's public addresses (198.35.3.0/24) are not in the filter, so the downloads do not match the policy."]
      ],
      concept: "Defender for Cloud Apps activity policies match on the public IP address seen by the cloud app, and a repeated-activity policy alerts when one user reaches the count within the time frame.",
      takeaway: "In Defender for Cloud Apps IP filters, use the offices' public egress (NAT) addresses, not their internal ranges.",
      logic: "Check the IP first: only Seattle's NAT segment is in the filter. Then check the rate for Seattle only.",
      refs: [
        ["Microsoft Learn: Activity policies", "https://learn.microsoft.com/defender-cloud-apps/user-activity-policies"],
        ["Microsoft Learn: Activity filters", "https://learn.microsoft.com/defender-cloud-apps/activity-filters"]
      ]
    }
  },
  {
    id: "Q366", source: 366, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "You create an anti-phishing policy named Policy1 that has the following settings:",
      { list: [
        "Include these users, groups and domains: User1",
        "Phishing email threshold: 3 - More Aggressive"
      ] },
      "User1 receives the email messages shown in the following table.",
      { table: { head: ["Name", "Phishing confidence level (PCL)"], rows: [
        ["Mail1", "Low"],
        ["Mail2", "Medium"],
        ["Mail3", "High"],
        ["Mail4", "Very high"]
      ] } },
      "Which messages are phishing email?"
    ],
    options: [
      { key: "A", text: "Mail4 only" },
      { key: "B", text: "Mail3 and Mail4 only" },
      { key: "C", text: "Mail2, Mail3, and Mail4 only" },
      { key: "D", text: "Mail1, Mail2, Mail3, and Mail4" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The phishing email threshold of an anti-phishing policy in Defender for Office 365 sets how aggressively the machine learning verdicts are treated. Each phishing detection comes with a degree of confidence: low, medium, high or very high. At **1 - Standard**, the action depends on that degree. Each higher threshold treats more degrees as if they were very high: **2 - Aggressive** raises high, **3 - More aggressive** raises medium and high, and **4 - Most aggressive** raises low, medium and high.",
        "Policy1 uses 3 - More aggressive. Mail4 is very high already, and Mail2 (medium) and Mail3 (high) are treated as if they had been identified with very high confidence, so Mail2, Mail3 and Mail4 are handled as phishing. Mail1 has low confidence, which only 4 - Most aggressive raises, so it is not among them."
      ],
      wrong: [
        ["A", "This counts only the very high message, as if the threshold raised nothing. At 3 - More aggressive, medium and high confidence messages are treated as very high too."],
        ["B", "Mail3 and Mail4 is the result of 2 - Aggressive, which raises only high confidence messages."],
        ["D", "Including Mail1 needs 4 - Most aggressive, the only threshold that also raises low confidence messages."]
      ],
      concept: "The advanced phishing threshold decides which machine learning confidence levels are treated as very high confidence phishing.",
      takeaway: "Threshold 2 raises high; 3 raises medium and high; 4 raises low, medium and high.",
      refs: [["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"]]
    }
  },
  {
    id: "Q367", source: 367, type: "dropdown",
    domain: "security", topic: "Intune and device compliance", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Endpoint. The subscription contains Windows 11 devices.",
      "You need to create a policy to restrict users from accessing the Device security settings and the Account protection settings in Windows Defender Security Center on the devices.",
      "Which type of policy should you create, and which template should you use? To answer, select the appropriate options in the answer area."
    ],
    fields: [
      { id: "f1", label: "Policy type:", options: ["Activity policy", "Endpoint security policy", "Session policy"] },
      { id: "f2", label: "Template:", options: ["Activities from suspicious user agents", "Unusual impersonated activity (by user)", "Windows Security Experience"] }
    ],
    answer: { f1: 1, f2: 2 },
    explanation: {
      correct: [
        "What users can see in the Windows Security app (formerly Windows Defender Security Center) is a device security setting, so it is configured with an **endpoint security policy**. In the Antivirus area of endpoint security, the Windows platform offers the **Windows Security Experience** profile, which manages the Windows Security app settings that users can view and the notifications they receive. Its settings include switches that hide individual areas of the app, among them Device security and Account protection, so that users cannot open those pages."
      ],
      wrong: [
        ["Activity policy", "Activity policies belong to Defender for Cloud Apps and alert on user activity in cloud apps. They do not configure Windows devices."],
        ["Session policy", "Session policies belong to Defender for Cloud Apps and control sessions in cloud apps through Conditional Access App Control. They do not configure Windows."],
        ["Activities from suspicious user agents", "This is a Defender for Cloud Apps activity policy template that looks for activity from unusual user agents. It does not touch the Windows Security app."],
        ["Unusual impersonated activity (by user)", "This is a Defender for Cloud Apps detection for unusual activity performed through impersonation in cloud apps. It does not configure Windows Security."]
      ],
      concept: "Endpoint security policies configure device security settings; the Windows Security Experience profile controls which areas of the Windows Security app users can see.",
      takeaway: "To hide Device security or Account protection in Windows Security, use an endpoint security Antivirus policy with the Windows Security Experience profile.",
      logic: "Activity policies, session policies and the two named templates all belong to Defender for Cloud Apps, which governs cloud apps, not Windows settings.",
      refs: [
        ["Microsoft Learn: Manage antivirus settings with endpoint security policies in Microsoft Intune", "https://learn.microsoft.com/intune/device-configuration/endpoint-security/antivirus"],
        ["Microsoft Learn: Endpoint security policies in Intune", "https://learn.microsoft.com/intune/device-security/endpoint-security-policies"]
      ]
    }
  },
  {
    id: "Q368", source: 368, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint.",
      "All the devices in your organization are onboarded to Microsoft Defender for Endpoint.",
      "You need to ensure that an alert is generated if malicious activity was detected on a device during the last 24 hours.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the Microsoft Purview compliance portal, create a data loss prevention (DLP) policy." },
      { key: "B", text: "From the Microsoft Defender portal, create an alert suppression rule and assign an alert." },
      { key: "C", text: "From Advanced hunting, create a query and a detection rule." },
      { key: "D", text: "From the Microsoft Defender portal, create an Advanced hunting query and a detection rule." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A custom detection rule turns an advanced hunting query into an alert generator. In the Microsoft Defender portal you open Hunting > Advanced hunting, write a query that finds the malicious activity in the device data, and select **Create detection rule**. The query must return the columns that identify the event and the device, such as Timestamp, DeviceId and ReportId.",
        "The rule runs at the frequency you choose, for example every 24 hours, and generates an alert each time the query returns results. It can also take response actions on the affected devices. Both the query and the rule are created in the Microsoft Defender portal, which is what option D describes."
      ],
      wrong: [
        ["A", "DLP policies protect sensitive content in email, files and endpoints. They do not detect malicious activity on devices or raise security alerts about it."],
        ["B", "A suppression rule hides or resolves alerts that match it. It reduces alerts; it never generates one."],
        ["C", "Advanced hunting is where the query is written, but this option does not name the portal. The reference answer is D, which places both the advanced hunting query and the custom detection rule in the Microsoft Defender portal."]
      ],
      concept: "A custom detection rule runs an advanced hunting query on a schedule in the Microsoft Defender portal and creates alerts from its results.",
      takeaway: "Alert on a custom condition across devices: Defender portal, Advanced hunting query, Create detection rule.",
      refs: [
        ["Microsoft Learn: Create and manage custom detection rules", "https://learn.microsoft.com/defender-xdr/custom-detection-rules"],
        ["Microsoft Learn: Custom detections overview", "https://learn.microsoft.com/defender-xdr/custom-detections-overview"]
      ]
    }
  }
);
