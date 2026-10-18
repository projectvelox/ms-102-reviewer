/* MS-102 question bank, part 14: questions 209 to 224 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q209", source: 209, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "From the Microsoft Purview compliance portal, you create a new data loss prevention (DLP) policy named DLP1 that protects financial data from being shared by using Microsoft Teams messages. You apply DLP1 to the users in the finance department.",
      "An incident is raised when a finance department user named User1 shares financial data in a Teams channel that includes external members.",
      "When User1 uses Teams to send the same message in a 1:1 chat or a private channel, the message is blocked as expected.",
      "You need to ensure that User1 is prevented from sharing financial data in Teams channels that include external members.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Edit the settings of the team that contains the channel." },
      { key: "B", text: "Edit the Locations settings of DLP1." },
      { key: "C", text: "Modify the licenses assigned to User1." },
      { key: "D", text: "Edit the policy rules of DLP1." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "DLP1 already reaches User1 in Teams. The same message is blocked in a 1:1 chat and in a private channel, and in the channel with external members it raised an incident, which means DLP1 evaluated that message too and detected the financial data. The location and the user scope are therefore working. What is missing is the block in this one case, and what a policy does when content matches is decided by its rules: each rule holds the conditions, the actions, the user notifications and the incident reports.",
        "A rule can, for example, be limited by the condition **Content is shared from Microsoft 365** (only with people inside the organization, or with people outside it), and the action **Restrict access or encrypt the content in Microsoft 365 locations** can block everyone or only people outside the organization. Editing the rules of DLP1 so that the blocking action also applies when the content is shared in a channel that includes external members closes the gap."
      ],
      wrong: [
        ["A", "Team settings control things such as member and guest permissions and channel options. Whether a message with financial data is blocked is decided by the DLP policy in Microsoft Purview, not by the team."],
        ["B", "The Teams chat and channel messages location is already in DLP1 and includes User1: chat and private channel messages are blocked, and the channel message was detected and raised an incident. Changing the locations does not change what the matching rule does."],
        ["C", "User1's licensing already supports DLP in Teams, because the same policy blocks User1's messages in chats and private channels. The gap is in the policy's response, not in licensing."]
      ],
      concept: "A DLP policy's locations and scope decide where it looks; its rules decide what it detects and what happens on a match (conditions, actions, notifications, incident reports).",
      takeaway: "Content is detected (an incident is raised) but not blocked in one situation: change the rules. Content is never evaluated in a location: change the locations.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Data loss prevention and Microsoft Teams", "https://learn.microsoft.com/purview/dlp-microsoft-teams"]
      ]
    }
  },
  {
    id: "Q210", source: 210, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to create a data loss prevention (DLP) policy that is configured to use the Set headers action.",
      "To which location can the policy be applied?"
    ],
    options: [
      { key: "A", text: "Exchange email" },
      { key: "B", text: "OneDrive accounts" },
      { key: "C", text: "SharePoint sites" },
      { key: "D", text: "Teams chat and channel messages" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The actions available in a DLP rule depend on the locations of the policy. **Set headers** adds a header with a name and value to a message that matches the rule, so that mail flow rules or other systems can act on it later. Only an email message has message headers, and the DLP policy reference lists Set headers among the actions supported for the Exchange location only, together with other email-only actions such as changing the subject or adding a disclaimer.",
        "A policy that uses Set headers can therefore be applied to Exchange email."
      ],
      wrong: [
        ["B", "Files in OneDrive have no message headers. The actions for OneDrive are about the file, such as restricting access to it."],
        ["C", "SharePoint files have no message headers either. SharePoint rules use actions such as restricting access to the file."],
        ["D", "Teams messages are not email messages with headers. Teams rules can block a message or show a policy tip, not set a header."]
      ],
      concept: "Each DLP location supports its own set of conditions and actions; the header actions exist only for Exchange email.",
      takeaway: "Anything about message headers, subjects or disclaimers in a DLP rule means the Exchange email location.",
      refs: [["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"]]
    }
  },
  {
    id: "Q211", source: 211, type: "yesno",
    domain: "compliance", topic: "Compliance roles and Compliance Manager", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of Microsoft 365 role group"], rows: [
        ["Admin1", "Content Explorer List Viewer\nContent Explorer Content Viewer"],
        ["Admin2", "Security Administrator\nContent Explorer List Viewer"]
      ] } },
      "You have labels in Microsoft 365 as shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Label1", "Sensitivity"],
        ["Label2", "Retention"]
      ] } },
      "The content in Microsoft 365 is assigned labels as shown in the following table.",
      { table: { head: ["Name", "Type", "Label"], rows: [
        ["File1", "File in SharePoint", "Label1"],
        ["Mail1", "Email message in Exchange Online", "Label2"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Admin1 can view the contents of File1 by using Content explorer." },
      { text: "Admin2 can view the contents of File1 by using Content explorer." },
      { text: "Admin2 can use Content explorer to verify that Label2 is assigned to Mail1." }
    ],
    answer: [true, false, true],
    explanation: {
      correct: [
        "Content explorer shows the items that have a sensitivity label, a retention label or a sensitive information type, across Exchange, SharePoint, OneDrive and Teams. Access to its data is split between two independent role groups: **Content Explorer List Viewer** lets a member see each item and its location in the list, and **Content Explorer Content Viewer** lets a member view the contents of each item. Seeing the list does not include reading the contents.",
        "Admin1 is a member of Content Explorer Content Viewer, so Admin1 can view the contents of File1 (Yes). Admin2 is a member of Security Administrator and Content Explorer List Viewer; neither includes the content viewer role, so Admin2 cannot view the contents of File1 (No). Checking which label an item carries is a list task: with List Viewer, Admin2 can open Label2 under the retention labels, drill into the Exchange location and see Mail1 among the labeled items, without opening the message (Yes).",
        "In the current portal, opening the content explorer page itself also requires a role such as Compliance Administrator, Security Administrator or Compliance Data Administrator. The statements test the difference between the two content explorer role groups."
      ],
      wrong: [
        ["Statement 1 — No", "Admin1 holds Content Explorer Content Viewer, the role group whose purpose is to show the contents of items in content explorer."],
        ["Statement 2 — Yes", "Security Administrator does not include the Data Classification Content Viewer role, and List Viewer shows items and locations only."],
        ["Statement 3 — No", "Confirming the label of an item does not require reading it. List Viewer shows the items under each label, which is enough to see that Mail1 has Label2."]
      ],
      concept: "Content explorer separates seeing the list of labeled items (List Viewer) from reading their contents (Content Viewer).",
      takeaway: "List Viewer: which items and where. Content Viewer: what is inside them.",
      refs: [
        ["Microsoft Learn: Get started with content explorer", "https://learn.microsoft.com/purview/data-classification-content-explorer"],
        ["Microsoft Learn: Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview", "https://learn.microsoft.com/defender-office-365/scc-permissions"]
      ]
    }
  },
  {
    id: "Q212", source: 212, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two users named User1@contoso.com and User2@contoso.com and a Microsoft SharePoint site named Site1.",
      "You create a data loss prevention (DLP) policy named DLP1 that has the advanced DLP rules shown in the following table.",
      { table: { head: ["Name", "Content contains", "User notifications", "Priority"], rows: [
        ["Rule1", "4 or more IP addresses", "User1@contoso.com", "0"],
        ["Rule2", "2 or more IP addresses", "User1@contoso.com", "1"],
        ["Rule3", "3 or more IP addresses", "User2@contoso.com", "2"]
      ] } },
      "DLP1 is applied to Site1.",
      "You have the files shown in the following table.",
      { table: { head: ["Name", "Number of IP addresses in the file"], rows: [
        ["File1.xlsx", "2"],
        ["File2.doc", "3"],
        ["File3.pptx", "4"],
        ["File4.txt", "6"]
      ], numeric: [1] } },
      "You copy the files to Site1.",
      "How many notifications will each user receive? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1@contoso.com:", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
      { id: "f2", label: "User2@contoso.com:", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] }
    ],
    answer: { f1: 3, f2: 0 },
    explanation: {
      correct: [
        "The reference answer is 3 for User1@contoso.com and 0 for User2@contoso.com. The rules of a DLP policy are evaluated in priority order, and priority 0 is evaluated first. When an item matches several rules, only one rule is applied: the first rule evaluated that has the most restrictive action. The other matches are recorded in the audit log and the DLP reports, but their actions, including their user notifications, are not applied. All three rules here only notify, so for each file the rule applied is the matching rule with the highest priority.",
        "File1.xlsx (2 IP addresses) matches only Rule2, which notifies User1@contoso.com. File2.doc (3) matches Rule2 and Rule3; Rule2 has priority 1 and is applied, so User1@contoso.com is notified again. File3.pptx (4) matches all three rules; Rule1 has priority 0 and notifies User1@contoso.com. Rule3 is never the rule applied, because every file with three or more IP addresses also matches Rule2, which is evaluated before it. User2@contoso.com, who is notified only by Rule3, receives nothing.",
        "The reference explanation treats File4.txt as outside the scope of DLP1 and does not count it, which gives three notifications for User1@contoso.com."
      ],
      wrong: [
        ["User1@contoso.com — 4", "This also counts File4.txt. The reference answer leaves the .txt file out and counts the three Office files."],
        ["User1@contoso.com — 5 or more", "This counts every rule match separately, for example three for File3.pptx. Only one rule is applied to each item."],
        ["User2@contoso.com — 1 or more", "Only Rule3 notifies User2@contoso.com, and Rule3 is never applied: every file it matches also matches Rule2, which has a higher priority and the same kind of action."]
      ],
      concept: "When an item matches several DLP rules, only the highest-priority rule with the most restrictive action is applied; the other rules are evaluated and logged but take no action.",
      takeaway: "Sort the matching rules by priority (0 first). A lower-priority rule whose matches are all covered by a higher-priority rule with the same actions never fires.",
      refs: [["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"]]
    }
  },
  {
    id: "Q213", source: 213, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You need to notify the manager of the human resources department when a user in the department shares a file or folder from the department's Microsoft SharePoint site.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the SharePoint admin center, modify the sharing settings." },
      { key: "B", text: "From the SharePoint site, create an alert." },
      { key: "C", text: "From the Microsoft Purview compliance portal, create a data loss prevention (DLP) policy." },
      { key: "D", text: "From the Microsoft 365 Defender portal, create an alert policy." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "An alert policy tracks an activity that users or admins perform, as recorded in the audit log, and raises an alert when the activity occurs. It can also send an email notification to a list of recipients. Sharing a file or folder in SharePoint is one of the activities an alert policy can track.",
        "A custom alert policy on the sharing activity, limited to the users of the human resources department and with the department manager as an email recipient, therefore notifies the manager each time someone in the department shares a file or folder. Alert policies are managed on the Alert policies page of the Microsoft 365 Defender portal."
      ],
      wrong: [
        ["A", "Sharing settings decide who can share and with whom, for example whether external sharing is allowed. They do not notify anyone when a share happens."],
        ["B", "A SharePoint alert sends email when items in a list or library are added, changed or deleted. It is about changes to content, not about who shares files and folders."],
        ["C", "A DLP policy acts when shared content matches its conditions, such as sensitive information types. It protects sensitive content; it is not built to report every share of any file or folder by a department."]
      ],
      concept: "Alert policies turn audited activities, such as sharing a file or folder, into alerts and email notifications.",
      takeaway: "To notify someone whenever a specific user activity happens, create an alert policy on that activity.",
      refs: [["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/alert-policies"]]
    }
  },
  {
    id: "Q214", source: 214, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.",
      "From Microsoft Defender for Endpoint, you turn on the Allow or block file advanced feature.",
      "You need to block users from downloading a file named File1.exe.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "a suppression rule" },
      { key: "B", text: "an indicator" },
      { key: "C", text: "a device configuration profile" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The **Allow or block file** advanced feature is what lets Defender for Endpoint enforce file indicators. A file indicator identifies a file by its hash and sets the action to take; with the block action, the file is prevented from being read, written or executed on the onboarded devices in the indicator's scope. File indicators support portable executable files such as `.exe` and `.dll`, so File1.exe can be blocked this way.",
        "You create the indicator in the Microsoft 365 Defender portal under Settings > Endpoints > Indicators > File hashes, or from the page of the file itself."
      ],
      wrong: [
        ["A", "A suppression rule hides or resolves alerts that match it. It reduces alert noise and does not block any file."],
        ["C", "A device configuration profile in Intune applies settings to devices. Blocking one specific file by its hash is done with an indicator in Defender for Endpoint."]
      ],
      concept: "Indicators of compromise (file hashes, IP addresses, URLs, domains, certificates) let you allow, warn on or block specific entities on Defender for Endpoint devices.",
      takeaway: "Block one known file across devices: turn on Allow or block file, then add a file hash indicator with the block action.",
      refs: [
        ["Microsoft Learn: Create indicators for files", "https://learn.microsoft.com/defender-endpoint/indicator-file"],
        ["Microsoft Learn: Overview of indicators in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/indicators-overview"]
      ]
    }
  },
  {
    id: "Q215", source: 215, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    stem: [
      "You have an Azure AD tenant that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["Admin1", "User Administrator"],
        ["Admin2", "Password Administrator"],
        ["Admin3", "Exchange Administrator"]
      ] } },
      "You need to compare the permissions of each role. The solution must minimize administrative effort.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Purview compliance portal" },
      { key: "B", text: "the Microsoft 365 admin center" },
      { key: "C", text: "the Microsoft 365 Defender portal" },
      { key: "D", text: "the Microsoft Entra admin center" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The reference answer is A, the Microsoft Purview compliance portal. Its permissions area (Roles and scopes in the Microsoft Purview portal) lists the role groups for the compliance solutions together with the roles each one contains, and it has a Microsoft Entra ID section that shows the Entra roles related to Purview and the users assigned to them.",
        "User Administrator, Password Administrator and Exchange Administrator are Microsoft Entra built-in roles. For admin roles like these, the Microsoft 365 admin center has a Role assignments page on which you can select up to three roles and compare their permissions side by side; this is the article the PDF cites as its reference."
      ],
      wrong: [
        ["B", "The Microsoft 365 admin center lists the admin roles on its Role assignments page and can compare up to three of them at a time. The reference answer for this question, however, is the Purview compliance portal."],
        ["C", "The Microsoft 365 Defender portal manages permissions for the Defender workloads, such as Defender XDR unified role-based access control. It is not the reference answer."],
        ["D", "The Microsoft Entra admin center shows each Entra role with its description and permissions, one role at a time. The reference answer is the Purview compliance portal."]
      ],
      concept: "Microsoft 365 permissions are managed in several places: Microsoft Entra roles in the Entra and Microsoft 365 admin centers, compliance role groups in the Purview portal, and Defender permissions in the Defender portal.",
      takeaway: "For this question, the reference answer is the Microsoft Purview compliance portal.",
      refs: [
        ["Microsoft Learn: About admin roles in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/add-users/admin-roles-page#compare-roles"],
        ["Microsoft Learn: Permissions in the Microsoft Purview portal", "https://learn.microsoft.com/purview/purview-permissions"]
      ]
    }
  },
  {
    id: "Q216", source: 216, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to create the data loss prevention (DLP) policies shown in the following table.",
      { table: { head: ["Name", "Apply to location"], rows: [
        ["DLP1", "Exchange email"],
        ["DLP2", "SharePoint sites"],
        ["DLP3", "OneDrive accounts"]
      ] } },
      "You need to create DLP rules for each policy.",
      "Which policies support the sender is condition and the file extension is condition? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Sender is condition:", options: ["DLP1 only", "DLP2 only", "DLP3 only", "DLP2 and DLP3 only", "DLP1, DLP2, and DLP3"] },
      { id: "f2", label: "File extension is condition:", options: ["DLP1 only", "DLP2 only", "DLP3 only", "DLP2 and DLP3 only", "DLP1, DLP2, and DLP3"] }
    ],
    answer: { f1: 0, f2: 4 },
    explanation: {
      correct: [
        "The conditions you can use in a DLP rule depend on the locations of the policy, and the DLP policy reference has a table of which location supports each condition. **Sender is** is supported only for Exchange email, because only an email message has a sender. Of the three policies, only DLP1, which applies to Exchange email, can use it.",
        "**File extension is** is supported for Exchange email, SharePoint sites and OneDrive accounts: in email it matches the extension of an attachment, and in SharePoint and OneDrive the extension of the file. DLP1, DLP2 and DLP3 can therefore all use it."
      ],
      wrong: [
        ["Sender is condition — DLP2 or DLP3", "Files in SharePoint sites and OneDrive accounts have no sender, so the condition is not available for those locations."],
        ["File extension is condition — DLP1 only", "The file extension condition is not limited to email. SharePoint and OneDrive policies can also match on the extension of a file."],
        ["File extension is condition — DLP2 and DLP3 only", "Exchange also supports the condition, for the extension of attachments."]
      ],
      concept: "Each DLP location supports its own subset of conditions; sender conditions are Exchange only, while the file extension condition works in Exchange, SharePoint and OneDrive.",
      takeaway: "Sender-based conditions: Exchange only. File extension: Exchange, SharePoint and OneDrive.",
      refs: [["Microsoft Learn: DLP platform limitations for conditions", "https://learn.microsoft.com/purview/dlp-policy-reference#dlp-platform-limitations-for-conditions"]]
    }
  },
  {
    id: "Q217", source: 217, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "You create a retention label named Retention1 that is published to all locations.",
      "You need to ensure that User1 can label email messages by using Retention1 as soon as possible.",
      "Which cmdlet should you run in Microsoft Exchange Online PowerShell?"
    ],
    options: [
      { key: "A", text: "`Start-ManagedFolderAssistant`" },
      { key: "B", text: "`Start-MpScan`" },
      { key: "C", text: "`Start-AppBackgroundTask`" },
      { key: "D", text: "`Start-Process`" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "In Exchange Online, published retention labels are made available to users by a mailbox process that runs every seven days, which is why labels published to Exchange can take up to seven days to appear in Outlook. That process is the Managed Folder Assistant, the mailbox assistant that applies retention settings.",
        "Running `Start-ManagedFolderAssistant -Identity User1` in Exchange Online PowerShell makes the assistant process User1's mailbox immediately instead of at its next scheduled run, so Retention1 becomes available to User1 for labeling email messages as soon as possible."
      ],
      wrong: [
        ["B", "`Start-MpScan` starts a Microsoft Defender Antivirus scan on a Windows computer. It has nothing to do with mailboxes or retention labels."],
        ["C", "`Start-AppBackgroundTask` starts a background task of a Windows app. It is not an Exchange Online cmdlet."],
        ["D", "`Start-Process` is a general PowerShell cmdlet that starts a program on the local computer. It does not trigger any processing of a mailbox."]
      ],
      concept: "The Managed Folder Assistant applies retention settings, including newly published retention labels, to Exchange Online mailboxes on a schedule.",
      takeaway: "Need a retention change in a mailbox now: `Start-ManagedFolderAssistant -Identity <user>`.",
      refs: [
        ["Microsoft Learn: Start-ManagedFolderAssistant", "https://learn.microsoft.com/powershell/module/exchange/start-managedfolderassistant"],
        ["Microsoft Learn: Publish and apply retention labels", "https://learn.microsoft.com/purview/create-apply-retention-labels"]
      ]
    }
  },
  {
    id: "Q218", source: 218, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You create an auto-labeling policy to encrypt emails that contain a sensitive info type. You specify the locations where the policy will be applied.",
      "You need to deploy the policy.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Run the policy in simulation mode." },
      { key: "B", text: "Configure Azure Information Protection analytics." },
      { key: "C", text: "Review the sensitive information in Activity explorer." },
      { key: "D", text: "Turn on the policy." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Simulation mode is part of the workflow of every auto-labeling policy for sensitivity labels. In simulation, the service finds the emails and documents that the policy would label and lists them for review, without applying any label. A policy can't automatically label documents and emails until it has run at least one simulation.",
        "After the policy and its locations are defined, the first step is therefore to run it in simulation mode. You then review the results, adjust the conditions if needed and run the simulation again, and finally turn the policy on so that it applies the label and its encryption."
      ],
      wrong: [
        ["B", "Azure Information Protection analytics was the Log Analytics based reporting of the classic Azure Information Protection client. It plays no part in deploying an auto-labeling policy."],
        ["C", "Activity explorer shows labeling and DLP activities after they happen. It is a monitoring view, not a step required by the auto-labeling workflow."],
        ["D", "Turning on the policy comes last. The policy can't label anything until it has run at least one simulation."]
      ],
      concept: "Auto-labeling policies run in simulation first, so you can check which items would be labeled before any label is applied.",
      takeaway: "Auto-labeling policy order: define, simulate, review, turn on.",
      refs: [["Microsoft Learn: Automatically apply a sensitivity label to Microsoft 365 data", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"]]
    }
  },
  {
    id: "Q219", source: 219, type: "dropdown",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "From the Microsoft Purview compliance portal, you create a retention policy named Policy1.",
      "You need to prevent all users from disabling the policy or reducing the retention period.",
      "How should you configure the Azure PowerShell command? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `{{f1}} -Identity "Policy1" {{f2}} $true`,
    fields: [
      { id: "f1", label: "Cmdlet", options: ["Set-ComplianceTag", "Set-HoldCompliancePolicy", "Set-RetentionCompliancePolicy", "Set-RetentionPolicy", "Set-RetentionPolicyTag"] },
      { id: "f2", label: "Parameter before $true", options: ["-enabled", "-Force", "-RestrictiveRetention", "-RetentionPolicyTagLinks", "-SystemTag"] }
    ],
    answer: { f1: 2, f2: 2 },
    explanation: {
      correct: [
        "Preventing anyone from disabling a retention policy or reducing its retention period is what Preservation Lock does, and it can only be set with PowerShell. Retention policies created in the compliance portal are modified with `Set-RetentionCompliancePolicy`, and setting `-RestrictiveRetention $true` places the lock: `Set-RetentionCompliancePolicy -Identity \"Policy1\" -RestrictiveRetention $true`.",
        "Once the policy is locked, no one, including a global administrator, can disable or delete it or remove locations from it, and the retention period can be extended but not decreased. The question calls it an Azure PowerShell command; the cmdlet runs in Security & Compliance PowerShell."
      ],
      wrong: [
        ["Set-ComplianceTag", "This cmdlet modifies retention labels, not retention policies, and it has no lock setting."],
        ["Set-HoldCompliancePolicy", "This cmdlet modifies preservation (hold) policies, a different type of policy."],
        ["Set-RetentionPolicy or Set-RetentionPolicyTag", "These manage the retention policies and tags of Exchange messaging records management (MRM), the legacy mailbox feature, not Microsoft 365 retention policies."],
        ["-enabled", "Enabled only turns the policy on or off. Setting it to $true does not stop anyone from turning the policy off later."],
        ["-Force", "Force is a switch that hides confirmation prompts. It takes no value and locks nothing."],
        ["-RetentionPolicyTagLinks or -SystemTag", "These are parameters of the Exchange MRM cmdlets, not of `Set-RetentionCompliancePolicy`."]
      ],
      concept: "Preservation Lock (`-RestrictiveRetention $true` on `Set-RetentionCompliancePolicy`) makes a policy for retention impossible to turn off or weaken.",
      takeaway: "Lock a retention policy: `Set-RetentionCompliancePolicy -Identity <policy> -RestrictiveRetention $true`, PowerShell only.",
      refs: [
        ["Microsoft Learn: Use Preservation Lock to restrict changes to retention policies", "https://learn.microsoft.com/purview/retention-preservation-lock"],
        ["Microsoft Learn: Set-RetentionCompliancePolicy", "https://learn.microsoft.com/powershell/module/exchange/set-retentioncompliancepolicy"]
      ]
    }
  },
  {
    id: "Q220", source: 220, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription. The subscription contains users that have the following types of devices:",
      { list: ["Windows 10", "Android", "iOS"] },
      "On which devices can you configure the Endpoint DLP policies?"
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
        "Endpoint DLP extends DLP monitoring and protective actions, such as blocking copies to USB or uploads to cloud services, to devices that are onboarded to Microsoft Purview. It supports Windows 10 and Windows 11, the three latest released versions of macOS, and Windows Server 2019 and later. Android and iOS devices can't be onboarded to Endpoint DLP.",
        "Of the devices in this subscription, only the Windows 10 devices can therefore be covered by an Endpoint DLP policy."
      ],
      wrong: [
        ["B", "Android is not a supported platform for Endpoint DLP."],
        ["C", "iOS is not a supported platform for Endpoint DLP."],
        ["D", "Neither Android nor iOS can be onboarded as an Endpoint DLP device, so only the Windows 10 devices qualify."]
      ],
      concept: "Endpoint DLP runs on onboarded Windows 10/11, macOS and supported Windows Server devices.",
      takeaway: "Endpoint DLP platforms: Windows and macOS. Not Android, not iOS.",
      refs: [["Microsoft Learn: Learn about Endpoint data loss prevention", "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"]]
    }
  },
  {
    id: "Q221", source: 221, type: "yesno",
    domain: "compliance", topic: "Retention and records", difficulty: "Advanced",
    stem: [
      "Your company has a Microsoft 365 subscription that uses an Azure AD tenant named contoso.com. The tenant contains the users shown in the following table.",
      { table: { head: ["Name", "Role", "Office 365 role group"], rows: [
        ["User1", "None", "Compliance Data Administrator"],
        ["User2", "Global Administrator", "None"]
      ] } },
      "You create a retention label named Label1 that has the following configurations:",
      { list: ["Retains content for five years", "Automatically deletes all content that is older than five years"] },
      "You turn on Auto labeling for Label1 by using a policy named Policy1. Policy1 has the following configurations:",
      { list: ["Applies to content that contains the word Merger", "Specifies the OneDrive accounts and SharePoint sites locations"] },
      "You run the following command.",
      { code: `Set-RetentionCompliancePolicy Policyl -RestrictiveRetention $true -Force` },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can add Exchange email as a location to Policy1." },
      { text: "User2 can remove SharePoint sites from Policy1." },
      { text: "User2 can add the word Acquisition to Policy1." }
    ],
    answer: [true, false, true],
    explanation: {
      correct: [
        "The command places a Preservation Lock on Policy1 (`-Force` only suppresses the confirmation prompt). A locked policy can be increased or extended but not reduced or turned off: no one, including a global administrator, can disable or delete it or remove its locations, while locations can still be added.",
        "User1 is a member of the Compliance Data Administrator role group, which includes the Retention Management role, so User1 can edit policies for retention. Adding the Exchange email location widens Policy1, which the lock allows (Yes). User2 is a Global Administrator, and global admins are automatically members of the Organization Management role group, which also includes Retention Management; but the lock applies to everyone, and removing the SharePoint sites location would reduce the policy (No).",
        "Adding Acquisition as another keyword changes the condition so that Policy1 labels more content. It does not disable the policy, remove a location or shorten the retention period, which are the changes the lock forbids, so User2 can make it (Yes)."
      ],
      wrong: [
        ["Statement 1 — No", "Preservation Lock does not stop additions: locations can be added to a locked policy, and User1's role group includes Retention Management."],
        ["Statement 2 — Yes", "Being a Global Administrator does not bypass Preservation Lock. Removing a location reduces the policy, and nobody can do that once it is locked."],
        ["Statement 3 — No", "The lock blocks changes that make the policy less restrictive. Adding a keyword widens what the policy labels."]
      ],
      concept: "Preservation Lock lets a policy for retention grow (more locations, longer retention) but never shrink or be turned off, whatever the admin's role.",
      takeaway: "After `-RestrictiveRetention $true`: add yes, extend yes; remove, shorten, disable or delete no, even for a Global Administrator.",
      refs: [
        ["Microsoft Learn: Use Preservation Lock to restrict changes to retention policies", "https://learn.microsoft.com/purview/retention-preservation-lock"],
        ["Microsoft Learn: Automatically apply a retention label to retain or delete content", "https://learn.microsoft.com/purview/apply-retention-labels-automatically"],
        ["Microsoft Learn: Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview", "https://learn.microsoft.com/defender-office-365/scc-permissions"]
      ]
    }
  },
  {
    id: "Q222", source: 222, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You are testing a data loss prevention (DLP) policy to protect the sharing of credit card information with external users.",
      "During testing, you discover that a user can share credit card information with external users by using email. However, the user is prevented from sharing files that contain credit card information by using Microsoft SharePoint.",
      "You need to prevent the user from sharing the credit card information by using email and SharePoint.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "the locations of the DLP policy" },
      { key: "B", text: "the conditions of the DLP policy rule" },
      { key: "C", text: "the user overrides of the DLP policy rule" },
      { key: "D", text: "the status of the DLP policy" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The policy already detects credit card information and blocks sharing it with external users in SharePoint, so its rule conditions and actions work and the policy is on. The only thing that differs for email is where the policy applies: a DLP policy evaluates content only in the locations that are turned on in it, and Exchange email is evidently not one of them.",
        "Adding the Exchange email location to the policy makes the same rule apply to messages sent to external recipients, so the user is blocked in both email and SharePoint."
      ],
      wrong: [
        ["B", "The conditions already match credit card information, as the block in SharePoint shows."],
        ["C", "User overrides let a user bypass a block with a business justification. Changing them does not bring email into the policy."],
        ["D", "The policy is on and enforcing, since it blocks the SharePoint share. Its status is not what is missing."]
      ],
      concept: "A DLP rule acts only in the locations its policy includes; each location (Exchange, SharePoint, OneDrive, Teams, devices) is chosen separately.",
      takeaway: "Works in one workload but not another: check the policy's locations first.",
      refs: [
        ["Microsoft Learn: Create and deploy data loss prevention policies", "https://learn.microsoft.com/purview/dlp-create-deploy-policy"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q223", source: 223, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "From the Microsoft Purview compliance portal, you configure a data loss prevention (DLP) policy for a Microsoft SharePoint site named Site1. Site1 contains the roles shown in the following table.",
      { table: { head: ["Role", "Member"], rows: [
        ["Site owner", "Prvi"],
        ["Site member", "User1"],
        ["Site visitor", "User2"]
      ] } },
      "Prvi creates the files shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q223-site1-documents.png", alt: "SharePoint, Documents library of Site1. Three files, all modified by Prvi: File1.docx (About a minute ago) with no icon; File2.docx (A few seconds ago) with a warning triangle icon next to the name; File3.docx (A few seconds ago) with a red circle-and-bar blocked icon next to the name." },
      "Which files can User1 and User2 open? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1:", options: ["File1.docx only", "File1.docx and File2.docx only", "File1.docx, File2.docx, and File3.docx"] },
      { id: "f2", label: "User2:", options: ["File1.docx only", "File1.docx and File2.docx only", "File1.docx, File2.docx, and File3.docx"] }
    ],
    answer: { f1: 1, f2: 1 },
    explanation: {
      correct: [
        "The icons in the library show what the DLP policy did with each file. File1.docx has no icon: it does not match the policy. File2.docx has the warning icon of a policy tip: it matches the policy, but the action only warns and does not restrict access. File3.docx has the blocked icon: the policy restricts access to it.",
        "When a DLP policy blocks access to a SharePoint file for everyone, only the content owner, the last modifier and the site admin keep access. Prvi, the site owner who created and last modified the files, can still open File3.docx, but User1 (a site member) and User2 (a site visitor) cannot. Both can open File1.docx and File2.docx, because site members and site visitors both have at least read permission on the library. Each user can therefore open File1.docx and File2.docx only."
      ],
      wrong: [
        ["User1 — File1.docx, File2.docx, and File3.docx", "Site membership gives edit permission, but a DLP block overrides site permissions. Only the owner, the last modifier and the site admin keep access to File3.docx."],
        ["User2 — File1.docx only", "The warning icon on File2.docx is a policy tip and does not restrict access. A site visitor can read both files that are not blocked."]
      ],
      concept: "In SharePoint, a DLP policy can show a policy tip on a matching file or restrict access to it; a restricted file stays available only to its owner, last modifier and the site admin.",
      takeaway: "Warning icon: policy tip, still accessible. Blocked icon: only owner, last modifier and site admin can open it.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q224", source: 224, type: "multi",
    domain: "compliance", topic: "Retention and records", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses retention policies.",
      "You implement a preservation lock on a retention policy that is assigned to all executive users.",
      "Which two actions can you perform on the retention policy after you implemented the preservation lock? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Add locations to the policy." },
      { key: "B", text: "Reduce the duration of policy." },
      { key: "C", text: "Remove locations from the policy." },
      { key: "D", text: "Extend the duration of the policy." },
      { key: "E", text: "Disable the policy." }
    ],
    answer: ["A", "D"],
    explanation: {
      correct: [
        "Preservation Lock exists to meet regulatory requirements and to protect against rogue administrators: once a retention policy is locked, no one, including a global administrator, can turn it off, delete it or make it less restrictive.",
        "A locked retention policy can still be increased or extended. Locations can be added but not removed, and the retention period can be extended but not decreased. Adding locations (A) and extending the duration (D) are therefore the two changes you can make."
      ],
      wrong: [
        ["B", "Reducing the retention period would make the policy less restrictive, which the lock prevents."],
        ["C", "Locations can be added to a locked policy but not removed."],
        ["E", "A locked policy can't be disabled or deleted by anyone."]
      ],
      concept: "Preservation Lock allows a retention policy to be strengthened but never weakened.",
      takeaway: "Locked retention policy: add locations and extend retention only.",
      refs: [["Microsoft Learn: Use Preservation Lock to restrict changes to retention policies", "https://learn.microsoft.com/purview/retention-preservation-lock"]]
    }
  }
);
