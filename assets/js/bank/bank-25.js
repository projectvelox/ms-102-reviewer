/* MS-102 question bank, part 25: questions 385 to 400 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q385", source: 385, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Purview. The subscription contains the devices shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [
        ["Device1", "Windows 11"],
        ["Device2", "macOS"],
        ["Device3", "Android"],
        ["Device4", "Linux"]
      ] } },
      "All the devices are onboarded to Microsoft Defender for Endpoint.",
      "You plan to deploy Endpoint data loss prevention (Endpoint DLP) policies.",
      "Which devices can be protected by using the DLP policies?"
    ],
    options: [
      { key: "A", text: "Device1 only" },
      { key: "B", text: "Device1 and Device2 only" },
      { key: "C", text: "Device1, Device2, and Device 3 only" },
      { key: "D", text: "Device1, Device3, and Device 4 only" },
      { key: "E", text: "Device1, Device2, Device3, and Device4" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Endpoint DLP extends DLP policies to the activities users perform on their devices, such as copying a sensitive file to a USB drive, printing it or uploading it to a cloud service. It is supported on Windows 10 and Windows 11 devices and on macOS devices that run one of the three most recent released versions of macOS. Onboarding to Defender for Endpoint is how these devices become known to Purview, but it does not extend Endpoint DLP to other platforms.",
        "Device1 (Windows 11) and Device2 (macOS) can therefore be protected by the Endpoint DLP policies. Device3 runs Android and Device4 runs Linux: Defender for Endpoint can protect them against threats, but Endpoint DLP policies do not apply to them."
      ],
      wrong: [
        ["A", "macOS is a supported Endpoint DLP platform as well, so Device2 can also be protected."],
        ["C", "Android is not a supported Endpoint DLP platform, so Device3 cannot be protected by the policies."],
        ["D", "Android and Linux are not supported Endpoint DLP platforms, and this choice leaves out the macOS device, which is supported."],
        ["E", "Onboarding every device to Defender for Endpoint does not make every platform an Endpoint DLP platform. Device3 (Android) and Device4 (Linux) are not supported."]
      ],
      concept: "Endpoint DLP protects Windows 10, Windows 11 and macOS devices (the three most recent versions); other platforms onboarded to Defender for Endpoint are outside its reach.",
      takeaway: "Endpoint DLP platforms: Windows 10, Windows 11 and macOS. Not Android, iOS or Linux.",
      refs: [
        ["Microsoft Learn: Learn about Endpoint data loss prevention", "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q386", source: 386, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to deploy Microsoft Defender for Cloud Apps and connect Microsoft 365 to Defender for Cloud Apps.",
      "You need to ensure that you can enable all the Microsoft 365 components when you add the app connector.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Configure Conditional Access app control." },
      { key: "B", text: "Enable file monitoring for Defender for Cloud Apps." },
      { key: "C", text: "Add an API token to Defender for Cloud Apps." },
      { key: "D", text: "Configure Cloud Discovery." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The reference answer is C, adding an API token. An API token in Defender for Cloud Apps is the credential that programmatic clients use to work with the service: scripts that call the Defender for Cloud Apps API, SIEM integrations and the Power Automate connector, whose playbooks need a token before Defender for Cloud Apps alerts can trigger them. The reference treats creating the token as the preparation step before Microsoft 365 is connected.",
        "What Microsoft Learn documents for the Microsoft 365 app connector itself: you go to **Settings** > **Cloud Apps** > **Connected apps** > **App Connectors**, choose **Microsoft 365** and select the components to protect (all of them by default), such as Microsoft 365 activities, Microsoft 365 files and the Microsoft Entra components. The prerequisites include at least one assigned Microsoft 365 license, auditing turned on in Microsoft Purview for the Microsoft 365 activities, and, for file monitoring of Microsoft 365 files, an account with a role such as Application Administrator or Cloud Application Administrator. The article adds that protection for **Microsoft 365 files** requires Defender for Cloud Apps file monitoring to be enabled (**Settings** > **Cloud Apps** > **Files** > **Enable file monitoring**)."
      ],
      wrong: [
        ["A", "Conditional Access app control routes user sessions through Defender for Cloud Apps for real-time access and session policies. It is configured through Conditional Access and is not one of the components of the Microsoft 365 API connector."],
        ["B", "File monitoring is the setting the connector article names for the Microsoft 365 files component. For this question, the reference answer for the first step is the API token."],
        ["D", "Cloud Discovery analyzes traffic logs from firewalls and proxies, or data from Defender for Endpoint, to find shadow IT. It works independently of the Microsoft 365 app connector."]
      ],
      concept: "The Microsoft 365 app connector uses the Microsoft 365 APIs to bring activities, files and Microsoft Entra data into Defender for Cloud Apps, and each component has its own prerequisites.",
      takeaway: "Learn the connector prerequisites (license, Purview auditing, file monitoring for the files component); for this question the reference answer is the API token.",
      refs: [
        ["Microsoft Learn: Connect Microsoft 365 to Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/connect-office-365"],
        ["Microsoft Learn: Integrate with Microsoft Power Automate for custom alert automation", "https://learn.microsoft.com/defender-cloud-apps/flow-integration"]
      ]
    }
  },
  {
    id: "Q387", source: 387, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains two on-premises Active Directory Domain Services (AD DS) forests named contoso.com and fabrikam.com that are connected by using a forest trust.",
      "You have a Microsoft 365 E5 subscription.",
      "You need to sync a subset of users from both forests to Microsoft Entra. The solution must support device objects and device writeback.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Microsoft Entra Cloud Sync" },
      { key: "B", text: "Microsoft Entra Domain Services" },
      { key: "C", text: "Microsoft Entra Connect Sync" },
      { key: "D", text: "Active Directory Federation Services (AD FS)" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Microsoft Entra Connect Sync (formerly Azure AD Connect sync) synchronizes several connected forests, such as contoso.com and fabrikam.com joined by a forest trust, from one installation, and its filtering by domain, OU or group lets you synchronize only a subset of the users. It synchronizes computer objects for Microsoft Entra hybrid join, and it is the synchronization tool that offers device writeback, which writes devices registered in Microsoft Entra ID back to Active Directory.",
        "Microsoft Entra Cloud Sync also supports connected forests, OU scoping and, with device sync turned on, computer objects for hybrid join. Its feature comparison with Connect Sync, however, lists device writeback as not supported. The device writeback requirement is therefore what makes Connect Sync the answer."
      ],
      wrong: [
        ["A", "Cloud Sync can synchronize users from both forests with OU scoping, but it does not support device writeback, which is a stated requirement."],
        ["B", "Microsoft Entra Domain Services provides a managed domain (domain join, LDAP, Kerberos and NTLM) whose objects are synchronized one way from Microsoft Entra ID. It does not synchronize on-premises forests to Microsoft Entra ID."],
        ["D", "AD FS federates authentication with Active Directory. It does not synchronize users or devices."]
      ],
      concept: "Connect Sync and Cloud Sync both synchronize users from several forests, but only Connect Sync supports device writeback.",
      takeaway: "Device writeback, advanced sync rules or cross-forest references required: Microsoft Entra Connect Sync.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Cloud Sync migration decision guide (feature comparison)", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/connect-to-cloud-sync-decision-guide"],
        ["Microsoft Learn: Topologies for Microsoft Entra Connect", "https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-topologies"]
      ]
    }
  },
  {
    id: "Q388", source: 388, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Purview.",
      "You receive the alerts shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q388-dlp-alerts.png", alt: "Microsoft Purview portal, Data Loss Prevention, Alerts page. A banner says that DLP alerts can now be managed in the Microsoft Defender portal, where they are combined into incidents. Filters: Time range 9/29/2024-10/29/2024, User Any, Alert status Any. 2 items: 'DLP policy match for document File2.docx in SharePoint', severity Low, status Resolved; 'DLP policy match for document File1.docx in SharePoint', severity Low, status Active." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "The status of the alert for File1.docx can be changed to [answer choice].", options: ["Investigating only", "Dismissed only", "Resolved only", "Investigating or Dismissed only", "Investigating, Dismissed, or Resolved"] },
      { id: "f2", label: "The status of the alert for File2.docx [answer choice].", options: ["cannot be changed", "can be changed to Active only", "can be changed to Investigating only", "can be changed to Investigating or Dismissed", "can be changed to Active, Investigating, or Dismissed"] }
    ],
    answer: { f1: 4, f2: 4 },
    explanation: {
      correct: [
        "A DLP alert in Microsoft Purview has one of four statuses: Active, Investigating, Dismissed or Resolved. When you manage an alert, you can set its status to any of the other three values. The status records where the triage stands; setting it does not lock the alert.",
        "The alert for File1.docx is **Active**, so it can be changed to **Investigating, Dismissed, or Resolved**; it does not have to pass through Investigating first. The alert for File2.docx is **Resolved**, and a resolved alert can still be changed: back to **Active** if the problem returns, to **Investigating** for more analysis, or to **Dismissed** if it turns out to be a false positive."
      ],
      wrong: [
        ["Investigating only / Investigating or Dismissed only", "An active alert can also be resolved directly, so limiting it to Investigating, or to Investigating or Dismissed, leaves out a valid status."],
        ["cannot be changed", "Resolved is not a final state. The alert can be reopened or reclassified."],
        ["can be changed to Investigating or Dismissed", "A resolved alert can also be set back to Active."]
      ],
      concept: "DLP alert statuses (Active, Investigating, Dismissed, Resolved) can be changed freely while the alert is managed.",
      takeaway: "Any DLP alert status can be changed to any of the other three, including reopening a resolved alert.",
      refs: [
        ["Microsoft Learn: Get started with the DLP Alerts dashboard", "https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started"],
        ["Microsoft Learn: Get started with data loss prevention alerts", "https://learn.microsoft.com/purview/dlp-alerts-get-started"]
      ]
    }
  },
  {
    id: "Q389", source: 389, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Advanced",
    stem: [
      "Your network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1 that runs Windows Server. The domain contains the users shown in the following table.",
      { table: { head: ["Name", "DistinguishedName", "UserPrincipalName", "Email address"], rows: [
        ["User1", "CN=User1,OU=Department1,DC=Contoso,DC=LOCAL", "user1@contoso.com", "user1@contoso.com"],
        ["User2", "CN=User2,OU=Team1,OU=Department2,DC=Contoso,DC=LOCAL", "user2@contoso.local", "user2@contoso.local"],
        ["User3", "CN=User3,OU=Department2,DC=Contoso,DC=LOCAL", "user3@contoso.com", "user3@contoso.com"]
      ] } },
      "You have a Microsoft 365 subscription that contains the following user accounts:",
      { list: ["user1@contoso.com", "user2@contoso.com"] },
      "On Server1, you configure Microsoft Entra Connect Sync in staging mode and select the following organizational units (OUs):",
      { list: ["OU=Department1,DC=Contoso,DC=LOCAL", "OU=Team1,OU=Department2,DC=Contoso,DC=LOCAL"] },
      "You disable staging mode on Server1.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 syncs with user1@contoso.com." },
      { text: "User2 syncs with user2@contoso.com." },
      { text: "User3 is created as a new user in Microsoft 365." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "Scope first. Connect Sync processes only the objects in the selected OUs. OU=Department1 holds User1, and OU=Team1 under Department2 holds User2. The parent OU, Department2, is not selected, so User3, whose object sits directly in Department2, is out of scope. Staging mode only holds back exports; once it is disabled, Server1 exports the in-scope users to Microsoft Entra ID.",
        "Then matching. For each new incoming user Microsoft Entra ID first looks for a hard match on the sourceAnchor (ImmutableID) and then for a soft match: an existing cloud user with the same userPrincipalName or the same primary SMTP address. On a match it takes over that cloud account, converting it to a synchronized user, instead of creating a new one. User1's UPN and email address are both user1@contoso.com, the same as the existing account, so User1 syncs with user1@contoso.com (Yes). User3 is out of scope, so nothing is created for it (No).",
        "Statement 2: the reference answer is Yes, User2 syncs with user2@contoso.com. User2 is in scope because Team1 is selected, so it is exported. Keep in mind how the soft match is decided: the on-premises userPrincipalName or primary SMTP address must be exactly the same value as on the cloud account, and in the table User2's UPN and email address use the contoso.local suffix. (A UPN suffix that is not a verified domain, such as contoso.local, is replaced with the tenant's onmicrosoft.com domain in Microsoft Entra ID.)"
      ],
      wrong: [
        ["Statement 1 — No", "User1 is in a selected OU, and both its UPN and its primary SMTP address are user1@contoso.com, the same as the cloud account, so a soft match links the two."],
        ["Statement 2 — No", "User2 is in the selected Team1 OU and is exported; the reference answer counts it as joined to the cloud account user2@contoso.com."],
        ["Statement 3 — Yes", "Selecting OU=Team1 does not select its parent OU. User3 sits directly in Department2, which is not selected, so it is not synchronized and no user is created."]
      ],
      concept: "Connect Sync exports only the objects in the selected OUs, and an exported user takes over an existing cloud account when its UPN or primary SMTP address matches (soft match).",
      takeaway: "Check the OU scope first (a selected child OU does not include its parent), then compare UPN and primary SMTP address with the existing cloud accounts.",
      refs: [
        ["Microsoft Learn: Configure Microsoft Entra Connect for an existing tenant (soft match)", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-install-existing-tenant"],
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Microsoft Entra Connect: Staging server", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-staging-server"]
      ]
    }
  },
  {
    id: "Q390", source: 390, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to identify which shadow IT apps users connect to by using Cloud Discovery in Microsoft Defender for Cloud Apps.",
      "What should you create first?"
    ],
    options: [
      { key: "A", text: "a Cloud Discovery snapshot report" },
      { key: "B", text: "a session policy" },
      { key: "C", text: "an app discovery policy" },
      { key: "D", text: "a Conditional Access policy" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Cloud Discovery builds its view of shadow IT from traffic logs of the firewalls and proxies through which users reach the internet, or from Defender for Endpoint. The first thing to create is a Cloud Discovery snapshot report: you upload log files manually (**Cloud Discovery** > **Actions** > **Create Cloud Discovery snapshot report**), Defender for Cloud Apps parses them against its cloud app catalog, and the report lists the discovered apps with their risk scores, users, IP addresses and traffic.",
        "Microsoft recommends uploading a log manually first, which also validates the log format, before setting up the automatic log collector that feeds continuous reports."
      ],
      wrong: [
        ["B", "A session policy uses Conditional Access app control to monitor or restrict what users do inside sessions of apps routed through Defender for Cloud Apps. It does not discover which apps are in use."],
        ["C", "An app discovery policy alerts when discovered apps match conditions, such as a new high-risk app. It works on discovery data that must already be flowing in; it does not produce that data."],
        ["D", "A Conditional Access policy controls access to apps that sign in with Microsoft Entra ID. It does not analyze traffic to find unknown cloud apps."]
      ],
      concept: "Cloud Discovery analyzes traffic logs, and a snapshot report from manually uploaded logs is the first way to see the cloud apps users connect to.",
      takeaway: "Shadow IT discovery starts with logs: snapshot report first, then the log collector for continuous reports, then discovery policies.",
      refs: [
        ["Microsoft Learn: Create snapshot cloud discovery reports", "https://learn.microsoft.com/defender-cloud-apps/create-snapshot-cloud-discovery-reports"],
        ["Microsoft Learn: Set up Cloud Discovery", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"]
      ]
    }
  },
  {
    id: "Q391", source: 391, type: "multi",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You need to ensure that when a user-based alert is triggered in Defender for Cloud Apps, the user is marked as compromised.",
      "Which two options can you use to automate the response? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point"
    ],
    select: 2,
    options: [
      { key: "A", text: "a Microsoft Power Automate playbook" },
      { key: "B", text: "a user tag" },
      { key: "C", text: "a custom detection rule" },
      { key: "D", text: "a block script" },
      { key: "E", text: "an automated remediation level" }
    ],
    answer: ["A", "E"],
    explanation: {
      correct: [
        "A Microsoft Power Automate playbook (A) is the documented way to add custom automated responses to Defender for Cloud Apps alerts. You create a flow that starts with the Defender for Cloud Apps trigger **When an alert is generated** (the connection uses a Defender for Cloud Apps API token), and you attach the playbook to a policy with **Send alerts to Power Automate**. Every alert the policy raises then runs the flow, which can take the action you build into it, such as confirming the user as compromised in Microsoft Entra ID Protection.",
        "The reference answer also counts an automated remediation level (E), which it describes as configuring the automated response inside Defender for Cloud Apps. In Defender for Cloud Apps itself, the automatic response to a policy match is set as a governance action of the policy, and the user governance actions include **Confirm user compromised** (via Microsoft Entra ID), which sets the user's risk level to high so that risk-based Conditional Access policies take effect."
      ],
      wrong: [
        ["B", "A tag labels an account so that it can be filtered or treated with priority. Adding a tag does not respond to alerts."],
        ["C", "A custom detection rule is an advanced hunting query that runs on a schedule and raises its own alerts. Its actions apply to the rows the query returns rather than being a response attached to a Defender for Cloud Apps alert, and the reference answer does not count it."],
        ["D", "A block script is exported from Cloud Discovery to block unsanctioned apps on a firewall or proxy. It acts on network traffic to apps, not on user accounts."]
      ],
      concept: "Responses to Defender for Cloud Apps alerts are automated with the governance actions of policies and with Power Automate playbooks attached to policies.",
      takeaway: "Custom automation for Defender for Cloud Apps alerts: a Power Automate playbook attached to the policy. The built-in user action is Confirm user compromised.",
      refs: [
        ["Microsoft Learn: Integrate with Microsoft Power Automate for custom alert automation", "https://learn.microsoft.com/defender-cloud-apps/flow-integration"],
        ["Microsoft Learn: Governing connected apps (governance actions)", "https://learn.microsoft.com/defender-cloud-apps/governance-actions"]
      ]
    }
  },
  {
    id: "Q392", source: 392, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a group named Group1. The subscription uses Microsoft Defender for Cloud Apps.",
      "You configure cloud discovery.",
      "You need to ensure that you can create a custom report that details shadow IT usage by the members of Group1.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Configure user enrichment." },
      { key: "B", text: "Disable anonymization." },
      { key: "C", text: "Add an app connector." },
      { key: "D", text: "Configure user monitoring." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Cloud Discovery takes user names from the traffic logs, and those names often do not match Microsoft Entra identities (for example DOMAIN\\user or a proxy alias). User enrichment (**Settings** > **Cloud Apps** > **Cloud Discovery** > **User enrichment**) matches the username in the logs and replaces it with the Microsoft Entra username (UPN). Microsoft Learn lists what this enables: investigating shadow IT by Microsoft Entra user, correlating discovered app use with the activities collected through APIs, and creating custom reports based on Microsoft Entra user groups.",
        "A custom continuous report (**Settings** > **Cloud Apps** > **Cloud Discovery** > **Continuous report** > **Create report**) can then be filtered on a user group such as Group1, so it shows the shadow IT use of that group's members. User enrichment has its own prerequisites: the data source must provide usernames and the Microsoft 365 app connector must be connected."
      ],
      wrong: [
        ["B", "Anonymization replaces usernames in Cloud Discovery data with encrypted identifiers for privacy. Turning it off shows the names from the logs, but it does not map them to Microsoft Entra users or to the members of Group1."],
        ["C", "Connecting the Microsoft 365 app connector is a prerequisite of user enrichment, but the connector alone does not change the usernames in Cloud Discovery data. The step that maps them to Microsoft Entra users, and so to Group1, is user enrichment."],
        ["D", "Monitoring user activities through app connectors and policies does not change how Cloud Discovery identifies the users in traffic logs, which is what a group-based shadow IT report depends on."]
      ],
      concept: "User enrichment ties Cloud Discovery usernames to Microsoft Entra users, which allows Cloud Discovery reports filtered by Microsoft Entra user groups.",
      takeaway: "Shadow IT report for one group or department: turn on Cloud Discovery user enrichment, then create a continuous report filtered on the user group.",
      refs: [
        ["Microsoft Learn: Enrich cloud discovery data with Microsoft Entra usernames", "https://learn.microsoft.com/defender-cloud-apps/cloud-discovery-aad-enrichment"],
        ["Microsoft Learn: View discovered apps on the Cloud discovery dashboard (continuous reports)", "https://learn.microsoft.com/defender-cloud-apps/discovered-apps"]
      ]
    }
  },
  {
    id: "Q393", source: 393, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "Your company has offices in Seattle and Denver.",
      "You have a Microsoft 365 subscription.",
      "You plan to create a Conditional Access policy named Policy1 that will enforce multifactor authentication (MFA).",
      "You need to ensure that users at the Seattle office are excluded from MFA. Users at the Denver office must always be prompted for MFA.",
      "What should you configure for Policy1?"
    ],
    options: [
      { key: "A", text: "a named location that has IP ranges location set to the Seattle office" },
      { key: "B", text: "Authentication strengths" },
      { key: "C", text: "a named location that has Countries location set to United States" },
      { key: "D", text: "VPN connectivity from the Seattle office" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Conditional Access can take the network location of a sign-in into account. A named location defined by IP ranges, the public egress IP addresses of the Seattle office, identifies the sign-ins that come from that office. In Policy1 you include any network or location and exclude the Seattle named location: sign-ins from Seattle are outside the policy and skip the MFA requirement, while sign-ins from Denver, or from anywhere else, are still prompted for MFA."
      ],
      wrong: [
        ["B", "An authentication strength defines which MFA methods satisfy the grant control. It does not distinguish one office from the other."],
        ["C", "Seattle and Denver are both in the United States, so a Countries location cannot separate the two offices; excluding it would also exempt Denver."],
        ["D", "VPN connectivity is a network design, not a policy setting. Conditional Access would still need a named location to recognize the addresses the traffic comes from."]
      ],
      concept: "Named locations based on IP ranges let a Conditional Access policy include or exclude sign-ins from specific offices.",
      takeaway: "To exempt one office from a Conditional Access policy, create an IP ranges named location for its public IPs and exclude it.",
      refs: [
        ["Microsoft Learn: Conditional Access network and location assignments", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"],
        ["Microsoft Learn: What is Conditional Access?", "https://learn.microsoft.com/entra/identity/conditional-access/overview"]
      ]
    }
  },
  {
    id: "Q394", source: 394, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a Conditional Access policy named Policy1 that will enforce the use of phishing-resistant multifactor authentication (MFA) when a user attempts to register or join devices to a Microsoft Entra tenant.",
      "How should you configure Policy1? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Assignments:", options: ["Conditions", "Networks", "Target resources"] },
      { id: "f2", label: "Access controls:", options: ["Set Grant to Require multifactor authentication.", "Set Grant to Require authentication strength.", "Set Session to Use app enforced restrictions.", "Set Session to Use Conditional Access App Control."] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "Registering or joining a device is a user action, and user actions are chosen under **Target resources** (formerly Cloud apps or actions): you select **User actions** and then **Register or join devices**. The policy then applies exactly when a user registers or joins a device to Microsoft Entra ID.",
        "With this user action, **Require multifactor authentication** and **Require authentication strength** are the only access controls available; the other grant controls and the session controls are disabled. Require multifactor authentication accepts any MFA method, so to insist on phishing-resistant methods you set Grant to **Require authentication strength** and choose the built-in **Phishing-resistant MFA** strength. When you use this user action, the device setting Require Multifactor Authentication to register or join devices with Microsoft Entra must be set to No, or the policy is not properly enforced."
      ],
      wrong: [
        ["Conditions", "Conditions such as user risk, device platforms or client apps narrow when a policy applies; they do not select the register or join action. Client apps, filters for devices and device state are not even available with this user action."],
        ["Networks", "The network assignment limits a policy by location or IP range. It does not target the device registration action."],
        ["Set Grant to Require multifactor authentication.", "This control is available with the user action, but it is satisfied by any MFA method, not only phishing-resistant ones."],
        ["Set Session to Use app enforced restrictions. / Use Conditional Access App Control.", "Session controls are not available with the Register or join devices user action, and neither of them enforces an authentication method."]
      ],
      concept: "Conditional Access targets device registration through the Register or join devices user action under Target resources, and authentication strengths require specific MFA methods.",
      takeaway: "Phishing-resistant MFA for device registration: Target resources > User actions > Register or join devices, and Grant > Require authentication strength.",
      refs: [
        ["Microsoft Learn: Targeting resources in Conditional Access policies (user actions)", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"],
        ["Microsoft Learn: Conditional Access authentication strengths", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"]
      ]
    }
  },
  {
    id: "Q395", source: 395, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named Admin1.",
      "Your company deploys a new branch office named Branch1.",
      "You need to provide Admin1 with the ability to manage Branch1. The solution must meet the following requirements:",
      { list: [
        "Admin1 must only be able to manage users that have Office location set to Branch1.",
        "Admin1 must be able to reset passwords, manage user licenses, and modify user attributes only for the users in Branch1."
      ] },
      "What should you use to organize the Branch1 users, and which role should you assign to Admin1? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Use:", options: ["An administrative unit", "A Microsoft 365 group", "A security group"] },
      { id: "f2", label: "Role:", options: ["Help Desk Administrator", "Password Administrator", "User Administrator"] }
    ],
    answer: { f1: 0, f2: 2 },
    explanation: {
      correct: [
        "An administrative unit is a Microsoft Entra container of users, groups or devices that limits the scope of a role assignment. Create an administrative unit for Branch1 with a dynamic membership rule on the Office location attribute, for example `(user.physicalDeliveryOfficeName -eq \"Branch1\")`, so users join and leave it automatically as their Office location changes. A role that you assign to Admin1 with the administrative unit as its scope then applies only to the users in it. (Dynamic administrative units need Microsoft Entra ID P1 licenses, which Microsoft 365 E5 includes.)",
        "**User Administrator** is the role that covers all three tasks: it creates and manages users, updates their properties, manages their license assignments and resets passwords (for non-administrators and some limited admin roles). Assigned at the Branch1 administrative unit scope, these permissions apply only to the Branch1 users."
      ],
      wrong: [
        ["A Microsoft 365 group / A security group", "A Microsoft Entra role assignment is scoped to the whole tenant, to an administrative unit or to a specific resource; it cannot be scoped to the members of a group. A group can hold role assignees, but it does not limit which users an administrator manages."],
        ["Help Desk Administrator", "Help Desk Administrator can reset passwords and invalidate sessions of non-administrators, but it does not manage licenses or change user attributes in general."],
        ["Password Administrator", "Password Administrator only resets the passwords of non-administrators and other Password Administrators."]
      ],
      concept: "Administrative units, optionally with dynamic membership rules, restrict the scope of Microsoft Entra roles such as User Administrator to a subset of users.",
      takeaway: "Delegate a branch: administrative unit (dynamic rule on Office location) plus a role scoped to it. Passwords, licenses and attributes together: User Administrator.",
      refs: [
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"],
        ["Microsoft Learn: Manage users or devices for an administrative unit with rules for dynamic membership groups", "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-members-dynamic"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q396", source: 396, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    caseId: "series-cloud-apps", caseOrder: 4,
    stem: [
      "Solution: You add an API token to Defender for Cloud Apps.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The goal is to be able to create OAuth app policies. OAuth app policies work on the OAuth apps that users have authorized in a connected app: Defender for Cloud Apps lists the apps, the permissions they hold and the users who granted them, and a policy alerts on, or revokes, apps that match its filters. For Microsoft 365 that information comes from connecting Microsoft 365 to Defender for Cloud Apps with the app connector, which is the solution that meets the goal in this series.",
        "An API token is a credential that scripts, SIEM integrations and Power Automate playbooks use to call the Defender for Cloud Apps API. Creating one does not connect any app and does not give Defender for Cloud Apps information about OAuth apps, so it does not meet the goal."
      ],
      wrong: [
        ["A", "A token authenticates API clients to Defender for Cloud Apps. It is not an app connection, so it does not bring in the OAuth apps that OAuth app policies are built on."]
      ],
      concept: "OAuth app policies depend on the OAuth app data that Defender for Cloud Apps collects from connected apps such as Microsoft 365.",
      takeaway: "OAuth app policies need Microsoft 365 connected as an app. API tokens are for API access, Conditional Access app control for sessions, Cloud Discovery for shadow IT.",
      refs: [
        ["Microsoft Learn: Create policies to control OAuth apps", "https://learn.microsoft.com/defender-cloud-apps/app-permission-policy"],
        ["Microsoft Learn: Connect Microsoft 365 to Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/connect-office-365"]
      ]
    }
  },
  {
    id: "Q397", source: 397, type: "single",
    domain: "tenant", topic: "Exchange Online and mail flow", difficulty: "Intermediate",
    stem: [
      "You have Microsoft 365 E5 subscription that contains the identities shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["User1", "User"],
        ["Group1", "Microsoft 365 group"],
        ["Group2", "Mail-enabled security group"],
        ["Group3", "Distribution group"]
      ] } },
      "You create a shared mailbox named Shared1.",
      "Which identities can you add to Shared1 as a member?"
    ],
    options: [
      { key: "A", text: "User1 only" },
      { key: "B", text: "User1 and Group1 only" },
      { key: "C", text: "User1 and Group2 only" },
      { key: "D", text: "User1 and Group3 only" },
      { key: "E", text: "User1, Group2, and Group3 only" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The reference answer is D, User1 and Group3. Adding a member to a shared mailbox in the Microsoft 365 admin center grants that identity the Full Access permission (open the mailbox and read and manage its items) and the Send As permission (send mail as the mailbox). User1, a user, can always be added as a member.",
        "For groups, the Exchange Online documentation shows mailbox permissions such as Full Access and Send on Behalf granted to a mail-enabled security group, so that every member of the group gets access to the shared mailbox. Group1 is a Microsoft 365 group, which has its own group mailbox. The reference answer counts Group3, the distribution group, together with User1, as the identities that can be added."
      ],
      wrong: [
        ["A", "The reference answer includes a group in addition to User1."],
        ["B", "Group1 is a Microsoft 365 group. It has its own mailbox and is not used to give members access to a shared mailbox."],
        ["C", "Group2 is a mail-enabled security group, the group type the Exchange Online documentation uses to grant shared mailbox permissions to many users. For this question, the reference answer is User1 and Group3."],
        ["E", "The reference answer includes only one of the groups, Group3."]
      ],
      concept: "Members of a shared mailbox receive Full Access and Send As permissions, which let them open the mailbox and send mail as it.",
      takeaway: "Shared mailbox membership means Full Access plus Send As. For this question, the reference answer is User1 and Group3.",
      refs: [
        ["Microsoft Learn: Shared mailboxes in Exchange Online", "https://learn.microsoft.com/exchange/collaboration-exo/shared-mailboxes"],
        ["Microsoft Learn: Create a shared mailbox", "https://learn.microsoft.com/microsoft-365/admin/email/create-a-shared-mailbox"]
      ]
    }
  },
  {
    id: "Q398", source: 398, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains 500 Windows devices enrolled in Microsoft Intune.",
      "You need to ensure that you can review vulnerability management recommendations for the devices. The solution must minimize administrative effort.",
      "Which policy template should you select in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Microsoft Defender Antivirus" },
      { key: "B", text: "Windows Security Experience" },
      { key: "C", text: "Endpoint Detection and Response" },
      { key: "D", text: "Device Control" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Vulnerability management recommendations come from Microsoft Defender Vulnerability Management, which works on devices onboarded to Defender for Endpoint. Enrollment in Intune does not onboard a device by itself. The **Endpoint detection and response** (EDR) template of the endpoint security policies is the one that onboards devices: with the Intune connection to Defender for Endpoint in place, the EDR policy can use the onboarding package that the connector provides automatically.",
        "One EDR policy, created on the Endpoint security policies page of the Defender portal and assigned to a group that contains the 500 devices, therefore onboards all of them. Once onboarded, the devices report their software and configuration data, and their security recommendations appear in the Defender portal, with no per-device work."
      ],
      wrong: [
        ["A", "The Microsoft Defender Antivirus template configures antivirus settings such as real-time protection, scans and cloud-delivered protection. It does not onboard devices to Defender for Endpoint."],
        ["B", "The Windows Security experience template controls what users see in the Windows Security app, along with settings such as tamper protection. It does not onboard devices."],
        ["D", "The Device control template manages removable storage and other peripherals. It does not onboard devices."]
      ],
      concept: "Defender Vulnerability Management recommendations require Defender for Endpoint onboarding, and the EDR endpoint security policy onboards devices in bulk.",
      takeaway: "Need recommendations or other Defender for Endpoint data for Intune devices: deploy an EDR policy that onboards them.",
      refs: [
        ["Microsoft Learn: Manage endpoint security policies in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/endpoint-security-policies-configure"],
        ["Microsoft Learn: Overview of endpoint detection and response", "https://learn.microsoft.com/defender-endpoint/overview-endpoint-detection-response"],
        ["Microsoft Learn: Microsoft Defender Vulnerability Management", "https://learn.microsoft.com/defender-vulnerability-management/defender-vulnerability-management"]
      ]
    }
  },
  {
    id: "Q399", source: 399, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to ensure that an alert is generated when an app is registered in Microsoft Entra and is assigned the Directory.ReadWrite.All Microsoft Graph permission.",
      "What should you do? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Use:", options: ["Microsoft Defender for Cloud", "Microsoft Defender for Cloud Apps", "Microsoft Defender for Endpoint", "Microsoft Defender for Identity", "Microsoft Defender for Office 365"] },
      { id: "f2", label: "Configure:", options: ["an Access policy", "an App discovery policy", "a Conditional Access policy", "an OAuth apps policy", "a Session policy"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "**Use: Microsoft Defender for Cloud Apps.** With Microsoft 365 connected, Defender for Cloud Apps sees the OAuth apps in Microsoft Entra ID, the Microsoft Graph permissions each app holds and the users who granted them, and its policies can raise alerts on what they find.",
        "**Configure: the reference answer is an Access policy.** Access policies use Conditional Access app control to monitor and control access to cloud apps in real time, based on user, location, device and app. Their action is Audit or Block, and their Alerts settings can create an alert for each matching event, send it by email or pass it to Power Automate.",
        "For app permissions, Defender for Cloud Apps documents OAuth app policies: you filter apps by the permissions they request (a specific permission, or a high permission level) and are alerted automatically when an app that users in the tenant authorized matches."
      ],
      wrong: [
        ["Microsoft Defender for Cloud", "Defender for Cloud protects Azure, hybrid and multicloud workloads and their posture. It does not monitor app registrations and their Microsoft Graph permissions."],
        ["Microsoft Defender for Endpoint / Identity / Office 365", "These protect devices, on-premises Active Directory identities, and email and collaboration content. None of them alerts on the permissions assigned to registered apps."],
        ["an App discovery policy", "App discovery policies alert on apps found in Cloud Discovery traffic logs, which is shadow IT, not app registrations in Microsoft Entra ID."],
        ["a Conditional Access policy", "A Conditional Access policy decides how users sign in to apps. It does not raise alerts about the permissions an app is granted."],
        ["an OAuth apps policy", "OAuth app policies alert on apps by the permissions they hold, such as a specific Microsoft Graph permission. For this box, the reference answer is the Access policy."],
        ["a Session policy", "A session policy monitors or restricts actions inside user sessions, such as downloads. It does not evaluate app permissions."]
      ],
      concept: "Defender for Cloud Apps governs cloud apps with several policy types: access and session policies for user sign-ins and sessions, and OAuth app policies for app permissions.",
      takeaway: "Know which Defender for Cloud Apps policy watches what: access (sign-in), session (in-session actions), OAuth app (app permissions), app discovery (shadow IT). The reference answer here is Defender for Cloud Apps with an Access policy.",
      refs: [
        ["Microsoft Learn: Create access policies", "https://learn.microsoft.com/defender-cloud-apps/access-policy-aad"],
        ["Microsoft Learn: Create policies to control OAuth apps", "https://learn.microsoft.com/defender-cloud-apps/app-permission-policy"]
      ]
    }
  },
  {
    id: "Q400", source: 400, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You configure a new data loss prevention (DLP) policy named Policy1 that detects when sensitive content is shared externally.",
      "Policy1 has the DLP rule shown in the following exhibit.",
      { image: "q400-dlp-rule.png", alt: "DLP rule editor. Conditions: Content contains, group name Default, group operator Any of these. Sensitive info types: Credit Card Number, High confidence, instance count 1 to 9; EU Debit Card Number, High confidence, instance count 1 to 9; SWIFT Code, Medium confidence, instance count 1 to 9. Exceptions: none (only Add exception is shown). Actions: none (only Add an action is shown). User notifications: On. Endpoint devices: 'Show users a policy tip notification when an activity is restricted' is not selected. Microsoft 365 services: 'Notify users in Office 365 service with a policy tip' is selected. Email notifications: 'Notify these people' is selected (not 'Notify the user who sent, shared, or last modified the content'), with three people selected: The person who sent, shared, or modified the content; Owner of the SharePoint site or OneDrive account; Owner of the SharePoint or OneDrive content." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "If a file matches the DLP rule of Policy1, the file will be [answer choice].", options: ["available to both internal and external users", "encrypted", "restricted from all users except the owner", "restricted to internal users only"] },
      { id: "f2", label: "If 18 credit card numbers are detected in a file that is shared with external users, [answer choice] email notifications will be sent.", options: ["18", "no", "one", "two"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "Box 1: the **Actions** section of the rule is empty; only Add an action is shown. Without an action such as Restrict access or encrypt the content in Microsoft 365 locations, the rule does not block, restrict or encrypt anything. When a file matches, Policy1 only informs people: a policy tip in Microsoft 365 services and email notifications to the people selected. The file stays **available to both internal and external users**.",
        "Box 2: the condition Content contains uses the group operator Any of these with three sensitive info types, each with an instance count of **1 to 9**. A file with 18 credit card numbers is above the maximum of 9, so the Credit Card Number condition is not met (and nothing else in the file is said to match the other two types). The rule does not match, and a rule that does not match sends **no** email notifications. A rule like this is the low-volume rule of a policy; acting on files with 10 or more instances would need a separate rule with a higher instance count."
      ],
      wrong: [
        ["restricted to internal users only", "That needs the action Restrict access or encrypt the content in Microsoft 365 locations with the option to block only people outside the organization. The rule has no action."],
        ["encrypted", "Encryption is also an action, and the rule has none."],
        ["restricted from all users except the owner", "That is the Block everyone option of the restrict access action, which the rule does not have."],
        ["18 / one / two", "Notifications are sent only when the rule matches. With 18 instances the count is outside 1 to 9, so the rule does not match and nothing is sent."]
      ],
      concept: "A DLP rule matches only when its conditions, including the instance count range, are met, and it protects content only through the actions it contains; notifications alone do not restrict access.",
      takeaway: "Read the instance count range (1 to 9 excludes 10 or more) and check the Actions section: no action means the content stays accessible.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  }
);
