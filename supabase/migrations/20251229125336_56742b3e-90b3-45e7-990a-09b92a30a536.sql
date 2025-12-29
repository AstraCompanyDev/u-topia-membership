-- Fix profiles table: require authentication to view profiles
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

CREATE POLICY "Profiles are viewable by authenticated users"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

-- Fix contact_submissions: require authentication to submit
DROP POLICY IF EXISTS "Anyone can create contact submissions" ON public.contact_submissions;

CREATE POLICY "Authenticated users can create contact submissions"
ON public.contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);