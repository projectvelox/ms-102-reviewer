/* MS-102 question bank, part 5: questions 65 to 80 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q065", source: 65, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains the domains shown in the following exhibit.",
      { image: "q065-domains.png", alt: "Microsoft 365 admin center, Domains page with the commands Add domain, Buy domain and Refresh. Four domains are listed by domain name, with their status: Sub1.contoso221018.onmicrosoft.com (D... (the rest of the name is cut off), Possible service issues, with a warning icon; contoso.com, Incomplete setup; contoso221018.onmicrosoft.com, Healthy; Sub2.contoso221018.onmicrosoft.com, Incomplete setup." },
      "Which domain name suffixes can you use when you create users?"
    ],
    options: [
      { key: "A", text: "only Sub1.contoso221018.onmicrosoft.com" },
      { key: "B", text: "only contoso221018.onmicrosoft.com and Sub2.contoso221018.onmicrosoft.com" },
      { key: "C", text: "only contoso221018.onmicrosoft.com, Sub.contoso221018.onmicrosoft.com, and Sub2.contoso221018.onmicrosoft.com" },
      { key: "D", text: "all the domains in the subscription" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "A user name can only take the suffix of a domain that the tenant has verified. The initial domain, contoso221018.onmicrosoft.com, is created and verified with the tenant. Sub1 and Sub2 are subdomains of that domain, and a subdomain of a domain that is already verified is verified automatically by Microsoft Entra ID (formerly Azure AD), without a verification record of its own. All three onmicrosoft.com names can therefore be used as suffixes; option C lists Sub1 as `Sub.contoso221018.onmicrosoft.com`.",
        "The statuses of the subdomains do not change that. **Possible service issues** means that DNS records needed by services such as Exchange Online are missing or wrong, and **Incomplete setup** on Sub2 can only mean the remaining setup steps, because the subdomain needed no ownership check. contoso.com is different: it is a separate root domain, so nothing in the tenant vouches for it, and its **Incomplete setup** status shows that the setup, which begins with proving ownership, usually through a TXT record, was not finished. An unverified domain is not offered as a suffix when you create users."
      ],
      wrong: [
        ["A", "Sub1 appears to be the default domain (the cut-off (D... after its name), but the default domain is only the suffix proposed first. The other verified domains can be chosen as well."],
        ["B", "This leaves out Sub1. Possible service issues concerns the DNS records for services, not the verification of the domain."],
        ["D", "contoso.com has not completed setup and is not verified, so it cannot be used for user names yet."]
      ],
      concept: "Only verified domains can be used as UPN suffixes; the initial onmicrosoft.com domain is always verified, and subdomains of a verified domain inherit the verification.",
      takeaway: "Can a domain be used for users? Ask whether it is verified, not whether its service DNS records are complete.",
      logic: "Remove D first because contoso.com is a root domain that has not finished setup. Of the rest, only C keeps every onmicrosoft.com name.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Manage custom domain names in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/users/domains-manage"]
      ]
    }
  },
  {
    id: "Q066", source: 66, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You plan to implement Microsoft Purview Privileged Access Management.",
      "Which Microsoft Office 365 workloads support privileged access?"
    ],
    options: [
      { key: "A", text: "Microsoft Exchange Online only" },
      { key: "B", text: "Microsoft Teams only" },
      { key: "C", text: "Microsoft Exchange Online and SharePoint Online only" },
      { key: "D", text: "Microsoft Teams and SharePoint Online only" },
      { key: "E", text: "Microsoft Teams, Exchange Online, and SharePoint Online" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Privileged access management in Microsoft Purview gives just-in-time, approval-based access to individual privileged tasks: an administrator requests to run a specific task, an approver group approves it, and the access is granted for a limited time only. The policies that define which tasks need approval are written for Exchange Online management tasks, and Exchange Online is the workload that privileged access management supports.",
        "Teams and SharePoint Online administration is not covered by privileged access policies. For those, privileged roles are protected with Microsoft Entra Privileged Identity Management instead, which works at the level of the whole role rather than a single task."
      ],
      wrong: [
        ["B", "Teams tasks cannot be put under a privileged access policy."],
        ["C", "SharePoint Online is not a supported workload; only Exchange Online is."],
        ["D", "Neither Teams nor SharePoint Online is supported."],
        ["E", "Only Exchange Online is supported, so a list of three workloads is too broad."]
      ],
      concept: "Purview privileged access management applies zero standing access to individual Exchange Online admin tasks through request and approval.",
      takeaway: "Privileged access management (task level) = Exchange Online. PIM (role level) = Entra roles.",
      refs: [["Microsoft Learn: Learn about privileged access management", "https://learn.microsoft.com/purview/privileged-access-management"]]
    }
  },
  {
    id: "Q067", source: 67, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Global Administrator"],
        ["User2", "Service Support Administrator"],
        ["User3", "Cloud Application Administrator"],
        ["User4", "None"]
      ] } },
      "You plan to provide User4 with early access to Microsoft 365 feature and service updates.",
      "You need to identify which Microsoft 365 setting must be configured, and which user can modify the setting. The solution must use the principle of least privilege.",
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Microsoft 365 setting:", options: ["Office installation options", "Privileged access", "Release preferences"] },
      { id: "f2", label: "User:", options: ["User1 only", "User2 only", "User3 only", "User1 and User2 only", "User1 and User3 only"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "Early access to new Microsoft 365 features is controlled by **Release preferences** in the Microsoft 365 admin center (Settings > Org settings > Organization profile). Besides Standard release for everyone, you can choose Targeted release for everyone or Targeted release for selected users. The last option lets you add User4 alone, so that User4 receives feature and service updates before the rest of the organization.",
        "Changing the release preference is an organization-wide setting, and Microsoft documents it as a task for a Global Administrator. Of the four users only User1 holds that role. Service Support Administrator (User2) manages support requests and reads service health, and Cloud Application Administrator (User3) manages enterprise applications and app registrations; neither can change organization settings."
      ],
      wrong: [
        ["Office installation options", "This setting controls which Microsoft 365 Apps users can install and the update channel of the installed apps. It does not enroll a user in Targeted release."],
        ["Privileged access", "This is the approval policy for privileged Exchange Online tasks. It has nothing to do with feature updates."],
        ["User2 only or User1 and User2 only", "Service Support Administrator is a support role. It manages support requests and reads service health, but it cannot change the release preference."],
        ["User3 only or User1 and User3 only", "Cloud Application Administrator manages applications in Microsoft Entra ID, not Microsoft 365 organization settings."]
      ],
      concept: "Targeted release, set in Release preferences, gives the whole organization or selected users new features before Standard release.",
      takeaway: "Early access to Microsoft 365 updates for one user: Release preferences, Targeted release for selected users, set by a Global Administrator.",
      refs: [["Microsoft Learn: Set up the Standard or Targeted release options", "https://learn.microsoft.com/microsoft-365/admin/manage/release-options-in-office-365"]]
    }
  },
  {
    id: "Q068", source: 68, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You are planning a threat management solution for your organization.",
      "You need to minimize the likelihood that users will be affected by the following threats:",
      { list: [
        "Opening files in Microsoft SharePoint that contain malicious content",
        "Impersonation and spoofing attacks in email messages"
      ] },
      "Which policies should you create in Microsoft 365 Defender? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Opening files in SharePoint that contain malicious content:", options: ["Anti-spam", "Anti-Phishing", "Safe Attachments", "Safe Links"] },
      { id: "f2", label: "Impersonation and spoofing attacks in email messages:", options: ["Anti-spam", "Anti-Phishing", "Safe Attachments", "Safe Links"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "**Safe Attachments** is the Defender for Office 365 feature that detonates files in a sandbox to find malicious content. Its protection for SharePoint, OneDrive and Microsoft Teams, which is switched on in the global settings of Safe Attachments, scans files in those services and blocks a file that is found to be malicious, so users cannot open, copy or share it.",
        "**Anti-phishing** policies hold both protections against forged senders: spoof intelligence, which detects messages whose sender address is forged, and, in Defender for Office 365, impersonation protection for users and domains that look like trusted senders, together with mailbox intelligence."
      ],
      wrong: [
        ["Anti-spam", "Anti-spam policies filter spam, bulk mail and high-confidence phishing verdicts in email. They neither scan files in SharePoint nor configure impersonation protection."],
        ["Safe Links", "Safe Links rewrites and checks URLs when a user clicks them. It does not scan the content of files stored in SharePoint, and it does not detect a spoofed or impersonated sender."],
        ["Safe Attachments for email impersonation", "Safe Attachments examines attachments, not the identity of the sender."]
      ],
      concept: "Each Defender for Office 365 policy type covers one kind of threat: files (Safe Attachments), URLs (Safe Links), forged or lookalike senders (anti-phishing) and unwanted mail (anti-spam).",
      takeaway: "Malicious files in SharePoint, OneDrive or Teams: Safe Attachments. Impersonation and spoofing: anti-phishing.",
      refs: [
        ["Microsoft Learn: Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-about"],
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"]
      ]
    }
  },
  {
    id: "Q069", source: 69, type: "dropdown",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You have the alerts shown in the following exhibit.",
      { image: "q069-view-alerts.png", alt: "View alerts page (Home > Alerts > View alerts) with Export and Filter buttons, listing two alerts. Alert1: severity Medium, status Active, no tags, category Threat management, activity count 2, last occurrence 3 minutes ago. Alert5: severity High, status Resolved, no tags, category Permissions, activity count 1, last occurrence 8 minutes ago." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "For Alert1, you can change Status to [answer choice].", options: ["Investigating only", "Investigating or Resolved only", "Investigating or Dismissed only", "Investigating, Resolved, or Dismissed"] },
      { id: "f2", label: "For Alert5, you can [answer choice].", options: ["not change Status", "change Status to Dismissed only", "change Status to Dismissed or Active only", "change Status to Dismissed or Investigating only", "change Status to Dismissed, Investigating, or Active"] }
    ],
    answer: { f1: 3, f2: 4 },
    explanation: {
      correct: [
        "The alerts on this page are raised by alert policies. Each alert has a status that the person handling it sets in the details pane of the alert: **Active**, **Investigating**, **Resolved** or **Dismissed**. The status is a triage marker and not a one-way workflow, so any status can be changed to any of the other three.",
        "Alert1 is Active, so you can set it to Investigating, Resolved or Dismissed. Alert5 is Resolved, and resolving an alert does not lock it: you can reopen it as Active, move it to Investigating, or set it to Dismissed."
      ],
      wrong: [
        ["Investigating only, or a choice of two for Alert1", "An Active alert can move to any other status, including straight to Resolved or Dismissed without an Investigating step."],
        ["not change Status", "A Resolved alert can still be reopened or reclassified."],
        ["Dismissed only, or a choice of two for Alert5", "No status is excluded. Active and Investigating are both available for a resolved alert."]
      ],
      concept: "Alerts from alert policies have four statuses, Active, Investigating, Resolved and Dismissed, which the analyst can change freely.",
      takeaway: "Alert status is a label you set by hand; from any status you can choose any of the other three.",
      refs: [["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"]]
    }
  },
  {
    id: "Q070", source: 70, type: "multi",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E3 subscription that uses Microsoft Defender for Endpoint Plan 1.",
      "Which two Defender for Endpoint features are available to the subscription? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "advanced hunting" },
      { key: "B", text: "security reports" },
      { key: "C", text: "digital certificate assessment" },
      { key: "D", text: "device discovery" },
      { key: "E", text: "attack surface reduction (ASR)" }
    ],
    answer: ["B", "E"],
    explanation: {
      correct: [
        "Defender for Endpoint Plan 1, which comes with Microsoft 365 E3, is the prevention-focused plan. It includes next-generation protection (Microsoft Defender Antivirus), **attack surface reduction** (ASR rules, controlled folder access, network protection, web protection, device control and application control), manual response actions, and centralized management and **reporting** in the Microsoft Defender portal.",
        "Detection, investigation and the vulnerability features come with Plan 2, which is part of Microsoft 365 E5: endpoint detection and response, automated investigation, advanced hunting, threat analytics, device discovery and Defender Vulnerability Management."
      ],
      wrong: [
        ["A", "Advanced hunting queries the raw EDR data that is collected only with Plan 2."],
        ["C", "Digital certificate assessment is a capability of Microsoft Defender Vulnerability Management, which is not part of Plan 1."],
        ["D", "Device discovery, which finds unmanaged devices on the network, is part of the Plan 2 feature set."]
      ],
      concept: "Defender for Endpoint Plan 1 covers prevention, ASR, manual response, management and reports; Plan 2 adds EDR, automated investigation, hunting, discovery and vulnerability management.",
      takeaway: "E3 = Plan 1: protect and report. E5 = Plan 2: also detect, investigate and hunt.",
      refs: [["Microsoft Learn: Overview of Microsoft Defender for Endpoint Plan 1", "https://learn.microsoft.com/defender-endpoint/defender-endpoint-plan-1"]]
    }
  },
  {
    id: "Q071", source: 71, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You are reviewing alerts in the Microsoft 365 Defender portal.",
      "How long are the alerts retained in the portal?"
    ],
    options: [
      { key: "A", text: "30 days" },
      { key: "B", text: "60 days" },
      { key: "C", text: "3 months" },
      { key: "D", text: "6 months" },
      { key: "E", text: "12 months" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Data in the Microsoft 365 Defender portal (now the Microsoft Defender portal), including alerts and incidents, is retained for 180 days, which is 6 months. During that time it stays visible across the portal, for example in the alert and incident queues and on device pages.",
        "The shorter figure that is often confused with it applies to advanced hunting: the raw event tables can be queried for the last 30 days."
      ],
      wrong: [
        ["A", "30 days is the period of data that advanced hunting queries can reach, not the retention of alerts in the portal."],
        ["B", "60 days is not a retention period of the portal."],
        ["C", "Three months is shorter than the 180 days for which the data is kept."],
        ["E", "The data is not kept for a year; it is deleted after 180 days."]
      ],
      concept: "The Defender portal keeps alerts, incidents and related data for 180 days, while advanced hunting reaches 30 days of raw events.",
      takeaway: "Alerts and incidents: 180 days. Advanced hunting: 30 days.",
      refs: [["Microsoft Learn: Microsoft Defender for Endpoint data storage and privacy", "https://learn.microsoft.com/defender-endpoint/data-storage-privacy"]]
    }
  },
  {
    id: "Q072", source: 72, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "From the Microsoft 365 Defender portal, you plan to export a detailed report of compromised users.",
      "What is the longest time range that can be included in the report?"
    ],
    options: [
      { key: "A", text: "1 day" },
      { key: "B", text: "7 days" },
      { key: "C", text: "30 days" },
      { key: "D", text: "90 days" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The **Compromised users** report is one of the email and collaboration reports of the Defender portal. It shows user accounts that were marked as Suspicious or Restricted, typically because they sent unusual amounts of outbound mail. You can look at the report over a longer period, and you can export it either as a summary or as detailed, item-level data.",
        "The reference answer is A (1 day). Viewing the report allows longer periods; the reference holds that the detailed, item-level export is limited to a single day at a time."
      ],
      wrong: [
        ["B", "Seven days is longer than the range the reference allows for a detailed export."],
        ["C", "Thirty days of data can be viewed in the report, but per the reference the detailed export is limited to one day."],
        ["D", "Ninety days is the range of history the report can show, not the range of a detailed export."]
      ],
      concept: "Email security reports can be viewed over a longer period, but the detailed, item-level export covers a much shorter range.",
      takeaway: "Detailed export of the Compromised users report: one day at a time.",
      refs: [["Microsoft Learn: View email security reports in the Microsoft Defender portal", "https://learn.microsoft.com/defender-office-365/reports-email-security"]]
    }
  },
  {
    id: "Q073", source: 73, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You deploy the anti-phishing policy shown in the following exhibit.",
      { image: "q073-anti-phishing-policy.png", alt: "Anti-phishing policy settings under Phishing threshold and protections: Phishing threshold, 1 - Standard; User impersonation protection, On for 0 user(s); Domain impersonation protection, Off for owned domains, and Off - 0 domain(s) specified; Trusted impersonated senders and domains, Off; Mailbox intelligence, On; Mailbox intelligence for impersonations, Off (Mailbox intelligence must be turned on to access this); Spoof intelligence, Off. An Edit protection settings link follows." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To ensure that malicious email impersonating the CEO of a partner company is blocked, you must modify the [answer choice] setting.", options: ["Add trusted senders and domains", "Enable domains to protect", "Enable users to protect", "Phishing email threshold"] },
      { id: "f2", label: "To minimize disrupting users that frequently exchange legitimate email with the CEO of a partner company, you must configure the [answer choice] setting.", options: ["Add trusted senders and domains", "Enable intelligence for impersonation protection", "Enable spoof intelligence"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "User impersonation protection is on, but for 0 users: no one is protected yet. **Enable users to protect** is where you list the people whose name and address attackers are likely to imitate, and the list may contain external senders such as the CEO of a partner company. Once the CEO is added, messages from lookalike senders that pretend to be the CEO are detected as user impersonation and handled with the action of the policy, for example quarantine.",
        "**Add trusted senders and domains** defines the exceptions to impersonation protection. Messages from the senders and domains in that list are never classified as impersonation by the policy. Adding the CEO's real address keeps legitimate mail from the CEO from being flagged, which avoids disrupting the users who correspond with the CEO regularly."
      ],
      wrong: [
        ["Add trusted senders and domains (first statement)", "This list exempts senders from impersonation detection. It cannot make the policy block anything."],
        ["Enable domains to protect", "Domain impersonation protection catches lookalike domains of whole domains. Impersonation of one named person, the CEO, is user impersonation protection."],
        ["Phishing email threshold", "The threshold sets how aggressively machine learning verdicts are applied to all mail. It does not tell the policy which person is being impersonated."],
        ["Enable intelligence for impersonation protection", "This lets the policy act on impersonation that mailbox intelligence detects. It adds detections; it does not exempt a known, legitimate sender."],
        ["Enable spoof intelligence", "Spoof intelligence handles forged sender domains, not impersonation, and turning it on adds filtering rather than reducing disruption."]
      ],
      concept: "Anti-phishing impersonation protection uses a list of protected users and domains to detect lookalikes, and a trusted senders and domains list for exceptions.",
      takeaway: "Protect a person from impersonation: Enable users to protect. Stop false positives for a known sender: Add trusted senders and domains.",
      refs: [
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"],
        ["Microsoft Learn: Configure anti-phishing policies in Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-mdo-configure"]
      ]
    }
  },
  {
    id: "Q074", source: 74, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You use Microsoft Defender for Endpoint.",
      "You have the Microsoft Defender for Endpoint device groups shown in the following table.",
      { table: { head: ["Name", "Rank", "Members"], rows: [
        ["Group1", "1", "Operating system in Windows 10"],
        ["Group2", "2", "Name ends with London"],
        ["Group3", "3", "Operating system in Windows Server 2016"],
        ["Ungrouped devices (default)", "Last", "Not applicable"]
      ] } },
      "You plan to onboard computers to Microsoft Defender for Endpoint as shown in the following table.",
      { table: { head: ["Name", "Operating system"], rows: [
        ["Computer1-London", "Windows 10"],
        ["Server1-London", "Windows Server 2016"]
      ] } },
      "To which device group will each computer be added? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Computer1-London:", options: ["Group1", "Group2", "Group3", "Ungrouped devices"] },
      { id: "f2", label: "Server1-London:", options: ["Group1", "Group2", "Group3", "Ungrouped devices"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "A device in Defender for Endpoint belongs to exactly one device group. The groups are evaluated in order of rank, and a device that matches the rules of several groups is added only to the highest-ranked one. Ungrouped devices (default) collects the devices that match no group.",
        "Computer1-London runs Windows 10, so it matches Group1 at rank 1. Its name also ends with London, but Group1 ranks higher, so it goes to **Group1**. Server1-London runs Windows Server 2016 and fails Group1. Its name ends with London, so it matches Group2 at rank 2, and that is where it lands: **Group2**. It also matches Group3, but Group3 is never reached because Group2 ranks higher."
      ],
      wrong: [
        ["Group2 for Computer1-London", "Computer1-London matches Group2, but it already matched Group1, which has a higher rank."],
        ["Group3 for Server1-London", "Server1-London matches Group3 by its operating system, but the name rule of Group2 matches first."],
        ["Ungrouped devices", "Only devices that match none of the groups end up there. Both computers match at least one group."]
      ],
      concept: "Device group membership is decided by rank: a device joins the highest-ranked group whose rules it matches, and only that group.",
      takeaway: "Walk the device groups from rank 1 down and stop at the first match.",
      logic: "For each computer, check Group1, then Group2, then Group3; the first group whose rule fits is the answer.",
      refs: [["Microsoft Learn: Create and manage device groups", "https://learn.microsoft.com/defender-endpoint/machine-groups"]]
    }
  },
  {
    id: "Q075", source: 75, type: "dragdrop",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.",
      "You need to configure policies to meet the following requirements:",
      { list: [
        "Customize the common attachments filter.",
        "Enable impersonation protection for sender domains."
      ] },
      "Which type of policy should you configure for each requirement? To answer, drag the appropriate policy types to the correct requirements. Each policy type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Policy Types",
    sources: ["Anti-malware", "Anti-phishing", "Anti-spam", "Safe Attachments"],
    targets: [
      { id: "t1", label: "Customize the common attachments filter:" },
      { id: "t2", label: "Enable impersonation protection for sender domains:" }
    ],
    answer: { t1: 0, t2: 1 },
    explanation: {
      correct: [
        "The **common attachments filter** is a setting of anti-malware policies. When it is on, attachments of the listed file types, such as executables and scripts, are treated as malware regardless of their content, and you can customize the list of file types in the anti-malware policy.",
        "**Impersonation protection** for users and for sender domains is configured in anti-phishing policies of Defender for Office 365, together with mailbox intelligence and the trusted senders and domains that are exempted from it."
      ],
      wrong: [
        ["Safe Attachments", "Safe Attachments detonates attachments in a sandbox to find unknown malware. The file-type filter is in the anti-malware policy."],
        ["Anti-spam", "Anti-spam policies classify spam, bulk mail and phishing verdicts and choose what happens to them. They contain neither the attachments filter nor impersonation settings."],
        ["Anti-malware for impersonation", "Anti-malware policies inspect attachments for malware. Sender impersonation is handled by anti-phishing."]
      ],
      concept: "Anti-malware policies hold the common attachments filter; anti-phishing policies hold spoof and impersonation protection.",
      takeaway: "Block file types: anti-malware. Lookalike users or domains: anti-phishing.",
      refs: [
        ["Microsoft Learn: Configure anti-malware policies in EOP", "https://learn.microsoft.com/defender-office-365/anti-malware-policies-configure"],
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"]
      ]
    }
  },
  {
    id: "Q076", source: 76, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have an Azure AD tenant and a Microsoft 365 E5 subscription. The tenant contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Security Administrator"],
        ["User2", "Security Operator"],
        ["User3", "Security Reader"],
        ["User4", "Compliance Administrator"]
      ] } },
      "You plan to implement Microsoft Defender for Endpoint.",
      "You verify that role-based access control (RBAC) is turned on in Microsoft Defender for Endpoint.",
      "You need to identify which user can view security incidents from the Microsoft 365 Defender portal.",
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
        "Before RBAC is turned on, Defender for Endpoint grants access from Azure AD (now Microsoft Entra ID) roles: Global Administrators and Security Administrators get full access, and Security Readers get read-only access. Once RBAC is turned on, access comes from Defender for Endpoint roles assigned to Azure AD groups.",
        "Users with the Global Administrator or Security Administrator role keep their access, because they are automatically given the built-in Defender for Endpoint administrator role with full permissions, and they are the ones who create and assign the new roles. Users who had access through other roles, such as Security Reader, lose access until they are assigned a Defender for Endpoint role. With no such roles assigned yet, only User1 can view the incidents."
      ],
      wrong: [
        ["B", "Security Operator is not one of the two roles that keep full access automatically. Under Defender for Endpoint RBAC, User2 needs a Defender for Endpoint role assignment before seeing the data."],
        ["C", "Microsoft documents that turning on RBAC makes users with read-only permissions, such as Security Reader, lose access until they are assigned to a role."],
        ["D", "Compliance Administrator is a compliance role and gives no access to Defender for Endpoint data at all."]
      ],
      concept: "With Defender for Endpoint RBAC on, only Global and Security Administrators keep access by default; everyone else needs a Defender for Endpoint role.",
      takeaway: "Turning on Defender for Endpoint RBAC: Security Administrator keeps access, Security Reader loses it until a role is assigned.",
      refs: [["Microsoft Learn: Use role-based access control to manage portal access", "https://learn.microsoft.com/defender-endpoint/rbac"]]
    }
  },
  {
    id: "Q077", source: 77, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "All company-owned Windows 11 devices are onboarded to Microsoft Defender for Endpoint.",
      "You need to configure Defender for Endpoint to meet the following requirements:",
      { list: [
        "Block a vulnerable app until the app is updated.",
        "Block an application executable based on a file hash."
      ] },
      "The solution must minimize administrative effort.",
      "What should you configure for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Block a vulnerable app until the app is updated:", options: ["An alow or block file", "A file indicator", "A remediation request", "An update ring"] },
      { id: "f2", label: "Block an application executable based on a file hash:", options: ["An alow or block file", "A file indicator", "A remediation request", "An update ring"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "In Defender Vulnerability Management, a **remediation request** for a security recommendation can include the action to block the vulnerable application. Defender for Endpoint then blocks the known vulnerable versions of the app on the devices, and users can run the app again once it is updated to a version that is not vulnerable. One request covers the whole job, so it is the option with the least administrative effort.",
        "A **file indicator** is an indicator of compromise based on the hash of a file (SHA1, SHA256 or MD5). With the action Block execution, Defender for Endpoint prevents the file with that hash from running on the onboarded devices, which is exactly blocking an executable by its hash."
      ],
      wrong: [
        ["A file indicator (first requirement)", "A file indicator blocks one exact file until someone removes the indicator. It does not follow the app's versions, so you would have to maintain indicators by hand."],
        ["An alow or block file", "This is not a Defender for Endpoint configuration item. Allowing or blocking a file by its hash is what a file indicator does."],
        ["A remediation request (second requirement)", "Remediation requests start from a security recommendation for vulnerable software. They do not block an arbitrary executable by hash."],
        ["An update ring", "An update ring is a Windows Update for Business setting in Intune that controls when Windows updates install. It does not block an application."]
      ],
      concept: "Defender Vulnerability Management can block vulnerable app versions through a remediation request, and Defender for Endpoint file indicators block a file by its hash.",
      takeaway: "Block until patched: remediation request with block. Block a specific file: file indicator.",
      refs: [
        ["Microsoft Learn: Block vulnerable applications", "https://learn.microsoft.com/defender-vulnerability-management/tvm-block-vuln-apps"],
        ["Microsoft Learn: Create indicators for files", "https://learn.microsoft.com/defender-endpoint/indicator-file"]
      ]
    }
  },
  {
    id: "Q078", source: 78, type: "yesno",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint and contains the devices shown in the following table.",
      { table: { head: ["Name", "Operating system", "Tag"], rows: [
        ["Device1", "Windows 10", "Inventory1"],
        ["Computer1", "Windows 10", "Inventory2"],
        ["Device3", "Android", "Inventory3"]
      ] } },
      "Defender for Endpoint has the device groups shown in the following table.",
      { table: { head: ["Rank", "Name", "Matching rule"], rows: [
        ["1", "Group1", "Tag Contains Inventory\nAnd OS in Android"],
        ["2", "Group2", "Name Starts with Device\nAnd Tag Contains Inventory"],
        ["Last", "Ungrouped devices (default)", "Not applicable"]
      ] } },
      "You create an incident email notification rule configured as shown in the following table.",
      { table: { head: ["Setting", "Value"], rows: [
        ["Name", "Rule1"],
        ["Alert severity", "Low"],
        ["Device group scope", "Group1, Group2"],
        ["Recipient email address", "User1@contoso.com"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "If a high-severity incident is triggered for Device1, an incident email notification will be sent." },
      { text: "If a low-severity incident is triggered for Computer1, an incident notification email will be sent." },
      { text: "If a low-severity incident is triggered for Device3, an incident notification email will be sent." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "First place each device in its group. Groups are evaluated by rank, and every condition joined by And must match. Device1 runs Windows 10, so it fails Group1, which requires Android. Its name starts with Device and its tag Inventory1 contains Inventory, so it is in Group2. Computer1 also fails Group1 on the operating system, and its name does not start with Device, so it fails Group2 and stays in Ungrouped devices. Device3 runs Android and its tag Inventory3 contains Inventory, so it is in Group1.",
        "An email notification is sent only when both filters of Rule1 match: the severity is Low and the device is in Group1 or Group2. **Device1, high severity: No**, because Device1 is in scope but the rule covers only Low severity. **Computer1, low severity: No**, because Ungrouped devices is not in the scope of the rule. **Device3, low severity: Yes**, because Device3 is in Group1 and the severity matches."
      ],
      wrong: [
        ["Statement 1 — Yes", "Device1 is in Group2, which is in scope, but the rule is filtered to Low severity, so a high-severity incident sends nothing."],
        ["Statement 2 — Yes", "Computer1 does not start with Device and does not run Android, so it is in Ungrouped devices, which the rule does not cover."],
        ["Statement 3 — No", "Device3 meets both conditions of Group1, and Group1 is in the scope of the rule together with the Low severity."]
      ],
      concept: "An email notification rule fires only when the severity and the device group scope both match, and a device's group is decided by the ranked matching rules.",
      takeaway: "Place each device in its group first, then check the rule's severity and group scope together.",
      logic: "Check the severity first: statement 1 fails on severity alone. Then place Computer1 and Device3 in their groups.",
      refs: [
        ["Microsoft Learn: Create and manage device groups", "https://learn.microsoft.com/defender-endpoint/machine-groups"],
        ["Microsoft Learn: Configure email alert notifications in Microsoft Defender XDR", "https://learn.microsoft.com/defender-xdr/configure-email-notifications"]
      ]
    }
  },
  {
    id: "Q079", source: 79, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 tenant that contains two users named User1 and User2.",
      "You create the alert policy shown in the following exhibit.",
      { image: "q079-alert-policy.png", alt: "Alert policy Policy1, status On. Name your alert: no description, severity Medium, category Information governance, no tags. Create alert settings: conditions Activity is FileChangeActivity, aggregation Aggregated, scope All users, threshold 5, window 1 hour. Set your recipients: recipient User1@sk220912outlook.onmicrosoft.com, daily notification limit 25." },
      "User2 runs a script that modifies a file in a Microsoft SharePoint library once every four minutes and runs for a period of two hours.",
      "How many alerts will User1 receive?"
    ],
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "5" },
      { key: "C", text: "10" },
      { key: "D", text: "25" },
      { key: "E", text: "30" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Policy1 is an aggregated, threshold-based alert policy: it raises an alert when the matching activity reaches the threshold of 5 within the 1-hour window, for all users. The script modifies a file every four minutes, which is 15 modifications in each hour and 30 in the two hours, so the threshold is reached in both one-hour windows.",
        "With alert aggregation, matching events that occur while an alert is already open within the aggregation interval are added to that alert instead of creating new alerts and new notifications. Each one-hour window therefore produces one alert with the extra activities folded into it, and User1, the recipient, receives 2 alerts."
      ],
      wrong: [
        ["B", "5 is the threshold, the number of activities that triggers an alert, not the number of alerts."],
        ["C", "Ten alerts would need a new alert for every three modifications. The policy raises one alert per window and aggregates the rest."],
        ["D", "25 is the daily notification limit, a cap on notifications that is not reached here."],
        ["E", "30 is the number of file modifications. Alerting on every single event ignores both the threshold and aggregation."]
      ],
      concept: "Threshold-based alert policies count matching activities in a time window, and alert aggregation adds later matching events to the open alert instead of raising new ones.",
      takeaway: "Aggregated alert policy: count the windows in which the threshold is reached, not the events.",
      refs: [["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"]]
    }
  },
  {
    id: "Q080", source: 80, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Basic",
    stem: [
      "Your company has 10,000 users who access all applications from an on-premises data center.",
      "You plan to create a Microsoft 365 subscription and to migrate data to the cloud.",
      "You plan to implement directory synchronization.",
      "User accounts and group accounts must sync to Azure AD successfully.",
      "You discover that several user accounts fail to sync to Azure AD.",
      "You need to resolve the issue as quickly as possible.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From Active Directory Administrative Center, search for all the users, and then modify the properties of the user accounts." },
      { key: "B", text: "Run idfix.exe, and then click Edit." },
      { key: "C", text: "From Windows PowerShell, run the `start-AdSyncSyncCycle -PolicyType Delta` command." },
      { key: "D", text: "Run idfix.exe, and then click Complete." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Accounts usually fail to sync because of attribute values that Azure AD (now Microsoft Entra ID) does not accept, such as invalid characters, duplicates or a malformed UPN or proxy address. IdFix is the Microsoft tool for this: it queries the on-premises Active Directory, lists every object with a problem, and proposes a corrected value for each one.",
        "For each entry you choose an action. **Edit** writes the corrected value to the object in Active Directory, so the next synchronization cycle can sync it. Running IdFix and applying Edit fixes all the problem accounts from one list, which is far quicker than finding and correcting 10,000 accounts by hand."
      ],
      wrong: [
        ["A", "Searching all users in Active Directory Administrative Center does not show which attributes are invalid, and editing the accounts one by one is the slowest way to fix them."],
        ["C", "A delta sync only runs the synchronization again. The same objects fail again because their attributes have not been fixed."],
        ["D", "Complete marks the entry as dealt with and leaves the attribute as it is, so the value that blocks the sync is not corrected."]
      ],
      concept: "IdFix finds and corrects on-premises directory attribute errors that prevent objects from syncing to Microsoft Entra ID.",
      takeaway: "Objects fail to sync because of bad attributes: run IdFix and apply the edits, then sync again.",
      refs: [["Microsoft Learn: Prepare for directory synchronization to Microsoft 365", "https://learn.microsoft.com/microsoft-365/enterprise/prepare-for-directory-synchronization"]]
    }
  }
);
