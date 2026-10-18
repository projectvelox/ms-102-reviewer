/* MS-102 question bank, part 26: questions 401 to 416 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q401", source: 401, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Endpoint. The subscription contains Windows 11 devices.",
      "You need to recommend a solution to prevent antivirus and real-time protection on the devices from being modified or disabled.",
      "What should you include in the recommendation?"
    ],
    options: [
      { key: "A", text: "Enforcement scope" },
      { key: "B", text: "tamper protection" },
      { key: "C", text: "Auto remediation" },
      { key: "D", text: "endpoint detection and response (EDR) in block mode" },
      { key: "E", text: "Live Response" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "**Tamper protection** locks the security settings of Microsoft Defender Antivirus so that they can't be turned off or changed on the device itself, whether through the Windows Security app, the registry, PowerShell, Group Policy or by malware running with administrative rights. The protected settings include real-time protection, cloud-delivered protection, behavior monitoring and security intelligence updates.",
        "For devices onboarded to Defender for Endpoint, tamper protection can be turned on for the whole tenant in the Microsoft Defender portal (Settings > Endpoints > Advanced features) or deployed to chosen devices with an Intune antivirus policy. Once it is on, changes to the protected settings are only possible through the managed configuration, which is exactly the requirement for the Windows 11 devices."
      ],
      wrong: [
        ["A", "Enforcement scope belongs to Defender for Endpoint security settings management: it chooses which devices and operating systems receive security policies through Defender for Endpoint. It decides where policies apply, not whether someone on the device can switch protection off."],
        ["C", "Automated investigation and remediation levels decide whether remediation actions after an automated investigation are taken automatically or wait for approval. They react to threats; they don't stop anyone from disabling antivirus."],
        ["D", "EDR in block mode lets Defender for Endpoint block and remediate malicious artifacts found by its EDR capabilities, typically when Microsoft Defender Antivirus runs in passive mode beside another antivirus product. It doesn't protect the antivirus settings from being changed."],
        ["E", "Live Response opens a remote shell on a device so that an analyst can investigate and collect evidence. It is an investigation tool, not a protection for settings."]
      ],
      concept: "Tamper protection prevents Microsoft Defender Antivirus settings such as real-time protection from being disabled or changed outside the managed configuration.",
      takeaway: "To stop users or malware from turning off Defender Antivirus or real-time protection, turn on tamper protection.",
      refs: [
        ["Microsoft Learn: Protect security settings with tamper protection", "https://learn.microsoft.com/defender-endpoint/prevent-changes-to-security-settings-with-tamper-protection"]
      ]
    }
  },
  {
    id: "Q402", source: 402, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Advanced",
    stem: [
      "Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com.",
      "Contoso.com contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "In organizational unit (OU)"], rows: [
        ["User1", "Group1", "OU1"],
        ["User2", "Group2", "OU2"]
      ] } },
      "Contoso.com contains the groups shown in the following table.",
      { table: { head: ["Name", "Member of", "In OU"], rows: [
        ["Group1", "None", "OU2"],
        ["Group2", "Group1", "OU2"],
        ["Group3", "Group1", "OU1"]
      ] } },
      "Group3 has no members.",
      "You have a Microsoft Entra tenant.",
      "You deploy Microsoft Entra Cloud Sync and configure a scoping filter by using the following entry.",
      { code: `CN=Group1,OU=OU2,DC=contoso, DC=com` },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 syncs with the Microsoft Entra tenant." },
      { text: "User2 syncs with the Microsoft Entra tenant." },
      { text: "Group3 syncs with the Microsoft Entra tenant." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "A Microsoft Entra Cloud Sync configuration can be scoped with **Selected security groups**: you enter the distinguished name of an on-premises group, here Group1 in OU2, and the configuration provisions the members of that group instead of all users. User1 is a direct member of Group1, so User1 is in scope and syncs to the Microsoft Entra tenant (Yes).",
        "Statement 2: the reference answer is Yes. User2 belongs to Group1 only through Group2, which is itself a member of Group1. Microsoft documents that nested groups can't be used with group scoping and that objects beyond the first level aren't included when scoping with security groups, so a nested member such as User2 is outside what that rule brings in. The reference answer counts User2 as in scope through its nested membership.",
        "Statement 3: the reference answer is No, on the view that the scoping filter brings in the users of the group and not the group objects inside it (Group3 is also empty). Group3 is a direct member of Group1, and Microsoft's note only leaves out objects beyond the first level of the scoping group."
      ],
      wrong: [
        ["Statement 1 — No", "User1 is a direct, first-level member of the scoping group, which is exactly what a group scoping filter includes."],
        ["Statement 2 — No", "This follows the documented limitation on nested groups, since User2 reaches Group1 only through Group2. The reference answer is Yes."],
        ["Statement 3 — Yes", "Group3 is a first-level member of Group1, and Microsoft's note excludes only objects beyond the first level. The reference answer is No."]
      ],
      concept: "Cloud Sync group scoping provisions the first-level members of the selected security groups; it doesn't follow nested group membership.",
      takeaway: "Use group scoping in Cloud Sync for pilots only, and remember that members of nested groups aren't picked up.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Cloud Sync new agent configuration", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/how-to-configure"]
      ]
    }
  },
  {
    id: "Q403", source: 403, type: "dropdown",
    domain: "security", topic: "Intune and device compliance", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant that connects to Microsoft Defender for Endpoint.",
      "You have devices enrolled in Microsoft Intune as shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [
        ["Device1", "Windows 11"],
        ["Device2", "iOS"],
        ["Device3", "Android"]
      ] } },
      "You plan to use risk levels in Microsoft Defender for Endpoint to identify whether a device is compliant.",
      "Noncompliant devices must be blocked from accessing corporate resources.",
      "You need to identify which devices can be onboarded to Microsoft Defender for Endpoint, and which Endpoint security policies must be configured.",
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Devices that can onboarded to Microsoft Defender for Endpoint:", options: ["Device1 only", "Device1 and Device2 only", "Device1 and Device3 only", "Device1, Device2, and Device3"] },
      { id: "f2", label: "Endpoint security policies that must be configured:", options: ["A conditional access policy only", "A device compliance policy only", "A device configuration profile only", "A device configuration profile and a conditional access policy only", "Device configuration profile, device compliance policy, and conditional access policy"] }
    ],
    answer: { f1: 3, f2: 2 },
    explanation: {
      correct: [
        "Defender for Endpoint supports Windows, macOS, Linux, Android and iOS/iPadOS. With the Intune connection in place, Windows devices are onboarded by a policy that uses the onboarding package Intune receives from Defender for Endpoint, and Android and iOS devices are onboarded by deploying the Microsoft Defender app to them. All three devices, Device1, Device2 and Device3, can be onboarded.",
        "For the policies, the reference answer is **A device configuration profile only**. The device configuration profile (the Microsoft Defender for Endpoint profile, now offered as an Endpoint detection and response policy under Endpoint security) deploys the onboarding package, and an onboarded device then reports a machine risk level. Microsoft's integration guide adds two more pieces for the rest of the scenario: a device compliance policy with **Require the device to be at or under the machine risk score**, which marks a device noncompliant when its risk is above the threshold, and a Conditional Access policy that requires a compliant device, which performs the block."
      ],
      wrong: [
        ["Device1 only / Device1 and Device2 only / Device1 and Device3 only", "Defender for Endpoint isn't limited to Windows. Android and iOS devices are onboarded through the Microsoft Defender app, so neither mobile device is left out."],
        ["A conditional access policy only", "Conditional Access enforces the block, but on its own it neither onboards the devices nor turns a risk level into a compliance state."],
        ["A device compliance policy only", "The compliance policy evaluates the machine risk score, but a device reports a risk score only after it is onboarded."],
        ["A device configuration profile and a conditional access policy only", "Without a compliance policy that uses the machine risk score, the risk level never makes a device noncompliant, so the Conditional Access policy has nothing to act on."],
        ["Device configuration profile, device compliance policy, and conditional access policy", "This is the full set that Microsoft's integration guide describes for blocking risky devices: onboarding, risk-based compliance and Conditional Access. The reference answer is A device configuration profile only."]
      ],
      concept: "Defender for Endpoint risk-based compliance in Intune combines onboarding, a compliance policy that uses the machine risk score, and a Conditional Access policy that requires compliant devices.",
      takeaway: "Windows devices are onboarded to Defender for Endpoint with an Intune profile that uses the connector's onboarding package; iOS and Android devices onboard through the Defender app.",
      refs: [
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint with Intune and onboard devices", "https://learn.microsoft.com/intune/device-security/microsoft-defender/configure-integration"],
        ["Microsoft Learn: Minimum requirements for Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/minimum-requirements"]
      ]
    }
  },
  {
    id: "Q404", source: 404, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft 365 Multi-Geo. The subscription contains two Microsoft SharePoint Online sites named Site1 and Site2 that are stored in different Multi-Geo regions.",
      "You plan to configure a Microsoft 365 Backup policy.",
      "You need to add Site1 and Site2 to the policy and configure the longest retention period available.",
      "What should you do? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To add the sites:", options: ["Back up sites that match specific filters.", "Select each site individually.", "Upload a list of the sites in a CSV file."] },
      { id: "f2", label: "Set the retention period to:", options: ["6 months", "1 year", "5 years", "10 years"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "Microsoft 365 Backup can protect sites in both the central and the satellite locations of a Multi-Geo tenant, but only one selection method adds sites from every geo: uploading a list of the sites in a CSV file. Microsoft documents that adding sites through the site picker, search or filter rules doesn't support Multi-Geo, because those experiences only add sites in the tenant's central location. Site1 and Site2 are in different geos, so at least one of them is outside the central location, and the CSV upload is the way to add both.",
        "Microsoft 365 Backup kept restore points for one year when it was introduced. Today the recovery window of a backup policy can be set to 3 months, 6 months, 1 year or 2 years, with 1 year as the default. Of the values offered here, 1 year is the longest one Microsoft 365 Backup supports; 5 and 10 years are not available."
      ],
      wrong: [
        ["Back up sites that match specific filters.", "Filter rules (site name or URL contains, site last modified) only add sites in the central location of a Multi-Geo tenant."],
        ["Select each site individually.", "The site picker and search also only add sites in the central location, so a site in a satellite geo can't be added this way."],
        ["6 months", "A valid recovery window, but shorter than 1 year."],
        ["5 years / 10 years", "A Microsoft 365 Backup policy offers no recovery window of several years; these values don't exist in the service. Long-term retention is a job for Microsoft Purview retention, not for Backup."]
      ],
      concept: "In a Multi-Geo tenant, Microsoft 365 Backup adds sites from every geo only through CSV upload, and its recovery window is limited to at most a couple of years.",
      takeaway: "Multi-Geo sites in Microsoft 365 Backup: add them with a CSV file. Backup retention: 1 year by default.",
      refs: [
        ["Microsoft Learn: Create, view, and edit backup policies in Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"],
        ["Microsoft Learn: Overview of Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-overview"]
      ]
    }
  },
  {
    id: "Q405", source: 405, type: "single",
    domain: "tenant", topic: "Exchange Online and mail flow", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Defender portal" },
      { key: "B", text: "the SharePoint admin center" },
      { key: "C", text: "the Microsoft Purview portal" },
      { key: "D", text: "the Exchange admin center" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A mail-enabled contact (mail contact) is an Exchange recipient that represents a person outside the organization. It has an external email address, appears in the global address list and can be added to distribution groups, but it has no mailbox and can't sign in.",
        "Because it is a recipient object, it is managed where Exchange recipients are managed: in the **Exchange admin center** under Recipients > Contacts (Add a contact > Mail contact), or with `New-MailContact` in Exchange Online PowerShell."
      ],
      wrong: [
        ["A", "The Microsoft Defender portal manages threat protection, incidents and email security policies. It doesn't create recipients."],
        ["B", "The SharePoint admin center manages sites, sharing and storage. Address book objects aren't part of it."],
        ["C", "The Microsoft Purview portal hosts compliance features such as DLP, retention and eDiscovery. It doesn't manage Exchange recipients."]
      ],
      concept: "Mail contacts are Exchange recipients, created in the Exchange admin center or with Exchange Online PowerShell.",
      takeaway: "Create a mail contact: Exchange admin center > Recipients > Contacts, or `New-MailContact`.",
      refs: [
        ["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"],
        ["Microsoft Learn: Exchange admin center in Exchange Online", "https://learn.microsoft.com/exchange/exchange-admin-center"]
      ]
    }
  },
  {
    id: "Q406", source: 406, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains 1,000 Windows devices.",
      "You need to review the exposure score of the devices.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Intune admin center" },
      { key: "B", text: "the Microsoft Purview portal" },
      { key: "C", text: "the Microsoft Defender portal" },
      { key: "D", text: "the Microsoft 365 admin center" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The exposure score is a metric of Microsoft Defender Vulnerability Management, which is part of Defender for Endpoint Plan 2 in Microsoft 365 E5. It is calculated continuously from the vulnerabilities and misconfigurations found on the onboarded devices, the threats that target them and how likely the devices are to be breached, and it runs from 0 to 100, where lower is better.",
        "It is shown on the Defender Vulnerability Management dashboard in the **Microsoft Defender portal** (Endpoints > Vulnerability management > Dashboard), together with the exposure level of each device in the device inventory."
      ],
      wrong: [
        ["A", "The Intune admin center manages enrollment, compliance and configuration. It can use the Defender for Endpoint device risk level in a compliance policy, but the exposure score is reviewed in Defender Vulnerability Management."],
        ["B", "The Microsoft Purview portal covers data protection and compliance, not device vulnerabilities."],
        ["D", "The Microsoft 365 admin center manages users, licenses, billing and service health. It has no vulnerability metrics."]
      ],
      concept: "The exposure score measures the vulnerability of an organization's devices and is part of Defender Vulnerability Management in the Microsoft Defender portal.",
      takeaway: "Exposure score: Microsoft Defender portal > Vulnerability management dashboard.",
      refs: [
        ["Microsoft Learn: Exposure score in Defender Vulnerability Management", "https://learn.microsoft.com/defender-vulnerability-management/tvm-exposure-score"]
      ]
    }
  },
  {
    id: "Q407", source: 407, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have the Microsoft Defender XDR report schedules shown in the following exhibit.",
      { table: { head: ["Schedule start date", "Schedule name", "Report type", "Frequency"], rows: [
        ["Feb 8, 2025 1:00 AM", "Schedule1", "MailFlowStatus", "Monthly"],
        ["Feb 8, 2025 1:00 AM", "Schedule2", "Zap", "Monthly"]
      ] } },
      "You need to ensure that the report schedules generate reports as frequently as possible.",
      "To what should you set the Frequency setting for each schedule? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Schedule1:", options: ["Daily", "Weekly", "Monthly"] },
      { id: "f2", label: "Schedule2:", options: ["Daily", "Weekly", "Monthly"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "The exhibit is the **Manage schedules** page of the Email & collaboration reports in the Microsoft Defender portal (Reports > Email & collaboration > Manage schedules). A schedule is created with **Create schedule** on a report page, and each entry shows its start date, name, report type and frequency. Selecting an entry lets you change its settings, which are the same as in the creation wizard.",
        "The **Frequency** setting of a scheduled report offers three values: Weekly (the default), Daily and Monthly. Both schedules are currently Monthly, the least frequent value, so to generate reports as often as possible both Schedule1 and Schedule2 are set to **Daily**. Microsoft notes that a daily frequency results in no data being shown in the charts of the emailed report."
      ],
      wrong: [
        ["Weekly", "Weekly is the default frequency, but it generates a report once a week, less often than Daily."],
        ["Monthly", "Monthly is the current setting of both schedules and the least frequent value available."]
      ],
      concept: "Scheduled email and collaboration reports in the Defender portal can run Daily, Weekly or Monthly.",
      takeaway: "Most frequent report schedule in the Defender portal: Daily (Weekly is the default).",
      refs: [
        ["Microsoft Learn: View email security reports (Schedule recurring reports)", "https://learn.microsoft.com/defender-office-365/reports-email-security"]
      ]
    }
  },
  {
    id: "Q408", source: 408, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You create the users shown in the following table.",
      { table: { head: ["Name", "Email", "Assigned role"], rows: [
        ["Admin1", "Admin1@contoso.com", "Security Administrator"],
        ["Admin2", "Admin2@contoso.com", "Security Operator"],
        ["Admin3", "Admin3@contoso.com", "Security Reader"]
      ] } },
      "You plan to use Microsoft Entra ID Protection.",
      "Which users will be added automatically to the Users at risk detected alerts list?"
    ],
    options: [
      { key: "A", text: "Admin1 only" },
      { key: "B", text: "Admin2 only" },
      { key: "C", text: "Admin1 and Admin2 only" },
      { key: "D", text: "Admin1 and Admin3 only" },
      { key: "E", text: "Admin1, Admin2, and Admin3" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Microsoft Entra ID Protection sends two automatic emails: **Users at risk detected**, when a user reaches the configured risk level, and the weekly digest. By default, users who are actively assigned the **Global Administrator**, **Security Administrator** or **Security Reader** role are added automatically to the recipient list, provided they have an email or alternate email address. Users who are only eligible for these roles in PIM receive the email only while they are elevated, and roles assigned through groups aren't supported.",
        "In the table, Admin1 holds Security Administrator and Admin3 holds Security Reader, so both are added automatically. Admin2 holds Security Operator, which isn't one of the three roles; Admin2 could only receive the alert if added to the list by hand."
      ],
      wrong: [
        ["A", "Security Reader is also one of the default recipient roles, so Admin3 is added as well."],
        ["B", "Security Operator isn't among the roles that are added automatically, and Admin1 and Admin3 are."],
        ["C", "Admin2 (Security Operator) isn't added automatically, while Admin3 (Security Reader) is."],
        ["E", "Admin2 holds Security Operator, which isn't one of the default recipient roles."]
      ],
      concept: "ID Protection alert emails go by default to the active Global Administrators, Security Administrators and Security Readers.",
      takeaway: "Default recipients of Users at risk detected: Global Administrator, Security Administrator, Security Reader (active assignments only).",
      refs: [
        ["Microsoft Learn: Configure Microsoft Entra ID Protection notifications", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-notifications"]
      ]
    }
  },
  {
    id: "Q409", source: 409, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You plan to manage incidents in the tenant by using the Microsoft Defender XDR.",
      "Which Microsoft service source will appear on the Incidents page of the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Azure Information Protection" },
      { key: "B", text: "Azure Web Application Firewall" },
      { key: "C", text: "Microsoft Sentinel" },
      { key: "D", text: "Microsoft Defender for Cloud Apps" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The reference answer is C. The Incidents page (Incidents & alerts > Incidents) of the Microsoft Defender portal correlates alerts from different products into incidents, and its **Service/detection sources** filter lists the services that can feed it. Microsoft Sentinel is one of them: once a Sentinel workspace is onboarded to the Defender portal, the unified security operations platform, Sentinel's incidents and alerts appear in the same incident queue as those of the Defender services.",
        "The same filter also lists the Defender XDR services themselves (Defender for Endpoint, Office 365, Identity and Cloud Apps), Microsoft Entra ID Protection, Microsoft Data Loss Prevention, Microsoft Defender for Cloud and Microsoft Purview Insider Risk Management. The reference answer singles out Microsoft Sentinel as the source to recognize."
      ],
      wrong: [
        ["A", "Azure Information Protection, the former labeling client and service, isn't one of the service sources of the incident queue."],
        ["B", "Azure Web Application Firewall isn't a service source of the incident queue. Its logs reach the Defender portal only indirectly, for example through a Microsoft Sentinel data connector."],
        ["D", "Defender for Cloud Apps is also listed among the service sources, because its alerts are correlated into Defender XDR incidents. The reference answer is Microsoft Sentinel."]
      ],
      concept: "The Defender portal incident queue unifies alerts from the Defender XDR services, other Microsoft sources and, once onboarded, Microsoft Sentinel.",
      takeaway: "Microsoft Sentinel incidents show up in the Defender portal's Incidents page once the workspace is onboarded to the Defender portal.",
      refs: [
        ["Microsoft Learn: Prioritize incidents in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/incident-queue"],
        ["Microsoft Learn: Microsoft Sentinel in the Microsoft Defender portal", "https://learn.microsoft.com/azure/sentinel/microsoft-sentinel-defender-portal"]
      ]
    }
  },
  {
    id: "Q410", source: 410, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to view a list of known tools used by malicious actors.",
      "What should you use in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Intel explorer" },
      { key: "B", text: "Threat analytics" },
      { key: "C", text: "Intel profiles" },
      { key: "D", text: "Intel projects" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "**Threat analytics** is the in-product threat intelligence of the Defender portal: reports written by Microsoft security researchers, each matched against your own alerts, assets and exposure. Every report belongs to a category, such as Activity, Actor, Technique, Vulnerability, OSINT or **Tool**.",
        "A Tool report describes a specific custom or open-source tool that is often associated with a threat actor: its capabilities, what attackers use it for and how Microsoft detects it. Filtering the Threat analytics list on the Tool category therefore gives the list of known tools used by malicious actors."
      ],
      wrong: [
        ["A", "Intel explorer is the Defender Threat Intelligence page for searching indicators such as IP addresses and domains and for reading intelligence articles. It is a search starting point, not the list of tool reports."],
        ["C", "Intel profiles in Defender Threat Intelligence also hold curated profiles of threat actors, tools and vulnerabilities, so they cover similar ground. The reference answer is Threat analytics, where tool reports are one category of the Microsoft research reports."],
        ["D", "Intel projects are workspaces in which analysts collect indicators and artifacts for their own investigations."]
      ],
      concept: "Threat analytics reports are classified by category, and the Tool category covers tools associated with threat actors.",
      takeaway: "Known attacker tools in the Defender portal: Threat analytics, filtered on the Tool category.",
      refs: [
        ["Microsoft Learn: Threat analytics in Microsoft Defender", "https://learn.microsoft.com/defender-xdr/threat-analytics"],
        ["Microsoft Learn: Understand the analyst report section in threat analytics", "https://learn.microsoft.com/defender-xdr/threat-analytics-analyst-reports"]
      ]
    }
  },
  {
    id: "Q411", source: 411, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses a third-party multifactor authentication (MFA) product.",
      "While reviewing Microsoft Secure Score, you discover that there are no points listed for the Ensure multifactor authentication is enabled for all users recommendation.",
      "You need to ensure that you receive all the points for the recommendation. The solution must minimize administrative effort.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Deploy a Microsoft Defender for Identity sensor." },
      { key: "B", text: "Modify the recommendation tags." },
      { key: "C", text: "Modify the status of the recommendation." },
      { key: "D", text: "Configure a data connector." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Secure Score measures the MFA recommendation from Microsoft Entra data, so it can't see that a third-party product already enforces MFA, and the recommendation shows no points achieved.",
        "Each recommended action has a status that you can set in its flyout: To address, Planned, Risk accepted, **Resolved through third party** or **Resolved through alternate mitigation**. The last two tell Secure Score that another product or an internal tool covers the control, and you gain the points the action is worth. Setting the status to Resolved through third party is one change in the portal, which keeps the administrative effort minimal. (Risk accepted, by contrast, gives no points.)"
      ],
      wrong: [
        ["A", "A Defender for Identity sensor monitors on-premises domain controllers. Deploying one is extra work and has no effect on the MFA recommendation."],
        ["B", "Tags are your own labels for filtering recommendations. They don't change the score."],
        ["D", "A data connector doesn't give credit for this recommendation. The documented way to get the points when a third-party product covers the control is the status of the recommendation."]
      ],
      concept: "Secure Score awards the points of a recommendation that another product covers when its status is set to Resolved through third party or Resolved through alternate mitigation.",
      takeaway: "Control already handled by a third-party product: set the recommendation's status to Resolved through third party.",
      refs: [
        ["Microsoft Learn: Assess your security posture through Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score-improvement-actions"]
      ]
    }
  },
  {
    id: "Q412", source: 412, type: "multi",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You are evaluating Microsoft Defender for Cloud Apps.",
      "Which two types of policy rely on Conditional Access App Control? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "app discovery policy" },
      { key: "B", text: "OAuth app policy" },
      { key: "C", text: "access policy" },
      { key: "D", text: "file policy" },
      { key: "E", text: "session policy" },
      { key: "F", text: "activity policy" }
    ],
    answer: ["C", "E"],
    explanation: {
      correct: [
        "Conditional Access app control is the reverse proxy of Defender for Cloud Apps. A Microsoft Entra Conditional Access policy with the session control **Use Conditional Access App Control** routes users' sessions through it, so that Defender for Cloud Apps can act in real time while the user works.",
        "Two policy types are enforced through that proxy. An **access policy** (C) allows or blocks access to an app at sign-in based on the user, device, location or client app. A **session policy** (E) monitors and controls what happens inside the session, for example blocking downloads, protecting files on download or blocking uploads of sensitive content."
      ],
      wrong: [
        ["A", "App discovery policies work on Cloud Discovery data from traffic logs or Defender for Endpoint, not on proxied sessions."],
        ["B", "OAuth app policies evaluate the permissions and use of OAuth apps through the app connectors and Microsoft Entra, not through the proxy."],
        ["D", "File policies scan files at rest in connected apps through the API connectors."],
        ["F", "Activity policies watch activities reported by the API connectors of connected apps; they don't need the proxy."]
      ],
      concept: "Access and session policies of Defender for Cloud Apps are enforced in real time by Conditional Access app control, while discovery, OAuth, file and activity policies use logs and API connectors.",
      takeaway: "Real-time control in Defender for Cloud Apps (access and session policies) needs Conditional Access app control.",
      refs: [
        ["Microsoft Learn: Overview of Conditional Access app control", "https://learn.microsoft.com/defender-cloud-apps/proxy-intro-aad"],
        ["Microsoft Learn: Create Microsoft Defender for Cloud Apps session policies", "https://learn.microsoft.com/defender-cloud-apps/session-policy-aad"],
        ["Microsoft Learn: Create Microsoft Defender for Cloud Apps access policies", "https://learn.microsoft.com/defender-cloud-apps/access-policy-aad"]
      ]
    }
  },
  {
    id: "Q413", source: 413, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["Admin1", "Global Administrator"],
        ["Admin2", "Exchange Administrator"],
        ["Admin3", "SharePoint Administrator"],
        ["Admin4", "Compliance Administrator"]
      ] } },
      "You plan to use Microsoft 365 Backup.",
      "Which users can enable Microsoft 365 Backup?"
    ],
    options: [
      { key: "A", text: "Admin1 only" },
      { key: "B", text: "Admin3 only" },
      { key: "C", text: "Admin1 and Admin3 only" },
      { key: "D", text: "Admin1, Admin2 and Admin3 only" },
      { key: "E", text: "Admin1, Admin2, Admin3, and Admin4" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Microsoft 365 Backup is a pay-as-you-go service. Enabling it means linking an Azure subscription for billing in the Microsoft 365 admin center and then creating backup policies. Microsoft documents that you must be a **SharePoint Administrator** or **Global Administrator** to access the Microsoft 365 admin center and set up Microsoft 365 Backup.",
        "Admin1 (Global Administrator) and Admin3 (SharePoint Administrator) can therefore enable it. After setup, management is split by workload: Global Administrators and the dedicated Microsoft 365 Backup Administrator role manage all three workloads, SharePoint Administrators manage SharePoint and OneDrive, and Exchange Administrators manage Exchange."
      ],
      wrong: [
        ["A", "SharePoint Administrator can also set up Microsoft 365 Backup, so Admin3 is left out wrongly."],
        ["B", "Global Administrator can set up Microsoft 365 Backup too, so Admin1 is left out wrongly."],
        ["D", "An Exchange Administrator can manage Exchange backup policies once the service exists, but isn't one of the roles that can set it up."],
        ["E", "Compliance Administrator has no rights in Microsoft 365 Backup, and Exchange Administrator can't set it up."]
      ],
      concept: "Setting up Microsoft 365 Backup requires the Global Administrator or SharePoint Administrator role.",
      takeaway: "Enable Microsoft 365 Backup: Global Administrator or SharePoint Administrator.",
      refs: [
        ["Microsoft Learn: Set up Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-setup"]
      ]
    }
  },
  {
    id: "Q414", source: 414, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses the following services:",
      { list: ["Microsoft Entra", "Exchange Online", "Microsoft Teams", "SharePoint Online."] },
      "You are planning a backup solution that will use Microsoft 365 Backup.",
      "You need to recommend which Microsoft 365 services can be backed up and the longest retention period available.",
      "What should you recommend? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Services:", options: ["Exchange Online only", "SharePoint Online only", "Exchange Online and SharePoint Online only", "Microsoft Entra, Exchange Online, and SharePoint Online only", "Exchange Online, SharePoint Online, and Teams only", "Microsoft Entra, Exchange Online, SharePoint Online, and Teams"] },
      { id: "f2", label: "Retention period:", options: ["6 months", "1 year", "5 years", "10 years"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "Microsoft 365 Backup protects three workloads: SharePoint sites, OneDrive accounts and Exchange mailboxes, each with its own backup policies. Of the services listed, that leaves **Exchange Online and SharePoint Online**. Microsoft 365 Backup has no policy type for Microsoft Teams or Microsoft Entra; files shared in Teams channels are stored in SharePoint sites and are protected as those sites.",
        "Microsoft 365 Backup kept restore points for one year when it was introduced. Today the recovery window of a backup policy can be 3 months, 6 months, 1 year or 2 years, with 1 year as the default. Of the values offered here, **1 year** is the longest one the service supports; 5 and 10 years are not available."
      ],
      wrong: [
        ["Exchange Online only / SharePoint Online only", "Both Exchange Online and SharePoint Online are supported workloads, so neither one alone is complete."],
        ["Options that include Microsoft Entra", "Microsoft Entra directory objects aren't a workload of Microsoft 365 Backup."],
        ["Options that include Teams", "Microsoft 365 Backup has no Teams workload; Teams files are covered only as SharePoint sites."],
        ["5 years / 10 years", "A Microsoft 365 Backup policy offers no recovery window of several years."]
      ],
      concept: "Microsoft 365 Backup covers SharePoint, OneDrive and Exchange Online, with a recovery window of 1 year by default.",
      takeaway: "Microsoft 365 Backup: SharePoint, OneDrive, Exchange. No Teams or Entra workload. Retention 1 year by default.",
      refs: [
        ["Microsoft Learn: Overview of Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-overview"],
        ["Microsoft Learn: Create, view, and edit backup policies in Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"]
      ]
    }
  },
  {
    id: "Q415", source: 415, type: "dropdown",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to use Microsoft Defender XDR to identify the following:",
      { list: ["Information-about known malicious organizations.", "Weekly open-source intelligence (OSINT) highlights."] },
      "Which two settings should you use in the Microsoft Defender portal? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "First setting (the one higher in the navigation pane)", options: ["Home", "Incidents & alerts", "Hunting", "Advanced hunting", "Custom detection rules", "Actions & submissions", "Action center", "Submissions", "Threat intelligence", "Threat analytics", "Intel profiles", "Intel explorer", "Intel projects", "Learning hub", "Trials", "Partner catalog"] },
      { id: "f2", label: "Second setting (the one lower in the navigation pane)", options: ["Home", "Incidents & alerts", "Hunting", "Advanced hunting", "Custom detection rules", "Actions & submissions", "Action center", "Submissions", "Threat intelligence", "Threat analytics", "Intel profiles", "Intel explorer", "Intel projects", "Learning hub", "Trials", "Partner catalog"] }
    ],
    answer: { f1: 8, f2: 9 },
    explanation: {
      correct: [
        "The reference answer marks **Threat intelligence** and **Threat analytics**. Threat intelligence is the section of the Defender portal navigation that groups Microsoft's threat intelligence pages: Threat analytics and the Defender Threat Intelligence pages Intel profiles, Intel explorer and Intel projects.",
        "Threat analytics, inside that section, covers both requirements. Its reports are classified by category: an **Actor** report profiles a specific Microsoft-tracked threat actor, with its motivations, targets, tools and techniques, which is information about known malicious groups, and the **OSINT** category surfaces curated open-source intelligence articles from external sources alongside Microsoft's own research."
      ],
      wrong: [
        ["Intel profiles", "Intel profiles in Defender Threat Intelligence also hold curated profiles of threat actors, tools and vulnerabilities, so they describe known malicious groups too. The reference answer uses Threat analytics, whose Actor and OSINT categories cover both requirements."],
        ["Intel explorer / Intel projects", "Intel explorer is the Defender Threat Intelligence page for searching indicators and reading intelligence articles, and Intel projects are workspaces where analysts collect artifacts for their own investigations. Neither is part of the marked answer."],
        ["Advanced hunting / Custom detection rules", "These query and alert on your own tenant's data; they don't provide intelligence about outside threat actors."],
        ["Action center / Submissions", "These handle remediation actions and items submitted to Microsoft for analysis."]
      ],
      concept: "Threat analytics, under Threat intelligence in the Defender portal, publishes research reports by category, including threat actor profiles and OSINT articles.",
      takeaway: "Threat actors and OSINT articles in the Defender portal: Threat intelligence > Threat analytics (Actor and OSINT categories).",
      refs: [
        ["Microsoft Learn: Threat analytics in Microsoft Defender", "https://learn.microsoft.com/defender-xdr/threat-analytics"],
        ["Microsoft Learn: Understand the analyst report section in threat analytics", "https://learn.microsoft.com/defender-xdr/threat-analytics-analyst-reports"]
      ]
    }
  },
  {
    id: "Q416", source: 416, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Advanced",
    stem: [
      "Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the users shown in the following table.",
      { table: { head: ["Name", "In organizational unit (OU)"], rows: [
        ["User1", "OU1"],
        ["User2", "OU1"]
      ] } },
      "You have a Microsoft Entra tenant that syncs with contoso.com by using Microsoft Entra Connect Sync. Microsoft Entra Connect Sync is configured as shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q416-domain-ou-filtering.png", alt: "Microsoft Entra Connect Sync wizard, Domain and OU filtering page. Directory: contoso.com. The option Sync selected domains and OUs is selected. Under contoso.com only OU1 and Users are checked; Builtin, Computers, Domain Controllers, ForeignSecurityPrincipals, Infrastructure, LostAndFound, Managed Service Accounts, OU2, Program Data and System are not checked." },
      "The Microsoft Entra tenant contains a cloud-only group named Group1 as shown in the following table.",
      { table: { head: ["Members", "On-premises sync"], rows: [
        ["User1", "Enabled"],
        ["User2", "Disabled"]
      ] } },
      "You perform the following tasks at 10 AM:",
      { list: [
        "In contoso.com, you move User1 to OU2.",
        "In the Microsoft Entra tenant, you delete User2.",
        "In contoso.com, you create a computer account named Comp1 in OU1 and update the description of Comp1."
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "By 11 AM, User1 has become a member of Group1." },
      { text: "At 11 AM, User2 is removed from contoso.com." },
      { text: "At 11 AM, the `Description` property of Comp1 syncs to the Microsoft Entra tenant." }
    ],
    answer: [false, true, false],
    explanation: {
      correct: [
        "Statement 1 (No): Entra Connect Sync is filtered to the OU1 and Users OUs. User1 is a synchronized user (On-premises sync Enabled) and is already a member of the cloud group Group1. Moving it to OU2, which isn't selected, takes it out of the sync scope, and the next sync cycle (every 30 minutes by default) deletes the synchronized object in Microsoft Entra ID, which also removes it from Group1. User1 hasn't become a member by 11 AM.",
        "Statement 3 (No): Entra Connect synchronizes computer objects only for Microsoft Entra hybrid join, and only computers whose userCertificate attribute has a value, which Windows 10 or later devices configured for hybrid join write themselves. A computer account that was just created in OU1 has no such value, so Comp1 isn't synchronized at all, and neither is its description.",
        "Statement 2: the reference answer is Yes. User2 in the tenant is a cloud-only account (On-premises sync Disabled), and the deletion was made in Microsoft Entra ID. Entra Connect Sync synchronizes users from AD DS to Microsoft Entra ID and doesn't write a cloud user deletion back to AD DS, so the on-premises account User2 in OU1 is not deleted by that action."
      ],
      wrong: [
        ["Statement 1 — Yes", "User1 was already a member before 10 AM. Moving it out of the synchronized OUs leads to its deletion in Microsoft Entra ID at the next sync cycle, which removes it from Group1 rather than adding it."],
        ["Statement 2 — No", "Entra Connect Sync doesn't write user deletions from Microsoft Entra ID back to AD DS, which is what this choice reflects. The reference answer is Yes."],
        ["Statement 3 — Yes", "A new computer account has no userCertificate value, so Entra Connect doesn't synchronize it, and its Description never reaches the tenant."]
      ],
      concept: "Entra Connect Sync filters by OU, deletes in Microsoft Entra ID the objects that leave the scope, synchronizes users one way from AD DS, and syncs computers only when they carry a userCertificate.",
      takeaway: "Moving a user out of a synced OU deletes its cloud object at the next cycle (30 minutes by default); deleting a cloud user doesn't touch AD DS.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Microsoft Entra Connect Sync: Scheduler", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-feature-scheduler"],
        ["Microsoft Learn: Configure Microsoft Entra hybrid join", "https://learn.microsoft.com/entra/identity/devices/how-to-hybrid-join"]
      ]
    }
  }
);
