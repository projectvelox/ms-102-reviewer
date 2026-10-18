/* MS-102 question bank, part 4: questions 49 to 64 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q049", source: 49, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-sync-errors", caseOrder: 2,
    stem: [
      "Solution: From Azure AD Connect, you modify the Azure AD credentials.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The scenario rules out a connection problem. Every other user account synchronized, and Azure AD Connect Health reports that all the synchronizations completed successfully. Azure AD Connect is therefore able to sign in to Azure AD (Microsoft Entra ID) and export objects with the credentials it already has.",
        "What the 10 accounts have in common is their organizational unit. When all the accounts of one OU are missing and no synchronization error is reported, the objects never entered the synchronization scope: the OU is excluded by the domain and OU filtering of Azure AD Connect. Changing the Azure AD credentials changes how Azure AD Connect authenticates to the tenant, not which objects it reads from Active Directory, so the 10 accounts stay unsynchronized. The answer is No."
      ],
      wrong: [
        ["A", "New credentials would only help if Azure AD Connect could not authenticate to Azure AD. In that case no account would synchronize and Connect Health would report export failures, which is not what the scenario describes."]
      ],
      concept: "Objects that are outside the synchronization scope of Azure AD Connect are skipped silently; they do not cause synchronization errors.",
      takeaway: "Accounts of one OU missing with no sync errors: check the OU filtering of Azure AD Connect, not its credentials.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Troubleshoot an object that is not synchronizing with Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/hybrid/connect/tshoot-connect-object-not-syncing"]
      ]
    }
  },
  {
    id: "Q050", source: 50, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-sync-errors", caseOrder: 3,
    stem: [
      "Solution: From the Synchronization Rules Editor, you create a new outbound synchronization rule.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "In the scenario only the 10 accounts of one OU are missing, and Azure AD Connect Health shows that every synchronization completed successfully. That pattern points to OU filtering: the OU is not selected in the synchronization scope, so Azure AD Connect never imports those accounts from Active Directory.",
        "An outbound synchronization rule describes how attributes flow from the metaverse to a connector space, for example to Azure AD. It can only act on objects that are already in the metaverse. Accounts in an OU that is excluded from the Active Directory connector are never imported, so they never reach the metaverse and no new outbound rule can export them. The fix is to add the OU to the synchronization scope in the Azure AD Connect filtering settings. The answer is No."
      ],
      wrong: [
        ["A", "A new outbound rule would change how objects that are already synchronized are exported. It does not bring the accounts of an excluded OU into synchronization."]
      ],
      concept: "OU filtering decides which objects Azure AD Connect imports at all; synchronization rules only process objects that are inside that scope.",
      takeaway: "Objects of an excluded OU never reach the metaverse, so no synchronization rule can fix them; change the OU filtering.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Troubleshoot an object that is not synchronizing with Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/hybrid/connect/tshoot-connect-object-not-syncing"]
      ]
    }
  },
  {
    id: "Q051", source: 51, type: "dropdown",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to review metrics for the following:",
      { list: ["The daily active users in Microsoft Teams", "Recent Microsoft service issues"] },
      "What should you use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Teams daily active users:", options: ["Microsoft Secure Score", "Adoption Score", "Service health", "Usage reports"] },
      { id: "f2", label: "Recent Microsoft service issues:", options: ["Microsoft Secure Score", "Adoption Score", "Service health", "Usage reports"] }
    ],
    answer: { f1: 3, f2: 2 },
    explanation: {
      correct: [
        "**Usage reports** in the Microsoft 365 admin center (Reports > Usage) show how people use each service. The Microsoft Teams usage reports show the number of active users per day over a chosen period and what they did, such as chat messages, calls and meetings.",
        "**Service health** (Health > Service health) lists the incidents and advisories that affect Microsoft 365 services, with their status and impact, and keeps a history of recent issues. That is where you review recent Microsoft service issues."
      ],
      wrong: [
        ["Microsoft Secure Score", "Secure Score measures the security posture of the tenant against recommended actions. It reports neither user activity nor service issues."],
        ["Adoption Score", "Adoption Score gives organization-level scores and insights about how people work and how well the technology performs. It is not the place for a daily count of active Teams users, and it does not list service incidents."],
        ["Usage reports for service issues", "Usage reports describe what users do. Incidents and advisories from Microsoft are shown only in Service health."]
      ],
      concept: "The Microsoft 365 admin center separates user activity (Usage reports) from the health of Microsoft's services (Service health).",
      takeaway: "Who uses Teams and how much: Usage reports. What is broken at Microsoft: Service health.",
      refs: [
        ["Microsoft Learn: Microsoft 365 reports in the admin center", "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"],
        ["Microsoft Learn: How to check Microsoft 365 service health", "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"]
      ]
    }
  },
  {
    id: "Q052", source: 52, type: "dragdrop",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two groups named Group1 and Group2.",
      "You need to ensure that each group can perform the tasks shown in the following table.",
      { table: { head: ["Group", "Task"], rows: [
        ["Group1", "Manage service requests.\nPurchase new services.\nManage subscriptions.\nMonitor service health."],
        ["Group2", "Assign licenses.\nAdd users and groups.\nCreate and manage user views.\nUpdate password expiration policies."]
      ] } },
      "The solution must use the principle of least privilege.",
      "Which role should you assign to each group? To answer, drag the appropriate roles to the correct groups. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Roles",
    sources: [
      "Billing Administrator",
      "Global Administrator",
      "Helpdesk Administrator",
      "License Administrator",
      "Service Support Administrator",
      "User Administrator"
    ],
    targets: [
      { id: "t1", label: "Group1:" },
      { id: "t2", label: "Group2:" }
    ],
    answer: { t1: 0, t2: 5 },
    explanation: {
      correct: [
        "The **Billing Administrator** role is meant for people who make purchases, manage subscriptions and service requests, and monitor service health. That is exactly the task list of Group1, and the role grants nothing beyond billing and these support tasks.",
        "The **User Administrator** role covers the task list of Group2: it adds users and groups, assigns licenses, manages most user properties, creates and manages user views, and updates password expiration policies. It also includes managing service requests and monitoring service health, but it has no access to billing."
      ],
      wrong: [
        ["Global Administrator", "Global Administrator can do every task in the table, but it grants full control of the tenant. That violates the principle of least privilege."],
        ["Helpdesk Administrator", "Helpdesk Administrator resets passwords for non-administrators, manages service requests and monitors service health. It cannot purchase services, manage subscriptions or add users."],
        ["License Administrator", "License Administrator assigns and removes licenses but cannot add users and groups, create user views or update password expiration policies."],
        ["Service Support Administrator", "Service Support Administrator opens and manages service requests and views service health. It cannot buy services or manage subscriptions, which Group1 also needs."]
      ],
      concept: "Microsoft 365 admin roles bundle the permissions for one job, and least privilege means choosing the narrowest role that still covers every required task.",
      takeaway: "Purchases and subscriptions: Billing Administrator. Users, groups, licenses and password expiration policy: User Administrator.",
      refs: [["Microsoft Learn: About admin roles in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/add-users/about-admin-roles"]]
    }
  },
  {
    id: "Q053", source: 53, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to add additional onmicrosoft.com domains to the subscription. The additional domains must be assignable as email addresses for users.",
      "What is the maximum number of onmicrosoft.com domains the subscription can contain?"
    ],
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "5" },
      { key: "D", text: "10" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Every tenant starts with one onmicrosoft.com domain, created at sign-up. From the Domains page of the Microsoft 365 admin center you can add further onmicrosoft.com domains, for example after a rebranding, and use them for user email addresses and as the fallback domain.",
        "Microsoft limits a Microsoft 365 environment to a total of five onmicrosoft.com domains, the original one included. Five is therefore the maximum the subscription can contain."
      ],
      wrong: [
        ["A", "One is the initial onmicrosoft.com domain of every tenant. Additional ones can be added."],
        ["B", "Two is below the limit; up to five onmicrosoft.com domains are allowed."],
        ["D", "Ten exceeds the limit of five onmicrosoft.com domains per environment."]
      ],
      concept: "Additional onmicrosoft.com domains can be added to a tenant, up to a total of five.",
      takeaway: "onmicrosoft.com domains per tenant: at most five.",
      refs: [["Microsoft Learn: Add or replace your onmicrosoft.com domain", "https://learn.microsoft.com/microsoft-365/admin/setup/add-or-replace-your-onmicrosoftcom-domain"]]
    }
  },
  {
    id: "Q054", source: 54, type: "yesno",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Advanced",
    stem: [
      "You have an Azure AD tenant that contains the administrative units shown in the following table.",
      { table: { head: ["Name", "Members"], rows: [
        ["AU1", "User1, User2"],
        ["AU2", "User3"]
      ] } },
      "You have the following users:",
      { list: [
        "A user named User1 that is assigned the Password Administrator for AU1 and AU2.",
        "A user named User2 that is assigned the User Administrator for AU1.",
        "A user named User3 that is assigned the User Administrator for the tenant."
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can reset the password of User3." },
      { text: "User2 can update the display name of User1." },
      { text: "User1 can reset the password of User2." }
    ],
    answer: [false, true, false],
    explanation: {
      correct: [
        "Two checks decide each statement: the target must be inside the scope of the administrator's role assignment (an administrative unit or the whole tenant), and the administrator's role must be allowed to act on the roles the target holds. Password Administrator can reset passwords only for non-administrators and a few low-privilege roles, such as other Password Administrators, Directory Readers and Guest Inviters. User Administrator is not on that list.",
        "**Statement 1 — No.** User3 is a member of AU2, which is within User1's scope, but User3 holds the User Administrator role. A Password Administrator cannot reset the password of a User Administrator.",
        "**Statement 2 — Yes.** User2 is User Administrator for AU1, and User1 is a member of AU1. A User Administrator manages the properties of the users in its scope, and the display name is an ordinary property. User1's Password Administrator role is among the roles a User Administrator may manage, so nothing blocks the change.",
        "**Statement 3 — No.** User2 is in AU1, within User1's scope, but User2 holds the User Administrator role, so User1 as Password Administrator cannot reset User2's password."
      ],
      wrong: [
        ["Statement 1 — Yes", "Being in the scope is not enough. The role of the target matters, and a User Administrator's password can't be reset by a Password Administrator."],
        ["Statement 2 — No", "User1 is in AU1, the scope of User2's role, and User Administrator can update the properties of users who hold the Password Administrator role."],
        ["Statement 3 — Yes", "User2 is in scope, but as a User Administrator it is more privileged than the roles whose passwords a Password Administrator may reset."]
      ],
      concept: "An administrative-unit-scoped role works only on members of that unit, and password resets are further limited by the roles the target user holds.",
      takeaway: "Password Administrator resets passwords of non-admins and other Password Administrators only, never of a User Administrator.",
      refs: [
        ["Microsoft Learn: Privileged roles and permissions in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/privileged-roles-permissions"],
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"]
      ]
    }
  },
  {
    id: "Q055", source: 55, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain named adatum.com that is synced to Azure AD.",
      "The domain contains 100 user accounts.",
      "The city attribute for all the users is set to the city where the user resides.",
      "You need to modify the value of the city attribute to the three-letter airport code of each city.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From Windows PowerShell on a domain controller, run the `Get-ADUser` and `Set-ADUser` cmdlets." },
      { key: "B", text: "From Azure Cloud Shell, run the `Get-ADUser` and `Set-ADUser` cmdlets." },
      { key: "C", text: "From Windows PowerShell on a domain controller, run the `Get-MgUser` and `Update-MgUser` cmdlets." },
      { key: "D", text: "From Azure Cloud Shell, run the `Get-MgUser` and `Update-MgUser` cmdlets." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The users are synchronized from adatum.com, so on-premises Active Directory is the source of authority for their attributes, including the city (`l` attribute). The change has to be made in Active Directory; Azure AD Connect then synchronizes the new values to Azure AD (Microsoft Entra ID).",
        "On a domain controller, the Active Directory module for Windows PowerShell is available. `Get-ADUser` retrieves the 100 accounts with their current city, and `Set-ADUser -City` writes the airport code, for example in a loop that maps each city name to its code."
      ],
      wrong: [
        ["B", "Azure Cloud Shell runs in Azure and has no connection to the on-premises domain controllers of adatum.com, so the Active Directory cmdlets cannot be used there to change the domain."],
        ["C", "`Get-MgUser` and `Update-MgUser` are Microsoft Graph cmdlets that work on Entra ID, not on Active Directory. For synchronized users, attributes that come from on-premises cannot be changed in the cloud, and any cloud value would not reach Active Directory."],
        ["D", "Same problem as C: Microsoft Graph changes Entra ID only, and the city of a synchronized user is mastered in Active Directory."]
      ],
      concept: "For synchronized users, attributes are changed in on-premises Active Directory, and Azure AD Connect carries the changes to Entra ID.",
      takeaway: "Synced user attribute to change: Active Directory cmdlets on-premises (`Set-ADUser`), not Microsoft Graph in the cloud.",
      refs: [
        ["Microsoft Learn: Set-ADUser", "https://learn.microsoft.com/powershell/module/activedirectory/set-aduser"],
        ["Microsoft Learn: What is Microsoft Entra Connect?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-azure-ad-connect"]
      ]
    }
  },
  {
    id: "Q056", source: 56, type: "dropdown",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Basic",
    stem: [
      "Your company has a Microsoft 365 E5 subscription.",
      "You need to perform the following tasks:",
      { list: ["View the Adoption Score of the company.", "Create a new service request to Microsoft."] },
      "Which two options should you use in the Microsoft 365 admin center? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "View the Adoption Score of the company.", options: ["Users", "Teams & groups", "Roles", "Resources", "Billing", "Support", "Settings", "Setup", "Reports", "Health"] },
      { id: "f2", label: "Create a new service request to Microsoft.", options: ["Users", "Teams & groups", "Roles", "Resources", "Billing", "Support", "Settings", "Setup", "Reports", "Health"] }
    ],
    answer: { f1: 8, f2: 5 },
    explanation: {
      correct: [
        "Adoption Score is one of the reports of the Microsoft 365 admin center: it is found under **Reports** > Adoption Score, next to the usage reports.",
        "Service requests to Microsoft are created and tracked under **Support**, which offers Help & support (where you describe the issue and open a new service request) and the list of your existing service requests."
      ],
      wrong: [
        ["Health", "Health shows service health, Message center and other status information about Microsoft's services. It is not where Adoption Score or support requests live."],
        ["Billing", "Billing covers purchases, subscriptions, licenses and invoices."],
        ["Settings or Setup", "Settings holds org-wide and domain settings, and Setup holds guided setup tasks. Neither opens a service request or shows Adoption Score."]
      ],
      concept: "The navigation of the Microsoft 365 admin center groups analytics under Reports and contact with Microsoft support under Support.",
      takeaway: "Adoption Score: Reports. New service request: Support.",
      refs: [
        ["Microsoft Learn: Microsoft Adoption Score", "https://learn.microsoft.com/microsoft-365/admin/adoption/adoption-score"],
        ["Microsoft Learn: Get support", "https://learn.microsoft.com/microsoft-365/admin/get-help-support"]
      ]
    }
  },
  {
    id: "Q057", source: 57, type: "multi",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that uses an Azure AD tenant named contoso.com. The tenant contains the users shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Group1", "Security"],
        ["Group2", "Mail-enabled security"],
        ["Group3", "Microsoft 365"],
        ["Group4", "Distribution"]
      ] } },
      "You add another user named User5 to the User Administrator role.",
      "You need to identify which two management tasks User5 can perform.",
      "Which two tasks should you identify? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Delete User2 and User4 only." },
      { key: "B", text: "Reset the password of User4 only." },
      { key: "C", text: "Reset the password of any user in Azure AD." },
      { key: "D", text: "Delete User1, User2, and User4 only." },
      { key: "E", text: "Reset the password of User2 and User4 only." },
      { key: "F", text: "Delete any user in Azure AD." }
    ],
    answer: ["A", "E"],
    explanation: {
      correct: [
        "The table printed with this question lists four groups and their types; it does not show User1 to User4 or their roles. The reference answer is A and E, and it follows from the rule that limits the User Administrator role.",
        "User Administrator can create and manage users and groups, but sensitive actions such as deleting a user or resetting a password are allowed only on users who are not administrators or who hold one of a limited set of roles: Helpdesk Administrator, Password Administrator, User Administrator, Directory Readers, Guest Inviter, Message Center Reader, Reports Reader and a few others. On a Global Administrator, Privileged Role Administrator, Security Administrator or another privileged role, User5 can do neither. Deletion and password reset follow the same rule, so they apply to the same users: the key assumes that User2 and User4 are users within the reach of the role, and that User1 and User3 hold privileged roles."
      ],
      wrong: [
        ["B", "Password reset follows the same rule as deletion, so it covers the same users as A: User2 and User4, not User4 alone."],
        ["C", "User Administrator cannot reset the password of privileged administrators such as Global Administrators, so not any user."],
        ["D", "This includes User1, a user whom the role cannot delete in the reference answer, because User1 holds a role more privileged than the ones a User Administrator may manage."],
        ["F", "User Administrator cannot delete Global Administrators or other privileged administrators, so not any user."]
      ],
      concept: "User Administrator performs sensitive actions, such as deleting users and resetting passwords, only on non-administrators and on a limited list of lower-privilege roles.",
      takeaway: "Options with \"any user\" are wrong for User Administrator: privileged administrators are out of its reach for deletion and password resets.",
      logic: "Eliminate C and F because of privileged administrators. The remaining delete and reset options must name the same set of users, which leaves A and E.",
      refs: [
        ["Microsoft Learn: Privileged roles and permissions in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/privileged-roles-permissions"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q058", source: 58, type: "dropdown",
    domain: "identity", topic: "External collaboration", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that contains a Microsoft 365 group named Group1. Group1 is configured as shown in the following exhibit.",
      { image: "q058-group1-settings.png", alt: "Settings tab of Group1: Private group, 1 owner, 1 member. General settings: Allow external senders to email this group is cleared, Send copies of group conversations and events to group members is selected, Hide from my organization's global address list is cleared. Privacy is set to Private (Public is not selected)." },
      "An external user named User1 has an email address of [email protected].",
      "You need to add User1 to Group1.",
      "What should you do first, and which portal should you use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Action:", options: [
        "Add User1 to the subscription as an active user.",
        "For Group1, change the Privacy setting to Public.",
        "For Group1, select Allow external senders to email this group.",
        "Invite User1 to collaborate with your organization as a guest."
      ] },
      { id: "f2", label: "Portal:", options: [
        "The Microsoft Entra admin center",
        "The Exchange admin center",
        "The Microsoft 365 admin center",
        "The Microsoft Purview compliance portal"
      ] }
    ],
    answer: { f1: 3, f2: 0 },
    explanation: {
      correct: [
        "Only objects in your directory can be members of a Microsoft 365 group. User1 is an external person with an outlook.com address, so User1 first has to exist in the tenant as a guest user. You create that guest account by inviting User1 to collaborate with your organization (Microsoft Entra B2B collaboration). Once the invitation is sent, the guest object exists and can be added to Group1.",
        "Guest invitations are managed in the **Microsoft Entra admin center**, under Users > New user > Invite external user, where you enter the email address and can add the guest to groups."
      ],
      wrong: [
        ["Add User1 to the subscription as an active user", "That creates a new internal member account with its own sign-in and license. It does not let the external person use their existing outlook.com identity."],
        ["Change the Privacy setting to Public", "Privacy controls whether people in your organization can join without approval and see the content. It does not bring an external user into the directory."],
        ["Allow external senders to email this group", "This only lets people outside the organization send email to the group address. It does not make them members."],
        ["The Exchange admin center or the Purview compliance portal", "Neither portal invites guest users. Exchange manages mail recipients and Purview manages compliance features."]
      ],
      concept: "External people join Microsoft 365 groups as guest users, created through a Microsoft Entra B2B collaboration invitation.",
      takeaway: "External user into a group: invite as a guest in the Microsoft Entra admin center first, then add the guest to the group.",
      refs: [
        ["Microsoft Learn: Add B2B collaboration users in the Microsoft Entra admin center", "https://learn.microsoft.com/entra/external-id/add-users-administrator"],
        ["Microsoft Learn: Manage guest access in Microsoft 365 groups", "https://learn.microsoft.com/microsoft-365/admin/create-groups/manage-guest-access-in-groups"]
      ]
    }
  },
  {
    id: "Q059", source: 59, type: "single",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains a user named User1.",
      "User1 requires admin access to perform the following tasks:",
      { list: ["Manage Microsoft Exchange Online settings.", "Create Microsoft 365 groups."] },
      "You need to ensure that User1 only has admin access for eight hours and requires approval before the role assignment takes place.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Azure AD Identity Protection" },
      { key: "B", text: "Microsoft Entra Verified ID" },
      { key: "C", text: "Conditional Access" },
      { key: "D", text: "Azure AD Privileged Identity Management (PIM)" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Both tasks are covered by the Exchange Administrator role, which manages Exchange Online and can create and manage Microsoft 365 groups. The requirement is about how that role is held: only for a limited time and only after approval.",
        "Privileged Identity Management (PIM, now Microsoft Entra Privileged Identity Management) provides just-in-time access. You make User1 eligible for the role instead of assigning it permanently. In the role settings you set the activation maximum duration to 8 hours and turn on **Require approval to activate** with one or more approvers. User1 then requests activation, an approver approves it, and the role is removed automatically when the eight hours are over."
      ],
      wrong: [
        ["A", "Identity Protection detects risky users and sign-ins and can require remediation. It does not grant roles for a limited time."],
        ["B", "Verified ID issues and verifies decentralized credentials. It has nothing to do with time-bound admin roles."],
        ["C", "Conditional Access decides whether a sign-in is allowed and under which controls. It cannot make a role assignment temporary or subject to approval."]
      ],
      concept: "PIM turns standing admin access into eligible assignments that are activated on demand, for a limited duration and optionally after approval.",
      takeaway: "Time-limited admin role with approval: PIM role settings (activation maximum duration, require approval).",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra Privileged Identity Management?", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure"],
        ["Microsoft Learn: Configure Microsoft Entra role settings in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"]
      ]
    }
  },
  {
    id: "Q060", source: 60, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [
        ["Group1", "Security"],
        ["Group2", "Mail-enabled security"],
        ["Group3", "Microsoft 365"],
        ["Group4", "Distribution"]
      ] } },
      "All the groups are deleted.",
      "Which groups can be restored, and what is the retention period? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Groups that can be restored:", options: [
        "Group3 only",
        "Group1 and Group2 only",
        "Group2 and Group4 only",
        "Group1, Group2, and Group3 only",
        "Group1, Group2, Group3, and Group4"
      ] },
      { id: "f2", label: "Retention period:", options: ["24 hours", "7 days", "14 days", "30 days", "90 days"] }
    ],
    answer: { f1: 0, f2: 3 },
    explanation: {
      correct: [
        "When a Microsoft 365 group is deleted, it is kept in a soft-deleted state, hidden from users, for 30 days. During that period an administrator, or the owner, can restore the group together with its content, such as the mailbox, the SharePoint site and the team. After 30 days the group is permanently deleted.",
        "This restore capability is restricted to Microsoft 365 groups. It is not available for security groups and distribution groups, so of the four deleted groups only Group3 can be restored."
      ],
      wrong: [
        ["Any option with Group1, Group2 or Group4", "Security, mail-enabled security and distribution groups are not kept in the deleted groups list and cannot be restored."],
        ["24 hours, 7 days or 14 days", "These are shorter than the 30 days for which a deleted Microsoft 365 group remains restorable."],
        ["90 days", "The retention period of a deleted Microsoft 365 group is 30 days, not 90."]
      ],
      concept: "Deleted Microsoft 365 groups are soft-deleted and restorable for 30 days; other group types do not have this capability.",
      takeaway: "Restore a deleted group: Microsoft 365 groups only, within 30 days.",
      refs: [
        ["Microsoft Learn: Restore a deleted Microsoft 365 group in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/users/groups-restore-deleted"]
      ]
    }
  },
  {
    id: "Q061", source: 61, type: "dropdown",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "From Azure AD Privileged Identity Management (PIM), you configure Role settings for the Global Administrator role as shown in the following exhibit.",
      { heading: "Activation" },
      { table: { head: ["Setting", "State"], rows: [
        ["Activation maximum duration (hours)", "8 hour(s)"],
        ["On activation, require", "Azure MFA"],
        ["Require justification on activation", "Yes"],
        ["Require ticket information on activation", "No"],
        ["Require approval to activate", "No"],
        ["Approvers", "None"]
      ] } },
      { heading: "Assignment" },
      { table: { head: ["Setting", "State"], rows: [
        ["Allow permanent eligible assignment", "No"],
        ["Expire eligible assignments after", "3 month(s)"],
        ["Allow permanent active assignment", "No"],
        ["Expire active assignments after", "15 day(s)"],
        ["Require Azure Multi-Factor Authentication on active assignment", "Yes"],
        ["Require justification on active assignment", "Yes"]
      ] } },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "A user that is assigned the Global Administrator role as active [answer choice].", options: [
        "will lose the role after eight hours",
        "can reactivate the role every eight hours",
        "can reactivate the role every 15 days",
        "will lose the role after 15 days"
      ] },
      { id: "f2", label: "You can make the Global Administrator role available to activation requests [answer choice].", options: [
        "for up to eight hours",
        "for up to three months",
        "for up to 15 days",
        "until the requests are revoked manually"
      ] }
    ],
    answer: { f1: 3, f2: 1 },
    explanation: {
      correct: [
        "PIM has two kinds of assignment. An **active** assignment gives the role at once, without activation. An **eligible** assignment lets the user request activation of the role when needed. The Assignment settings limit how long each kind of assignment may last.",
        "Here **Allow permanent active assignment** is No and **Expire active assignments after** is 15 days, so an active assignment must have an end date no more than 15 days away: a user assigned the role as active loses it after 15 days. **Allow permanent eligible assignment** is No and **Expire eligible assignments after** is 3 months, so a user can be made eligible, that is, able to submit activation requests, for up to three months."
      ],
      wrong: [
        ["will lose the role after eight hours", "Eight hours is the activation maximum duration. It limits each activation of an eligible user, not an active assignment."],
        ["can reactivate the role every eight hours / every 15 days", "An active assignment is not activated at all; the user holds the role for the whole assignment period."],
        ["for up to eight hours", "This is the length of one activation, not how long the user stays eligible to request activations."],
        ["for up to 15 days", "Fifteen days is the maximum for active assignments. Eligible assignments may last up to three months."],
        ["until the requests are revoked manually", "That would need permanent eligible assignments, which the settings do not allow."]
      ],
      concept: "PIM role settings separate the length of one activation from the maximum duration of eligible and active assignments.",
      takeaway: "Activation maximum duration limits one activation; Expire eligible/active assignments after limits how long the assignment itself lasts.",
      refs: [["Microsoft Learn: Configure Microsoft Entra role settings in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"]]
    }
  },
  {
    id: "Q062", source: 62, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "A user named User1@contoso.com was recently provisioned.",
      "You need to use PowerShell to assign a Microsoft Office 365 E3 license to User1. Microsoft Bookings must NOT be enabled.",
      "How should you complete the command? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `{{f1}} -Scopes User.ReadWrite.All, Organization.Read.All

$E3 = {{f2}} | Where SkuPartNumber -eq 'EnterprisePack'
$disabledPlans = $E3.ServicePlans | Where ServicePlanName -in
("MICROSOFTBOOKINGS") | select -ExcludeProperty ServicePlanID

$LicenseOptions= @(
    @{
        SkuId = $E3.SkuId
        DisabledPlans = $disabledPlans
    }
)
{{f3}} -UserId User1@contoso.com -AddLicenses $LicenseOptions -RemoveLicenses @()`,
    fields: [
      { id: "f1", label: "Cmdlet before -Scopes", options: ["Connect-AzureAD", "Connect-MgGraph", "Connect-MSOLService"] },
      { id: "f2", label: "Cmdlet that sets $E3", options: ["Get-AzureADUser", "Get-MgSubscribedSku", "Get-MSOLAccountSKU"] },
      { id: "f3", label: "Cmdlet before -UserId", options: ["Set-AzureADUser", "Set-MgUserLicense", "Set-MSOLUser"] }
    ],
    answer: { f1: 1, f2: 1, f3: 1 },
    explanation: {
      correct: [
        "The script uses the Microsoft Graph PowerShell SDK throughout. `Connect-MgGraph` is the cmdlet that takes `-Scopes`; it signs in with the delegated permissions `User.ReadWrite.All` (to change the user's licenses) and `Organization.Read.All` (to read the tenant's subscriptions).",
        "`Get-MgSubscribedSku` returns the license SKUs the organization has bought. Filtering on `SkuPartNumber -eq 'EnterprisePack'` selects Office 365 E3, whose `ServicePlans` and `SkuId` the next lines use: the Bookings service plan (`MICROSOFTBOOKINGS`) goes into `DisabledPlans`, so the license is assigned with Bookings turned off. `Set-MgUserLicense -UserId ... -AddLicenses ... -RemoveLicenses @()` then assigns the license; `-RemoveLicenses` is required even when nothing is removed, hence the empty array."
      ],
      wrong: [
        ["Connect-AzureAD or Connect-MSOLService", "These connect the deprecated Azure AD and MSOnline modules. They have no `-Scopes` parameter, and their sessions are not used by the Microsoft Graph cmdlets in the rest of the script."],
        ["Get-AzureADUser", "This returns user objects, not the subscribed license SKUs."],
        ["Get-MSOLAccountSKU", "This is the MSOnline cmdlet for SKUs. It needs a `Connect-MsolService` session and does not return the Graph objects whose `ServicePlans` and `SkuId` the script uses."],
        ["Set-AzureADUser or Set-MSOLUser", "These update user properties. They have no `-AddLicenses` and `-RemoveLicenses` parameters; licenses were assigned with separate cmdlets in those modules, and `Set-MgUserLicense` is the Graph cmdlet for it."]
      ],
      concept: "With Microsoft Graph PowerShell, a license with disabled service plans is assigned by connecting with the right scopes, reading the SKU with `Get-MgSubscribedSku`, and calling `Set-MgUserLicense` with `DisabledPlans`.",
      takeaway: "Graph licensing chain: `Connect-MgGraph -Scopes` > `Get-MgSubscribedSku` > `Set-MgUserLicense -AddLicenses -RemoveLicenses`.",
      refs: [
        ["Microsoft Learn: Assign Microsoft 365 licenses to user accounts with PowerShell", "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"],
        ["Microsoft Learn: Disable access to Microsoft 365 services while assigning user licenses", "https://learn.microsoft.com/microsoft-365/enterprise/disable-access-to-services-while-assigning-user-licenses"]
      ]
    }
  },
  {
    id: "Q063", source: 63, type: "single",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Basic",
    stem: [
      "You have a Microsoft E5 subscription.",
      "You need to ensure that administrators who need to manage Microsoft Exchange Online are assigned the Exchange Administrator role for five hours at a time.",
      "What should you implement?"
    ],
    options: [
      { key: "A", text: "Azure AD Privileged Identity Management (PIM)" },
      { key: "B", text: "a conditional access policy" },
      { key: "C", text: "a communication compliance policy" },
      { key: "D", text: "Azure AD Identity Protection" },
      { key: "E", text: "groups that have dynamic membership" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Holding a role \"for five hours at a time\" is just-in-time access, which is what Privileged Identity Management provides. The administrators are made eligible for the Exchange Administrator role, and in the PIM role settings of that role the **Activation maximum duration** is set to 5 hours.",
        "Each time an administrator needs to manage Exchange Online, they activate the role, optionally with MFA, a justification or an approval. PIM removes the role automatically when the five hours are over, and the administrator activates it again the next time."
      ],
      wrong: [
        ["B", "A Conditional Access policy controls the conditions of a sign-in, such as MFA or a compliant device. It does not grant or remove a directory role."],
        ["C", "Communication compliance detects inappropriate or sensitive content in messages. It has nothing to do with admin roles."],
        ["D", "Identity Protection evaluates sign-in and user risk. It cannot limit how long a role is held."],
        ["E", "Dynamic membership adds users to a group based on their attributes. It cannot give a role for a limited time, even if the group is role-assignable."]
      ],
      concept: "PIM limits each activation of an eligible role to a configurable maximum duration.",
      takeaway: "Role \"for N hours at a time\": PIM eligible assignment with the activation maximum duration set to N hours.",
      refs: [["Microsoft Learn: Configure Microsoft Entra role settings in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"]]
    }
  },
  {
    id: "Q064", source: 64, type: "multi",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You suspect that several Microsoft Office 365 applications or services were recently updated.",
      "You need to identify which applications or services were recently updated.",
      "What are two possible ways to achieve the goal? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "From the Microsoft 365 admin center, review the Service health blade." },
      { key: "B", text: "From the Microsoft 365 admin center, review the Message center blade." },
      { key: "C", text: "From the Microsoft 365 admin center, review the Products blade." },
      { key: "D", text: "From the Microsoft 365 Admin mobile app, review the messages." }
    ],
    answer: ["B", "D"],
    explanation: {
      correct: [
        "Microsoft announces new and changed features, planned changes and retirements of Microsoft 365 services in the **Message center** of the Microsoft 365 admin center (Health > Message center). Each post names the service affected, what changes and when, so it is the place to find out which applications or services were updated.",
        "The **Microsoft 365 Admin mobile app** shows the same Message center posts on a phone or tablet, so reviewing its messages is a second complete way to reach the goal."
      ],
      wrong: [
        ["A", "Service health shows incidents and advisories, that is, problems with a service, not the updates and feature changes Microsoft rolls out."],
        ["C", "Products (Billing > Your products) lists subscriptions and licenses. It does not describe service updates."]
      ],
      concept: "Message center is the channel through which Microsoft tells administrators about changes to Microsoft 365 services, in the admin center and in the Admin mobile app.",
      takeaway: "Updates and changes: Message center. Outages and incidents: Service health.",
      refs: [
        ["Microsoft Learn: Message center", "https://learn.microsoft.com/microsoft-365/admin/manage/message-center"],
        ["Microsoft Learn: How to check Microsoft 365 service health", "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"]
      ]
    }
  }
);
