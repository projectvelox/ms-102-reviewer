/* MS-102 question bank, part 27: questions 417 to 432 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q417", source: 417, type: "simulation",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to create a sensitive information type (SIT) named SIT1. The solution must use a keyword dictionary named Dictionary1 that contains the words contoso and confidential."
    ],
    solution: [
      { heading: "Create a custom SIT from scratch" },
      "Use the following procedure to fully define a brand new sensitive information type.",
      "Step 1: Sign in to the Microsoft Purview portal.",
      "Step 2: In the Microsoft Purview portal, navigate to Information Protection > Classifiers > Sensitive info types and choose Create sensitive info type",
      "Step 3: Fill in values for Name and Description and choose Next.\nName: SIT1",
      "Step 4: Choose Create pattern. You can create multiple patterns, each with different elements and confidence levels, as you define your new sensitive information type. [Skip]",
      "Step 5: Choose the default confidence level for the pattern. The values are Low confidence, Medium confidence, and High confidence. [Skip]",
      "Step 6: Choose and define the Primary element. The primary element can be a Regular expression with an optional validator, a Keyword list, a Keyword dictionary, or one of the preconfigured Functions.",
      "Select Keyword dictionary: Dictionary1\nAdd the words contoso and confidential to the Keyword dictionary.",
      "Step 7: Fill in a value for Character proximity. [SKIP]",
      "Step 8: (Optional) Add supporting elements if you have any. Supporting elements can be a regular expression with an optional validator, a keyword list, a keyword dictionary or one of the predefined functions. Supporting elements can have their own Character proximity configuration. [SKIP]",
      "Step 9: (Optional) Add any additional checks from the list of available checks. [SKIP]",
      "Step 10: Choose Create.",
      "Step 11: Choose Next.",
      "Step 12: Choose the recommended confidence level for this sensitive information type.",
      "Step 13: Check your settings and choose Save."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Custom sensitive information types are created in the Microsoft Purview portal under **Information Protection > Classifiers > Sensitive info types > Create sensitive info type**. After the name (SIT1) and an optional description, you define a pattern, and every pattern has one primary element: a regular expression, a keyword list, a keyword dictionary or a function. In the pattern you choose **Add primary element > Keyword dictionary**. The **Add a keyword dictionary** flyout lets you upload a TXT or CSV file, choose an existing dictionary, or create a new one by giving it a name (Dictionary1) and typing the keywords, here contoso and confidential.",
        "Character proximity, supporting elements and additional checks only refine the detection, which is why the reference steps skip them. After **Create** and **Next** you pick the recommended confidence level, check the summary and save. SIT1 then appears in the list of sensitive info types and can be used in DLP policies, auto-labeling policies and retention label policies like a built-in type."
      ],
      wrong: [
        ["Keyword list as the primary element", "A keyword list is typed into one pattern of one sensitive information type. The task names a keyword dictionary, Dictionary1, which is a separate named object that can hold a large word list and be chosen again from existing dictionaries."]
      ],
      concept: "A custom sensitive information type consists of patterns; each pattern has a primary element (regex, keyword list, keyword dictionary or function), optional supporting elements and a confidence level.",
      takeaway: "Purview > Information Protection > Classifiers > Sensitive info types > Create; in the pattern, add the primary element Keyword dictionary and create the dictionary with its keywords.",
      refs: [
        ["Microsoft Learn: Create custom sensitive information types in the Microsoft Purview portal", "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"],
        ["Microsoft Learn: Create a keyword dictionary", "https://learn.microsoft.com/purview/sit-create-a-keyword-dictionary"]
      ]
    }
  },
  {
    id: "Q418", source: 418, type: "simulation",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You plan to create 100 new users that will have the city attribute set to New York.",
      "You need to ensure that the new users are licensed automatically for Microsoft Power Apps for Developer."
    ],
    solution: [
      { heading: "Microsoft 365 portal Create security Group, add users, assign license" },
      { heading: "Group-Based Licensing (Recommended for large organizations)" },
      "If your subscription includes Microsoft Entra ID P1 or a higher version, you can use group-based licensing for automatic license assignment.",
      "Create a Group: In Microsoft Entra ID, create a security group and add the users you want to have the Microsoft 365 license.",
      "Assign License to Group: Assign the desired license to the group.",
      "Automatic Assignment: Microsoft Entra ID will automatically assign the license to all members of the group. Any new members who join the group will also receive the license, and it will be removed when they leave.",
      "Step 1: Create a Security Group\nGo to the Microsoft 365 admin center at https://admin.microsoft.com/.\nIn the navigation menu, select Groups > Active groups.\nSelect Add a group.\nChoose Security as the group type and click Next.\nFill in the group's Name, Description, and select a Membership type (assign owners and members manually or use dynamic membership).\nClick Create group.",
      "Step 2: Add Users to the Security Group\nYou can add users either when creating the group or by going to the group's properties later.\nGo to Groups > Active groups in the admin center.\nSelect the security group you want to add users to.\nSelect the Members tab.\nSelect Add members and search for the users you want to add to the group.\nSelect Add to add them to the group.",
      "Step 3: Assign the Microsoft 365 License to the Group\nIn the admin center, go to Billing > Licenses.\nSelect the product (license) that you want to assign to the group. [Select the Microsoft Power Apps for Developer license]",
      "Select the Groups tab in the details pane.\nSelect Assign licenses.\nSearch for your security group and select it from the suggested groups.\nIn the details panel for the group, select the apps and services you want to enable for this group's members.\nSelect Assign and then Close.",
      "Incorrect:",
      "* Add and License Users Individually (for small batches)\nThis method is best for adding a few users at a time.\n1. Log in: Sign in to the Microsoft 365 admin center with your administrator credentials.\n2. Add User: On the Users tab, select Add user to create an individual user account.\n3. Fill User Information: Complete the necessary user details.\n4. Assign License: During the user creation process, you will have the option to assign a license.\n5. Assign Licenses for Small Groups: For small groups (up to 20 users), you can also go to Billing > Licenses, select a license, and then assign it to the users you want to add."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Group-based licensing assigns a license to a group, and Microsoft Entra ID (formerly Azure AD) then gives that license to every member, to each user who joins later, and removes it from users who leave. The users do not exist yet, so the group has to find them by itself: a security group with dynamic membership (membership type **Dynamic User**) and the rule `user.city -eq \"New York\"` adds every account whose City attribute is New York as soon as it is created. Dynamic groups and group-based licensing both need Microsoft Entra ID P1 or higher.",
        "The license is then assigned to the group, for example in the Microsoft 365 admin center under **Billing > Licenses**, by choosing the Microsoft Power Apps for Developer product and assigning it to the group. When the 100 users are created with City set to New York, each one joins the group and receives the license with no further action."
      ],
      wrong: [
        ["Licensing each user while creating it", "This works, but it is a manual step for each of the 100 accounts, which is what the reference steps list as the incorrect approach. Nothing would license the accounts automatically."],
        ["A group with assigned membership", "A group whose members are added by hand only licenses the users someone adds. New accounts are not added on their own, so they would not get the license automatically."]
      ],
      concept: "Group-based licensing combined with a dynamic membership rule licenses users automatically from their attributes.",
      takeaway: "Licenses by attribute: dynamic security group with a rule such as `user.city -eq \"New York\"`, license assigned to the group.",
      refs: [
        ["Microsoft Learn: Assign or unassign licenses to a group in the Microsoft 365 admin center", "https://learn.microsoft.com/entra/identity/users/licensing-admin-center"],
        ["Microsoft Learn: Manage rules for dynamic membership groups in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/users/groups-dynamic-membership"]
      ]
    }
  },
  {
    id: "Q419", source: 419, type: "simulation",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to disable the Yammer Enterprise service plan for a user named Johanna Lorenz. The solution must NOT affect any other Microsoft 365 service plans."
    ],
    solution: [
      "To disable a service plan for a Microsoft 365 user, go to the Microsoft 365 admin center, navigate to Users > Active users, select the user, and then go to the Licenses and apps tab. In the Apps section, uncheck the box for the specific service plan you want to disable and then save the changes.",
      "Step-by-step guide:",
      "Step 1: Sign in to the Microsoft 365 admin center: Open your web browser and go to https://admin.microsoft.com.",
      "Step 2: Navigate to Active users: In the left-hand navigation pane, under the Users tab, click on Active users.",
      "Step 3: Select the user: Click on the name of the user for whom you want to disable a service plan. [Select Johanna Lorenz]",
      "Step 4: Go to Licenses and apps: In the user's details pane that appears, find and click on the Licenses and apps tab.",
      "Step 5: Uncheck the service plan: Expand the Apps section. You will see a list of all available apps and services within the user's license. Find the specific service plan (e.g., \"Places Enhanced\") and uncheck the box next to it to disable it. [Uncheck the Yammer Enterprise service plan]",
      "Step 6: Save changes: Click the Save button to apply the changes."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "A license is a bundle of service plans, the apps and services shown under **Apps** on a user's **Licenses and apps** tab in the Microsoft 365 admin center. Clearing the check box of one service plan turns off only that service for the user, while the license itself and all its other service plans stay assigned. For Johanna Lorenz you open **Users > Active users**, select her, open **Licenses and apps**, expand **Apps**, clear **Yammer Enterprise** and select **Save changes**.",
        "Yammer is now called Viva Engage, but the service plan in many licenses is still listed as Yammer Enterprise. The change can be made on the user when the license is assigned to her directly; a license she inherits from a group is changed in the group's license assignment."
      ],
      wrong: [
        ["Unassigning the license", "Removing the whole license would also remove every other service plan it contains, such as Exchange Online, SharePoint and Teams, which the task does not allow."]
      ],
      concept: "Service plans inside a license can be turned off one by one for a user without removing the license.",
      takeaway: "Disable one app for one user: Active users > user > Licenses and apps > Apps > clear the service plan > Save changes.",
      refs: [
        ["Microsoft Learn: Assign or unassign licenses for users in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"],
        ["Microsoft Learn: Disable access to Microsoft 365 services with PowerShell", "https://learn.microsoft.com/microsoft-365/enterprise/disable-access-to-services-with-microsoft-365-powershell"]
      ]
    }
  },
  {
    id: "Q420", source: 420, type: "simulation",
    domain: "identity", topic: "External collaboration", difficulty: "Basic",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "Your company recently partnered with another company named Contoso, Ltd.",
      "You need to invite an external user named user1@contoso.com to your organization."
    ],
    solution: [
      "To invite an external user to your Microsoft 365 environment, navigate to the Microsoft Entra admin center, go to Identity > Users > All users, then select New user > Invite External User. Enter the external user's email address and any other required details, then send the invitation. The user will receive an email and must accept the invitation to gain access to your Microsoft 365 portal, where they can then log in.",
      "Steps to invite an external user:",
      "Step 1: Sign in: to the Microsoft Entra admin center.",
      "Step 2: In the left-hand navigation pane, go to Identity > Users > All users.",
      { image: "q420-entra-all-users.png", alt: "Microsoft Entra admin center, Users page, with All users selected and highlighted in the left pane. The toolbar shows New user, Download users, Bulk operations, Refresh, Manage view, Delete and Per-user MFA. The user list, filtered on contoso, shows 274 users found with their display name, user principal name, user type Member and on-premises sync No." },
      "Step 3: Select New user from the top menu, then select Invite External User.",
      { image: "q420-new-user-invite-external.png", alt: "Microsoft Entra admin center, Users page, with the New user menu open. It offers Create new user (Create a new internal user in your organization) and Invite external user (Invite an external user to collaborate with your organization), which is highlighted." },
      "Step 4: Enter: the external user's email address and any other basic information required. [Enter user1@contoso.com]",
      "Step 5: Select: any other settings as needed, such as assigning roles or groups. [Skip]",
      "Step 6: Send: the invitation.\nThe external user will receive an email invitation.\nThe user must accept the invitation: to access your Microsoft 365 portal."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Inviting a person from another organization is Microsoft Entra B2B collaboration. In the Microsoft Entra admin center you open **Users > All users**, select **New user > Invite external user**, enter the email address user1@contoso.com, optionally a display name, a personal message, groups or roles, and select **Review + invite** and then **Invite**.",
        "The invitation creates a user object with the user type Guest in your directory and sends an invitation email. User1 keeps signing in with the Contoso account; after accepting the invitation (redemption), User1 can reach the resources that are shared with the guest account. The external collaboration settings of the tenant must allow the admin to invite guests, which they do by default."
      ],
      wrong: [
        ["Create new user", "Create new user makes an internal member account with a password in your own tenant. An external partner keeps their own Contoso identity and is invited as a guest instead."]
      ],
      concept: "Microsoft Entra B2B collaboration invites external users as guest accounts that authenticate with their own organization's identity.",
      takeaway: "External partner: Entra admin center > Users > New user > Invite external user, then the guest redeems the invitation.",
      refs: [
        ["Microsoft Learn: Quickstart: Add a guest user and send an invitation", "https://learn.microsoft.com/entra/external-id/b2b-quickstart-add-guest-users-portal"],
        ["Microsoft Learn: B2B collaboration overview", "https://learn.microsoft.com/entra/external-id/what-is-b2b"]
      ]
    }
  },
  {
    id: "Q421", source: 421, type: "simulation",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to enforce multi-factor authentication (MFA) for a group named sg-Operations for when they access Microsoft admin portals. The solution must NOT affect any other access."
    ],
    solution: [
      { heading: "Require multifactor authentication for admins accessing Microsoft admin portals" },
      { heading: "Create a Conditional Access policy" },
      "Step 1: Sign in to the Microsoft Entra admin center as at least a Conditional Access Administrator.",
      "Step 2: Browse to Entra ID > Conditional Access > Policies.",
      "Step 3: Select New policy.",
      "Step 4: Give your policy a name. We recommend that organizations create a meaningful standard for the names of their policies.",
      "Step 5: Under Assignments, select Users or workload identities.\n5a. Under Include, select Directory roles and choose at least the previously listed roles.\n[Select sg-Operations]",
      "5b. Under **Exclude**, select **Users and groups** and choose your organization's emergency access or break-glass accounts.",
      "Step 6: Under Target resources > Resources (formerly cloud apps) > Include, Select resources, select Microsoft Admin Portals.",
      "Step 7: Under Access controls > Grant, select Grant access, Require authentication strength, select Multifactor authentication, then select Select.",
      "Step 8: Confirm your settings and set Enable policy to Report-only.",
      "Step 9: Select Create to create to enable your policy."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "A Conditional Access policy applies its grant controls only to the users and resources it targets, which is how MFA can be required for one group in one place. Under **Users**, include the sg-Operations group (**Select users and groups > Users and groups**) and exclude the emergency access accounts. Under **Target resources**, select only **Microsoft Admin Portals**, the resource that groups Microsoft's admin portals, such as the Microsoft 365 admin center, the Exchange admin center and the Azure portal. Under **Grant**, select **Grant access** with **Require authentication strength > Multifactor authentication** (or **Require multifactor authentication**). Sign-ins of other users, and sign-ins of sg-Operations to any other app, are not affected.",
        "With **Enable policy** set to **Report-only**, as in step 8, the policy is evaluated and its result recorded in the sign-in logs without being enforced; Microsoft recommends this to check the impact first. MFA is enforced once **Enable policy** is set to **On**."
      ],
      wrong: [
        ["Per-user MFA or Security defaults", "Both require MFA for every sign-in of the users concerned, or for the whole tenant, not only for the admin portals, so they would affect other access."],
        ["Target resources: All resources", "MFA would then be required for every cloud app that sg-Operations uses, not only for the admin portals."]
      ],
      concept: "Conditional Access combines assignments (users, target resources, conditions) with access controls, so MFA can be required for a specific group on specific resources.",
      takeaway: "MFA for one group on admin portals only: CA policy, include the group, target Microsoft Admin Portals, grant with MFA, policy On.",
      refs: [
        ["Microsoft Learn: Require MFA for administrators accessing Microsoft admin portals", "https://learn.microsoft.com/entra/identity/conditional-access/policy-old-require-mfa-admin-portals"],
        ["Microsoft Learn: Conditional Access target resources", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"]
      ]
    }
  },
  {
    id: "Q422", source: 422, type: "simulation",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Basic",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to ensure that a user named Adele Vance is eligible to request elevation to use the Intune Administrator role."
    ],
    solution: [
      { heading: "Assign Microsoft Entra roles in Privileged Identity Management" },
      "Privileged Role Administrators can make users eligible for Microsoft Entra admin roles. An eligible administrator can activate the role when they need it, and then their permissions expire once they're done.",
      { heading: "Assign a role" },
      "Follow these steps to make a user eligible for a Microsoft Entra admin role.",
      "Step 1: Sign in to the Microsoft Entra admin center as at least a Privileged Role Administrator.",
      "Step 2: Browse to ID Governance > Privileged Identity Management > Microsoft Entra roles.",
      "Step 3: Select Roles to see the list of roles for Microsoft Entra permissions.",
      { image: "q422-pim-roles.png", alt: "Privileged Identity Management, Contoso | Roles page for Microsoft Entra roles. Roles is selected and highlighted under Manage, and Add assignments is highlighted on the toolbar. The list shows each role with its description and its numbers of active and eligible assignments, starting with Application Administrator, Application Developer and Attack Payload Author." },
      "Step 4: Select Add assignments to open the Add assignments page.",
      "Step 5: Select Select a role to open the Select a role page.",
      { image: "q422-select-role.png", alt: "Add assignments page, Membership tab: Resource Contoso, Resource type Directory, and the Select role drop-down (highlighted) open with a search box and a list of roles from Application Administrator to Attribute Definition Administrator. The Next button is highlighted." },
      "Step 6: Select a role you want to assign, select a member to whom you want to assign to the role, and then select Next.",
      "[Select Intune Administrator role]",
      "[Select Adele Vance]",
      "Step 7: In the Assignment type list on the Membership settings pane, select Eligible or Active. [Select Eligible]",
      "Eligible assignments require the member of the role to perform an action to use the role. Actions might include performing a multifactor authentication (MFA) check, providing a business justification, or requesting approval from designated approvers.",
      "Active assignments don't require the member to perform any action to use the role. Members assigned as active always have the privileges assigned to the role.",
      "Step 8: To specify a specific assignment duration, add a start and end date and time boxes. When finished, select Assign to create the new role assignment.",
      "Permanent assignments have no expiration date. Use this option for permanent workers who frequently need the role permissions.",
      "Time-bound assignments expire at the end of a specified period. Use this option with temporary or contract workers, for example, whose project end date and time are known.",
      { image: "q422-assignment-setting.png", alt: "Add assignments page, Setting tab: Assignment type (highlighted) with Eligible selected and Active not selected, the note Maximum allowed eligible duration is permanent, the Permanently eligible check box cleared, Assignment starts 05/01/2024 1:33:20 PM and Assignment ends 07/01/2024 1:33:20 PM (both highlighted), and the buttons Assign, Prev and Cancel." },
      "Step 9: After the role is assigned, an assignment status notification is displayed.",
      { image: "q422-notification.png", alt: "Portal notification, highlighted: Creating a new role assignment, 9:31 AM, Member: Rosie Byrne Role: Application Administrator." }
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Privileged Identity Management (PIM) separates holding a role from using it. In **ID Governance > Privileged Identity Management > Microsoft Entra roles > Roles**, you select **Add assignments**, choose the Intune Administrator role and the member Adele Vance on the **Membership** tab, and on the **Setting** tab choose the assignment type **Eligible**, either permanently eligible or between a start and end date, and then **Assign**.",
        "As an eligible member, Adele has none of the Intune Administrator permissions until she activates the role from **My roles** in PIM. Activation applies the role's settings, such as an MFA check, a justification or an approval, and the role expires after the activation period. An **Active** assignment would give her the permissions at once without any request. PIM needs Microsoft Entra ID P2 or Microsoft Entra ID Governance licenses."
      ],
      wrong: [
        ["Assignment type Active", "An active assignment grants the permissions immediately and permanently, or until its end date, without activation. The task asks for a user who must request elevation."]
      ],
      concept: "In PIM an eligible role assignment has to be activated, under the role's activation rules, before its permissions apply; an active assignment works at once.",
      takeaway: "Eligible to request elevation: PIM > Microsoft Entra roles > Roles > Add assignments > role + member > Assignment type Eligible.",
      refs: [
        ["Microsoft Learn: Assign Microsoft Entra roles in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-add-role-to-user"],
        ["Microsoft Learn: What is Microsoft Entra Privileged Identity Management?", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure"]
      ]
    }
  },
  {
    id: "Q423", source: 423, type: "simulation",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Basic",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to modify the lockout duration of the Microsoft Entra tenant to 300 seconds for failed sign-in attempts."
    ],
    solution: [
      "To modify the Microsoft Entra tenant lockout duration, sign in to the Microsoft Entra admin center (Microsoft) with an administrator account, navigate to Protection > Authentication methods > Password protection, and set the desired Lockout duration in seconds under the custom smart lockout settings.",
      "Step-by-step instructions:",
      "Step 1: Sign in: to the Microsoft Entra admin center (Microsoft).",
      "Step 2: Navigate to the Protection section.",
      "Step 3: Select Authentication methods from the left-hand menu.",
      "Step 4: Choose Password protection.",
      "Step 5: Under the Custom smart lockout settings, locate and set the Lockout duration in seconds to your preferred length. The default is 60 seconds (one minute). [Change to 300 seconds]",
      { image: "q423-password-protection.png", alt: "Microsoft Entra admin center, Authentication methods | Password protection page, reached through Protection and Authentication methods in the left menu and Password protection under Manage (all three highlighted). Custom smart lockout: Lockout threshold 10, Lockout duration in seconds 60. Custom banned passwords: Enforce custom list Yes, list contoso, fabrikam, tailwind, michigan, wolverine, harbaugh, howard. Password protection for Windows Server Active Directory: enabled (Yes), Mode Enforced. Save and Discard on the toolbar." },
      "Step 6: Save: your changes."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Smart lockout protects cloud sign-ins against password guessing: after a number of failed attempts (the **Lockout threshold**, 10 by default in the commercial cloud) the account is locked for the **Lockout duration in seconds**, 60 seconds by default, and each further lockout lasts longer. Both values are set under **Custom smart lockout** on the **Password protection** page of the authentication methods (**Protection > Authentication methods > Password protection**, in the current admin center **Entra ID > Authentication methods > Password protection**). Entering 300 in **Lockout duration in seconds** and selecting **Save** makes the first lockout last five minutes.",
        "Customizing smart lockout requires Microsoft Entra ID P1 or higher licenses. In hybrid environments that use pass-through authentication, the Microsoft Entra lockout duration should be longer than the Active Directory lockout duration and the threshold lower, so that cloud lockout happens before on-premises accounts are locked."
      ],
      wrong: [
        ["Changing the Lockout threshold", "The threshold is the number of failed sign-ins before a lockout, not how long the lockout lasts."]
      ],
      concept: "Microsoft Entra smart lockout locks an account for a set duration after a threshold of failed sign-ins, and both values can be customized on the Password protection page.",
      takeaway: "Lockout length: Authentication methods > Password protection > Lockout duration in seconds (default 60) > Save.",
      refs: [
        ["Microsoft Learn: Protect user accounts from attacks with Microsoft Entra smart lockout", "https://learn.microsoft.com/entra/identity/authentication/howto-password-smart-lockout"]
      ]
    }
  },
  {
    id: "Q424", source: 424, type: "simulation",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to ensure that a user named Lee Gu receives a notification when a user is delegated permissions for a mailbox."
    ],
    solution: [
      "To notify a user when someone is delegated mailbox permissions in Microsoft 365, you need to create a custom Alert Policy that monitors the relevant audit events. Navigate to the Security & Compliance Center (or the Microsoft 365 admin center for newer portals), expand Alerts, and select Alert Policies. Create a new policy, select the \"Added delegate mailbox permissions\" or similar activity, and specify the user to be notified within the policy configuration.",
      { heading: "Steps to Create the Alert Policy" },
      "Step 1: Log in: to your Microsoft 365 administrator account.",
      "Step 2: Navigate: to the Microsoft 365 admin center.",
      "Step 3: Select: the Security & Compliance portal, which may be located in the left navigation pane or accessible from the admin center.",
      "Step 4: Expand: Alerts and select Alert Policies.",
      "Step 5: Click: on Create Activity Alerts or the \"Create Alert Policy\" option.",
      "Step 6: Configure: the new alert policy:\nGive the alert a meaningful name, such as \"Mailbox Delegation Notification\".\nSelect the relevant operation(s): from the dropdown list. You'll be looking for activities related to mailbox delegation, such as \"Added delegate mailbox permissions\" under Exchange Mailbox Activities [Select this action].\nSpecify the user(s) to be notified: by checking the \"NotifyUser\" box or selecting their name in the user section. [Select user Lee Gu]\nAdd a description: to clarify the purpose of the alert.",
      "Step 7: Save: the alert policy.\nOnce created, the system will automatically generate notifications whenever the specified activity occurs."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Alert policies watch the unified audit log and raise an alert, with an email notification to the recipients you choose, when a matching activity occurs. Granting someone permissions to another person's mailbox is recorded as the Exchange mailbox activity **Added delegate mailbox permissions** (the `Add-MailboxPermission` operation, for example Full Access). So you create a new alert policy in the alert policies page of the Microsoft Defender portal or the Microsoft Purview portal, give it a name, severity and category, choose that activity as the condition, trigger the alert every time the activity matches, and add Lee Gu as the email recipient before turning the policy on.",
        "Alert policies rely on auditing, which is on by default in Microsoft 365. Lee Gu then receives an email each time a mailbox permission is delegated, and the alert also appears in the alerts queue."
      ],
      wrong: [
        ["Running an audit log search", "An audit search finds delegations that already happened when someone runs it. It does not notify anyone when the next delegation occurs."]
      ],
      concept: "Activity alert policies turn audited activities, such as added mailbox permissions, into alerts and email notifications for chosen recipients.",
      takeaway: "Notify a person about an audited activity: new alert policy, activity Added delegate mailbox permissions, recipient Lee Gu.",
      refs: [
        ["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/purview/alert-policies"],
        ["Microsoft Learn: Manage mailbox auditing", "https://learn.microsoft.com/purview/audit-mailboxes"]
      ]
    }
  },
  {
    id: "Q425", source: 425, type: "simulation",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to ensure that documents that contain credit card numbers and are stored on the Executive Corner Microsoft SharePoint Online site are labeled automatically with a sensitivity label named Confidential - Finance. The solution must NOT affect documents stored in any other location."
    ],
    solution: [
      "To automatically label SharePoint documents containing credit card numbers, first, create a sensitivity label in the Microsoft Purview compliance portal and define its settings (like encryption or visual markings) [already done]. Then, configure an auto-labeling policy to identify sensitive information (using a built-in sensitive information type for credit card numbers) and apply the sensitivity label to the documents in your SharePoint site. Run the policy in simulation mode to test it, then deploy it to activate automatic labeling of sensitive content in your SharePoint site.",
      "Step 1: Sign in to the Microsoft Purview compliance portal with your administrator credentials.",
      "Step 2: In the left-hand menu, go to Information Protection > Policies > Auto-labeling policies.",
      "Step 3: Select Create policy to start the process.",
      "Step 4: Define Policy Settings:\nChoose Locations: Select the SharePoint sites, OneDrive accounts, or Microsoft 365 groups where you want the policy to apply. [Select the Executive Corner Sharepoint site]",
      "Configure Conditions: In the \"Info to protect\" or rule configuration screen, you will specify what to look for. This can be:\n*-> Sensitive information types: Predefined or custom classifications like credit card numbers. [Select Credit card numbers]\nKeywords or searchable properties: A specific term or property like \"Company Invoice\".",
      "Select the Sensitivity Label: From the dropdown menu, choose the sensitivity label. [Select the Confidential - Finance sensitivity label]",
      "Step 5: Run in Simulation Mode (Optional but Recommended): [Skip]\nBefore turning the policy on, you can run it in simulation mode to see which items would be labeled without actually applying the label. This helps ensure the policy is configured correctly.",
      "Step 6: Turn on the Policy:\nOnce you are confident in the policy's configuration, turn it on to begin automatically applying the sensitivity label to content that meets the specified conditions."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Documents that are already stored in SharePoint are labeled by the service with an **auto-labeling policy** (**Information Protection > Policies > Auto-labeling policies**), not by the Office apps. In the policy you define the information to look for, here the built-in **Credit Card Number** sensitive information type (a custom policy or the financial template), and choose the locations: only **SharePoint sites**, edited to include only the Executive Corner site, with Exchange and OneDrive left off. The rule sets the label to apply, Confidential - Finance.",
        "A new auto-labeling policy can run in simulation first, which shows the files that would be labeled without labeling them; files are labeled once the policy is turned on. Auto-labeling of SharePoint and OneDrive files requires that sensitivity labels for Office files in SharePoint and OneDrive are enabled. Because the policy's only location is the Executive Corner site, documents elsewhere are not touched."
      ],
      wrong: [
        ["Auto-labeling settings in the label itself", "Auto-labeling configured in the label applies or recommends the label in the Office apps while users work on a document, wherever that document is. It does not label the documents already stored in one site."],
        ["All SharePoint sites as the location", "Leaving the location at all sites would label documents in other sites as well, which the task rules out."]
      ],
      concept: "Service-side auto-labeling policies apply a sensitivity label to content at rest in chosen SharePoint sites, OneDrive accounts or Exchange when it matches sensitive information types.",
      takeaway: "Label files at rest in one site: auto-labeling policy, location SharePoint with only that site, condition Credit Card Number, label Confidential - Finance, then turn it on.",
      refs: [
        ["Microsoft Learn: Apply a sensitivity label to content automatically", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"]
      ]
    }
  },
  {
    id: "Q426", source: 426, type: "simulation",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to ensure that all email messages sent to a user named Adele Vance are retained for five years, and then automatically deleted. The solution must NOT affect data stored in other locations."
    ],
    solution: [
      "To retain emails in Microsoft 365 for years, you must create a retention policy within the Microsoft Purview portal. Navigate to Data Lifecycle Management > Policies > Retention policies, then click + New retention policy. You will then define the policy's name, scope, and most importantly, the retention period, which can be set to a specific duration (e.g., 7 or 10 years) or permanently. The policy will ensure that items are kept for the specified duration, even if a user deletes them from their mailbox.",
      { heading: "Steps to Create a Retention Policy" },
      "Step 1: Sign in to the Microsoft Purview portal.",
      "Step 2: Go to Data Lifecycle Management: and select Policies, then Retention policies.",
      "Step 3: Create a New Policy: by clicking the + New retention policy button.",
      "Step 4: Choose the Scope: Select whether the policy applies to a static list of users, groups, or sites, or use an adaptive policy scope for automatic application based on properties like department or role.\n[Select user Adele Vance]",
      "Step 5: Name and Describe: your policy.",
      "Step 6: Configure Retention: Select Exchange as a location for email retention.",
      "Step 7: Define the Retention Period:\nChoose the desired duration. [Select 5 years]\nSet the start of the retention period (e.g., based on creation or last modification date).\nDecide what happens after the retention period: either automatically delete the items or let them remain.\n[Select automatic delete]",
      "Step 8: Review and Submit: to create the policy."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "A retention policy applies retention settings to whole locations. In **Data lifecycle management > Retention policies > New retention policy** you name the policy, choose a **Static** scope, turn on only the **Exchange mailboxes** location and edit its included recipients so that it covers only Adele Vance's mailbox. The retention settings are **Retain items for a specific period** of 5 years, starting when items were created, and **At end of the retention period: Delete items automatically**.",
        "Messages in Adele's mailbox are then kept for five years even if she deletes them, because deleted items are preserved in the Recoverable Items folder, and they are removed automatically when the five years have passed. SharePoint, OneDrive, Teams and every other mailbox are outside the policy, so no other data is affected."
      ],
      wrong: [
        ["At end of the retention period: Do nothing", "Messages would be kept for five years and then simply stay in the mailbox. The task requires automatic deletion."],
        ["Exchange location set to all recipients, or other locations on", "The policy would then retain and delete content in other mailboxes or services, which the task does not allow."]
      ],
      concept: "Retention policies combine a scope (locations and included users or sites) with retention settings: how long to keep content and what happens at the end of the period.",
      takeaway: "Keep one user's mail for N years then delete: retention policy, static scope, Exchange mailboxes = that user, retain 5 years, then delete automatically.",
      refs: [
        ["Microsoft Learn: Create and configure retention policies", "https://learn.microsoft.com/purview/create-retention-policies"],
        ["Microsoft Learn: Common settings for retention policies and retention label policies", "https://learn.microsoft.com/purview/retention-settings"]
      ]
    }
  },
  {
    id: "Q427", source: 427, type: "simulation",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to ensure that users cannot access files that contain credit card numbers and are stored on the Contoso Landings Microsoft SharePoint Online site. The solution must NOT affect files stored in other locations."
    ],
    solution: [
      "To protect documents with credit card numbers on a specific SharePoint site using Microsoft Purview, you need to create a Data Loss Prevention (DLP) policy that identifies sensitive information like credit card numbers and applies specific actions, such as blocking sharing or applying a sensitivity label. You'll define the rule's conditions (content contains credit card number) and actions in the Microsoft Purview compliance portal, then set the policy to apply to the relevant SharePoint site location and turn it on.",
      { heading: "Steps to Create a Purview DLP Policy" },
      "Step 1: Access the Microsoft Purview Compliance Portal: Go to the compliance portal and navigate to Solutions > Data loss prevention.",
      "Step 2: Create a New Policy: Select Policies > Create policy.",
      "Step 3: Choose a Policy Type: Under Categories, select Custom (or a template that suits your needs) and click Next.",
      "Step 4: Name the Policy: Give your policy a clear name and click Next.",
      "Step 5: Assign Admin Units (Optional): Assign the policy to specific admin units or groups if needed.",
      "Step 6: Define Locations: On the \"Choose where to apply the policy\" page, select the specific SharePoint sites you want to protect. [Select the Executive Corner Microsoft SharePoint Online site]",
      "Step 7: Create Advanced DLP Rules: Select Create or customize advanced DLP rules and click",
      "Step 8: Set Conditions:\nIn the \"Conditions\" section, click Add condition > Content contains.\nClick the Add dropdown under Sensitive info types.\nSelect a sensitive information type that matches credit card numbers.\nClick Add and then Save your changes.",
      "Step 9: Define Actions: Specify what actions should happen when the policy is triggered, such as blocking sharing, notifying users, or applying a sensitivity label to the document. [Select blocking]",
      "Step 10: Set Policy Mode: Select Turn the policy on immediately [Select this] or configure a different mode.",
      "Step 11: Finish and Create:",
      "Click Next to review your settings and then Finish to create the policy."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Blocking access to files at rest is a DLP action. In **Data loss prevention > Policies > Create policy** you choose a custom policy, name it, keep the full directory as the admin unit and, on the locations page, turn on only **SharePoint sites**, edited so that it includes only the Contoso Landings site, the site the task names. With **Create or customize advanced DLP rules** you add a rule whose condition is **Content contains > Sensitive info types > Credit Card Number**.",
        "The action is **Restrict access or encrypt the content in Microsoft 365 locations** with **Block everyone**: for a matching file in SharePoint, only the file's owner, the last person who modified it and the site admins keep access, and everyone else is blocked. Turning the policy on immediately enforces it. Because the only location is that one site, files elsewhere are not affected."
      ],
      wrong: [
        ["Block only people outside your organization", "This option still lets every internal user open the files, while the task says users must not be able to access them."],
        ["Running the policy in simulation mode", "Simulation only reports what the policy would do and blocks nothing until the policy is turned on."]
      ],
      concept: "A DLP policy scoped to a SharePoint site can detect sensitive information types and restrict access to the matching files.",
      takeaway: "Block access to credit card files in one site: custom DLP policy, location = that site only, Content contains Credit Card Number, Restrict access > Block everyone, policy on.",
      refs: [
        ["Microsoft Learn: Create and deploy a data loss prevention policy", "https://learn.microsoft.com/purview/dlp-create-deploy-policy"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q428", source: 428, type: "simulation",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "Use the following login credentials as needed:",
      { list: [
        "To enter your username, place your cursor in the Sign in box and select the username below.",
        "To enter your password, place your cursor in the Enter password box and select the password below.",
        "Virtual Machine Username: Admin",
        "Virtual Machine Password: A1b2C3d4",
        "Microsoft 365 Username: [email protected]",
        "Microsoft 365 Password: AbCd1234"
      ] },
      "If the Microsoft Edge browser or Microsoft 365 portal does not load successfully, select the Microsoft Edge browser icon from the task bar, type the URL \"https://admin.microsoft.com\", and press Enter.",
      { heading: "Task" },
      "You need to prevent a user named Adele Vance from sending more than 10 email messages per hour to external recipients."
    ],
    solution: [
      { heading: "Configure outbound spam policies for cloud mailboxes" },
      "To prevent a user from sending too many emails to external recipients in Microsoft 365, you should adjust the outbound spam policy in the Microsoft 365 Defender portal, specifically the \"Message limit\" setting within the \"Edit protection settings\" section. You can set a specific limit for messages sent to external recipients over a 24-hour period and choose the action to take when the limit is exceeded, such as blocking the user's messages.",
      { heading: "Steps to Configure the Outbound Spam Policy" },
      "Step 1: Sign in: to the Microsoft 365 Defender portal at https://security.microsoft.com.",
      "Step 2: Go to Email & Collaboration > Policies & Rules > Threat policies > Anti-spam in the Policies section. Or, to go directly to the Anti-spam policies page, use https://security.microsoft.com/antispam",
      "Step 3: Locate and select: the \"Anti-spam Outbound spam policy (default)\".",
      "Step 4: On the Anti-spam policies page, select Create policy and then select Outbound from the dropdown list to start the new outbound spam policy wizard.",
      "Step 5: On the Name your policy page, configure these settings:\nName: Enter a unique, descriptive name for the policy.\nDescription: Enter an optional description for the policy.",
      "Step 6: When you're finished on the Name your policy page, select Next.",
      "Step 7: On the Users, groups, and domains page, identify the internal senders that the policy applies to (sender conditions):",
      "Users: The specified mailboxes, mail users, or mail contacts. [Select User Adele Vance]\nGroups: [Skip]",
      "Step 8: On the Protection settings page, configure the following settings:\nMessage limits sections: The settings in this section configure the limits for outbound email messages from Exchange Online mailboxes:",
      "*-> Set an external message limit: The maximum number of external recipients per hour. [Set external message limit to 10]\nSet an internal message limit: The maximum number of internal recipients per hour.\nSet a daily message limit: The maximum total number of recipients per day.",
      "A valid value is 0 to 10000. The default value is 0, which means the service defaults are used.",
      "Step 9: On the Review page, review your settings. You can select Edit in each section to modify the settings within the section. Or you can select Back or the specific page in the wizard.",
      "Step 10: When you're finished on the Review page, select Create.",
      "Step 11: On the New anti-spam policy created page, you can select the links to view the policy, view outbound spam policies, and learn more about outbound spam policies. [Skip]",
      "Step 12: When you're finished on the New anti-spam policy created page, select Done.\nBack on the Anti-spam policies page, the new policy is listed."
    ],
    answer: ["can"],
    explanation: {
      correct: [
        "Sending limits for Exchange Online mailboxes are set in outbound spam policies, under **Email & collaboration > Policies & rules > Threat policies > Anti-spam**. A custom policy created with **Create policy > Outbound** applies only to the senders you choose, here the user Adele Vance, and it takes precedence over the default outbound policy, which applies to everyone. On the **Protection settings** page, **Set an external message limit** is the maximum number of external recipients per hour; setting it to 10 caps her at 10 messages an hour to single external recipients.",
        "**Restriction placed on users who reach the message limit** decides what happens when she exceeds it; the default is to restrict the user from sending mail until the following day. Editing the default policy instead would change the limit for every user in the organization."
      ],
      wrong: [
        ["Changing the default outbound spam policy", "The default policy applies to all users, so lowering its external limit to 10 would restrict everyone, not only Adele Vance."],
        ["Set a daily message limit", "The daily limit counts all recipients over a day, internal and external. The task is about external recipients per hour."]
      ],
      concept: "Outbound spam policies in Exchange Online Protection set per-sender limits for external and internal recipients per hour and for all recipients per day, with an action when a limit is reached.",
      takeaway: "Limit one user's external mail per hour: custom outbound anti-spam policy for that user, external message limit 10.",
      refs: [
        ["Microsoft Learn: Configure outbound spam policies in EOP", "https://learn.microsoft.com/defender-office-365/outbound-spam-policies-configure"],
        ["Microsoft Learn: Outbound spam protection in EOP", "https://learn.microsoft.com/defender-office-365/outbound-spam-protection-about"]
      ]
    }
  },
  {
    id: "Q429", source: 429, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains a user named User1.",
      "You need to ensure that User1 can gather and summarize a custom set of data from signals in the Microsoft Defender XDR environment. The solution must NOT require that User1 have KQL knowledge.",
      "What should you do in Microsoft Defender XDR?"
    ],
    options: [
      { key: "A", text: "From Advanced hunting, create a new query in the query editor." },
      { key: "B", text: "From Cloud Discovery, create a report." },
      { key: "C", text: "From API Explorer, create a query." },
      { key: "D", text: "From Advanced hunting, create a new query in the query builder." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Advanced hunting queries the raw signals that Defender XDR collects from devices, email, identities and cloud apps. It offers two ways to write a query. The **query builder** (**Create new > Query in builder**, also called guided mode) lets you choose the data domain to hunt in, such as endpoints, email and collaboration, or apps and identities, and build the query from filters and AND/OR conditions in drop-down menus. Microsoft describes it as the way to craft hunting queries without knowing Kusto Query Language (KQL) or the data schema, for analysts of every experience level who want to filter the data of the last 30 days, expand investigations or analyze threat data. That meets the requirement that User1 gathers a custom data set without KQL knowledge."
      ],
      wrong: [
        ["A", "The query editor, or advanced mode, is where you type the query in KQL, so it requires the KQL knowledge that User1 should not need."],
        ["B", "Cloud Discovery analyzes traffic logs to show which cloud apps are used in the organization. It does not query the Defender XDR signals."],
        ["C", "API Explorer sends requests to the Defender APIs. Building them requires API knowledge, and a hunting query sent through the API is still written in KQL."]
      ],
      concept: "Advanced hunting has a KQL query editor (advanced mode) and a query builder (guided mode) for building queries without KQL.",
      takeaway: "Hunting without KQL: Advanced hunting > query builder (guided mode).",
      refs: [
        ["Microsoft Learn: Build queries using guided mode in Microsoft Defender advanced hunting", "https://learn.microsoft.com/defender-xdr/advanced-hunting-query-builder"],
        ["Microsoft Learn: Overview of advanced hunting", "https://learn.microsoft.com/defender-xdr/advanced-hunting-overview"]
      ]
    }
  },
  {
    id: "Q430", source: 430, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "From the Microsoft Entra authentication methods policy, you configure the Microsoft Authenticator on companion applications settings as shown in the following exhibit.",
      { image: "q430-authenticator-companion-apps.png", alt: "Microsoft Authenticator on companion applications settings. Note: If the feature status is set to Microsoft-managed, it will be enabled by Microsoft at an appropriate time after the preview. Status: Enabled. Target: on the Include tab, All users is selected (Select group is not selected)." },
      "You need to ensure that users can complete the authentication process from their mobile device.",
      "What should each user install on their device?"
    ],
    options: [
      { key: "A", text: "Microsoft Teams" },
      { key: "B", text: "Microsoft 365 Copilot" },
      { key: "C", text: "Microsoft Outlook" },
      { key: "D", text: "Company Portal" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The reference answer is D.",
        "The exhibit shows the **Microsoft Authenticator on companion applications** setting from the Configure tab of the Microsoft Authenticator policy, with the status **Enabled** for **All users**. This setting controls Authenticator Lite, which lets users approve MFA push notifications, or copy a time-based one-time passcode, inside another Microsoft app instead of the standalone Authenticator app. It is available to users who are enabled for Microsoft Authenticator, and Microsoft documents it in Outlook for iOS and Android.",
        "Company Portal is the Intune app that users install on a phone to enroll it, which registers the device with Microsoft Entra ID, and to get company apps. On Android it also acts as an authentication broker for single sign-on and device-based Conditional Access."
      ],
      wrong: [
        ["A", "Teams is a collaboration app. It does not host Authenticator Lite and does not enroll or register the device."],
        ["B", "The Microsoft 365 Copilot app is an AI assistant and plays no part in completing MFA."],
        ["C", "Outlook for iOS and Android is the app that Microsoft documents for Authenticator Lite. The reference answer, however, is Company Portal."]
      ],
      concept: "The Microsoft Authenticator on companion applications setting (Authenticator Lite) lets users complete MFA from another Microsoft mobile app instead of the standalone Authenticator app.",
      takeaway: "Know the mobile apps: Authenticator for MFA, Authenticator Lite inside Outlook mobile, Company Portal for Intune enrollment. The key for this question is Company Portal.",
      refs: [
        ["Microsoft Learn: Enable Authenticator Lite for Outlook mobile", "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-authenticator-lite"],
        ["Microsoft Learn: Microsoft Authenticator authentication method", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-authenticator-app"]
      ]
    }
  },
  {
    id: "Q431", source: 431, type: "yesno",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two sensitivity labels named Label1 and Label2. The subscription contains Windows device named Device1 that is onboarded to Microsoft Purview. Device1 contains the files shown in the following table.",
      { table: { head: ["Name", "Location", "Sensitivity label"], rows: [
        ["File1.docx", "C:\\Temp\\", "Label1"],
        ["File2.docx", "C:\\Temp\\Folder1\\", "Label2"],
        ["File3.docx", "C:\\Temp\\Folder2\\", "Label1"]
      ] } },
      "You create a data loss prevention (DLP) policy named Policy1 that has the following configurations:",
      { list: [
        "Locations:\nDevices: All users and groups",
        "Rules:\nName: Rule1\nConditions: Content contains, Sensitivity labels: Label1\nActions: Audit or restrict activities on devices, Print: Block"
      ] },
      "From the Data loss prevention settings, you configure a file path exclusion for C:\\Temp\\.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "A user on Device1 can print File1.docx." },
      { text: "A user on Device1 can print File2.docx." },
      { text: "A user on Device1 can print File3.docx." }
    ],
    answer: [true, true, false],
    explanation: {
      correct: [
        "Endpoint DLP file path exclusions are read according to how the path ends. A path that ends with a backslash, such as `C:\\Temp\\`, excludes only the files directly in that folder. A path that ends with `\\*` excludes only the files in its subfolders, and a path with neither, such as `C:\\Temp`, excludes the folder and all its subfolders. Files in an excluded location are not audited and no DLP policy is enforced on them.",
        "**File1.docx** is directly in C:\\Temp\\, so it is excluded and Rule1 never applies, although it has Label1: it can be printed (Yes). **File2.docx** is in a subfolder and so is not excluded, but it has Label2 and Rule1 matches only Label1: it can be printed (Yes). **File3.docx** is in C:\\Temp\\Folder2\\, a subfolder that the exclusion does not cover, and it has Label1, so Rule1's action **Print: Block** stops the print (No)."
      ],
      wrong: [
        ["Statement 1 — No", "File1 has Label1, but it sits directly in C:\\Temp\\, the folder that the exclusion covers, so Policy1 is not enforced on it."],
        ["Statement 2 — No", "Rule1's condition is Label1 only. File2 has Label2, so no rule blocks its printing, whatever its folder."],
        ["Statement 3 — Yes", "An exclusion that ends with a backslash does not extend to subfolders. File3 in Folder2 is still monitored, and its Label1 triggers the print block."]
      ],
      concept: "Endpoint DLP file path exclusions remove locations from monitoring and enforcement, and the trailing characters of the path decide whether subfolders are included.",
      takeaway: "`C:\\Temp\\` = files directly in the folder; `C:\\Temp\\*` = subfolders only; `C:\\Temp` = folder and all subfolders.",
      logic: "First check the exclusion (folder level), then the rule condition (label). Only a file that is outside the exclusion and has Label1 is blocked.",
      refs: [
        ["Microsoft Learn: Configure endpoint DLP settings", "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"],
        ["Microsoft Learn: Learn about Endpoint data loss prevention", "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"]
      ]
    }
  },
  {
    id: "Q432", source: 432, type: "dropdown",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your company has a hybrid deployment of Microsoft 365.",
      "An on-premises user named User1 is synced to the Microsoft Entra tenant.",
      "Microsoft Entra Connect Sync is configured as shown in the following exhibit.",
      { image: "q432-entra-connect-review.png", alt: "Microsoft Entra Connect Sync wizard, Review your solution page. Device writeback: Disabled. Directory extension attribute sync: Disabled. Exchange hybrid deployment: Disabled. Group writeback: Disabled. Password hash synchronization: Enabled. Password writeback: Disabled. User writeback: Disabled. Auto upgrade: Enabled. Exchange mail public folders: Disabled. SQL Server name: (localdb). SQL Server instance name: .\\ADSync2019." },
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
        "the password hash will be synchronized to Microsoft Entra ID",
        "a new randomly generated password will be assigned to User1",
        "the password hash in Microsoft Entra ID will be unchanged"
      ] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "The exhibit shows that Microsoft Entra Connect Sync synchronizes password hashes (**Password hash synchronization: Enabled**) and does not write passwords back (**Password writeback: Disabled**). For a synchronized user, Active Directory remains the source of authority for the password.",
        "**Box 1:** The reference answer is **can change her password from the Microsoft 365 admin center only**. Self-service password reset for a synchronized user writes the new password back to Active Directory, so without password writeback it is not available to User1, which rules out the SSPR option. Microsoft lists a password reset by an administrator in the Microsoft 365 admin center among the operations that are never written back to Active Directory, even when writeback is enabled; a password set there changes only the copy in Microsoft Entra ID, until the next change in Active Directory is synchronized over it.",
        "**Box 2:** With password hash synchronization enabled, Microsoft Entra Connect picks up a password change in Active Directory and synchronizes the hash of the new password to Microsoft Entra ID, normally within about two minutes, independently of the regular sync cycle. User1 then signs in to cloud services with the new password."
      ],
      wrong: [
        ["cannot change her password from any Microsoft portals", "With password writeback disabled, no password change made in the cloud reaches Active Directory. The reference answer still treats the Microsoft 365 admin center as the place where User1's cloud password can be set."],
        ["can change her password by using self-service password reset feature only", "SSPR for a synchronized user needs password writeback, which the exhibit shows as Disabled."],
        ["a new randomly generated password will be assigned to User1", "Nothing generates a random password. Password hash synchronization carries the hash of the password that was actually set in Active Directory."],
        ["the password hash in Microsoft Entra ID will be unchanged", "That would describe a configuration without password hash synchronization. The exhibit shows it Enabled, so the new hash is synchronized."]
      ],
      concept: "Password hash synchronization copies password changes from Active Directory to Microsoft Entra ID, while password writeback is needed for cloud password changes and SSPR to reach Active Directory.",
      takeaway: "PHS on, writeback off: on-premises changes flow to the cloud, cloud changes and SSPR do not flow back.",
      refs: [
        ["Microsoft Learn: On-premises password writeback with self-service password reset", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"],
        ["Microsoft Learn: Implement password hash synchronization with Microsoft Entra Connect Sync", "https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-password-hash-synchronization"]
      ]
    }
  }
);
