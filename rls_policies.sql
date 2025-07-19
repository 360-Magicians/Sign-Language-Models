-- Enable Row Level Security on the deaf_creators_platform table
ALTER TABLE deaf_creators_platform ENABLE ROW LEVEL SECURITY;

-- Policy 1: Creator Access Policy
-- This policy allows creators to view, update, and delete only their own content
CREATE POLICY creator_access_policy ON deaf_creators_platform
    USING (creator_id = auth.uid())
    WITH CHECK (creator_id = auth.uid());

-- Policy 2: Administrator Full Access Policy
-- This policy grants full access to users with the 'admin' role in the auth.users table
CREATE POLICY admin_access_policy ON deaf_creators_platform
    USING (EXISTS (
        SELECT 1 FROM auth.users
        WHERE auth.users.id = auth.uid() AND auth.users.role = 'admin'
    ));

-- Policy 3: Public Read-Only Access for Published Content
-- This policy allows public users to view only published content
CREATE POLICY public_view_policy ON deaf_creators_platform
    FOR SELECT
    USING (is_published = true);

-- Policy 4: Moderator Review Access
-- This policy allows moderators to view all content for moderation purposes
CREATE POLICY moderator_review_policy ON deaf_creators_platform
    FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM auth.users
        WHERE auth.users.id = auth.uid() AND auth.users.role = 'moderator'
    ));

-- Policy 5: Content Collaborator Access
-- This policy allows collaborators to view and update content they're collaborating on
CREATE POLICY collaborator_access_policy ON deaf_creators_platform
    FOR SELECT
    USING (collaborator_ids @> ARRAY[auth.uid()::text]);

CREATE POLICY collaborator_update_policy ON deaf_creators_platform
    FOR UPDATE
    USING (collaborator_ids @> ARRAY[auth.uid()::text])
    WITH CHECK (collaborator_ids @> ARRAY[auth.uid()::text]);
