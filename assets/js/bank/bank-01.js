/* MS-102 question bank, part 1: questions 1 to 16 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q001", source: 1, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    caseId: "fabrikam", caseOrder: 1,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "host (A)" },
      { key: "B", text: "host information (HINFO)" },
      { key: "C", text: "text (TXT)" },
      { key: "D", text: "pointer (PTR)" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Project1 moves 100 sales mailboxes to Microsoft 365, and the users must keep exchanging email with their current addresses. Those addresses are in fabrikam.com, so the domain has to be added to the Microsoft 365 tenant first, and Microsoft 365 only accepts a domain after you prove that you own it.",
        "The proof is a DNS record with a value that Microsoft 365 generates for your tenant, normally a TXT record of the form `MS=msXXXXXXXX`. It has no effect on mail flow or name resolution; Microsoft 365 only looks it up to verify the domain. Because the public zone for fabrikam.com is managed by an external DNS server, the TXT record is created at that DNS host, not on the internal domain controllers."
      ],
      wrong: [
        ["A", "An A record maps a host name to an IPv4 address. Microsoft 365 does not use it to verify ownership of a domain."],
        ["B", "An HINFO record describes the hardware and operating system of a host. Microsoft 365 never asks for one."],
        ["D", "A PTR record is used for reverse lookups from an IP address to a name and lives in a reverse lookup zone. It plays no part in adding a domain to Microsoft 365."]
      ],
      concept: "Adding a custom domain to Microsoft 365 starts with domain verification, which is done with a TXT record (or, as an alternative, an MX record) created at the public DNS host.",
      takeaway: "Verify a domain in Microsoft 365: add the `MS=ms...` TXT record at the registrar or public DNS host.",
      refs: [
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Add DNS records to connect your domain", "https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider"]
      ]
    }
  },
  {
    id: "Q002", source: 2, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "fabrikam", caseOrder: 2,
    stem: [
      "You need to ensure that all the sales department users can authenticate successfully during Project1 and Project2.",
      "Which authentication strategy should you implement for the pilot projects?"
    ],
    options: [
      { key: "A", text: "pass-through authentication" },
      { key: "B", text: "pass-through authentication and seamless SSO" },
      { key: "C", text: "password hash synchronization and seamless SSO" },
      { key: "D", text: "password hash synchronization" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Two requirements decide the answer. First, users must be able to authenticate to cloud services if Active Directory becomes unavailable. With password hash synchronization, Azure AD Connect copies a hash of each password hash to Azure AD (Microsoft Entra ID), and Entra ID validates the password itself, so cloud sign-in keeps working when the on-premises domain controllers cannot be reached.",
        "Second, after the migration all users must be signed in to on-premises and cloud-based applications automatically. Seamless single sign-on does this: users who are signed in to a domain-joined device on the corporate network are signed in to cloud apps without typing their password again. Seamless SSO works together with password hash synchronization or pass-through authentication, and Fabrikam does not plan to implement federation, so AD FS is not an option anyway."
      ],
      wrong: [
        ["A", "With pass-through authentication, Entra ID hands each password check to agents that validate it against the on-premises Active Directory. If Active Directory is unavailable, cloud sign-in fails, and this option also provides no automatic sign-in."],
        ["B", "Seamless SSO covers the automatic sign-in, but pass-through authentication still depends on the on-premises domain controllers, which breaks the requirement for cloud sign-in while Active Directory is down."],
        ["D", "Password hash synchronization alone meets the availability requirement, but it adds no automatic sign-in. Seamless SSO is the feature that signs users in from their domain-joined devices without a password prompt."]
      ],
      concept: "Password hash synchronization moves password validation to the cloud, which removes the dependency on on-premises AD, and Seamless SSO adds silent sign-in from corporate devices on top of it.",
      takeaway: "Cloud sign-in must survive an AD outage: password hash synchronization. Users must be signed in automatically: add Seamless SSO.",
      logic: "The AD outage requirement removes both pass-through options. Between the two password hash options, only the one with Seamless SSO meets the automatic sign-in requirement.",
      refs: [
        ["Microsoft Learn: Choose the right authentication method for your hybrid identity solution", "https://learn.microsoft.com/entra/identity/hybrid/connect/choose-ad-authn"],
        ["Microsoft Learn: Microsoft Entra seamless single sign-on", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso"]
      ]
    }
  },
  {
    id: "Q003", source: 3, type: "single",
    domain: "compliance", topic: "Compliance roles and Compliance Manager", difficulty: "Intermediate",
    caseId: "fabrikam", caseOrder: 3,
    stem: [
      "Which role should you assign to User1?"
    ],
    options: [
      { key: "A", text: "Hygiene Management" },
      { key: "B", text: "Security Reader" },
      { key: "C", text: "Security Administrator" },
      { key: "D", text: "Records Management" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The requirement is that User1 must be able to view all DLP reports from the Microsoft Purview compliance portal, and the security requirements add that the principle of least privilege must be used. User1 therefore needs read access to the reports and nothing that lets them change policies.",
        "Security Reader is a read-only role. It gives access to security and compliance information, including the data loss prevention reports and alerts, without the right to create or edit DLP policies or any other settings. That makes it the smallest role among the options that still lets User1 see the reports."
      ],
      wrong: [
        ["A", "Hygiene Management is a role for configuring anti-spam and anti-malware protection in Exchange Online. It has nothing to do with DLP reports."],
        ["C", "Security Administrator can view the reports too, but it also allows security settings and policies to be changed. That is more than User1 needs and breaks the principle of least privilege."],
        ["D", "Records Management is for retention labels, file plans and disposition. It does not cover DLP reports."]
      ],
      concept: "Reading reports calls for a reader role; administrator roles add the right to change configuration, which least privilege rules out.",
      takeaway: "View DLP reports with least privilege: Security Reader, not Security Administrator.",
      refs: [
        ["Microsoft Learn: Permissions in the Microsoft Purview portal", "https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q004", source: 4, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "fabrikam", caseOrder: 4,
    stem: [
      "You create the Microsoft 365 tenant.",
      "You implement Azure AD Connect as shown in the following exhibit.",
      { image: "q004-azure-ad-connect.png", alt: "Azure Active Directory admin center, Azure AD Connect page. Sync status: Sync Status Enabled, Last Sync less than 1 hour ago, Password Hash Sync Enabled. User sign-in: Federation Disabled (0 domains), Seamless single sign-on Disabled (0 domains), Pass-through authentication Disabled (0 agents)." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "During Project1, sales department users can access [answer choice] applications by using SSO.", options: ["both on-premises and cloud-based", "only cloud-based", "only on-premises"] },
      { id: "f2", label: "If Active Directory becomes unavailable during Project1, sales department users can access the resources [answer choice].", options: ["both on-premises and in the cloud", "in the cloud only", "on-premises only"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "The exhibit shows that synchronization and Password Hash Sync are enabled, while Federation, Seamless single sign-on and Pass-through authentication are all disabled. Users sign in to the cloud with their synchronized password, validated by Azure AD itself.",
        "Statement 1 is **only on-premises**. The users sign in to their domain-joined devices with their Active Directory account, and on-premises applications that use Windows authentication accept that sign-in without another prompt. Single sign-on to cloud applications would need Seamless SSO (or federation), and Seamless SSO is Disabled with 0 domains.",
        "Statement 2 is **in the cloud only**. Because password hashes are synchronized, Azure AD can authenticate the sales users on its own, so their Exchange Online mailboxes and other cloud resources stay available. On-premises applications rely on the domain controllers to authenticate users, so they cannot be reached while Active Directory is unavailable."
      ],
      wrong: [
        ["Statement 1 — both on-premises and cloud-based", "SSO to cloud apps from the corporate network needs Seamless SSO or federation, and both are disabled in the exhibit."],
        ["Statement 1 — only cloud-based", "With Seamless SSO disabled there is no SSO to the cloud apps, while the on-premises apps already use the domain sign-in."],
        ["Statement 2 — both on-premises and in the cloud", "On-premises resources authenticate against Active Directory, which is unavailable in this statement."],
        ["Statement 2 — on-premises only", "This is the reverse of what happens: on-premises authentication is what fails, and cloud sign-in keeps working thanks to password hash sync."]
      ],
      concept: "The Azure AD Connect page shows which sign-in method is in use: password hash sync keeps cloud sign-in independent of on-premises AD, and Seamless SSO is what gives silent sign-in to cloud apps.",
      takeaway: "Read the exhibit row by row: Password Hash Sync Enabled means cloud sign-in survives an AD outage; Seamless SSO Disabled means no SSO to the cloud.",
      refs: [
        ["Microsoft Learn: What is password hash synchronization with Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"],
        ["Microsoft Learn: Microsoft Entra seamless single sign-on", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso"]
      ]
    }
  },
  {
    id: "Q005", source: 5, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "Your company has a Microsoft 365 subscription.",
      "You need to identify all the users in the subscription who are licensed for Office 365 through a group membership. The solution must include the name of the group used to assign the license.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Active users in the Microsoft 365 admin center" },
      { key: "B", text: "Reports in Microsoft Purview compliance portal" },
      { key: "C", text: "the Licenses blade in the Microsoft Entra admin center" },
      { key: "D", text: "Reports in the Microsoft 365 admin center" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Group-based licensing is a feature of Microsoft Entra ID, and the Licenses blade of the Microsoft Entra admin center is where its results are shown. When you open a product, such as Office 365 E3, the list of licensed users shows for each user whether the license was assigned directly or inherited from a group, and for an inherited license it names the group.",
        "That gives both parts of the requirement in one place: the users who are licensed through a group membership, and the group that assigns the license."
      ],
      wrong: [
        ["A", "The Active users list shows which licenses each user has, but it is not the view that lists the users who get a product through a group together with the name of that group."],
        ["B", "The reports in the Microsoft Purview compliance portal cover compliance features such as DLP and labels, not license assignment."],
        ["D", "The reports in the Microsoft 365 admin center are usage and activity reports. They do not show how a license was assigned."]
      ],
      concept: "Microsoft Entra ID records the assignment path of every license, direct or inherited from a group, and shows it on the Licenses blade.",
      takeaway: "Who gets a license through which group: Microsoft Entra admin center, Licenses, select the product, licensed users.",
      refs: [
        ["Microsoft Learn: What is group-based licensing in Microsoft Entra ID?", "https://learn.microsoft.com/entra/fundamentals/concept-group-based-licensing"],
        ["Microsoft Learn: Assign licenses to a group", "https://learn.microsoft.com/entra/identity/users/licensing-groups-assign"]
      ]
    }
  },
  {
    id: "Q006", source: 6, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Type", "Department"], rows: [
        ["User1", "Guest", "IT support"],
        ["User2", "Guest", "SupportCore"],
        ["User3", "Member", "IT support"]
      ] } },
      "You need to configure a dynamic user group that will include the guest users in any department that contains the word Support.",
      "How should you complete the membership rule? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `(user.userType {{f1}} ) and (user.department {{f2}}`,
    fields: [
      { id: "f1", label: "Condition on user.userType", options: ['-eq "Guest"', '-in "Guest"', '-ne "Guest"', '-notmatch "Member"'] },
      { id: "f2", label: "Condition on user.department", options: ['-contains "Support"', '-in "Support"', '-match "Support"', '-startsWith "Sup"'] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "The rule has two conditions joined by `and`. The first one keeps only guests: `user.userType -eq \"Guest\"` is true for User1 and User2 and false for User3, who is a Member.",
        "The second one has to match a department that contains the word Support anywhere in it. `-contains` tests for a substring, and string comparisons in dynamic membership rules are not case sensitive, so `user.department -contains \"Support\"` matches both \"IT support\" (User1) and \"SupportCore\" (User2). The finished rule `(user.userType -eq \"Guest\") and (user.department -contains \"Support\")` therefore adds User1 and User2 to the group and leaves User3 out."
      ],
      wrong: [
        ['userType -ne "Guest"', "This selects everyone who is not a guest, which is the opposite of the requirement."],
        ['userType -in "Guest"', "`-in` checks a value against a list of values written as an array, such as `[\"Guest\",\"Member\"]`. A single value is tested with `-eq`."],
        ['userType -notmatch "Member"', "This regular expression test describes the guests only indirectly, as users whose type is not Member. The rule should state the condition directly with `-eq \"Guest\"`."],
        ['department -in "Support"', "`-in` tests for equality with one of the listed values. It does not search inside the department name, so neither \"IT support\" nor \"SupportCore\" would match."],
        ['department -match "Support"', "`-match` evaluates a regular expression. The operator meant for \"contains this text\" is `-contains`, which is the reference answer."],
        ['department -startsWith "Sup"', "This matches SupportCore but misses \"IT support\", which starts with IT."]
      ],
      concept: "Dynamic membership rules combine property conditions with operators such as `-eq`, `-contains`, `-startsWith`, `-in` and `-match`, and their string comparisons ignore case.",
      takeaway: "Guests: `user.userType -eq \"Guest\"`. A word anywhere in a value: `-contains`.",
      refs: [["Microsoft Learn: Dynamic membership rules for groups in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/users/groups-dynamic-membership"]]
    }
  },
  {
    id: "Q007", source: 7, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "Your company uses a legacy on-premises LDAP directory that contains 100 users.",
      "The company purchases a Microsoft 365 subscription.",
      "You need to import the 100 users into Microsoft 365 by using the Microsoft 365 admin center.",
      "Which type of file should you use and which properties are required? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "File type to use:", options: ["CSV", "JSON", "PST", "XML"] },
      { id: "f2", label: "Required properties for each user:", options: ["Display Name and Department", "First Name and Last Name", "User Name and Department", "User Name and Display Name"] }
    ],
    answer: { f1: 0, f2: 3 },
    explanation: {
      correct: [
        "In the Microsoft 365 admin center, **Active users > Add multiple users** creates accounts in bulk from a CSV file. You can download a blank CSV template or one with sample data, fill in one row per user, and upload it. Most directories, including a legacy LDAP directory, can export to CSV.",
        "Only two columns are required in that file: **User Name**, which becomes the sign-in name (user principal name), and **Display Name**. The other columns, such as First Name, Last Name, Job Title and Department, are optional."
      ],
      wrong: [
        ["JSON or XML", "The bulk add wizard in the Microsoft 365 admin center accepts a CSV file only."],
        ["PST", "A PST file is an Outlook data file that holds mailbox content. It is used to import email, not user accounts."],
        ["First Name and Last Name", "Both are optional columns. An account can be created without them, but not without a user name and a display name."],
        ["Display Name and Department or User Name and Department", "Department is optional, and each of these pairs leaves out one of the two required properties."]
      ],
      concept: "Bulk creation of users in the Microsoft 365 admin center uses a CSV template in which only User Name and Display Name are mandatory.",
      takeaway: "Add multiple users: a CSV file, with User Name and Display Name required.",
      refs: [
        ["Microsoft Learn: Add several users at the same time to Microsoft 365", "https://learn.microsoft.com/microsoft-365/enterprise/add-several-users-at-the-same-time"],
        ["Microsoft Learn training: Perform bulk user maintenance", "https://learn.microsoft.com/training/modules/manage-accounts-licenses-microsoft-365/7-perform-bulk-user-maintenance"]
      ]
    }
  },
  {
    id: "Q008", source: 8, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Department"], rows: [
        ["User1", "Human resources"],
        ["User2", "Research"],
        ["User3", "Human resources"],
        ["User4", "Marketing"]
      ] } },
      "You need to configure group-based licensing to meet the following requirements:",
      "To all users, deploy an Office 365 E3 license without the Power Automate license option.",
      "To all users, deploy an Enterprise Mobility + Security E5 license.",
      "To the users in the research department only, deploy a Power BI Pro license.",
      "To the users in the marketing department only, deploy a Visio Plan 2 license.",
      "What is the minimum number of deployment groups required?"
    ],
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
      { key: "E", text: "5" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "One group can carry several license assignments, and for each product you can turn off individual service plans. So a single group that contains all four users can assign both Office 365 E3, with the Power Automate service plan turned off, and Enterprise Mobility + Security E5.",
        "The two department licenses cannot go to that group, because everyone would get them. Power BI Pro is only for the research department (User2) and Visio Plan 2 only for the marketing department (User4), and since the two departments need different products they need a group each. That makes three groups: all users, research and marketing. User1 and User3 in Human resources are covered by the all-users group alone."
      ],
      wrong: [
        ["A", "With a single group every user would receive Power BI Pro and Visio Plan 2, which breaks the department-only requirements."],
        ["B", "Two groups cannot work: the department licenses are different for research and marketing, so each needs its own group besides the group for the licenses that everyone gets."],
        ["D", "Four groups would only be needed if each product had to be assigned through its own group, but one group can assign Office 365 E3 and EMS E5 together."],
        ["E", "Five groups is one group per product plus one, which is more than the minimum."]
      ],
      concept: "In group-based licensing a group can assign several products, each with its own disabled service plans, and users receive the combined licenses of all their groups.",
      takeaway: "Count distinct sets of users, not products: everyone, research and marketing gives three groups.",
      refs: [
        ["Microsoft Learn: What is group-based licensing in Microsoft Entra ID?", "https://learn.microsoft.com/entra/fundamentals/concept-group-based-licensing"],
        ["Microsoft Learn: Assign licenses to a group", "https://learn.microsoft.com/entra/identity/users/licensing-groups-assign"]
      ]
    }
  },
  {
    id: "Q009", source: 9, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You view the Service health Overview as shown in the following exhibit.",
      { image: "q009-service-health-overview.png", alt: "Service health page of the Microsoft 365 admin center, Overview tab, October 18, 2022 4:20 PM. Active issues: Microsoft service health (6) and Issues in your environment that require action (0). Microsoft service health list: Exchange Online 3 advisories, Microsoft 365 suite 2 advisories, Microsoft Teams 1 advisory, OneDrive for Business 1 advisory, SharePoint Online 2 advisories." },
      "You need to ensure that a user named User1 can view the advisories to investigate service health issues.",
      "Which role should you assign to User1?"
    ],
    options: [
      { key: "A", text: "Message Center Reader" },
      { key: "B", text: "Reports Reader" },
      { key: "C", text: "Service Support Administrator" },
      { key: "D", text: "Compliance Administrator" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The advisories in the exhibit are on the Service health page of the Microsoft 365 admin center. The Service Support Administrator role is meant for people who follow up on service problems: it lets them open and manage service requests with Microsoft, view and share message center posts, and monitor service health. With it, User1 can open the Service health page and read the advisories for Exchange Online, SharePoint Online and the other services.",
        "It is often given as an additional role to admins or users who need these tasks next to their usual role."
      ],
      wrong: [
        ["A", "Message Center Reader is for the posts in the Message center, which announce planned changes and new features. The role is not meant for investigating issues on the Service health page."],
        ["B", "Reports Reader can view usage reports and the adoption data in the admin center. Service health is not part of it."],
        ["D", "Compliance Administrator manages compliance features in Microsoft Purview, such as DLP and retention. It does not cover service health."]
      ],
      concept: "Service health and support requests in the Microsoft 365 admin center belong to the Service Support Administrator role.",
      takeaway: "Monitor service health and open support tickets: Service Support Administrator.",
      refs: [["Microsoft Learn: About admin roles in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/add-users/about-admin-roles#commonly-used-microsoft-365-admin-center-roles"]]
    }
  },
  {
    id: "Q010", source: 10, type: "yesno",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of"], rows: [
        ["Admin1", "Group1"],
        ["Admin2", "Group2"],
        ["Admin3", "Group1, Group2"]
      ] } },
      "You add the following assignment for the User Administrator role:",
      { list: [
        "Scope type: Directory",
        "Selected members: Group1",
        "Assignment type: Active",
        "Assignment starts: Mar 15, 2023",
        "Assignment ends: Aug 15, 2023"
      ] },
      "You add the following assignment for the Exchange Administrator role:",
      { list: [
        "Scope type: Directory",
        "Selected members: Group2",
        "Assignment type: Eligible",
        "Assignment starts: Jun 15, 2023",
        "Assignment ends: Oct 15, 2023"
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "On July 15, 2023, Admin1 can reset the password of a user." },
      { text: "On June 20, 2023, Admin2 can manage Microsoft Exchange Online." },
      { text: "On May 1, 2023, Admin3 can reset the password of a user." }
    ],
    answer: [true, true, true],
    explanation: {
      correct: [
        "In Privileged Identity Management, an **active** assignment gives the role for the whole assignment period without any further step. An **eligible** assignment lets the members activate the role themselves, on demand, at any time during the period; once activated, they hold the role for the activation duration. Members of a group receive the role assignments of that group.",
        "Statement 1 is Yes. Admin1 is in Group1, which has an active User Administrator assignment from Mar 15 to Aug 15, 2023. July 15 falls inside that period, and User Administrator can reset user passwords.",
        "Statement 2 is Yes. Admin2 is in Group2, which is eligible for Exchange Administrator from Jun 15 to Oct 15, 2023. On June 20 Admin2 can activate the role in PIM and then manage Exchange Online.",
        "Statement 3 is Yes. Admin3 is in Group1 as well as Group2. May 1 falls inside the active User Administrator assignment of Group1, so Admin3 can reset passwords; the Group2 eligibility has not started yet, but it is not needed."
      ],
      wrong: [
        ["Statement 1 — No", "The active assignment runs until Aug 15, 2023, so it is still in effect on July 15."],
        ["Statement 2 — No", "Eligible does not mean unavailable. During the eligibility period Admin2 can activate Exchange Administrator whenever it is needed, and June 20 is inside that period."],
        ["Statement 3 — No", "Admin3's membership of Group2 does not take anything away. The active User Administrator assignment through Group1 is enough on May 1."]
      ],
      concept: "PIM assignments are either active (the role is in effect for the period) or eligible (the role can be activated during the period), and each has a start and an end date.",
      takeaway: "Check three things per statement: is the user in the group, is the date inside the window, and is the assignment active or eligible (activate first).",
      refs: [
        ["Microsoft Learn: Assign Microsoft Entra roles in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-add-role-to-user"],
        ["Microsoft Learn: Use Microsoft Entra groups to manage role assignments", "https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept"]
      ]
    }
  },
  {
    id: "Q011", source: 11, type: "single",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You have an Azure AD tenant that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Security Administrator"],
        ["User2", "Global Administrator"],
        ["User3", "Service Support Administrator"]
      ] } },
      "You configure Tenant properties as shown in the following exhibit.",
      { image: "q011-tenant-properties.png", alt: "Tenant properties: Technical contact is User1@contoso.com, Global privacy contact is empty, Privacy statement URL is http://contoso.com/privacy." },
      "Which users will be contacted by Microsoft if the tenant experiences a data breach?"
    ],
    options: [
      { key: "A", text: "User1 only" },
      { key: "B", text: "User2 only" },
      { key: "C", text: "User3 only" },
      { key: "D", text: "User1 and User2 only" },
      { key: "E", text: "User2 and User3 only" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The tenant properties have a **Global privacy contact** field. The person entered there receives inquiries about personal data privacy, and is also who Microsoft contacts if there is a data breach related to Azure AD services. If no one is listed, Microsoft contacts the Global Administrators of the tenant instead.",
        "In the exhibit the Global privacy contact is empty, so Microsoft contacts the Global Administrators. Of the three users only User2 holds that role."
      ],
      wrong: [
        ["A", "User1 is the Technical contact, the person for technical support within the organization. That field is not used for breach notifications, and the Security Administrator role does not change that."],
        ["C", "Service Support Administrator is for service requests and service health. It does not make User3 a contact for data breaches."],
        ["D", "User1 is only the Technical contact. With the privacy contact empty, the notification goes to the Global Administrators, which is User2 alone."],
        ["E", "User3 is not a Global Administrator and is not listed in the tenant properties."]
      ],
      concept: "Microsoft sends data breach notifications to the Global privacy contact in the tenant properties, and to the Global Administrators when that field is empty.",
      takeaway: "Empty Global privacy contact: Microsoft contacts the Global Administrators.",
      refs: [["Microsoft Learn: Add your organization's privacy info", "https://learn.microsoft.com/azure/active-directory/fundamentals/properties-area"]]
    }
  },
  {
    id: "Q012", source: 12, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory forest named contoso.local.",
      "You purchase a Microsoft 365 subscription.",
      "You plan to move to Microsoft 365 and to implement a hybrid deployment solution for the next 12 months.",
      "You need to prepare for the planned move to Microsoft 365.",
      "What is the best action to perform before you implement directory synchronization? More than one answer choice may achieve the goal. Select the BEST answer."
    ],
    options: [
      { key: "A", text: "Purchase a third-party X.509 certificate." },
      { key: "B", text: "Create an external forest trust." },
      { key: "C", text: "Rename the Active Directory forest." },
      { key: "D", text: "Purchase a custom domain name." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The forest is named contoso.local, and .local is not a routable internet domain. Nobody can own it, so it cannot be verified in Microsoft 365, and users synchronized with a UPN ending in @contoso.local would get a sign-in name on the tenant's onmicrosoft.com domain instead.",
        "The fix that Microsoft recommends is to get a routable domain name that you own, add and verify it in Microsoft 365, add it as an alternative UPN suffix in Active Directory, and change the users' UPNs to it before you synchronize. Purchasing the custom domain name is the first step of that, which is why it is the best action before directory synchronization."
      ],
      wrong: [
        ["A", "A third-party certificate is needed for services such as AD FS or a hybrid Exchange deployment, not for directory synchronization itself."],
        ["B", "Forest trusts connect Active Directory forests to each other. Microsoft 365 and directory synchronization do not use them."],
        ["C", "Renaming the forest to a routable name could also achieve the goal, but a domain rename is complex and risky. Adding a routable UPN suffix gives the same result with far less effort, so it is not the best answer."]
      ],
      concept: "Directory synchronization needs users with a UPN in a routable domain that is verified in Microsoft 365; a non-routable forest such as contoso.local gets an alternative UPN suffix.",
      takeaway: "Forest ends in .local: buy and verify a real domain, add it as a UPN suffix, then sync.",
      refs: [
        ["Microsoft Learn: Prepare a non-routable domain for directory synchronization", "https://learn.microsoft.com/microsoft-365/enterprise/prepare-a-non-routable-domain-for-directory-synchronization"],
        ["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"]
      ]
    }
  },
  {
    id: "Q013", source: 13, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You configure a new Azure AD enterprise application named App1. App1 requires that a user be assigned the Reports Reader role.",
      "Which type of group should you use to assign the Reports Reader role and to access App1?"
    ],
    options: [
      { key: "A", text: "a Microsoft 365 group that has assigned membership" },
      { key: "B", text: "a Microsoft 365 group that has dynamic user membership" },
      { key: "C", text: "a security group that has assigned membership" },
      { key: "D", text: "a security group that has dynamic user membership" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "To assign an Azure AD (Microsoft Entra) role such as Reports Reader to a group, the group must be created as role-assignable, and a role-assignable group must have assigned membership. Dynamic membership is not allowed, because a rule could otherwise add people to a privileged group without anyone approving it. That rules out both dynamic options.",
        "A security group is the group type built for granting access: it can be assigned to the enterprise application App1 and, created as role-assignable, can hold the Reports Reader role. Nothing in the scenario needs the shared mailbox, calendar or SharePoint site that a Microsoft 365 group brings, so a security group with assigned membership is the reference answer."
      ],
      wrong: [
        ["A", "A Microsoft 365 group is a collaboration group that comes with a mailbox, a calendar and a SharePoint site. The requirement is only to grant a role and access to an app, which is what a security group is for."],
        ["B", "Dynamic membership is not supported for role-assignable groups, so this group could not receive the Reports Reader role."],
        ["D", "A dynamic security group could be used to give access to App1, but it cannot be role-assignable, so it cannot receive the Reports Reader role."]
      ],
      concept: "Microsoft Entra roles can be assigned to groups only when the group is role-assignable, which requires assigned (not dynamic) membership.",
      takeaway: "Group that holds an admin role: role-assignable, assigned membership, typically a security group.",
      refs: [
        ["Microsoft Learn: Use Microsoft Entra groups to manage role assignments", "https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept"],
        ["Microsoft Learn: Assign users and groups to an application", "https://learn.microsoft.com/entra/identity/enterprise-apps/assign-user-or-group-access-portal"]
      ]
    }
  },
  {
    id: "Q014", source: 14, type: "single",
    domain: "compliance", topic: "Audit, search and eDiscovery", difficulty: "Basic",
    stem: [
      "You have a new Microsoft 365 E5 tenant.",
      "You need to enable an alert policy that will be triggered when an elevation of Microsoft Exchange Online administrative privileges is detected.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Enable auditing." },
      { key: "B", text: "Enable Microsoft 365 usage analytics." },
      { key: "C", text: "Create an Insider risk management policy." },
      { key: "D", text: "Create a communication compliance policy." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Alert policies watch the activities that are recorded in the unified audit log and raise an alert when an activity matches the conditions of a policy. There is even a default policy for this case, **Elevation of Exchange admin privilege**. If auditing is not turned on, the activity is never recorded, and no alert policy can fire on it.",
        "So the first step is to make sure that auditing (audit log search) is turned on. In current enterprise tenants it is on by default, but the order is the point of the question: recording comes before alerting."
      ],
      wrong: [
        ["B", "Microsoft 365 usage analytics is a Power BI view of usage and adoption data. It does not record administrative activities or trigger alerts."],
        ["C", "Insider risk management looks for risky user behavior, such as data theft by departing employees. It is not what drives an alert policy on admin role changes."],
        ["D", "Communication compliance reviews messages for policy violations, such as offensive language. It has nothing to do with administrative privileges."]
      ],
      concept: "Activity alerts in Microsoft 365 are built on the unified audit log, so auditing must be on before alert policies can detect anything.",
      takeaway: "Any activity-based alert depends on the audit log: turn auditing on first.",
      refs: [
        ["Microsoft Learn: Alert policies in Microsoft 365", "https://learn.microsoft.com/purview/alert-policies"],
        ["Microsoft Learn: Turn auditing on or off", "https://learn.microsoft.com/purview/audit-log-enable-disable"]
      ]
    }
  },
  {
    id: "Q015", source: 15, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain named contoso.com. The domain contains 1,000 Windows 10 devices.",
      "You perform a proof of concept (PoC) deployment of Microsoft Defender for Endpoint for 10 test devices. During the onboarding process, you configure Microsoft Defender for Endpoint-related data to be stored in the United States.",
      "You plan to onboard all the devices to Microsoft Defender for Endpoint.",
      "You need to store the Microsoft Defender for Endpoint data in Europe.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Delete the workspace." },
      { key: "B", text: "Create a workspace." },
      { key: "C", text: "Onboard a new device." },
      { key: "D", text: "Offboard the test devices." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The data storage location of Microsoft Defender for Endpoint is chosen during the first-time setup and cannot be changed afterwards. The PoC chose the United States, so the only way to store the data in Europe is to remove the current deployment and set it up again with Europe as the location.",
        "The first step of that is to offboard the 10 test devices, so that they stop sending data to the deployment in the United States. Only after that is the old workspace removed and a new one created in Europe, to which the 1,000 devices are then onboarded."
      ],
      wrong: [
        ["A", "Removing the existing workspace is part of the process, but it comes after the test devices have been offboarded."],
        ["B", "A new workspace in Europe is created only after the current deployment has been cleared; it is not the first step."],
        ["C", "A device onboarded now would still report to the deployment whose data is stored in the United States."]
      ],
      concept: "The Defender for Endpoint data location is fixed at first-time setup; changing it means offboarding devices and setting up the service again.",
      takeaway: "Wrong data location after a PoC: offboard the test devices first, then set up again in the right region.",
      refs: [
        ["Microsoft Learn: Microsoft Defender for Endpoint data storage and privacy", "https://learn.microsoft.com/microsoft-365/security/defender-endpoint/data-storage-privacy"],
        ["Microsoft Learn: Offboard devices from Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/offboard-machines"]
      ]
    }
  },
  {
    id: "Q016", source: 16, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a user named User1.",
      "User1 exceeds the default daily limit of allowed email messages and is on the Restricted entities list.",
      "You need to remove User1 from the Restricted entities list.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "the Exchange admin center" },
      { key: "B", text: "the Microsoft Purview compliance portal" },
      { key: "C", text: "the Microsoft 365 admin center" },
      { key: "D", text: "the Microsoft 365 Defender portal" },
      { key: "E", text: "the Microsoft Entra admin center" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "When a user exceeds the sending limits of the outbound spam policy, Exchange Online Protection blocks the user from sending mail and adds the account to the **Restricted entities** page. That page is in the Microsoft 365 Defender portal (now the Microsoft Defender portal) at security.microsoft.com, under **Email & collaboration > Review > Restricted entities**, or directly at security.microsoft.com/restrictedentities.",
        "There you select User1 and choose to unblock the user. Before you do, it is worth checking why the limit was exceeded, for example a compromised account, so that the user is not blocked again."
      ],
      wrong: [
        ["A", "The Exchange admin center manages mailboxes and mail flow, but the Restricted entities list is managed in the Defender portal."],
        ["B", "The Microsoft Purview compliance portal handles compliance features such as DLP, retention and eDiscovery, not users blocked by outbound spam protection."],
        ["C", "The Microsoft 365 admin center manages users and licenses. It does not show the Restricted entities list."],
        ["E", "The Microsoft Entra admin center manages identities and sign-in. User1 can still sign in; the block is on sending email, which is enforced by Exchange Online Protection."]
      ],
      concept: "Users who exceed outbound sending limits are blocked by Exchange Online Protection and listed on the Restricted entities page of the Microsoft Defender portal, where an admin can unblock them.",
      takeaway: "Unblock a restricted sender: Defender portal, Email & collaboration > Review > Restricted entities.",
      refs: [["Microsoft Learn: Remove blocked users from the Restricted entities page", "https://learn.microsoft.com/microsoft-365/security/office-365-security/removing-user-from-restricted-users-portal-after-spam"]]
    }
  }
);
