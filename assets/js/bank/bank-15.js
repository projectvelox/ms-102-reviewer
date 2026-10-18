/* MS-102 question bank, part 15: questions 225 to 240 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q225", source: 225, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains an Azure AD tenant named contoso.com. The tenant contains the users shown in the following table.",
      { table: { head: ["Name", "Username", "Type"], rows: [
        ["User1", "User1@contoso.com", "Member"],
        ["User2", "User2@sub.contoso.com", "Member"],
        ["User3", "User3@adatum.com", "Member"],
        ["User4", "User4@outlook.com", "Guest"],
        ["User5", "User5@gmail.com", "Guest"]
      ] } },
      "You create and assign a data loss prevention (DLP) policy named Policy1. Policy1 is configured to prevent documents that contain Personally Identifiable Information (PII) from being emailed to users outside your organization.",
      "To which users can User1 send documents that contain PII?"
    ],
    options: [
      { key: "A", text: "User2 only" },
      { key: "B", text: "User2 and User3 only" },
      { key: "C", text: "User2, User3, and User4 only" },
      { key: "D", text: "User2, User3, User4, and User5" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "For DLP, people inside the organization are the users who have non-guest (member) accounts in the organization's Microsoft Entra tenant. Guest accounts are people outside the organization. The domain in the user name does not decide it: a member account can only have a user name in a domain that is verified in the tenant, so every member is a user of the organization.",
        "Walk through the table. User2 (`User2@sub.contoso.com`) and User3 (`User3@adatum.com`) are Member accounts, so sub.contoso.com and adatum.com are domains of the organization, the two users are inside it, and User1 can send them documents that contain PII. User4 and User5 are Guest accounts with outlook.com and gmail.com addresses, so Policy1 treats them as outside the organization and blocks the documents."
      ],
      wrong: [
        ["A", "User3 is also a Member account. Its adatum.com address does not make it external; membership in the tenant does."],
        ["C", "User4 is a Guest account, so it counts as outside the organization and Policy1 blocks PII sent to it."],
        ["D", "User4 and User5 are both Guest accounts and therefore external recipients for Policy1."]
      ],
      concept: "In DLP, users with member (non-guest) accounts in the tenant are inside the organization, and guests are outside it.",
      takeaway: "Member = inside, Guest = outside, whatever the domain in the user name.",
      logic: "Count the Member rows other than User1 itself: User2 and User3.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q226", source: 226, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365 and contains a mailbox named Mailbox1.",
      "You plan to use Mailbox1 to collect and analyze unfiltered email messages.",
      "You need to ensure that Defender for Office 365 takes no action on any inbound emails delivered to Mailbox1.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Configure a retention policy for Mailbox1." },
      { key: "B", text: "Create a mail flow rule." },
      { key: "C", text: "Configure Mailbox1 as a SecOps mailbox." },
      { key: "D", text: "Place a litigation hold on Mailbox1." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The advanced delivery policy covers the scenarios that need unfiltered mail: third-party phishing simulations and SecOps mailboxes. A SecOps mailbox is a dedicated mailbox that a security team uses to collect and analyze unfiltered messages, both good and bad. You add it in the Microsoft Defender portal under **Email & collaboration** > **Policies & rules** > **Threat policies** > **Advanced delivery** > **SecOps mailbox**.",
        "For messages delivered to a SecOps mailbox, the filters in Microsoft 365 take no action, malware filtering and zero-hour auto purge are bypassed, Safe Links does not block the URLs and Safe Attachments does not detonate the attachments. That is exactly what Mailbox1 needs."
      ],
      wrong: [
        ["A", "A retention policy keeps or deletes content for compliance. It does not change how inbound mail is filtered."],
        ["B", "A mail flow rule can lower the spam confidence level of messages, but Microsoft 365 does not allow a filtering bypass for messages identified as malware or high confidence phishing, so Defender for Office 365 would still act on some messages."],
        ["D", "Litigation hold preserves mailbox content for legal reasons. The filtering of inbound mail is unchanged."]
      ],
      concept: "The advanced delivery policy lets designated SecOps mailboxes receive email unfiltered, which is the supported way to bypass Defender for Office 365 filtering for analysis.",
      takeaway: "Mailbox that must receive everything unfiltered for analysis: add it as a SecOps mailbox in Advanced delivery.",
      refs: [["Microsoft Learn: Configure the advanced delivery policy for phishing simulations and SecOps mailboxes", "https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure"]]
    }
  },
  {
    id: "Q227", source: 227, type: "dropdown",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint site named Site1.",
      "You need to perform the following tasks:",
      { list: ["Create a sensitive info type named SIT1 based on a regular expression.", "Add a watermark to all new documents that are matched by SIT1."] },
      "Which two settings should you use in the Microsoft Purview compliance portal? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Create a sensitive info type named SIT1 based on a regular expression.", options: ["Compliance Manager", "Data classification", "Data connectors", "Reports", "Catalog", "App governance", "Audit", "Content search", "Communication compliance", "Data loss prevention", "Information protection", "Insider risk management", "Records management", "Subject rights requests"] },
      { id: "f2", label: "Add a watermark to all new documents that are matched by SIT1.", options: ["Compliance Manager", "Data classification", "Data connectors", "Reports", "Catalog", "App governance", "Audit", "Content search", "Communication compliance", "Data loss prevention", "Information protection", "Insider risk management", "Records management", "Subject rights requests"] }
    ],
    answer: { f1: 1, f2: 10 },
    explanation: {
      correct: [
        "In the Microsoft Purview compliance portal, sensitive info types are managed under **Data classification** (Classifiers > Sensitive info types). That is where you create SIT1 and define its primary element as a regular expression.",
        "A watermark is a content marking of a sensitivity label, and sensitivity labels are created under **Information protection**. You create a label that adds the watermark and, in the label's auto-labeling settings for files and emails, use SIT1 as the condition. Office apps then apply the label, and with it the watermark, to documents with content that SIT1 matches. Content markings are applied by this labeling in the apps; a service-side auto-labeling policy does not add headers, footers or watermarks to documents."
      ],
      wrong: [
        ["Data loss prevention", "A DLP policy can use SIT1 to block, restrict or notify, but it has no action that adds a watermark to a document."],
        ["Records management", "Records management applies retention labels and declares records. It controls how long content is kept, not how it is marked."],
        ["Compliance Manager", "Compliance Manager tracks assessments and improvement actions. It does not create classifiers or labels."]
      ],
      concept: "Custom sensitive info types are built in Data classification; labels with content markings such as watermarks are built in Information protection.",
      takeaway: "Detect: Data classification (sensitive info type). Mark or protect: Information protection (sensitivity label).",
      refs: [
        ["Microsoft Learn: Create custom sensitive information types", "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"],
        ["Microsoft Learn: Learn about sensitivity labels", "https://learn.microsoft.com/purview/sensitivity-labels"],
        ["Microsoft Learn: Automatically apply a sensitivity label to Microsoft 365 data", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"]
      ]
    }
  },
  {
    id: "Q228", source: 228, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You have a data loss prevention (DLP) policy that blocks sensitive data from being shared in email messages.",
      "You need to modify the policy so that when an email message containing sensitive data is sent to both external and internal recipients, the message is only prevented from being delivered to the external recipients.",
      "What should you modify?"
    ],
    options: [
      { key: "A", text: "the policy rule exceptions" },
      { key: "B", text: "the DLP policy locations" },
      { key: "C", text: "the policy rule conditions" },
      { key: "D", text: "the policy rule actions" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Who is blocked is decided by the rule's actions. For Exchange email, the action **Restrict access or encrypt the content in Microsoft 365 locations** has two choices: **Block everyone** or **Block only people outside your organization**.",
        "The policy blocks everyone today. Changing the action to block only people outside the organization stops delivery to the external recipients while the internal recipients still receive the message. The conditions keep detecting the sensitive data as before, so nothing else needs to change."
      ],
      wrong: [
        ["A", "Exceptions decide which messages the rule ignores altogether. They do not split one message so that some recipients receive it and others do not."],
        ["B", "Locations only say where the policy applies, here Exchange email. Changing them cannot treat internal and external recipients differently."],
        ["C", "Conditions decide whether a message matches the rule. Once a message matches, an action that blocks everyone still blocks the internal recipients too."]
      ],
      concept: "In a DLP rule, conditions decide whether content matches and actions decide what happens, including whether everyone or only people outside the organization are blocked.",
      takeaway: "Block external recipients but let internal ones receive the message: change the action to Block only people outside your organization.",
      refs: [["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"]]
    }
  },
  {
    id: "Q229", source: 229, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365 and contains a user named User1.",
      "User emails a product catalog in the PDF format to 300 vendors. Only 200 vendors receive the email message, and User1 is blocked from sending email until the next day.",
      "You need to prevent this issue from reoccurring.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "anti-spam policies" },
      { key: "B", text: "Safe Attachments policies" },
      { key: "C", text: "anti-phishing policies" },
      { key: "D", text: "anti-malware policies" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Outbound spam policies are anti-spam policies (in the Defender portal, **Anti-spam policies** > **Create policy** > **Outbound**). They set message limits for senders: external recipients per hour, internal recipients per hour and recipients per day. When a sender exceeds a limit, the policy applies its **Restriction placed on users who reach the message limit**, and the default is **Restrict the user from sending mail until the following day**.",
        "That is what happened to User1: the message reached 200 vendors, a limit was hit, and User1 was blocked until the next day. To prevent it from reoccurring, configure an outbound anti-spam policy that applies to User1 (or to a group of such senders) with limits high enough for the mailing, within the service limits."
      ],
      wrong: [
        ["B", "Safe Attachments detonates attachments to detect malware. It does not count recipients or restrict senders."],
        ["C", "Anti-phishing policies detect impersonation and spoofing. They do not limit how many recipients a user can send to."],
        ["D", "Anti-malware policies scan messages for malware. They do not throttle senders by the number of recipients."]
      ],
      concept: "Outbound spam policies limit how many recipients a user can send to per hour and per day, and restrict senders who exceed the limits.",
      takeaway: "User blocked from sending until the next day after a large mailing: outbound anti-spam policy limits.",
      refs: [["Microsoft Learn: Configure outbound spam policies", "https://learn.microsoft.com/defender-office-365/outbound-spam-policies-configure"]]
    }
  },
  {
    id: "Q230", source: 230, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the labels shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Label1", "Sensitivity"],
        ["Label2", "Retention"]
      ] } },
      "You have the items shown in the following table.",
      { table: { head: ["Name", "Stored in", "Description"], rows: [
        ["File1", "Microsoft SharePoint", "File document that has Label1 applied"],
        ["File2", "Microsoft Teams channel", "File document that has Label2 applied"],
        ["Mail1", "Microsoft Exchange Online", "Email message that has Label1 applied"],
        ["Mail2", "Microsoft Exchange Online", "Email message that has Label2 applied"]
      ] } },
      "Which items can you view in Content explorer?"
    ],
    options: [
      { key: "A", text: "File1 only" },
      { key: "B", text: "File1 and File2 only" },
      { key: "C", text: "File1 and Mail1 only" },
      { key: "D", text: "File2 and Mail2 only" },
      { key: "E", text: "File1, File2, Mail1, and Mail2" }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "Content explorer, part of data classification in Microsoft Purview, shows a current snapshot of the items that have a sensitivity label, a retention label, or that are classified as a sensitive information type. Both kinds of label count, and its locations include Exchange as well as SharePoint, OneDrive and Teams.",
        "Walk through the items: File1 is in SharePoint with the sensitivity label Label1. File2 is a file in a Teams channel, which is stored in the team's SharePoint site, with the retention label Label2. Mail1 and Mail2 are messages in Exchange Online with Label1 and Label2. Every item has a label and is in a location that Content explorer covers, so all four appear."
      ],
      wrong: [
        ["A", "Content explorer also shows items with retention labels, and labeled email messages, not only labeled SharePoint files."],
        ["B", "Mail1 and Mail2 are left out, but labeled items in Exchange Online appear as well."],
        ["C", "File2 and Mail2 have a retention label, and Content explorer shows retention labels as well as sensitivity labels."],
        ["D", "File1 and Mail1 have a sensitivity label, which Content explorer shows as well."]
      ],
      concept: "Content explorer lists the items that carry a sensitivity label or a retention label, or contain a sensitive information type, across Exchange, SharePoint, OneDrive and Teams.",
      takeaway: "Content explorer: every item with a sensitivity label, a retention label or a detected sensitive info type.",
      refs: [["Microsoft Learn: Get started with content explorer", "https://learn.microsoft.com/purview/data-classification-content-explorer"]]
    }
  },
  {
    id: "Q231", source: 231, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You create a data loss prevention (DLP) policy to prevent users from using Microsoft Teams to share internal documents with external users.",
      "To which two locations should you apply the policy? To answer, select the appropriate locations in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "First location (in list order)", options: ["Exchange email", "SharePoint sites", "OneDrive accounts", "Teams chat and channel messages", "Devices", "Microsoft Cloud App Security", "On-premises repositories"] },
      { id: "f2", label: "Second location (in list order)", options: ["Exchange email", "SharePoint sites", "OneDrive accounts", "Teams chat and channel messages", "Devices", "Microsoft Cloud App Security", "On-premises repositories"] }
    ],
    answer: { f1: 1, f2: 2 },
    explanation: {
      correct: [
        "Documents shared in Microsoft Teams are not stored in Teams itself. A file shared in a channel is stored in the team's SharePoint site, and a file shared in a chat is stored in the sender's OneDrive. DLP for those documents is DLP for SharePoint and OneDrive that shows up in Teams: the policy must include the **SharePoint sites** and **OneDrive accounts** locations for the protection to be enforced, and a blocked document then does not open for the external users.",
        "The **Teams chat and channel messages** location protects the content of the messages themselves, such as sensitive data typed into a chat, which is not what this policy has to cover."
      ],
      wrong: [
        ["Teams chat and channel messages", "This location inspects chat and channel messages. The shared documents are files in SharePoint and OneDrive."],
        ["Exchange email", "Exchange email covers messages sent through Exchange, not files shared in Teams."],
        ["Devices", "Devices covers endpoint DLP, such as copying files to USB on Windows or macOS. It does not control sharing in Teams."]
      ],
      concept: "Teams stores shared files in SharePoint (channels) and OneDrive (chats), so DLP for those files is applied through those two locations.",
      takeaway: "Documents shared in Teams: SharePoint sites + OneDrive accounts. Message text in Teams: Teams chat and channel messages.",
      refs: [["Microsoft Learn: Data loss prevention and Microsoft Teams", "https://learn.microsoft.com/purview/dlp-microsoft-teams"]]
    }
  },
  {
    id: "Q232", source: 232, type: "yesno",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 tenant that contains a Microsoft SharePoint site named Site1. Site1 contains the files shown in the following table.",
      { table: { head: ["Name", "Number of IP addresses in the file"], rows: [
        ["File1.docx", "1"],
        ["File2.txt", "2"],
        ["File3.xlsx", "5"]
      ], numeric: [1] } },
      "You create a sensitivity label named Sensitivity1 and an auto-label policy that has the following configurations:",
      { list: ["Name: AutoLabel1", "Label to auto-apply: Sensitivity1", "Choose locations where you want to apply the label: Site1"] },
      "The Define content that contains sensitive info settings for AutoLabel1 is shown in the following exhibit.",
      { image: "q232-autolabel-sensitive-info.png", alt: "Define content that contains sensitive info page of the auto-labeling policy. Under Content contains, the group Default1 is set to Any of these and holds one sensitive info type: IP Address, High confidence, Instance count 2 to Any." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Sensitivity1 is applied to File1.docx." },
      { text: "Sensitivity1 is applied to File2.txt." },
      { text: "Sensitivity1 is applied to File3.xlsx." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "AutoLabel1 is a service-side auto-labeling policy for Site1. Its rule matches content that contains the IP Address sensitive info type with high confidence and an instance count of 2 to Any, so a file needs at least two IP addresses. An auto-labeling policy for SharePoint and OneDrive also labels only supported files: Office files for Word (.docx), PowerPoint (.pptx) and Excel (.xlsx), and PDF documents.",
        "File1.docx is a supported type but contains only one IP address, below the minimum of 2, so it is not labeled. File2.txt has two IP addresses, which meets the count, but a .txt file is not a type that auto-labeling policies label. File3.xlsx is a supported type and contains five IP addresses, so the policy applies Sensitivity1 to it."
      ],
      wrong: [
        ["Statement 1 — Yes", "The instance count starts at 2. A single IP address does not meet the condition."],
        ["Statement 2 — Yes", "The count of 2 is met, but plain text files are not supported; auto-labeling in SharePoint and OneDrive labels .docx, .pptx, .xlsx and PDF files."],
        ["Statement 3 — No", "Five instances is within 2 to Any and .xlsx is supported, so the file gets the label."]
      ],
      concept: "A service-side auto-labeling policy labels a file only when its type is supported and its content meets the rule, including the minimum instance count.",
      takeaway: "For each file check two things: a supported type (.docx, .pptx, .xlsx, PDF) and enough instances.",
      refs: [["Microsoft Learn: Automatically apply a sensitivity label to Microsoft 365 data", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"]]
    }
  },
  {
    id: "Q233", source: 233, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint site named Site1. Site1 contains the files shown in the following table.",
      { table: { head: ["Name", "Number of IP addresses in the file"], rows: [
        ["File1", "2"],
        ["File2", "3"]
      ], numeric: [1] } },
      "You have a data loss prevention (DLP) policy named DLP1 that has the advanced DLP rules shown in the following table.",
      { table: { head: ["Name", "Content contains", "Policy tip", "If there is a match, stop processing", "Priority"], rows: [
        ["Rule1", "3 or more IP addresses", "Tip1", "No", "0"],
        ["Rule2", "1 or more IP addresses", "Tip2", "Yes", "1"],
        ["Rule3", "2 or more IP addresses", "Tip3", "No", "2"]
      ], numeric: [4] } },
      "You apply DLP1 to Site1.",
      "Which policy tip is displayed for each file? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "File1:", options: ["Tip2 only", "Tip3 only", "Tip2 and Tip3"] },
      { id: "f2", label: "File2:", options: ["Tip1 only", "Tip3 only", "Tip1 and Tip2 only", "Tip1, Tip2, and Tip3"] }
    ],
    answer: { f1: 0, f2: 2 },
    explanation: {
      correct: [
        "The rules of a DLP policy are evaluated in priority order, lowest number first: Rule1 (0), then Rule2 (1), then Rule3 (2). A rule with **If there's a match for this rule, stop processing additional DLP policies and rules** selected ends the evaluation when it matches, so the rules after it are not evaluated for that item. The answer counts the policy tip of each rule that is evaluated and matches.",
        "File1 has two IP addresses. Rule1 needs three or more and does not match. Rule2 needs one or more, so it matches and gives Tip2, and because Rule2 stops processing, Rule3 is never evaluated, although two IP addresses would have matched it. Result: Tip2 only.",
        "File2 has three IP addresses. Rule1 matches and gives Tip1, and it does not stop processing. Rule2 also matches and gives Tip2, and then stops processing, so Rule3 is skipped. Result: Tip1 and Tip2 only."
      ],
      wrong: [
        ["File1: Tip2 and Tip3", "Two IP addresses would match Rule3, but Rule2 is evaluated first, matches and stops processing, so Rule3 is never reached."],
        ["File2: Tip1, Tip2, and Tip3", "File2 meets all three conditions, but evaluation ends at Rule2 because of its stop processing setting."],
        ["File2: Tip1 only", "Rule1 does not stop processing, so Rule2 is still evaluated, and it matches."]
      ],
      concept: "DLP rules are processed in priority order, and a matching rule with stop processing selected prevents the lower-priority rules from being evaluated.",
      takeaway: "Walk the rules from priority 0 down, collect each match, and stop at the first matching rule that has stop processing set.",
      refs: [["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"]]
    }
  },
  {
    id: "Q234", source: 234, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Intermediate",
    caseId: "fabrikam", caseOrder: 6,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "mail exchanger (MX)" },
      { key: "B", text: "alias (CNAME)" },
      { key: "C", text: "host information (HINFO)" },
      { key: "D", text: "host (AAAA)" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Adding a domain to Microsoft 365 starts with proving that you own it. The usual method is a TXT record. If you can't add a TXT record, the Microsoft 365 admin center lets you add an MX record instead to verify ownership (a third method, a text file uploaded to the domain's website, is not a DNS record). TXT is not among the options, so the MX record is the verification record to recommend.",
        "This MX record only proves ownership; it is not the record that later routes mail to Exchange Online. Microsoft warns you to set its Priority field to a high value so that it doesn't break mail with your current email provider. That fits Fabrikam: during Project1 only 100 sales mailboxes move to Microsoft 365, everyone else stays on the on-premises Exchange Server 2016 organization, all users must keep exchanging email with their current addresses, and disruptions to email access must be minimized. The record is created in the public fabrikam.com zone on the external DNS server."
      ],
      wrong: [
        ["B", "CNAME records are added after verification for services such as Autodiscover and Intune enrollment. They are not a way to verify ownership of the domain."],
        ["C", "An HINFO record describes the hardware and operating system of a host. Microsoft 365 does not use it."],
        ["D", "An AAAA record maps a host name to an IPv6 address. It plays no part in adding a domain to Microsoft 365."]
      ],
      concept: "Microsoft 365 verifies domain ownership with a TXT record or, when a TXT record can't be added, with an MX record that has a high priority value.",
      takeaway: "Domain verification: TXT first; without TXT, an MX record with a high priority number so that mail flow is unaffected.",
      refs: [["Microsoft Learn: Add a custom domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"]]
    }
  },
  {
    id: "Q235", source: 235, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    caseId: "series-secadmin1", caseOrder: 5,
    stem: [
      "Solution: From the Microsoft Entra admin center, you assign SecAdmin1 the Teams Administrator role.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Defender for Office 365 settings and policies, including Safe Attachments for SharePoint, OneDrive and Microsoft Teams, are managed in the Microsoft Defender portal under Email & collaboration. Managing them takes a security role: the Microsoft Entra Security Administrator role (Global Administrator also works), or the equivalent Email & collaboration or Defender XDR permissions.",
        "Teams Administrator manages the Microsoft Teams service in the Teams admin center: teams, meeting, messaging and calling policies, and devices. It grants no permissions to the Defender for Office 365 threat policies, even those that protect Teams. Assigning the role from the Microsoft Entra admin center instead of the Microsoft 365 admin center changes nothing, so the solution does not meet the goal."
      ],
      wrong: [
        ["A", "Teams Administrator does not grant permissions to manage Defender for Office 365 settings and policies, whichever admin center you assign it from."]
      ],
      concept: "Defender for Office 365 policies are managed with security roles, not with workload admin roles such as Teams, SharePoint or Exchange Administrator.",
      takeaway: "Defender for Office 365 policies for Teams, SharePoint and OneDrive: Security Administrator, not the workload's admin role.",
      refs: [
        ["Microsoft Learn: Microsoft Defender for Office 365 permissions in the Microsoft Defender portal", "https://learn.microsoft.com/defender-office-365/mdo-portal-permissions"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q236", source: 236, type: "dropdown",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Intermediate",
    caseId: "litware", caseOrder: 4,
    stem: [
      "You need to ensure that Admin4 can use SSPR.",
      "Which tool should you use, and which action should you perform? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Action:", options: ["Enable app registrations.", "Enable password writeback.", "Enable password hash synchronization.", "Disable password hash synchronization."] },
      { id: "f2", label: "Tool:", options: ["Azure AD Connect", "Synchronization Rules Editor", "Microsoft Entra admin center"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "Admin4 is in the LitwareAdmins OU, the only OU that Azure AD Connect synchronizes, so Admin4 is an on-premises Active Directory account synchronized to the cloud with password hash synchronization. For such an account, a password changed through SSPR must be written back to Active Directory, which is the source of the account. Nothing in the scenario enables that, so SSPR fails for Admin4 although SSPR is enabled.",
        "Password writeback is enabled in **Azure AD Connect** (now Microsoft Entra Connect): run the wizard, choose Customize synchronization options and select **Password writeback** on the Optional features page. Afterwards, the on-premises integration setting of password reset in the Microsoft Entra admin center lets synchronized users write their new passwords back."
      ],
      wrong: [
        ["Enable password hash synchronization.", "Password hash synchronization is already enabled. It copies hashes from Active Directory to the cloud, the opposite direction to what SSPR needs."],
        ["Disable password hash synchronization.", "Turning it off would break cloud sign-in for the synchronized users and still would not write passwords back."],
        ["Enable app registrations.", "App registration settings control who can register applications. They have nothing to do with password reset."],
        ["Synchronization Rules Editor", "The editor customizes the attribute flow rules of synchronization. Password writeback is an optional feature switched on in the Azure AD Connect wizard."],
        ["Microsoft Entra admin center", "Its writeback setting for SSPR depends on password writeback being enabled in Azure AD Connect first."]
      ],
      concept: "SSPR for synchronized accounts needs password writeback, which is enabled in Azure AD Connect (Microsoft Entra Connect).",
      takeaway: "Synchronized user cannot use SSPR: enable password writeback in Azure AD Connect.",
      refs: [
        ["Microsoft Learn: Tutorial: Enable Microsoft Entra SSPR writeback to an on-premises environment", "https://learn.microsoft.com/entra/identity/authentication/tutorial-enable-sspr-writeback"],
        ["Microsoft Learn: How does self-service password reset writeback work?", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  },
  {
    id: "Q237", source: 237, type: "yesno",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    caseId: "litware", caseOrder: 5,
    stem: [
      "You are evaluating the use of multi-factor authentication (MFA).",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Users will have 14 days to register for MFA after they sign in for the first time." },
      { text: "Users must use the Microsoft Authenticator app to complete MFA." },
      { text: "After registering, users must use MFA for every sign-in." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "The Litware tenant has Security defaults enabled, so MFA follows the fixed rules of security defaults rather than Conditional Access policies: every user must register for MFA, the listed administrator roles must use MFA, and other users must use MFA when necessary. Security defaults cannot be customized.",
        "Statement 1: the reference answer is Yes. It reflects the registration grace period of security defaults that the question was written for: users had 14 days, counted from their first successful interactive sign-in after security defaults were enabled, to register, and after that they could not sign in until they completed registration. The current documentation notes that this 14-day grace period was removed for new and existing tenants starting July 29, 2024.",
        "Statement 2, Yes: security defaults users register for and use MFA with the Microsoft Authenticator app using notifications, and registration offers only that option. (Verification codes from the Authenticator app, or from another OATH TOTP app, can also be used.)",
        "Statement 3, No: after registration, users are prompted for MFA when Microsoft decides it is necessary, based on factors such as location, device, role and task, not at every sign-in. Only the listed administrator roles, which include the roles of Admin1 to Admin4, must do MFA every time they sign in."
      ],
      wrong: [
        ["Statement 1 — No", "Under the security defaults behavior the question is based on, a user had 14 days after the first sign-in before registration became mandatory."],
        ["Statement 2 — No", "Security defaults offer no choice of methods to configure: registration is for the Microsoft Authenticator app with notifications."],
        ["Statement 3 — Yes", "MFA at every sign-in applies only to the listed administrator roles. Other users are challenged when necessary."]
      ],
      concept: "Security defaults require MFA registration with the Microsoft Authenticator app, MFA at every sign-in for administrator roles, and MFA for other users only when needed.",
      takeaway: "Security defaults: Authenticator app, admins at every sign-in, users when necessary, no customization.",
      refs: [["Microsoft Learn: Security defaults in Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/security-defaults"]]
    }
  },
  {
    id: "Q238", source: 238, type: "single",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Basic",
    caseId: "litware", caseOrder: 6,
    stem: [
      "You need to configure just in time access to meet the technical requirements.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "entitlement management" },
      { key: "B", text: "Azure AD Privileged Identity Management (PIM)" },
      { key: "C", text: "access reviews" },
      { key: "D", text: "Azure AD Identity Protection" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Just in time access to administrative roles is what Privileged Identity Management (PIM) provides. Instead of a permanent assignment, an administrator is made eligible for a role and activates it when it is needed, for a limited time, optionally with MFA, a justification or an approval. When the activation ends, the privileges are removed.",
        "PIM requires Microsoft Entra ID P2 (Azure AD Premium P2), and Litware's pilot subscription includes Azure AD Premium P2 licenses. Time-limited activation also serves the requirement that the principle of least privilege be used."
      ],
      wrong: [
        ["A", "Entitlement management bundles access to groups, apps and sites into access packages that users request. It governs resource access, not the just in time activation of administrative roles."],
        ["C", "Access reviews periodically confirm whether users still need their memberships, app access or roles. They review existing access; they do not grant it just in time."],
        ["D", "Identity Protection detects risky users and sign-ins and drives risk-based policies. It does not assign or activate roles."]
      ],
      concept: "PIM makes users eligible for privileged roles and lets them activate the roles just in time, for a limited period.",
      takeaway: "Just in time access to admin roles: PIM, which needs Entra ID P2.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra Privileged Identity Management?", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure"],
        ["Microsoft Learn: What is entitlement management?", "https://learn.microsoft.com/entra/id-governance/entitlement-management-overview"]
      ]
    }
  },
  {
    id: "Q239", source: 239, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains an Azure AD tenant named contoso.com. The tenant includes a user named User1.",
      "You enable Azure AD Identity Protection.",
      "You need to ensure that User1 can review the list in Azure AD Identity Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Compliance Administrator" },
      { key: "B", text: "Security Administrator" },
      { key: "C", text: "Service Administrator" },
      { key: "D", text: "User Administrator" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The Identity Protection reports, including Risky users, are available to a defined set of roles: Security Reader and Global Reader can view them, Security Operator can also dismiss user risk and confirm a sign-in as safe or compromised, and Security Administrator has full access to Identity Protection.",
        "Of the four options, Security Administrator is the only role that gives access to Identity Protection at all, so it is the least privileged role offered that lets User1 review the list. If Security Reader were offered, it would be the better answer, because it is read-only."
      ],
      wrong: [
        ["A", "Compliance Administrator manages Microsoft Purview compliance features. It gives no access to the Identity Protection reports."],
        ["C", "Service Administrator is not a Microsoft Entra role that Identity Protection grants access to; the name belongs to the classic Azure subscription administrator, which manages subscriptions, not identity risk."],
        ["D", "User Administrator can reset passwords, but the Identity Protection documentation lists it as unable to read or write to Identity Protection."]
      ],
      concept: "Identity Protection reports are available to Security Reader, Global Reader, Security Operator, Security Administrator and Global Administrator.",
      takeaway: "Least privilege to review risky users: Security Reader; when it isn't offered, Security Administrator.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q240", source: 240, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains an Azure AD tenant named contoso.com. The tenant includes a user named User1.",
      "You enable Azure AD Identity Protection.",
      "You need to ensure that User1 can review the list in Azure AD Identity Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Compliance Administrator" },
      { key: "B", text: "Security Reader" },
      { key: "C", text: "Reports Reader" },
      { key: "D", text: "User Administrator" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Security Reader can view all Identity Protection reports and the Overview, including the Risky users list, but it cannot change policies, reset passwords, configure alerts or give feedback on detections. A read-only role that covers exactly the task is the least privileged choice.",
        "The other roles that can view the list, Security Operator, Security Administrator and Global Administrator, grant more than reviewing it, and none of the other options gives access to Identity Protection."
      ],
      wrong: [
        ["A", "Compliance Administrator manages Microsoft Purview compliance features. It gives no access to the Identity Protection reports."],
        ["C", "Reports Reader can read usage reports and the sign-in and audit logs, but it is not one of the roles that can open the Identity Protection reports."],
        ["D", "User Administrator can reset passwords, but the Identity Protection documentation lists it as unable to read or write to Identity Protection."]
      ],
      concept: "Security Reader is the read-only role that can view all Identity Protection reports.",
      takeaway: "Review risky users with least privilege: Security Reader.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  }
);
