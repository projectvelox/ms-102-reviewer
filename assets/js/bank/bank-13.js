/* MS-102 question bank, part 13: questions 193 to 208 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q193", source: 193, type: "yesno",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "Your company uses Microsoft Defender for Endpoint.",
      "The devices onboarded to Microsoft Defender for Endpoint are shown in the following table.",
      { table: { head: ["Name", "Device group"], rows: [["Device1", "ATP1"], ["Device2", "ATP1"], ["Device3", "ATP2"]] } },
      "The alerts visible in the Microsoft Defender for Endpoint alerts queue are shown in the following table.",
      { table: { head: ["Name", "Device"], rows: [["Alert1", "Device1"], ["Alert2", "Device2"], ["Alert3", "Device3"]] } },
      "You create a suppression rule that has the following settings:",
      { list: ["Triggering IOC: Any IOC", "Action: Hide alert", "Suppression scope: Alerts on ATP1 device group"] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "After you create the suppression rule, Alert1 is visible in the alerts queue." },
      { text: "After you create the suppression rule, Alert3 is visible in the alerts queue." },
      { text: "After you create the suppression rule, a new alert triggered on Device2 is visible in the alerts queue." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "A suppression rule in Defender for Endpoint is created from an alert and applies to later alerts of the same kind. This rule matches any IOC, hides the alerts it matches, and is scoped to the ATP1 device group, which holds Device1 and Device2. It takes effect when it is created and does not change alerts that are already in the queue.",
        "Alert1 was in the queue before the rule existed, so it stays visible (Yes). Alert3 also existed before the rule, and Device3 is in ATP2, outside the scope, so it stays visible too (Yes). A new alert on Device2 arrives after the rule exists, on a device in ATP1, so the rule hides it and it is not visible in the queue (No)."
      ],
      wrong: [
        ["Statement 1 — No", "Hiding Alert1 would mean the rule acts on alerts that already exist. A suppression rule only applies to alerts generated after it is created."],
        ["Statement 2 — No", "Alert3 existed before the rule, and Device3 is in ATP2, outside the scope of the rule. Neither fact lets the rule hide it."],
        ["Statement 3 — Yes", "Device2 is in ATP1 and the alert comes after the rule was created. A rule with Any IOC and Hide alert keeps that alert out of the queue."]
      ],
      concept: "Suppression rules hide or resolve future alerts that match them, within a scope of one device, a device group or the whole organization; alerts already in the queue are not changed.",
      takeaway: "A new suppression rule never cleans up the existing queue. It acts only on alerts that arrive after it, and only within its scope.",
      refs: [
        ["Microsoft Learn: Manage Defender for Endpoint suppression rules", "https://learn.microsoft.com/defender-endpoint/manage-suppression-rules"],
        ["Microsoft Learn: Manage Defender for Endpoint alerts", "https://learn.microsoft.com/defender-endpoint/manage-alerts"]
      ]
    }
  },
  {
    id: "Q194", source: 194, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You configure sensitivity labels.",
      "Users report that the Sensitivity button is unavailable in Microsoft Word for the web. The Sensitivity button is available in Microsoft 365 Word.",
      "You need to ensure that the users can apply the sensitivity labels when they use Word for the web.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Enable sensitivity labels for files in Microsoft SharePoint and OneDrive." },
      { key: "B", text: "Publish the sensitivity labels." },
      { key: "C", text: "Copy policies from Azure Information Protection to the Microsoft Purview compliance portal." },
      { key: "D", text: "Create an auto-labeling policy." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Office for the web shows the Sensitivity button only after built-in labeling for Office files in SharePoint and OneDrive has been enabled for the tenant. When it is enabled, users can apply labels in Word, Excel and PowerPoint for the web, see the applied label name on the status bar, and SharePoint and OneDrive can process the content of files that a label has encrypted.",
        "The fact that desktop Word shows the button tells you the labels are already published to these users. What is missing is the tenant setting, which you turn on in the Microsoft Purview portal or with `Set-SPOTenant -EnableAIPIntegration $true`."
      ],
      wrong: [
        ["B", "Desktop Word already shows the Sensitivity button, which only happens when a label policy has published labels to the user. Publishing them again does not change Word for the web."],
        ["C", "Copying policies from Azure Information Protection brought the settings of old AIP label policies into unified labeling. It does not turn on labeling in Office for the web."],
        ["D", "An auto-labeling policy applies labels to content automatically. It does not give users the Sensitivity button in Word for the web."]
      ],
      concept: "Sensitivity labels in Office for the web depend on the tenant setting that enables sensitivity labels for Office files in SharePoint and OneDrive.",
      takeaway: "Labels work in desktop Office but there is no Sensitivity button in Office for the web: enable sensitivity labels for files in SharePoint and OneDrive.",
      refs: [["Microsoft Learn: Enable sensitivity labels for Office files in SharePoint and OneDrive", "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"]]
    }
  },
  {
    id: "Q195", source: 195, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to use a mailbox named Mailbox1 to analyze malicious email messages.",
      "You need to configure Microsoft Defender for Office 365 to meet the following requirements:",
      { list: ["Ensure that incoming email is NOT filtered for Mailbox1.", "Detect impersonation and spoofing attacks on all other mailboxes in the subscription."] },
      "Which two settings should you configure? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Policies", options: ["Anti-phishing", "Anti-spam", "Anti-malware", "Safe Attachments", "Safe Links"] },
      { id: "f2", label: "Rules", options: ["Tenant Allow/Block Lists", "Email authentication settings", "DKIM", "Advanced delivery", "Enhanced filtering", "Quarantine policies"] }
    ],
    answer: { f1: 0, f2: 3 },
    explanation: {
      correct: [
        "**Advanced delivery** is where you designate SecOps mailboxes. A SecOps mailbox is a dedicated mailbox in which the security team collects and analyzes unfiltered messages, so messages sent to it are delivered without being filtered by Exchange Online Protection and Defender for Office 365. Adding Mailbox1 as a SecOps mailbox meets the first requirement without weakening protection for anyone else.",
        "**Anti-phishing** policies hold impersonation protection for users and domains, mailbox intelligence and spoof intelligence. An anti-phishing policy that applies to all the other recipients detects impersonation and spoofing attacks on their mailboxes."
      ],
      wrong: [
        ["Anti-spam", "Anti-spam policies set the actions for spam, bulk and phishing verdicts. They do not deliver all mail to a mailbox unfiltered, and they have no impersonation protection."],
        ["Anti-malware or Safe Attachments", "Both inspect attachments for malware. Neither exempts a mailbox from filtering or detects impersonation."],
        ["Safe Links", "Safe Links checks URLs when users click them. It has nothing to do with impersonation or spoofing."],
        ["Tenant Allow/Block Lists", "Allow and block entries are for senders, domains, URLs and files. They do not make a recipient mailbox receive everything unfiltered."],
        ["Enhanced filtering", "Enhanced filtering for connectors is used when mail passes through another service before Microsoft 365, so that the original source of the message is evaluated. It does not create an unfiltered mailbox."],
        ["Email authentication settings, DKIM or Quarantine policies", "These cover the authentication of your own domains and what users may do with quarantined messages. None of them delivers unfiltered mail to a mailbox or adds impersonation detection."]
      ],
      concept: "Advanced delivery lets SecOps mailboxes receive unfiltered messages, while anti-phishing policies provide impersonation and spoof protection for everyone else.",
      takeaway: "Mailbox for analyzing malicious mail: Advanced delivery, SecOps mailboxes. Impersonation and spoofing: anti-phishing policy.",
      refs: [
        ["Microsoft Learn: Configure the advanced delivery policy for SecOps mailboxes", "https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure"],
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"]
      ]
    }
  },
  {
    id: "Q196", source: 196, type: "dropdown",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement identity protection by configuring a sign-in risk policy and a user risk policy.",
      "Which type of risk is detected by each policy? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Sign-in risk policy:", options: ["Atypical travel", "Leaked credentials", "Possible attempt to access Primary Refresh Token (PRT)"] },
      { id: "f2", label: "User risk policy:", options: ["Leaked credentials", "Malicious IP address", "Suspicious browser"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "Identity Protection sorts its detections into two kinds of risk. Sign-in risk is the probability that a particular sign-in was not made by the owner of the account, and it is based on properties of that sign-in. **Atypical travel** compares the location of a sign-in with the user's earlier sign-ins, so it is a sign-in risk detection, and a sign-in risk policy acts on it.",
        "User risk is the probability that the identity itself is compromised. **Leaked credentials** means that the user's valid credentials have been found in a public leak, such as on the dark web. That is not about a single sign-in but about the account, so it raises the user risk that a user risk policy acts on, typically by requiring a secure password change."
      ],
      wrong: [
        ["Sign-in risk policy: Leaked credentials", "Leaked credentials is a user risk detection. It concerns the account, not one sign-in."],
        ["Sign-in risk policy: Possible attempt to access Primary Refresh Token (PRT)", "This detection is reported by Defender for Endpoint and counts as user risk."],
        ["User risk policy: Malicious IP address", "A sign-in from an IP address that is known to be malicious is a property of the sign-in, so it is sign-in risk."],
        ["User risk policy: Suspicious browser", "Suspicious browser flags suspicious sign-in activity from the same browser. It is a sign-in risk detection."]
      ],
      concept: "Identity Protection detections feed either sign-in risk (this sign-in is suspicious) or user risk (this account is likely compromised), and each risk policy acts on one of the two.",
      takeaway: "Atypical travel, malicious IP address, suspicious browser: sign-in risk. Leaked credentials, PRT access attempt: user risk.",
      refs: [
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"],
        ["Microsoft Learn: Risk-based access policies", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-policies"]
      ]
    }
  },
  {
    id: "Q197", source: 197, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to configure Microsoft Defender for Office 365 to meet the following requirements:",
      { list: ["A user's email sending patterns must be used to minimize false positives for spoof protection.", "Documents uploaded to Microsoft Teams, SharePoint Online, and OneDrive must be protected by using Defender for Office 365."] },
      "What should you configure for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "A user's email sending patterns must be used to minimize false positives for spoof protection:", options: ["Domains to protect", "Mailbox intelligence", "Users to protect"] },
      { id: "f2", label: "Documents uploaded to Teams, SharePoint Online, and OneDrive must be protected by using Defender for Office 365:", options: ["Global settings for safe attachments", "The Safe Attachments policy settings", "The Safe Links policy settings"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "**Mailbox intelligence** is a setting of anti-phishing policies in Defender for Office 365. It uses machine learning to learn each user's email patterns with their frequent contacts, and the policy uses that knowledge to tell genuine messages from those contacts apart from messages that only pretend to come from them, which reduces false positives.",
        "Protection for files in SharePoint, OneDrive and Microsoft Teams is not part of a Safe Attachments policy. It is a single tenant-wide switch, **Turn on Defender for Office 365 for SharePoint, OneDrive, and Microsoft Teams**, in the global settings of Safe Attachments. When it is on, files that are found to be malicious are locked so that users cannot open, copy, move or share them."
      ],
      wrong: [
        ["Domains to protect", "This impersonation setting lists the sender domains to protect from impersonation. It does not learn anyone's sending patterns."],
        ["Users to protect", "This impersonation setting lists specific senders, such as executives, to protect. It is a list that you maintain, not learned behavior."],
        ["The Safe Attachments policy settings", "Safe Attachments policies scan email attachments for the recipients they apply to. Protection for SharePoint, OneDrive and Teams is a separate global setting."],
        ["The Safe Links policy settings", "Safe Links checks URLs when users click them. It does not scan uploaded documents."]
      ],
      concept: "Mailbox intelligence learns users' communication patterns to sharpen anti-phishing verdicts, and Safe Attachments for SharePoint, OneDrive and Teams is turned on in the Safe Attachments global settings.",
      takeaway: "Sending patterns: mailbox intelligence. Files in SharePoint, OneDrive and Teams: Safe Attachments global settings, not a policy.",
      refs: [
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"],
        ["Microsoft Learn: Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-about"]
      ]
    }
  },
  {
    id: "Q198", source: 198, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.",
      "You plan to perform device discovery and authenticated scans of network devices.",
      "You install and register the network scanner on a device named Device1.",
      "What should you do next?"
    ],
    options: [
      { key: "A", text: "Connect Defender for Endpoint to Microsoft Intune." },
      { key: "B", text: "Apply for Microsoft Threat Experts - Targeted Attack Notifications." },
      { key: "C", text: "Create an assessment job." },
      { key: "D", text: "Download and run an onboarding package." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Network devices such as switches, routers and firewalls cannot run the Defender for Endpoint sensor. They are discovered and assessed without an agent by a scanner that runs on a designated device, here Device1.",
        "Installing and registering the scanner only makes it available. Nothing is scanned until you create an assessment job in the device discovery settings of the Defender portal. The job names the scanning device, the IP addresses or ranges to scan and the credentials to authenticate with, such as SNMP credentials, and the scanner then runs the scans that the job defines."
      ],
      wrong: [
        ["A", "The Intune connection shares device risk with Intune for compliance. Scanning network devices does not depend on it."],
        ["B", "Microsoft Threat Experts - Targeted Attack Notifications is a managed threat hunting service that notifies you about critical threats. It plays no part in scanning network devices."],
        ["D", "Network devices are scanned without an agent and cannot run an onboarding package. The scanner on Device1 is already in place; it needs a job."]
      ],
      concept: "Network device discovery and authenticated scans run from a scanner on a chosen device and are driven by assessment jobs that define the targets, the credentials and the schedule.",
      takeaway: "Scanner installed and registered: next, create the assessment job.",
      refs: [
        ["Microsoft Learn: Network device discovery and vulnerability management", "https://learn.microsoft.com/defender-endpoint/network-devices"],
        ["Microsoft Learn: Device discovery overview", "https://learn.microsoft.com/defender-endpoint/device-discovery"]
      ]
    }
  },
  {
    id: "Q199", source: 199, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to receive a notification each time a user in the service desk department grants Full Access permissions for a user mailbox.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "a data loss prevention (DLP) policy" },
      { key: "B", text: "an alert policy" },
      { key: "C", text: "an audit search" },
      { key: "D", text: "an insider risk management policy" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Alert policies watch the audit log for the activities you choose and send an email notification to the recipients you choose when the activity occurs. Granting Full Access to a mailbox is an audited Exchange Online activity, the one performed by `Add-MailboxPermission`.",
        "You therefore create an alert policy for that activity, limit it to the users of the service desk department, set it to trigger every time an activity matches the rule, and add yourself as a recipient of the notifications."
      ],
      wrong: [
        ["A", "DLP policies look for sensitive content in email, files and messages. Granting a mailbox permission involves no content."],
        ["C", "An audit search finds past activities when you run it. It does not notify you each time the activity happens."],
        ["D", "Insider risk management scores risky behavior, such as data theft by departing employees, and creates alerts for investigators to review. It is not a per-event notification about a permission change."]
      ],
      concept: "An alert policy turns an audited activity into an alert and an email notification, either every time it happens or when a threshold is reached.",
      takeaway: "Tell me whenever someone does X: alert policy. Find out who did X in the past: audit search.",
      refs: [["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"]]
    }
  },
  {
    id: "Q200", source: 200, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to be alerted when Microsoft 365 Defender detects high-severity incidents.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "a custom detection rule" },
      { key: "B", text: "a threat policy" },
      { key: "C", text: "an alert policy" },
      { key: "D", text: "a notification rule" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The reference answer is C, an alert policy. Alert policies are managed in the Microsoft Defender portal (Policies & rules, Alert policy) and in the Microsoft Purview portal. Each policy defines the activity that triggers it, the severity of the alerts it creates (for example Low, Medium or High), their category, and the recipients who receive an email notification when the policy fires, with an optional daily limit on notifications.",
        "The alerts that alert policies create appear in the Microsoft 365 Defender portal together with the alerts of the Defender products, and Microsoft 365 Defender groups related alerts into incidents, each of which has a severity."
      ],
      wrong: [
        ["A", "A custom detection rule runs an advanced hunting query on a schedule and creates new alerts from its results. It is a way to add detections, not a way to be notified about incidents that are already detected."],
        ["B", "Threat policies, such as anti-phishing, anti-spam and Safe Links policies, decide how email and content are filtered. They do not send notifications about incidents."],
        ["D", "Email notification rules for incidents are created in the Defender portal under Settings, Microsoft Defender XDR, Email notifications, and they filter on incident severity. The reference answer for this question is the alert policy."]
      ],
      concept: "Alert policies assign a severity and email recipients to the alerts they generate, and the Defender portal correlates alerts into incidents that carry their own severity.",
      takeaway: "Know both tools: alert policies notify recipients when their alerts fire, and incident email notification rules notify by incident severity. This question's reference answer is the alert policy.",
      refs: [
        ["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"],
        ["Microsoft Learn: Incidents in Microsoft Defender XDR", "https://learn.microsoft.com/defender-xdr/incidents-overview"]
      ]
    }
  },
  {
    id: "Q201", source: 201, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "All corporate Windows 11 devices are managed by using Microsoft Intune and onboarded to Microsoft Defender for Endpoint.",
      "You need to meet the following requirements:",
      { list: ["View an assessment of the device configurations against the Center for Internet Security (CIS) v1.0.0 benchmark.", "Protect a folder named C:\\Folder1 from being accessed by untrusted applications on the devices."] },
      "What should you do? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To view the device configuration assessment:", options: ["Add a connected application.", "Create a baseline assessment profile.", "Filter the Vulnerable devices report."] },
      { id: "f2", label: "To protect C:\\Folder1, enable:", options: ["Controlled folder access", "Exploit protection", "Removable storage protection"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "**Security baselines assessment** in Defender Vulnerability Management compares the configuration of onboarded devices with benchmarks such as CIS and the Microsoft security baselines. To see an assessment you create a baseline assessment profile: you choose the operating system, the benchmark and its version, here CIS v1.0.0 for Windows 11, and the devices, and the portal then shows how well each device complies with each configuration.",
        "**Controlled folder access** is the Microsoft Defender Antivirus feature that protects folders from untrusted applications, mainly against ransomware. It covers a set of default folders, and you add C:\\Folder1 as a protected folder. Only applications that Defender Antivirus considers trusted, or that you allow, can then change the files in it."
      ],
      wrong: [
        ["Add a connected application.", "Connecting an application integrates another product or API client with Defender. It does not compare device settings with a benchmark."],
        ["Filter the Vulnerable devices report.", "The Vulnerable devices report shows devices by the severity and exploitability of their software vulnerabilities. It is not an assessment of configuration against CIS."],
        ["Exploit protection", "Exploit protection applies mitigations such as DEP and ASLR to processes. It does not guard a folder."],
        ["Removable storage protection", "This controls USB drives and other removable media. It does not protect a folder on the local disk."]
      ],
      concept: "Baseline assessment profiles measure device configuration against CIS or Microsoft benchmarks, and controlled folder access protects chosen folders from untrusted applications.",
      takeaway: "CIS benchmark view: create a baseline assessment profile. Keep untrusted apps out of a folder: controlled folder access.",
      refs: [
        ["Microsoft Learn: Security baselines assessment", "https://learn.microsoft.com/defender-vulnerability-management/tvm-security-baselines"],
        ["Microsoft Learn: Protect important folders with controlled folder access", "https://learn.microsoft.com/defender-endpoint/controlled-folders"]
      ]
    }
  },
  {
    id: "Q202", source: 202, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains the alerts shown in the following table.",
      { table: { head: ["Name", "Severity", "Status", "Comment", "Category"], rows: [["Alert1", "Medium", "Active", "Comment1", "Threat management"], ["Alert2", "Low", "Resolved", "Comment2", "Other"]] } },
      "Which properties of the alerts can you modify?"
    ],
    options: [
      { key: "A", text: "Status only" },
      { key: "B", text: "Status and Comment only" },
      { key: "C", text: "Status and Severity only" },
      { key: "D", text: "Status, Severity, and Comment only" },
      { key: "E", text: "Status, Severity, Comment and Category" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Threat management is one of the categories of alert policies, and an alert gets its category and its severity from the alert policy that generated it. Both are settings of the policy, not of the individual alert.",
        "On the alert itself you manage the investigation: you change its status (Active, Investigating, Resolved or Dismissed) and add comments about what you found. Status and Comment are therefore the properties you can modify."
      ],
      wrong: [
        ["A", "You can also add comments to an alert, so status is not the only property you can change."],
        ["C", "The severity comes from the alert policy that raised the alert and cannot be changed on the alert."],
        ["D", "Severity is fixed by the alert policy. Only the status and the comments are managed on the alert."],
        ["E", "Neither the severity nor the category can be changed on an alert. Both come from the alert policy."]
      ],
      concept: "An alert inherits its severity and category from the alert policy; when you manage the alert you change its status and add comments.",
      takeaway: "On an alert you can change Status and add Comments. Severity and Category are set by the alert policy.",
      refs: [["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"]]
    }
  },
  {
    id: "Q203", source: 203, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint.",
      "All the devices in your organization are onboarded to Microsoft Defender for Endpoint.",
      "You need to ensure that an alert is generated if malicious activity was detected on a device during the last 24 hours.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the Microsoft Purview compliance portal, create a data loss prevention (DLP) policy." },
      { key: "B", text: "From Alerts queue, create a suppression rule and assign an alert." },
      { key: "C", text: "From Advanced hunting, create a query and a detection rule." },
      { key: "D", text: "From the Microsoft Purview compliance portal, create an audit log search." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Custom detection rules are built from advanced hunting queries. You write a query over the device tables that finds the malicious activity, for example limited with a `Timestamp > ago(24h)` filter, and save it as a detection rule with a run frequency such as every 24 hours.",
        "The rule then runs on its schedule and creates an alert for the results it returns, which can also trigger automatic actions on the affected devices. To create alerts, the query has to return the columns that identify the event and the affected entity, such as `Timestamp`, `ReportId` and `DeviceId`."
      ],
      wrong: [
        ["A", "DLP policies protect sensitive content in email, files and endpoints. They do not detect malicious activity on devices."],
        ["B", "A suppression rule hides or resolves alerts that match it. It reduces alerts rather than generating them."],
        ["D", "An audit log search is a one-time search of user and admin activities. It does not generate alerts."]
      ],
      concept: "A custom detection rule turns an advanced hunting query into a scheduled detection that raises alerts and can take actions.",
      takeaway: "Need an alert for a condition that no built-in detection covers: write an advanced hunting query and save it as a custom detection rule.",
      refs: [
        ["Microsoft Learn: Create and manage custom detection rules", "https://learn.microsoft.com/defender-xdr/custom-detection-rules"],
        ["Microsoft Learn: Custom detections overview", "https://learn.microsoft.com/defender-xdr/custom-detections-overview"]
      ]
    }
  },
  {
    id: "Q204", source: 204, type: "dropdown",
    domain: "security", topic: "Intune and device compliance", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 tenant that connects to Microsoft Defender for Endpoint.",
      "You have devices enrolled in Microsoft Intune as shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [["Device1", "Windows 10"], ["Device2", "Windows 11"], ["Device3", "iOS"], ["Device4", "Android"]] } },
      "You plan to use risk levels in Microsoft Defender for Endpoint to identify whether a device is compliant.",
      "Noncompliant devices must be blocked from accessing corporate resources.",
      "You need to identify which devices can be onboarded to Microsoft Defender for Endpoint, and which Endpoint security policies must be configured.",
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Devices that can onboarded to Microsoft Defender for Endpoint:", options: ["Device1 only", "Device1 and Device2 only", "Device1 and Device3 only", "Device1 and Device4 only", "Device1, Device2, and Device4 only", "Device1, Device2, Device3, and Device4"] },
      { id: "f2", label: "Endpoint security policies that must be configured:", options: ["A conditional access policy only", "A device compliance policy only", "A device configuration profile only", "A device configuration profile and a conditional access policy only", "Device configuration profile, device compliance policy, and conditional access policy"] }
    ],
    answer: { f1: 5, f2: 3 },
    explanation: {
      correct: [
        "Defender for Endpoint supports all four platforms in the table. Windows 10 and Windows 11 devices are onboarded through Intune with the onboarding package that the Defender for Endpoint connector provides, and iOS and Android devices are onboarded by deploying the Microsoft Defender for Endpoint app to them through Intune. Device1, Device2, Device3 and Device4 can therefore all be onboarded and report a risk level.",
        "The reference answer for the policies is **A device configuration profile and a conditional access policy only**. The device configuration profile (the Microsoft Defender for Endpoint template, or an endpoint detection and response policy) onboards the Windows devices. The Conditional Access policy requires a compliant device and blocks access from devices that are not compliant. The Defender risk level itself is turned into a compliance state by the setting **Require the device to be at or under the machine risk score**, which is part of a device compliance policy."
      ],
      wrong: [
        ["Device1 and Device2 only", "Defender for Endpoint is not limited to Windows. iOS and Android devices are onboarded with the Defender for Endpoint app."],
        ["Device1, Device2, and Device4 only", "iOS is supported too, through the Defender for Endpoint app for iOS and iPadOS."],
        ["A conditional access policy only", "Conditional Access can block devices, but the Windows devices have to be onboarded first, which is what the device configuration profile does."],
        ["A device configuration profile only", "Onboarding alone blocks nothing. A Conditional Access policy is what keeps noncompliant devices away from corporate resources."],
        ["Device configuration profile, device compliance policy, and conditional access policy", "This option adds the device compliance policy that holds the machine risk score setting. The reference answer is the device configuration profile and the Conditional Access policy."]
      ],
      concept: "Risk-based access with Defender for Endpoint chains onboarding of the devices, the evaluation of the machine risk score as compliance, and a Conditional Access policy that requires compliant devices.",
      takeaway: "Defender for Endpoint onboards Windows, macOS, Linux, iOS and Android. For this question the reference answer for the policies is the device configuration profile and the Conditional Access policy.",
      refs: [
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint in Intune", "https://learn.microsoft.com/mem/intune/protect/advanced-threat-protection-configure"],
        ["Microsoft Learn: Defender for Endpoint minimum requirements", "https://learn.microsoft.com/defender-endpoint/minimum-requirements"]
      ]
    }
  },
  {
    id: "Q205", source: 205, type: "dropdown",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You configure a new alert policy as shown in the following exhibit.",
      { image: "q205-alert-policy-trigger.png", alt: "Alert policy setting: How do you want the alert to be triggered? Three choices. Every time an activity matches the rule: not selected. When the volume of matched activities reaches a threshold, with More than or equal to 15 activities, During the last 60 minutes, On All users: not selected. When the volume of matched activities becomes unusual, On All users: selected." },
      "You need to identify the following:",
      { list: ["How many days it will take to establish a baseline for unusual activity", "Whether alerts will be triggered during the establishment of the baseline"] },
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "How many days it will take to establish the baseline:", options: ["1", "5", "7", "10"] },
      { id: "f2", label: "Whether the alerts will be triggered during the establishment of the baseline:", options: ["Alerts will be triggered.", "Alerts will not be triggered.", "Alerts will be triggered only after the process to establish the baseline has been running for one day."] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "The policy uses the trigger **When the volume of matched activities becomes unusual**, which is available with E5 licensing. For this trigger Microsoft 365 first establishes a baseline that represents the normal amount of the activity. Establishing the baseline takes up to 7 days, and no alerts are generated during that time.",
        "Once the baseline exists, an alert is triggered when the frequency of the activity greatly exceeds it. The values 15 activities in 60 minutes belong to the threshold trigger, which is not selected, so they play no part here."
      ],
      wrong: [
        ["1, 5 or 10 days", "The baseline for unusual activity takes up to 7 days to establish."],
        ["Alerts will be triggered.", "During the baseline period there is nothing yet to compare the activity with, so no alerts are generated."],
        ["Alerts will be triggered only after the process to establish the baseline has been running for one day.", "No partial baseline is used after one day. Alerts start only once the baseline has been established."]
      ],
      concept: "Alert policies with the unusual-activity trigger learn a baseline for up to 7 days without alerting, then alert on activity that greatly exceeds it.",
      takeaway: "Unusual activity trigger: a baseline of up to 7 days, and no alerts until it is established.",
      refs: [["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"]]
    }
  },
  {
    id: "Q206", source: 206, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You create a retention label named Retention1 as shown in the following exhibit.",
      { image: "q206-retention-label.png", alt: "Create retention label wizard, Review and finish page. Name: Retention1. Retention settings: Retention period 6 months; Retention action Retain and Delete; Based on: Based on when it was created." },
      "You apply Retention1 to all the Microsoft OneDrive content.",
      "On January 1, 2020, a user stores a file named File1 in OneDrive.",
      "On January 10, 2020, the user modifies File1.",
      "On February 1, 2020, the user deletes File1.",
      "When will File1 be removed permanently and unrecoverable from OneDrive?"
    ],
    options: [
      { key: "A", text: "February 1, 2020" },
      { key: "B", text: "July 1, 2020" },
      { key: "C", text: "July 10, 2020" },
      { key: "D", text: "August 1, 2020" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Retention1 retains items for 6 months **based on when they were created** and then deletes them. File1 was created on January 1, 2020, so its retention period ends 6 months later, on July 1, 2020. The change on January 10 does not move that date, because the period counts from creation, not from the last modification.",
        "When the user deletes File1 on February 1, the file is still within its retention period, so a copy is kept in the Preservation Hold library of the user's OneDrive and the content is not lost. When the period ends on July 1, 2020, the label no longer retains File1 and its delete action removes the retained copy. That removal is carried out by a background timer job, so in a real tenant it can follow the date with some delay."
      ],
      wrong: [
        ["A", "On February 1 the user only removes File1 from view. Because the retention period is still running, a copy is kept in the Preservation Hold library."],
        ["C", "July 10 would be the date if the period counted from the last modification on January 10. Retention1 counts from creation."],
        ["D", "August 1 is 6 months after the deletion. Deleting the file does not start the retention period."]
      ],
      concept: "A retention label's period starts at the event it is based on, here the creation date, and a deletion during the period leaves a preserved copy until the period ends.",
      takeaway: "Retain and delete based on creation: creation date plus the period, whatever the user edits or deletes in between.",
      refs: [
        ["Microsoft Learn: Learn about retention for SharePoint and OneDrive", "https://learn.microsoft.com/purview/retention-policies-sharepoint"],
        ["Microsoft Learn: Common settings for retention policies and retention labels", "https://learn.microsoft.com/purview/retention-settings"]
      ]
    }
  },
  {
    id: "Q207", source: 207, type: "yesno",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a SharePoint site named Site1. Site1 contains the files shown in the following table.",
      { table: { head: ["Name", "Number of IP addresses in the file"], rows: [["File1", "2"], ["File2", "5"]], numeric: [1] } },
      "You have the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [["User1", "Site owners for Site1"], ["User2", "Site members for Site1"], ["Admin1", "SharePoint admins"]] } },
      "You create a data loss prevention (DLP) policy with an advanced DLP rule and apply the policy to Site1. The DLP rule is configured as shown in the following exhibit.",
      { image: "q207-dlp-rule.png", alt: "Edit rule page of the DLP rule. Conditions: Content contains, group Default, Any of these; Sensitive info types: IP Address, High confidence, instance count 3 to Any. Actions: Restrict access or encrypt the content in Microsoft 365 locations is checked; Block users from receiving email or accessing shared SharePoint, OneDrive, and Teams files is selected, with the note: By default, users are blocked from sending Teams chats and channel messages that contain the type of content you're protecting. But you can choose who is blocked from receiving emails or accessing files shared from SharePoint, OneDrive, and Teams. Block everyone is selected; Block only people outside your organization and Block only people who were given access to the content through the \"Anyone with the link\" option are not selected." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can open File2." },
      { text: "User2 can open File1." },
      { text: "Admin1 can open File2." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "The rule matches content that contains the IP Address sensitive information type with high confidence at least 3 times (instance count 3 to Any). File1 holds 2 IP addresses and does not match. File2 holds 5 and matches. For matching files in SharePoint, **Block everyone** blocks access for everyone except the content owner, the person who last modified the file and the owner of the site (the site admin).",
        "User1 is an owner of Site1 and keeps access, so User1 can open File2 (Yes). File1 does not match the rule, so nothing restricts it, and User2 as a site member can open it (Yes). Admin1 has the SharePoint admin role, which manages the service but does not exempt anyone from a DLP block, so Admin1 cannot open File2 (No)."
      ],
      wrong: [
        ["Statement 1 — No", "File2 matches the rule, but Block everyone still leaves the owner of the site with access, and User1 is an owner of Site1."],
        ["Statement 2 — No", "File1 contains only 2 IP addresses, below the instance count of 3, so the rule does not apply to it."],
        ["Statement 3 — Yes", "The SharePoint admin role does not exempt anyone from a DLP block. Only the content owner, the last modifier and the site owner keep access."]
      ],
      concept: "A DLP rule acts only when all its conditions, including the instance count, are met, and Block everyone leaves only the content owner, the last modifier and the site owner (site admin) with access.",
      takeaway: "First compare the instance count with the threshold. Then remember who keeps access under Block everyone: content owner, last modifier, site owner; tenant admin roles are not exempt.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q208", source: 208, type: "multi",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint site named site1.",
      "You need to ensure that site1 meets the following requirements:",
      { list: ["Retains all data for 10 years", "Prevents the sharing of data outside the organization"] },
      "Which two items should you create and apply to site1? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "a retention policy" },
      { key: "B", text: "a data loss prevention (DLP) policy" },
      { key: "C", text: "a retention label policy" },
      { key: "D", text: "a sensitive info type" },
      { key: "E", text: "a retention label" },
      { key: "F", text: "a sensitivity label" }
    ],
    answer: ["A", "B"],
    explanation: {
      correct: [
        "A retention policy for the SharePoint sites location, scoped to site1 and set to retain items for 10 years, covers all the content of the site at once, without labeling individual files (A).",
        "A DLP policy for the SharePoint sites location can detect content in site1 that is shared with people outside the organization, with the condition **Content is shared from Microsoft 365** with people outside my organization, and block their access with the action that restricts access to the content (B)."
      ],
      wrong: [
        ["C", "A retention label policy publishes or auto-applies retention labels. It needs a retention label, and the labels then work item by item, whereas a retention policy covers the whole site directly."],
        ["D", "A sensitive info type only describes data to detect, such as a number pattern. It is used inside a DLP or labeling policy and neither retains nor blocks anything by itself."],
        ["E", "A retention label is applied to individual items and must be published or auto-applied first. Retaining all the data in a site is done directly by a retention policy."],
        ["F", "A sensitivity label does not retain content, so it cannot meet the 10-year requirement. The external sharing requirement is met here by the DLP policy."]
      ],
      concept: "Retention for a whole location is a retention policy, and blocking content from being shared outside the organization is a DLP policy with a sharing condition.",
      takeaway: "Retain everything in a site: retention policy. Stop content being shared outside the organization: DLP policy.",
      refs: [
        ["Microsoft Learn: Learn about retention policies and retention labels", "https://learn.microsoft.com/purview/retention"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  }
);
