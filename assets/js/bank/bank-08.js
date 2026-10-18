/* MS-102 question bank, part 8: questions 113 to 128 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q113", source: 113, type: "dropdown",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Intermediate",
    stem: [
      "Your network contains an on-premises Active Directory domain named contoso.com.",
      "Your company purchases Microsoft 365 subscription and establishes a hybrid deployment of Azure AD by using password hash synchronization. Password writeback is disabled in Azure AD Connect.",
      "You create a new user named User10 on-premises and a new user named User20 in Azure AD.",
      "You need to identify where an administrator can reset the password of each new user.",
      "What should you identify? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User10:", options: ["Azure AD only", "On-premises Active Directory only", "On-premises Active Directory or Azure AD"] },
      { id: "f2", label: "User20:", options: ["Azure AD only", "On-premises Active Directory only", "On-premises Active Directory or Azure AD"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "With password hash synchronization, Azure AD Connect copies a hash of the on-premises password to Azure AD (Microsoft Entra ID), and the on-premises Active Directory stays the source of authority for every synchronized user. A password changed in the cloud can reach the on-premises account only through password writeback. Writeback is disabled here, so the password of User10, an on-premises user that is synchronized to Azure AD, can be reset only in the on-premises Active Directory, for example in Active Directory Users and Computers. The new password then reaches Azure AD with the next password hash synchronization.",
        "User20 was created in Azure AD and exists only in the cloud. Azure AD Connect synchronizes accounts from Active Directory to Azure AD, not the other way round, so User20 has no on-premises account and its password is reset in Azure AD only, from the Microsoft Entra admin center or the Microsoft 365 admin center."
      ],
      wrong: [
        ["User10 — Azure AD only", "Azure AD is not the source of authority for a synchronized user. Without password writeback, a password set in the cloud could never reach the on-premises account, so the reset has to happen on-premises."],
        ["User10 — On-premises Active Directory or Azure AD", "The Azure AD half of this choice would need password writeback, which is disabled."],
        ["User20 — On-premises Active Directory only, or either directory", "User20 has no on-premises account. Cloud-only users are not synchronized back to Active Directory."]
      ],
      concept: "A password is managed in the directory that is the source of authority for the account; password writeback is what lets a reset made in the cloud reach an on-premises account.",
      takeaway: "Synchronized user without password writeback: reset on-premises. Cloud-only user: reset in Azure AD (Microsoft Entra ID).",
      refs: [
        ["Microsoft Learn: What is password hash synchronization with Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"],
        ["Microsoft Learn: How does self-service password reset writeback work in Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  },
  {
    id: "Q114", source: 114, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Advanced",
    stem: [
      "You have an Azure AD tenant that contains the groups shown in the following exhibit.",
      { table: {
        head: ["Name", "Group type", "Membership type", "Source", "Security enabled"],
        rows: [
          ["Group1", "Microsoft 365", "Assigned", "Cloud", "Yes"],
          ["Group2", "Microsoft 365", "Assigned", "Cloud", "No"],
          ["Group3", "Security", "Assigned", "Cloud", "Yes"],
          ["Group4", "Security", "Dynamic", "Cloud", "Yes"],
          ["Group5", "Security", "Assigned", "Windows Server AD", "Yes"]
        ]
      } },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "You can add an Azure AD cloud user to [answer choice].", options: ["Group1 only", "Group1 and Group3 only", "Group1, Group2, and Group3 only", "Group1, Group3, and Group4 only", "Group1, Group2, Group3, Group4, and Group5"] },
      { id: "f2", label: "You can add Group5 to [answer choice].", options: ["Group1 only", "Group3 only", "Group1, and Group3 only", "Group1, Group3, and Group4 only", "Group1, Group2, Group3, and Group4"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "A user can be added by hand only to a group whose membership type is **Assigned** and whose source is the cloud. Group1 and Group2 (Microsoft 365, Assigned, Cloud) and Group3 (Security, Assigned, Cloud) qualify. Security enabled = No on Group2 only means that the group cannot be used to grant access to resources; it does not stop you from adding members. Group4 is Dynamic: its members come from its membership rule and cannot be added manually. Group5 is synchronized from Windows Server AD, so its membership is managed in the on-premises directory and is read-only in Azure AD. The cloud user can therefore be added to Group1, Group2 and Group3 only.",
        "For Group5 as a member of another group: Microsoft 365 groups cannot contain other groups, which rules out Group1 and Group2, and the dynamic Group4 takes no manually added members. Group3, a cloud security group with assigned membership, can contain another security group, including one synchronized from on-premises. The nesting is recorded in Group3's membership, which is managed in the cloud, while Group5's own members stay managed on-premises. So Group5 can be added to Group3 only."
      ],
      wrong: [
        ["Group1 and Group3 only (first statement)", "This leaves out Group2. Group2 is a cloud Microsoft 365 group with assigned membership; not being security enabled does not affect adding users to it."],
        ["Group1, Group3, and Group4 only", "Group4 has dynamic membership, so users join and leave it only through its rule."],
        ["Group1, Group2, Group3, Group4, and Group5", "Neither the dynamic Group4 nor the synchronized Group5 accepts members added in Azure AD."],
        ["Any choice with Group1 or Group2 (second statement)", "Group1 and Group2 are Microsoft 365 groups, and Microsoft 365 groups do not accept other groups as members."],
        ["Group1, Group3, and Group4 only (second statement)", "Besides the Microsoft 365 group, it includes the dynamic Group4, whose members only come from its rule."]
      ],
      concept: "Membership type and source decide where a group's members are managed: assigned cloud groups in Azure AD, dynamic groups by their rule, synchronized groups on-premises; and only security groups can contain other groups.",
      takeaway: "Adding members by hand needs Assigned and Cloud. Nesting a group needs a cloud security group as the parent, never a Microsoft 365 group.",
      refs: [
        ["Microsoft Learn: Learn about groups and access rights in Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/concept-learn-about-groups"],
        ["Microsoft Learn: Manage Microsoft Entra groups and group membership", "https://learn.microsoft.com/entra/fundamentals/how-to-manage-groups"]
      ]
    }
  },
  {
    id: "Q115", source: 115, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that is linked to an Azure AD tenant named contoso.com.",
      "You purchase 100 Microsoft 365 Business Voice add-on licenses.",
      "You need to ensure that the members of a group named Voice are assigned a Microsoft 365 Business Voice add-on license automatically.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the Licenses page of the Microsoft 365 admin center, assign the licenses." },
      { key: "B", text: "From the Microsoft Entra admin center, modify the settings of the Voice group." },
      { key: "C", text: "From the Microsoft 365 admin center, modify the settings of the Voice group." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The reference answer is B. Giving a license to a group instead of to individual users is group-based licensing, which Microsoft Entra ID (formerly Azure AD) processes. The question treats it as a setting of the group itself in the Microsoft Entra admin center (the group's **Licenses** page, where you add an assignment for Microsoft 365 Business Voice). Once a group has a license assignment, Microsoft Entra ID assigns a license to every member, gives one to each user who joins the group later and removes it from users who leave, which is the automatic assignment the question asks for.",
        "Microsoft now documents group license assignment on the **Licenses** page of the Microsoft 365 admin center (Billing > Licenses > Assign licenses, then search for the group). In every case the 100 purchased licenses have to cover the members of Voice; a member who cannot get one is listed with a license assignment error."
      ],
      wrong: [
        ["A", "On the Licenses page you choose a product and assign it to the users, or groups, that you name in the Assign licenses panel. For this question the reference answer is the license setting of the Voice group in the Microsoft Entra admin center."],
        ["C", "The group pages of the Microsoft 365 admin center (Teams & groups > Active teams & groups) manage a group's name, owners, members and email options. License assignments are not made from the group's own settings there."]
      ],
      concept: "Group-based licensing assigns a product to a group, so that members receive and lose the license automatically as the membership changes.",
      takeaway: "Members of a group must get a license automatically: group-based licensing, a license assignment on the group rather than on each user.",
      refs: [
        ["Microsoft Learn: Assign or unassign licenses to a group in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses"],
        ["Microsoft Learn: Assign or unassign licenses for users in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"]
      ]
    }
  },
  {
    id: "Q116", source: 116, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Endpoint security.",
      "You need to create a group and assign the Endpoint Security Manager role to the group.",
      "Which type of group can you use?"
    ],
    options: [
      { key: "A", text: "Microsoft 365 only" },
      { key: "B", text: "security only" },
      { key: "C", text: "mail-enabled security and security only" },
      { key: "D", text: "mail-enabled security, Microsoft 365, and security only" },
      { key: "E", text: "distribution, mail-enabled security, Microsoft 365, and security" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Endpoint Security Manager is a built-in Intune role, the one for the Endpoint security area of the Intune admin center. It manages security and compliance features such as security baselines, device compliance, Conditional Access and Microsoft Defender for Endpoint.",
        "Intune roles are assigned to groups of users. The members of a role assignment are the groups chosen on its Admin Groups page, and every user in those Microsoft Entra security groups gets the permissions of the role. The group to create for this assignment is therefore a security group."
      ],
      wrong: [
        ["A", "A Microsoft 365 group is a collaboration group with a shared mailbox, calendar and SharePoint site. Intune role assignments are made to security groups."],
        ["C", "A mail-enabled security group is an Exchange Online object: it is created and managed in Exchange, not in the Intune or Microsoft Entra admin center. It is not the group you create for an Intune role assignment."],
        ["D", "It adds Microsoft 365 groups and mail-enabled security groups, neither of which is the security group that Intune role assignments use."],
        ["E", "It also includes distribution groups, which are not security enabled at all and only deliver email, so they can never carry permissions."]
      ],
      concept: "Intune RBAC grants the permissions of a role to the users in the Microsoft Entra security groups listed as the members of a role assignment.",
      takeaway: "Intune role assignment (Endpoint Security Manager, Help Desk Operator ...): the members are security groups.",
      refs: [
        ["Microsoft Learn: Role-based access control (RBAC) with Microsoft Intune", "https://learn.microsoft.com/intune/intune-service/fundamentals/role-based-access-control"],
        ["Microsoft Learn: Compare groups", "https://learn.microsoft.com/microsoft-365/admin/create-groups/compare-groups"]
      ]
    }
  },
  {
    id: "Q117", source: 117, type: "yesno",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: {
        head: ["Name", "Department", "Job title"],
        rows: [
          ["User1", "IT engineering", "Technician"],
          ["User2", "Engineering", "Senior executive"],
          ["User3", "Finance", "Manager"]
        ]
      } },
      "You create a new administrative unit named AU1 and configure the following AU1 dynamic membership rule.",
      { code: `(user.department -eq "Engineering") and (user.jobTitle -notContains "Executive")` },
      "The subscription contains the role assignments shown in the following table.",
      { table: {
        head: ["Name", "Role"],
        rows: [
          ["Admin1", "AU1\\User Administrator"],
          ["Admin2", "Global Administrator"]
        ]
      } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Admin1 can reset the password of User1." },
      { text: "Admin1 can reset the password of User2." },
      { text: "Admin2 can reset the password of User3." }
    ],
    answer: [false, false, true],
    explanation: {
      correct: [
        "AU1 contains only the users who meet both conditions of the rule, because they are joined by `and`. `-eq` compares the whole value: \"IT engineering\" is not \"Engineering\", so User1 fails the first condition and is not in AU1. User2's department matches, but string operations in membership rules are not case sensitive, so \"Senior executive\" contains \"Executive\" and `-notContains \"Executive\"` is false; User2 is not in AU1 either. User3 works in Finance and is not in AU1.",
        "Statements 1 and 2 are No. Admin1 holds User Administrator scoped to AU1, so the role applies only to the users who are members of AU1, and neither User1 nor User2 is a member. Statement 3 is Yes. Admin2 is a Global Administrator, a role that applies to the whole tenant, so Admin2 can reset the password of User3, who holds no admin role."
      ],
      wrong: [
        ["Statement 1 — Yes", "`-eq` is not a partial match. \"IT engineering\" would match `-contains \"Engineering\"`, not `-eq \"Engineering\"`."],
        ["Statement 2 — Yes", "This assumes `-notContains` is case sensitive. Membership rules ignore case, so \"executive\" matches \"Executive\" and User2 is excluded from AU1."],
        ["Statement 3 — No", "A Global Administrator is not limited by administrative units; a tenant-wide role covers every user."]
      ],
      concept: "A role assigned with an administrative unit scope applies only to the members of that unit, and the members of a dynamic unit are the objects its rule matches.",
      takeaway: "`-eq` matches the whole value, `-contains` a part of it, and both ignore case. An AU-scoped admin manages only the AU's members.",
      refs: [
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"],
        ["Microsoft Learn: Dynamic membership rules for groups in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/users/groups-dynamic-membership"]
      ]
    }
  },
  {
    id: "Q118", source: 118, type: "single",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to be notified to your personal email address when a Microsoft Exchange Online service issue occurs.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the Exchange admin center, create a contact." },
      { key: "B", text: "From the Microsoft Outlook client, configure an Inbox rule." },
      { key: "C", text: "From the Microsoft 365 admin center, update the technical contact details." },
      { key: "D", text: "From the Microsoft 365 admin center, customize the Service health settings." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The Service health page of the Microsoft 365 admin center can send email about new incidents and changes to active ones. Under **Customize > Email** you select **Send me email notifications about service health**, enter up to two email addresses, such as your personal address, choose whether to be told about incidents, advisories or both, and pick the services, here Exchange Online. The preference is kept for each admin account."
      ],
      wrong: [
        ["A", "A mail contact is an address book entry that points to an external address. It does not subscribe anyone to service health notifications."],
        ["B", "An Inbox rule can only act on messages that already arrive in a mailbox. Nothing sends service health messages to the mailbox until notifications are set up in Service health."],
        ["C", "The technical contact in the organization information is a single organization-wide contact for technical notices from Microsoft. It does not let you choose a service such as Exchange Online or your own address for notifications, which the Service health email settings do."]
      ],
      concept: "Service health email notifications are set per admin under Service health > Customize > Email, with up to two addresses and a choice of services and issue types.",
      takeaway: "To be mailed about a service's incidents: Service health > Customize > Email.",
      refs: [["Microsoft Learn: How to check Microsoft 365 service health", "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"]]
    }
  },
  {
    id: "Q119", source: 119, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "Your company has an Azure AD tenant that contains the users shown in the following table.",
      { table: {
        head: ["Name", "Role"],
        rows: [
          ["User1", "Privileged Role Administrator"],
          ["User2", "User Administrator"],
          ["User3", "Security Administrator"],
          ["User4", "Billing Administrator"]
        ]
      } },
      "The tenant includes a security group named Admin1. Admin1 will be used to manage administrative accounts.",
      "External collaboration settings have default configuration.",
      "You need to identify which users can perform the following administrative tasks:",
      { list: ["Create guest user accounts.", "Add User3 to Admin1."] },
      "Which users should you identify for each task? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Create guest user accounts:", options: ["User2 only", "User3 only", "User4 only", "User2 and User3 only", "User1, User2, and User3 only", "User1, User2, User3, and User4"] },
      { id: "f2", label: "Add User3 to Admin1:", options: ["User2 only", "User3 only", "User4 only", "User2 and User3 only", "User1, User2, and User3 only", "User1, User2, User3, and User4"] }
    ],
    answer: { f1: 5, f2: 0 },
    explanation: {
      correct: [
        "With the default external collaboration settings, guest invitations are open to anyone in the organization, including guests and users without an admin role, which is the most inclusive option. Inviting a guest creates the guest user account, so User1, User2, User3 and User4 can all create guest accounts, whatever their roles.",
        "Adding a member to a security group is group management. User Administrator can manage all aspects of users and groups, including the membership of security groups, so User2 can add User3 to Admin1. Privileged Role Administrator manages role assignments, Privileged Identity Management and role-assignable groups, not the membership of ordinary security groups; Security Administrator manages security features and policies; Billing Administrator manages purchases and subscriptions. So the second task is User2 only."
      ],
      wrong: [
        ["Create guest user accounts — any choice that leaves users out", "Limiting invitations to admins or to the Guest Inviter role is a setting you would have to change. By default every member user can invite guests."],
        ["Add User3 to Admin1 — User2 and User3 only", "Security Administrator has no permission to change group membership, and being the user who is added does not give User3 that right."],
        ["Add User3 to Admin1 — User1, User2, and User3 only", "Privileged Role Administrator covers role assignments and role-assignable groups, and Security Administrator covers security settings. Neither manages an ordinary security group."]
      ],
      concept: "Guest invitations are governed by the external collaboration settings, which by default let anyone invite, while group membership needs a role that manages groups, such as User Administrator.",
      takeaway: "Default guest invite setting: everyone can invite. Changing the members of a security group: User Administrator (or Groups Administrator).",
      refs: [
        ["Microsoft Learn: Configure external collaboration settings", "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q120", source: 120, type: "single",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "All users are assigned Microsoft 365 Apps for enterprise licenses.",
      "You need to ensure that reports display the names of users that have activated Microsoft 365 apps and on how many devices.",
      "What should you modify in the Microsoft 365 admin center?"
    ],
    options: [
      { key: "A", text: "the Reports reader role" },
      { key: "B", text: "Organization information" },
      { key: "C", text: "Org settings for Privacy profile" },
      { key: "D", text: "Org settings for Reports" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "By default, the usage reports of the Microsoft 365 admin center conceal user, group and site names and show anonymous identifiers instead. The setting is in **Settings > Org settings > Services > Reports**: clear **Display concealed user, group, and site names in all reports**, and the reports, including the Microsoft 365 Apps activations report, show which users activated the apps and on how many devices."
      ],
      wrong: [
        ["A", "Reports Reader lets someone view the usage reports. It does not decide whether names are concealed in them."],
        ["B", "Organization information holds the organization's name, address and contacts. It has nothing to do with the contents of reports."],
        ["C", "The Privacy profile sets the link to your privacy statement and the privacy contact shown to users. The concealment of names in reports is a separate setting under Reports."]
      ],
      concept: "Concealing identifiable names in Microsoft 365 usage reports is an organization-wide setting in Org settings > Reports.",
      takeaway: "Reports show anonymous IDs instead of names: clear \"Display concealed user, group, and site names in all reports\".",
      refs: [["Microsoft Learn: Microsoft 365 reports in the admin center", "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"]]
    }
  },
  {
    id: "Q121", source: 121, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to configure the Org settings to meet the following requirements:",
      { list: ["Sign users out of Microsoft Office 365 web apps after one hour of inactivity.", "Integrate an internal support tool with Office."] },
      "Which settings should you configure for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Sign users out after one hour of inactivity:", options: ["Organization profile", "Security & privacy", "Services"] },
      { id: "f2", label: "Integrate the internal support tool with Office:", options: ["Organization profile", "Security & privacy", "Services"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "Org settings in the Microsoft 365 admin center has three tabs: Services, Security & privacy, and Organization profile. **Security & privacy** holds **Idle session timeout**, which signs users out of Microsoft 365 web apps after a period of inactivity that you choose, such as one hour.",
        "**Organization profile** holds the settings that adapt Microsoft 365 to your organization, such as **Help desk information**, which puts your own help desk's contact details and support website in the Microsoft 365 Help pane, together with custom themes and custom tiles for apps. Integrating an internal support tool with Office is configured there."
      ],
      wrong: [
        ["Services", "The Services tab configures individual services and features, such as Reports, Microsoft Forms or Bookings. It has neither the idle session timeout nor the help desk settings."],
        ["Sign out after inactivity — Organization profile", "Organization profile customizes how Microsoft 365 looks and where users find help. A session timeout is a security control."],
        ["Integrate the support tool — Security & privacy", "Security & privacy covers controls such as password expiration, idle session timeout, the privacy profile and sharing."]
      ],
      concept: "Org settings separates service settings (Services), security controls (Security & privacy) and customization of Microsoft 365 for the organization (Organization profile).",
      takeaway: "Idle session timeout: Security & privacy. Help desk information, themes and custom tiles: Organization profile.",
      refs: [
        ["Microsoft Learn: Idle session timeout for Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/manage/idle-session-timeout-web-apps"],
        ["Microsoft Learn: Customize the theme for your organization", "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"]
      ]
    }
  },
  {
    id: "Q122", source: 122, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You add a domain named contoso.com.",
      "When you attempt to verify the domain, you are prompted to send a verification email to [email protected].",
      "You need to change the email address used to verify the domain.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Add a TXT record to the DNS zone of the domain." },
      { key: "B", text: "From the domain registrar, modify the contact information of the domain." },
      { key: "C", text: "From the Microsoft 365 admin center, change the global administrator of the Microsoft 365 subscription." },
      { key: "D", text: "Modify the NS records for the domain." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Ownership of a domain can be proven with a DNS record, such as a TXT record in the zone, or, where it is offered, with a verification email. The address that a verification email goes to is not chosen in Microsoft 365: it is the contact address recorded for the domain at its registrar, here an address in the contoso.com domain. To have the email sent to a different address, you change the contact information of the domain at the registrar."
      ],
      wrong: [
        ["A", "A TXT record is a different way to prove ownership. It can replace the email method, but it does not change the address that the verification email is sent to."],
        ["C", "The global administrator of the subscription plays no part in the domain's registration record, which is what decides where the email goes."],
        ["D", "NS records delegate the domain's DNS zone to a set of name servers. They do not change the domain's contact information."]
      ],
      concept: "Email-based domain verification relies on the contact information held by the domain registrar, while DNS-based verification relies on a record in the domain's zone.",
      takeaway: "Wrong address for the domain verification email: update the domain's contact at the registrar, or verify with a TXT record instead.",
      refs: [
        ["Microsoft Learn: Add a custom domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"],
        ["Microsoft Learn: Add DNS records to connect your domain", "https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider"]
      ]
    }
  },
  {
    id: "Q123", source: 123, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "Your company uses Microsoft Defender for Endpoint. Microsoft Defender for Endpoint contains the device groups shown in the following table.",
      { table: {
        head: ["Rank", "Device group", "Member"],
        rows: [
          ["1", "Group1", "Name starts with Comp"],
          ["2", "Group2", "Name starts with Comp And OS in Windows 10"],
          ["3", "Group3", "OS in Windows Server 2016"],
          ["Last", "Ungrouped devices (default)", "Not applicable"]
        ]
      } },
      "You onboard computers to Microsoft Defender for Endpoint as shown in the following table.",
      { table: {
        head: ["Name", "Operating system"],
        rows: [
          ["Computer1", "Windows 10"],
          ["Computer2", "Windows Server 2016"]
        ]
      } },
      "Of which groups are Computer1 and Computer2 members? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Computer1:", options: ["Group1 only", "Group2 only", "Group1 and Group2", "Ungrouped devices"] },
      { id: "f2", label: "Computer2:", options: ["Group1 only", "Group3 only", "Group1 and Group3"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "Defender for Endpoint puts every device in exactly one device group. The groups are evaluated in order of rank, and when a device matches more than one group it is added only to the highest ranked one.",
        "Computer1 (Windows 10) matches Group1 (name starts with Comp) and Group2 (name starts with Comp and Windows 10). Group1 has rank 1, so Computer1 is in Group1 only. Computer2 (Windows Server 2016) matches Group1 and Group3 (Windows Server 2016); Group1 again ranks higher, so Computer2 is in Group1 only."
      ],
      wrong: [
        ["Computer1 — Group2 only", "Computer1 does match Group2, but Group1 is ranked above Group2 and takes the device."],
        ["Group1 and Group2, or Group1 and Group3", "A device is never a member of two device groups at the same time."],
        ["Computer1 — Ungrouped devices", "Ungrouped devices (default) only receives devices that match none of the other groups."],
        ["Computer2 — Group3 only", "Group3 matches Computer2's operating system, but Group1 has a higher rank."]
      ],
      concept: "Device group membership in Defender for Endpoint is exclusive and decided by the rank of the matching groups.",
      takeaway: "A device that matches several device groups lands in the highest ranked one only; change the ranks to change that.",
      refs: [["Microsoft Learn: Create and manage device groups", "https://learn.microsoft.com/defender-endpoint/machine-groups"]]
    }
  },
  {
    id: "Q124", source: 124, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: {
        head: ["Name", "Role"],
        rows: [
          ["Admin1", "Global Administrator"],
          ["Admin2", "Security Administrator"],
          ["Admin3", "Security Operator"],
          ["Admin4", "Security Reader"],
          ["Admin5", "Application Administrator"]
        ]
      } },
      "You are implementing Microsoft Defender for Endpoint.",
      "You need to enable role-based access control (RBAC) to restrict access to the Microsoft 365 Defender portal.",
      "Which users can enable RBAC, and which users will no longer have access to the Microsoft 365 Defender portal after RBAC is enabled? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Users that can enable RBAC:", options: ["Admin1 only", "Admin1 and Admin2 only", "Admin1, Admin2, and Admin5 only", "Admin1, Admin2, Admin3, and Admin5 only"] },
      { id: "f2", label: "Users that will no longer have access to the Microsoft 365 Defender portal:", options: ["Admin5 only", "Admin3 and Admin4 only", "Admin4 and Admin5 only", "Admin3, Admin4, and Admin5 only"] }
    ],
    answer: { f1: 1, f2: 1 },
    explanation: {
      correct: [
        "Before RBAC is turned on, access to Defender for Endpoint comes directly from Microsoft Entra roles: Security Administrators and Global Administrators get full access, and read-only roles such as Security Reader get read-only access. Only users with Global Administrator or Security Administrator rights can turn on RBAC and then create and assign Defender for Endpoint roles, so Admin1 and Admin2 can enable it.",
        "When RBAC is turned on, users with administrator permissions are automatically given the built-in Defender for Endpoint Global Administrator role, so Admin1 and Admin2 keep full access. Users who had access through other security roles, such as the read-only access of Security Reader, lose it until they are assigned to a Defender for Endpoint role. That is Admin3 (Security Operator) and Admin4 (Security Reader). Admin5, an Application Administrator, had no access to Defender for Endpoint data in the first place, so it has nothing to lose."
      ],
      wrong: [
        ["Enable RBAC — Admin1 only", "Security Administrator rights are enough to turn on RBAC, so Admin2 can do it too."],
        ["Enable RBAC — a choice with Admin3 or Admin5", "Security Operator and Application Administrator cannot turn on RBAC or create and assign Defender for Endpoint roles."],
        ["No longer have access — a choice with Admin5", "Application Administrator never gave Admin5 access to Defender for Endpoint, so enabling RBAC changes nothing for it."]
      ],
      concept: "Turning on Defender for Endpoint RBAC keeps Global and Security Administrators as full administrators and removes the access of other roles until they are assigned a Defender for Endpoint role.",
      takeaway: "Enable RBAC: Global Administrator or Security Administrator. After it is on, Security Reader and other non-admin roles lose access until assigned a role.",
      refs: [["Microsoft Learn: Use role-based access control to grant fine-grained access to Microsoft Defender portal", "https://learn.microsoft.com/defender-endpoint/rbac"]]
    }
  },
  {
    id: "Q125", source: 125, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "Your company has a Microsoft 365 E5 subscription.",
      "You onboard a device on the company's network to Microsoft Defender for Endpoint.",
      "In the Microsoft 365 Defender portal, you notice that the device inventory displays many devices that have an Onboarding status of Can be onboarded.",
      "You need to ensure that onboarded devices are prevented from polling the network for device discovery but can still discover devices with which they communicate directly.",
      "What should you configure in the Microsoft 365 Defender portal?"
    ],
    options: [
      { key: "A", text: "standard discovery" },
      { key: "B", text: "device discovery exclusions" },
      { key: "C", text: "basic discovery" },
      { key: "D", text: "a network assessment job" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Device discovery lets onboarded devices find unmanaged devices on the network, which then appear in the device inventory with the onboarding status Can be onboarded. It works in one of two modes. **Standard discovery**, the default and recommended mode, has onboarded devices actively probe the network with multicast queries and other discovery protocols. **Basic discovery** is passive: onboarded devices only collect events from the network traffic they see and extract device information from them, without initiating any traffic. Basic discovery therefore stops the polling while devices still discover the devices they communicate with."
      ],
      wrong: [
        ["A", "Standard discovery is the mode that actively probes the network, the opposite of what is required."],
        ["B", "Exclusions keep chosen IP addresses or subnets from being actively probed by standard discovery. They do not switch the onboarded devices to passive collection for the whole network."],
        ["D", "A network assessment job scans network devices such as switches, routers and firewalls from a designated device. It adds scanning instead of preventing it."]
      ],
      concept: "Device discovery runs in standard mode (active probing) or basic mode (passive collection from observed traffic).",
      takeaway: "No active polling, only passive discovery: set device discovery to basic.",
      refs: [
        ["Microsoft Learn: Device discovery overview", "https://learn.microsoft.com/defender-endpoint/device-discovery"],
        ["Microsoft Learn: Configure device discovery", "https://learn.microsoft.com/defender-endpoint/configure-device-discovery"]
      ]
    }
  },
  {
    id: "Q126", source: 126, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Intune and contains the devices shown in the following table.",
      { table: {
        head: ["Name", "Platform", "Intune"],
        rows: [
          ["Device1", "iOS", "Enrolled"],
          ["Device2", "macOS", "Not enrolled"]
        ]
      } },
      "You need to onboard Device1 and Device2 to Microsoft Defender for Endpoint.",
      "What should you use to onboard each device? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Device1:", options: ["A local script", "Group Policy", "Microsoft Intune", "An app from the Google Play store", "Integration with Microsoft Defender for Cloud"] },
      { id: "f2", label: "Device2:", options: ["A local script", "Group Policy", "Microsoft Intune", "An app from the Google Play store", "Integration with Microsoft Defender for Cloud"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "Defender for Endpoint on iOS is an app, and for an Intune-enrolled device it is deployed through Microsoft Intune: Intune assigns the Microsoft Defender app to the device, and the user signs in to the app to onboard it. Device1 is an iOS device enrolled in Intune, so you use Microsoft Intune.",
        "Device2 is a Mac that is not enrolled in Intune, so Intune cannot deliver anything to it. For manual deployment, the onboarding page of the Defender portal offers the deployment method **Local script (for up to 10 devices)** for macOS: you install the Defender for Endpoint package on the Mac and run the onboarding script that comes with the onboarding package."
      ],
      wrong: [
        ["Group Policy", "Group Policy applies only to domain-joined Windows devices."],
        ["An app from the Google Play store", "Google Play is the Android store. The iOS app comes from the App Store and is deployed through Intune."],
        ["Integration with Microsoft Defender for Cloud", "Defender for Cloud onboards servers protected by Defender for Servers, not iPhones or Macs."],
        ["Device1 — A local script", "iOS devices are onboarded through the Defender app, not with an onboarding script."],
        ["Device2 — Microsoft Intune", "Device2 is not enrolled in Intune, so Intune cannot deploy the package or the onboarding settings to it."]
      ],
      concept: "The onboarding method for Defender for Endpoint depends on the platform and on how the device is managed.",
      takeaway: "Intune-enrolled iOS: Intune. Unmanaged Mac, a few devices: local script.",
      refs: [
        ["Microsoft Learn: Deploy Microsoft Defender for Endpoint on iOS with Microsoft Intune", "https://learn.microsoft.com/defender-endpoint/ios-install"],
        ["Microsoft Learn: Manual deployment for Microsoft Defender for Endpoint on macOS", "https://learn.microsoft.com/defender-endpoint/mac-install-manually"]
      ]
    }
  },
  {
    id: "Q127", source: 127, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to create two groups named Group1 and Group2. The solution must meet the following requirements:",
      { list: [
        "Group1 must be mail-enabled and have an associated Microsoft SharePoint Online site.",
        "Group2 must support dynamic membership and role assignments but must NOT be mail-enabled."
      ] },
      "Which types of groups should you create? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Group1:", options: ["Distribution", "Dynamic distribution", "Microsoft 365", "Security"] },
      { id: "f2", label: "Group2:", options: ["Distribution", "Dynamic distribution", "Microsoft 365", "Security"] }
    ],
    answer: { f1: 2, f2: 3 },
    explanation: {
      correct: [
        "A Microsoft 365 group is mail-enabled and comes with shared collaboration resources: a group mailbox and calendar, and a SharePoint Online team site. Group1 is therefore a Microsoft 365 group.",
        "Group2 must not be mail-enabled, which rules out Microsoft 365 groups, distribution groups and dynamic distribution groups. A security group has no mailbox, can use dynamic membership rules in Microsoft Entra ID (with Microsoft Entra ID P1 licenses), and is the group type that services such as Azure RBAC and Intune use for role assignments. Group2 is a security group."
      ],
      wrong: [
        ["Distribution", "A distribution group is mail-enabled and only delivers email to its members. It has no SharePoint site and cannot be used for role assignments."],
        ["Dynamic distribution", "An Exchange Online group whose recipients come from a filter. It is mail-enabled, has no SharePoint site and is not a security principal, so it cannot receive role assignments."],
        ["Group2 — Microsoft 365", "Microsoft 365 groups can have dynamic membership, but they are always mail-enabled."],
        ["Group1 — Security", "A security group is not mail-enabled and has no SharePoint site."]
      ],
      concept: "Microsoft 365 groups are for collaboration with a mailbox and site; security groups grant access and roles without a mailbox; distribution groups only deliver email.",
      takeaway: "Mailbox and SharePoint site: Microsoft 365 group. Dynamic membership and roles without email: security group.",
      refs: [
        ["Microsoft Learn: Compare groups", "https://learn.microsoft.com/microsoft-365/admin/create-groups/compare-groups"],
        ["Microsoft Learn: Dynamic membership rules for groups in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/users/groups-dynamic-membership"]
      ]
    }
  },
  {
    id: "Q128", source: 128, type: "dragdrop",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to meet the following requirements:",
      { list: ["Report a Microsoft 365 service issue.", "Request help on how to add a new user to an Azure AD tenant."] },
      "What should you use in the Microsoft 365 admin center? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Features",
    sources: ["Message center", "New service request", "Product feedback", "Service health"],
    targets: [
      { id: "t1", label: "To report issues regarding a Microsoft 365 service:" },
      { id: "t2", label: "To request help on how to add a new user to the tenant:" }
    ],
    answer: { t1: 3, t2: 1 },
    explanation: {
      correct: [
        "**Service health** shows the health of each Microsoft 365 service and the incidents and advisories that Microsoft is working on. When a service gives you a problem that is not listed, you select **Report an issue** on the Service health page and complete a short form. Microsoft checks how widespread the issue is and, if it originates in the service, adds it as an incident or advisory that you can track; your reports are listed on the Reported issues tab.",
        "**New service request**, under Support, is where you ask for help with a question or problem, such as how to add a new user. You describe the issue, get suggested solutions and articles, and can contact Microsoft support from there."
      ],
      wrong: [
        ["Message center", "Message center publishes Microsoft's announcements about upcoming changes and new features. You read it; you cannot report an issue or ask for help there."],
        ["Product feedback", "Product feedback collects suggestions and opinions about Microsoft products. It is not a way to report a service incident or to get support."],
        ["Service health for the second requirement", "Service health is about the state of the services, not about how-to questions."]
      ],
      concept: "In the Microsoft 365 admin center, service incidents are reported and tracked in Service health, and help is requested through a new service request.",
      takeaway: "Service problem: Service health > Report an issue. How-to question: Support > New service request.",
      refs: [
        ["Microsoft Learn: How to check Microsoft 365 service health", "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"],
        ["Microsoft Learn: Get support for Microsoft 365 for business", "https://learn.microsoft.com/microsoft-365/admin/get-help-support"]
      ]
    }
  }
);
