-- Tighten access to contact_submissions (contains emails + private messages)

-- Ensure RLS is enabled
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Remove any overly-broad policies (safe no-ops if they don't exist)
DROP POLICY IF EXISTS "Contact submissions are viewable by authenticated users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can create contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Public contact submissions" ON public.contact_submissions;

-- Owner-only read
DROP POLICY IF EXISTS "Users can view own contact submissions" ON public.contact_submissions;
CREATE POLICY "Users can view own contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Authenticated-only create, must be owned by requester
DROP POLICY IF EXISTS "Authenticated users can create contact submissions" ON public.contact_submissions;
CREATE POLICY "Authenticated users can create contact submissions"
ON public.contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- (Optional hardening) explicitly disallow updates/deletes for non-owners
-- Not creating UPDATE/DELETE policies means they're denied by default under RLS.
