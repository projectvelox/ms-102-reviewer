/* MS-102 question bank, part 7: questions 97 to 112 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q097", source: 97, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You configure a data loss prevention (DLP) policy.",
      "You discover that users are incorrectly marking content as false positive and bypassing the DLP policy.",
      "You need to prevent the users from bypassing the DLP policy.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "actions" },
      { key: "B", text: "incident reports" },
      { key: "C", text: "exceptions" },
      { key: "D", text: "user overrides" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A DLP rule has a **User overrides** setting. When overrides are allowed, a user who sees the policy tip can override the restriction, optionally with a business justification, and the rule can also be set to be overridden automatically when the user reports the match as a false positive. That is exactly how the users in this scenario get past the policy.",
        "Turning off user overrides in the rule (or at least the option that overrides the rule when a false positive is reported) removes the bypass. Users can still see the policy tip, but the restriction stays in force whatever they report."
      ],
      wrong: [
        ["A", "Actions decide what happens to matching content, for example restricting access or encrypting it. Whether users may override that restriction, and whether a false positive report lifts it, is the separate user overrides setting."],
        ["B", "Incident reports send details of rule matches to administrators. They inform you about matches and overrides; they do not stop users from overriding."],
        ["C", "Exceptions exclude content from the rule. Adding exceptions widens what escapes the policy instead of closing the bypass."]
      ],
      concept: "In a DLP rule, user notifications (policy tips) and user overrides are separate settings, and overrides include the option to override the rule when a user reports a false positive.",
      takeaway: "Users bypassing DLP by reporting false positives or overriding: change the rule's user overrides setting.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q098", source: 98, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You create a retention label named Retention1 as shown in the following exhibit.",
      { image: "q098-retention-label.png", alt: "Create retention label wizard, Review and finish page. Name: 6Months. Retention settings: retention period 6 months, retention action Retain and Delete, based on when it was created. The Name and Retention settings steps are complete and the wizard is on Finish, with the buttons Back, Create label and Cancel. No step of the wizard publishes the label." },
      "When users attempt to apply Retention1, the label is unavailable.",
      "You need to ensure that Retention1 is available to all the users.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Create a new label policy." },
      { key: "B", text: "Modify the Authority type setting for Retention1." },
      { key: "C", text: "Modify the Business function/department setting for Retention1." },
      { key: "D", text: "Use a file plan CSV template to import Retention1." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Creating a retention label only defines its settings: here, retain and then delete six months after the item was created. Users can apply a label manually only after the label is published to their locations by a retention label policy (Exchange mailboxes, SharePoint sites, OneDrive accounts, Microsoft 365 Groups). Until then the label exists in the portal but does not appear in Outlook, SharePoint or OneDrive.",
        "So you create a label policy that publishes Retention1 to all the locations the users work in. Published labels are not visible at once; allow some time for them to appear in the apps."
      ],
      wrong: [
        ["B", "Authority type (for example Business, Legal or Regulatory) is a file plan descriptor. It is metadata that helps you organize labels and has no effect on whether users can see the label."],
        ["C", "Business function/department is another file plan descriptor. Changing it does not publish the label."],
        ["D", "Importing a file plan CSV creates or updates labels in bulk. An imported label still has to be published by a label policy before users can apply it."]
      ],
      concept: "Retention labels reach users through policies: a publishing policy for manual application, or an auto-apply policy for automatic labeling.",
      takeaway: "Label created but not offered to users: publish it with a retention label policy.",
      refs: [
        ["Microsoft Learn: Publish retention labels and apply them in apps", "https://learn.microsoft.com/purview/create-apply-retention-labels"],
        ["Microsoft Learn: Use file plan to manage retention labels", "https://learn.microsoft.com/purview/file-plan-manager"]
      ]
    }
  },
  {
    id: "Q099", source: 99, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that has published sensitivity labels shown in the following exhibit.",
      { image: "q099-sensitivity-labels.png", alt: "Sensitivity labels page, Labels tab, with columns Name, Order, Created by and Last modified. Label1 (order 0 - highest) is a top-level label with no sublabels. Label2 (order 1) is a parent label, shown with a collapse sign, with two sublabels indented beneath it: Label3 and Label4 (each order 0 - highest). Label5 (order 5) is a parent label with one indented sublabel: Label6 (order 0 - highest). All labels were created by Prvi and last modified on 04/24/2020." },
      "Which labels can users apply to content?"
    ],
    options: [
      { key: "A", text: "Label1, Label2, and Label5 only" },
      { key: "B", text: "Label3, Label4, and Label6 only" },
      { key: "C", text: "Label1, Label3, Label4, and Label6 only" },
      { key: "D", text: "Label1, Label2, Label3, Label4, Label5, and Label6" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Sublabels group related labels under a parent. Once a label has sublabels, the parent acts only as a heading in the apps: users open it and must choose one of its sublabels, and the parent itself cannot be applied to content.",
        "Walk through the list. Label1 has no sublabels, so users can apply it. Label2 has the sublabels Label3 and Label4, so only Label3 and Label4 can be applied. Label5 has the sublabel Label6, so only Label6 can be applied. The labels users can apply are Label1, Label3, Label4 and Label6."
      ],
      wrong: [
        ["A", "Label2 and Label5 are parents of sublabels and cannot be applied, and the list leaves out the sublabels that can."],
        ["B", "Label1 has no sublabels, so it is a label users can apply. It is missing from this list."],
        ["D", "Not every label can be applied: the parent labels Label2 and Label5 are only containers for their sublabels."]
      ],
      concept: "A sensitivity label that has sublabels cannot be applied itself; users select one of its sublabels.",
      takeaway: "Applicable labels = top-level labels without sublabels + every sublabel.",
      refs: [["Microsoft Learn: Learn about sensitivity labels (sublabels)", "https://learn.microsoft.com/purview/sensitivity-labels#sublabels-grouping-labels"]]
    }
  },
  {
    id: "Q100", source: 100, type: "dropdown",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "Your company has a Microsoft 365 E5 tenant",
      "Users at the company use the following versions of Microsoft Office:",
      { list: ["Microsoft 365 Apps for enterprise", "Office for the web", "Office 2016", "Office 2019"] },
      "The company currently uses the following Office file types:",
      { list: [".docx", ".xlsx", ".doc", ".xls"] },
      "You plan to use sensitivity labels.",
      "You need to identify the following:",
      { list: ["Which versions of Office require an add-in to support the sensitivity labels.", "Which file types support the sensitivity labels."] },
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Office versions that require an add-in to support the sensitivity labels:", options: ["Office 2016 only", "Office 2019 only", "Office for the web only", "Office 2016 and Office 2019 only", "Microsoft 365 Apps for enterprise only", "Microsoft 365 Apps for enterprise and Office for the web only"] },
      { id: "f2", label: "Office file types that support the sensitivity labels:", options: [".doc only", ".docx only", ".xls only", ".xlsx only", ".doc and .xls", ".docx and .xlsx", ".doc, .docx, .xls, and .xlsx"] }
    ],
    answer: { f1: 3, f2: 5 },
    explanation: {
      correct: [
        "Sensitivity labeling is built into the subscription versions of Office, Microsoft 365 Apps for enterprise, and into Office for the web, so those need nothing extra. The standalone (perpetual) versions Office 2016 and Office 2019 have no built-in labeling; they could use sensitivity labels only through an add-in, the Azure Information Protection unified labeling client. Both perpetual versions need it, so the answer is Office 2016 and Office 2019 only. (The AIP add-in for Office has since been retired, and Microsoft now points customers to built-in labeling in Microsoft 365 Apps.)",
        "A sensitivity label is stored as metadata inside the file, which the Office Open XML formats such as .docx and .xlsx are built to carry. The legacy Office 97-2003 binary formats .doc and .xls are not among the file types supported for labeled files, for example in SharePoint and OneDrive, so the file types to identify are .docx and .xlsx."
      ],
      wrong: [
        ["Office 2016 only / Office 2019 only", "Both perpetual versions lack built-in labeling, so choosing only one of them is incomplete."],
        ["Microsoft 365 Apps for enterprise and Office for the web only", "These are exactly the versions with labeling built in. They need no add-in."],
        [".doc, .docx, .xls, and .xlsx", "Includes the legacy binary formats, which do not support sensitivity labels the way the Open XML formats do."],
        [".docx only / .xlsx only", "Both Open XML formats support labels; listing only one of them is incomplete."]
      ],
      concept: "Built-in sensitivity labeling is part of Microsoft 365 Apps and Office for the web, and labels are stored as metadata in Office Open XML files.",
      takeaway: "Perpetual Office 2016/2019 needed the AIP add-in; label the Open XML formats (.docx, .xlsx), not .doc or .xls.",
      refs: [
        ["Microsoft Learn: Manage sensitivity labels in Office apps", "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"],
        ["Microsoft Learn: Enable sensitivity labels for Office files in SharePoint and OneDrive", "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"]
      ]
    }
  },
  {
    id: "Q101", source: 101, type: "yesno",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You create a retention label as shown in the Retention Label exhibit. (Click the Retention Label tab.)",
      { image: "q101-retention-label.png", alt: "Retention Label exhibit: Create retention label wizard, Review and finish page. Name: 6Months. Retention period: 6 months. Retention action: Retain and Delete. Based on: Based on when it was created." },
      "You create a label policy as shown in the Label Policy exhibit. (Click the Label Policy tab.)",
      { image: "q101-label-policy.png", alt: "Label Policy exhibit: Auto-labeling > Create auto-labeling policy wizard, step Info to label > Create content query. The page Apply label to content matching this query has one condition, the keyword query ProjectX. The steps Scope, Label and Finish follow." },
      "The label policy is configured as shown in the following table.",
      { table: { head: ["Configuration", "Value"], rows: [["Label to auto-apply", "6Months"], ["Locations", "Exchange email"]] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Any sent email message that contains the word ProjectX will be deleted immediately." },
      { text: "Any sent email message that contains the word ProjectX will be retained for six months." },
      { text: "Users are required to manually apply a label to email messages that contain the word ProjectX." }
    ],
    answer: [false, true, false],
    explanation: {
      correct: [
        "The policy is an auto-apply policy: it applies the 6Months label automatically to items in Exchange email that match the keyword query ProjectX. The label's settings then govern those messages: retain for 6 months, counted from when the item was created, and delete at the end of that period.",
        "Statement 1 is No: the action is retain and then delete, so a matching message is kept for six months first and is deleted only at the end of that period. Statement 2 is Yes: that six-month retention is exactly what the label enforces. Statement 3 is No: the auto-apply policy labels matching messages without any action from users (it can take a few days after the policy is created before labels start being applied)."
      ],
      wrong: [
        ["Statement 1 — Yes", "Deletion happens at the end of the retention period, six months after creation, not when the message is sent."],
        ["Statement 2 — No", "The label applied to matching messages retains them for six months, so the statement is true."],
        ["Statement 3 — Yes", "This is an auto-labeling policy with a keyword query. Manual application is what a publishing label policy is for."]
      ],
      concept: "An auto-apply retention label policy applies a label to content that matches a condition, such as a keyword query, and the label's retain-and-delete settings then apply.",
      takeaway: "Auto-apply policy = no user action; Retain and Delete = keep for the period, then delete.",
      refs: [
        ["Microsoft Learn: Automatically apply a retention label to retain or delete content", "https://learn.microsoft.com/purview/apply-retention-labels-automatically"],
        ["Microsoft Learn: Learn about retention policies and retention labels", "https://learn.microsoft.com/purview/retention"]
      ]
    }
  },
  {
    id: "Q102", source: 102, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "Your company has a customer ID associated to each customer. The customer IDs contain 10 numbers followed by 10 characters. The following is a sample customer ID: 12-456-7890-abc-de-fghij.",
      "You plan to create a data loss prevention (DLP) policy that will detect messages containing customer IDs.",
      "What should you create to ensure that the DLP policy can detect the customer IDs?"
    ],
    options: [
      { key: "A", text: "a PowerShell script" },
      { key: "B", text: "a sensitivity label" },
      { key: "C", text: "a sensitive information type" },
      { key: "D", text: "a retention label" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "DLP policies detect content through sensitive information types. Microsoft provides built-in types for things like credit card or passport numbers, but no built-in type knows a company's own customer ID format. You therefore create a custom sensitive information type whose primary element is a regular expression for the pattern (groups of digits followed by groups of letters, separated by hyphens), optionally with supporting keywords and confidence levels.",
        "The DLP policy then uses that custom type in its Content contains condition, and messages that contain a customer ID match the rule."
      ],
      wrong: [
        ["A", "A script is not something a DLP policy can use as a condition. Detection has to be defined as a sensitive information type (which you can also create with PowerShell, but the object you need is the type)."],
        ["B", "A sensitivity label classifies and protects content once it is applied. It does not describe a data pattern for DLP to find."],
        ["D", "A retention label controls how long content is kept. It plays no part in detecting customer IDs."]
      ],
      concept: "Custom sensitive information types use regular expressions, keywords and confidence levels to detect organization-specific identifiers.",
      takeaway: "Company-specific ID format for DLP: create a custom sensitive information type.",
      refs: [
        ["Microsoft Learn: Create custom sensitive information types", "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"],
        ["Microsoft Learn: Learn about sensitive information types", "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"]
      ]
    }
  },
  {
    id: "Q103", source: 103, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You define a retention label that has the following settings:",
      { list: ["Retention period: 7 years", "Start the retention period based on: When items were created"] },
      "You need to prevent the removal of the label once the label is applied to a file.",
      "What should you select in the retention label settings?"
    ],
    options: [
      { key: "A", text: "Retain items forever or for a specific period" },
      { key: "B", text: "Mark items as a regulatory record" },
      { key: "C", text: "Mark items as a record" },
      { key: "D", text: "Retain items even if users delete" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "A retention label can simply retain content, or it can also mark the content as a record or as a regulatory record, and each step adds restrictions. With a standard retention label, users can still change or remove the label. Marking items as a record blocks deleting the item and restricts editing it, but changing or removing the label is still allowed for the site (container) administrator.",
        "Marking items as a **regulatory record** is the only choice where nobody, not even an administrator, can remove or change the label once it is applied, and the label cannot be made less restrictive afterwards. It is the setting that prevents the removal of the label. The option is hidden by default and is made available in the label settings with the PowerShell cmdlet `Set-RegulatoryComplianceUI -Enabled $true`."
      ],
      wrong: [
        ["A", "This is the retention setting itself, which the label already has (7 years). It keeps the content but does not stop the label from being removed."],
        ["C", "A record locks the item against edits and deletion, but a site administrator can still change or remove the label."],
        ["D", "Keeping a copy when users delete an item preserves the content (in the Preservation Hold library). It does not lock the label on the file."]
      ],
      concept: "Retention labels, records and regulatory records restrict progressively more actions; only a regulatory record blocks label removal for everyone.",
      takeaway: "Label must never be removed, even by admins: mark items as a regulatory record.",
      refs: [
        ["Microsoft Learn: Records management (compare restrictions)", "https://learn.microsoft.com/purview/records-management#compare-restrictions-for-what-actions-are-allowed-or-blocked"],
        ["Microsoft Learn: Declare records by using retention labels", "https://learn.microsoft.com/purview/declare-records"]
      ]
    }
  },
  {
    id: "Q104", source: 104, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You configure a data loss prevention (DLP) policy named DLP1 with a rule configured as shown in the following exhibit.",
      { image: "q104-dlp-rule.png", alt: "Create rule page, Conditions section: We'll apply this policy to content that matches these conditions. One Content contains condition holds a group named Default whose group operator is set to Any of these. The group contains, under Sensitive info types, Credit Card Number with High confidence and instance count 1 to Any, and under Retention labels, RetentionLabel1. Below are the Add and Create group links and an Add condition link." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "DLP1 cannot be applied to [answer choice].", options: ["Exchange email", "SharePoint sites", "OneDrive accounts"] },
      { id: "f2", label: "DLP1 will be applied only to documents that have [answer choice].", options: ["both a credit card number and the RetentionLabel1 label applied", "either a credit card number or the RetentionLabel1 label applied", "between 85 and 100 credit card numbers"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "Box 1: the conditions a DLP rule can use depend on the locations of its policy. Retention labels as part of the Content contains condition are available for SharePoint sites and OneDrive accounts, but not for Exchange email. A rule that tests for RetentionLabel1 therefore cannot be part of a policy that is applied to Exchange email.",
        "Box 2: the reference answer is both a credit card number and the RetentionLabel1 label applied. The rule has one Content contains condition with two items, the Credit Card Number sensitive information type (high confidence, instance count 1 to Any) and the retention label RetentionLabel1, and the key reads them as two requirements a document must meet together. What is true in general: the operator beside a group name decides how its items combine. All of these requires every item to match, Any of these is satisfied by any one of them, and Create group adds further groups that are joined with AND or OR."
      ],
      wrong: [
        ["SharePoint sites / OneDrive accounts", "These are the locations where retention labels can be used as a DLP condition, so DLP1 can be applied to them."],
        ["between 85 and 100 credit card numbers", "The instance count is 1 to Any: a single credit card number at high confidence is enough, and there is no upper limit."],
        ["either a credit card number or the RetentionLabel1 label applied", "The reference answer treats the credit card number and the retention label as requirements that must both be met."]
      ],
      concept: "DLP conditions are location-dependent (retention labels only for SharePoint and OneDrive), and the items of a condition group are combined by the group operator.",
      takeaway: "Retention label in a DLP condition: the policy can cover SharePoint and OneDrive, not Exchange email.",
      logic: "Read the instance count first to rule out the 85 to 100 range; then look at which locations support retention labels as a condition.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Publish retention labels and apply them in apps", "https://learn.microsoft.com/purview/create-apply-retention-labels"]
      ]
    }
  },
  {
    id: "Q105", source: 105, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-user2-upn", caseOrder: 4,
    stem: [
      "Solution: From the on-premises Active Directory domain, you assign User2 the Allow logon locally user right. You instruct User2 to sign in as User2@fabrikam.com.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "User2's UPN suffix is Fabrikam.com, while the Azure AD tenant is contoso.com. Azure AD Connect sync runs with password hash sync and pass-through authentication, but a user can sign in to Azure AD only with a UPN whose domain is verified in the tenant. When the on-premises UPN suffix is not a verified domain, the synced cloud account gets a UPN in the tenant's initial onmicrosoft.com domain instead, so no Azure AD account answers to the fabrikam.com UPN and the sign-in fails.",
        "The Allow log on locally user right is a Windows security policy setting that controls who may sign in interactively at a computer. It changes nothing in Azure AD: User2's cloud UPN stays the same, and User2 is told to sign in with the same fabrikam.com UPN that already fails. The fix is to give User2 a UPN suffix in a verified domain (contoso.com), or to add and verify fabrikam.com in the tenant."
      ],
      wrong: [
        ["A", "A local logon right does not affect Azure AD authentication or the UPN of the synced cloud account, so User2 still cannot sign in with the fabrikam.com UPN."]
      ],
      concept: "Users sign in to Azure AD with their cloud UPN, which keeps the on-premises UPN suffix only if that domain is verified in the tenant.",
      takeaway: "Sign-in fails because of the UPN suffix: change the suffix to a verified domain or verify the domain; user rights on-premises do not help.",
      refs: [
        ["Microsoft Learn: Microsoft Entra UserPrincipalName population", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname"],
        ["Microsoft Learn: Add your custom domain name to your tenant", "https://learn.microsoft.com/entra/fundamentals/add-custom-domain"]
      ]
    }
  },
  {
    id: "Q106", source: 106, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    caseId: "series-secadmin1", caseOrder: 1,
    stem: [
      "Solution: From the Microsoft 365 admin center, you assign SecAdmin1 the SharePoint Administrator role.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The Defender for Office 365 settings and policies for Microsoft Teams, SharePoint and OneDrive (Safe Attachments for SharePoint, OneDrive and Microsoft Teams, Safe Links for Teams, and the threat policies around them) are managed in the Microsoft Defender portal. The Microsoft Entra roles that give these permissions are Security Administrator and Global Administrator.",
        "SharePoint Administrator is a workload role for the SharePoint admin center: it creates and manages sites, site admins and sharing settings, and manages Microsoft 365 groups. It does not grant permissions to manage Defender for Office 365 policies, even the ones that protect SharePoint and OneDrive, so the goal is not met."
      ],
      wrong: [
        ["A", "Protecting SharePoint and OneDrive content with Defender for Office 365 is a security task in the Defender portal, not a SharePoint administration task."]
      ],
      concept: "Defender for Office 365 policies are managed with security roles (Security Administrator, or Email & collaboration role groups), not with workload admin roles.",
      takeaway: "Defender for Office 365 for Teams, SharePoint and OneDrive: Security Administrator, not the workload's admin role.",
      refs: [
        ["Microsoft Learn: Turn on Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-configure"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q107", source: 107, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    caseId: "series-secadmin1", caseOrder: 2,
    stem: [
      "Solution: From the Microsoft Entra admin center, you assign SecAdmin1 the Security Administrator role.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Security Administrator is the Microsoft Entra role for managing security features across Microsoft 365, including the Microsoft Defender portal. Members can create and change Defender for Office 365 policies and settings, such as Safe Attachments for SharePoint, OneDrive and Microsoft Teams, Safe Links (which also covers Teams), anti-phishing and anti-malware policies.",
        "The Defender for Office 365 documentation lists Security Administrator (or Global Administrator) as the Microsoft Entra roles that grant these permissions, and Security Administrator does so without the full control of Global Administrator. Assigning the role in the Microsoft Entra admin center or in the Microsoft 365 admin center has the same effect, so the goal is met."
      ],
      wrong: [
        ["B", "Security Administrator is exactly the role meant for managing Defender for Office 365 policies for every workload, including Teams, SharePoint and OneDrive."]
      ],
      concept: "The Security Administrator role grants management of security policies in the Microsoft Defender portal, including Defender for Office 365.",
      takeaway: "Manage Defender for Office 365 policies with least privilege: Security Administrator.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles (Security Administrator)", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#security-administrator"],
        ["Microsoft Learn: Turn on Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-configure"]
      ]
    }
  },
  {
    id: "Q108", source: 108, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    caseId: "series-secadmin1", caseOrder: 3,
    stem: [
      "Solution: From the Microsoft 365 admin center, you assign SecAdmin1 the Exchange Administrator role.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Exchange Administrator is the workload role for Exchange Online: mailboxes, mail flow, connectors and other Exchange settings. The requirement is about Defender for Office 365 protection for Microsoft Teams, SharePoint and OneDrive, which is configured in the Microsoft Defender portal.",
        "The Microsoft Entra roles that the Defender for Office 365 documentation names for these settings are Security Administrator and Global Administrator. Exchange Administrator is not the role for managing security policies that cover Teams, SharePoint and OneDrive, so the solution does not meet the goal."
      ],
      wrong: [
        ["A", "The Exchange Administrator role is scoped to Exchange Online administration. Managing Defender for Office 365 across Teams, SharePoint and OneDrive calls for the Security Administrator role."]
      ],
      concept: "Workload admin roles (Exchange, SharePoint, Teams) manage their own service; Defender for Office 365 policies belong to the security roles.",
      takeaway: "Exchange, SharePoint or Teams Administrator does not meet a Defender for Office 365 management requirement; Security Administrator does.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"],
        ["Microsoft Learn: Turn on Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-configure"]
      ]
    }
  },
  {
    id: "Q109", source: 109, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    caseId: "litware", caseOrder: 1,
    stem: [
      "You need to configure the Office 365 service status notifications and limit access to the service and feature updates. The solution must meet the technical requirements.",
      "What should you configure in the Microsoft 365 admin center? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To configure the notifications:", options: ["Briefing email", "Help desk information", "Organization information"] },
      { id: "f2", label: "To limit access:", options: ["Privileged Access", "Release preferences", "Office installation options"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "Notifications: the technical requirements say that Office 365 service status notifications must be sent to Admin2. In the Microsoft 365 admin center, Settings > Org settings > Organization profile > Organization information holds the organization's name, address, phone number and technical contact, and the technical contact is the address Microsoft uses to send technical notifications about the organization's subscription. Entering Admin2 as the technical contact is the choice among these options that sends the notifications to Admin2.",
        "Limit access: Litware's problem is that users get new Office 365 service and feature updates before Admin2 has reviewed them, and only Admin2 must get them early. Release preferences (Settings > Org settings > Organization profile) offers Standard release, Targeted release for everyone and Targeted release for select users. Choosing Targeted release for select users and adding only Admin2 gives Admin2 the early updates while everyone else stays on Standard release."
      ],
      wrong: [
        ["Briefing email", "The Briefing email from Microsoft Viva sends users a daily summary of their own meetings and tasks. It has nothing to do with service status."],
        ["Help desk information", "This adds your own help desk contact details to the help pane that users see in Microsoft 365. It does not route notifications from Microsoft."],
        ["Privileged Access", "Privileged access management requires approval for specific Exchange Online tasks. It does not control who receives new features first."],
        ["Office installation options", "These settings choose the update channel and which Office desktop apps users can install, which relates to app versions, not to early access to service and feature updates."]
      ],
      concept: "Release preferences control which users get targeted (early) release of Microsoft 365 updates, and the organization profile holds the contact Microsoft uses for technical notices.",
      takeaway: "Early access for one admin only: Release preferences > Targeted release for select users.",
      refs: [
        ["Microsoft Learn: Set up the Standard or Targeted release options", "https://learn.microsoft.com/microsoft-365/admin/manage/release-options-in-office-365"],
        ["Microsoft Learn: Change your organization's address, technical contact, and more", "https://learn.microsoft.com/microsoft-365/admin/manage/change-address-contact-and-more"]
      ]
    }
  },
  {
    id: "Q110", source: 110, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Basic",
    caseId: "litware", caseOrder: 2,
    stem: [
      "You need to configure Azure AD Connect to support the planned changes for the Montreal Users and Seattle Users OUs.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From PowerShell, run the `Add-ADSyncConnectorAttributeInclusion` cmdlet." },
      { key: "B", text: "From the Microsoft Azure AD Connect wizard, select Manage federation." },
      { key: "C", text: "From the Microsoft Azure AD Connect wizard, select Customize synchronization options." },
      { key: "D", text: "From PowerShell, run the `Start-ADSyncSyncCycle` cmdlet." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Azure AD Connect currently synchronizes the LitwareAdmins OU only, and the planned change is to also sync the Montreal Users OU and the Seattle Users OU. Which OUs are in scope is set by domain and OU filtering.",
        "To change it, you rerun the Azure AD Connect wizard and select the task **Customize synchronization options**. On the Domain and OU filtering page you select the Montreal Users and Seattle Users OUs in addition to LitwareAdmins, and when the wizard finishes, a synchronization brings the users of those OUs into Azure AD."
      ],
      wrong: [
        ["A", "This cmdlet adds attributes to a connector's attribute inclusion list. It works on which attributes are synchronized, not on which OUs are in scope."],
        ["B", "Manage federation covers AD FS tasks. Litware uses password hash synchronization, and federation has nothing to do with the sync scope."],
        ["D", "`Start-ADSyncSyncCycle` starts a synchronization run with the current configuration. Without changing the OU filter first, the new OUs are still not synchronized."]
      ],
      concept: "The OUs that Azure AD Connect synchronizes are chosen with domain and OU filtering, which the wizard exposes through Customize synchronization options.",
      takeaway: "Add OUs to the sync scope: Azure AD Connect wizard > Customize synchronization options > Domain and OU filtering.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Custom installation of Microsoft Entra Connect", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-install-custom"]
      ]
    }
  },
  {
    id: "Q111", source: 111, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    caseId: "fabrikam", caseOrder: 5,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "host (A)" },
      { key: "B", text: "alias (CNAME)" },
      { key: "C", text: "text (TXT)" },
      { key: "D", text: "host (AAAA)" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Before Project1 can move mailboxes, Fabrikam has to add fabrikam.com to the Microsoft 365 subscription, and adding a domain starts with proving ownership. Microsoft 365 gives you a verification value to publish as a TXT record (an MX record is the alternative) in the domain's public DNS zone, which here is on Fabrikam's external DNS server.",
        "The TXT record only proves ownership and affects nothing else in the domain. That matters for Fabrikam: during Project1 most mailboxes stay on the on-premises Exchange servers and users must keep exchanging email with their current addresses, so the verification step must not disturb mail flow."
      ],
      wrong: [
        ["A", "An A record maps a host name to an IPv4 address, for example for a website. Microsoft 365 does not use it to verify a domain."],
        ["B", "CNAME records such as autodiscover are service records you may add after the domain is verified. They are not the verification record."],
        ["D", "An AAAA record maps a host name to an IPv6 address. It is not used for domain verification."]
      ],
      concept: "Adding a custom domain to Microsoft 365 requires proving ownership with a TXT (or MX) record in the domain's public DNS.",
      takeaway: "Adding a domain to Microsoft 365: the record to create first is the TXT verification record.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Add DNS records to connect your domain", "https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider"]
      ]
    }
  },
  {
    id: "Q112", source: 112, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    caseId: "series-secadmin1", caseOrder: 4,
    stem: [
      "Solution: From the Microsoft 365 admin center, you assign SecAdmin1 the Teams Administrator role.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Teams Administrator manages the Microsoft Teams service in the Teams admin center: teams, meeting and messaging policies, calling, devices and the Microsoft 365 groups behind teams. Defender for Office 365 protection for Teams, SharePoint and OneDrive, such as Safe Attachments and Safe Links, is configured in the Microsoft Defender portal and is outside that role.",
        "The roles that grant the required permissions are Security Administrator (or Global Administrator). As with the SharePoint and Exchange Administrator roles, assigning the workload's own admin role does not meet the goal."
      ],
      wrong: [
        ["A", "Teams Administrator does not grant permissions to manage Defender for Office 365 policies, even those that protect Teams."]
      ],
      concept: "Workload admin roles do not include Defender for Office 365 policy management; that belongs to the Security Administrator role.",
      takeaway: "Teams Administrator manages Teams, not the Defender for Office 365 policies that protect it.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"],
        ["Microsoft Learn: Safe Attachments for SharePoint, OneDrive, and Microsoft Teams", "https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-about"]
      ]
    }
  }
);
