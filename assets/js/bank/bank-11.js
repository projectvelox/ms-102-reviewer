/* MS-102 question bank, part 11: questions 161 to 176 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q161", source: 161, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    caseId: "series-sync-errors", caseOrder: 4,
    stem: [
      "Solution: From Azure AD Connect, you modify the filtering settings.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The scenario gives two clues. Only the 10 accounts of one organizational unit are missing, and Azure AD Connect Health reports that every synchronization completed successfully. Azure AD Connect is therefore working and can export to Azure AD (Microsoft Entra ID); it simply never reads those 10 accounts. Objects that are outside the synchronization scope are skipped silently and do not produce synchronization errors, which is exactly what Connect Health shows.",
        "The scope is set by the filtering settings of Azure AD Connect. Running the wizard again, choosing **Customize synchronization options** and selecting the missing OU under **Domain and OU filtering** brings the OU into scope, and the 10 accounts are imported and exported to Azure AD in the next synchronization cycle. The solution meets the goal, so the answer is Yes."
      ],
      wrong: [
        ["B", "No would mean the accounts are blocked by something other than scope, such as an attribute conflict or an export error. Those cases appear as errors in Connect Health, and the scenario says that all synchronizations completed successfully."]
      ],
      concept: "Domain and OU filtering decides which Active Directory objects Azure AD Connect imports at all; objects outside that scope are skipped without errors.",
      takeaway: "Accounts of one OU missing and no sync errors reported: add the OU in the filtering settings of Azure AD Connect.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Configure filtering", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering"],
        ["Microsoft Learn: Troubleshoot an object that is not synchronizing with Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/hybrid/connect/tshoot-connect-object-not-syncing"]
      ]
    }
  },
  {
    id: "Q162", source: 162, type: "yesno",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of"], rows: [
        ["User1", "Group1"],
        ["User2", "Group2"],
        ["User3", "None"]
      ] } },
      "You create an administrative unit named AU1 that contains the members shown in the following exhibit.",
      { image: "q162-au1-members.png", alt: "Members tab of the administrative unit AU1. It has two members, both of member type User: User1 (User1@sk220912outlook.onmicrosoft.com) and User3 (User3@sk220912outlook.onmicrosoft.com). The page notes that the administrators assigned to the unit manage these users and groups, and that adding groups doesn't add users to the unit." },
      "The User Administrator role has the assignments shown in the following exhibit.",
      { image: "q162-user-admin-assignments.png", alt: "Assigned tab of the User Administrator role. Two groups hold the role: Group1 with the scope Organization, and Group2 with the scope AU1." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can reset the password of User3." },
      { text: "User2 can reset the password of User3." },
      { text: "User2 can reset the password of User1." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "Both users get the User Administrator role through a group: User1 through Group1, scoped to the whole organization, and User2 through Group2, scoped to AU1. A group can only be assigned a Microsoft Entra role if it is a role-assignable group, so User1 and User2 are members of role-assignable groups. User3 has no role and belongs to AU1.",
        "**Statement 1 — Yes.** User1 is a User Administrator for the organization, and that role can reset the password of users who hold no admin role. User3 is such a user, and an organization-wide assignment is not limited by administrative units. **Statement 2 — Yes.** User2 is a User Administrator scoped to AU1, so User2 can manage the users that are members of AU1. User3 is a direct member of AU1 and has no admin role.",
        "**Statement 3 — No.** User1 is also a member of AU1, but User1 is a member of a role-assignable group and holds an admin role. Members of role-assignable groups are protected: only a Privileged Authentication Administrator or a Global Administrator can change their credentials. A User Administrator, and certainly one scoped to an administrative unit, cannot reset User1's password."
      ],
      wrong: [
        ["Statement 1 — No", "Administrative units only narrow the reach of roles that are scoped to them. An assignment with the scope Organization covers every user, whether or not the user is in an administrative unit."],
        ["Statement 2 — No", "User3 is a direct user member of AU1, which is exactly the scope of User2's role. A role scoped to an administrative unit applies to the users in that unit."],
        ["Statement 3 — Yes", "Being in AU1 places User1 in User2's scope, but it does not lift the protection of members of role-assignable groups. Their passwords can only be reset by a Privileged Authentication Administrator or a Global Administrator."]
      ],
      concept: "A role scoped to an administrative unit applies only to the members of that unit, and members of role-assignable groups are protected from credential changes by lower-privileged administrators.",
      takeaway: "Check the scope of the assignment first, then whether the target is itself an admin or a member of a role-assignable group.",
      refs: [
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"],
        ["Microsoft Learn: Use Microsoft Entra groups to manage role assignments", "https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept"],
        ["Microsoft Learn: Privileged roles and permissions in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/privileged-roles-permissions"]
      ]
    }
  },
  {
    id: "Q163", source: 163, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains an Azure AD tenant named contoso.com. The tenant includes a user named User1.",
      "You enable Azure AD Identity Protection.",
      "You need to ensure that User1 can review the list in Azure AD Identity Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Security Reader" },
      { key: "B", text: "Global Administrator" },
      { key: "C", text: "Owner" },
      { key: "D", text: "User Administrator" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Reviewing the list of users flagged for risk is a read-only task. In Identity Protection (now Microsoft Entra ID Protection), the **Security Reader** role can view all the Identity Protection reports, including Risky users, Risky sign-ins and risk detections, and the overview. It cannot change anything, which makes it the least privileged role that meets the requirement.",
        "Roles with more rights, such as Security Operator (which can also dismiss user risk and confirm compromise) or Security Administrator, would also work but grant more than reviewing requires."
      ],
      wrong: [
        ["B", "A Global Administrator can do everything in Identity Protection and in the rest of the tenant. That is far more than reviewing a report, so it breaks the principle of least privilege."],
        ["C", "Owner is an Azure role-based access control role for Azure resources such as subscriptions and resource groups. It is not a Microsoft Entra role and gives no access to Identity Protection reports."],
        ["D", "User Administrator is a role for creating and changing users, groups and passwords. It is not the read-only security role that reviewing risk reports calls for."]
      ],
      concept: "Identity Protection reports can be read by the Security Reader role; Security Operator and Security Administrator add the rights to act on risk.",
      takeaway: "Only view risky users or risk reports: Security Reader.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q164", source: 164, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "Your company has an Azure AD tenant named contoso.onmicrosoft.com that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Password Administrator"],
        ["User2", "Security Administrator"],
        ["User3", "User Administrator"],
        ["User4", "None"]
      ] } },
      "You need to identify which users can perform the following administrative tasks:",
      { list: ["Reset the password of User4.", "Modify the value for the manager attribute of User4."] },
      "Which users should you identify for each task? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Reset the password of User4:", options: ["User1 only", "User2 only", "User1 and User2 only", "User1 and User3 only", "User1, User2, and User3"] },
      { id: "f2", label: "Modify the value for the manager attribute of User4:", options: ["User2 only", "User3 only", "User1 and User3 only", "User2 and User3 only", "User1, User2, and User3"] }
    ],
    answer: { f1: 3, f2: 1 },
    explanation: {
      correct: [
        "User4 has no admin role, so any role that can reset the passwords of non-administrators can reset it. **Password Administrator** (User1) exists for exactly this: it resets the passwords of non-admin users and of other Password Administrators. **User Administrator** (User3) can reset passwords as well, along with managing users and groups. **Security Administrator** (User2) manages security features and policies but has no permission to reset user passwords. The answer is User1 and User3 only.",
        "The manager attribute is a property of the user object. Updating user properties such as manager is part of the **User Administrator** role. Password Administrator can only reset passwords and cannot change other attributes, and Security Administrator cannot edit user properties. The answer is User3 only."
      ],
      wrong: [
        ["Reset password: User1, User2, and User3", "Security Administrator does not include a password reset permission. It manages security settings, Identity Protection and similar features, not user credentials."],
        ["Manager attribute: User1 and User3 only", "Password Administrator is limited to password resets. Changing the manager or any other user property requires a role such as User Administrator."],
        ["Manager attribute: User2 and User3 only", "Security Administrator cannot update user properties such as the manager."]
      ],
      concept: "Password Administrator only resets passwords of non-admins, User Administrator resets passwords and edits user properties, and Security Administrator manages security features without user-management rights.",
      takeaway: "Reset a regular user's password: Password Administrator or User Administrator. Edit user attributes: User Administrator.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"],
        ["Microsoft Learn: Privileged roles and permissions in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/privileged-roles-permissions"]
      ]
    }
  },
  {
    id: "Q165", source: 165, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "Users have Android or iOS devices and access Microsoft 365 resources from computers that run Windows 11 or MacOS.",
      "You need to implement passwordless authentication. The solution must support all the devices.",
      "Which authentication method should you use?"
    ],
    options: [
      { key: "A", text: "Windows Hello" },
      { key: "B", text: "FIDO2 compliant security keys" },
      { key: "C", text: "Microsoft Authenticator app" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Passwordless phone sign-in with the **Microsoft Authenticator app** turns the Android or iOS phone each user already has into the credential. When the user signs in, on the phone itself or in a browser on a Windows 11 or macOS computer, Microsoft Entra ID sends a notification to the app; the user matches the number shown on the screen and confirms with a biometric or PIN on the phone.",
        "Because the credential lives on the phone and the sign-in works from any platform and browser, one method covers every device in the scenario."
      ],
      wrong: [
        ["A", "Windows Hello for Business is tied to Windows devices. It cannot be used to sign in on macOS computers or on Android and iOS devices."],
        ["B", "FIDO2 security keys are separate hardware that every user must carry and connect over USB, NFC or Bluetooth, and their support depends on the platform and browser, especially on mobile devices. The Authenticator app works with the phones the users already have, on every platform listed."]
      ],
      concept: "Microsoft Entra ID offers three passwordless methods: Windows Hello for Business (Windows), FIDO2 security keys, and phone sign-in with the Microsoft Authenticator app.",
      takeaway: "Passwordless across Windows, macOS, Android and iOS: Microsoft Authenticator phone sign-in.",
      refs: [
        ["Microsoft Learn: Passwordless authentication options for Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"],
        ["Microsoft Learn: Enable passwordless sign-in with Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone"]
      ]
    }
  },
  {
    id: "Q166", source: 166, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your company has a hybrid deployment of Microsoft 365.",
      "An on-premises user named User1 is synced to Azure AD.",
      "Azure AD Connect is configured as shown in the following exhibit.",
      { image: "q166-azure-ad-connect-settings.png", alt: "Azure AD Connect, Review your solution page. Synchronized directory: Adatum.com, account ADATUM.COM\\MSOL_e785c048abcc. Synchronization settings: source anchor ms-DS-ConsistencyGuid; user principal name userPrincipalName; sync criteria AlwaysProvision; filter objects to synchronize by group Disabled; Azure AD app and attribute filtering Disabled; device writeback Disabled; directory extension attribute sync Disabled; Exchange hybrid deployment Disabled; group writeback Disabled; password hash synchronization Enabled; password writeback Disabled; user writeback Disabled; auto upgrade Enabled; Exchange mail public folders Disabled; SQL Server name (localdb); SQL Server instance name .\\ADSync." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1 [answer choice].", options: [
        "cannot change her password from any Microsoft portals",
        "can change her password by using self-service password reset feature only",
        "can change her password from the Microsoft 365 admin center only"
      ] },
      { id: "f2", label: "If the password for User1 is changed in Active Directory, [answer choice].", options: [
        "the password hash will be synchronized to Azure AD",
        "a new randomly generated password will be assigned to User1",
        "the password hash in Azure AD will be unchanged"
      ] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "User1 is synchronized from Active Directory, so Active Directory is the source of authority for her password. A password change or reset made in the cloud can only take effect if it is written back to Active Directory, and the exhibit shows **Password writeback: Disabled**. Without writeback, self-service password reset and password changes in the cloud are not available to synchronized users, so User1 cannot change her password from any Microsoft portal; she has to change it on-premises.",
        "The exhibit also shows **Password hash synchronization: Enabled**. When the password of User1 is changed in Active Directory, Azure AD Connect picks up the change and synchronizes the new password hash to Azure AD (Microsoft Entra ID), usually within a couple of minutes. User1 then signs in to Microsoft 365 with the new password."
      ],
      wrong: [
        ["can change her password by using self-service password reset feature only", "Self-service password reset for a synchronized account depends on password writeback to save the new password in Active Directory. Writeback is disabled in the exhibit."],
        ["can change her password from the Microsoft 365 admin center only", "The admin center is an administration portal, and for a synchronized account any password set in the cloud would also have to be written back to Active Directory, which is disabled."],
        ["a new randomly generated password will be assigned to User1", "Password hash synchronization copies a hash of the password the user set in Active Directory. Azure AD Connect never generates a password for the user."],
        ["the password hash in Azure AD will be unchanged", "That would only be true if password hash synchronization were disabled. It is enabled, so the new hash is synchronized."]
      ],
      concept: "Password hash synchronization sends on-premises password changes to the cloud; password writeback is what allows cloud password changes to reach Active Directory.",
      takeaway: "Synced user, PHS on, writeback off: password changes work only on-premises, and they flow to the cloud.",
      refs: [
        ["Microsoft Learn: What is password hash synchronization with Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"],
        ["Microsoft Learn: How does self-service password reset writeback work?", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  },
  {
    id: "Q167", source: 167, type: "dropdown",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and an Azure AD tenant named contoso.com.",
      "All users have computers that run Windows 11, are joined to contoso.com, and are protected by using BitLocker Drive Encryption (BitLocker).",
      "You plan to create a user named Admin1 that will perform following tasks:",
      { list: ["View BitLocker recovery keys.", "Configure the usage location for the users in contoso.com."] },
      "You need to assign roles to Admin to meet the requirements. The solution must use the principle of least privilege.",
      "Which two roles should you assign? To answer, select the appropriate options in the answer area."
    ],
    fields: [
      { id: "f1", label: "View BitLocker recovery keys", options: [
        "Cloud Device Administrator", "Desktop Analytics Administrator", "Intune Administrator", "Printer Administrator", "Printer Technician", "Windows 365 Administrator",
        "Global Administrator",
        "Application Administrator", "Application Developer", "Authentication Administrator", "Cloud Application Administrator", "Conditional Access Administrator", "Domain Name Administrator", "External Identity Provider Administrator", "Guest Inviter", "Helpdesk Administrator", "Hybrid Identity Administrator", "License Administrator", "Password Administrator"
      ] },
      { id: "f2", label: "Configure the usage location for the users in contoso.com", options: [
        "Cloud Device Administrator", "Desktop Analytics Administrator", "Intune Administrator", "Printer Administrator", "Printer Technician", "Windows 365 Administrator",
        "Global Administrator",
        "Application Administrator", "Application Developer", "Authentication Administrator", "Cloud Application Administrator", "Conditional Access Administrator", "Domain Name Administrator", "External Identity Provider Administrator", "Guest Inviter", "Helpdesk Administrator", "Hybrid Identity Administrator", "License Administrator", "Password Administrator"
      ] }
    ],
    answer: { f1: 15, f2: 17 },
    explanation: {
      correct: [
        "The two tasks need two unrelated permissions, and no small role has both. The BitLocker recovery keys of Microsoft Entra joined computers are stored with their device objects, and reading them requires a role with the permission to read BitLocker keys. **Helpdesk Administrator** includes that permission, because support staff often have to give a user a recovery key; otherwise the role is limited to tasks such as resetting the passwords of non-administrators and managing support requests.",
        "The usage location is a user property that must be set before a license can be assigned, so updating it is part of the **License Administrator** role, along with assigning and removing licenses. License Administrator cannot read BitLocker keys, and Helpdesk Administrator cannot change the usage location, so Admin1 needs both roles. The reference answer is Helpdesk Administrator and License Administrator."
      ],
      wrong: [
        ["Cloud Device Administrator", "This role can also read BitLocker recovery keys, together with enabling, disabling and deleting devices in Microsoft Entra ID. The reference answer uses Helpdesk Administrator for the keys."],
        ["Intune Administrator", "Intune Administrator can see recovery keys too, but it grants full control of Intune, which is far more than viewing keys."],
        ["Global Administrator", "Global Administrator covers both tasks on its own but grants every permission in the tenant, the opposite of least privilege."],
        ["Password Administrator", "Password Administrator can only reset the passwords of non-administrators. It can neither read BitLocker keys nor change the usage location."],
        ["Authentication Administrator", "This role manages the authentication methods of non-admin users. It has no access to BitLocker keys or license properties."]
      ],
      concept: "Built-in Microsoft Entra roles bundle narrow permissions: reading BitLocker keys is in Helpdesk Administrator (and some device roles), and updating usage location is in License Administrator.",
      takeaway: "Usage location goes with licensing: License Administrator. Recovery keys for support staff: Helpdesk Administrator.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"],
        ["Microsoft Learn: Manage device identities in the Microsoft Entra admin center", "https://learn.microsoft.com/entra/identity/devices/manage-device-identities"]
      ]
    }
  },
  {
    id: "Q168", source: 168, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 Enterprise E5 subscription.",
      "You add a cloud-based app named App1 to the Azure AD enterprise applications list.",
      "You need to ensure that two-step verification is enforced for all user accounts the next time they connect to App1.",
      "Which three settings should you configure from the policy? To answer, select the appropriate settings in the answer area,",
      { image: "q168-new-ca-policy.png", alt: "New Conditional Access policy named App1 policy. Assignments: Users or workload identities is set to All users (Include tab, All users selected; the other choices are None and Select users and groups); Cloud apps or actions shows No cloud apps, actions, or authentication contexts selected; Conditions shows 0 conditions selected. Access controls: Grant shows 0 controls selected; Session shows 0 controls selected. Enable policy offers Report-only, On and Off, and Report-only is selected. A warning says: Don't lock yourself out! This policy will affect all of your users." },
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Assignments", options: ["Users or workload identities", "Cloud apps or actions", "Conditions"] },
      { id: "f2", label: "Access controls", options: ["Grant", "Session"] },
      { id: "f3", label: "Enable policy", options: ["Report-only", "On", "Off"] }
    ],
    answer: { f1: 1, f2: 0, f3: 1 },
    explanation: {
      correct: [
        "A Conditional Access policy answers three questions: who, which app, and what control. The users are already set to **All users**, so the assignment that is still missing is **Cloud apps or actions**, where you select App1. Under **Grant**, you choose to grant access with **Require multifactor authentication**, which is the two-step verification requirement.",
        "Finally, the policy is set to **Report-only**. In report-only mode Conditional Access evaluates the policy and logs what it would have done, but it does not enforce it. Switching **Enable policy** to **On** makes the policy enforce MFA the next time each user connects to App1."
      ],
      wrong: [
        ["Users or workload identities", "This assignment already includes all users, which is what the requirement asks for."],
        ["Conditions", "Conditions such as locations, device platforms or sign-in risk narrow when a policy applies. MFA is required for every connection to App1, so no condition is needed."],
        ["Session", "Session controls, such as sign-in frequency or app enforced restrictions, shape the session after access is granted. Requiring MFA is a grant control."],
        ["Report-only or Off", "Report-only only logs the result and Off disables the policy. Neither enforces MFA."]
      ],
      concept: "A Conditional Access policy needs assignments (users and target resources), access controls (grant or session), and the On state to be enforced.",
      takeaway: "Require MFA for one app: select the app, grant with Require multifactor authentication, and turn the policy On (Report-only does not enforce).",
      refs: [
        ["Microsoft Learn: Building a Conditional Access policy", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-policies"],
        ["Microsoft Learn: What is Conditional Access report-only mode?", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-report-only"]
      ]
    }
  },
  {
    id: "Q169", source: 169, type: "single",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You create a Conditional Access policy that blocks access to an app named App1 when users trigger a high-risk sign-in event.",
      "You need to reduce false positives for impossible travel when the users sign in from the corporate network.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "exclusion groups" },
      { key: "B", text: "multi-factor authentication (MFA)" },
      { key: "C", text: "named locations" },
      { key: "D", text: "user risk policies" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Impossible travel and similar travel-based detections compare where a user signs in from. When the corporate network reaches the internet through IP addresses that geolocate in different places, such as several offices, a proxy or a VPN, ordinary sign-ins from the office can look like travel and raise the sign-in risk.",
        "Defining the public IP ranges of the corporate network as a **named location** and marking it as trusted tells Microsoft Entra ID which locations belong to the organization. Identity Protection takes trusted named locations into account when it calculates risk, which lowers the sign-in risk for sign-ins from those locations and reduces false positives, so the policy stops blocking legitimate users."
      ],
      wrong: [
        ["A", "Excluding users from the policy removes the protection for those users everywhere, not only on the corporate network. It hides the false positives instead of making the detection more accurate."],
        ["B", "MFA is a grant control. It does not change how the sign-in risk is calculated, and the policy in the scenario blocks access rather than asking for MFA."],
        ["D", "A user risk policy reacts to the risk that an account is compromised, such as leaked credentials. It does not change how impossible travel is evaluated for sign-ins from the corporate network."]
      ],
      concept: "Trusted named locations identify the organization's networks to Conditional Access and improve the accuracy of Identity Protection risk calculation.",
      takeaway: "False positives from the office network: define the corporate IP ranges as a trusted named location.",
      refs: [
        ["Microsoft Learn: Using the location condition in a Conditional Access policy", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"],
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"]
      ]
    }
  },
  {
    id: "Q170", source: 170, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft 365 admin center" },
      { key: "B", text: "the SharePoint admin center" },
      { key: "C", text: "the Microsoft Entra admin center" },
      { key: "D", text: "the Microsoft Purview compliance portal" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "A mail-enabled contact (mail contact) represents a person outside the organization who has an external email address. It appears in the global address list and can be added to distribution groups, but it cannot sign in. Mail contacts are Exchange Online recipients.",
        "In the **Microsoft 365 admin center**, **Users > Contacts > Add a contact** creates such a contact. The Exchange admin center can create mail contacts as well, but it is not among the options."
      ],
      wrong: [
        ["B", "The SharePoint admin center manages sites, sharing and storage. It has no recipient management."],
        ["C", "The Microsoft Entra admin center manages identities such as users, groups, devices and applications. Mail contacts are Exchange recipients and are created in the Microsoft 365 admin center or the Exchange admin center."],
        ["D", "The Microsoft Purview compliance portal manages compliance features such as retention, DLP and eDiscovery, not recipients."]
      ],
      concept: "Mail contacts are Exchange Online recipients for external addresses, managed from the Microsoft 365 admin center or the Exchange admin center.",
      takeaway: "External address in the GAL: add a contact under Users > Contacts in the Microsoft 365 admin center.",
      refs: [
        ["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"]
      ]
    }
  },
  {
    id: "Q171", source: 171, type: "dropdown",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Intermediate",
    stem: [
      "You have an Azure AD tenant that contains the users shown in the following table.",
      { table: { head: ["Name", "Role"], rows: [
        ["User1", "Global Administrator"],
        ["User2", "Billing Administrator"],
        ["User3", "None"]
      ] } },
      "You enable self-service password reset for all users. You set Number of methods required to reset to 1, and you set Methods available to users to Security questions only.",
      "What information must be configured for each user before the user can perform a self-service password reset? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "User1:", options: ["Email address only", "Phone number only", "Security questions only", "Phone number and email address"] },
      { id: "f2", label: "User2:", options: ["Email address only", "Phone number only", "Security questions only", "Phone number and email address"] },
      { id: "f3", label: "User3:", options: ["Email address only", "Phone number only", "Security questions only", "Phone number and email address"] }
    ],
    answer: { f1: 3, f2: 3, f3: 2 },
    explanation: {
      correct: [
        "The settings you choose for self-service password reset apply to regular users only. For accounts that hold an administrator role, Microsoft enforces its own **two-gate** reset policy, which you cannot change: the administrator must provide two pieces of authentication data, such as an email address, a phone number or the Authenticator app, and security questions are not allowed.",
        "User1 (Global Administrator) and User2 (Billing Administrator) both hold admin roles, so the tenant setting of one method with security questions does not apply to them. Of the choices offered, only **Phone number and email address** gives them the two allowed methods. User3 has no role and follows the tenant policy: one method, and the only method available is security questions, so User3 needs **Security questions only**."
      ],
      wrong: [
        ["User1 or User2: Security questions only", "Security questions cannot be used by administrators under the two-gate policy, whatever the tenant settings say."],
        ["User1 or User2: Email address only or Phone number only", "The administrator policy requires two methods, so a single email address or phone number is not enough."],
        ["User3: Email address only or Phone number only", "For regular users the tenant settings apply, and they allow security questions only. An email address or phone number is not a method User3 can use to reset."]
      ],
      concept: "Administrators always get a two-gate SSPR policy (two methods, no security questions), regardless of the SSPR settings configured for users.",
      takeaway: "SSPR settings you configure apply to regular users; any admin role means two methods and no security questions.",
      refs: [
        ["Microsoft Learn: Password policies and account restrictions in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-policy"],
        ["Microsoft Learn: How self-service password reset works", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-howitworks"]
      ]
    }
  },
  {
    id: "Q172", source: 172, type: "multi",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your on-premises network contains an Active Directory domain.",
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement a hybrid configuration that has the following requirements:",
      { list: [
        "Minimizes the number of times users are prompted for credentials when they access Microsoft 365 resources",
        "Supports the use of Azure AD Identity Protection"
      ] },
      "You need to configure Azure AD Connect to support the planned implementation.",
      "Which two options should you select? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Password Hash Synchronization" },
      { key: "B", text: "Password writeback" },
      { key: "C", text: "Directory extension attribute sync" },
      { key: "D", text: "Enable single sign-on" },
      { key: "E", text: "Pass-through authentication" }
    ],
    answer: ["A", "D"],
    explanation: {
      correct: [
        "**Password hash synchronization** synchronizes a hash of the hash of each user's password to Azure AD (Microsoft Entra ID). Identity Protection depends on it for the leaked credentials detection, which compares credentials found in breaches with the synchronized hashes. With pass-through authentication or federation, no hashes are in the cloud and that detection cannot work.",
        "**Enable single sign-on** turns on Seamless SSO. Users on domain-joined computers on the corporate network are signed in to Microsoft 365 automatically with their Kerberos ticket, without typing their password again, which minimizes the credential prompts. Both options are selected on the User sign-in page of the Azure AD Connect wizard."
      ],
      wrong: [
        ["B", "Password writeback sends password changes made in the cloud, for example through self-service password reset, back to Active Directory. It neither reduces sign-in prompts nor provides the data Identity Protection needs."],
        ["C", "Directory extension attribute sync copies additional, custom Active Directory attributes to Azure AD. It has nothing to do with sign-in or risk detection."],
        ["E", "Pass-through authentication validates passwords against on-premises domain controllers and keeps no password hashes in the cloud, so the leaked credentials detection of Identity Protection is not available."]
      ],
      concept: "Password hash synchronization enables leaked credentials detection in Identity Protection, and Seamless SSO removes password prompts on domain-joined devices.",
      takeaway: "Fewest prompts plus Identity Protection: password hash synchronization with Seamless single sign-on.",
      refs: [
        ["Microsoft Learn: What is password hash synchronization with Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs"],
        ["Microsoft Learn: Microsoft Entra seamless single sign-on", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso"]
      ]
    }
  },
  {
    id: "Q173", source: 173, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Basic",
    stem: [
      "Your network contains an Active Directory domain and an Azure AD tenant.",
      "You implement directory synchronization for all 10,000 users in the organization.",
      "You automate the creation of 100 new user accounts.",
      "You need to ensure that the new user accounts synchronize to Azure AD as quickly as possible.",
      "Which command should you run? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `{{f1}} -PolicyType {{f2}}`,
    fields: [
      { id: "f1", label: "Cmdlet", options: ["Start-ADSyncSyncCycle", "Set-ADSyncScheduler", "Invoke-ADSyncRunProfile"] },
      { id: "f2", label: "Value of -PolicyType", options: ["Delta", "Initial", "Full"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "Azure AD Connect synchronizes on a schedule, every 30 minutes by default. `Start-ADSyncSyncCycle` starts a synchronization cycle immediately, without waiting for the next scheduled run.",
        "With `-PolicyType Delta`, the cycle processes only the changes since the last run, here the 100 new accounts, so it finishes quickly. `-PolicyType Initial` would run a full synchronization and reprocess all 10,000 users, which takes much longer and is only needed after configuration changes such as new filtering or rules."
      ],
      wrong: [
        ["Set-ADSyncScheduler", "This cmdlet changes the settings of the scheduler, such as whether it is enabled or the type of the next cycle. It does not start a synchronization."],
        ["Invoke-ADSyncRunProfile", "This cmdlet runs a single run profile on one connector. A complete synchronization needs several run profiles on each connector in the right order, which the sync cycle does for you."],
        ["Initial", "An initial (full) cycle reprocesses every object in scope. It would include the new accounts, but much more slowly than a delta cycle."],
        ["Full", "`Full` is not a value of `-PolicyType`. The values are `Delta` and `Initial`."]
      ],
      concept: "`Start-ADSyncSyncCycle -PolicyType Delta` runs an immediate delta synchronization; `Initial` runs a full one.",
      takeaway: "New or changed objects now: `Start-ADSyncSyncCycle -PolicyType Delta`. After configuration changes: `-PolicyType Initial`.",
      refs: [
        ["Microsoft Learn: Microsoft Entra Connect Sync: Scheduler", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sync-feature-scheduler"]
      ]
    }
  },
  {
    id: "Q174", source: 174, type: "yesno",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Passwordless capable", "Multi-factor authentication (MFA) method registered"], rows: [
        ["User1", "Group1", "Capable", "Microsoft Authenticator app (push notification)"],
        ["User2", "Group2", "Capable", "Microsoft Authenticator app (push notification)"],
        ["User3", "Group1, Group2", "Capable", "Mobile phone, Windows Hello for Business"]
      ] } },
      "Each user has a device with the Microsoft Authenticator app installed.",
      "From Microsoft Authenticator settings for the subscription, the Enable and Target settings are configured as shown in the exhibit. (Click the Exhibit tab.)",
      { image: "q174-authenticator-settings.png", alt: "Microsoft Authenticator settings, Enable and Target tab. Enable is on. On the Include tab, Target is set to Select groups (not All users), and one group is listed: Group1, type Group, Registration Optional, Authentication mode Passwordless. A banner says that Number Matching will begin to be enabled for all users of the Microsoft Authenticator app starting 27th of February 2023." },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can use number matching during sign-in." },
      { text: "User2 can use number matching during sign-in." },
      { text: "User3 can use number matching during sign-in." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "Number matching is part of Microsoft Authenticator sign-ins: the sign-in screen shows a number and the user enters it in the app to approve. A user can only get these prompts if two things are true: the Authenticator method is enabled for the user in the authentication methods policy, and the user has registered the Authenticator app as a method.",
        "The policy targets **Group1** only. **User1 — Yes:** User1 is in Group1 and has registered the Authenticator app. The authentication mode for Group1 is Passwordless, and phone sign-in with the app also asks the user to match the number shown on the screen; User1 is passwordless capable. **User2 — No:** User2 has the app registered but is only in Group2, which is not targeted, so the Authenticator method is not enabled for User2. **User3 — No:** User3 is in Group1, so the method is enabled, but User3 has registered only a mobile phone and Windows Hello for Business. Having the app installed is not enough, and the registration setting is Optional, so nothing forces User3 to register it."
      ],
      wrong: [
        ["Statement 1 — No", "User1 meets both conditions: member of the targeted Group1 and the Authenticator app registered as an MFA method."],
        ["Statement 2 — Yes", "A registered app does not help when the method is not enabled for the user. Group2 is not included in the policy."],
        ["Statement 3 — Yes", "Being in scope is not enough. User3 has not registered the Authenticator app, so Microsoft Entra ID cannot send it a sign-in request."]
      ],
      concept: "A user can use Microsoft Authenticator, and therefore number matching, only when the method is enabled for the user by the policy target and the user has registered the app.",
      takeaway: "Authenticator questions: check the targeted groups first, then whether the user actually registered the app.",
      refs: [
        ["Microsoft Learn: How number matching works in MFA push notifications for Authenticator", "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-number-match"],
        ["Microsoft Learn: Authentication methods in Microsoft Entra ID - Microsoft Authenticator app", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-authenticator-app"]
      ]
    }
  },
  {
    id: "Q175", source: 175, type: "dropdown",
    domain: "tenant", topic: "Tenant settings and service health", difficulty: "Intermediate",
    caseId: "litware", caseOrder: 3,
    stem: [
      "You need to ensure that the Microsoft 365 incidents and advisories are reviewed monthly.",
      "Which users can review the incidents and advisories, and which blade should the users use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Users:", options: ["Admin1 only", "Admin1 and Admin3 only", "Admin1, Admin2, and Admin3 only", "Admin1, Admin2, Admin3, and Admin4"] },
      { id: "f2", label: "Blade:", options: ["Reports", "Service Health", "Message center"] }
    ],
    answer: { f1: 3, f2: 1 },
    explanation: {
      correct: [
        "In the Microsoft 365 admin center, incidents (service outages or degradation) and advisories (issues with limited impact) are shown on the **Service health** page. The Message center is a different page, for announcements of planned changes and new features.",
        "Viewing service health is not reserved for Global Administrators. Many admin roles include permission to read service health, and that includes all four roles in the Litware case: Admin1 (Global Administrator), Admin2 (Helpdesk Administrator), Admin3 (Security Administrator) and Admin4 (User Administrator). All four admins can therefore review the incidents and advisories each month."
      ],
      wrong: [
        ["Admin1 only", "Global Administrator can view service health, but so can the other three roles in the scenario."],
        ["Admin1 and Admin3 only, or Admin1, Admin2, and Admin3 only", "These leave out admins whose roles also read service health. Helpdesk Administrator and User Administrator both include it."],
        ["Reports", "Reports show usage and activity data, such as active users and email activity, not service incidents."],
        ["Message center", "The Message center announces planned changes, new features and retirements. Incidents and advisories are on Service health."]
      ],
      concept: "Service health in the Microsoft 365 admin center lists incidents and advisories, and many admin roles, not only Global Administrator, can read it.",
      takeaway: "Incidents and advisories: Service health. Planned changes: Message center.",
      refs: [
        ["Microsoft Learn: How to check Microsoft 365 service health", "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"],
        ["Microsoft Learn: Message center", "https://learn.microsoft.com/microsoft-365/admin/manage/message-center"]
      ]
    }
  },
  {
    id: "Q176", source: 176, type: "single",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 tenant that contains a Windows 10 device. The device is onboarded to Microsoft Defender for Endpoint.",
      "From Microsoft 365 Defender portal, you perform a security investigation.",
      "You need to run a PowerShell script on the device to collect forensic information.",
      "Which action should you select on the device page?"
    ],
    options: [
      { key: "A", text: "Collect investigation package" },
      { key: "B", text: "Go hunt" },
      { key: "C", text: "Initiate Live Response Session" },
      { key: "D", text: "Initiate Automated Investigation" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "**Live response** opens a remote shell connection to the device from the device page. In a session you can run commands, upload a PowerShell script to the live response library and run it on the device, collect files, and download the results for forensic analysis.",
        "It is the only device action that lets you run your own script on the device."
      ],
      wrong: [
        ["A", "Collect investigation package gathers a fixed set of forensic data, such as autoruns, running processes, network connections and event logs, into a ZIP file. It does not run a script that you provide."],
        ["B", "Go hunt opens advanced hunting with a query about the device. It queries the data already collected; it does not run anything on the device."],
        ["D", "An automated investigation runs Microsoft's investigation and remediation playbooks on the device. You cannot add your own PowerShell script to it."]
      ],
      concept: "Live response gives analysts a remote shell on an onboarded device to run commands and scripts and to collect forensic data.",
      takeaway: "Run your own PowerShell script on a device during an investigation: Initiate Live Response Session.",
      refs: [
        ["Microsoft Learn: Investigate entities on devices using live response", "https://learn.microsoft.com/defender-endpoint/live-response"]
      ]
    }
  }
);
