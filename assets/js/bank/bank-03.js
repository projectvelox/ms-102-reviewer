/* MS-102 question bank, part 3: questions 33 to 48 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q033", source: 33, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You register two applications named App1 and App2 to Azure AD.",
      "You need to ensure that users who connect to App1 require multi-factor authentication (MFA). MFA is required only for App1. What should you do?"
    ],
    options: [
      { key: "A", text: "From the Microsoft Entra admin center, create a conditional access policy." },
      { key: "B", text: "From the Microsoft 365 admin center, configure the Modem authentication settings." },
      { key: "C", text: "From the Enterprise applications blade of the Microsoft Entra admin center, configure the Users settings." },
      { key: "D", text: "From Multi-Factor Authentication, configure the service settings." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Conditional Access is the Microsoft Entra ID (formerly Azure AD) feature that applies access controls per application. A policy that includes the users, targets App1 under **Target resources** and sets the grant control **Require multifactor authentication** asks for MFA only when someone signs in to App1. App2 is not in the policy, so its sign-ins are unchanged, which is exactly the requirement that MFA applies only to App1.",
        "You create the policy in the Microsoft Entra admin center under Protection > Conditional Access. The users it applies to need Microsoft Entra ID P1 licenses."
      ],
      wrong: [
        ["B", "The Modern authentication settings in the Microsoft 365 admin center control whether Office clients such as Outlook connect with modern authentication. They do not require MFA and cannot single out one application."],
        ["C", "The user settings of Enterprise applications control what users may do with applications, for example whether they can consent to apps. They contain no MFA setting."],
        ["D", "The service settings of legacy per-user MFA set options such as trusted IPs, app passwords and the allowed verification methods. Per-user MFA applies to a user's sign-ins to every application, so it cannot limit MFA to App1."]
      ],
      concept: "A Conditional Access policy combines assignments (users, target resources, conditions) with access controls, so MFA can be required for one application only.",
      takeaway: "MFA for a single app: a Conditional Access policy that targets that app and grants access only with Require multifactor authentication.",
      refs: [
        ["Microsoft Learn: What is Conditional Access?", "https://learn.microsoft.com/entra/identity/conditional-access/overview"],
        ["Microsoft Learn: Targeting resources in Conditional Access policies", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"]
      ]
    }
  },
  {
    id: "Q034", source: 34, type: "dropdown",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to implement identity protection. The solution must meet the following requirements:",
      "Identify when a user's credentials are compromised and shared on the dark web.",
      "Provide users that have compromised credentials with the ability to self-remediate.",
      "What should you do? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To identify when users have compromised credentials, configure:", options: ["A registration policy", "A sign-in risk policy", "A user risk policy", "A multifactor authentication registration policy"] },
      { id: "f2", label: "To enable self-remediation, select:", options: ["Generate a temporary password", "Require multi-factor authentication", "Require password change"] }
    ],
    answer: { f1: 2, f2: 2 },
    explanation: {
      correct: [
        "Microsoft Entra ID Protection rates two kinds of risk. Sign-in risk is the probability that a particular authentication request was not made by the owner of the account. User risk is the probability that the identity itself is compromised. **Leaked credentials**, the detection raised when Microsoft finds a user's valid username and password, for example posted on the dark web, is a user risk detection. The policy that acts on it is therefore a **user risk policy**.",
        "In a user risk policy, the access control **Require password change** lets users remediate the risk themselves: after completing MFA, the user changes the password (a secure password change), and the user risk is cleared without an administrator. This works for users who are already registered for MFA, which is why the MFA registration policy is usually deployed alongside."
      ],
      wrong: [
        ["A sign-in risk policy", "Sign-in risk scores individual sign-ins, such as one from an anonymous IP address or an unfamiliar location. Leaked credentials raise the user risk, not the risk of a sign-in."],
        ["A registration policy / A multifactor authentication registration policy", "A registration policy makes users register authentication methods. It is a prerequisite for self-remediation, but it detects nothing."],
        ["Require multi-factor authentication", "MFA is the self-remediation control for sign-in risk. Passing MFA does not change a password that is known to an attacker; user risk from leaked credentials is remediated by a password change."],
        ["Generate a temporary password", "Generating a temporary password is an action an administrator takes on a risky user. It is not self-remediation."]
      ],
      concept: "User risk measures the likelihood that an identity is compromised (leaked credentials raise it), and a user risk policy that requires a password change lets users remediate it themselves.",
      takeaway: "Leaked credentials: user risk policy with Require password change. Risky sign-in: sign-in risk policy with Require MFA.",
      refs: [
        ["Microsoft Learn: Risk-based access policies", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-policies"],
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"],
        ["Microsoft Learn: Remediate risks and unblock users", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-remediate-unblock"]
      ]
    }
  },
  {
    id: "Q035", source: 35, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Advanced",
    stem: [
      "Your network contains an on-premises Active Directory domain and a Microsoft 365 subscription.",
      "The domain contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "In organizational unit (OU)"], rows: [
        ["User1", "Group1", "OU1"],
        ["User2", "Group2", "OU1"]
      ] } },
      "The domain contains the groups shown in the following table.",
      { table: { head: ["Name", "Member of", "In OU"], rows: [
        ["Group1", "None", "Sales"],
        ["Group2", "Group1", "OU1"]
      ] } },
      "You are deploying Azure AD Connect.",
      "You configure Domain and OU filtering as shown in the following exhibit.",
      { image: "q035-domain-ou-filtering.png", alt: "Microsoft Azure Active Directory Connect wizard, Domain and OU filtering page. Directory: Adatum.com. The option Sync selected domains and OUs is selected. In the tree under Adatum.com, only OU1 is checked. Builtin, Computers, Development, Domain Controllers, ForeignSecurityPrincipals, Infrastructure, IT, LostAndFound, Managed Service Accounts, Managers, Marketing, Program Data, Sales, System and Users are not checked." },
      "You configure Filter users and devices as shown in the following exhibit.",
      { image: "q035-filter-users-devices.png", alt: "Microsoft Azure Active Directory Connect wizard, Filter users and devices page. The page reads: For a pilot deployment, specify a group containing your users and devices that will be synchronized. Nested groups are not supported and will be ignored. Synchronize selected is chosen. For the forest Adatum.com, the group is CN=Group1,OU=Sales,DC=Adatum,DC=com, resolved with a green check mark." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 syncs to Azure AD." },
      { text: "User2 syncs to Azure AD." },
      { text: "Group2 syncs to Azure AD." }
    ],
    answer: [false, false, false],
    explanation: {
      correct: [
        "With **Synchronize selected** on the Filter users and devices page, Azure AD Connect (now Microsoft Entra Connect) synchronizes only the direct members of the named group, here Group1. Nested membership is not resolved: when a group is a member, only that group object is included, not its members. When this group-based filter is combined with Domain and OU filtering, the OUs that hold the group and its members must also be included, because objects outside the selected OUs are not read at all.",
        "Group1 is in the Sales OU, and the Domain and OU filtering exhibit selects only OU1. The filtering group itself is therefore out of scope, and nothing qualifies through it. User1 is a direct member of Group1 and sits in OU1, but without Group1 in scope User1 is not synchronized (No). User2 is a member of Group2 only, so User2 would reach Group1 only through nesting, which the filter ignores in any case (No). Group2 is a direct member of Group1 and is in OU1, so it would normally be synchronized as a group object, but that too depends on Group1 being in scope (No)."
      ],
      wrong: [
        ["Statement 1 — Yes", "User1 is in a synchronized OU and is a direct member of Group1, but the filtering group must itself be in a synchronized OU. The Sales OU is not selected."],
        ["Statement 2 — Yes", "User2 is in Group1 only through Group2. Nested groups are ignored by this filter, and the OU of Group1 is out of scope as well."],
        ["Statement 3 — Yes", "Group2's own OU is selected, but Group2 is included only through its membership of Group1, which is not read because the Sales OU is excluded."]
      ],
      concept: "Group-based filtering in Azure AD Connect includes only the direct members of one group per forest, and both the group and its members must be in OUs that Domain and OU filtering includes.",
      takeaway: "If the pilot group sits in an excluded OU, nothing syncs through it. Check the group's OU, direct membership and the absence of nesting.",
      logic: "Read the distinguished name of the filter group first: OU=Sales is not checked, so all three statements are No.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering (group-based filtering)", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Custom installation of Microsoft Entra Connect", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-install-custom"]
      ]
    }
  },
  {
    id: "Q036", source: 36, type: "yesno",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Multi-factor authentication (MFA) method registered"], rows: [
        ["User1", "Group1", "Microsoft Authenticator app (push notification)"],
        ["User2", "Group2", "Microsoft Authenticator app (push notification)"],
        ["User3", "Group1", "None"]
      ] } },
      "You configure the Microsoft Authenticator authentication method policy to enable passwordless authentication as shown in the following exhibit.",
      { image: "q036-authenticator-policy.png", alt: "Microsoft Authenticator authentication method policy, Enable and Target tab. Enable is turned on. On the Include tab, Target is set to Select groups (not All users). One group is listed: Name Group1, Type Group, Registration Optional, Authentication mode Any." },
      "Both User1 and User2 report that they are NOT prompted for passwordless sign-in in the Microsoft Authenticator app.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 will be prompted for passwordless authentication once User1 sets up phone sign-in in the Microsoft Authenticator app." },
      { text: "User2 will be prompted for passwordless authentication once User2 sets up phone sign-in in the Microsoft Authenticator app." },
      { text: "User3 can use passwordless authentication without further action." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "Passwordless phone sign-in with Microsoft Authenticator needs three things: the Authenticator policy must target the user with an authentication mode that allows passwordless (here **Any**, which allows both push notifications and passwordless sign-in), the user must have registered the Authenticator app, and the user must turn on **phone sign-in** in the app (Enable phone sign-in). Until that last step, the app only offers push approvals, which is why User1 is not prompted for passwordless sign-in yet.",
        "User1 is in Group1, the targeted group, and already has Authenticator registered, so once User1 sets up phone sign-in in the app, User1 gets passwordless prompts (Yes). User2 is in Group2, which the policy does not target, so passwordless phone sign-in is not enabled for User2 (No). User3 is in Group1 but has registered no method, so User3 still has to register the app and enable phone sign-in (No)."
      ],
      wrong: [
        ["Statement 1 — No", "Nothing else stands in User1's way: the policy targets Group1 with the mode Any, and Authenticator is registered. Enabling phone sign-in is the only missing step."],
        ["Statement 2 — Yes", "Passwordless phone sign-in works only for users that the Authenticator policy targets, and only Group1 is targeted."],
        ["Statement 3 — Yes", "Being targeted is not enough. User3 has no Authenticator registration, so the app and phone sign-in still have to be set up."]
      ],
      concept: "Passwordless phone sign-in requires the user to be targeted by the Microsoft Authenticator policy, to have Authenticator registered, and to enable phone sign-in in the app.",
      takeaway: "Not prompted for passwordless? Check the policy's target group, its authentication mode (Any or Passwordless) and whether phone sign-in is enabled in the app.",
      refs: [
        ["Microsoft Learn: Enable passwordless sign-in with Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone"],
        ["Microsoft Learn: Passwordless authentication options for Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"]
      ]
    }
  },
  {
    id: "Q037", source: 37, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement Microsoft Purview policies to meet the following requirements:",
      "Identify documents that are stored in Microsoft Teams and SharePoint that contain Personally Identifiable Information (PII).",
      "Report on shared documents that contain PII.",
      "What should you create?"
    ],
    options: [
      { key: "A", text: "a data loss prevention (DLP) policy" },
      { key: "B", text: "a retention policy" },
      { key: "C", text: "an alert policy" },
      { key: "D", text: "a Microsoft Defender for Cloud Apps policy" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "A data loss prevention (DLP) policy inspects the content in its locations, including SharePoint sites and Teams chat and channel messages, for sensitive information types such as the built-in PII types (national identification numbers, addresses, passport numbers and so on). Privacy templates bundle these types, and a policy can run in simulation mode, raise alerts, send incident reports and show its matches in the DLP reports and Activity explorer.",
        "A DLP rule can also use the condition that content is shared from Microsoft 365, with people inside or outside the organization, so the policy reports on the shared documents that contain PII. One DLP policy covers both requirements."
      ],
      wrong: [
        ["B", "A retention policy keeps or deletes content for a set period. It does not look for PII or report on sharing."],
        ["C", "Alert policies raise alerts on activities recorded in the audit log, such as a file being shared. They do not inspect the content of documents for PII."],
        ["D", "Defender for Cloud Apps file policies can also scan files in connected apps, but Defender for Cloud Apps is part of Microsoft Defender XDR, not a Microsoft Purview policy."]
      ],
      concept: "DLP policies detect sensitive information such as PII in Microsoft 365 locations, can act on it, and report on the matches.",
      takeaway: "Find and report on sensitive data that is stored or shared in SharePoint, OneDrive or Teams: a DLP policy.",
      refs: [
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"],
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"]
      ]
    }
  },
  {
    id: "Q038", source: 38, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the resources shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Group1", "Microsoft 365 group"],
        ["Group2", "Distribution group"],
        ["Site1", "Microsoft SharePoint site"]
      ] } },
      "You create a sensitivity label named Label1.",
      "To which resource can you apply Label1?"
    ],
    options: [
      { key: "A", text: "Group1 only" },
      { key: "B", text: "Group2 only" },
      { key: "C", text: "Site1 only" },
      { key: "D", text: "Group1 and Group2 only" },
      { key: "E", text: "Group1, Group2, and Site1" }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "The reference answer is E.",
        "Sensitivity labels classify items (files and emails) and, when the label's scope includes **Groups & sites**, also containers. Microsoft's documentation lists the containers that support these labels as Microsoft 365 groups, Teams sites, SharePoint sites, Viva Engage communities and Loop workspaces. Label1 can therefore be applied to Group1, a Microsoft 365 group, and to Site1, a SharePoint site. Labels for containers first have to be turned on for the tenant (the `EnableMIPLabels` setting in Microsoft Entra ID) and synchronized with `Execute-AzureAdLabelSync`.",
        "Distribution groups are not among the containers in that list. A label whose scope includes emails can still be applied to the messages that users send to a distribution group."
      ],
      wrong: [
        ["A", "Group1 supports container labels, but so does Site1, a SharePoint site."],
        ["B", "A distribution group is not one of the containers that the documentation lists for sensitivity labels, and this option leaves out Group1 and Site1."],
        ["C", "Site1 supports container labels, but so does Group1, a Microsoft 365 group."],
        ["D", "This option leaves out Site1, although SharePoint sites are one of the main containers for sensitivity labels."]
      ],
      concept: "Sensitivity labels with the Groups & sites scope protect containers such as Microsoft 365 groups, Teams and SharePoint sites through privacy, external access and sharing settings.",
      takeaway: "Container labels apply to Microsoft 365 groups, Teams and SharePoint sites (and Viva Engage communities and Loop workspaces).",
      refs: [["Microsoft Learn: Use sensitivity labels to protect collaborative workspaces (groups and sites)", "https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites"]]
    }
  },
  {
    id: "Q039", source: 39, type: "dropdown",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to meet the following requirements:",
      "Automatically encrypt documents stored in Microsoft OneDrive and SharePoint.",
      "Enable co-authoring for Microsoft Office documents encrypted by using a sensitivity label.",
      "Which two settings should you use in the Microsoft Purview compliance portal? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Automatically encrypt documents stored in Microsoft OneDrive and SharePoint", options: ["Catalog", "Audit", "Content search", "Communication compliance", "Data loss prevention", "eDiscovery", "Data lifecycle management", "Information protection", "Information barriers", "Insider risk management", "Records management", "Priva Privacy Risk Managem...", "Priva Subject Rights Requests", "Settings"] },
      { id: "f2", label: "Enable co-authoring for Microsoft Office documents encrypted by using a sensitivity label", options: ["Catalog", "Audit", "Content search", "Communication compliance", "Data loss prevention", "eDiscovery", "Data lifecycle management", "Information protection", "Information barriers", "Insider risk management", "Records management", "Priva Privacy Risk Managem...", "Priva Subject Rights Requests", "Settings"] }
    ],
    answer: { f1: 7, f2: 13 },
    explanation: {
      correct: [
        "Documents that are already stored in SharePoint and OneDrive are encrypted automatically by an auto-labeling policy, which you create under **Information protection**. The policy applies a sensitivity label whose settings include encryption to the matching files in the selected sites and accounts, without any action by users. Sensitivity labels for Office files in SharePoint and OneDrive must be turned on so that these services can process the labeled and encrypted files.",
        "Co-authoring of Office files encrypted with a sensitivity label is a tenant-wide option, **Co-authoring for files with sensitivity labels**, that you turn on under **Settings** in the compliance portal. It changes how the label metadata is stored in Office files, so that several users can edit an encrypted document at the same time."
      ],
      wrong: [
        ["Data loss prevention", "DLP policies can restrict access to sensitive files, but encrypting files with a sensitivity label is done by an auto-labeling policy in Information protection."],
        ["Data lifecycle management", "This solution holds retention policies and retention labels. Retention does not encrypt documents."],
        ["Records management", "Records management declares items as records with retention labels. It has nothing to do with encryption or co-authoring."],
        ["Information barriers", "Information barriers restrict communication and collaboration between groups of users. They do not encrypt documents."]
      ],
      concept: "Auto-labeling policies in Information protection apply encrypting sensitivity labels to SharePoint and OneDrive files, and co-authoring of encrypted files is turned on once for the tenant in Settings.",
      takeaway: "Encrypt files at rest automatically: Information protection (auto-labeling). Co-author encrypted files: Settings > Co-authoring for files with sensitivity labels.",
      refs: [
        ["Microsoft Learn: Apply a sensitivity label to content automatically", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"],
        ["Microsoft Learn: Enable co-authoring for files encrypted with sensitivity labels", "https://learn.microsoft.com/purview/sensitivity-labels-coauthoring"],
        ["Microsoft Learn: Enable sensitivity labels for Office files in SharePoint and OneDrive", "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"]
      ]
    }
  },
  {
    id: "Q040", source: 40, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to create a data loss prevention (DLP) policy that will be applied to all available locations.",
      "Which conditions can you use in the DLP rules of the policy?"
    ],
    options: [
      { key: "A", text: "sensitive info types" },
      { key: "B", text: "content search queries" },
      { key: "C", text: "keywords" },
      { key: "D", text: "sensitivity labels" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The conditions offered in a DLP rule depend on the locations of the policy: when a policy covers several locations, only the conditions that all of them have in common are available. The DLP policy reference shows that detecting content by sensitive information type is supported in every location (Exchange, SharePoint, OneDrive, Teams chat and channel messages, devices, on-premises repositories and the others), so **Content contains sensitive info types** remains available in a policy applied to all locations.",
        "Other ways of defining content are supported only by some locations. Sensitivity labels, for example, cannot be used as a condition for Teams chat and channel messages, so that condition drops out as soon as Teams is included."
      ],
      wrong: [
        ["B", "Content search queries are KQL queries for Content search and eDiscovery. They are not a DLP rule condition."],
        ["C", "Conditions that match words or phrases, for example in an email subject or a document name, exist only for some locations, such as Exchange. To match keywords in every location, you build them into a custom sensitive info type."],
        ["D", "The sensitivity label condition is supported for locations such as Exchange, SharePoint, OneDrive and devices, but not for Teams chat and channel messages, so it is not available when the policy covers all locations."]
      ],
      concept: "In a DLP policy with several locations, only the conditions that all the locations support are available, and sensitive info types are supported everywhere.",
      takeaway: "A DLP policy for all locations is built on sensitive info types.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about sensitive information types", "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"]
      ]
    }
  },
  {
    id: "Q041", source: 41, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "Users store data in the following locations:",
      { list: ["Microsoft Teams", "Microsoft OneDrive", "Microsoft Exchange Online", "Microsoft SharePoint"] },
      "You need to retain Microsoft 365 data for two years.",
      "What is the minimum number of retention policies that you should create?"
    ],
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "A static retention policy cannot include every location. When you select a Teams location (or a Viva Engage location), the other locations are excluded automatically, so Teams messages always need a policy of their own. Exchange mailboxes, SharePoint sites and OneDrive accounts can share one policy, and that policy also covers the files shared in Teams, because those files are stored in SharePoint and OneDrive.",
        "Within Teams, the **Teams private channel messages** location cannot be selected together with the other Teams locations in the same policy. Retaining all Teams messages therefore takes one policy for Teams channel messages and chats and another for private channel messages. That makes three policies: Exchange, SharePoint and OneDrive; Teams channel messages and Teams chats; Teams private channel messages.",
        "Microsoft migrated private channel messages in 2025. After the migration they are covered by the Teams channel messages location, and the Teams private channel messages location applies only to tenants that have not yet been migrated."
      ],
      wrong: [
        ["A", "One policy cannot combine the Teams locations with Exchange, SharePoint and OneDrive."],
        ["B", "Two policies cover Exchange, SharePoint and OneDrive in one and Teams channel messages and chats in the other, but the Teams private channel messages location cannot share a policy with the other Teams locations."],
        ["D", "Exchange, SharePoint and OneDrive can be combined in one policy, so a policy for each service is more than the minimum."]
      ],
      concept: "Static retention policies with Teams locations cannot include other locations, and the Teams private channel messages location cannot be combined with the other Teams locations.",
      takeaway: "Count retention policies by location groups: Exchange, SharePoint and OneDrive together; Teams channel messages and chats; private channel messages where that location exists.",
      refs: [
        ["Microsoft Learn: Create and configure retention policies", "https://learn.microsoft.com/purview/create-retention-policies"],
        ["Microsoft Learn: Learn about retention for Microsoft Teams", "https://learn.microsoft.com/purview/retention-policies-teams"]
      ]
    }
  },
  {
    id: "Q042", source: 42, type: "dropdown",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You plan to create a retention policy as shown in the following exhibit.",
      { image: "q042-retention-policy-review.png", alt: "Information governance > Create retention policy, Review and finish page. It might take up to one day to apply this policy to the locations you selected. Policy name: contoso. Description: empty. Locations to apply the policy: Exchange email (All Recipients), SharePoint sites (All Sites), OneDrive accounts (All Accounts), Microsoft 365 Groups (All Groups). Retention settings: Delete items at end of retention period; Delete items that are older than 7 years based on when they were created. A warning reads: Items that are currently older than 7 years will be deleted after you turn on this policy. This is especially important to note for locations scoped to 'All' sources (for example, 'All Teams chats') because all matching items in those locations across your organization will be permanently deleted. Buttons: Back, Submit, Cancel." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Microsoft SharePoint files that are affected by the policy will be [answer choice].", options: ["recoverable for up to seven years", "deleted seven years after they were created", "retained for only seven years from when they were created"] },
      { id: "f2", label: "Once the policy is created, [answer choice].", options: ["some data may be deleted immediately", "data will be retained for a minimum of seven years", "users will be prevented from permanently deleting email messages for seven years"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "The retention settings in the exhibit only delete: items are deleted once they are older than seven years, counted from when they were created, and there is no setting that retains them. A SharePoint file in scope is therefore deleted seven years after it was created. Until then the policy does not protect it, and a user can delete it as usual.",
        "The warning on the Review and finish page gives the second answer: items that are already older than seven years are deleted after you turn on the policy. Once the policy is created and has been applied, existing content past the seven-year age is deleted right away, without any further waiting period."
      ],
      wrong: [
        ["recoverable for up to seven years", "Keeping deleted items recoverable (in the Preservation Hold library or the Recoverable Items folder) is what a retain setting does. This policy only deletes."],
        ["retained for only seven years from when they were created", "The policy does not retain anything. A user can delete a file before it is seven years old, and the policy keeps no copy."],
        ["data will be retained for a minimum of seven years", "That describes a retain setting. A delete-only policy guarantees nothing about keeping data."],
        ["users will be prevented from permanently deleting email messages for seven years", "Only a policy that retains content stops permanent deletion. This policy deletes email messages older than seven years and leaves users free to delete newer ones."]
      ],
      concept: "A delete-only retention policy removes content when it reaches the configured age, and content that is already older is deleted as soon as the policy applies.",
      takeaway: "Delete-only policy: nothing is retained, and anything already past the age limit is deleted when the policy is turned on.",
      refs: [
        ["Microsoft Learn: Common settings for retention policies and retention label policies", "https://learn.microsoft.com/purview/retention-settings"],
        ["Microsoft Learn: Learn about retention policies and retention labels", "https://learn.microsoft.com/purview/retention"]
      ]
    }
  },
  {
    id: "Q043", source: 43, type: "multi",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to configure a compliance solution that meets the following requirements:",
      "Defines sensitive data based on existing data samples",
      "Automatically prevents data that matches the samples from being shared externally in Microsoft SharePoint or email messages",
      "Which two components should you configure? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "a trainable classifier" },
      { key: "B", text: "a sensitive info type" },
      { key: "C", text: "an insider risk policy" },
      { key: "D", text: "an adaptive policy scope" },
      { key: "E", text: "a data loss prevention (DLP) policy" }
    ],
    answer: ["A", "E"],
    explanation: {
      correct: [
        "A trainable classifier recognizes a kind of content by learning from examples. You create a custom trainable classifier by giving it seed content, samples of the items you want it to identify, and the classifier is trained and then tested on further samples. That meets the requirement to define sensitive data based on existing data samples (A).",
        "A data loss prevention (DLP) policy then uses the classifier as a condition in its rules (trainable classifiers are supported in Exchange, SharePoint, OneDrive, Teams and other locations) and applies an action such as blocking sharing with people outside the organization. That automatically prevents matching data from being shared externally from SharePoint or in email (E)."
      ],
      wrong: [
        ["B", "A sensitive info type identifies data by patterns such as regular expressions, keywords and checksums. It is not trained from a set of sample documents."],
        ["C", "Insider risk management policies detect risky activities by users, such as data theft by departing employees. They neither define the data nor block external sharing."],
        ["D", "An adaptive policy scope selects users, groups or sites by their attributes for the policies that support it. It decides where a policy applies, not which data is sensitive."]
      ],
      concept: "Trainable classifiers learn to recognize content from samples, and DLP policies use them as conditions to protect that content.",
      takeaway: "Sensitive data defined by samples: a trainable classifier. Preventing its external sharing: a DLP policy.",
      refs: [
        ["Microsoft Learn: Learn about trainable classifiers", "https://learn.microsoft.com/purview/trainable-classifiers-learn-about"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q044", source: 44, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains a Microsoft SharePoint site named Site1. Site1 has the files shown in the following table.",
      { table: { head: ["Name", "Number of IP addresses in the file"], rows: [
        ["File1.docx", "1"],
        ["File2.txt", "2"],
        ["File3.xlsx", "2"],
        ["File4.bmp", "3"],
        ["File5.doc", "5"]
      ], numeric: [1] } },
      "For Site1, users are assigned the roles shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Owner"],
        ["User2", "Visitor"]
      ] } },
      "You create a data loss prevention (DLP) policy named Policy1 that contains a rule as shown in the following exhibit.",
      { image: "q044-dlp-rule.png", alt: "Edit rule pane of a DLP policy. Conditions: Content contains, group Default, Any of these. Sensitive info types: IP Address, High confidence, Instance count 2 to Any. Exceptions: none. Actions: Restrict access or encrypt the content in Microsoft 365 locations, checked, with Block users from receiving email or accessing shared SharePoint, OneDrive, and Teams files selected. The text reads: By default, users are blocked from sending Teams chats and channel messages that contain the type of content you're protecting. But you can choose who is blocked from receiving emails or accessing files shared from SharePoint, OneDrive, and Teams. Block everyone is selected. The other options, Block only people outside your organization and Block only people who were given access to the content through the \"Anyone with the link\" option, are not selected." },
      "How many files will be visible to User1 and User2 after Policy1 is applied to Site1? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1:", options: ["1", "2", "3", "4", "5"] },
      { id: "f2", label: "User2:", options: ["1", "2", "3", "4", "5"] }
    ],
    answer: { f1: 4, f2: 1 },
    explanation: {
      correct: [
        "The rule matches content that contains the IP Address sensitive info type with high confidence and an instance count of 2 or more. Its action, **Restrict access ... Block everyone**, blocks access to matching files for everyone except the content owner, the person who last modified the file and the site admin.",
        "Walk through the files. File1.docx contains one IP address, below the minimum of two, so it is not affected. File2.txt (2), File3.xlsx (2) and File5.doc (5) are text-based formats whose content SharePoint extracts for DLP, so they match and are blocked. File4.bmp is an image: its IP addresses are pixels, and DLP does not read text in images unless optical character recognition (OCR) has been set up, so it does not match.",
        "User1 is the owner of Site1 and falls under the site admin exception, so User1 still sees all **5** files. User2 is a visitor and is blocked from the three matching files, which leaves **2** visible files: File1.docx and File4.bmp."
      ],
      wrong: [
        ["User1: 2", "Block everyone does not apply to the site admin. As the owner of Site1, User1 keeps access to the blocked files."],
        ["User2: 1", "File4.bmp also stays visible: its IP addresses are inside an image, which DLP does not scan without OCR."],
        ["User2: 3 or more", "File2.txt, File3.xlsx and File5.doc each contain at least two IP addresses in text that DLP reads, so all three are blocked for User2."]
      ],
      concept: "A DLP rule with Block everyone restricts matching SharePoint files to the content owner, the last modifier and the site admin, and only content whose text DLP can read is evaluated.",
      takeaway: "Count matches by instance count and file type (images are not scanned without OCR), then remember that the owner and the site admin keep access.",
      logic: "Rule out File1 (one IP address) and File4 (an image) first. The other three are blocked for everyone except the owner.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about optical character recognition in Microsoft Purview", "https://learn.microsoft.com/purview/ocr-learn-about"]
      ]
    }
  },
  {
    id: "Q045", source: 45, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-user2-upn", caseOrder: 1,
    stem: [
      "Solution: From the Microsoft Entra admin center, you assign User2 the Security Reader role. You instruct User2 to sign in as [email protected].",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Assigning a Microsoft Entra role is authorization: it decides what a user may do after signing in. Security Reader grants read-only access to security information in Microsoft Entra ID and the Microsoft 365 security portals, but it does nothing for a user who cannot authenticate in the first place.",
        "User2's problem is the UPN. User2's on-premises UPN suffix is Fabrikam.com, which is not a verified domain in the contoso.com tenant. When the on-premises UPN suffix is not verified, Microsoft Entra ID cannot use it and gives the synchronized user a UPN in the tenant's initial onmicrosoft.com domain instead, so User2 has no fabrikam.com sign-in name in the cloud. The role assignment changes nothing about the UPN that Microsoft Entra ID holds for User2, so the sign-in problem remains."
      ],
      wrong: [
        ["A", "A role assignment does not fix authentication. Signing in requires a UPN that Microsoft Entra ID actually holds for User2, and the role leaves the UPN and the unverified fabrikam.com suffix as they were."]
      ],
      concept: "Roles control what a signed-in user may do (authorization); they cannot fix a failed authentication.",
      takeaway: "A synchronized user who cannot sign in because of the UPN suffix is fixed through the UPN or the domain, never through a role.",
      refs: [
        ["Microsoft Learn: Microsoft Entra UserPrincipalName population", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname"],
        ["Microsoft Learn: Microsoft Entra built-in roles (Security Reader)", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q046", source: 46, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-user2-upn", caseOrder: 2,
    stem: [
      "Solution: From the on-premises Active Directory domain, you set the UPN suffix for User2 to @contoso.com. You instruct User2 to sign in as User2@contoso.com.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The cause of the failure is User2's UPN suffix, Fabrikam.com, which is not a verified domain in the contoso.com tenant. For such a user, Microsoft Entra ID cannot use the on-premises UPN and calculates one in the tenant's initial onmicrosoft.com domain instead, so User2 cannot sign in with the on-premises name.",
        "Setting User2's UPN suffix to @contoso.com in on-premises Active Directory fixes that. An update to the on-premises userPrincipalName makes Microsoft Entra ID recalculate the UPN when the change is synchronized, and because contoso.com is the tenant's domain, the cloud UPN becomes User2@contoso.com. User2 then signs in with that name, and pass-through authentication, which the exhibit shows as enabled with two agents, validates the password against the on-premises domain."
      ],
      wrong: [
        ["B", "The UPN change is synchronized: an update to the on-premises userPrincipalName triggers a recalculation of the Microsoft Entra UPN, and a verified suffix is then used as it is."]
      ],
      concept: "Microsoft Entra ID uses the on-premises UPN only when its suffix is a verified domain of the tenant; otherwise it falls back to the initial onmicrosoft.com domain.",
      takeaway: "A user with an unverified UPN suffix: change the suffix on premises to a verified domain (or verify the user's domain), then let it sync.",
      refs: [
        ["Microsoft Learn: Microsoft Entra UserPrincipalName population", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname"],
        ["Microsoft Learn: Microsoft Entra pass-through authentication", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta"]
      ]
    }
  },
  {
    id: "Q047", source: 47, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-user2-upn", caseOrder: 3,
    stem: [
      "Solution: From the Microsoft Entra admin center, you add fabrikam.com as a custom domain. You instruct User2 to sign in as User2@fabrikam.com.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Adding fabrikam.com as a custom domain in the Microsoft Entra admin center is only the first step. A newly added domain stays unverified until you create the DNS record that Microsoft Entra ID shows you (a TXT or MX record) at the domain registrar and select **Verify**. Microsoft Entra ID uses an on-premises UPN suffix only when it is a verified domain, so with fabrikam.com merely added, User2 keeps the UPN in the tenant's initial onmicrosoft.com domain and still cannot sign in as User2@fabrikam.com.",
        "Once a domain is verified, Microsoft Entra ID recalculates the UPNs, and synchronized users with that suffix can sign in with it. The solution stops before verification, so it does not meet the goal."
      ],
      wrong: [
        ["A", "A domain that is added but not verified cannot be used as a UPN suffix. Verification through DNS is required before User2@fabrikam.com can become User2's sign-in name."]
      ],
      concept: "A custom domain must be verified in Microsoft Entra ID before synchronized users can use it as their UPN suffix.",
      takeaway: "Add and verify the domain (DNS TXT or MX record); adding it alone changes nothing for sign-in.",
      refs: [
        ["Microsoft Learn: Add your custom domain name to Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/add-custom-domain"],
        ["Microsoft Learn: Microsoft Entra UserPrincipalName population", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname"]
      ]
    }
  },
  {
    id: "Q048", source: 48, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-sync-errors", caseOrder: 1,
    stem: [
      "Solution: You run idfix.exe and export the 10 user accounts.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "IdFix is a tool that queries on-premises Active Directory for objects whose attributes would cause synchronization errors, such as duplicate or badly formatted proxyAddresses and userPrincipalName values, and lets you correct them. Its **Export** function only saves the query results to a CSV file. Exporting the 10 accounts changes nothing in Active Directory or in Azure AD Connect.",
        "The scenario also shows that attribute errors are not the problem: Azure AD Connect Health reports that all the user account synchronizations completed successfully, so no error was raised for the 10 accounts. Accounts of one OU that are missing without any error are typically outside the synchronization scope, for example because the OU is not selected in Domain and OU filtering. The fix is to change the filtering settings in Azure AD Connect, not to run IdFix."
      ],
      wrong: [
        ["A", "Exporting accounts from IdFix only writes a file. Even correcting attributes with IdFix would not help, because no synchronization error was reported for the accounts."]
      ],
      concept: "When synchronization completes without errors but some objects are missing, the objects are out of scope because of filtering, not invalid.",
      takeaway: "No sync errors and a whole OU missing: check Domain and OU filtering. IdFix is for attribute errors.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Troubleshoot an object that is not synchronizing with Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/hybrid/connect/tshoot-connect-object-not-syncing"]
      ]
    }
  }
);
