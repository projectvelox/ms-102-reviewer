/* MS-102 question bank, part 9: questions 129 to 144 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q129", source: 129, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following exhibit.",
      { table: {
        head: ["Name", "Group type", "Security enabled", "Role assignments allowed"],
        rows: [
          ["Group1", "Microsoft 365", "No", "No"],
          ["Group2", "Microsoft 365", "Yes", "No"],
          ["Group3", "Security", "Yes", "No"],
          ["Group4", "Security", "Yes", "Yes"]
        ]
      } },
      "To which groups can you assign Microsoft 365 E5 licenses?"
    ],
    options: [
      { key: "A", text: "Group1 and Group2 only" },
      { key: "B", text: "Group2 and Group3 only" },
      { key: "C", text: "Group3 and Group4 only" },
      { key: "D", text: "Group1, Group2, and Group3 only" },
      { key: "E", text: "Group2, Group3, and Group4 only" }
    ],
    answer: ["E"],
    explanation: {
      correct: [
        "Group-based licensing in Microsoft Entra ID (formerly Azure AD) works with security groups. A license can be assigned to any security group, and to a Microsoft 365 group only when that group is security enabled. The column that decides the question is therefore **Security enabled**, not the group type.",
        "Walking the rows: Group1 is a Microsoft 365 group that is not security enabled, so it cannot carry a license. Group2 is a Microsoft 365 group with Security enabled set to Yes, so it can. Group3 is a security group, so it can. Group4 is also a security group; allowing role assignments makes it a role-assignable group, which does not stop it from being used for licensing. The groups are Group2, Group3 and Group4."
      ],
      wrong: [
        ["A", "Group1 is not security enabled, so it cannot be licensed, and the option leaves out the two security groups."],
        ["B", "Group4 is left out. Being role-assignable does not prevent a security group from receiving a license assignment."],
        ["C", "Group2 is left out. It is a Microsoft 365 group, but it is security enabled, and that is enough for group-based licensing."],
        ["D", "Group1 cannot be licensed because it is not security enabled, and Group4 is wrongly left out."]
      ],
      concept: "Group-based licensing applies to security groups and to Microsoft 365 groups that are security enabled.",
      takeaway: "Look at Security enabled: Yes means the group can carry a license, whatever its type or role-assignable setting.",
      refs: [
        ["Microsoft Learn: What is group-based licensing in Microsoft Entra ID?", "https://learn.microsoft.com/entra/fundamentals/concept-group-based-licensing"],
        ["Microsoft Learn: Assign licenses to a group", "https://learn.microsoft.com/entra/identity/users/licensing-groups-assign"]
      ]
    }
  },
  {
    id: "Q130", source: 130, type: "dropdown",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "From the Microsoft 365 admin center, you open the Microsoft 365 Apps usage report as shown in the following exhibit.",
      { image: "q130-apps-usage-report.png", alt: "Users table of the Microsoft 365 Apps usage report. The Username column shows hexadecimal strings instead of names, for example 431B8D0D1D05D877FDC4416, 2F2747649D4150B686307383, 659213C0E1D99EA1A4AD56D, FE185622F642B0381DB633EC and 988D39ED225FC80FF2A5684. The other two columns are Last activation date (UTC) and Last activity date (UTC); one row shows a last activity date of Wednesday, August 3, 2022. A Choose columns control is at the top right of the table." },
      "You need ensure that the report meets the following requirements:",
      { list: [
        "The Username column must display the actual name of each user.",
        "Usage of the Microsoft Teams mobile app must be displayed."
      ] },
      "What should you modify for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "The Username column must display the actual name of each user:", options: ["Privacy profile in Org settings", "Reports in Org settings", "The membership of the Reports Reader role"] },
      { id: "f2", label: "Usage of the Teams mobile app must be displayed:", options: ["Microsoft Teams in Org settings", "The columns in the report", "The Teams license assignment"] }
    ],
    answer: { f1: 1, f2: 1 },
    explanation: {
      correct: [
        "By default, the usage reports of the Microsoft 365 admin center hide user, group and site names and show a concealed identifier instead, which is what the Username column of the exhibit shows. This is a tenant-wide privacy setting: in **Settings > Org settings > Services > Reports**, clear **Display concealed user, group, and site names in all reports**, and the reports show the real names again.",
        "The per-user table of the Microsoft 365 Apps usage report has many more columns than the three shown. **Choose columns** adds them, including one column per app and platform such as **Activity on Teams (mobile)**, which shows whether each user was active in the Teams mobile app during the period. So the second requirement is met by changing the columns of the report."
      ],
      wrong: [
        ["Privacy profile in Org settings", "The privacy profile holds the link to your organization's privacy statement and the privacy contact. It does not control whether reports conceal names."],
        ["The membership of the Reports Reader role", "Reports Reader decides who can open the usage reports. Concealment is a separate setting that applies to every report viewer."],
        ["Microsoft Teams in Org settings", "These are Teams service settings for the organization. They do not change which columns a usage report shows."],
        ["The Teams license assignment", "A license lets a user use Teams. Mobile activity of licensed users is already recorded; showing it is a matter of adding the column."]
      ],
      concept: "Usage report anonymization is controlled in Org settings > Reports, and the per-user tables have optional columns that are added with Choose columns.",
      takeaway: "Hashed names in usage reports: Org settings > Reports. Data missing from the table: Choose columns.",
      refs: [
        ["Microsoft Learn: Microsoft 365 admin center usage reports", "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"],
        ["Microsoft Learn: Microsoft 365 Apps usage report", "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft365-apps-usage-ww"]
      ]
    }
  },
  {
    id: "Q131", source: 131, type: "multi",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your company has on-premises servers and an Azure AD tenant.",
      "Several months ago, the Azure AD Connect Health agent was installed on all the servers.",
      "You review the health status of all the servers regularly.",
      "Recently, you attempted to view the health status of a server named Server1 and discovered that the server is NOT listed on the Azure AD Connect Servers list.",
      "You suspect that another administrator removed Server1 from the list.",
      "You need to ensure that you can view the health status of Server1.",
      "What are two possible ways to achieve the goal? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "From Windows PowerShell, run the `Register-AzureADConnectHealthSyncAgent` cmdlet." },
      { key: "B", text: "From Azure Cloud shell, run the `Connect-AzureAD` cmdlet." },
      { key: "C", text: "From Server1, reinstall the Azure AD Connect Health agent." },
      { key: "D", text: "From Server1, change the Azure AD Connect Health services Startup type to Automatic." },
      { key: "E", text: "From Server1, change the Azure AD Connect Health services Startup type to Automatic (Delayed Start)." }
    ],
    answer: ["A", "C"],
    explanation: {
      correct: [
        "When an administrator deletes a server in Azure AD Connect Health (now Microsoft Entra Connect Health), the service stops collecting data from it and removes it from the list, but the Health agent stays installed on the server. To monitor that server again, the agent has to be registered with the service again.",
        "Microsoft documents reinstalling the Health agent on the server for this case (C): setup registers the agent with the tenant, and the server reappears in the list. The registration can also be run on its own: `Register-AzureADConnectHealthSyncAgent` is the cmdlet that registers the Connect Health agent for sync with the service, the same step that setup performs and that you run manually when registration has to be redone (A)."
      ],
      wrong: [
        ["B", "`Connect-AzureAD` only opens an Azure AD PowerShell session. It registers nothing, and Cloud Shell does not run on Server1, where the agent is."],
        ["D", "The agent services were running already. The startup type only decides when they start after a reboot; it does not register the server with Connect Health again."],
        ["E", "A delayed start changes only the timing of the service start at boot. The server stays unregistered."]
      ],
      concept: "A server deleted from Connect Health stays unmonitored until its Health agent is registered again, by reinstalling the agent or running its registration cmdlet.",
      takeaway: "Server removed from Connect Health: reinstall the agent, or re-register it with `Register-AzureADConnectHealthSyncAgent`.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Health operations", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-health-operations"],
        ["Microsoft Learn: Install the Microsoft Entra Connect Health agents", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-health-agent-install"]
      ]
    }
  },
  {
    id: "Q132", source: 132, type: "order",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    stem: [
      "Your company has an Azure AD tenant named contoso.onmicrosoft.com.",
      "You purchase a domain named contoso.com from a registrar and add all the required DNS records.",
      "You create a user account named User1. User1 is configured to sign in as User1@contoso.onmicrosoft.com.",
      "You need to configure User1 to sign in as User1@contoso.com.",
      "Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
    ],
    sourceLabel: "Actions",
    items: [
      "Modify the username of User1.",
      "Modify the email address of User1.",
      "Verify the custom domain.",
      "Add contoso.com as a SAN for an X.509 certificate.",
      "Run `Update-MgDomain -DomainId contoso.com`.",
      "Add a custom domain name."
    ],
    answer: [5, 2, 0],
    explanation: {
      correct: [
        "A user can sign in only with a user name (UPN) whose domain part is a domain that has been added to the tenant and verified. Buying contoso.com and creating DNS records at the registrar does not tell Azure AD (Microsoft Entra ID) anything, so the domain has to be added first.",
        "The sequence is: add contoso.com as a custom domain name, which gives you the TXT or MX value that proves ownership; verify the custom domain, which makes the service look up that record (here it is already in DNS, because all the required records were added); then edit User1 and change the domain part of the username to contoso.com, so that User1 signs in as User1@contoso.com."
      ],
      wrong: [
        ["Modify the email address of User1", "The email address is separate from the sign-in name. User1 would keep signing in with the UPN on contoso.onmicrosoft.com."],
        ["Add contoso.com as a SAN for an X.509 certificate", "Certificates matter for services such as federation servers or web sites. They play no part in changing the sign-in name of a cloud user."],
        ["Run Update-MgDomain -DomainId contoso.com", "This cmdlet changes properties of a domain that is already in the tenant, such as its supported services. It does not add the domain or verify it."]
      ],
      concept: "A custom domain is added, then verified, and only then can it be used as the domain part of user names.",
      takeaway: "New sign-in domain: add the domain, verify it, then change the username.",
      refs: [
        ["Microsoft Learn: Add your custom domain name to Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/add-custom-domain"],
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"]
      ]
    }
  },
  {
    id: "Q133", source: 133, type: "single",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Intune.",
      "You need to access service health alerts from a mobile phone.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Authenticator app" },
      { key: "B", text: "the Microsoft 365 Admin mobile app" },
      { key: "C", text: "Intune Company Portal" },
      { key: "D", text: "the Intune app" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The Microsoft 365 Admin mobile app, for iOS and Android, brings the main admin tasks of the Microsoft 365 admin center to a phone. Among them are service health, where you see current incidents and advisories for each service, and Message center. The app can also send push notifications, so service health alerts reach the admin on the phone."
      ],
      wrong: [
        ["A", "Microsoft Authenticator handles multifactor and passwordless sign-in. It shows no information about the tenant's services."],
        ["C", "Company Portal is the end-user app for enrolling a device in Intune and installing company apps. It has no admin views."],
        ["D", "The Intune app is also an end-user app, used to manage a device's enrollment and compliance. It does not show Microsoft 365 service health."]
      ],
      concept: "The Microsoft 365 Admin mobile app gives admins service health, Message center and basic user management on a phone.",
      takeaway: "Service health on a phone: the Microsoft 365 Admin app. Company Portal and the Intune app are for end users.",
      refs: [
        ["Microsoft Learn: Microsoft 365 Admin mobile app", "https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-mobile-app"],
        ["Microsoft Learn: How to check Microsoft 365 service health", "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"]
      ]
    }
  },
  {
    id: "Q134", source: 134, type: "dropdown",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Intermediate",
    stem: [
      "Your company has a Microsoft 365 subscription that contains the domains shown in the following exhibit.",
      { table: {
        head: ["Domain name", "Status"],
        rows: [
          ["contoso221018.onmicrosoft.com (Default)", "Healthy"],
          ["contoso.com", "Incomplete setup"],
          ["east.contoso221018.onmicrosoft.com", "No services selected"]
        ]
      } },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "An administrator can create usernames that contain the [answer choice].", options: [
        "contoso221018.onmicrosoft.com domain only",
        "contoso221018.onmicrosoft.com domain and all its subdomains only",
        "contoso221018.onmicrosoft.com and east.contoso221018.onmicrosoft.com domains only",
        "contoso221018.onmicrosoft.com, east.contoso221018.onmicrosoft.com, and contoso.com domains"
      ] },
      { id: "f2", label: "Exchange Online can receive inbound email messages sent to the [answer choice].", options: [
        "contoso221018.onmicrosoft.com domain only",
        "contoso221018.onmicrosoft.com domain and all its subdomains only",
        "contoso221018.onmicrosoft.com and east.contoso221018.onmicrosoft.com domains only",
        "contoso221018.onmicrosoft.com, east.contoso221018.onmicrosoft.com, and contoso.com domains"
      ] }
    ],
    answer: { f1: 3, f2: 0 },
    explanation: {
      correct: [
        "The Status column of the Domains page describes the DNS setup for services, not ownership. **Healthy** means all the records are in place. **Incomplete setup** means the domain is verified but the DNS records for its services, such as the MX record for email, are not all in place. **No services selected** means the domain was added without choosing any services to set up.",
        "To use a domain in user names, it only has to be verified, so an administrator can create usernames in all three domains. Inbound email is different: mail reaches Exchange Online only when the domain's MX record points to it. The default onmicrosoft.com domain is hosted by Microsoft, whose DNS already has that record. contoso.com has not finished its setup, and east.contoso221018.onmicrosoft.com has no services selected, so mail is received only for contoso221018.onmicrosoft.com."
      ],
      wrong: [
        ["Statement 1 — contoso221018.onmicrosoft.com domain only", "Any verified domain can be used in user names, not only the initial domain."],
        ["Statement 1 — the onmicrosoft.com domain and its subdomains only", "This leaves out contoso.com, which is verified even though its service records are incomplete."],
        ["Statement 2 — all three domains", "Receiving mail requires the MX record, which is what Incomplete setup and No services selected show to be missing."]
      ],
      concept: "Verification decides whether a domain can be used for user names; the service DNS records, such as MX, decide whether mail is delivered.",
      takeaway: "Verified is enough for usernames. Inbound mail needs the MX record, which a domain with Incomplete setup or No services selected lacks.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Domains FAQ", "https://learn.microsoft.com/microsoft-365/admin/setup/domains-faq"]
      ]
    }
  },
  {
    id: "Q135", source: 135, type: "dragdrop",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to review reports to identify the following:",
      { list: [
        "The storage usage of files stored in Microsoft Teams",
        "The number of active users per team"
      ] },
      "Which report should you review for each requirement? To answer, drag the appropriate reports to the correct requirements. Each report may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Report",
    sources: [
      "The device usage report in Teams",
      "The OneDrive usage report",
      "The SharePoint site usage report",
      "The Teams usage report in Teams",
      "The User activity report in Teams"
    ],
    targets: [
      { id: "t1", label: "The storage usage of files stored in Microsoft Teams:" },
      { id: "t2", label: "Number of active users per Microsoft Team:" }
    ],
    answer: { t1: 2, t2: 3 },
    explanation: {
      correct: [
        "Every team has a SharePoint team site, and the files shared in its channels are stored in that site's document library. The storage they use is therefore reported by the **SharePoint site usage report**, which shows the storage used by each site.",
        "The **Teams usage report** in the Teams admin center lists the teams of the organization with their activity, including the number of active users, active channels and messages for each team. That gives the number of active users per team."
      ],
      wrong: [
        ["The OneDrive usage report", "This report covers users' OneDrive accounts. Channel files of a team live in the team's SharePoint site, not in OneDrive."],
        ["The User activity report in Teams", "This report shows activity per user, such as messages and meetings. It does not count active users per team."],
        ["The device usage report in Teams", "This report shows which device types and platforms people use Teams on."]
      ],
      concept: "Teams files are stored in SharePoint, so their storage is reported by SharePoint, while per-team activity is in the Teams usage report.",
      takeaway: "Team file storage: SharePoint site usage. Active users per team: Teams usage report.",
      refs: [
        ["Microsoft Learn: SharePoint site usage report", "https://learn.microsoft.com/microsoft-365/admin/activity-reports/sharepoint-site-usage-ww"],
        ["Microsoft Learn: Teams usage report", "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-usage-report"]
      ]
    }
  },
  {
    id: "Q136", source: 136, type: "dropdown",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Advanced",
    stem: [
      "You work at a company named Contoso, Ltd.",
      "Contoso has a Microsoft 365 subscription that is configured to use the DNS domains shown in the following table.",
      { table: {
        head: ["Name", "Can enroll devices"],
        rows: [
          ["Contoso.com", "Yes"],
          ["Contoso.onmicrosoft.com", "Yes"]
        ]
      } },
      "Contoso purchases a company named Fabrikam, Inc.",
      "Contoso plans to add the following domains to the Microsoft 365 subscription:",
      { list: ["fabrikam.com", "east.fabrikam.com", "west.contoso.com"] },
      "You need to ensure that the devices in the new domains can register by using Autodiscover.",
      "How many domains should you verify, and what is the minimum number of enterpriseregistration DNS records you should add? To answer, select the appropriate options in the answer area."
    ],
    fields: [
      { id: "f1", label: "Domains:", options: ["1", "2", "3"] },
      { id: "f2", label: "Enterpriseregistration DNS records:", options: ["1", "2", "3"] }
    ],
    answer: { f1: 0, f2: 2 },
    explanation: {
      correct: [
        "Verification proves that you own a root domain. fabrikam.com is new to the subscription, so it must be verified with a TXT or MX record. east.fabrikam.com is a subdomain of fabrikam.com: once the root domain is verified, Microsoft Entra ID verifies its subdomains automatically. west.contoso.com is a subdomain of contoso.com, which is already in use, so it is verified automatically as well. Only one domain needs verification.",
        "Device registration discovery is different. Devices find the registration service by looking up the name `enterpriseregistration` in the domain of the user, a CNAME that points to `enterpriseregistration.windows.net`. A DNS record answers only for its exact name: `enterpriseregistration.fabrikam.com` does not answer for `enterpriseregistration.east.fabrikam.com`. Each of the three new domains needs its own record, so the minimum is three."
      ],
      wrong: [
        ["Domains: 2 or 3", "Subdomains of a verified root domain do not need their own verification, so only fabrikam.com has to be verified."],
        ["Enterpriseregistration DNS records: 1 or 2", "A CNAME covers only its exact name. Every domain whose devices register needs its own enterpriseregistration record, and three domains are added."]
      ],
      concept: "Domain verification is needed once per root domain, while DNS records for device registration are needed for every domain name, root or subdomain.",
      takeaway: "Verify roots only; add one enterpriseregistration CNAME for each domain that devices register in.",
      refs: [
        ["Microsoft Learn: Add and verify custom domain names", "https://learn.microsoft.com/entra/identity/users/domains-manage"],
        ["Microsoft Learn: External Domain Name System records for Office 365", "https://learn.microsoft.com/microsoft-365/enterprise/external-domain-name-system-records"]
      ]
    }
  },
  {
    id: "Q137", source: 137, type: "single",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to recommend a solution for monitoring and reporting application access. The solution must meet the following requirements:",
      { list: ["Support KQL for querying data.", "Retain report data for at least one year."] },
      "What should you include in the recommendation?"
    ],
    options: [
      { key: "A", text: "a security report in Microsoft 365 Defender" },
      { key: "B", text: "Endpoint analytics" },
      { key: "C", text: "Microsoft 365 usage analytics" },
      { key: "D", text: "Azure Monitor workbooks" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Azure Monitor workbooks are interactive reports built on queries written in Kusto Query Language (KQL) against data in a Log Analytics workspace. Access to applications is recorded in the Azure AD (Microsoft Entra ID) sign-in logs; when you send these logs to a Log Analytics workspace with diagnostic settings, you can query them with KQL and present them in workbooks, and Microsoft Entra ID offers ready-made workbooks for this data.",
        "Retention is set on the workspace and can be well over a year, whereas the sign-in logs kept by Microsoft Entra ID itself are available for a limited period only (30 days with P1 or P2). Workbooks over a Log Analytics workspace meet both requirements."
      ],
      wrong: [
        ["A", "The security reports of Microsoft 365 Defender are fixed dashboards. You do not write your own KQL queries in them or set a retention of one year for their data."],
        ["B", "Endpoint analytics is an Intune feature that reports on device performance, startup and app reliability. It does not report application access and does not use KQL."],
        ["C", "Microsoft 365 usage analytics is a Power BI template app for usage of the Microsoft 365 services. It is queried in Power BI, not with KQL."]
      ],
      concept: "KQL querying with long retention means a Log Analytics workspace, and workbooks are the Azure Monitor reports built on it.",
      takeaway: "KQL plus long retention: send the logs to Log Analytics and report with Azure Monitor workbooks.",
      refs: [
        ["Microsoft Learn: Azure Workbooks overview", "https://learn.microsoft.com/azure/azure-monitor/visualize/workbooks-overview"],
        ["Microsoft Learn: How to use Microsoft Entra workbooks", "https://learn.microsoft.com/entra/identity/monitoring-health/howto-use-workbooks"]
      ]
    }
  },
  {
    id: "Q138", source: 138, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to configure a group naming policy.",
      "Which portal should you use, and to which types of groups will the policy apply? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Portal:", options: [
        "The Microsoft 365 admin center",
        "The Microsoft 365 Defender portal",
        "The Microsoft Entra admin center",
        "The Microsoft Purview compliance portal"
      ] },
      { id: "f2", label: "Group types:", options: [
        "Microsoft 365 only",
        "Security only",
        "Security and mail-enabled security only",
        "Microsoft 365 and distribution only",
        "Microsoft 365, mail-enabled security, and distribution only",
        "Security, Microsoft 365, mail-enabled security, and distribution"
      ] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "The group naming policy is a Microsoft Entra ID setting. You configure it in the Microsoft Entra admin center, under Groups, **Naming policy**, where you set a prefix and suffix and a list of custom blocked words.",
        "The policy applies to Microsoft 365 groups. It is enforced whenever such a group is created or renamed in any workload, such as Outlook, Teams, SharePoint or Planner. Security groups, mail-enabled security groups and distribution groups are not covered by it."
      ],
      wrong: [
        ["The Microsoft 365 admin center", "You create and manage groups there, but the naming policy itself is set in Microsoft Entra ID."],
        ["The Microsoft 365 Defender portal / The Microsoft Purview compliance portal", "These portals handle security and compliance. Neither has a group naming setting."],
        ["Group types that include security or distribution groups", "The Microsoft Entra naming policy covers Microsoft 365 groups only. Exchange Online has a separate naming policy for distribution groups."]
      ],
      concept: "The Microsoft Entra group naming policy enforces a naming convention for Microsoft 365 groups across all workloads.",
      takeaway: "Group naming policy: Microsoft Entra admin center, Microsoft 365 groups only.",
      refs: [
        ["Microsoft Learn: Enforce a group naming policy on Microsoft 365 groups", "https://learn.microsoft.com/entra/identity/users/groups-naming-policy"],
        ["Microsoft Learn: Set up a group naming policy", "https://learn.microsoft.com/entra/identity/users/groups-quickstart-naming-policy"]
      ]
    }
  },
  {
    id: "Q139", source: 139, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.",
      { table: {
        head: ["Name", "Type", "Security enabled", "Role assignments allowed"],
        rows: [
          ["Group1", "Microsoft 365", "No", "No"],
          ["Group2", "Microsoft 365", "No", "No"],
          ["Group3", "Security", "Yes", "Yes"],
          ["Group4", "Security", "Yes", "No"],
          ["Group5", "Security", "Yes", "No"],
          ["Group6", "Distribution", "No", "No"]
        ]
      } },
      "Which groups can be members of Group1 and Group4? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Group1:", options: [
        "None of the groups",
        "Group2 only",
        "Group2 and Group4 only",
        "Group2, Group4, Group5, and Group6 only",
        "Group2, Group3, Group4, Group5, and Group6"
      ] },
      { id: "f2", label: "Group4:", options: [
        "None of the groups",
        "Group5 only",
        "Group3 and Group5 only",
        "Group1, Group2, Group3, and Group5 only",
        "Group1, Group2, Group3, Group5, and Group6"
      ] }
    ],
    answer: { f1: 0, f2: 2 },
    explanation: {
      correct: [
        "Group nesting in Microsoft Entra ID is supported for security groups only. Microsoft lists what is not supported: adding security groups to Microsoft 365 groups, adding Microsoft 365 groups to security groups or to other Microsoft 365 groups, and using distribution groups in nesting at all. A Microsoft 365 group therefore contains users only, so Group1 can have **none of the groups** as members.",
        "Group4 is a security group that is not role-assignable, so it can contain other security groups: Group3 and Group5. Group3 being role-assignable does not stop it from being a member of another group; the restriction runs the other way, since a role-assignable group cannot have groups as its members. Group1 and Group2 are Microsoft 365 groups and Group6 is a distribution group, so none of them can be added to Group4."
      ],
      wrong: [
        ["Group1: any option that lists groups", "A Microsoft 365 group cannot have groups as members, whether they are security, Microsoft 365 or distribution groups."],
        ["Group4: Group5 only", "Group3 is also a security group. Its role-assignable setting limits what it can contain, not whether it can be nested in another security group."],
        ["Group4: options with Group1, Group2 or Group6", "Microsoft 365 groups cannot be added to security groups, and distribution groups cannot be nested."]
      ],
      concept: "Only security groups take groups as members; Microsoft 365 groups contain users only, distribution groups do not nest, and role-assignable groups cannot contain groups.",
      takeaway: "Nesting: security in security only. A Microsoft 365 group has no group members.",
      refs: [
        ["Microsoft Learn: How to manage groups (add a group to another group)", "https://learn.microsoft.com/entra/fundamentals/how-to-manage-groups"],
        ["Microsoft Learn: Use Microsoft Entra groups to manage role assignments", "https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept"]
      ]
    }
  },
  {
    id: "Q140", source: 140, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Advanced",
    stem: [
      "Your company has a Microsoft Azure Active Directory (Azure AD) tenant named contoso.com that includes the users shown in the following table.",
      { table: {
        head: ["Name", "Usage location", "Membership"],
        rows: [
          ["User1", "United States", "Group1, Group2"],
          ["User2", "Not set", "Group2"],
          ["User3", "Not set", "Group1"],
          ["User4", "Canada", "Group1"]
        ]
      } },
      "Group2 is a member of Group1.",
      "You assign a Microsoft Office 365 Enterprise E3 license to Group1.",
      "How many Office 365 E3 licenses are assigned?"
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
        "Two rules decide the count. First, group-based licensing does not support nested groups: when a license is assigned to a group that contains another group, only the direct user members of that group receive it. Second, a user without a usage location does not block group-based licensing: users without a usage location inherit the location of the directory.",
        "Walking the table: User1, User3 and User4 are direct members of Group1, so each receives a license. User3 has no usage location, but inherits the directory's location and is licensed. User2 is a member of Group2 only, and reaches Group1 only through the nested Group2, so User2 is not licensed. Three licenses are assigned."
      ],
      wrong: [
        ["A", "Only one license would mean that two of the three direct members are skipped. Missing usage location does not cause that with group-based licensing."],
        ["B", "Two licenses would count only User1 and User4, the users with a usage location. User3 inherits the directory's location and is licensed too."],
        ["D", "Four licenses would include User2, who is only in the nested Group2. Licenses assigned to a group are not applied to members of nested groups."]
      ],
      concept: "Group-based licensing applies to direct user members only, and users without a usage location inherit the directory's location.",
      takeaway: "Count only direct members of the licensed group; nested group members get nothing.",
      refs: [
        ["Microsoft Learn: What is group-based licensing in Microsoft Entra ID?", "https://learn.microsoft.com/entra/fundamentals/concept-group-based-licensing"],
        ["Microsoft Learn: Identify and resolve license assignment problems for a group", "https://learn.microsoft.com/entra/identity/users/licensing-groups-resolve-problems"]
      ]
    }
  },
  {
    id: "Q141", source: 141, type: "yesno",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains the administrative units shown in the following table.",
      { table: {
        head: ["Name", "Members"],
        rows: [
          ["AU1", "Group1, User2"],
          ["AU2", "Group2, User3, User4"]
        ]
      } },
      "The groups contain the members shown in the following table.",
      { table: {
        head: ["Name", "Members"],
        rows: [
          ["Group1", "User1"],
          ["Group2", "User2, User4"]
        ]
      } },
      "The users are assigned the roles shown in the following table.",
      { table: {
        head: ["Name", "Role", "Scope"],
        rows: [
          ["User1", "None", "Not applicable"],
          ["User2", "Password Administrator", "AU1"],
          ["User3", "License Administrator", "Organization"],
          ["User4", "None", "Not applicable"]
        ]
      } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User2 can reset the password of User1." },
      { text: "User2 can reset the password of User4." },
      { text: "User3 can assign licenses to User1." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "User2 is a Password Administrator scoped to AU1, so User2 can reset passwords only of users who are members of AU1. AU1 contains Group1 and User2. Adding a group to an administrative unit brings the group itself into scope, but not its members: a scoped administrator can manage the group's properties, not the users in it.",
        "Statement 1: User1 is in AU1 only through Group1, so User1 is not in User2's scope. No. Statement 2: User4 is a member of AU2 and of Group2, not of AU1. No. Statement 3: User3 is a License Administrator at organization scope, which covers every user in the tenant, including User1. Yes."
      ],
      wrong: [
        ["Statement 1 — Yes", "Group1 is in AU1, but its members are not. User1 would have to be added to AU1 directly."],
        ["Statement 2 — Yes", "User4 shares Group2 with User2, but the scope of User2's role is AU1, and User4 is not a member of AU1."],
        ["Statement 3 — No", "Administrative units restrict only roles that are assigned with an administrative unit scope. A role assigned at organization scope applies to all users."]
      ],
      concept: "A role scoped to an administrative unit applies to the users who are direct members of the unit; a group in the unit brings only the group into scope.",
      takeaway: "Group in an AU: the group is in scope, its members are not.",
      refs: [
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q142", source: 142, type: "single",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: {
        head: ["Name", "Role"],
        rows: [
          ["User1", "Reports Reader"],
          ["User2", "Exchange Administrator"],
          ["User3", "User Experience Success Manager"]
        ]
      } },
      "Which users can review the Adoption Score in the Microsoft 365 admin center?"
    ],
    options: [
      { key: "A", text: "User1 only" },
      { key: "B", text: "User2 only" },
      { key: "C", text: "User1 and User2 only" },
      { key: "D", text: "User1 and User3 only" },
      { key: "E", text: "User1, User2, and User3" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The reference answer is D, User1 and User3. Adoption Score is a report in the Microsoft 365 admin center, under Reports, and it can be opened only by users who hold one of the roles listed in its prerequisites.",
        "Reports Reader (User1) can read the usage reports and Adoption Score of the Microsoft 365 admin center. User Experience Success Manager (User3) is the role made for adoption work: it gives access to Adoption Score insights together with Message center and product feedback, without broader admin rights. The reference answer counts these two reporting roles and does not count User2's Exchange Administrator role, which is a workload role for managing Exchange Online."
      ],
      wrong: [
        ["A", "User3 is left out, although User Experience Success Manager is a role intended for Adoption Score."],
        ["B", "Both reporting roles are left out. The reference answer does not count the Exchange Administrator role."],
        ["C", "User3 is left out, and the reference answer does not count User2's Exchange Administrator role."],
        ["E", "The reference answer limits the users to the two reporting roles and leaves out User2."]
      ],
      concept: "Access to Adoption Score is controlled by the Microsoft Entra roles listed in its prerequisites, among them Reports Reader and User Experience Success Manager.",
      takeaway: "Reports Reader and User Experience Success Manager are the reporting roles that open Adoption Score; check the prerequisites list for the full set.",
      refs: [["Microsoft Learn: Microsoft Adoption Score", "https://learn.microsoft.com/microsoft-365/admin/adoption/adoption-score"]]
    }
  },
  {
    id: "Q143", source: 143, type: "yesno",
    domain: "identity", topic: "External collaboration", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.",
      { table: {
        head: ["Name", "Type", "Role"],
        rows: [
          ["Group1", "Security", "Helpdesk Administrator"],
          ["Group2", "Security", "None"],
          ["Group3", "Microsoft 365", "User Administrator"]
        ]
      } },
      "The subscription contains the users shown in the following table.",
      { table: {
        head: ["Name", "Member of"],
        rows: [
          ["User1", "Group1"],
          ["User2", "Group2"],
          ["User3", "Group3"]
        ]
      } },
      "In Azure AD, you configure the External collaboration settings as shown in the following exhibit.",
      { image: "q143-external-collaboration-settings.png", alt: "External collaboration settings. Guest user access restrictions: Guest users have limited access to properties and memberships of directory objects (selected). Guest invite restrictions: Only users assigned to specific admin roles can invite guest users (selected); the other choices, not selected, are Anyone in the organization can invite guest users including guests and non-admins, Member users and users assigned to specific admin roles can invite guest users including guests with member permissions, and No one in the organization can invite guest users including admins. Enable guest self-service sign up via user flows: No. Allow external users to remove themselves from your organization: Yes. Collaboration restrictions: Allow invitations to be sent to any domain (selected)." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can invite guest users." },
      { text: "User2 can invite guest users." },
      { text: "User3 can invite guest users." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "The guest invite restriction is set to **Only users assigned to specific admin roles can invite guest users**. With this option, only users who hold the User Administrator or Guest Inviter role (or Global Administrator) can send invitations; ordinary members and other admin roles cannot. The users get their roles through the groups, and a role assigned to a group applies to its members just as a direct assignment does.",
        "Statement 1: User1 is a Helpdesk Administrator through Group1. That role resets passwords of non-administrators and handles support tasks, but it is not one of the roles that can invite guests. No. Statement 2: User2 has no role through Group2 and is an ordinary member, which this option excludes. No. Statement 3: User3 is a User Administrator through Group3, which is one of the roles that can invite guests, and collaboration is allowed with any domain. Yes."
      ],
      wrong: [
        ["Statement 1 — Yes", "Helpdesk Administrator is an admin role, but not one of the roles that the restriction allows to invite guests."],
        ["Statement 2 — Yes", "Member users could invite guests with the option Member users and users assigned to specific admin roles. The selected option is stricter."],
        ["Statement 3 — No", "A role assigned to a group gives its members the same permissions as a direct assignment, and User Administrator can invite guests under this restriction."]
      ],
      concept: "The guest invite restriction controls who can invite B2B guests, from everyone down to no one; the admin-only setting allows User Administrator and Guest Inviter.",
      takeaway: "Admin roles only: User Administrator and Guest Inviter can invite; Helpdesk Administrator and ordinary members cannot.",
      refs: [["Microsoft Learn: Configure external collaboration settings", "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"]]
    }
  },
  {
    id: "Q144", source: 144, type: "yesno",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You have an Azure AD tenant named contoso.com that contains the following users:",
      { list: ["Admin1", "Admin2", "User1"] },
      "Contoso.com contains an administrative unit named AU1 that has no role assignments. User1 is a member of AU1.",
      "You create an administrative unit named AU2 that does NOT have any members or role assignments.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "You can add Admin1 as a member of AU1." },
      { text: "You can add User1 as a member of AU2." },
      { text: "You can assign Admin2 the User administrator role for AU1." }
    ],
    answer: [true, true, true],
    explanation: {
      correct: [
        "An administrative unit is a container for users, groups and devices that limits the scope of role assignments. Any user account can be added to it, so Admin1 can be added to AU1 (statement 1, Yes). Administrative units are not mutually exclusive: a user can be a member of several of them, so User1 can be added to AU2 while remaining in AU1 (statement 2, Yes).",
        "A role assignment can be scoped to an administrative unit at any time; AU1 having no role assignments only means that no one has been delegated yet. User Administrator is one of the roles that can be assigned with an administrative unit scope, so Admin2 can be made a User Administrator for AU1 (statement 3, Yes)."
      ],
      wrong: [
        ["Statement 1 — No", "Holding or being meant for an admin role does not stop an account from being a member of an administrative unit."],
        ["Statement 2 — No", "Membership is not exclusive. Microsoft's example is a user who is in both a geography unit and a division unit."],
        ["Statement 3 — No", "An administrative unit needs no existing role assignments before you scope a role to it, and User Administrator supports this scope."]
      ],
      concept: "Administrative units are non-exclusive containers of users, groups and devices, to which roles such as User Administrator can be scoped.",
      takeaway: "A user can sit in several AUs, and any AU can receive a scoped role assignment at any time.",
      refs: [
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"],
        ["Microsoft Learn: Add users, groups, or devices to an administrative unit", "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-members-add"]
      ]
    }
  }
);
