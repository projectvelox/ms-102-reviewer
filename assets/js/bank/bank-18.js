/* MS-102 question bank, part 18: questions 273 to 288 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q273", source: 273, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft 365 Defender.",
      "You need to compare your company's security configurations to Microsoft best practices and review improvement actions to increase the security posture.",
      "What should you use?"
    ],
    options: [
      { key: "A", text: "Microsoft Secure Score" },
      { key: "B", text: "Cloud discovery" },
      { key: "C", text: "Exposure distribution" },
      { key: "D", text: "Threat tracker" },
      { key: "E", text: "Exposure score" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Microsoft Secure Score measures the security posture of the organization against a set of recommended configurations defined by Microsoft. It checks the settings of identities, devices, apps and data across the Microsoft 365 services, awards points for every recommendation that is met, and lists the ones that are not met as recommended actions (formerly improvement actions), each with its impact on the score and the steps to implement it.",
        "Comparing your configuration with Microsoft's best practices and working through the actions that raise the posture is exactly what Secure Score is for."
      ],
      wrong: [
        ["B", "Cloud discovery is a feature of Defender for Cloud Apps. It analyzes traffic logs to find the cloud apps that users use (shadow IT). It does not assess the security configuration of the tenant."],
        ["C", "Exposure distribution is a card of the Defender Vulnerability Management dashboard that shows how many devices are at each exposure level. It covers devices only and is not a comparison with best practices for the whole tenant."],
        ["D", "Threat tracker is a set of widgets in Defender for Office 365 Plan 2 that shows information about cybersecurity threats and campaigns. It does not score your configuration."],
        ["E", "The exposure score of Defender Vulnerability Management reflects how vulnerable the organization's devices are to threats and vulnerabilities. It is device-centric; the score that compares the configuration of the Microsoft 365 services to Microsoft's recommendations is Secure Score."]
      ],
      concept: "Microsoft Secure Score measures security posture against Microsoft's recommended configurations and turns the gaps into recommended actions.",
      takeaway: "Compare the tenant's configuration with Microsoft best practices and get improvement actions: Microsoft Secure Score.",
      refs: [["Microsoft Learn: Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score"]]
    }
  },
  {
    id: "Q274", source: 274, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365.",
      "You need to automate Attack simulation training for users when a phishing campaign is detected in real-time.",
      "Which type of automation should you use, and which condition should you configure for the Attack simulation training? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Automation type:", options: ["Fixed simulation automation", "Payload automation", "Randomized simulation automation"] },
      { id: "f2", label: "Condition:", options: ["Credential Harvest", "How-to Guide", "Malware Attachment"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "Attack simulation training has two kinds of automation. Simulation automations launch simulations on a schedule that you define. Payload automations (also called payload harvesting) react to real attacks: they collect the messages and payloads of phishing campaigns that Defender for Office 365 identified in your organization, store them as custom payloads, and use them to launch harmless simulations to the targeted users. Training that follows a campaign detected in real time is therefore a payload automation.",
        "The run conditions of a payload automation describe the real campaign to react to, for example the number of users targeted, the sender, the recipients, or **Campaigns with a specific phish technique**. For a phishing campaign that lures users to a fake sign-in page to steal their credentials, the technique is **Credential Harvest**, which is the condition in the reference answer."
      ],
      wrong: [
        ["Fixed simulation automation / Randomized simulation automation", "Both describe simulation automations, which run simulations on a schedule. They are not triggered by a campaign that is detected in the organization."],
        ["How-to Guide", "How-to Guide is the technique that sends users instructions, such as how to report a phishing message. It does not describe a credential phishing lure."],
        ["Malware Attachment", "This technique describes a campaign that delivers a malicious attachment. The reference answer configures the condition for credential phishing, Credential Harvest."]
      ],
      concept: "Payload automations harvest payloads from real phishing campaigns detected in the organization and launch simulations based on them, filtered by run conditions such as the phish technique.",
      takeaway: "Simulations triggered by real detected campaigns: payload automation. Credential phishing: Credential Harvest.",
      refs: [
        ["Microsoft Learn: Payload automations for Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-payload-automations"],
        ["Microsoft Learn: Simulation automations for Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-simulation-automations"]
      ]
    }
  },
  {
    id: "Q275", source: 275, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have two Microsoft 365 tenants. Users have accounts in both tenants.",
      "You plan to deploy a single device to each user. Each device will contain the Microsoft Authenticator app.",
      "You need to ensure that the users can use their device to authenticate to both tenants by using passwordless authentication.",
      "Which platform should you provide?"
    ],
    options: [
      { key: "A", text: "iOS" },
      { key: "B", text: "Android" },
      { key: "C", text: "Windows" },
      { key: "D", text: "macOS" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The reference answer is A.",
        "Passwordless phone sign-in uses the Microsoft Authenticator app, which runs on iOS and Android. Users who have accounts in several Microsoft Entra tenants can add each account to Authenticator and use passwordless phone sign-in for all of them from one device, provided that the device is registered with each tenant where it is used. Earlier versions of the Microsoft Learn article described this multiple-account capability for iOS devices only, which is the basis of the reference answer; the current article states that it works on any supported Android or iOS device."
      ],
      wrong: [
        ["B", "Android also runs Authenticator. The reference answer chooses iOS, the platform for which multi-account passwordless phone sign-in was documented first."],
        ["C", "The Authenticator app that provides passwordless phone sign-in runs on iOS or Android mobile devices, not on Windows."],
        ["D", "macOS is a desktop platform as well. Passwordless phone sign-in needs Authenticator on an iOS or Android device."]
      ],
      concept: "Passwordless phone sign-in with Microsoft Authenticator works for several accounts, in the same or different tenants, from one mobile device that is registered with each tenant.",
      takeaway: "Authenticator phone sign-in is a mobile-device method (iOS, Android); for accounts in several tenants, the device must be registered with each tenant.",
      refs: [["Microsoft Learn: Passwordless sign-in with Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone"]]
    }
  },
  {
    id: "Q276", source: 276, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain named adatum.com that is synced to a Microsoft Entra tenant.",
      "The domain contains 100 user accounts.",
      "The city attribute for all the users is set to the city where the user resides.",
      "You need to modify the value of the city attribute to the three-letter airport code of each city.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From Windows PowerShell on a domain controller, run the `Get-ADUser` and `Set-ADUser` cmdlets." },
      { key: "B", text: "From Azure Cloud Shell, run the `Get-MgUser` and `Update-MgUser` cmdlets." },
      { key: "C", text: "From the Microsoft Entra admin center, select all the Microsoft Entra users, and then use the User settings blade." },
      { key: "D", text: "From the Microsoft 365 admin center, select the users, and then use the Bulk actions option." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The users are synced from adatum.com, so their source of authority is on-premises Active Directory. The synced attributes, city among them, can only be changed in Active Directory; the sync then writes the new values to Microsoft Entra ID. Changes made on the cloud side to these attributes are refused.",
        "Each of the 100 users needs a different value, the airport code of their own city, so the change is a scripting job: `Get-ADUser` reads the users with their current city, and `Set-ADUser -City` writes the new code for each one, for example from a mapping of city names to codes."
      ],
      wrong: [
        ["B", "Microsoft Graph refuses changes to synced attributes of users whose source of authority is on-premises Active Directory, so `Update-MgUser` cannot change the city of these users."],
        ["C", "The User settings blade holds tenant-wide settings for users, such as whether they can register applications. It does not edit attribute values, and synced attributes cannot be edited in the cloud anyway."],
        ["D", "The users are synced, so their city cannot be edited in the Microsoft 365 admin center, and each user needs a different value rather than one value for all."]
      ],
      concept: "For synced users, on-premises Active Directory is the source of authority: synced attributes are changed there and flow to Microsoft Entra ID through the sync.",
      takeaway: "Change a synced attribute in on-premises AD (`Set-ADUser`), never in the cloud.",
      refs: [
        ["Microsoft Learn: Set-ADUser", "https://learn.microsoft.com/powershell/module/activedirectory/set-aduser"],
        ["Microsoft Learn: What is Microsoft Entra Connect?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-azure-ad-connect"]
      ]
    }
  },
  {
    id: "Q277", source: 277, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to identify all users that have an Enterprise Mobility + Security plan, and then provide a list of the users in the CSV format.",
      "Which settings should you use in the Microsoft 365 admin center, and which option should you select? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Settings:", options: ["Billing accounts", "Bills & payments", "Licenses", "Your products"] },
      { id: "f2", label: "Option:", options: ["Export users", "Show history list", "View apps and services with this subscription"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "**Billing > Licenses** in the Microsoft 365 admin center lists the products the organization has licenses for. Selecting a product, here the Enterprise Mobility + Security plan, shows the users who are assigned a license for it.",
        "From that list, **Export users** downloads the users as a CSV file, which is the list that was asked for."
      ],
      wrong: [
        ["Billing accounts", "Billing accounts holds the billing account details, such as the billing address and the agreements. It does not list license assignments."],
        ["Bills & payments", "Bills & payments shows invoices and payment methods, not which users hold a product."],
        ["Your products", "Your products lists the subscriptions the organization has bought and their settings. The users assigned to a product are listed on the Licenses page."],
        ["Show history list / View apps and services with this subscription", "Neither produces a list of the users who have the license. Viewing the apps and services shows what a subscription includes, not who is assigned it."]
      ],
      concept: "Billing > Licenses shows, for each product, the users who are assigned a license, and can export them.",
      takeaway: "Who has license X, as a CSV: Billing > Licenses > select the product > Export users.",
      refs: [["Microsoft Learn: Assign Microsoft 365 licenses to users", "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"]]
    }
  },
  {
    id: "Q278", source: 278, type: "yesno",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains two administrative units named AU1 and AU2.",
      "The subscription contains the users shown in the following table.",
      { table: {
        head: ["Name", "Administrative unit", "Role", "Scope"],
        rows: [
          ["User1", "None", "User Administrator", "AU1"],
          ["User2", "AU1", "Global Administrator", "None"],
          ["User3", "None", "None", "Organization"]
        ]
      } },
      "The subscription contains the groups shown in the following table.",
      { table: {
        head: ["Name", "Members", "Administrative unit"],
        rows: [
          ["Group1", "User3", "AU2"],
          ["Group2", "User2\nUser3", "AU1"]
        ]
      } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can reset the password of User2." },
      { text: "User2 can modify the membership of Group1." },
      { text: "User1 can reset the password of User3." }
    ],
    answer: [false, true, false],
    explanation: {
      correct: [
        "**Statement 1 — No.** User1 holds User Administrator scoped to AU1, and User2 is a member of AU1, so User2 is inside User1's scope. But User2 is a Global Administrator. A User Administrator can reset the passwords of non-admin users and of users in a small set of less privileged admin roles only; Global Administrator is not one of them, whatever the scope.",
        "**Statement 2 — Yes.** User2's Global Administrator role has no administrative unit scope, so it applies to the whole tenant. Being a member of AU1 does not limit what User2 can do; it only decides which scoped admins can manage User2. User2 can therefore change the membership of Group1, even though Group1 is in AU2.",
        "**Statement 3 — No.** User3 is not a member of any administrative unit. User3 is a member of Group2, which is in AU1, but adding a group to an administrative unit brings only the group itself into the scope (its properties and its membership), not the users in it. User1 can manage Group2, but not reset the password of its members."
      ],
      wrong: [
        ["Statement 1 — Yes", "Tempting because User2 is in AU1, but a User Administrator cannot reset the password of a Global Administrator."],
        ["Statement 2 — No", "Tempting if you read User2's membership of AU1 as a limit. An administrative unit restricts the admins scoped to it, not the members of the unit, and User2's role is tenant-wide."],
        ["Statement 3 — Yes", "Tempting because User3 is in Group2 and Group2 is in AU1. Group membership in an administrative unit does not put the group's members in scope."]
      ],
      concept: "A role scoped to an administrative unit covers the users and groups that are direct members of the unit; a group in the unit does not bring its members into scope, and privileged admins are protected from less privileged roles.",
      takeaway: "AU scope: direct members only. Password reset: a User Administrator never resets a Global Administrator's password.",
      refs: [
        ["Microsoft Learn: Administrative units in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"],
        ["Microsoft Learn: Microsoft Entra built-in roles (who can reset passwords)", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q279", source: 279, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You plan to update the EmployeeType attribute for all the users in a group named Contractors. You retrieve the GroupId value of the Contractors group.",
      "You need to use Microsoft Graph PowerShell to retrieve all the Contractors group users and set their EmployeeType attribute to Part-time.",
      "How should you complete the PowerShell script? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `foreach ($person in $({{f1}} -GroupId "2c5b5f9b-75eb-4e1e-beca-3b4373f7f4f3"))
{ {{f2}} {{f3}} $person.ObjectId -EmployeeType "Part-time"}`,
    fields: [
      { id: "f1", label: "Cmdlet before -GroupId", options: ["Get-AzureADUser", "Get-MgGroupMember", "Get-MgUser"] },
      { id: "f2", label: "Cmdlet inside the script block", options: ["Set-AzureADUser", "Set-MsolUser", "Update-MgUser"] },
      { id: "f3", label: "Parameter before $person.ObjectId", options: ["-DisplayName", "-ObjectID", "-UserId"] }
    ],
    answer: { f1: 1, f2: 2, f3: 2 },
    explanation: {
      correct: [
        "In Microsoft Graph PowerShell, `Get-MgGroupMember -GroupId <id>` returns the members of a group, so the loop runs once for every user in Contractors.",
        "Inside the loop, `Update-MgUser` changes properties of a user. The user to update is identified by the `-UserId` parameter, and `-EmployeeType \"Part-time\"` sets the new value."
      ],
      wrong: [
        ["Get-AzureADUser / Set-AzureADUser / Set-MsolUser", "These cmdlets belong to the AzureAD and MSOnline modules, not to Microsoft Graph PowerShell, which the task requires."],
        ["Get-MgUser", "`Get-MgUser` retrieves users, but it has no `-GroupId` parameter and does not list the members of a group."],
        ["-ObjectID", "`-ObjectId` is the identity parameter of the AzureAD module cmdlets. `Update-MgUser` identifies the user with `-UserId`."],
        ["-DisplayName", "`-DisplayName` sets the display name of the user. It does not identify which user to update."]
      ],
      concept: "Microsoft Graph PowerShell lists group members with `Get-MgGroupMember` and updates user properties with `Update-MgUser -UserId`.",
      takeaway: "Graph PowerShell: `Get-Mg...` to read, `Update-Mg...` to change, and the user is identified with `-UserId`.",
      refs: [
        ["Microsoft Learn: Get-MgGroupMember", "https://learn.microsoft.com/powershell/module/microsoft.graph.groups/get-mggroupmember"],
        ["Microsoft Learn: Update-MgUser", "https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser"]
      ]
    }
  },
  {
    id: "Q280", source: 280, type: "dropdown",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to configure Privileged Identity Management (PIM) for the User Administrator role in Microsoft Entra.",
      "Eligible users must meet the following requirements:",
      { list: [
        "Always be able to request the User Administrator role",
        "Must provide a reason when requesting the User Administrator role",
        "Must require multi-factor authentication (MFA) when activating the User Administrator role"
      ] },
      "The solution must minimize administrative effort.",
      "How should you configure the Role settings for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Always be able to request the User Administrator role:", options: [
        "Select Require approval to activate.",
        "Set Allow permanent active assignment to yes.",
        "Set Allow permanent eligible assignment to yes."
      ] },
      { id: "f2", label: "Must provide a reason when requesting the User Administrator role:", options: [
        "Select Require justification on activation.",
        "Select Require ticket information on activation.",
        "Select Require justification on active assignment to Yes."
      ] },
      { id: "f3", label: "Must require MFA when activating the User Administrator role:", options: [
        "Set On activation require to Azure MFA.",
        "Set On activation require to Microsoft Entra Conditional Access authentication context.",
        "Set Require Azure Multi-Factor Authentication on active assignment to Yes."
      ] }
    ],
    answer: { f1: 2, f2: 0, f3: 0 },
    explanation: {
      correct: [
        "PIM role settings have an Assignment part, which governs how admins assign the role, and an Activation part, which governs what an eligible user must do to activate it. An eligible user can request (activate) the role for as long as the eligible assignment lasts. **Allow permanent eligible assignment** lets the eligible assignments never expire, so the users can always request the role.",
        "The other two requirements apply at activation. **Require justification on activation** makes the user enter a reason before the activation request can be submitted, and **On activation, require: Azure MFA** makes the user pass multifactor authentication when activating. Both are single settings of the role, which keeps the administrative effort low."
      ],
      wrong: [
        ["Select Require approval to activate.", "Approval adds an approver to every activation. It does not keep the users eligible, and it adds work."],
        ["Set Allow permanent active assignment to yes.", "A permanent active assignment gives the role all the time, without any request, which defeats just-in-time access and least privilege."],
        ["Select Require ticket information on activation.", "This asks for a ticket number and ticket system, not a reason."],
        ["Select Require justification on active assignment to Yes.", "This applies when an administrator makes an active assignment, not when an eligible user activates the role."],
        ["Set On activation require to Microsoft Entra Conditional Access authentication context.", "An authentication context also needs a Conditional Access policy that requires MFA for it, which is more administrative effort than the built-in Azure MFA setting."],
        ["Set Require Azure Multi-Factor Authentication on active assignment to Yes.", "This requires MFA from the administrator who makes an active assignment, not from the user who activates the role."]
      ],
      concept: "PIM role settings separate assignment settings (duration of eligible and active assignments, MFA and justification for active assignments) from activation settings (MFA or authentication context, justification, ticket, approval).",
      takeaway: "Always eligible: permanent eligible assignment. At activation: Require justification on activation and On activation require Azure MFA.",
      refs: [["Microsoft Learn: Configure Microsoft Entra role settings in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"]]
    }
  },
  {
    id: "Q281", source: 281, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a Conditional Access policy that will require the use of FIDO2 security keys only when users join their Windows devices to Microsoft Entra ID.",
      "How should you configure the policy? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Target resources:", options: ["Authentication context", "Cloud apps", "User actions"] },
      { id: "f2", label: "Conditions:", options: ["Device platforms", "Sign-in risk", "User risk"] },
      { id: "f3", label: "Grant access:", options: ["Require authentication strength", "Require device to be marked as compliant", "Require multi-factor authentication"] }
    ],
    answer: { f1: 2, f2: 0, f3: 0 },
    explanation: {
      correct: [
        "Conditional Access can target two user actions instead of apps: **Register security information** and **Register or join devices**. A policy that applies only when users join devices to Microsoft Entra ID therefore targets the **User actions** resource with Register or join devices.",
        "The **Device platforms** condition limits the policy to Windows devices. For the grant control, a policy with this user action offers only Require multifactor authentication and Require authentication strength. Generic MFA would accept any second factor; **Require authentication strength** with a strength that allows only FIDO2 security keys forces the use of a key."
      ],
      wrong: [
        ["Authentication context", "Authentication context protects sensitive data or actions inside applications, such as a labeled SharePoint site or PIM activation. It does not represent joining a device."],
        ["Cloud apps", "Targeting apps applies the policy to sign-ins to those apps, not to the act of registering or joining a device."],
        ["Sign-in risk / User risk", "Risk conditions apply a policy based on Identity Protection's assessment. The requirement has nothing to do with risk; it is about the device platform."],
        ["Require device to be marked as compliant", "This control is not available for the Register or join devices action, since the device is not registered yet, and it would not require a FIDO2 key."],
        ["Require multi-factor authentication", "MFA is satisfied by any registered second factor, so it would not enforce FIDO2 security keys specifically."]
      ],
      concept: "The Register or join devices user action lets Conditional Access control device registration and join, with Require MFA or Require authentication strength as the only grant controls.",
      takeaway: "Control device join: User actions > Register or join devices. Require a specific method such as FIDO2: authentication strength.",
      refs: [
        ["Microsoft Learn: Targeting resources in Conditional Access policies (user actions)", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"],
        ["Microsoft Learn: Conditional Access authentication strengths", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"]
      ]
    }
  },
  {
    id: "Q282", source: 282, type: "single",
    domain: "tenant", topic: "Domains and DNS", difficulty: "Basic",
    caseId: "fabrikam", caseOrder: 8,
    stem: [
      "You are evaluating the required processes for Project1.",
      "You need to recommend which DNS record must be created while adding a domain name for the project.",
      "Which DNS record should you recommend?"
    ],
    options: [
      { key: "A", text: "name server (NS)" },
      { key: "B", text: "host information (HINFO)" },
      { key: "C", text: "text (TXT)" },
      { key: "D", text: "pointer (PTR)" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "In Project1 the mailboxes of 100 sales users move to Microsoft 365, and all users must keep exchanging email with their current address. The fabrikam.com domain must therefore be added to the Microsoft 365 subscription as a custom domain.",
        "When you add a domain, Microsoft 365 asks you to prove that you own it by creating a TXT record with a value it gives you (MS=ms...) in the public DNS zone. For Fabrikam, the public zone is managed by an external DNS server, so the TXT record is created there. The record affects nothing else; once the domain is verified, it can be used with Microsoft 365."
      ],
      wrong: [
        ["A", "NS records delegate the zone to name servers. Changing them would hand DNS hosting over to another provider, which is not needed to verify the domain."],
        ["B", "HINFO records describe the hardware and operating system of a host. Microsoft 365 does not use them."],
        ["D", "PTR records map an IP address to a name for reverse lookups. They are not used to verify a domain."]
      ],
      concept: "Microsoft 365 verifies ownership of a custom domain through a TXT record that you create in the domain's public DNS zone.",
      takeaway: "Adding a domain to Microsoft 365: create the TXT verification record first, then the service records.",
      refs: [["Microsoft Learn: Add a domain to Microsoft 365", "https://learn.microsoft.com/microsoft-365/admin/setup/add-domain"]]
    }
  },
  {
    id: "Q283", source: 283, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "From the Microsoft 365 Defender portal, you review your company's Microsoft Secure Score.",
      "You discover a large number of recommended actions.",
      "You need to ensure that the actions can be filtered based on specific department names.",
      "What should you create first?"
    ],
    options: [
      { key: "A", text: "a dynamic security group" },
      { key: "B", text: "a tag" },
      { key: "C", text: "an administrative unit" },
      { key: "D", text: "a custom detection rule" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "On the **Recommended actions** tab of Microsoft Secure Score you can search, filter and group the actions. You can also add your own tags to a recommended action, and then filter the list by those tags.",
        "Creating a tag for each department name, such as Finance or Sales, and adding it to the relevant actions is what makes the list filterable by department. Once a tag exists on an action, it appears as a filter value."
      ],
      wrong: [
        ["A", "A dynamic security group groups users or devices by their attributes. It does not label or filter Secure Score recommended actions."],
        ["C", "An administrative unit limits the scope of admin roles in Microsoft Entra ID. It has no effect on how Secure Score actions are filtered."],
        ["D", "A custom detection rule runs an advanced hunting query on a schedule to raise alerts. It has nothing to do with organizing recommended actions."]
      ],
      concept: "Secure Score recommended actions can carry custom tags, and the list can be filtered by those tags.",
      takeaway: "Organize Secure Score actions by your own categories: add tags, then filter by tag.",
      refs: [["Microsoft Learn: Assess your security posture through Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score-improvement-actions"]]
    }
  },
  {
    id: "Q284", source: 284, type: "single",
    domain: "security", topic: "Intune and device compliance", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.",
      { table: {
        head: ["Name", "Platform"],
        rows: [
          ["Device1", "Windows 11"],
          ["Device2", "Linux"],
          ["Device3", "MacOS"]
        ]
      } },
      "You plan to create an Endpoint security policy by using the Defender Update controls template.",
      "To which devices can you apply the policy?"
    ],
    options: [
      { key: "A", text: "Device1 only" },
      { key: "B", text: "Device1 and Device2 only" },
      { key: "C", text: "Device1 and Device3 only" },
      { key: "D", text: "Device1, Device2, and Device3" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Endpoint security antivirus policies are created for a platform, and each platform offers its own profile templates. **Defender Update controls** is a profile of the Windows platform: it manages the update channels of Microsoft Defender Antivirus (engine, platform and security intelligence updates) on Windows devices.",
        "Of the three devices only Device1 runs Windows, so it is the only device the policy can apply to. Linux and macOS devices have their own antivirus profiles, such as Microsoft Defender Antivirus and the antivirus exclusions profile, but not Defender Update controls."
      ],
      wrong: [
        ["B", "Device2 runs Linux. The Defender Update controls profile is not available for the Linux platform."],
        ["C", "Device3 runs macOS. The Defender Update controls profile is not available for the macOS platform."],
        ["D", "Only the Windows device can receive a policy built from this Windows profile."]
      ],
      concept: "Endpoint security profiles are platform-specific; Defender Update controls belongs to the Windows antivirus profiles.",
      takeaway: "Defender Update controls: Windows devices only.",
      refs: [["Microsoft Learn: Manage antivirus settings with endpoint security policies in Microsoft Intune", "https://learn.microsoft.com/intune/device-configuration/endpoint-security/antivirus"]]
    }
  },
  {
    id: "Q285", source: 285, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 tenant.",
      "You plan to manage incidents in the tenant by using the Microsoft Defender XDR.",
      "Which Microsoft service source will appear on the Incidents page of the Microsoft 365 Defender portal?"
    ],
    options: [
      { key: "A", text: "Microsoft Sentinel" },
      { key: "B", text: "Microsoft Defender for Cloud" },
      { key: "C", text: "Azure Web Application Firewall" },
      { key: "D", text: "Microsoft Defender for Identity" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Microsoft Defender XDR (formerly Microsoft 365 Defender) correlates the alerts of its own workloads into incidents: Defender for Endpoint, Defender for Office 365, Defender for Identity, Defender for Cloud Apps and others. Each incident shows the service sources of its alerts, and the Incidents page can be filtered by service source.",
        "Defender for Identity, which monitors on-premises Active Directory signals to detect identity attacks, is one of these built-in workloads, so its alerts appear as a service source in the incidents without any extra integration."
      ],
      wrong: [
        ["A", "Microsoft Sentinel is a separate SIEM with its own incidents. It is not a Microsoft 365 Defender workload, although it can be connected to the Defender portal through a separate integration."],
        ["B", "Microsoft Defender for Cloud protects Azure, hybrid and multicloud workloads. It is not one of the Microsoft 365 Defender workloads; its alerts reach the Defender portal only through a separate integration."],
        ["C", "Azure Web Application Firewall protects web applications at the network edge. Its logs go to Azure Monitor and can feed a SIEM, but it is not a Defender XDR service source."]
      ],
      concept: "Defender XDR incidents combine the alerts of the Defender workloads, such as Defender for Endpoint, Office 365, Identity and Cloud Apps.",
      takeaway: "Defender XDR service sources are the Defender workloads; Defender for Identity is one of them.",
      refs: [
        ["Microsoft Learn: Incidents and alerts in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/incidents-overview"],
        ["Microsoft Learn: What is Microsoft Defender XDR?", "https://learn.microsoft.com/defender-xdr/microsoft-365-defender"]
      ]
    }
  },
  {
    id: "Q286", source: 286, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You are creating a data loss prevention (DLP) policy applied to the locations as shown in the following exhibit.",
      { image: "q286-dlp-locations.png", alt: "DLP policy locations. Selected: Exchange email (scope All groups), SharePoint sites (All sites), OneDrive accounts (All users & groups), Teams chat and channel messages (All users & groups), Microsoft Defender for Cloud Apps (All instances) and On-premises repositories (All repositories). Not selected: Power BI workspaces (Turn on location to scope)." },
      "Which condition can you use in the DLP rules of the policy?"
    ],
    options: [
      { key: "A", text: "sensitive info types" },
      { key: "B", text: "sensitivity labels" },
      { key: "C", text: "keywords" },
      { key: "D", text: "content search queries" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The conditions offered in a DLP rule depend on the locations of the policy: when several locations are selected, only the conditions that all of them support are available, and a location that does not support a way of defining content removes it for the whole policy.",
        "**Content contains** sensitive information types is supported in every location, including Teams chat and channel messages and on-premises repositories. So with the six locations of the exhibit, sensitive info types can be used in the rules."
      ],
      wrong: [
        ["B", "Content defined by sensitivity labels is not supported for Teams chat and channel messages or for on-premises repositories. Both are selected, so the sensitivity label condition is not available in this policy."],
        ["C", "Keywords are not a separate DLP rule condition that works across these locations. Keyword matching is part of the definition of a sensitive information type, such as a keyword list or dictionary."],
        ["D", "Content search queries belong to eDiscovery and Content search. DLP rules do not use them as conditions."]
      ],
      concept: "A DLP policy offers only the conditions that all of its locations support, and sensitive information types are supported in every location.",
      takeaway: "Policy that includes Teams chat or on-premises repositories: detect content with sensitive info types, not sensitivity labels.",
      refs: [["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"]]
    }
  },
  {
    id: "Q287", source: 287, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to implement a passwordless authentication solution that supports the following device types:",
      { list: ["Windows", "Android", "iOS"] },
      "The solution must use the same authentication method for all devices.",
      "Which authentication method should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Authentication app" },
      { key: "B", text: "Voice call" },
      { key: "C", text: "multi-factor authentication (MFA)" },
      { key: "D", text: "Windows Hello for Business" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Passwordless phone sign-in with the Microsoft Authenticator app (printed here as the Microsoft Authentication app) replaces the password with a key-based credential tied to the user's phone and unlocked with a PIN or biometric. The app runs on Android and iOS, and the sign-in can be started on any device platform: when the user signs in from a Windows computer, an Android device or an iPhone, they approve the request in Authenticator.",
        "One method thus covers all three device types, which is what the requirement asks for."
      ],
      wrong: [
        ["B", "A voice call is a second factor used with a password or for SSPR. It is not a passwordless method."],
        ["C", "MFA is the requirement to use more than one factor, not an authentication method. It usually still includes a password."],
        ["D", "Windows Hello for Business is passwordless but only on Windows devices, so it cannot be the same method on Android and iOS."]
      ],
      concept: "Microsoft Authenticator provides passwordless phone sign-in that works for sign-ins from any device platform, approved on an Android or iOS phone.",
      takeaway: "One passwordless method across Windows, Android and iOS: Microsoft Authenticator. Windows Hello for Business is Windows only.",
      refs: [
        ["Microsoft Learn: Passwordless sign-in with Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone"],
        ["Microsoft Learn: Passwordless authentication options for Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"]
      ]
    }
  },
  {
    id: "Q288", source: 288, type: "dropdown",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two groups named Group1 and Group2.",
      "You plan to configure a data loss prevention (DLP) strategy that meets the following requirements:",
      { list: [
        "Members of Group1 must be prevented from sharing documents that contain credit card numbers.",
        "Members of Group2 must be prevented from sharing documents that are classified as internal by Microsoft Purview Information Protection.",
        "The solution must minimize administrative effort."
      ] },
      "You need to create a DLP policy for each group.",
      "Which condition should you add to each DIP policy rule for each group? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Group1:", options: [
        "Select Document name contains words or phrases.",
        "Select Document property is.",
        "Set Content contains to Sensitive info types.",
        "Set Content contains to Sensitivity labels."
      ] },
      { id: "f2", label: "Group2:", options: [
        "Select Document name contains words or phrases.",
        "Select Document property is.",
        "Set Content contains to Sensitive info types.",
        "Set Content contains to Sensitivity labels."
      ] }
    ],
    answer: { f1: 2, f2: 3 },
    explanation: {
      correct: [
        "**Group1:** credit card numbers are detected by content inspection. Microsoft Purview has a built-in Credit Card Number sensitive information type, so the rule uses **Content contains > Sensitive info types** with that type, with nothing to build.",
        "**Group2:** documents classified as internal by Microsoft Purview Information Protection carry the Internal sensitivity label. A DLP rule can use **Content contains > Sensitivity labels** and select that label, which matches every document that carries it, whatever its content."
      ],
      wrong: [
        ["Select Document name contains words or phrases.", "This matches file names, not content or classification. A document that contains credit card numbers or carries the Internal label can have any name."],
        ["Select Document property is.", "This condition matches custom document properties, which you would have to define and populate first. That is more effort, and it is not how Purview classification or credit card detection works."],
        ["Group1 — Sensitivity labels", "Credit card numbers are found by a sensitive information type; a label only reflects a classification that someone or something has applied."],
        ["Group2 — Sensitive info types", "The requirement is about documents already classified as internal, which is a sensitivity label, not a pattern in the content."]
      ],
      concept: "DLP rules can detect content by sensitive information type (patterns such as credit card numbers) or by sensitivity label (an applied classification).",
      takeaway: "Pattern in the content: sensitive info type. Classification already applied: sensitivity label.",
      refs: [
        ["Microsoft Learn: Data loss prevention policy reference", "https://learn.microsoft.com/purview/dlp-policy-reference"],
        ["Microsoft Learn: Use sensitivity labels as conditions in DLP policies", "https://learn.microsoft.com/purview/dlp-sensitivity-label-as-condition"]
      ]
    }
  }
);
