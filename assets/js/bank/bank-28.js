/* MS-102 question bank, part 28: questions 433 to 448 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q433", source: 433, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E3 subscription.",
      "You plan to use Microsoft 365 Backup.",
      "You need to prepare the environment before you can enable Microsoft 365 Backup.",
      "What should you do? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Add:", options: ["A billing profile", "A payment method", "An Azure subscription", "Microsoft 365 E5 licenses"] },
      { id: "f2", label: "Create:", options: ["A resource group", "A retention policy", "A security group", "An app registration"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "Microsoft 365 Backup is not part of the E3 (or E5) license. It is a pay-as-you-go service, and what it consumes is billed through an Azure subscription. Before the service can be turned on in the Microsoft 365 admin center, pay-as-you-go billing has to be set up for it.",
        "Setting up that billing means adding (linking) **an Azure subscription** to Microsoft 365 Backup and choosing **a resource group** in that subscription, together with a region, under which the charges are recorded. If the subscription has no suitable resource group yet, you create one first. Once billing is in place, an admin enables Microsoft 365 Backup and creates the backup policies for Exchange Online, OneDrive and SharePoint."
      ],
      wrong: [
        ["A billing profile or A payment method", "These belong to Microsoft 365 commerce billing, where subscriptions are paid. Microsoft 365 Backup charges are not attached to a payment method of their own; they are billed to the Azure subscription that is linked to the service."],
        ["Microsoft 365 E5 licenses", "Microsoft 365 Backup does not require E5. It is a pay-as-you-go service for a tenant with a qualifying plan such as the E3 subscription in this scenario."],
        ["A retention policy", "Retention policies are a Microsoft Purview feature that keeps or deletes content for compliance. They are not a prerequisite for Microsoft 365 Backup, which has its own backup policies, created after the service is enabled."],
        ["A security group or An app registration", "Neither is part of setting up the service. Microsoft 365 Backup is enabled by an admin in the Microsoft 365 admin center once its pay-as-you-go billing is connected to an Azure subscription and resource group."]
      ],
      concept: "Microsoft 365 Backup is billed pay-as-you-go through Azure, so an Azure subscription and a resource group are linked for billing before the service is enabled.",
      takeaway: "Before enabling Microsoft 365 Backup: add an Azure subscription and create (or choose) a resource group for its pay-as-you-go billing.",
      refs: [
        ["Microsoft Learn: Overview of Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-overview"],
        ["Microsoft Learn: Set up Microsoft 365 Backup", "https://learn.microsoft.com/microsoft-365/backup/backup-setup"]
      ]
    }
  },
  {
    id: "Q434", source: 434, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    caseId: "fabrikam", caseOrder: 9,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "host (AAAA)" },
      { key: "B", text: "name server (NS)" },
      { key: "C", text: "mail exchanger (MX)" },
      { key: "D", text: "host (A)" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "During Project1 the mailboxes of 100 sales users move to Microsoft 365, and all users must keep exchanging email with their current addresses. Those addresses are in fabrikam.com, so fabrikam.com has to be added to the tenant, and Microsoft 365 accepts a domain only after you prove that you own it with a DNS record that holds a value generated for your tenant. Microsoft 365 offers two record types for that proof: a TXT record or, as the alternative, an MX record.",
        "The MX record is also the record type that directs inbound mail for a domain, and it is the record Microsoft 365 lists for Exchange Online mail flow once the domain is set up. Of the record types offered, MX is the only one Microsoft 365 asks you to create when you add the domain. Because the public zone for fabrikam.com is managed by an external DNS server, the record is created at that DNS host, not on the internal domain controllers."
      ],
      wrong: [
        ["A", "An AAAA record maps a host name to an IPv6 address. Microsoft 365 uses it neither to verify a domain nor to route mail."],
        ["B", "NS records delegate a zone to a set of name servers. Microsoft 365 does not need the zone delegated: the records it asks for are created in the existing public zone, which stays on the external DNS server."],
        ["D", "An A record maps a host name to an IPv4 address. It does not prove domain ownership and does not tell other mail servers where to deliver mail."]
      ],
      concept: "Adding a domain to Microsoft 365 needs a verification record (TXT, or MX as the alternative), and the MX record is the one that routes the domain's mail.",
      takeaway: "Domain for Exchange Online mail: the record Microsoft 365 asks for is TXT or MX, created at the public DNS host; A, AAAA, NS and HINFO are not it.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Add DNS records to connect your domain", "https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider"]
      ]
    }
  },
  {
    id: "Q435", source: 435, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You plan to manage incidents in the tenant by using the Microsoft Defender XDR.",
      "Which Microsoft service source will appear on the Incidents page of the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Azure Information Protection" },
      { key: "B", text: "Microsoft Defender for Identity" },
      { key: "C", text: "Azure Web Application Firewall" },
      { key: "D", text: "Microsoft Sentinel" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Microsoft Defender XDR correlates the alerts of its workloads into incidents: Defender for Endpoint, Defender for Office 365, Defender for Identity and Defender for Cloud Apps, plus other sources such as Microsoft Entra ID Protection and Microsoft Purview data loss prevention. Each incident on the Incidents page shows the service sources its alerts came from, and the queue can be filtered by them.",
        "Defender for Identity is one of these native workloads. Its sensors on domain controllers (and AD FS or AD CS servers) watch on-premises Active Directory activity and raise alerts such as reconnaissance, lateral movement or pass-the-ticket attempts, which Defender XDR places into incidents with Defender for Identity as the service source."
      ],
      wrong: [
        ["A", "Azure Information Protection classifies and labels documents and emails (its labeling is now part of Microsoft Purview Information Protection). It does not raise security alerts into Defender XDR incidents."],
        ["C", "Azure Web Application Firewall protects web applications in Azure. Its logs go to Azure Monitor and can be analyzed in Microsoft Sentinel; it is not a Defender XDR workload."],
        ["D", "Microsoft Sentinel is a separate SIEM with incidents of its own in its workspace, and it can ingest Defender XDR incidents through a connector. Its incidents appear in the Defender portal only after the workspace is onboarded to the unified security operations platform, a separate step from using Defender XDR."]
      ],
      concept: "The Incidents page of the Defender portal groups alerts from the Defender XDR workloads, such as Defender for Endpoint, Office 365, Identity and Cloud Apps, into incidents and shows each one's service sources.",
      takeaway: "Defender XDR incident service sources are the Defender workloads (Endpoint, Office 365, Identity, Cloud Apps) and integrated services, not Azure network services or labeling tools.",
      refs: [
        ["Microsoft Learn: Incidents and alerts in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/incidents-overview"],
        ["Microsoft Learn: What is Microsoft Defender for Identity?", "https://learn.microsoft.com/defender-for-identity/what-is"]
      ]
    }
  },
  {
    id: "Q436", source: 436, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain named adatum.com that is synced to a Microsoft Entra tenant.",
      "The domain contains 100 user accounts.",
      "The city attribute for all the users is set to the city where the user resides.",
      "You need to modify the value of the city attribute to the three-letter airport code of each city.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From Azure Cloud Shell, run the `Get-ADUser` and `Set-ADUser` cmdlets." },
      { key: "B", text: "From Azure Cloud Shell, run the `Get-MsolUser` and `Set-Msoluser` cmdlets." },
      { key: "C", text: "From Windows PowerShell on a domain controller, run the `Get-MgUser` and `Update-MgUser` cmdlets." },
      { key: "D", text: "From Active Directory Administrative Center, select the Active Directory users, and then modify the Properties settings." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The users are synchronized from adatum.com, so on-premises Active Directory is the source of authority for their attributes, including the city. The change has to be made in Active Directory, and the sync engine (Microsoft Entra Connect) then carries the new values to Microsoft Entra ID at its next cycle.",
        "Active Directory Administrative Center edits user objects in Active Directory directly. You select the users, open **Properties** and set the City field. When several users are selected, it lets you edit their common properties in one go, so the users of each city can be selected together and given that city's airport code."
      ],
      wrong: [
        ["A", "Azure Cloud Shell runs in Azure. It has no connection to the on-premises domain controllers of adatum.com, so the Active Directory cmdlets cannot change the domain from there."],
        ["B", "The MSOnline cmdlets work on the user objects in Entra ID, not in Active Directory. For synchronized users the attributes that come from on-premises cannot be changed in the cloud, and the MSOnline module is deprecated in favor of Microsoft Graph PowerShell."],
        ["C", "`Get-MgUser` and `Update-MgUser` are Microsoft Graph cmdlets. They change Entra ID wherever you run them, even on a domain controller, and the city of a synchronized user is mastered in Active Directory, so a cloud change would not reach the domain."]
      ],
      concept: "For synchronized users, attributes are changed in on-premises Active Directory, and the sync engine carries the change to Microsoft Entra ID.",
      takeaway: "Synced user attribute to change: edit it in Active Directory (Administrative Center, ADUC or the AD module on-premises), never in the cloud.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra Connect?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-azure-ad-connect"],
        ["Microsoft Learn: Overview of Azure Cloud Shell", "https://learn.microsoft.com/azure/cloud-shell/overview"]
      ]
    }
  },
  {
    id: "Q437", source: 437, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains a Microsoft Entra tenant named contoso.com. The tenant includes a user named User1.",
      "You plan to use Microsoft Entra ID Protection.",
      "You need to ensure that User1 can review the list in Microsoft Entra ID Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Compliance Administrator" },
      { key: "B", text: "User Administrator" },
      { key: "C", text: "Security Administrator" },
      { key: "D", text: "Global Administrator" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The list of users flagged for risk is the Risky users report of Microsoft Entra ID Protection. Access to ID Protection is granted by a small set of roles: Security Reader and Global Reader (read-only), Security Operator (read and act on risk), Security Administrator (full access) and Global Administrator.",
        "Of the four roles offered, only Security Administrator and Global Administrator are in that set, and Security Administrator is far narrower: it covers security features such as ID Protection without control over the rest of the tenant. It is therefore the least privileged choice available here (Security Reader would be narrower still, but it is not an option)."
      ],
      wrong: [
        ["A", "Compliance Administrator manages Microsoft Purview compliance features such as retention and DLP. It gives no access to ID Protection reports."],
        ["B", "User Administrator manages users, groups and passwords. It is not one of the roles that open the ID Protection reports."],
        ["D", "Global Administrator can see the report, but it grants full control of the tenant, which breaks the least-privilege requirement when Security Administrator is enough."]
      ],
      concept: "Microsoft Entra ID Protection reports are available to Security Reader, Security Operator, Security Administrator, Global Reader and Global Administrator.",
      takeaway: "Review risky users with least privilege: Security Reader if offered; otherwise Security Administrator before Global Administrator.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q438", source: 438, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Group1", "Security"],
        ["Group2", "Distribution"],
        ["Group3", "Microsoft 365"]
      ] } },
      "You need to create a contact named Contact1 and add Contact1 to a group.",
      "Which two portals can you use to create Contact1, and to which groups can you add Contact1? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Portals:", options: ["Microsoft 365 admin center and Microsoft Entra admin center", "Microsoft Entra admin center and Exchange admin center", "Microsoft 365 admin center and Exchange admin center", "Microsoft Entra admin center and Microsoft Intune admin center"] },
      { id: "f2", label: "Groups:", options: ["Group2 only", "Group3 only", "Group1 and Group3 only", "Group2 and Group3 only", "Group1, Group2, and Group3"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "A contact (mail contact) is a mail-enabled recipient that stands for a person outside the organization and holds that person's external email address. It is an Exchange Online recipient, so it is created either in the **Exchange admin center** (Recipients > Contacts) or in the **Microsoft 365 admin center** (Users > Contacts).",
        "A mail contact can be a member of mail-enabled groups that Exchange manages, which here means **Group2 only**, the distribution group. Group1 is a plain security group, whose members can be users, devices, groups and service principals but not contacts. Group3 is a Microsoft 365 group, whose members must be user accounts (members or guests of the tenant); an external person is brought into it as a guest, not as a contact."
      ],
      wrong: [
        ["Any combination with the Microsoft Entra admin center", "The Microsoft Entra admin center manages users, groups, devices and apps, but it has no page for creating mail contacts. The Intune admin center manages devices and apps, not recipients."],
        ["Group3 only, or any choice that includes Group3", "Microsoft 365 groups accept user accounts as members. A mail contact cannot be added; to include an external person, invite them as a guest."],
        ["Group1 and Group3 only, or Group1, Group2, and Group3", "Group1 is a security group that is not mail-enabled, and such a group cannot contain mail contacts."]
      ],
      concept: "Mail contacts are Exchange recipients, created in the Exchange or Microsoft 365 admin center, and they can join distribution groups but not plain security groups or Microsoft 365 groups.",
      takeaway: "Contact: create it in EAC or the Microsoft 365 admin center, and add it to a distribution group.",
      refs: [
        ["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"],
        ["Microsoft Learn: Compare types of groups in Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/create-groups/compare-groups"]
      ]
    }
  },
  {
    id: "Q439", source: 439, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You plan to manage incidents in the tenant by using the Microsoft Defender XDR.",
      "Which Microsoft service source will appear on the Incidents page of the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Azure Web Application Firewall" },
      { key: "B", text: "Microsoft Sentinel" },
      { key: "C", text: "Microsoft Defender for Cloud Apps" },
      { key: "D", text: "Microsoft Purview" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Microsoft Defender XDR builds its incidents from the alerts of its workloads: Defender for Endpoint, Defender for Office 365, Defender for Identity and Defender for Cloud Apps, plus integrated sources such as Microsoft Entra ID Protection. The Incidents page shows the service sources of every incident and can be filtered by them.",
        "Defender for Cloud Apps is one of those native workloads. It monitors cloud app activity and raises alerts from its anomaly detection and activity policies, for example impossible travel or mass download, and Defender XDR correlates them into incidents with Defender for Cloud Apps as the service source."
      ],
      wrong: [
        ["A", "Azure Web Application Firewall protects web applications in Azure. Its logs go to Azure Monitor and can be analyzed in Microsoft Sentinel; it is not a Defender XDR workload."],
        ["B", "Microsoft Sentinel is a separate SIEM with incidents of its own in its workspace. Its incidents appear in the Defender portal only after the workspace is onboarded to the unified security operations platform, a separate step from using Defender XDR."],
        ["D", "Microsoft Purview is the compliance portfolio as a whole. Some of its solutions, such as data loss prevention, can send alerts into Defender XDR incidents, where they are listed under that solution's name; most Purview features, such as labeling or retention, raise no incidents."]
      ],
      concept: "The Defender portal's Incidents page correlates alerts from the Defender XDR workloads, including Defender for Cloud Apps, into incidents and lists their service sources.",
      takeaway: "Native Defender XDR incident sources: Defender for Endpoint, Office 365, Identity and Cloud Apps.",
      refs: [
        ["Microsoft Learn: Incidents and alerts in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/incidents-overview"],
        ["Microsoft Learn: What is Microsoft Defender for Cloud Apps?", "https://learn.microsoft.com/defender-cloud-apps/what-is-defender-for-cloud-apps"]
      ]
    }
  },
  {
    id: "Q440", source: 440, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    caseId: "fabrikam", caseOrder: 10,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name to the tenant for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "name server (NS)" },
      { key: "B", text: "host (A)" },
      { key: "C", text: "mail exchanger (MX)" },
      { key: "D", text: "host information (HINFO)" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Project1 moves the mailboxes of 100 sales users to Microsoft 365 while all users keep exchanging email with their current fabrikam.com addresses, so fabrikam.com has to be added to the tenant. Microsoft 365 accepts the domain only after you prove ownership with a DNS record that holds a value generated for your tenant, and it offers two record types for that: a TXT record or, as the alternative, an MX record.",
        "The MX record is also the record type that tells other mail servers where to deliver mail for the domain, and Microsoft 365 lists it for Exchange Online mail flow once the domain is set up. Of the record types offered, it is the only one Microsoft 365 asks you to create. The public zone for fabrikam.com is managed by an external DNS server, so that is where the record is created."
      ],
      wrong: [
        ["A", "NS records delegate a zone to a set of name servers. Microsoft 365 does not need the zone delegated: the records it asks for go into the existing public zone on the external DNS server."],
        ["B", "An A record maps a host name to an IPv4 address. It neither proves domain ownership nor directs mail."],
        ["D", "An HINFO record describes the hardware and operating system of a host. Microsoft 365 never asks for one."]
      ],
      concept: "Adding a domain to Microsoft 365 needs a verification record (TXT, or MX as the alternative), and the MX record is the one that routes the domain's mail.",
      takeaway: "Domain for Exchange Online mail: the record Microsoft 365 asks for is TXT or MX, created at the public DNS host.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Add DNS records to connect your domain", "https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider"]
      ]
    }
  },
  {
    id: "Q441", source: 441, type: "yesno",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains two groups named Group1 and Group2. The subscription contains the users shown in the following table.",
      { table: { head: ["Name", "Group membership"], rows: [
        ["User1", "Group1"],
        ["User2", "Group1, Group2"],
        ["User3", "Group2"]
      ] } },
      "The users are directly assigned licenses as shown in the following table.",
      { table: { head: ["User", "License", "Disabled plan"], rows: [
        ["User1", "Microsoft 365 E5", "None"],
        ["User2", "None", "None"],
        ["User3", "Microsoft 365 E5", "Microsoft Planner"]
      ] } },
      "The groups are assigned licenses as shown in the following table.",
      { table: { head: ["Name", "License", "Disabled plan"], rows: [
        ["Group1", "Microsoft 365 E5", "Microsoft Planner"],
        ["Group2", "Microsoft 365 E5", "None"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 has a license for Microsoft Planner." },
      { text: "User2 has a license for Microsoft Planner." },
      { text: "User3 has a license for Microsoft Planner." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "The reference answer is Yes, No, No. **User1** has a direct Microsoft 365 E5 license with no plan disabled, so Planner is enabled: **Yes**. User1 also inherits E5 from Group1 with Planner disabled, but the direct assignment already includes Planner.",
        "For **User2** and **User3** the reference counts the assignment in which Planner is disabled: User2 has no direct license and inherits E5 from Group1, where Planner is turned off, and User3's direct E5 assignment has Planner turned off. Both users also inherit E5 from Group2, where nothing is disabled. On overlapping assignments of the same product, Microsoft documents that the user consumes one license and that the assignments combine, so that all the service plans enabled in any of them apply to the user; a direct license and an inherited license likewise coexist. Keep that rule in mind when you meet this kind of table: work out every source of the product for each user and which plans each source enables."
      ],
      wrong: [
        ["Statement 1 — No", "User1's direct E5 assignment has no disabled plan, so Planner is enabled for User1 whatever the Group1 assignment says."],
        ["Statement 2 — Yes", "This is the result of combining User2's two inherited E5 assignments, since Group2 leaves Planner enabled. The reference answer takes the Group1 assignment, where Planner is disabled, as deciding."],
        ["Statement 3 — Yes", "This is the result of combining User3's direct E5 assignment with the E5 inherited from Group2, where Planner is enabled. The reference answer takes the direct assignment, where Planner is disabled, as deciding."]
      ],
      concept: "A user can receive the same product license directly and from several groups, and each assignment can disable different service plans.",
      takeaway: "For license tables, list every direct and group source of the product for each user before deciding whether a plan is available.",
      refs: [
        ["Microsoft Learn: Scenarios, limitations, and known issues using groups to manage licensing", "https://learn.microsoft.com/entra/identity/users/licensing-group-advanced"]
      ]
    }
  },
  {
    id: "Q442", source: 442, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You create a Microsoft Defender Threat Intelligence (Defender TI) project named Project1.",
      "You need to add artifacts to Project1.",
      "Which type of artifact can you add to Project1?"
    ],
    options: [
      { key: "A", text: "Microsoft SharePoint Online sites" },
      { key: "B", text: "network segments" },
      { key: "C", text: "IP addresses" },
      { key: "D", text: "Microsoft Entra users" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Defender TI maps internet infrastructure: it collects data about IP addresses, domains and hosts, together with related data sets such as DNS resolutions, WHOIS records, certificates and trackers. These indicators are its artifacts.",
        "A project is a workspace in which an analyst collects the artifacts that belong to one investigation or threat actor, so the team can track them, tag them and watch for changes. Artifacts are added from a search result or on the project page, and an **IP address** is exactly such an artifact."
      ],
      wrong: [
        ["A", "SharePoint Online sites are content in your tenant, not internet infrastructure indicators. Defender TI does not track them as artifacts."],
        ["B", "Network segments describe your internal network. Defender TI works with indicators of public internet infrastructure, and a segment is not one of its artifact types."],
        ["D", "Microsoft Entra users are identities in your tenant. They are investigated with Defender XDR and Entra ID Protection, not added to a Defender TI project."]
      ],
      concept: "Defender TI projects organize internet infrastructure indicators, such as IP addresses, domains and hosts, for an investigation.",
      takeaway: "Defender TI artifacts are internet indicators (IP addresses, domains, hosts), not tenant objects such as users or sites.",
      refs: [
        ["Microsoft Learn: Threat intelligence in Microsoft Defender", "https://learn.microsoft.com/defender-xdr/defender-threat-intelligence"]
      ]
    }
  },
  {
    id: "Q443", source: 443, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You are implementing Microsoft Defender XDR.",
      "You need to ensure that you can view attack paths in Microsoft Security Exposure Management.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Add an advanced hunting query." },
      { key: "B", text: "Tag users, groups, and devices as sensitive." },
      { key: "C", text: "Define critical assets." },
      { key: "D", text: "Tag users and devices as honeytokens." }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Microsoft Security Exposure Management builds an exposure graph of your assets and their relationships from the data of the Defender workloads. An attack path is a chain through that graph from an entry point an attacker could use to a **critical asset**, so the critical assets are the targets every path leads to.",
        "Which assets count as critical is set in critical asset management. Predefined classifications already recognize many critical assets, such as domain controllers, and you can review them and add classifications of your own. Defining the critical assets is therefore the starting point: it decides which targets the attack paths lead to and how they are prioritized."
      ],
      wrong: [
        ["A", "Advanced hunting can query exposure data once it exists, but adding a query does not create or reveal attack paths."],
        ["B", "The Sensitive tag belongs to Microsoft Defender for Identity. It marks accounts, groups and devices for that workload's own lateral movement analysis and alerting, not for setting up Exposure Management."],
        ["D", "Honeytoken tags in Defender for Identity mark decoy accounts and devices so that any activity on them raises an alert. They serve detection and play no part in setting up attack paths."]
      ],
      concept: "Attack paths in Security Exposure Management lead to critical assets, which are defined in critical asset management through predefined and custom classifications.",
      takeaway: "Attack paths in Exposure Management: start by defining (and reviewing) your critical assets.",
      refs: [
        ["Microsoft Learn: What is Microsoft Security Exposure Management?", "https://learn.microsoft.com/security-exposure-management/microsoft-security-exposure-management"],
        ["Microsoft Learn: Overview of critical asset management", "https://learn.microsoft.com/security-exposure-management/critical-asset-management"]
      ]
    }
  },
  {
    id: "Q444", source: 444, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory Domain Services (AD DS) domain. The domain contains a user named User1.",
      "You have a Microsoft Entra tenant that contains a user named User2.",
      "You plan to use Microsoft Entra Cloud Sync to sync the AD DS domain and the Microsoft Entra tenant.",
      "You need to ensure that User1 can install Microsoft Entra Cloud Sync in the domain, and User2 can configure Microsoft Entra Cloud Sync in the tenant. The solution must follow the principle of least privilege.",
      "To which group should you add User1, and which role should you assign to User2? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1:", options: ["Administrators", "Domain Admins", "Enterprise Admins", "Schema Admins"] },
      { id: "f2", label: "User2:", options: ["External Identity Provider Administrator", "Global Administrator", "Hybrid Identity Administrator", "User Administrator"] }
    ],
    answer: { f1: 2, f2: 2 },
    explanation: {
      correct: [
        "Installing Cloud Sync means installing the Microsoft Entra provisioning agent on a domain-joined server. During setup the agent creates a group managed service account (gMSA) in Active Directory to run its service, and that step needs highly privileged Active Directory credentials: Microsoft Learn asks for Domain Administrator or Enterprise Administrator credentials. The reference answer for User1 is **Enterprise Admins**, the group whose credentials let the wizard create and configure the account in any domain of the forest.",
        "Configuring Cloud Sync in the tenant (creating the configuration, scoping and attribute mappings, starting provisioning) needs at least the **Hybrid Identity Administrator** role. That role is made for synchronization and hybrid identity settings, so it meets the requirement without granting the tenant-wide control of Global Administrator."
      ],
      wrong: [
        ["Domain Admins", "Microsoft Learn names Domain Administrator credentials beside Enterprise Administrator credentials for creating the agent's gMSA. The reference answer picks Enterprise Admins."],
        ["Administrators or Schema Admins", "The keyed choice is Enterprise Admins. Schema Admins only grants the right to change the Active Directory schema, which installing the agent does not do."],
        ["Global Administrator", "Global Administrator can configure Cloud Sync, but it grants full control of the tenant. Hybrid Identity Administrator is enough and therefore the least privileged role."],
        ["External Identity Provider Administrator or User Administrator", "External Identity Provider Administrator configures federation with external identity providers for B2B and customer sign-in, and User Administrator manages users and groups. Neither can configure Cloud Sync."]
      ],
      concept: "Cloud Sync needs highly privileged Active Directory credentials to install the provisioning agent (it creates a gMSA) and the Hybrid Identity Administrator role to configure synchronization in Entra ID.",
      takeaway: "Cloud Sync: AD admin credentials (here Enterprise Admins) for the agent install, Hybrid Identity Administrator for the cloud configuration.",
      refs: [
        ["Microsoft Learn: Prerequisites for Microsoft Entra Cloud Sync", "https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/how-to-prerequisites"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q445", source: 445, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that has published sensitivity labels shown in the following exhibit.",
      { image: "q445-sensitivity-labels.png", alt: "Sensitivity labels page of the Microsoft Purview portal, with six labels listed by priority. Label1, priority 0 - lowest, is a top-level label with no sublabels. Label2, priority 1, is a parent label shown with an expand arrow; indented under it are its sublabels Label3 (priority 2) and Label4 (priority 3). Label5, priority 4, is a parent label shown with an expand arrow; indented under it is its sublabel Label6 (priority 5 - highest). The scope of every label is Files & other data assets (for Label6 the text continues, truncated). Label1 to Label4 were created by MOD Administrator, Label5 and Label6 by Microsoft Corporation, all on Jan 18, 2025." },
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
        "Sensitivity labels can be grouped: a parent label with sublabels works as a heading for its group. Users cannot apply a parent label that has sublabels; in the apps they open the parent and choose one of its sublabels, and the settings of that sublabel are what protect the content.",
        "In the exhibit, **Label2** is the parent of Label3 and Label4, and **Label5** is the parent of Label6, so Label2 and Label5 cannot be applied themselves. **Label1** has no sublabels and is applied directly, like Label3, Label4 and Label6. Users can therefore apply Label1, Label3, Label4 and Label6."
      ],
      wrong: [
        ["A", "This lists the two parent labels, which users cannot apply, and leaves out every sublabel, which are the labels users actually select."],
        ["B", "This leaves out Label1. A top-level label without sublabels is applied directly, so users can choose it."],
        ["D", "Label2 and Label5 have sublabels, so they are only headings for their groups and cannot be applied to content."]
      ],
      concept: "A sensitivity label that has sublabels groups them and cannot be applied itself; users apply its sublabels or labels without sublabels.",
      takeaway: "Parent label with sublabels: not selectable for content. Count standalone labels plus all sublabels.",
      refs: [
        ["Microsoft Learn: Learn about sensitivity labels", "https://learn.microsoft.com/purview/sensitivity-labels"],
        ["Microsoft Learn: Create and configure sensitivity labels and their policies", "https://learn.microsoft.com/purview/create-sensitivity-labels"]
      ]
    }
  },
  {
    id: "Q446", source: 446, type: "dropdown",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [
        ["Device1", "Windows 11"],
        ["Device2", "Android"],
        ["Device3", "iOS"]
      ] } },
      "All the devices are onboarded to Microsoft Defender for Endpoint.",
      "You plan to use Microsoft Defender Vulnerability Management to meet the following requirements:",
      { list: ["Detect operating system vulnerabilities.", "Perform a configuration assessment of the operating system."] },
      "Which devices support each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Detect operating system vulnerabilities:", options: ["Device1 only", "Device1 and Device2 only", "Device1 and Device3 only", "Device1, Device2, and Device3"] },
      { id: "f2", label: "Perform a configuration assessment of the operating system:", options: ["Device1 only", "Device1 and Device2 only", "Device1 and Device3 only", "Device1, Device2, and Device3"] }
    ],
    answer: { f1: 3, f2: 0 },
    explanation: {
      correct: [
        "Defender Vulnerability Management publishes a table of the capabilities it supports for each platform. **Operating system vulnerability** assessment is supported on Windows, macOS and Linux and also on Android and iOS devices onboarded to Defender for Endpoint, so all three devices are covered: **Device1, Device2, and Device3**.",
        "**Operating system configuration assessment**, the check of OS settings against security recommendations, is supported on desktop and server platforms such as Windows but not on Android or iOS. Of the three devices only the Windows 11 device qualifies: **Device1 only**."
      ],
      wrong: [
        ["Detect operating system vulnerabilities: Device1 only, Device1 and Device2 only, or Device1 and Device3 only", "Both mobile platforms are supported for OS vulnerability assessment once the devices are onboarded to Defender for Endpoint, so neither Device2 nor Device3 should be left out."],
        ["Perform a configuration assessment: any choice with Device2 or Device3", "OS configuration assessment is not supported on Android or iOS. Only the Windows 11 device is assessed."]
      ],
      concept: "Defender Vulnerability Management capabilities vary by platform: Android and iOS get operating system vulnerability assessment but not operating system configuration assessment.",
      takeaway: "Mobile devices in Defender Vulnerability Management: OS vulnerabilities yes, OS configuration assessment no.",
      refs: [
        ["Microsoft Learn: Supported operating systems, platforms and capabilities", "https://learn.microsoft.com/defender-vulnerability-management/tvm-supported-os"],
        ["Microsoft Learn: Microsoft Defender Vulnerability Management", "https://learn.microsoft.com/defender-vulnerability-management/defender-vulnerability-management"]
      ]
    }
  },
  {
    id: "Q447", source: 447, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "Your on-premises network contains an Active Directory Domain Services (AD DS) domain.",
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement Microsoft Entra Connect Sync and use Microsoft Entra ID Protection.",
      "You need to configure Microsoft Entra Connect Sync to ensure that Microsoft Entra ID Protection can detect leaked credentials.",
      "What should you select?"
    ],
    options: [
      { key: "A", text: "Password writeback" },
      { key: "B", text: "Password Hash Synchronization" },
      { key: "C", text: "Configure Hybrid Microsoft Entra join" },
      { key: "D", text: "Pass-through authentication" },
      { key: "E", text: "Enable single sign-on" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The leaked credentials detection works by comparison. Microsoft collects username and password pairs that have been published, for example on the dark web or paste sites, hashes them and compares them with the password hashes of the users in Microsoft Entra ID. When one matches, ID Protection flags the user as at risk.",
        "For hybrid users, Entra ID only holds a password hash if **password hash synchronization** is enabled in Microsoft Entra Connect. Without it there is nothing to compare, which is why Microsoft documents password hash synchronization as a requirement for detecting leaked credentials of synchronized users."
      ],
      wrong: [
        ["A", "Password writeback writes password changes and resets made in the cloud back to Active Directory. It sends no password hashes to Entra ID."],
        ["C", "Hybrid Microsoft Entra join registers domain-joined devices in Entra ID. It concerns device identity, not password data."],
        ["D", "With pass-through authentication, passwords are validated by on-premises agents and no hash is stored in Entra ID, so ID Protection has nothing to compare leaked credentials with."],
        ["E", "Seamless single sign-on signs users in with Kerberos tickets from their domain-joined devices. It provides no password data to ID Protection."]
      ],
      concept: "ID Protection's leaked credentials detection compares leaked passwords with the password hashes stored in Entra ID, which exist for hybrid users only with password hash synchronization.",
      takeaway: "Leaked credentials detection for synced users needs password hash synchronization.",
      refs: [
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"],
        ["Microsoft Learn: What is password hash synchronization?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"]
      ]
    }
  },
  {
    id: "Q448", source: 448, type: "dropdown",
    domain: "tenant", topic: "Exchange Online and mail flow", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "You need to perform the following actions:",
      { list: ["Create a shared mailbox named Mbox1 in the subscription.", "Grant User1 the Send As permission for Mbox1."] },
      "Which Microsoft 365 portals can you use to perform each task? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Create Mbox1:", options: ["Exchange admin center only", "Microsoft 365 admin center only", "Exchange admin center and Microsoft 365 admin center only", "Exchange admin center and Microsoft Entra admin center only", "Microsoft 365 admin center and Microsoft Entra admin center only", "Exchange admin center, Microsoft 365 admin center, and Microsoft Entra admin center"] },
      { id: "f2", label: "Grant User1 the Send As permission:", options: ["Exchange admin center only", "Microsoft 365 admin center only", "Exchange admin center and Microsoft 365 admin center only", "Exchange admin center and Microsoft Entra admin center only", "Microsoft 365 admin center and Microsoft Entra admin center only", "Exchange admin center, Microsoft 365 admin center, and Microsoft Entra admin center"] }
    ],
    answer: { f1: 2, f2: 2 },
    explanation: {
      correct: [
        "A shared mailbox is an Exchange Online recipient. It can be created in the **Exchange admin center** (Recipients > Mailboxes > Add a shared mailbox) and in the **Microsoft 365 admin center** (Teams & groups > Shared mailboxes), which creates the same mailbox in Exchange Online.",
        "Send As is a mailbox permission, and both portals manage it. In the Exchange admin center you open Mbox1 and edit its delegation (Read and manage, Send as, Send on behalf). In the Microsoft 365 admin center the mailbox permissions of a user or shared mailbox can be edited as well, including Send as. The Microsoft Entra admin center manages identities and has no mailbox settings, so the answer for both tasks is the Exchange admin center and the Microsoft 365 admin center only."
      ],
      wrong: [
        ["Exchange admin center only or Microsoft 365 admin center only", "Each of these leaves out a portal that can do the task: both portals create shared mailboxes and both can grant Send As."],
        ["Any choice that includes the Microsoft Entra admin center", "The Entra admin center shows the user object behind a mailbox, but it cannot create a mailbox or grant mailbox permissions such as Send As."]
      ],
      concept: "Shared mailboxes and their permissions (Full Access, Send As, Send on Behalf) are managed in both the Exchange admin center and the Microsoft 365 admin center.",
      takeaway: "Shared mailbox tasks: EAC or the Microsoft 365 admin center, never the Entra admin center.",
      refs: [
        ["Microsoft Learn: Create a shared mailbox", "https://learn.microsoft.com/microsoft-365/admin/email/create-a-shared-mailbox"],
        ["Microsoft Learn: Manage permissions for recipients in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients"]
      ]
    }
  }
);
