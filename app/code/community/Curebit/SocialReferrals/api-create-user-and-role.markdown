Setting up an API User
--------------------------------------------------
If you are using the automatic coupon creation features of the Curebit SocialReferrals extension, you'll need to setup an API user.  This API user will allow the Curebit system to automatically create coupon codes for your potential customers.

To setup the API user, simply

### Log into the Magento Admin Console

### Navigate to <code>System -&gt; Web Services -&gt; Users </code>

### Click Add New User

### Enter User Info

Each API user is identified by a username and API Key (password)

### Click on User Role, Select an Appropriate Role

Select an appropriate role for your user.  See below for creating an API role with access restricted to the Curebit SocialReferrals features


Setting up an Appropriate Api User Role
--------------------------------------------------
A role allows you to restrict which ACL protected system functions a particular API User is allowed to access.  This is **separate** from the standard admin console ACL lists.

### Navigate to <code>System -&gt; Web Services -&gt; Roles </code>

### Click Add New Role

### Enter a role name

This name will be used to identify your role in the user admin.  If you're unsure what to enter, simply use "Curebit SocialReferrals"

### Click on Role Resources

### Select "Custom" from the Resource Access list

### Select "Curebit ACL" from the tree view

You may also assign other rights to the ACL role, if desired

### Click on Save Role

You now have a new ACL role.  If you created your user first, don't forget to return to <code>System -&gt; Web Services -&gt; Users </code> and assign this role to your user.