/* MS-102 question bank, part 21: questions 321 to 336 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q321", source: 321, type: "dropdown",
    domain: "identity", topic: "Identity Protection", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains three users named User1, User2, and User3.",
      "You use Microsoft Entra ID Protection.",
      "You configure the Users at risk detected alerts setting to send an alert when a user risk level of low or above is detected.",
      "Users are assigned the risk levels shown in the following table.",
      { table: {
        head: ["Time", "User", "Risk level"],
        rows: [
          ["8:00:00 AM", "User2", "Medium"],
          ["8:00:00 AM", "User3", "High"],
          ["8:00:10 AM", "User1", "Low"],
          ["8:02:00 AM", "User1", "Medium"],
          ["8:02:04 AM", "User1", "High"],
          ["8:03:01 AM", "User2", "Medium"],
          ["8:03:01 AM", "User3", "High"],
          ["8:05:00 AM", "User1", "High"],
          ["8:10:00 AM", "User3", "High"],
          ["9:00:00 AM", "User2", "High"]
        ]
      } },
      "By the end of the day, how many alerts were generated for User1, and how many alerts were generated for User2 and User3? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1:", options: ["1", "2", "3", "4", "5", "6"] },
      { id: "f2", label: "User2 and User3:", options: ["1", "2", "3", "4", "5", "6"] }
    ],
    answer: { f1: 2, f2: 3 },
    explanation: {
      correct: [
        "The **Users at risk detected** email of Microsoft Entra ID Protection is generated when a user's risk level reaches the level you configured. It is not a one-time alert per user: when a later risk detection is recalculated and the user is still at the configured level or higher, another email is sent. Two rules limit the count. Only one email is sent within a 5-second period, and when several users reach the level within the same 5 seconds, they are aggregated into one email. The threshold here is Low, so every row of the table qualifies.",
        "**User1: 3.** 8:00:10 AM Low sends the first email and 8:02:00 AM Medium the second. The High detection at 8:02:04 AM comes only 4 seconds after the 8:02:00 email, inside the same 5-second window, so it does not produce an email of its own. 8:05:00 AM High sends the third email.",
        "**User2 and User3: 4.** At 8:00:00 AM both users are detected at the same moment, so one email covers both. The same happens at 8:03:01 AM. User3's detection at 8:10:00 AM and User2's at 9:00:00 AM are each alone in their window and send the third and fourth emails."
      ],
      wrong: [
        ["User1: 4", "This counts the 8:02:04 AM detection separately. It falls within 5 seconds of the email sent at 8:02:00 AM, and only one email is sent in a 5-second period."],
        ["User2 and User3: 6", "This counts one email per row. The detections at 8:00:00 AM and at 8:03:01 AM happen in the same second for both users, so each pair is aggregated into one email."],
        ["User1: 1 or User2 and User3: 2", "This assumes no further email once a user has reached the level. ID Protection sends another email whenever a later detection is recalculated at the configured level or higher."]
      ],
      concept: "Users at risk detected emails are sent for each detection that brings or keeps a user at the configured risk level, throttled to one email per 5 seconds, with users in the same window aggregated.",
      takeaway: "Count one email per qualifying detection, then merge the detections that fall within 5 seconds of the previous email.",
      refs: [["Microsoft Learn: Configure Microsoft Entra ID Protection notifications", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-notifications"]]
    }
  },
  {
    id: "Q322", source: 322, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement a data loss prevention (DLP) strategy by using Microsoft Purview.",
      "You need to recommend a classification method for a DLP condition. The classification method must automatically recognize document types based on existing documents in Microsoft SharePoint Online.",
      "What should you recommend?"
    ],
    options: [
      { key: "A", text: "sensitive information types (SITs)" },
      { key: "B", text: "sensitivity labels" },
      { key: "C", text: "trainable classifiers" },
      { key: "D", text: "exact data match (EDM) classifiers" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "A trainable classifier recognizes a kind of document, such as contracts, resumes or invoices, by learning from examples instead of matching a pattern. Microsoft provides pretrained classifiers, and you can create a custom one by giving it seed content: sample documents stored in a SharePoint Online folder. After it has been trained and tested, the classifier can be used as a condition in a DLP policy (content contains a trainable classifier), and also in auto-labeling and retention policies.",
        "The requirement, recognizing document types automatically based on existing documents in SharePoint Online, describes exactly this machine-learning approach."
      ],
      wrong: [
        ["A", "Sensitive information types detect specific data in content, such as credit card numbers, through regular expressions, keywords and checksums. They find data patterns, not categories of documents learned from examples."],
        ["B", "A sensitivity label is the result of classification. It can be used as a DLP condition once applied, but the label does not recognize document types by itself; a user or an auto-labeling rule has to apply it."],
        ["D", "Exact data match classifiers compare content with the exact values of a sensitive information source table that you upload, such as customer records. They find known values, not types of documents."]
      ],
      concept: "Trainable classifiers use machine learning on sample items to recognize categories of content.",
      takeaway: "A kind of document learned from examples: trainable classifier. A data pattern: SIT. Exact values from your own records: EDM.",
      refs: [
        ["Microsoft Learn: Learn about trainable classifiers", "https://learn.microsoft.com/purview/trainable-classifiers-learn-about"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q323", source: 323, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Endpoint.",
      "You integrate Microsoft Defender for Endpoint with Microsoft Intune.",
      "From Microsoft Defender Vulnerability Management, you review the top security recommendations and discover a recommendation to update Microsoft Edge (Chromium) to a later version.",
      "You need to ensure that a security task is added to Intune to address the recommendation.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the Microsoft Intune admin center, configure Windows Autopatch." },
      { key: "B", text: "From the Microsoft Intune admin center, configure a security baseline." },
      { key: "C", text: "From the Microsoft Defender portal, select Request remediation." },
      { key: "D", text: "From the Microsoft Defender portal add an incident notification rule." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Defender Vulnerability Management hands its findings to IT through the remediation request workflow. On the Recommendations page you select the recommendation, here the update of Microsoft Edge, and choose **Request remediation**. The form asks what to remediate, whether to open a ticket in Intune, the priority and a due date.",
        "When the **Microsoft Intune connection** is turned on in the advanced features of Defender for Endpoint, which is the integration the stem describes, submitting the request creates a security task in Intune. The Intune administrator then approves or rejects the task and deploys the update, and the progress is tracked on the Remediation page in the Defender portal."
      ],
      wrong: [
        ["A", "Windows Autopatch automates the update process for Windows, Microsoft 365 Apps, Edge and Teams. It does not create an Intune security task linked to a Defender recommendation."],
        ["B", "A security baseline is a preconfigured group of Windows settings deployed from Intune. It neither updates Edge nor creates a security task from a recommendation."],
        ["D", "An incident notification rule emails recipients when incidents are created or updated. Security recommendations are not incidents."]
      ],
      concept: "Remediation requests from Defender Vulnerability Management become security tasks in Intune when the Intune connection is enabled.",
      takeaway: "Recommendation to Intune: Request remediation, with the Microsoft Intune connection turned on.",
      refs: [
        ["Microsoft Learn: Remediate vulnerabilities with Microsoft Defender Vulnerability Management", "https://learn.microsoft.com/defender-vulnerability-management/tvm-remediation"],
        ["Microsoft Learn: Security recommendations", "https://learn.microsoft.com/defender-vulnerability-management/tvm-security-recommendation"]
      ]
    }
  },
  {
    id: "Q324", source: 324, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have an Azure subscription.",
      "You have a Microsoft 365 E5 subscription.",
      "You are licensed to use Microsoft Defender XDR.",
      "You need to monitor activities from suspicious IP addresses and unusual administrative activities in Azure.",
      "What should you use to monitor the activities, and what should you use to integrate Azure with Microsoft Defender XDR? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Monitor:", options: ["Microsoft Defender for Cloud Apps", "Microsoft Defender for Endpoint", "Microsoft Defender for Identity"] },
      { id: "f2", label: "Integrate:", options: ["A data connector", "A directory services account", "An app connector"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "**Monitor: Microsoft Defender for Cloud Apps.** Once Azure is connected to Defender for Cloud Apps, it monitors the admin and sign-in activities in Azure. Its built-in anomaly detection policies for Azure include **Activity from suspicious IP addresses** and **Unusual administrative activities**, the two activities in the question, and the alerts appear in Microsoft Defender XDR alongside the alerts of the other Defender workloads.",
        "**Integrate: A data connector.** The reference answer is **A data connector**. What is true about the integration: Defender for Cloud Apps receives the Azure activity data through an API-based connection that you add in the Microsoft Defender portal under Settings > Cloud Apps > Connected apps, on the **App connectors** page (Connect an app > Microsoft Azure). It covers the Azure Resource Manager activities of all subscriptions and pulls data from the moment the connection is established. The key calls this connection that brings Azure's data into Defender for Cloud Apps, and through it into Defender XDR, a data connector."
      ],
      wrong: [
        ["Microsoft Defender for Endpoint", "Defender for Endpoint protects and monitors devices. It does not read management activity in Azure."],
        ["Microsoft Defender for Identity", "Defender for Identity monitors on-premises Active Directory through sensors on domain controllers (and AD FS or AD CS servers), not Azure activities."],
        ["A directory services account", "This is the Active Directory account that Defender for Identity uses to query on-premises Active Directory. It plays no part in connecting Azure."],
        ["An app connector", "Not the reference answer. The portal page where Azure is connected to Defender for Cloud Apps is named App connectors, so the term is close; the key gives A data connector for this connection."]
      ],
      concept: "Defender for Cloud Apps monitors Azure through an API connection and raises anomaly alerts, such as activity from suspicious IP addresses and unusual administrative activities, that surface in Defender XDR.",
      takeaway: "Suspicious IP addresses and unusual admin activity in Azure: Defender for Cloud Apps with Azure connected to it; this key names the connection A data connector.",
      refs: [
        ["Microsoft Learn: Protect your Azure environment with Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/protect-azure"],
        ["Microsoft Learn: Anomaly detection policies in Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/anomaly-detection-policy"]
      ]
    }
  },
  {
    id: "Q325", source: 325, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "The subscription contains users that have Windows 11 devices.",
      "You need to use the Cloud Discovery snapshot report to analyze cloud app usage on the devices.",
      "What should you do before generating a report?"
    ],
    options: [
      { key: "A", text: "Create an activity policy." },
      { key: "B", text: "Deploy the Azure Monitor Agent on the devices." },
      { key: "C", text: "Export traffic logs from firewalls and proxies." },
      { key: "D", text: "Create an app discovery policy." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Cloud Discovery analyzes traffic logs against the Defender for Cloud Apps catalog of cloud apps and scores each app on its risk factors. A **snapshot report** gives ad-hoc visibility on a set of traffic logs that you upload manually from your firewalls and proxies. So the step before generating it is to export the traffic logs from those appliances, in a supported format, and then upload them when you create the snapshot report.",
        "Continuous reports work differently: they analyze logs forwarded automatically, through the Defender for Endpoint integration, a log collector or a secure web gateway integration."
      ],
      wrong: [
        ["A", "An activity policy alerts on activities in apps that are connected through app connectors. It provides no traffic data for Cloud Discovery."],
        ["B", "The Azure Monitor Agent sends data from machines to Azure Monitor and Log Analytics. Cloud Discovery does not use it."],
        ["D", "An app discovery policy alerts when discovered apps match conditions, for example a new risky app. It works on discovery data that must already exist and does not supply the logs."]
      ],
      concept: "Snapshot reports are built from traffic logs exported from firewalls and proxies and uploaded manually; continuous reports use automatic sources.",
      takeaway: "Snapshot report: export the firewall and proxy logs first, then upload them.",
      refs: [
        ["Microsoft Learn: Cloud app discovery overview", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"],
        ["Microsoft Learn: Create snapshot Cloud Discovery reports", "https://learn.microsoft.com/defender-cloud-apps/create-snapshot-cloud-discovery-reports"]
      ]
    }
  },
  {
    id: "Q326", source: 326, type: "order",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You need to configure Cloud Discovery to generate a report that identifies top potential risks and provides a workflow to mitigate and manage the risks.",
      "Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
    ],
    sourceLabel: "Actions",
    items: [
      "Export network traffic logs from firewall and proxy devices.",
      "Generate a Cloud Discovery snapshot report.",
      "Configure automatic log upload.",
      "Generate a Cloud Discovery executive report.",
      "Export a list of discovered apps."
    ],
    answer: [0, 1, 2],
    explanation: {
      correct: [
        "Every Cloud Discovery report is built from traffic logs: the logs are uploaded, parsed, analyzed against the cloud app catalog, where each app is scored on more than 90 risk factors, and turned into a risk assessment. The reference sequence starts by exporting the traffic logs from the firewall and proxy devices. Uploading them generates a **snapshot report**, an ad-hoc view of the apps found in those logs with their risk scores. Then **automatic log upload** is configured, a log collector that receives the logs over Syslog or FTP, so that continuous reports keep the discovery data current instead of depending on one manual upload.",
        "The reference answer is this sequence: export the logs, generate a snapshot report, configure automatic log upload. What is true around it: the report that Microsoft describes as identifying the top potential risks and helping you plan a workflow to mitigate and manage them is the **Cloud Discovery executive report**, which is generated from the Cloud Discovery page (Actions > Generate Cloud Discovery executive report) out of the discovery data that these steps put in place."
      ],
      wrong: [
        ["Generate a Cloud Discovery executive report.", "Not part of the reference sequence. The executive report is a summary generated from the Cloud Discovery page once discovery data exists; the reference answer covers getting the log data in, first as a snapshot and then continuously."],
        ["Export a list of discovered apps.", "This exports the Discovered apps table, an output of Cloud Discovery. It does not configure anything."],
        ["Automatic log upload first", "The snapshot report is the one-time, manual upload of the exported logs. Automatic upload is what replaces those manual uploads afterward, so it comes last."]
      ],
      concept: "Cloud Discovery reports come from traffic logs, uploaded manually for snapshot reports and automatically for continuous reports.",
      takeaway: "For this key: export the logs, generate a snapshot report, configure automatic log upload. The top-risks summary itself is the executive report.",
      refs: [
        ["Microsoft Learn: Cloud app discovery overview", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"],
        ["Microsoft Learn: View discovered apps on the Cloud discovery dashboard", "https://learn.microsoft.com/defender-cloud-apps/discovered-apps"],
        ["Microsoft Learn: Configure automatic log upload for continuous reports", "https://learn.microsoft.com/defender-cloud-apps/discovery-docker"]
      ]
    }
  },
  {
    id: "Q327", source: 327, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You need to create a file policy named Policy1 that meets the following requirements:",
      { list: [
        "Inspects files in connected software as a service (SaaS) apps",
        "Inspects protected files"
      ] },
      "Which two settings should you configure? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point.",
      { note: "The answer area lists the settings under three headings: Information Protection (Admin quarantine, Microsoft Information Protection, Azure security, Files), Conditional Access App Control (General Settings, User monitoring, Device identification, App onboarding/maintenance, Edge for Business protection) and App governance (Service status)." }
    ],
    fields: [
      { id: "f1", label: "Inspects files in connected software as a service (SaaS) apps", options: ["Admin quarantine", "Microsoft Information Protection", "Azure security", "Files", "General Settings", "User monitoring", "Device identification", "App onboarding/maintenance", "Edge for Business protection", "Service status"] },
      { id: "f2", label: "Inspects protected files", options: ["Admin quarantine", "Microsoft Information Protection", "Azure security", "Files", "General Settings", "User monitoring", "Device identification", "App onboarding/maintenance", "Edge for Business protection", "Service status"] }
    ],
    answer: { f1: 3, f2: 1 },
    explanation: {
      correct: [
        "Both settings are in the Microsoft Defender portal under Settings > Cloud Apps > **Information Protection**. **Files** holds **Enable file monitoring**. A file policy inspects the files in connected SaaS apps through their app connectors, and Defender for Cloud Apps scans those files only while file monitoring is on. File monitoring is turned off automatically when no file policy exists or the policies are disabled for seven consecutive days.",
        "**Microsoft Information Protection** holds **Inspect protected files**. Files encrypted with Microsoft Purview sensitivity labels cannot be read until a Global Administrator selects **Grant permission**, a one-time admin consent that provisions the Microsoft Cloud App Security (Internal) app with the Azure Rights Management Content.SuperUser permission. A file policy that uses the Data Classification Service inspection method can then select **Inspect protected files**."
      ],
      wrong: [
        ["Admin quarantine", "This sets the location where files go when the Put in admin quarantine governance action is applied. It does not turn on inspection."],
        ["Azure security", "This setting does not turn on file scanning in connected SaaS apps or the inspection of protected files."],
        ["General Settings, User monitoring, Device identification, App onboarding/maintenance, Edge for Business protection", "These configure Conditional Access App Control, the reverse proxy behind real-time access and session policies. File policies are API based and do not depend on them."],
        ["Service status", "This belongs to app governance, which monitors OAuth apps, not files."]
      ],
      concept: "File policies need file monitoring to be on, and inspecting encrypted files needs Defender for Cloud Apps to be granted permission in the Microsoft Information Protection settings.",
      takeaway: "Scan files in connected apps: Information Protection > Files. Inspect protected files: Information Protection > Microsoft Information Protection, Grant permission.",
      refs: [
        ["Microsoft Learn: DLP content inspection in Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/content-inspection"],
        ["Microsoft Learn: File policies in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/data-protection-policies"],
        ["Microsoft Learn: Integrate Microsoft Purview sensitivity labels with Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/azip-integration"]
      ]
    }
  },
  {
    id: "Q328", source: 328, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to create an anti-malware policy named Policy1.",
      "You need to ensure that Policy1 can detect malicious email messages that were already delivered to a user's mailbox.",
      "What should you do in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Enable zero-hour auto purge (ZAP)." },
      { key: "B", text: "Enable enhanced filtering." },
      { key: "C", text: "Configure a quarantine policy." },
      { key: "D", text: "Modify the common attachments filter." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Zero-hour auto purge (ZAP) acts after delivery. Filters and threat intelligence keep being updated, and when a message that is already in an Exchange Online mailbox is later identified as malware, ZAP moves it to quarantine, whether or not it has been read.",
        "In an anti-malware policy, ZAP for malware is one of the protection settings (**Enable zero-hour auto purge for malware**), and it is on by default. Making sure it is enabled in Policy1 is what lets the policy deal with malicious messages that were already delivered."
      ],
      wrong: [
        ["B", "Enhanced Filtering for Connectors is used when mail passes through another service or device before Microsoft 365, so that the original source IP address is evaluated. It is set on an inbound connector, not in an anti-malware policy, and it does not act on delivered messages."],
        ["C", "A quarantine policy defines what users can do with their quarantined messages and whether they get quarantine notifications. It decides how quarantine is handled, not whether delivered messages are detected."],
        ["D", "The common attachments filter blocks attachments by file type when the message is scanned. It does not look at messages already in the mailbox."]
      ],
      concept: "ZAP retroactively detects and quarantines malicious messages that were already delivered to mailboxes.",
      takeaway: "Already delivered and found malicious later: zero-hour auto purge.",
      refs: [
        ["Microsoft Learn: Zero-hour auto purge in Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/zero-hour-auto-purge"],
        ["Microsoft Learn: Configure anti-malware policies", "https://learn.microsoft.com/defender-office-365/anti-malware-policies-configure"]
      ]
    }
  },
  {
    id: "Q329", source: 329, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to use Microsoft Defender for Cloud Apps to monitor user mailbox activities.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Create an activity policy." },
      { key: "B", text: "Create an access policy." },
      { key: "C", text: "Enable mailbox audit logging." },
      { key: "D", text: "Create an app connector for Microsoft 365." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Defender for Cloud Apps gets activity data from cloud apps through **app connectors**, which use the provider's APIs. The Microsoft 365 app connector (Settings > Cloud Apps > Connected apps > App connectors > Connect an app > Microsoft 365) integrates Defender for Cloud Apps with the Microsoft 365 audit log, so it receives the audited events of the supported services, Exchange Online included.",
        "Once the connector is in place, mailbox activities appear in the activity log of Defender for Cloud Apps, where you can investigate them and use them in policies and anomaly detections such as suspicious inbox forwarding."
      ],
      wrong: [
        ["A", "An activity policy evaluates activities that Defender for Cloud Apps already receives. Without the Microsoft 365 connector there are no mailbox activities to evaluate."],
        ["B", "An access policy is a Conditional Access App Control policy that allows or blocks sign-ins to apps in real time through the proxy. It does not collect mailbox activity."],
        ["C", "Mailbox auditing records mailbox actions in the Microsoft 365 audit log and is on by default in Exchange Online. It is a prerequisite, but Defender for Cloud Apps sees those records only after Microsoft 365 is connected."]
      ],
      concept: "Defender for Cloud Apps monitors activities in a cloud app only after the app is connected through an app connector.",
      takeaway: "Monitor Microsoft 365 activity in Defender for Cloud Apps: connect the Microsoft 365 app connector first; policies come after.",
      refs: [["Microsoft Learn: Protect your Microsoft 365 environment with Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/connect-office-365"]]
    }
  },
  {
    id: "Q330", source: 330, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1. User1 has a Windows 11 device named Device1 that is onboarded to Microsoft Defender for Endpoint.",
      "User1 reports that various files were deleted from Device1.",
      "You need to create a filter to identify which service deleted the files.",
      "Which settings should you configure, and which type of filter should you create in the Microsoft Defender portal? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Settings:", options: ["Devices", "Identities", "Threat analytics"] },
      { id: "f2", label: "Filter type:", options: ["Activity log for User1", "Attack surfaces", "Timeline for Device1"] }
    ],
    answer: { f1: 0, f2: 2 },
    explanation: {
      correct: [
        "The Defender for Endpoint sensor on Device1 records file events, including file deletions, together with the initiating process: the process name, its command line and the account it ran under. These events belong to the device, so the investigation starts from **Devices** (Assets > Devices, the device inventory) in the Microsoft Defender portal.",
        "On the page of Device1, the **Timeline** tab shows the events observed on the device in chronological order. You can narrow it with filters and the date range, search for the deleted files, and select an event to see its details and process tree, which identifies the service or process that deleted the files."
      ],
      wrong: [
        ["Identities", "The Identities page covers user accounts. File deletions and the process behind them are recorded on the device, and the deletion was not necessarily done by User1."],
        ["Threat analytics", "Threat analytics holds Microsoft's reports on threats and campaigns and their impact on your organization. It does not list the events of a device."],
        ["Activity log for User1", "A user's activity log shows that user's activities, such as sign-ins and cloud app actions. It does not show which process or service deleted files on Device1."],
        ["Attack surfaces", "Attack surface views describe exposure and hardening. They are not a filter on the events of one device."]
      ],
      concept: "The device timeline in Defender for Endpoint records file, process and network events on a device, with the initiating process of each event.",
      takeaway: "What did something on one device: Devices > the device > Timeline, then filter and search.",
      refs: [["Microsoft Learn: Investigate devices in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/investigate-machines"]]
    }
  },
  {
    id: "Q331", source: 331, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that includes Microsoft Intune and Microsoft Defender XDR.",
      "All users have devices that run Windows 11.",
      "From the Microsoft Defender portal, you review the Microsoft Secure Score recommendations. One of the top recommendations is to block all Microsoft Office applications from creating child processes.",
      "You need to increase the secure score by addressing the recommendation.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Select Safe Documents for Office clients." },
      { key: "B", text: "Create a policy for Office applications." },
      { key: "C", text: "Configure an endpoint detection and response (EDR) policy." },
      { key: "D", text: "Create an attack surface reduction (ASR) policy." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "**Block all Office applications from creating child processes** is one of the attack surface reduction rules of Microsoft Defender for Endpoint. It stops Word, Excel, PowerPoint and the other Office apps from starting child processes, a common way for malicious macros and exploits to run their payload.",
        "With Intune, the rule is deployed through an **attack surface reduction policy** (Endpoint security > Attack surface reduction, profile Attack Surface Reduction Rules) in which the rule is set to Block. Once the devices apply the rule, Secure Score recognizes the recommendation as addressed and the score increases."
      ],
      wrong: [
        ["A", "Safe Documents opens files from Protected View only after Defender for Endpoint has scanned them. It does not control which processes Office apps can start."],
        ["B", "Office policies set Office application settings, such as macro behavior. The recommendation is an attack surface reduction rule enforced by Microsoft Defender Antivirus, which an Office policy does not configure."],
        ["C", "An EDR policy onboards devices to Defender for Endpoint and sets options such as sample sharing. It does not configure attack surface reduction rules."]
      ],
      concept: "Secure Score recommendations about Office child processes, scripts and similar behaviors are attack surface reduction rules, deployed with an ASR policy.",
      takeaway: "Office apps creating child processes: an ASR rule, set to Block in an Intune attack surface reduction policy.",
      refs: [
        ["Microsoft Learn: Attack surface reduction rules reference", "https://learn.microsoft.com/defender-endpoint/attack-surface-reduction-rules-reference"],
        ["Microsoft Learn: Enable attack surface reduction rules", "https://learn.microsoft.com/defender-endpoint/enable-attack-surface-reduction"]
      ]
    }
  },
  {
    id: "Q332", source: 332, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Office 365.",
      "You need to implement a social engineering awareness solution that meets the following requirements:",
      { list: [
        "To reset a user's password, emulate an email message that contains a link.",
        "Track any users that selects the email message link.",
        "Suggest further social engineering training."
      ] },
      "What should you use in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Exposure insights" },
      { key: "B", text: "Learning hub" },
      { key: "C", text: "Attack simulation training" },
      { key: "D", text: "Threat tracker" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "**Attack simulation training** in Defender for Office 365 Plan 2 (included in Microsoft 365 E5) runs realistic phishing simulations against your users. A simulation uses a social engineering technique, such as Credential Harvest for a message that asks users to reset their password through a link, and a payload that contains the link.",
        "The simulation reports which users clicked the link or entered credentials, and the simulation can assign training to the targeted users. That covers all three requirements: emulate the message, track the clicks and assign further training."
      ],
      wrong: [
        ["A", "Exposure insights belong to Microsoft Security Exposure Management and show posture metrics, initiatives and recommendations. They do not send simulated phishing messages."],
        ["B", "The Learning hub is a library of learning resources for security professionals. It does not send messages to users or track their clicks."],
        ["D", "Threat Trackers are widgets and saved queries that show cybersecurity issues and campaigns affecting the organization. They do not simulate attacks."]
      ],
      concept: "Attack simulation training combines simulated phishing, tracking of user responses and assignment of training.",
      takeaway: "Simulated phishing email, track who clicks, assign training: Attack simulation training.",
      refs: [["Microsoft Learn: Get started using Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-get-started"]]
    }
  },
  {
    id: "Q333", source: 333, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Office 365.",
      "You are configuring Attack simulation training that will target all users and use the Credential Harvest social engineering technique.",
      "You need to ensure that the simulation sends an email message that contains a custom phishing link and company-based terminology and branding.",
      "How should you configure the simulation?"
    ],
    options: [
      { key: "A", text: "Create a Tenant payload." },
      { key: "B", text: "Select a Global payload." },
      { key: "C", text: "Select custom end-user notifications." },
      { key: "D", text: "Create a tenant landing page." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "In Attack simulation training, the **payload** is the simulated phishing message with its link, QR code or attachment. **Tenant payloads** are the custom payloads you create yourself, in Content library > Payloads or while you create the simulation.",
        "When you create a Credential Harvest payload you write the sender details, the subject and the message body, so you can use your company's own terminology and branding, select the phishing URL and set the link text that points to it, and add indicators that teach users the signs of phishing."
      ],
      wrong: [
        ["B", "Global payloads are Microsoft's built-in payloads and cannot be modified. Copying one to change it produces a tenant payload."],
        ["C", "End-user notifications are the messages sent to users about the simulation and their training, such as positive reinforcement or training reminders. They are not the phishing message."],
        ["D", "A landing page is what users see after they select the phishing link. It does not change the content of the email message."]
      ],
      concept: "The content of a simulated phishing email is its payload: built-in global payloads, or tenant payloads that you create.",
      takeaway: "Your own link text, wording and branding in the simulated email: create a tenant payload.",
      refs: [["Microsoft Learn: Payloads in Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-payloads"]]
    }
  },
  {
    id: "Q334", source: 334, type: "yesno",
    domain: "identity", topic: "Identity Protection", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: {
        head: ["Name", "Role"],
        rows: [
          ["Admin1", "Password Administrator"],
          ["Admin2", "Security Reader"],
          ["Admin3", "User Administrator"],
          ["User1", "None"]
        ]
      } },
      "You use Microsoft Entra ID Protection.",
      "For the Users at risk detected alerts setting, you configure the following:",
      { list: [
        "Recipient: Admin1",
        "Alert on user risk level at or above: Medium"
      ] },
      "User1 signs in to Microsoft 365 services and is assigned the detected risk levels shown in the following table.",
      { table: {
        head: ["Time", "Detected risk level"],
        rows: [
          ["1:00 PM", "Low"],
          ["2:00 PM", "Medium"],
          ["3:00 PM", "Medium"],
          ["4:00 PM", "High"]
        ]
      } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "By the end of the day, Admin1 has received two email alerts." },
      { text: "By the end of the day, Admin2 has received three email alerts." },
      { text: "By the end of the day, Admin3 has received three email alerts." }
    ],
    answer: [false, false, false],
    explanation: {
      correct: [
        "The **Users at risk detected** email is generated when the user's risk level reaches the configured level, Medium here, and another email is sent each time a later detection is recalculated at that level or higher. User1's day: 1:00 PM Low is below Medium and sends nothing. 2:00 PM Medium sends the first email. 3:00 PM Medium keeps User1 at the configured level after recalculation and sends a second email. 4:00 PM High sends the third. The detections are an hour apart, so the 5-second rule plays no part. Three emails are sent.",
        "**Statement 1 — No.** Admin1 is the configured recipient and receives the emails of 2:00, 3:00 and 4:00 PM: three, not two.",
        "**Statement 2 — No.** The reference answer is No. ID Protection adds the users who hold the Global Administrator, Security Administrator or Security Reader role to the recipient list by default, so as a Security Reader Admin2 would be on the list unless it was changed. The key reads the configuration \"Recipient: Admin1\" as the complete recipient list; Admin2 is then not a recipient and receives no email.",
        "**Statement 3 — No.** Admin3 holds User Administrator, which is not one of the roles added to the recipient list automatically, and Admin3 is not the configured recipient. Admin3 receives no email."
      ],
      wrong: [
        ["Statement 1 — Yes", "Tempting if you count only the changes of level, to Medium at 2:00 PM and to High at 4:00 PM. The Medium detection at 3:00 PM is recalculated at the configured level too and sends its own email."],
        ["Statement 2 — Yes", "Three is the number of emails sent during the day, but the key treats Admin1 as the only recipient, so Admin2 receives none of them."],
        ["Statement 3 — Yes", "User Administrator is not a role that receives ID Protection alerts by default, and Admin3 was not added as a recipient."]
      ],
      concept: "Users at risk detected emails go to the configured recipients each time a detection brings or keeps a user at or above the configured risk level.",
      takeaway: "Count the detections at or above the threshold, including repeats at the same level, and check who is actually on the recipient list.",
      refs: [["Microsoft Learn: Configure Microsoft Entra ID Protection notifications", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-notifications"]]
    }
  },
  {
    id: "Q335", source: 335, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains Windows 11 devices.",
      "All the devices are onboarded to Microsoft Defender for Endpoint.",
      "You need to compare the configuration of the devices against industry standard benchmarks.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Initiatives" },
      { key: "B", text: "Events" },
      { key: "C", text: "Security baselines assessment" },
      { key: "D", text: "Attack surface map" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "**Security baselines assessment** in Microsoft Defender Vulnerability Management continuously checks the configuration of onboarded devices against industry security benchmarks. You create a baseline profile, choose the operating system, the benchmark (such as CIS or STIG, or Microsoft's own) and the compliance level, and the assessment then shows, for each device and each setting, whether the configuration complies with the benchmark."
      ],
      wrong: [
        ["A", "Initiatives in Microsoft Security Exposure Management group metrics and recommendations around a security goal, such as ransomware protection, and track progress. They are not a benchmark comparison of device settings."],
        ["B", "The event timeline of vulnerability management lists events that change your exposure, such as new vulnerabilities or exploits. It does not compare configurations with a benchmark."],
        ["D", "The attack surface map in Exposure Management is a graph of assets and their connections. It shows relationships, not benchmark compliance."]
      ],
      concept: "Security baselines assessment measures device configuration against benchmarks such as CIS and STIG.",
      takeaway: "Compare device settings with CIS or STIG benchmarks: security baselines assessment.",
      refs: [["Microsoft Learn: Security baselines assessment", "https://learn.microsoft.com/defender-vulnerability-management/tvm-security-baselines"]]
    }
  },
  {
    id: "Q336", source: 336, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Endpoint.",
      "Defender for Endpoint has tamper protection enabled.",
      "You have a device named Device1 that is onboarded to Defender for Endpoint.",
      "You need to configure antivirus and real-time protection for Device1.",
      "What should you do in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Initiate a live response session." },
      { key: "B", text: "Create a device group." },
      { key: "C", text: "Enable troubleshooting mode." },
      { key: "D", text: "Isolate Device1." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Tamper protection locks the security settings of Microsoft Defender Antivirus, real-time protection among them, so they cannot be changed on the device. **Troubleshooting mode** lifts that lock temporarily. You turn it on from the device page of Device1 in the Microsoft Defender portal (More options > Turn on troubleshooting mode), and while it is active, local administrators can change the policy-managed antivirus settings, including tamper protection itself, for example with `Set-MpPreference`.",
        "Troubleshooting mode turns off automatically after four hours. The settings then become read-only again and revert to their previous, policy-managed values."
      ],
      wrong: [
        ["A", "A live response session gives a remote shell on the device for investigation and response. It does not lift tamper protection, so the protected antivirus settings still cannot be changed."],
        ["B", "A device group organizes devices for access control, automated remediation levels and filtering. It does not unlock settings that tamper protection protects."],
        ["D", "Isolation cuts the device off the network except for the Defender for Endpoint service. It is a containment action, not a way to change settings."]
      ],
      concept: "Troubleshooting mode temporarily allows changes to Defender Antivirus settings that tamper protection and policy normally lock.",
      takeaway: "Tamper protection on and you need to change antivirus settings on one device: turn on troubleshooting mode.",
      refs: [
        ["Microsoft Learn: Enable and use troubleshooting mode in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/troubleshooting-mode-enable"],
        ["Microsoft Learn: Tamper protection overview", "https://learn.microsoft.com/defender-endpoint/tamper-protection-overview"]
      ]
    }
  }
);
